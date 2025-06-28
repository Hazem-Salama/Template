// app/api/contact/route.ts - Template Ready Contact API
import { NextRequest, NextResponse } from 'next/server'

// Template configuration for contact API
const TEMPLATE_CONFIG = {
  developmentMode: true, // Set to false when email service is configured
  company: {
    name: 'Your Company', // Update with your company name
    email: 'contact@yourcompany.com', // Update with your email
    phone: '+1 (555) 123-4567', // Update with your phone
    address: '123 Business St, City, State 12345' // Update with your address
  },
  features: {
    newsletter: true, // Enable newsletter subscription
    emailNotifications: true, // Enable email notifications
    validation: true, // Enable form validation
    autoResponse: true // Enable auto-response emails
  },
  limits: {
    messageMinLength: 10,
    messageMaxLength: 5000,
    rateLimitPerHour: 10 // Max submissions per IP per hour
  }
}

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  jobTitle?: string
  website?: string
  projectType?: string
  serviceInterest?: string[]
  budget?: string
  timeline?: string
  message: string
  hearAboutUs?: string
  priority: 'urgent' | 'high' | 'normal' | 'low'
  newsletter: boolean
  marketingConsent?: boolean
  preferredContact?: 'email' | 'phone' | 'either'
  bestTimeToCall?: string
  timezone?: string
  customFields?: Record<string, any>
}

interface ContactRequestData {
  formData: ContactFormData
  method: 'general-inquiry' | 'project-quote' | 'support' | 'partnership' | 'consultation' | 'service-inquiry'
  source?: string
  referrer?: string
  utmParams?: Record<string, string>
}

interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
  warnings?: string[]
}

class ContactValidator {
  static validate(formData: ContactFormData): ValidationResult {
    const errors: Record<string, string> = {}
    const warnings: string[] = []

    // Required field validation
    const requiredFields = [
      { field: 'firstName', message: 'First name is required' },
      { field: 'lastName', message: 'Last name is required' },
      { field: 'email', message: 'Email address is required' },
      { field: 'message', message: 'Message is required' }
    ]

    requiredFields.forEach(({ field, message }) => {
      if (!formData[field as keyof ContactFormData]?.toString().trim()) {
        errors[field] = message
      }
    })

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    // Check for suspicious email patterns
    if (formData.email && (
      formData.email.includes('test@') || 
      formData.email.includes('example.com') ||
      formData.email.includes('tempmail')
    )) {
      warnings.push('Please use a valid business email address')
    }

    // Phone validation (if provided)
    if (formData.phone) {
      const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{9,15}$/
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '')
      if (!phoneRegex.test(cleanPhone)) {
        errors.phone = 'Please enter a valid phone number'
      }
    }

    // Website validation (if provided)
    if (formData.website) {
      try {
        new URL(formData.website.startsWith('http') ? formData.website : `https://${formData.website}`)
      } catch {
        errors.website = 'Please enter a valid website URL'
      }
    }

    // Message length validation
    if (formData.message) {
      if (formData.message.length < TEMPLATE_CONFIG.limits.messageMinLength) {
        errors.message = `Message must be at least ${TEMPLATE_CONFIG.limits.messageMinLength} characters long`
      }
      if (formData.message.length > TEMPLATE_CONFIG.limits.messageMaxLength) {
        errors.message = `Message must be less than ${TEMPLATE_CONFIG.limits.messageMaxLength} characters`
      }
    }

    // Budget validation (if provided)
    if (formData.budget && formData.budget !== 'Not sure' && formData.budget !== 'Let\'s discuss') {
      const budgetPattern = /^[\$]?[\d,]+(\s?-\s?[\$]?[\d,]+)?(\+)?$/
      if (!budgetPattern.test(formData.budget.replace(/\s/g, ''))) {
        warnings.push('Please provide a valid budget range (e.g., $5,000 - $10,000)')
      }
    }

    // Service interest validation
    if (formData.serviceInterest && formData.serviceInterest.length === 0) {
      warnings.push('Please select at least one service of interest')
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      warnings
    }
  }

  static sanitize(formData: ContactFormData): ContactFormData {
    return {
      ...formData,
      firstName: formData.firstName?.trim(),
      lastName: formData.lastName?.trim(),
      email: formData.email?.toLowerCase().trim(),
      phone: formData.phone?.trim(),
      company: formData.company?.trim(),
      jobTitle: formData.jobTitle?.trim(),
      website: formData.website?.trim(),
      message: formData.message?.trim(),
      priority: formData.priority || 'normal',
      newsletter: Boolean(formData.newsletter),
      marketingConsent: Boolean(formData.marketingConsent),
      serviceInterest: formData.serviceInterest?.map(s => s.trim()) || [],
      customFields: formData.customFields || {}
    }
  }
}

