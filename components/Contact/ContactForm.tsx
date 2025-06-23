'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { templateConfig } from '@/lib/template-config'

interface ContactFormProps {
  selectedMethod: string
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  jobTitle: string
  website: string
  projectType: string
  serviceInterest: string[]
  budget: string
  timeline: string
  message: string
  hearAboutUs: string
  priority: string
  newsletter: boolean
  marketingConsent: boolean
  preferredContact: string
  bestTimeToCall: string
  timezone: string
}

interface ContactResponse {
  success: boolean
  message?: string
  error?: string
  contact?: {
    id: string
    referenceId: string
    method: string
    status: string
    submittedAt: string
  }
  notifications?: {
    emailSent?: boolean
    companyNotified?: boolean
    userConfirmed?: boolean
  }
}

export default function ContactForm({ selectedMethod }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    website: '',
    projectType: '',
    serviceInterest: [],
    budget: '',
    timeline: '',
    message: '',
    hearAboutUs: '',
    priority: 'normal',
    newsletter: true,
    marketingConsent: false,
    preferredContact: 'email',
    bestTimeToCall: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<'success' | 'error' | null>(null)
  const [contactResult, setContactResult] = useState<ContactResponse | null>(null)

  // Form options - easily customizable
  const formOptions = {
    projectTypes: [
      'Web Development',
      'Mobile App Development',
      'E-commerce Solution',
      'Digital Marketing',
      'Brand Identity & Design',
      'UI/UX Design',
      'SEO & Content Strategy',
      'Consulting Services',
      'Other'
    ],
    
    serviceInterests: [
      'Web Development',
      'Mobile Apps',
      'Digital Marketing',
      'SEO',
      'Brand Design',
      'UI/UX Design',
      'E-commerce',
      'Consulting',
      'Maintenance & Support'
    ],

    budgetRanges: [
      'Under $5,000',
      '$5,000 - $15,000',
      '$15,000 - $35,000',
      '$35,000 - $75,000',
      '$75,000 - $150,000',
      '$150,000+',
      "Let's discuss"
    ],

    timelineOptions: [
      'ASAP (Rush)',
      'Within 1 month',
      '1-3 months',
      '3-6 months',
      '6+ months',
      'Just exploring options'
    ],

    hearAboutOptions: [
      'Google Search',
      'Social Media',
      'Referral from friend/colleague',
      'LinkedIn',
      'Previous client',
      'Industry event',
      'Content/Blog',
      'Advertisement',
      'Other'
    ],

    priorityOptions: [
      { value: 'urgent', label: 'Urgent (Same day response)', color: 'text-red-400' },
      { value: 'high', label: 'High (Within 24 hours)', color: 'text-orange-400' },
      { value: 'normal', label: 'Normal (1-2 business days)', color: 'text-blue-400' },
      { value: 'low', label: 'Low (Within a week)', color: 'text-green-400' }
    ],

    timeSlots: [
      'Morning (9 AM - 12 PM)',
      'Afternoon (12 PM - 5 PM)',
      'Evening (5 PM - 8 PM)',
      'Anytime'
    ]
  }

  // Method configuration
  const getMethodInfo = () => {
    const methodConfigs = {
      'general-inquiry': {
        title: 'General Inquiry',
        subtitle: 'Ask us anything about our services',
        icon: '💬',
        fields: ['basic', 'contact', 'message']
      },
      'service-inquiry': {
        title: 'Service Inquiry',
        subtitle: 'Learn more about our specific services',
        icon: '🔍',
        fields: ['basic', 'contact', 'services', 'message']
      },
      'project-quote': {
        title: 'Project Quote',
        subtitle: 'Get a detailed quote for your project',
        icon: '📋',
        fields: ['basic', 'contact', 'project', 'message']
      },
      'support': {
        title: 'Support Request',
        subtitle: 'Get help with existing projects',
        icon: '🛠️',
        fields: ['basic', 'contact', 'message']
      },
      'partnership': {
        title: 'Partnership Inquiry',
        subtitle: 'Explore collaboration opportunities',
        icon: '🤝',
        fields: ['basic', 'contact', 'business', 'message']
      },
      'consultation': {
        title: 'Free Consultation',
        subtitle: 'Schedule a strategy session',
        icon: '📞',
        fields: ['basic', 'contact', 'scheduling', 'message']
      }
    }

    return methodConfigs[selectedMethod as keyof typeof methodConfigs] || methodConfigs['general-inquiry']
  }

  const methodInfo = getMethodInfo()

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false

    if (name === 'serviceInterest') {
      const currentInterests = formData.serviceInterest
      if (checked) {
        setFormData(prev => ({
          ...prev,
          serviceInterest: [...currentInterests, value]
        }))
      } else {
        setFormData(prev => ({
          ...prev,
          serviceInterest: currentInterests.filter(interest => interest !== value)
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation (optional)
    if (formData.phone) {
      const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{9,15}$/
      if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    }

    // Website validation (optional)
    if (formData.website) {
      try {
        new URL(formData.website.startsWith('http') ? formData.website : `https://${formData.website}`)
      } catch {
        newErrors.website = 'Please enter a valid website URL'
      }
    }

    // Message length validation
    if (formData.message && formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const submissionData = {
        formData: {
          ...formData,
          email: formData.email.toLowerCase().trim(),
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          message: formData.message.trim()
        },
        method: selectedMethod as ContactResponse['contact']['method'],
        source: 'website',
        referrer: typeof window !== 'undefined' ? document.referrer : undefined,
        utmParams: typeof window !== 'undefined' ? getUtmParams() : undefined
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(submissionData)
      })

      const result: ContactResponse = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message')
      }

      setContactResult(result)
      setSubmissionResult('success')
      setIsSubmitted(true)
      
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      
      setSubmissionResult('error')
      setIsSubmitted(true)
      setContactResult({
        success: false,
        error: errorMessage
      })
      
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get UTM parameters from URL
  const getUtmParams = () => {
    if (typeof window === 'undefined') return {}
    
    const urlParams = new URLSearchParams(window.location.search)
    const utmParams: Record<string, string> = {}
    
    for (const [key, value] of urlParams.entries()) {
      if (key.startsWith('utm_')) {
        utmParams[key] = value
      }
    }
    
    return utmParams
  }

  // Success State
  if (isSubmitted && submissionResult === 'success' && contactResult?.contact) {
    return (
      <div className="flex-1 flex items-start justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg mt-8"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="text-6xl mb-6 text-center">✅</div>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-center">
              Thank you for contacting us. We've received your {methodInfo.title.toLowerCase()} and will respond shortly.
            </p>
            
            {/* Contact Details */}
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Submission Details
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Reference ID:</span>
                  <span className="text-white font-mono text-xs">{contactResult.contact.referenceId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="text-white">{methodInfo.title}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-green-400 capitalize">{contactResult.contact.status}</span>
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="text-white break-all text-xs">{formData.email}</span>
                </div>
                {contactResult.notifications?.emailSent && (
                  <div className="flex justify-between">
                    <span>Email Status:</span>
                    <span className="text-green-400">✅ Sent</span>
                  </div>
                )}
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                What's Next?
              </h3>
              <ol className="text-sm text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 font-bold">1.</span>
                  <span>We'll review your {methodInfo.title.toLowerCase()}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 font-bold">2.</span>
                  <span>You'll receive a response within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 font-bold">3.</span>
                  <span>We'll schedule a call if needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 font-bold">4.</span>
                  <span>Follow-up with next steps</span>
                </li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setSubmissionResult(null)
                  setContactResult(null)
                  setFormData({
                    firstName: '', lastName: '', email: '', phone: '', company: '',
                    jobTitle: '', website: '', projectType: '', serviceInterest: [],
                    budget: '', timeline: '', message: '', hearAboutUs: '',
                    priority: 'normal', newsletter: true, marketingConsent: false,
                    preferredContact: 'email', bestTimeToCall: '', timezone: ''
                  })
                  setErrors({})
                }}
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Send Another Message
              </button>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-sm"
                >
                  Return Home
                </button>
                <button
                  onClick={() => window.location.href = '/services'}
                  className="w-full bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-sm"
                >
                  View Services
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-gray-400 text-xs mb-2">
                Need immediate assistance?
              </p>
              <a href={`tel:${templateConfig.company.phone}`} className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                {templateConfig.company.phone}
              </a>
              <p className="text-gray-400 text-xs mt-2">
                Reference ID: {contactResult.contact.referenceId}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  // Error State
  if (isSubmitted && submissionResult === 'error') {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg text-center mt-8"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="text-6xl mb-6">❌</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Something Went Wrong
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We encountered an issue sending your message. Please try again or contact us directly.
            </p>
            
            {/* Error Details */}
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left">
              <h3 className="text-lg font-semibold text-white mb-3">
                Error Details
              </h3>
              <p className="text-red-300 text-sm">
                {contactResult?.error || 'Unknown error occurred'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setSubmissionResult(null)
                  setContactResult(null)
                  setErrors({})
                }}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                Try Again
              </button>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => window.location.href = `tel:${templateConfig.company.phone}`}
                  className="w-full bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-sm"
                >
                  📞 Call Us
                </button>
                <button
                  onClick={() => window.location.href = `mailto:${templateConfig.company.email}?subject=Contact Form Issue&body=I had trouble submitting the contact form.`}
                  className="w-full bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-sm"
                >
                  📧 Email Us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  // Form State - Main contact form
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <motion.div
        key={selectedMethod}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl mt-8"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">{methodInfo.icon}</div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {methodInfo.title}
            </h2>
            <p className="text-gray-300 mb-4">
              {methodInfo.subtitle}
            </p>
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Response within {templateConfig.business.responseTime}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      errors.firstName ? 'border-red-500' : 'border-white/30'
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      errors.lastName ? 'border-red-500' : 'border-white/30'
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-white/30'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-white/30'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your job title"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-white font-medium mb-2">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    errors.website ? 'border-red-500' : 'border-white/30'
                  }`}
                  placeholder="https://yourwebsite.com"
                />
                {errors.website && (
                  <p className="text-red-400 text-sm mt-1">{errors.website}</p>
                )}
              </div>
            </div>

            {/* Project Information - Show for project-related methods */}
            {(selectedMethod === 'project-quote' || selectedMethod === 'general-inquiry' || selectedMethod === 'service-inquiry') && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                  Project Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">Select project type</option>
                      {formOptions.projectTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-gray-800">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">Select budget range</option>
                      {formOptions.budgetRanges.map((range, index) => (
                        <option key={index} value={range} className="bg-gray-800">{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">Select timeline</option>
                      {formOptions.timelineOptions.map((option, index) => (
                        <option key={index} value={option} className="bg-gray-800">{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Priority Level
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      {formOptions.priorityOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-gray-800">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Interests */}
                <div className="mt-6">
                  <label className="block text-white font-medium mb-4">
                    Services of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {formOptions.serviceInterests.map((service, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="serviceInterest"
                          value={service}
                          checked={formData.serviceInterest.includes(service)}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-500 bg-white/20 border-white/30 rounded focus:ring-blue-500 focus:ring-2 mr-3"
                        />
                        <span className="text-white text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Message Section */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                Message
              </h3>
              <div>
                <label className="block text-white font-medium mb-2">
                  Tell us about your {
                    selectedMethod === 'support' ? 'support request' :
                    selectedMethod === 'partnership' ? 'partnership idea' :
                    selectedMethod === 'service-inquiry' ? 'service needs' :
                    'project'
                  } <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/30'
                  }`}
                  placeholder={
                    selectedMethod === 'support' 
                      ? 'Describe the issue you\'re experiencing or the help you need...'
                      : selectedMethod === 'partnership'
                      ? 'Tell us about your partnership proposal or collaboration idea...'
                      : selectedMethod === 'project-quote'
                      ? 'Describe your project in detail, including goals, requirements, and any specific features...'
                      : selectedMethod === 'service-inquiry'
                      ? 'Which services are you interested in and what would you like to know more about?'
                      : 'Describe your project, goals, or what you\'d like to discuss...'
                  }
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
                <p className="text-gray-400 text-xs mt-2">
                  Be as detailed as possible to help us provide the best response to your {methodInfo.title.toLowerCase()}.
                </p>
              </div>

              <div className="mt-6">
                <label className="block text-white font-medium mb-2">
                  How did you hear about us?
                </label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Please select</option>
                  {formOptions.hearAboutOptions.map((option, index) => (
                    <option key={index} value={option} className="bg-gray-800">{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preferences */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                Communication Preferences
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="email" className="bg-gray-800">Email</option>
                    <option value="phone" className="bg-gray-800">Phone</option>
                    <option value="either" className="bg-gray-800">Either</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Best Time to Call
                  </label>
                  <select
                    name="bestTimeToCall"
                    value={formData.bestTimeToCall}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800">Select time preference</option>
                    {formOptions.timeSlots.map((slot, index) => (
                      <option key={index} value={slot} className="bg-gray-800">{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Newsletter and Consent */}
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-500 bg-white/20 border-white/30 rounded focus:ring-blue-500 focus:ring-2 mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span className="text-white text-sm leading-relaxed">
                    <strong>Subscribe to our newsletter</strong><br />
                    Get insights, tips, and updates about digital trends and our services.
                  </span>
                </label>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-500 bg-white/20 border-white/30 rounded focus:ring-blue-500 focus:ring-2 mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span className="text-white text-sm leading-relaxed">
                    <strong>Marketing Communications</strong><br />
                    I consent to receive marketing communications and promotional content from {templateConfig.company.name}.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send {methodInfo.title}
                  </>
                )}
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="text-center pt-6 border-t border-white/20 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-green-400 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Response within {templateConfig.business.responseTime}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-green-400 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free consultation included</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-green-400 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert advice included</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-gray-300 text-sm">
                  Questions?{' '}
                  <a href={`tel:${templateConfig.company.phone}`} className="text-blue-500 hover:text-blue-400 font-semibold transition-colors">
                    {templateConfig.company.phone}
                  </a>
                </p>
                <p className="text-gray-400 text-xs">
                  Available {templateConfig.business.workingHours} {templateConfig.business.timezone}
                </p>
                <p className="text-gray-400 text-xs">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms-of-service" className="text-blue-400 hover:text-blue-300 underline">
                    Terms of Service
                  </a>
                </p>
              </div>

              {/* Method-specific expectations */}
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-left">
                <h4 className="text-blue-300 font-medium text-sm mb-2">
                  What to expect after submitting your {methodInfo.title.toLowerCase()}:
                </h4>
                <ul className="text-blue-200 text-xs space-y-1">
                  {selectedMethod === 'general-inquiry' && (
                    <>
                      <li>• Initial response within {templateConfig.business.responseTime}</li>
                      <li>• Detailed discussion of your needs and goals</li>
                      <li>• Recommendation of best services for your requirements</li>
                      <li>• Optional follow-up consultation to dive deeper</li>
                    </>
                  )}
                  {selectedMethod === 'service-inquiry' && (
                    <>
                      <li>• Detailed service information and capabilities</li>
                      <li>• Case studies relevant to your industry</li>
                      <li>• Custom service recommendations</li>
                      <li>• Pricing information and package options</li>
                    </>
                  )}
                  {selectedMethod === 'project-quote' && (
                    <>
                      <li>• Detailed project analysis and scope definition</li>
                      <li>• Custom quote with timeline and deliverables</li>
                      <li>• Technology recommendations and approach</li>
                      <li>• Follow-up meeting to discuss proposal in detail</li>
                    </>
                  )}
                  {selectedMethod === 'support' && (
                    <>
                      <li>• Priority response for existing clients</li>
                      <li>• Technical analysis of your issue</li>
                      <li>• Step-by-step resolution plan</li>
                      <li>• Follow-up to ensure complete satisfaction</li>
                    </>
                  )}
                  {selectedMethod === 'partnership' && (
                    <>
                      <li>• Review of partnership proposal and alignment</li>
                      <li>• Discussion of mutual benefits and opportunities</li>
                      <li>• Exploration of collaboration frameworks</li>
                      <li>• Next steps for formal partnership evaluation</li>
                    </>
                  )}
                  {selectedMethod === 'consultation' && (
                    <>
                      <li>• Scheduling of your free strategy session</li>
                      <li>• Pre-call questionnaire to maximize our time</li>
                      <li>• Comprehensive project analysis and recommendations</li>
                      <li>• Detailed follow-up with actionable next steps</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}