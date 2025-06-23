// app/api/admin/bookings/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { CallBookingService } from '@/lib/db-helpers'
import { verifyToken } from '@/lib/admin-auth'
import { sendMeetingApproval } from '@/lib/admin-email-utils'

export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    const token = request.cookies.get('admin-token')?.value
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')

    const filters: Record<string, any> = {}
    if (status) filters.status = status

    const result = await CallBookingService.getAll(filters, page, limit)

    return NextResponse.json({
      success: true,
      ...result
    })

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch bookings'
    }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Verify admin authentication
    const token = request.cookies.get('admin-token')?.value
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id, status, meetingUrl, action } = await request.json()

    if (!id || !action) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 })
    }

    // Update booking status
    const updateData: Record<string, any> = { status }
    if (meetingUrl) updateData.meetingUrl = meetingUrl

    const updatedBooking = await CallBookingService.updateStatus(id, status, updateData)

    if (!updatedBooking) {
      return NextResponse.json({
        success: false,
        error: 'Booking not found'
      }, { status: 404 })
    }

    // Send email notification to user if approved with meeting URL
    let emailSent = false
    if (action === 'approve' && meetingUrl && updatedBooking) {
      try {
        emailSent = await sendMeetingEmail(updatedBooking, meetingUrl)
      } catch (emailError) {
        // Continue even if email fails
      }
    }

    return NextResponse.json({
      success: true,
      booking: updatedBooking,
      emailSent
    })

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to update booking'
    }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Verify admin authentication
    const token = request.cookies.get('admin-token')?.value
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await request.json()

    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'Booking ID is required'
      }, { status: 400 })
    }

    // Delete the booking
    const deletedBooking = await CallBookingService.delete(id)

    if (!deletedBooking) {
      return NextResponse.json({
        success: false,
        error: 'Booking not found'
      }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: 'Booking deleted successfully'
    })

  } catch (error: unknown) {
    console.error('Delete booking error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to delete booking'
    }, { status: 500 })
  }
}

// Helper function to send meeting email
async function sendMeetingEmail(booking: any, meetingUrl: string): Promise<boolean> {
  try {
    const emailData = {
      firstName: booking.formData.firstName,
      lastName: booking.formData.lastName,
      email: booking.formData.email,
      callType: booking.callType,
      callInfo: booking.callInfo,
      preferredDate: booking.formData.preferredDate,
      preferredTime: booking.formData.preferredTime,
      timeZone: booking.formData.timeZone,
      referenceId: booking.referenceId,
      message: booking.formData.message,
      company: booking.formData.company,
      meetingUrl
    }

    return await sendMeetingApproval(emailData)
  } catch {
    return false
  }
}