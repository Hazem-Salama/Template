// app/api/careers/route.ts - Template Ready Public Careers API
import { NextRequest, NextResponse } from 'next/server'

// Template configuration - customize for your project
const TEMPLATE_CONFIG = {
  developmentMode: true, // Set to false when database is connected
  company: {
    name: 'Your Company', // Update with your company name
    website: 'https://yourcompany.com' // Update with your website
  },
  mockData: {
    enabled: true, // Show mock data for demonstration
    jobs: [
      {
        id: 'job-1',
        title: 'Senior Frontend Developer',
        department: 'Engineering',
        type: 'Full-time',
        location: 'Remote',
        experience: '3-5 years',
        salary: '$80K - $120K',
        description: 'We are seeking a talented Senior Frontend Developer to join our growing team. You will be responsible for creating exceptional user experiences and building scalable web applications using modern technologies.',
        responsibilities: [
          'Develop and maintain responsive web applications using React.js and Next.js',
          'Collaborate with design and backend teams to implement new features',
          'Write clean, efficient, and maintainable code following best practices',
          'Optimize applications for maximum speed and scalability',
          'Participate in code reviews and mentor junior developers'
        ],
        requirements: [
          'Bachelor\'s degree in Computer Science or related field',
          '3+ years of professional React.js development experience',
          'Strong knowledge of JavaScript, TypeScript, HTML, and CSS',
          'Experience with state management libraries (Redux, Zustand)',
          'Familiarity with modern build tools and CI/CD processes'
        ],
        posted: new Date().toISOString(),
        status: 'active'
      },
      {
        id: 'job-2',
        title: 'UI/UX Designer',
        department: 'Design',
        type: 'Full-time',
        location: 'New York, NY',
        experience: '2-4 years',
        salary: '$70K - $100K',
        description: 'Join our design team to create beautiful and intuitive user experiences. We\'re looking for a creative problem-solver who can transform complex ideas into simple, elegant designs.',
        responsibilities: [
          'Design user interfaces for web and mobile applications',
          'Conduct user research and usability testing to inform design decisions',
          'Create wireframes, prototypes, and comprehensive design systems',
          'Collaborate with developers to ensure design implementation quality',
          'Present design concepts and gather feedback from stakeholders'
        ],
        requirements: [
          'Bachelor\'s degree in Design, HCI, or related field',
          'Proficiency in Figma, Sketch, or Adobe Creative Suite',
          'Strong portfolio demonstrating UX/UI design skills',
          'Understanding of responsive design principles',
          'Experience with design systems and component libraries'
        ],
        posted: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'active'
      },
      {
        id: 'job-3',
        title: 'Digital Marketing Specialist',
        department: 'Marketing',
        type: 'Part-time',
        location: 'Remote',
        experience: '1-3 years',
        salary: '$45K - $65K',
        description: 'Help us grow our brand through innovative digital marketing strategies. You\'ll work across multiple channels to increase brand awareness and drive customer acquisition.',
        responsibilities: [
          'Manage social media campaigns and content creation',
          'Analyze marketing metrics and ROI across different channels',
          'Develop and execute email marketing campaigns',
          'Optimize SEO and manage content marketing initiatives',
          'Coordinate with design team for marketing materials'
        ],
        requirements: [
          'Experience with Google Analytics, Google Ads, and social media platforms',
          'Strong writing and communication skills',
          'Knowledge of SEO, content marketing, and email automation',
          'Familiarity with marketing automation tools',
          'Data-driven approach to campaign optimization'
        ],
        posted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'active'
      },
      {
        id: 'job-4',
        title: 'Backend Developer',
        department: 'Engineering',
        type: 'Full-time',
        location: 'San Francisco, CA',
        experience: '2-5 years',
        salary: '$90K - $130K',
        description: 'Build robust and scalable backend systems that power our applications. You\'ll work with modern technologies to create APIs and services that serve millions of users.',
        responsibilities: [
          'Design and develop RESTful APIs and microservices',
          'Optimize database queries and improve system performance',
          'Implement security best practices and data protection measures',
          'Work with DevOps team on deployment and monitoring',
          'Collaborate with frontend teams on API integration'
        ],
        requirements: [
          'Strong experience with Node.js, Python, or similar backend technologies',
          'Proficiency with databases (PostgreSQL, MongoDB)',
          'Knowledge of cloud platforms (AWS, Google Cloud, Azure)',
          'Understanding of containerization (Docker, Kubernetes)',
          'Experience with API design and development'
        ],
        posted: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'active'
      }
    ]
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const department = searchParams.get('department')
    const search = searchParams.get('search')
    const type = searchParams.get('type')
    const location = searchParams.get('location')

    let jobs

    if (TEMPLATE_CONFIG.developmentMode && TEMPLATE_CONFIG.mockData.enabled) {
      // DEVELOPMENT MODE: Use mock data
      console.log('🔧 CAREERS API: Using mock data')
      jobs = [...TEMPLATE_CONFIG.mockData.jobs]

      // Apply filters to mock data
      if (department && department !== 'all') {
        jobs = jobs.filter(job => job.department.toLowerCase() === department.toLowerCase())
      }

      if (type && type !== 'all') {
        jobs = jobs.filter(job => job.type.toLowerCase() === type.toLowerCase())
      }

      if (location && location !== 'all') {
        jobs = jobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()))
      }

      if (search) {
        const searchLower = search.toLowerCase()
        jobs = jobs.filter(job => 
          job.title.toLowerCase().includes(searchLower) ||
          job.description.toLowerCase().includes(searchLower) ||
          job.department.toLowerCase().includes(searchLower) ||
          job.requirements.some(req => req.toLowerCase().includes(searchLower)) ||
          job.responsibilities.some(resp => resp.toLowerCase().includes(searchLower))
        )
      }

      // Sort by posted date (newest first)
      jobs.sort((a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime())

    } else {
      // PRODUCTION MODE: Real database query
      try {
        const { CareerJobService } = await import('@/lib/careers-db-helpers')
        
        if (search) {
          jobs = await CareerJobService.searchJobs(search)
        } else {
          jobs = await CareerJobService.getActiveJobs(department || undefined)
        }

        // Transform for public consumption (remove internal fields)
        jobs = jobs.map(job => ({
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
          posted: job.posted,
          status: job.status
        }))
      } catch (dbError) {
        console.error('Database error, falling back to mock data:', dbError)
        jobs = TEMPLATE_CONFIG.mockData.jobs
      }
    }

    // Get unique values for filters
    const departments = [...new Set(TEMPLATE_CONFIG.mockData.jobs.map(job => job.department))]
    const jobTypes = [...new Set(TEMPLATE_CONFIG.mockData.jobs.map(job => job.type))]
    const locations = [...new Set(TEMPLATE_CONFIG.mockData.jobs.map(job => job.location))]

    return NextResponse.json({
      success: true,
      jobs,
      meta: {
        total: jobs.length,
        totalAvailable: TEMPLATE_CONFIG.mockData.jobs.length,
        filters: {
          department,
          search,
          type,
          location
        },
        filterOptions: {
          departments,
          types: jobTypes,
          locations
        },
        developmentMode: TEMPLATE_CONFIG.developmentMode
      },
      company: TEMPLATE_CONFIG.company
    })

  } catch (error: unknown) {
    console.error('Careers API error:', error)
    
    // Fallback to mock data on error in development
    if (TEMPLATE_CONFIG.developmentMode) {
      console.log('🔧 CAREERS API: Error occurred, using mock data as fallback')
      return NextResponse.json({
        success: true,
        jobs: TEMPLATE_CONFIG.mockData.jobs,
        meta: {
          total: TEMPLATE_CONFIG.mockData.jobs.length,
          developmentMode: true,
          fallback: true,
          error: 'Database not available - using mock data'
        },
        company: TEMPLATE_CONFIG.company
      })
    }

    return NextResponse.json({
      success: false,
      error: 'Failed to fetch career opportunities',
      support: {
        email: 'careers@yourcompany.com',
        message: 'Please contact us directly for current job openings'
      }
    }, { status: 500 })
  }
}

