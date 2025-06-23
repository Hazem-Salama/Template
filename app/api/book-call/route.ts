// app/api/book-call/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { CallBookingService, NewsletterService } from '@/lib/db-helpers'
import { emailService } from '@/lib/email-service'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  projectType?: string
  budget?: string
  timeline?: string
  message: string
  preferredDate: string
  preferredTime: string
  timeZone: string
  hearAboutUs?: string
  urgency: string
  newsletter: boolean
}

interface CallInfo {
  title: string
  duration: string
  subtitle: string
}

interface RequestData {
  formData: FormData
  callType: string
  callInfo: CallInfo
  submittedAt?: string
}

export async function POST(request: NextRequest) {
  try {
    const requestData: RequestData = await request.json()
    const { formData, callType, callInfo } = requestData

    if (!formData || !callType || !callInfo) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 })
    }

    // Validate required form fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message', 'preferredDate', 'preferredTime']
    const missingFields = requiredFields.filter(field => !formData[field as keyof FormData])
    
    if (missingFields.length > 0) {
      return NextResponse.json({
        success: false,
        error: 'Missing required form fields',
        missingFields
      }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid email format'
      }, { status: 400 })
    }

    // Validate phone number format
    const phoneRegex = /^[\+]?[1-9][\d]{9,15}$/
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      return NextResponse.json({
        success: false,
        error: 'Invalid phone number format'
      }, { status: 400 })
    }

    // Validate date is in the future
    const selectedDate = new Date(formData.preferredDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (selectedDate < today) {
      return NextResponse.json({
        success: false,
        error: 'Preferred date must be in the future'
      }, { status: 400 })
    }

    // Prepare booking data
    const bookingData = {
      formData: {
        ...formData,
        preferredDate: selectedDate,
        email: formData.email.toLowerCase(),
        urgency: formData.urgency || 'normal'
      },
      callType,
      callInfo,
      submittedAt: new Date(),
      source: 'agency_website'
    }

    // Save booking to database
    const savedBooking = await CallBookingService.create(bookingData)

    // Prepare email data
    const emailData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      callType,
      callInfo,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      timeZone: formData.timeZone,
      referenceId: savedBooking.referenceId,
      message: formData.message,
      company: formData.company
    }

    // Send confirmation email (don't fail if email fails)
    let emailSent = false
    try {
      emailSent = await emailService.sendBookingConfirmation(emailData)
    } catch (emailError) {
      // Continue - don't fail the booking if email fails
    }

    // Handle newsletter subscription
    if (formData.newsletter) {
      try {
        await NewsletterService.subscribe(
          formData.email,
          'agency_booking',
          formData.firstName,
          formData.lastName
        )
      } catch (newsletterError) {
        // Continue - don't fail the booking if newsletter fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your call has been booked successfully!',
      emailSent,
      referenceId: savedBooking.referenceId
    })

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    
    // Handle specific MongoDB errors
    if (errorMessage.includes('E11000') && errorMessage.includes('referenceId')) {
      return NextResponse.json({
        success: false,
        error: 'Booking reference conflict'
      }, { status: 409 })
    }

    // Handle validation errors
    if (errorMessage.includes('validation') || errorMessage.includes('required')) {
      return NextResponse.json({
        success: false,
        error: 'Validation error'
      }, { status: 400 })
    }

    // Handle database connection errors
    if (errorMessage.includes('connection') || errorMessage.includes('connect')) {
      return NextResponse.json({
        success: false,
        error: 'Database connection error'
      }, { status: 503 })
    }

    // Generic error response
    return NextResponse.json({
      success: false,
      error: 'Booking creation failed'
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const referenceId = searchParams.get('ref')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    if (referenceId) {
      const booking = await CallBookingService.findByReferenceId(referenceId)
      
      if (!booking) {
        return NextResponse.json({
          success: false,
          error: 'Booking not found'
        }, { status: 404 })
      }
      
      return NextResponse.json({
        success: true,
        booking: {
          id: String(booking._id),
          referenceId: booking.referenceId,
          callType: booking.callType,
          callInfo: booking.callInfo,
          status: booking.status,
          submittedAt: booking.submittedAt,
          formData: {
            firstName: booking.formData.firstName,
            lastName: booking.formData.lastName,
            email: booking.formData.email,
            company: booking.formData.company,
            preferredDate: booking.formData.preferredDate,
            preferredTime: booking.formData.preferredTime,
            timeZone: booking.formData.timeZone
          }
        }
      })
    } else {
      const result = await CallBookingService.getAll({}, page, limit)
      
      return NextResponse.json({
        success: true,
        bookings: result.bookings.map(booking => ({
          id: String(booking._id),
          referenceId: booking.referenceId,
          callType: booking.callType,
          status: booking.status,
          submittedAt: booking.submittedAt,
          formData: {
            firstName: booking.formData.firstName,
            lastName: booking.formData.lastName,
            email: booking.formData.email,
            company: booking.formData.company
          }
        })),
        pagination: result.pagination
      })
    }

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve booking'
    }, { status: 500 })
  }
}