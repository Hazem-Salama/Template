// app/api/careers/route.ts - Public API for website users
import { NextRequest, NextResponse } from 'next/server'
import { CareerJobService } from '@/lib/careers-db-helpers'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const department = searchParams.get('department')
    const search = searchParams.get('search')

    let jobs
    
    if (search) {
      jobs = await CareerJobService.searchJobs(search)
    } else {
      jobs = await CareerJobService.getActiveJobs(department || undefined)
    }

    // Transform for public consumption (remove internal fields)
    const publicJobs = jobs.map(job => ({
      id: job._id.toString(),
      title: job.title,
      department: job.department,
      type: job.type,
      location: job.location,
      experience: job.experience,
      salary: job.salary,
      description: job.description,
      responsibilities: job.responsibilities,
      requirements: job.requirements,
      posted: job.posted
    }))

    return NextResponse.json({
      success: true,
      jobs: publicJobs
    })

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch career opportunities'
    }, { status: 500 })
  }
}