// GET specific job by ID
export async function POST(request: NextRequest) {
  try {
    const { jobId } = await request.json()

    if (!jobId) {
      return NextResponse.json({
        success: false,
        error: 'Job ID is required'
      }, { status: 400 })
    }

    let job

    if (TEMPLATE_CONFIG.developmentMode && TEMPLATE_CONFIG.mockData.enabled) {
      // DEVELOPMENT MODE: Find in mock data
      job = TEMPLATE_CONFIG.mockData.jobs.find(j => j.id === jobId)
    } else {
      // PRODUCTION MODE: Database lookup
      try {
        const { CareerJobService } = await import('@/lib/careers-db-helpers')
        job = await CareerJobService.findById(jobId)
        
        if (job) {
          job = {
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
            posted: job.posted,
            status: job.status
          }
        }
      } catch (dbError) {
        console.error('Database error:', dbError)
        job = TEMPLATE_CONFIG.mockData.jobs.find(j => j.id === jobId)
      }
    }

    if (!job) {
      return NextResponse.json({
        success: false,
        error: 'Job not found'
      }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      job,
      meta: {
        developmentMode: TEMPLATE_CONFIG.developmentMode
      },
      company: TEMPLATE_CONFIG.company
    })

  } catch (error: unknown) {
    console.error('Job lookup error:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch job details'
    }, { status: 500 })
  }
}

/* 
🎯 CAREERS API - TEMPLATE READY

FEATURES:
✅ Mock job data for immediate demonstration
✅ Department, type, location, and search filtering
✅ Development/production mode switching
✅ Fallback to mock data on database errors
✅ Individual job lookup by ID
✅ Filter options for frontend forms
✅ Professional job descriptions and requirements

MOCK DATA INCLUDES:
- Senior Frontend Developer (Engineering)
- UI/UX Designer (Design)  
- Digital Marketing Specialist (Marketing)
- Backend Developer (Engineering)

API ENDPOINTS:
- GET /api/careers - List all jobs with filtering
- POST /api/careers - Get specific job by ID

FILTERS SUPPORTED:
- department: Filter by job department
- type: Filter by job type (Full-time, Part-time, etc.)
- location: Filter by job location
- search: Search across title, description, requirements

PRODUCTION SETUP:
1. Set developmentMode: false
2. Implement CareerJobService in /lib/careers-db-helpers
3. Update company information in TEMPLATE_CONFIG
4. Connect to your database

The API works immediately with mock data and is ready for production use!
*/