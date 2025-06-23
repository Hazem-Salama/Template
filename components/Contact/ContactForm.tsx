'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp } from '@/lib/animations'

interface ContactFormProps {
  selectedMethod: string
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
  hearAboutUs: string
  priority: string
  newsletter: boolean
}

interface ContactResponse {
  success: boolean
  message?: string
  error?: string
  emailSent?: boolean
  contact?: {
    id: string
    referenceId: string
    method: string
    status: string
    submittedAt: string
  }
}

export default function ContactForm({ selectedMethod }: ContactFormProps) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    hearAboutUs: '',
    priority: 'normal',
    newsletter: true
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<'success' | 'error' | null>(null)
  const [contactResult, setContactResult] = useState<ContactResponse | null>(null)

  // Form options data with translation support
  const projectTypes = [
    t('contactForm.projectTypes.branding'),
    t('contactForm.projectTypes.webDev'),
    t('contactForm.projectTypes.mobileDev'),
    t('contactForm.projectTypes.digitalMarketing'),
    t('contactForm.projectTypes.uiux'),
    t('contactForm.projectTypes.ecommerce'),
    t('contactForm.projectTypes.consulting'),
    t('contactForm.projectTypes.multiple'),
    t('contactForm.projectTypes.notSure')
  ]

  const budgetRanges = [
    t('contactForm.budgetRanges.under10k'),
    t('contactForm.budgetRanges.10to15k'),
    t('contactForm.budgetRanges.15to25k'),
    t('contactForm.budgetRanges.25to35k'),
    t('contactForm.budgetRanges.35to50k'),
    t('contactForm.budgetRanges.over50k'),
    t('contactForm.budgetRanges.discuss')
  ]

  const timelineOptions = [
    t('contactForm.timelines.asap'),
    t('contactForm.timelines.oneMonth'),
    t('contactForm.timelines.oneToThree'),
    t('contactForm.timelines.threeToSix'),
    t('contactForm.timelines.sixPlus'),
    t('contactForm.timelines.exploring')
  ]

  const hearAboutOptions = [
    t('contactForm.hearAbout.google'),
    t('contactForm.hearAbout.social'),
    t('contactForm.hearAbout.referral'),
    t('contactForm.hearAbout.linkedin'),
    t('contactForm.hearAbout.previousClient'),
    t('contactForm.hearAbout.event'),
    t('contactForm.hearAbout.content'),
    t('contactForm.hearAbout.advertisement'),
    t('contactForm.hearAbout.other')
  ]

  const priorityOptions = [
    { value: 'urgent', label: t('contactForm.priorities.urgent'), color: 'text-red-400' },
    { value: 'high', label: t('contactForm.priorities.high'), color: 'text-orange-400' },
    { value: 'normal', label: t('contactForm.priorities.normal'), color: 'text-blue-400' },
    { value: 'low', label: t('contactForm.priorities.low'), color: 'text-green-400' }
  ]

  // Get method information based on selected method
  const getMethodInfo = () => {
    switch (selectedMethod) {
      case 'general-inquiry':
        return {
          title: t('contactForm.methods.generalInquiry.title'),
          subtitle: t('contactForm.methods.generalInquiry.subtitle'),
          icon: '💬'
        }
      case 'service-inquiry':
        return {
          title: t('contactForm.methods.serviceInquiry.title'),
          subtitle: t('contactForm.methods.serviceInquiry.subtitle'),
          icon: '🔍'
        }
      case 'project-quote':
        return {
          title: t('contactForm.methods.projectQuote.title'),
          subtitle: t('contactForm.methods.projectQuote.subtitle'),
          icon: '📋'
        }
      case 'support':
        return {
          title: t('contactForm.methods.support.title'),
          subtitle: t('contactForm.methods.support.subtitle'),
          icon: '🛠️'
        }
      case 'partnership':
        return {
          title: t('contactForm.methods.partnership.title'),
          subtitle: t('contactForm.methods.partnership.subtitle'),
          icon: '🤝'
        }
      default:
        return {
          title: t('contactForm.methods.default.title'),
          subtitle: t('contactForm.methods.default.subtitle'),
          icon: '💬'
        }
    }
  }

  const methodInfo = getMethodInfo()

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = t('contactForm.validation.firstNameRequired')
    if (!formData.lastName.trim()) newErrors.lastName = t('contactForm.validation.lastNameRequired')
    if (!formData.email.trim()) newErrors.email = t('contactForm.validation.emailRequired')
    if (!formData.message.trim()) newErrors.message = t('contactForm.validation.messageRequired')

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = t('contactForm.validation.emailInvalid')
    }

    // Phone validation (optional)
    if (formData.phone) {
      const phoneRegex = /^[\+]?[1-9][\d]{9,15}$/
      if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
        newErrors.phone = t('contactForm.validation.phoneInvalid')
      }
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
      // Prepare data for API
      const submissionData = {
        formData: {
          ...formData,
          email: formData.email.toLowerCase().trim(),
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          message: formData.message.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          hearAboutUs: formData.hearAboutUs,
          priority: formData.priority,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          newsletter: formData.newsletter
        },
        method: selectedMethod as 'general-inquiry' | 'project-quote' | 'support' | 'partnership',
        source: 'agency_website'
      }

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(submissionData)
      })

      const responseText = await response.text()
      let result: ContactResponse

      try {
        result = JSON.parse(responseText)
      } catch {
        throw new Error(t('contactForm.errors.invalidResponse'))
      }

      // Check if HTTP request was successful
      if (!response.ok) {
        throw new Error(result?.error || result?.message || t('contactForm.errors.serverError'))
      }

      // Check if API operation was successful
      if (!result || result.success !== true) {
        throw new Error(result?.error || result?.message || t('contactForm.errors.submissionFailed'))
      }

      // Check if we have contact data
      if (!result.contact || !result.contact.referenceId) {
        throw new Error(t('contactForm.errors.couldNotSave'))
      }

      // Success!
      setContactResult(result)
      setSubmissionResult('success')
      setIsSubmitted(true)
      
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : t('contactForm.errors.unknown')
      
      setSubmissionResult('error')
      setIsSubmitted(true)
      
      // Provide user-friendly error messages
      let friendlyErrorMessage = t('contactForm.errors.failedToSend')
      
      if (errorMessage.includes('Failed to fetch')) {
        friendlyErrorMessage = t('contactForm.errors.connectionError')
      } else if (errorMessage.includes('Invalid response')) {
        friendlyErrorMessage = t('contactForm.errors.serverResponseError')
      } else if (errorMessage.includes('Server error')) {
        friendlyErrorMessage = t('contactForm.errors.serverError')
      } else if (errorMessage.includes('could not be saved')) {
        friendlyErrorMessage = t('contactForm.errors.couldNotSave')
      } else if (errorMessage.includes('submission failed')) {
        friendlyErrorMessage = t('contactForm.errors.submissionFailed')
      } else if (errorMessage) {
        friendlyErrorMessage = errorMessage
      }
      
      setContactResult({
        success: false,
        error: friendlyErrorMessage
      })
      
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success State
  if (isSubmitted && submissionResult === 'success' && contactResult?.contact) {
    const contact = contactResult.contact
    
    return (
      <div className="flex-1 flex items-start justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg mt-8"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="text-6xl mb-6 text-center">✅</div>
            <h2 className={`text-3xl font-bold text-white mb-4 text-center ${isRTL ? 'font-arabic' : ''}`}>
              {t('contactForm.success.title')}
            </h2>
            <p className={`text-gray-300 mb-6 leading-relaxed text-center ${isRTL ? 'font-arabic' : ''}`}>
              {t('contactForm.success.message', { method: methodInfo.title.toLowerCase() })}
            </p>
            
            {/* Contact Details */}
            <div className="bg-white/5 rounded-lg p-4 mb-6 text-left" dir={isRTL ? 'rtl' : 'ltr'}>
              <h3 className={`text-lg font-semibold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                {t('contactForm.success.submissionDetails')}
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('contactForm.success.referenceId')}:</span>
                  <span className="text-white font-mono text-xs">{contact.referenceId}</span>
                </div>
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('contactForm.success.type')}:</span>
                  <span className={`text-white ${isRTL ? 'font-arabic' : ''}`}>{methodInfo.title}</span>
                </div>
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('contactForm.success.status')}:</span>
                  <span className="text-green-400 capitalize">{contact.status}</span>
                </div>
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('contactForm.success.email')}:</span>
                  <span className="text-white break-all text-xs">{formData.email}</span>
                </div>
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('contactForm.success.submitted')}:</span>
                  <span className="text-white text-xs">{new Date(contact.submittedAt).toLocaleString()}</span>
                </div>
                {contactResult.emailSent && (
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={isRTL ? 'font-arabic' : ''}>{t('contactForm.success.emailStatus')}:</span>
                    <span className="text-green-400">✅ {t('contactForm.success.sent')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-6 text-left" dir={isRTL ? 'rtl' : 'ltr'}>
              <h3 className={`text-lg font-semibold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                {t('contactForm.success.whatsNext')}
              </h3>
              <ol className="text-sm text-gray-300 space-y-2">
                <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-blue-400 mr-2 font-bold">{isRTL ? '.١' : '1.'}</span>
                  <span className={isRTL ? 'font-arabic mr-2' : ''}>
                    {contactResult.emailSent ? t('contactForm.success.steps.emailSent') : t('contactForm.success.steps.messageSaved')}
                  </span>
                </li>
                <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-blue-400 mr-2 font-bold">{isRTL ? '.٢' : '2.'}</span>
                  <span className={isRTL ? 'font-arabic mr-2' : ''}>
                    {t('contactForm.success.steps.teamReview', { method: methodInfo.title.toLowerCase() })}
                  </span>
                </li>
                <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-blue-400 mr-2 font-bold">{isRTL ? '.٣' : '3.'}</span>
                  <span className={isRTL ? 'font-arabic mr-2' : ''}>
                    {t('contactForm.success.steps.response')}
                  </span>
                </li>
                <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-blue-400 mr-2 font-bold">{isRTL ? '.٤' : '4.'}</span>
                  <span className={isRTL ? 'font-arabic mr-2' : ''}>
                    {t('contactForm.success.steps.followUp')}
                  </span>
                </li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsSubmitted(false)
                  setSubmissionResult(null)
                  setContactResult(null)
                  setFormData({
                    firstName: '', lastName: '', email: '', phone: '', company: '',
                    projectType: '', budget: '', timeline: '', message: '', hearAboutUs: '',
                    priority: 'normal', newsletter: true
                  })
                  setErrors({})
                }}
                className={`w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors ${isRTL ? 'font-arabic' : ''}`}
              >
                {t('contactForm.success.sendAnother')}
              </motion.button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { 
                    if (typeof window !== 'undefined') {
                      window.location.href = '/'
                    }
                  }}
                  className={`w-full bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-sm ${isRTL ? 'font-arabic' : ''}`}
                >
                  {t('contactForm.success.returnHome')}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { 
                    if (typeof window !== 'undefined') {
                      window.location.href = '/book-call'
                    }
                  }}
                  className={`w-full bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-sm ${isRTL ? 'font-arabic' : ''}`}
                >
                  {t('contactForm.success.bookCall')}
                </motion.button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className={`text-gray-400 text-xs mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t('contactForm.success.needHelp')}
              </p>
              <a href="tel:+201060233872" className="text-red-400 hover:text-red-300 font-semibold text-sm">
                +20 106 023 3872
              </a>
              <p className={`text-gray-400 text-xs mt-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t('contactForm.success.referenceIdLabel')}: {contact.referenceId}
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
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="text-6xl mb-6">❌</div>
            <h2 className={`text-3xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('contactForm.error.title')}
            </h2>
            <p className={`text-gray-300 mb-6 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {t('contactForm.error.message')}
            </p>
            
            {/* Error Details */}
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left" dir={isRTL ? 'rtl' : 'ltr'}>
              <h3 className={`text-lg font-semibold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                {t('contactForm.error.errorDetails')}
              </h3>
              <p className="text-red-300 text-sm">
                {contactResult?.error || t('contactForm.errors.unknown')}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsSubmitted(false)
                  setSubmissionResult(null)
                  setContactResult(null)
                  setErrors({})
                }}
                className={`w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors ${isRTL ? 'font-arabic' : ''}`}
              >
                {t('contactForm.error.tryAgain')}
              </motion.button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { 
                    if (typeof window !== 'undefined') {
                      window.location.href = 'tel:+201060233872'
                    }
                  }}
                  className={`w-full bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-sm ${isRTL ? 'font-arabic' : ''}`}
                >
                  📞 {t('contactForm.error.callUs')}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { 
                    if (typeof window !== 'undefined') {
                      window.location.href = 'mailto:Unlimitedadvv@gmail.com?subject=Contact Form Issue&body=I had trouble submitting the contact form. Please contact me about: ' + encodeURIComponent(formData.message.substring(0, 100))
                    }
                  }}
                  className={`w-full bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-sm ${isRTL ? 'font-arabic' : ''}`}
                >
                  📧 {t('contactForm.error.emailUs')}
                </motion.button>
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
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">{methodInfo.icon}</div>
            <h2 className={`text-3xl font-bold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>
              {methodInfo.title}
            </h2>
            <p className={`text-gray-300 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {methodInfo.subtitle}
            </p>
            <div className={`inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm ${isRTL ? 'flex-row-reverse space-x-reverse font-arabic' : ''}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('contactForm.guarantee')}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className={`text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {t('contactForm.sections.personalInfo')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('contactForm.fields.firstName')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                      errors.firstName ? 'border-red-500' : 'border-white/30'
                    } ${isRTL ? 'text-right font-arabic' : ''}`}
                    placeholder={t('contactForm.placeholders.firstName')}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  {errors.firstName && (
                    <p className={`text-red-400 text-sm mt-1 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('contactForm.fields.lastName')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                      errors.lastName ? 'border-red-500' : 'border-white/30'
                    } ${isRTL ? 'text-right font-arabic' : ''}`}
                    placeholder={t('contactForm.placeholders.lastName')}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  {errors.lastName && (
                    <p className={`text-red-400 text-sm mt-1 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className={`text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {t('contactForm.sections.contactInfo')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('contactForm.fields.email')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-white/30'
                    }`}
                    placeholder={t('contactForm.placeholders.email')}
                    dir="ltr"
                  />
                  {errors.email && (
                    <p className={`text-red-400 text-sm mt-1 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('contactForm.fields.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-white/30'
                    }`}
                    placeholder={t('contactForm.placeholders.phone')}
                    dir="ltr"
                  />
                  {errors.phone && (
                    <p className={`text-red-400 text-sm mt-1 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('contactForm.fields.company')}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right font-arabic' : ''}`}
                  placeholder={t('contactForm.placeholders.company')}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
            </div>

            {/* Project Information - Show for project-related methods */}
            {(selectedMethod === 'project-quote' || selectedMethod === 'general-inquiry' || selectedMethod === 'service-inquiry') && (
              <div>
                <h3 className={`text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('contactForm.sections.projectInfo')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {t('contactForm.fields.projectType')}
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${isRTL ? 'font-arabic' : ''}`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    >
                      <option value="" className="bg-gray-800">
                        {t('contactForm.placeholders.projectType')}
                      </option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-gray-800">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {t('contactForm.fields.budget')}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${isRTL ? 'font-arabic' : ''}`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    >
                      <option value="" className="bg-gray-800">
                        {t('contactForm.placeholders.budget')}
                      </option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range} className="bg-gray-800">{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {t('contactForm.fields.timeline')}
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${isRTL ? 'font-arabic' : ''}`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    >
                      <option value="" className="bg-gray-800">
                        {t('contactForm.placeholders.timeline')}
                      </option>
                      {timelineOptions.map((option, index) => (
                        <option key={index} value={option} className="bg-gray-800">{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {t('contactForm.fields.priority')}
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${isRTL ? 'font-arabic' : ''}`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    >
                      {priorityOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-gray-800">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Message Section */}
            <div>
              <h3 className={`text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {t('contactForm.sections.message')}
              </h3>
              <div>
                <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('contactForm.fields.messageLabel', { 
                    type: selectedMethod === 'support' ? t('contactForm.messageTypes.support') :
                          selectedMethod === 'partnership' ? t('contactForm.messageTypes.partnership') :
                          selectedMethod === 'service-inquiry' ? t('contactForm.messageTypes.service') :
                          t('contactForm.messageTypes.project')
                  })} <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/30'
                  } ${isRTL ? 'text-right font-arabic' : ''}`}
                  placeholder={
                    selectedMethod === 'support' 
                      ? t('contactForm.placeholders.message.support')
                      : selectedMethod === 'partnership'
                      ? t('contactForm.placeholders.message.partnership')
                      : selectedMethod === 'project-quote'
                      ? t('contactForm.placeholders.message.project-quote')
                      : selectedMethod === 'service-inquiry'
                      ? t('contactForm.placeholders.message.service-inquiry')
                      : t('contactForm.placeholders.message.default')
                  }
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
                {errors.message && (
                  <p className={`text-red-400 text-sm mt-1 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {errors.message}
                  </p>
                )}
                <p className={`text-gray-400 text-xs mt-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('contactForm.messageHelp', { method: methodInfo.title.toLowerCase() })}
                </p>
              </div>

              <div className="mt-6">
                <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('contactForm.fields.hearAbout')}
                </label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${isRTL ? 'font-arabic' : ''}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <option value="" className="bg-gray-800">
                    {t('contactForm.placeholders.hearAbout')}
                  </option>
                  {hearAboutOptions.map((option, index) => (
                    <option key={index} value={option} className="bg-gray-800">{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white/5 rounded-lg p-4">
              <label className={`flex items-start cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className={`w-5 h-5 text-red-500 bg-white/20 border-white/30 rounded focus:ring-red-500 focus:ring-2 mt-0.5 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}
                />
                <span className={`text-white text-sm leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
                  <strong>{t('contactForm.newsletter.title')}</strong><br />
                  {t('contactForm.newsletter.description')}
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg flex items-center justify-center ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className={`w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ${isRTL ? 'ml-3' : 'mr-3'}`} />
                    {t('contactForm.buttons.sending')}
                  </>
                ) : (
                  <>
                    <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {t('contactForm.buttons.send')}
                  </>
                )}
              </motion.button>
            </div>

            {/* Trust Indicators & Additional Info */}
            <div className="text-center pt-6 border-t border-white/20 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className={`flex items-center justify-center space-x-2 text-green-400 text-sm ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('contactForm.trust.response')}</span>
                </div>
                <div className={`flex items-center justify-center space-x-2 text-green-400 text-sm ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('contactForm.trust.consultation')}</span>
                </div>
                <div className={`flex items-center justify-center space-x-2 text-green-400 text-sm ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('contactForm.trust.advice')}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className={`text-gray-300 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                  {t('contactForm.footer.questions')}{' '}
                  <a href="tel:+201060233872" className="text-red-500 hover:text-red-400 font-semibold transition-colors">
                    +20 106 023 3872
                  </a>
                </p>
                <p className={`text-gray-400 text-xs ${isRTL ? 'font-arabic' : ''}`}>
                  {t('contactForm.footer.availability')}
                </p>
                <p className={`text-gray-400 text-xs ${isRTL ? 'font-arabic' : ''}`}>
                  {t('contactForm.footer.agreement')}{' '}
                  <a href="/privacy-policy" className="text-red-400 hover:text-red-300 underline">
                    {t('contactForm.footer.privacyPolicy')}
                  </a>{' '}
                  {t('contactForm.footer.and')}{' '}
                  <a href="/terms-of-service" className="text-red-400 hover:text-red-300 underline">
                    {t('contactForm.footer.termsOfService')}
                  </a>
                </p>
              </div>

              {/* Method-specific benefits */}
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-left" dir={isRTL ? 'rtl' : 'ltr'}>
                <h4 className={`text-blue-300 font-medium text-sm mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('contactForm.expectations.title', { method: methodInfo.title.toLowerCase() })}
                </h4>
                <ul className="text-blue-200 text-xs space-y-1">
                  {selectedMethod === 'general-inquiry' && (
                    <>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.generalInquiry.0')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.generalInquiry.1')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.generalInquiry.2')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.generalInquiry.3')}</li>
                    </>
                  )}
                  {selectedMethod === 'service-inquiry' && (
                    <>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.serviceInquiry.0')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.serviceInquiry.1')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.serviceInquiry.2')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.serviceInquiry.3')}</li>
                    </>
                  )}
                  {selectedMethod === 'project-quote' && (
                    <>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.projectQuote.0')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.projectQuote.1')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.projectQuote.2')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.projectQuote.3')}</li>
                    </>
                  )}
                  {selectedMethod === 'support' && (
                    <>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.support.0')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.support.1')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.support.2')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.support.3')}</li>
                    </>
                  )}
                  {selectedMethod === 'partnership' && (
                    <>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.partnership.0')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.partnership.1')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.partnership.2')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('contactForm.expectations.partnership.3')}</li>
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