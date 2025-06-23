// app/api/admin/messages/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { ContactMessageService } from '@/lib/db-helpers'
import { verifyToken } from '@/lib/admin-auth'
import { sendAdminReply } from '@/lib/admin-email-utils'

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
    const method = searchParams.get('method')

    const filters: Record<string, any> = {}
    if (status) filters.status = status
    if (method) filters.method = method

    const result = await ContactMessageService.getAll(filters, page, limit)

    return NextResponse.json({
      success: true,
      ...result
    })

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch messages'
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

    const { id, status, replyMessage } = await request.json()

    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'Message ID is required'
      }, { status: 400 })
    }

    // Get the original message
    const originalMessage = await ContactMessageService.findById(id)
    if (!originalMessage) {
      return NextResponse.json({
        success: false,
        error: 'Message not found'
      }, { status: 404 })
    }

    // Update message status
    const updatedMessage = await ContactMessageService.updateStatus(id, status || 'responded')

    // Send reply email if replyMessage is provided
    let emailSent = false
    if (replyMessage && originalMessage) {
      try {
        emailSent = await sendAdminReply(originalMessage, replyMessage)
      } catch (emailError) {
        // Continue even if email fails
      }
    }

    return NextResponse.json({
      success: true,
      message: updatedMessage,
      emailSent
    })

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to update message'
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
        error: 'Message ID is required'
      }, { status: 400 })
    }

    // Delete the message
    const deletedMessage = await ContactMessageService.delete(id)

    if (!deletedMessage) {
      return NextResponse.json({
        success: false,
        error: 'Message not found'
      }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: 'Message deleted successfully'
    })

  } catch (error: unknown) {
    console.error('Delete message error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to delete message'
    }, { status: 500 })
  }
}