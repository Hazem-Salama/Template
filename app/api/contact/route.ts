// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { ContactMessageService, NewsletterService } from '@/lib/db-helpers'
import { sendCompanyNotification, sendUserConfirmation } from '@/lib/contact-email-utils'
import { templateConfig } from '@/lib/template-config'

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
    if (formData.message && formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long'
    }
    if (formData.message && formData.message.length > 5000) {
      errors.message = 'Message must be less than 5000 characters'
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
      serviceInterest: formData.serviceInterest?.map(s => s.trim()) || [],
      priority: formData.priority || 'normal',
      newsletter: Boolean(formData.newsletter),
      marketingConsent: Boolean(formData.marketingConsent),
      customFields: formData.customFields || {}
    }
  }
}

export async function POST(request: NextRequest) {
  const startTime = Date.now()
  
  try {
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
        validationErrors: validation.errors
      }, { status: 400 })
    }

    // Prepare contact data
    const contactData = {
      formData: sanitizedData,
      method,
      source: source || 'website',
      referrer,
      utmParams,
      metadata: {
        userAgent: request.headers.get('user-agent'),
        ip: request.headers.get('x-forwarded-for') || 
            request.headers.get('x-real-ip') || 
            'unknown',
        timestamp: new Date().toISOString(),
        validationWarnings: validation.warnings
      }
    }

    // Save to database
    const savedMessage = await ContactMessageService.create(contactData)

    // Send emails
    const emailResults = await Promise.allSettled([
      sendCompanyNotification(savedMessage),
      sendUserConfirmation(savedMessage)
    ])

    const emailStatus = {
      companyNotified: emailResults[0].status === 'fulfilled' && emailResults[0].value === true,
      userConfirmed: emailResults[1].status === 'fulfilled' && emailResults[1].value === true
    }

    // Handle newsletter subscription
    let newsletterSubscribed = false
    if (sanitizedData.newsletter && sanitizedData.marketingConsent) {
      try {
        await NewsletterService.subscribe(
          sanitizedData.email,
          source || 'contact_form',
          sanitizedData.firstName,
          sanitizedData.lastName
        )
        newsletterSubscribed = true
      } catch (error) {
        // Newsletter subscription failure shouldn't fail the whole request
      }
    }

    const processingTime = Date.now() - startTime

    return NextResponse.json({
      success: true,
      message: 'Your message has been received successfully!',
      contact: {
        id: String(savedMessage._id),
        referenceId: savedMessage.referenceId,
        method: savedMessage.method,
        status: savedMessage.status,
        submittedAt: savedMessage.submittedAt
      },
      notifications: {
        emailSent: emailStatus.companyNotified && emailStatus.userConfirmed,
        companyNotified: emailStatus.companyNotified,
        userConfirmed: emailStatus.userConfirmed
      },
      newsletter: {
        subscribed: newsletterSubscribed
      },
      metadata: {
        processingTime
      }
    })

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown server error'
    
    // Enhanced error handling
    if (errorMessage.includes('E11000') && errorMessage.includes('referenceId')) {
      return NextResponse.json({
        success: false,
        error: 'Duplicate submission detected'
      }, { status: 409 })
    }

    if (errorMessage.includes('validation') || errorMessage.includes('required')) {
      return NextResponse.json({
        success: false,
        error: 'Validation error'
      }, { status: 400 })
    }

    if (errorMessage.includes('connection') || errorMessage.includes('connect')) {
      return NextResponse.json({
        success: false,
        error: 'Database connection error'
      }, { status: 503 })
    }

    return NextResponse.json({
      success: false,
      error: 'Message sending failed',
      support: {
        phone: templateConfig.company.phone,
        email: templateConfig.company.email
      }
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const referenceId = searchParams.get('ref')
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'))
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '10')))
    const method = searchParams.get('method') as ContactRequestData['method'] | null
    const status = searchParams.get('status')
    const priority = searchParams.get('priority')
    const dateFrom = searchParams.get('dateFrom')
    const dateTo = searchParams.get('dateTo')

    if (referenceId) {
      const message = await ContactMessageService.findByReferenceId(referenceId)
      
      if (!message) {
        return NextResponse.json({
          success: false,
          error: 'Contact message not found'
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
            phone: message.formData.phone,
            projectType: message.formData.projectType,
            serviceInterest: message.formData.serviceInterest,
            budget: message.formData.budget,
            timeline: message.formData.timeline,
            message: message.formData.message,
            preferredContact: message.formData.preferredContact
          }
        }
      })
    }

    // Multiple messages with filtering
    const filters: Record<string, any> = {}
    if (method) filters.method = method
    if (status) filters.status = status
    if (priority) filters['formData.priority'] = priority
    if (dateFrom || dateTo) {
      filters.submittedAt = {}
      if (dateFrom) filters.submittedAt.$gte = new Date(dateFrom)
      if (dateTo) filters.submittedAt.$lte = new Date(dateTo)
    }
    
    const result = await ContactMessageService.getAll(filters, page, limit)
    
    return NextResponse.json({
      success: true,
      messages: result.messages.map(message => ({
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
          serviceInterest: message.formData.serviceInterest,
          budget: message.formData.budget
        }
      })),
      pagination: result.pagination
    })

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve contact messages'
    }, { status: 500 })
  }
}