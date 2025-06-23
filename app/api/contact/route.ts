// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { ContactMessageService, NewsletterService } from '@/lib/db-helpers'
import { sendCompanyNotification, sendUserConfirmation } from '@/lib/contact-email-utils'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  projectType?: string
  budget?: string
  timeline?: string
  message: string
  hearAboutUs?: string
  priority: string
  newsletter: boolean
}

interface ContactRequestData {
  formData: ContactFormData
  method: 'general-inquiry' | 'project-quote' | 'support' | 'partnership'
  source?: string
}

export async function POST(request: NextRequest) {
  try {
    const requestData: ContactRequestData = await request.json()
    const { formData, method } = requestData

    if (!formData || !method) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 })
    }

    // Validate required form fields
    const requiredFields = ['firstName', 'lastName', 'email', 'message']
    const missingFields = requiredFields.filter(field => !formData[field as keyof ContactFormData])
    
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

    // Validate phone number format if provided
    if (formData.phone) {
      const phoneRegex = /^[\+]?[1-9][\d]{9,15}$/
      if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
        return NextResponse.json({
          success: false,
          error: 'Invalid phone number format'
        }, { status: 400 })
      }
    }

    // Prepare contact data
    const contactData = {
      formData: {
        ...formData,
        email: formData.email.toLowerCase(),
        priority: formData.priority || 'normal'
      },
      method,
      source: 'agency_website'
    }

    // Save to database
    const savedMessage = await ContactMessageService.create(contactData)

    // Send notification email to company
    let emailSent = false
    try {
      emailSent = await sendCompanyNotification(savedMessage)
    } catch (emailError) {
      // Continue - don't fail if email fails
    }

    // Send confirmation email to user
    let userEmailSent = false
    try {
      userEmailSent = await sendUserConfirmation(savedMessage)
    } catch (emailError) {
      // Continue - don't fail if email fails
    }

    // Handle newsletter subscription
    if (formData.newsletter) {
      try {
        await NewsletterService.subscribe(
          formData.email,
          'agency_contact',
          formData.firstName,
          formData.lastName
        )
      } catch (newsletterError) {
        // Continue - don't fail if newsletter fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
      emailSent: emailSent && userEmailSent,
      contact: {
        id: String(savedMessage._id),
        referenceId: savedMessage.referenceId,
        method: savedMessage.method,
        status: savedMessage.status,
        submittedAt: savedMessage.submittedAt
      }
    })

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    
    // Handle specific MongoDB errors
    if (errorMessage.includes('E11000') && errorMessage.includes('referenceId')) {
      return NextResponse.json({
        success: false,
        error: 'Contact reference conflict'
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
      error: 'Message sending failed'
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const referenceId = searchParams.get('ref')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const method = searchParams.get('method') as 'general-inquiry' | 'project-quote' | 'support' | 'partnership' | null

    if (referenceId) {
      const message = await ContactMessageService.findByReferenceId(referenceId)
      
      if (!message) {
        return NextResponse.json({
          success: false,
          error: 'Message not found'
        }, { status: 404 })
      }
      
      return NextResponse.json({
        success: true,
        message: {
          id: String(message._id),
          referenceId: message.referenceId,
          method: message.method,
          status: message.status,
          submittedAt: message.submittedAt,
          formData: {
            firstName: message.formData.firstName,
            lastName: message.formData.lastName,
            email: message.formData.email,
            company: message.formData.company,
            projectType: message.formData.projectType,
            message: message.formData.message
          }
        }
      })
    } else {
      const filters: Record<string, any> = {}
      if (method) filters.method = method
      
      const result = await ContactMessageService.getAll(filters, page, limit)
      
      return NextResponse.json({
        success: true,
        messages: result.messages.map(message => ({
          id: String(message._id),
          referenceId: message.referenceId,
          method: message.method,
          status: message.status,
          submittedAt: message.submittedAt,
          formData: {
            firstName: message.formData.firstName,
            lastName: message.formData.lastName,
            email: message.formData.email,
            company: message.formData.company,
            projectType: message.formData.projectType
          }
        })),
        pagination: result.pagination
      })
    }

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve message'
    }, { status: 500 })
  }
}