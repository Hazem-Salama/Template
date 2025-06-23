// app/api/admin/careers/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { CareerJobService } from '@/lib/careers-db-helpers'
import { verifyToken } from '@/lib/admin-auth'

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
    const department = searchParams.get('department')

    const filters: Record<string, any> = {}
    if (status) filters.status = status
    if (department && department !== 'all') filters.department = department

    const result = await CareerJobService.getAll(filters, page, limit)

    return NextResponse.json({
      success: true,
      ...result
    })

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch career jobs'
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication
    const token = request.cookies.get('admin-token')?.value
    const admin = await verifyToken(token || '')
    if (!token || !admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const jobData = await request.json()

    if (!jobData.title || !jobData.department || !jobData.description) {
      return NextResponse.json({
        success: false,
        error: 'Title, department, and description are required'
      }, { status: 400 })
    }

    // Add admin info
    const jobWithAdmin = {
      ...jobData,
      createdBy: admin.username
    }

    const newJob = await CareerJobService.create(jobWithAdmin)

    return NextResponse.json({
      success: true,
      job: newJob
    })

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to create career job'
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

    const { id, ...updateData } = await request.json()

    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'Job ID is required'
      }, { status: 400 })
    }

    const updatedJob = await CareerJobService.update(id, updateData)

    if (!updatedJob) {
      return NextResponse.json({
        success: false,
        error: 'Job not found'
      }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      job: updatedJob
    })

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to update career job'
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

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'Job ID is required'
      }, { status: 400 })
    }

    const deletedJob = await CareerJobService.delete(id)

    if (!deletedJob) {
      return NextResponse.json({
        success: false,
        error: 'Job not found'
      }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: 'Job deleted successfully'
    })

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to delete career job'
    }, { status: 500 })
  }
}