// Simple rate limiting (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const key = ip
  const limit = rateLimitStore.get(key)

  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + 3600000 }) // 1 hour
    return true
  }

  if (limit.count >= TEMPLATE_CONFIG.limits.rateLimitPerHour) {
    return false
  }

  limit.count++
  return true
}

export async function POST(request: NextRequest) {
  const startTime = Date.now()
  
  try {
    // Rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'

    if (!checkRateLimit(clientIP)) {
      return NextResponse.json({
        success: false,
        error: 'Too many submissions. Please try again later.',
        retryAfter: 3600 // seconds
      }, { status: 429 })
    }

    const requestData: ContactRequestData = await request.json()
    const { formData, method, source, referrer, utmParams } = requestData

    if (!formData || !method) {
      return NextResponse.json({
        success: false,
        error: 'Missing required request data'
      }, { status: 400 })
    }

    // Sanitize and validate form data
    const sanitizedData = ContactValidator.sanitize(formData)
    const validation = ContactValidator.validate(sanitizedData)

    if (!validation.isValid) {
      return NextResponse.json({
        success: false,
        error: 'Form validation failed',
        validationErrors: validation.errors,
        warnings: validation.warnings
      }, { status: 400 })
    }

    // Generate reference ID
    const timestamp = Date.now()
    const randomSuffix = Math.random().toString(36).substr(2, 5).toUpperCase()
    const referenceId = `MSG-${timestamp}-${randomSuffix}`

    // Prepare contact data
    const contactData = {
      _id: referenceId,
      formData: sanitizedData,
      method,
      source: source || 'website',
      referrer,
      utmParams,
      referenceId,
      status: 'new',
      submittedAt: new Date().toISOString(),
      metadata: {
        userAgent: request.headers.get('user-agent'),
        ip: clientIP,
        timestamp: new Date().toISOString(),
        validationWarnings: validation.warnings
      }
    }

    let savedMessage = contactData
    let emailResults = { companyNotified: false, userConfirmed: false }
    let newsletterSubscribed = false

    if (TEMPLATE_CONFIG.developmentMode) {
      // DEVELOPMENT MODE: Simulate operations
      console.log('🔧 CONTACT API: Development mode - simulating message save')
      console.log('📧 Contact submitted:', {
        name: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        email: sanitizedData.email,
        company: sanitizedData.company,
        method,
        priority: sanitizedData.priority,
        referenceId
      })

      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 500))

      // Simulate email success
      emailResults = { companyNotified: true, userConfirmed: true }
      console.log('📧 Email notifications simulated successfully')
      
      // Simulate newsletter subscription
      if (sanitizedData.newsletter && sanitizedData.marketingConsent) {
        newsletterSubscribed = true
        console.log('📧 Newsletter subscription simulated for:', sanitizedData.email)
      }

    } else {
      // PRODUCTION MODE: Real database and email operations
      try {
        const { ContactMessageService, NewsletterService } = await import('@/lib/db-helpers')
        const { sendCompanyNotification, sendUserConfirmation } = await import('@/lib/contact-email-utils')

        // Save to database
        savedMessage = await ContactMessageService.create(contactData)
        console.log('✅ Contact saved to database:', savedMessage.referenceId)

        // Send emails in parallel
        const emailPromises = await Promise.allSettled([
          sendCompanyNotification(savedMessage),
          sendUserConfirmation(savedMessage)
        ])

        emailResults = {
          companyNotified: emailPromises[0].status === 'fulfilled' && emailPromises[0].value === true,
          userConfirmed: emailPromises[1].status === 'fulfilled' && emailPromises[1].value === true
        }

        console.log('📧 Email results:', emailResults)

        // Handle newsletter subscription
        if (sanitizedData.newsletter && sanitizedData.marketingConsent) {
          try {
            await NewsletterService.subscribe(
              sanitizedData.email,
              source || 'contact_form',
              sanitizedData.firstName,
              sanitizedData.lastName
            )
            newsletterSubscribed = true
            console.log('✅ Newsletter subscription successful')
          } catch (newsletterError) {
            console.error('Newsletter subscription failed:', newsletterError)
          }
        }

      } catch (dbError) {
        console.error('Database/Email error:', dbError)
        // Continue with response even if some operations fail
      }
    }

    const processingTime = Date.now() - startTime

    return NextResponse.json({
      success: true,
      message: 'Your message has been received successfully!',
      contact: {
        id: savedMessage._id,
        referenceId: savedMessage.referenceId,
        method: savedMessage.method,
        status: savedMessage.status,
        submittedAt: savedMessage.submittedAt
      },
      notifications: {
        emailSent: emailResults.companyNotified && emailResults.userConfirmed,
        companyNotified: emailResults.companyNotified,
        userConfirmed: emailResults.userConfirmed
      },
      newsletter: {
        subscribed: newsletterSubscribed
      },
      nextSteps: {
        expectedResponse: sanitizedData.priority === 'urgent' ? '2-4 hours' : '24-48 hours',
        trackingUrl: `${request.headers.get('origin') || ''}/contact/status?ref=${savedMessage.referenceId}`,
        supportEmail: TEMPLATE_CONFIG.company.email
      },
      metadata: {
        processingTime,
        developmentMode: TEMPLATE_CONFIG.developmentMode,
        warnings: validation.warnings
      }
    })

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown server error'
    console.error('Contact API error:', errorMessage)
    
    // Enhanced error responses
    if (errorMessage.includes('E11000') && errorMessage.includes('referenceId')) {
      return NextResponse.json({
        success: false,
        error: 'Duplicate submission detected. Please wait before submitting again.',
        support: {
          phone: TEMPLATE_CONFIG.company.phone,
          email: TEMPLATE_CONFIG.company.email
        }
      }, { status: 409 })
    }

    return NextResponse.json({
      success: false,
      error: 'Message sending failed. Please try again or contact us directly.',
      support: {
        phone: TEMPLATE_CONFIG.company.phone,
        email: TEMPLATE_CONFIG.company.email,
        address: TEMPLATE_CONFIG.company.address
      },
      developmentMode: TEMPLATE_CONFIG.developmentMode
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const referenceId = searchParams.get('ref')

    if (!referenceId) {
      return NextResponse.json({
        success: false,
        error: 'Reference ID is required',
        usage: 'Add ?ref=YOUR_REFERENCE_ID to check message status'
      }, { status: 400 })
    }

    if (TEMPLATE_CONFIG.developmentMode) {
      // DEVELOPMENT MODE: Mock response
      return NextResponse.json({
        success: true,
        message: {
          id: referenceId,
          referenceId,
          method: 'general-inquiry',
          status: 'new',
          priority: 'normal',
          submittedAt: new Date().toISOString(),
          formData: {
            firstName: 'Test',
            lastName: 'User',
            email: 'test@example.com',
            company: 'Test Company',
            message: 'This is a test message for development'
          },
          expectedResponse: '24-48 hours'
        },
        company: TEMPLATE_CONFIG.company,
        developmentMode: true,
        note: 'This is mock data for development. In production, real message data will be returned.'
      })
    }

    // PRODUCTION MODE: Real database lookup
    try {
      const { ContactMessageService } = await import('@/lib/db-helpers')
      const message = await ContactMessageService.findByReferenceId(referenceId)
      
      if (!message) {
        return NextResponse.json({
          success: false,
          error: 'Contact message not found',
          support: {
            email: TEMPLATE_CONFIG.company.email,
            phone: TEMPLATE_CONFIG.company.phone
          }
        }, { status: 404 })
      }
      
      return NextResponse.json({
        success: true,
        message: {
          id: String(message._id),
          referenceId: message.referenceId,
          method: message.method,
          status: message.status,
          priority: message.formData.priority,
          submittedAt: message.submittedAt,
          formData: {
            firstName: message.formData.firstName,
            lastName: message.formData.lastName,
            email: message.formData.email,
            company: message.formData.company,
            projectType: message.formData.projectType,
            message: message.formData.message
          }
        },
        company: TEMPLATE_CONFIG.company
      })

    } catch (dbError) {
      console.error('Database lookup error:', dbError)
      return NextResponse.json({
        success: false,
        error: 'Unable to retrieve message status',
        support: {
          email: TEMPLATE_CONFIG.company.email,
          phone: TEMPLATE_CONFIG.company.phone
        }
      }, { status: 500 })
    }

  } catch (error: unknown) {
    console.error('Contact GET error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve contact message'
    }, { status: 500 })
  }
}

/* 
🎯 CONTACT API - TEMPLATE READY

FEATURES:
✅ Complete form validation with detailed error messages
✅ Rate limiting (10 submissions per hour per IP)
✅ Newsletter subscription handling
✅ Email notification simulation in development
✅ Reference ID generation and tracking
✅ Message status lookup
✅ Support for multiple contact methods
✅ UTM parameter tracking
✅ Development mode with detailed console logging

VALIDATION INCLUDES:
✅ Required fields (firstName, lastName, email, message)
✅ Email format validation
✅ Phone number validation (optional)
✅ Website URL validation (optional)
✅ Message length limits (10-5000 characters)
✅ Suspicious email detection
✅ Budget format validation

CONTACT METHODS SUPPORTED:
- general-inquiry
- project-quote
- support