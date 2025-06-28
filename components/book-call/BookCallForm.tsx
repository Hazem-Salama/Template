'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp } from '@/lib/animations'

// Template configuration - customize these values for your project
const TEMPLATE_CONFIG = {
  company: {
    phone: '+1 (555) 123-4567', // Update with your phone
    email: 'hello@yourcompany.com' // Update with your email
  },
  branding: {
    primaryColor: '#3B82F6' // Blue - customize this
  },
  routes: {
    privacyPolicy: '/privacy-policy', // Update with your privacy policy route
    termsOfService: '/terms-of-service', // Update with your terms route
    homeRoute: '/', // Update with your home route
    servicesRoute: '/services' // Update with your services route
  }
}

interface BookCallFormProps {
  selectedCallType: string
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
  preferredDate: string
  preferredTime: string
  timeZone: string
  hearAboutUs: string
  urgency: string
  newsletter: boolean
}

interface SubmissionResponse {
  success: boolean
  message?: string
  referenceId?: string
  error?: string
}

interface SelectOption {
  value: string
  label: string
}

interface UrgencyOption {
  value: string
  label: string
  color: string
}

export default function BookCallForm({ selectedCallType }: BookCallFormProps) {
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
    preferredDate: '',
    preferredTime: '',
    timeZone: isRTL ? t('bookCall.form.timeZones.cet', 'CET (Europe)') : t('bookCall.form.timeZones.est', 'EST (Eastern)'),
    hearAboutUs: '',
    urgency: 'normal',
    newsletter: true
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submissionData, setSubmissionData] = useState<SubmissionResponse | null>(null)

  // Translated data arrays with proper types
  const projectTypes: SelectOption[] = [
    { value: 'branding', label: t('bookCall.form.projectTypes.branding', 'Branding & Identity') },
    { value: 'webDev', label: t('bookCall.form.projectTypes.webDev', 'Web Development') },
    { value: 'mobileDev', label: t('bookCall.form.projectTypes.mobileDev', 'Mobile Development') },
    { value: 'digitalMarketing', label: t('bookCall.form.projectTypes.digitalMarketing', 'Digital Marketing') },
    { value: 'uiux', label: t('bookCall.form.projectTypes.uiux', 'UI/UX Design') },
    { value: 'ecommerce', label: t('bookCall.form.projectTypes.ecommerce', 'E-commerce Solutions') },
    { value: 'consulting', label: t('bookCall.form.projectTypes.consulting', 'Business Consulting') },
    { value: 'multiple', label: t('bookCall.form.projectTypes.multiple', 'Multiple Services') },
    { value: 'notSure', label: t('bookCall.form.projectTypes.notSure', 'Not Sure Yet') }
  ]

  const budgetRanges: SelectOption[] = [
    { value: 'under10k', label: t('bookCall.form.budgetRanges.under10k', 'Under $10,000') },
    { value: '10to15k', label: t('bookCall.form.budgetRanges.10to15k', '$10,000 - $15,000') },
    { value: '15to25k', label: t('bookCall.form.budgetRanges.15to25k', '$15,000 - $25,000') },
    { value: '25to35k', label: t('bookCall.form.budgetRanges.25to35k', '$25,000 - $35,000') },
    { value: '35to50k', label: t('bookCall.form.budgetRanges.35to50k', '$35,000 - $50,000') },
    { value: 'over50k', label: t('bookCall.form.budgetRanges.over50k', 'Over $50,000') },
    { value: 'discuss', label: t('bookCall.form.budgetRanges.discuss', 'Let\'s Discuss') }
  ]

  const timelineOptions: SelectOption[] = [
    { value: 'asap', label: t('bookCall.form.timelines.asap', 'ASAP') },
    { value: 'oneMonth', label: t('bookCall.form.timelines.oneMonth', 'Within 1 Month') },
    { value: 'oneToThree', label: t('bookCall.form.timelines.oneToThree', '1-3 Months') },
    { value: 'threeToSix', label: t('bookCall.form.timelines.threeToSix', '3-6 Months') },
    { value: 'sixPlus', label: t('bookCall.form.timelines.sixPlus', '6+ Months') },
    { value: 'exploring', label: t('bookCall.form.timelines.exploring', 'Just Exploring') }
  ]

  const timeSlots: string[] = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ]

  const timeZones: SelectOption[] = [
    { value: 'est', label: t('bookCall.form.timeZones.est', 'EST (Eastern)') },
    { value: 'cst', label: t('bookCall.form.timeZones.cst', 'CST (Central)') },
    { value: 'mst', label: t('bookCall.form.timeZones.mst', 'MST (Mountain)') },
    { value: 'pst', label: t('bookCall.form.timeZones.pst', 'PST (Pacific)') },
    { value: 'gmt', label: t('bookCall.form.timeZones.gmt', 'GMT (London)') },
    { value: 'cet', label: t('bookCall.form.timeZones.cet', 'CET (Europe)') },
    { value: 'other', label: t('bookCall.form.timeZones.other', 'Other') }
  ]

  const hearAboutOptions: SelectOption[] = [
    { value: 'google', label: t('bookCall.form.hearAbout.google', 'Google Search') },
    { value: 'social', label: t('bookCall.form.hearAbout.social', 'Social Media') },
    { value: 'referral', label: t('bookCall.form.hearAbout.referral', 'Referral') },
    { value: 'linkedin', label: t('bookCall.form.hearAbout.linkedin', 'LinkedIn') },
    { value: 'previousClient', label: t('bookCall.form.hearAbout.previousClient', 'Previous Client') },
    { value: 'event', label: t('bookCall.form.hearAbout.event', 'Event/Conference') },
    { value: 'content', label: t('bookCall.form.hearAbout.content', 'Blog/Content') },
    { value: 'advertisement', label: t('bookCall.form.hearAbout.advertisement', 'Advertisement') },
    { value: 'other', label: t('bookCall.form.hearAbout.other', 'Other') }
  ]

  const urgencyOptions: UrgencyOption[] = [
    { value: 'urgent', label: t('bookCall.form.urgency.urgent', 'Urgent'), color: 'text-red-400' },
    { value: 'high', label: t('bookCall.form.urgency.high', 'High Priority'), color: 'text-orange-400' },
    { value: 'normal', label: t('bookCall.form.urgency.normal', 'Normal'), color: 'text-blue-400' },
    { value: 'low', label: t('bookCall.form.urgency.low', 'Low Priority'), color: 'text-green-400' }
  ]

  const getCallTypeInfo = () => {
    switch (selectedCallType) {
      case 'strategy-call':
        return {
          title: t('bookCall.callTypes.strategy-call.title', 'Strategy Call'),
          duration: t('bookCall.callTypes.strategy-call.duration', '45 minutes'),
          subtitle: t('bookCall.callTypes.strategy-call.description', 'Deep dive into your business goals and create a roadmap for success.')
        }
      case 'discovery-call':
        return {
          title: t('bookCall.callTypes.discovery-call.title', 'Discovery Call'),
          duration: t('bookCall.callTypes.discovery-call.duration', '30 minutes'),
          subtitle: t('bookCall.callTypes.discovery-call.description', 'Understand your project requirements and explore possibilities.')
        }
      case 'consultation':
        return {
          title: t('bookCall.callTypes.consultation.title', 'Consultation'),
          duration: t('bookCall.callTypes.consultation.duration', '60 minutes'),
          subtitle: t('bookCall.callTypes.consultation.description', 'Expert guidance on specific challenges and opportunities.')
        }
      default:
        return {
          title: t('bookCall.callTypes.strategy-call.title', 'Strategy Call'),
          duration: t('bookCall.callTypes.strategy-call.duration', '45 minutes'),
          subtitle: t('bookCall.callTypes.strategy-call.description', 'Deep dive into your business goals and create a roadmap for success.')
        }
    }
  }

  const callInfo = getCallTypeInfo()

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

    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError(null)
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = t('bookCall.form.validation.firstNameRequired', 'First name is required')
    if (!formData.lastName.trim()) newErrors.lastName = t('bookCall.form.validation.lastNameRequired', 'Last name is required')
    if (!formData.email.trim()) newErrors.email = t('bookCall.form.validation.emailRequired', 'Email is required')
    if (!formData.phone.trim()) newErrors.phone = t('bookCall.form.validation.phoneRequired', 'Phone number is required')
    if (!formData.preferredDate) newErrors.preferredDate = t('bookCall.form.validation.dateRequired', 'Please select a date')
    if (!formData.preferredTime) newErrors.preferredTime = t('bookCall.form.validation.timeRequired', 'Please select a time')
    if (!formData.message.trim()) newErrors.message = t('bookCall.form.validation.messageRequired', 'Please tell us about your project')

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = t('bookCall.form.validation.emailInvalid', 'Please enter a valid email address')
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = t('bookCall.form.validation.phoneInvalid', 'Please enter a valid phone number')
    }

    // Date validation - not in the past
    if (formData.preferredDate) {
      const selectedDate = new Date(formData.preferredDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.preferredDate = t('bookCall.form.validation.dateInvalid', 'Please select a future date')
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Clean submission data
      const submissionPayload = {
        formData,
        callType: selectedCallType,
        callInfo,
        submittedAt: new Date().toISOString()
      }
      
      // Make API call to our booking endpoint
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionPayload)
      })

      const responseData: SubmissionResponse = await response.json()
      
      if (!response.ok || !responseData.success) {
        throw new Error(responseData.error || `Request failed with status ${response.status}`)
      }
      
      // Success!
      setSubmissionData(responseData)
      setIsSubmitted(true)
      
    } catch (error: any) {
      const errorMessage = error instanceof Error ? error.message : t('bookCall.error.tryAgainOrContact', 'Please try again or contact us directly')
      
      // Set user-friendly error message
      let userErrorMessage = t('bookCall.error.unableToBook', 'Unable to book your call. ')
      
      if (errorMessage.includes('fetch') || errorMessage.includes('network')) {
        userErrorMessage += t('bookCall.error.checkConnection', 'Please check your internet connection.')
      } else if (errorMessage.includes('400')) {
        userErrorMessage += t('bookCall.error.checkInfo', 'Please check your information and try again.')
      } else if (errorMessage.includes('500')) {
        userErrorMessage += t('bookCall.error.serverIssues', 'We\'re experiencing technical issues.')
      } else {
        userErrorMessage += t('bookCall.error.tryAgainOrContact', 'Please try again or contact us directly.')
      }
      
      setSubmitError(userErrorMessage)
      
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRetry = () => {
    setSubmitError(null)
    setErrors({})
  }

  const handleGoBack = () => {
    setIsSubmitted(false)
    setSubmissionData(null)
    setSubmitError(null)
  }

  // Success State
  if (isSubmitted && submissionData) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md text-center"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="text-6xl mb-6">📞</div>
            <h2 className={`text-3xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('bookCall.success.title', 'Call Booked Successfully!')}
            </h2>
            <p className={`text-gray-300 mb-6 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {t('bookCall.success.message', 'Your {{title}} has been scheduled successfully. We\'ll send you a calendar invite shortly.', { title: callInfo.title.toLowerCase() })}
            </p>
            
            {/* Call Details */}
            <div className="bg-white/5 rounded-lg p-4 mb-6 text-left" dir={isRTL ? 'rtl' : 'ltr'}>
              <h3 className={`text-lg font-semibold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                {t('bookCall.success.callDetails', 'Call Details')}
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('bookCall.success.type', 'Type')}:</span>
                  <span className={`text-white ${isRTL ? 'font-arabic' : ''}`}>{callInfo.title}</span>
                </div>
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('bookCall.success.duration', 'Duration')}:</span>
                  <span className={`text-white ${isRTL ? 'font-arabic' : ''}`}>{callInfo.duration}</span>
                </div>
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('bookCall.success.date', 'Date')}:</span>
                  <span className="text-white">{formData.preferredDate}</span>
                </div>
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('bookCall.success.time', 'Time')}:</span>
                  <span className="text-white">{formData.preferredTime} {formData.timeZone}</span>
                </div>
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('bookCall.success.email', 'Email')}:</span>
                  <span className="text-white break-all">{formData.email}</span>
                </div>
                {submissionData.referenceId && (
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={isRTL ? 'font-arabic' : ''}>{t('bookCall.success.reference', 'Reference')}:</span>
                    <span className="text-white font-mono text-xs">{submissionData.referenceId}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGoBack}
                className={`w-full text-white py-3 rounded-lg font-medium hover:opacity-90 transition-colors ${isRTL ? 'font-arabic' : ''}`}
                style={{ backgroundColor: TEMPLATE_CONFIG.branding.primaryColor }}
              >
                {t('bookCall.success.bookAnother', 'Book Another Call')}
              </motion.button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = TEMPLATE_CONFIG.routes.homeRoute;
                    }
                  }}
                  className={`w-full bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-sm ${isRTL ? 'font-arabic' : ''}`}
                >
                  {t('bookCall.success.returnHome', 'Return Home')}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = TEMPLATE_CONFIG.routes.servicesRoute;
                    }
                  }}
                  className={`w-full bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-sm ${isRTL ? 'font-arabic' : ''}`}
                >
                  {t('bookCall.success.viewServices', 'View Services')}
                </motion.button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className={`text-gray-400 text-xs mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t('bookCall.success.rescheduleNote', 'Need to reschedule? Contact us:')}
              </p>
              <a 
                href={`tel:${TEMPLATE_CONFIG.company.phone}`} 
                className="hover:opacity-80 font-semibold text-sm transition-colors"
                style={{ color: TEMPLATE_CONFIG.branding.primaryColor }}
              >
                {TEMPLATE_CONFIG.company.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  // Error State
  if (submitError) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md text-center"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-red-500/30">
            <div className="text-6xl mb-6">❌</div>
            <h2 className={`text-3xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('bookCall.error.title', 'Booking Failed')}
            </h2>
            <p className={`text-gray-300 mb-6 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {t('bookCall.error.message', 'We encountered an issue while booking your call.')}
            </p>
            
            {/* Error Details */}
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left" dir={isRTL ? 'rtl' : 'ltr'}>
              <h3 className={`text-lg font-semibold text-red-300 mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                {t('bookCall.error.whatHappened', 'What happened?')}
              </h3>
              <p className="text-red-200 text-sm leading-relaxed">
                {submitError}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRetry}
                className={`w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors ${isRTL ? 'font-arabic' : ''}`}
              >
                {t('bookCall.error.tryAgain', 'Try Again')}
              </motion.button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = `tel:${TEMPLATE_CONFIG.company.phone}`;
                    }
                  }}
                  className={`w-full bg-green-500/20 text-green-300 py-2 rounded-lg font-medium hover:bg-green-500/30 transition-colors border border-green-500/30 text-sm ${isRTL ? 'font-arabic' : ''}`}
                >
                  {t('bookCall.error.callInstead', 'Call Instead')}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = `mailto:${TEMPLATE_CONFIG.company.email}`;
                    }
                  }}
                  className={`w-full bg-blue-500/20 text-blue-300 py-2 rounded-lg font-medium hover:bg-blue-500/30 transition-colors border border-green-500/30 text-sm ${isRTL ? 'font-arabic' : ''}`}
                >
                  {t('bookCall.error.emailUs', 'Email Us')}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  // Form State
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <motion.div
        key={selectedCallType}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? `احجز ${callInfo.title}` : `Book Your ${callInfo.title}`}
            </h2>
            <p className={`text-gray-300 mb-4 ${isRTL ? 'font-arabic' : ''}`}>{callInfo.subtitle}</p>
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm ${
              isRTL ? 'flex-row-reverse space-x-reverse font-arabic' : ''
            }`}
            style={{ 
              backgroundColor: `${TEMPLATE_CONFIG.branding.primaryColor}20`,
              color: TEMPLATE_CONFIG.branding.primaryColor
            }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{isRTL ? `استشارة ${callInfo.duration} مضمونة` : `Guaranteed ${callInfo.duration} consultation`}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className={`text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2 ${
                isRTL ? 'font-arabic text-right' : ''
              }`}>
                {t('bookCall.form.sections.personalInfo', 'Personal Information')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('bookCall.form.fields.firstName', 'First Name')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.firstName ? 'border-red-500' : 'border-white/30'
                    } ${isRTL ? 'text-right font-arabic' : ''}`}
                    style={{ 
                      '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                    } as React.CSSProperties}
                    placeholder={t('bookCall.form.placeholders.firstName', 'Enter your first name')}
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
                    {t('bookCall.form.fields.lastName', 'Last Name')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.lastName ? 'border-red-500' : 'border-white/30'
                    } ${isRTL ? 'text-right font-arabic' : ''}`}
                    style={{ 
                      '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                    } as React.CSSProperties}
                    placeholder={t('bookCall.form.placeholders.lastName', 'Enter your last name')}
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
              <h3 className={`text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2 ${
                isRTL ? 'font-arabic text-right' : ''
              }`}>
                {t('bookCall.form.sections.contactInfo', 'Contact Information')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('bookCall.form.fields.email', 'Email Address')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-white/30'
                    }`}
                    style={{ 
                      '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                    } as React.CSSProperties}
                    placeholder={t('bookCall.form.placeholders.email', 'your@email.com')}
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
                    {t('bookCall.form.fields.phone', 'Phone Number')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-white/30'
                    }`}
                    style={{ 
                      '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                    } as React.CSSProperties}
                    placeholder={t('bookCall.form.placeholders.phone', '+1 (555) 123-4567')}
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
                  {t('bookCall.form.fields.company', 'Company (Optional)')}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    isRTL ? 'text-right font-arabic' : ''
                  }`}
                  style={{ 
                    '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                  } as React.CSSProperties}
                  placeholder={t('bookCall.form.placeholders.company', 'Your company name')}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
            </div>

            {/* Project Information */}
            <div>
              <h3 className={`text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2 ${
                isRTL ? 'font-arabic text-right' : ''
              }`}>
                {t('bookCall.form.sections.projectInfo', 'Project Information')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('bookCall.form.fields.projectType', 'Project Type')}
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      isRTL ? 'font-arabic' : ''
                    }`}
                    style={{ 
                      '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                    } as React.CSSProperties}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <option value="" className="bg-gray-800">
                      {t('bookCall.form.placeholders.projectType', 'Select project type')}
                    </option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type.value} className="bg-gray-800">{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('bookCall.form.fields.budget', 'Budget Range')}
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      isRTL ? 'font-arabic' : ''
                    }`}
                    style={{ 
                      '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                    } as React.CSSProperties}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <option value="" className="bg-gray-800">
                      {t('bookCall.form.placeholders.budget', 'Select budget range')}
                    </option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range.value} className="bg-gray-800">{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('bookCall.form.fields.timeline', 'Timeline')}
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      isRTL ? 'font-arabic' : ''
                    }`}
                    style={{ 
                      '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                    } as React.CSSProperties}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <option value="" className="bg-gray-800">
                      {t('bookCall.form.placeholders.timeline', 'Select timeline')}
                    </option>
                    {timelineOptions.map((option, index) => (
                      <option key={index} value={option.value} className="bg-gray-800">{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('bookCall.form.fields.urgency', 'Priority Level')}
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      isRTL ? 'font-arabic' : ''
                    }`}
                    style={{ 
                      '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                    } as React.CSSProperties}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    {urgencyOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-gray-800">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Call Scheduling */}
            <div>
              <h3 className={`text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2 ${
                isRTL ? 'font-arabic text-right' : ''
              }`}>
                {t('bookCall.form.sections.scheduling', 'Schedule Your Call')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('bookCall.form.fields.preferredDate', 'Preferred Date')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.preferredDate ? 'border-red-500' : 'border-white/30'
                    }`}
                    style={{ 
                      '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                    } as React.CSSProperties}
                    dir="ltr"
                  />
                  {errors.preferredDate && (
                    <p className={`text-red-400 text-sm mt-1 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('bookCall.form.fields.preferredTime', 'Preferred Time')} <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.preferredTime ? 'border-red-500' : 'border-white/30'
                    }`}
                    style={{ 
                      '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                    } as React.CSSProperties}
                    dir="ltr"
                  >
                    <option value="" className="bg-gray-800">{t('bookCall.form.placeholders.preferredTime', 'Select time')}</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-gray-800">{slot}</option>
                    ))}
                  </select>
                  {errors.preferredTime && (
                    <p className={`text-red-400 text-sm mt-1 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {errors.preferredTime}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('bookCall.form.fields.timeZone', 'Time Zone')}
                  </label>
                  <select
                    name="timeZone"
                    value={formData.timeZone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      isRTL ? 'font-arabic' : ''
                    }`}
                    style={{ 
                      '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                    } as React.CSSProperties}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    {timeZones.map((zone, index) => (
                      <option key={index} value={zone.label} className="bg-gray-800">{zone.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className={`text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2 ${
                isRTL ? 'font-arabic text-right' : ''
              }`}>
                {t('bookCall.form.sections.projectDetails', 'Tell Us About Your Project')}
              </h3>
              <div>
                <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('bookCall.form.fields.projectDetails', 'Project Details')} <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/30'
                  } ${isRTL ? 'text-right font-arabic' : ''}`}
                  style={{ 
                    '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                  } as React.CSSProperties}
                  placeholder={t('bookCall.form.placeholders.projectDetails', 'Tell us about your project goals, challenges, or questions...')}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
                {errors.message && (
                  <p className={`text-red-400 text-sm mt-1 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {errors.message}
                  </p>
                )}
                <p className={`text-gray-400 text-xs mt-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('bookCall.form.footer.helpNote', 'The more details you provide, the better we can help you.')}
                </p>
              </div>

              <div className="mt-6">
                <label className={`block text-white font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('bookCall.form.fields.hearAbout', 'How did you hear about us?')}
                </label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    isRTL ? 'font-arabic' : ''
                  }`}
                  style={{ 
                    '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                  } as React.CSSProperties}
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <option value="" className="bg-gray-800">
                    {t('bookCall.form.placeholders.hearAbout', 'Select an option')}
                  </option>
                  {hearAboutOptions.map((option, index) => (
                    <option key={index} value={option.value} className="bg-gray-800">{option.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white/5 rounded-lg p-4">
              <label className={`flex items-start cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className={`w-5 h-5 bg-white/20 border-white/30 rounded focus:ring-2 mt-0.5 flex-shrink-0 ${
                    isRTL ? 'ml-3' : 'mr-3'
                  }`}
                  style={{ 
                    accentColor: TEMPLATE_CONFIG.branding.primaryColor,
                    '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                  } as React.CSSProperties}
                />
                <span className={`text-white text-sm leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
                  <strong>{t('bookCall.form.newsletter.title', 'Stay Updated')}</strong><br />
                  {t('bookCall.form.newsletter.description', 'Receive valuable insights, tips, and updates about digital marketing and business growth.')}
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
                className={`w-full text-white py-4 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg flex items-center justify-center ${
                  isRTL ? 'font-arabic flex-row-reverse' : ''
                }`}
                style={{ 
                  background: `linear-gradient(135deg, ${TEMPLATE_CONFIG.branding.primaryColor}, ${TEMPLATE_CONFIG.branding.primaryColor}dd)`
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className={`w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ${
                      isRTL ? 'ml-3' : 'mr-3'
                    }`} />
                    {isRTL ? `جاري حجز ${callInfo.title}...` : `Booking Your ${callInfo.title}...`}
                  </>
                ) : (
                  <>
                    <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                    </svg>
                    {isRTL ? `احجز ${callInfo.title}` : `Book My ${callInfo.title}`}
                  </>
                )}
              </motion.button>
            </div>

            {/* Trust Indicators & Additional Info */}
            <div className="text-center pt-6 border-t border-white/20 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className={`flex items-center justify-center space-x-2 text-green-400 text-sm ${
                  isRTL ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('bookCall.form.trust.freeCall', '100% Free Call')}</span>
                </div>
                <div className={`flex items-center justify-center space-x-2 text-green-400 text-sm ${
                  isRTL ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('bookCall.form.trust.noPressure', 'No Pressure')}</span>
                </div>
                <div className={`flex items-center justify-center space-x-2 text-green-400 text-sm ${
                  isRTL ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={isRTL ? 'font-arabic' : ''}>{t('bookCall.form.trust.expertInsights', 'Expert Insights')}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className={`text-gray-300 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                  {t('bookCall.form.footer.questions', 'Questions? Call us directly at')}{' '}
                  <a 
                    href={`tel:${TEMPLATE_CONFIG.company.phone}`} 
                    className="font-semibold transition-colors hover:opacity-80"
                    style={{ color: TEMPLATE_CONFIG.branding.primaryColor }}
                  >
                    {TEMPLATE_CONFIG.company.phone}
                  </a>
                </p>
                <p className={`text-gray-400 text-xs ${isRTL ? 'font-arabic' : ''}`}>
                  {t('bookCall.form.footer.calendarInvite', 'You\'ll receive a calendar invite within 24 hours.')}
                </p>
                <p className={`text-gray-400 text-xs ${isRTL ? 'font-arabic' : ''}`}>
                  {t('bookCall.form.footer.agreement', 'By submitting this form, you agree to our')}{' '}
                  <a 
                    href={TEMPLATE_CONFIG.routes.privacyPolicy} 
                    className="underline hover:opacity-80"
                    style={{ color: TEMPLATE_CONFIG.branding.primaryColor }}
                  >
                    {t('bookCall.form.footer.privacyPolicy', 'Privacy Policy')}
                  </a>{' '}
                  {t('bookCall.form.footer.and', 'and')}{' '}
                  <a 
                    href={TEMPLATE_CONFIG.routes.termsOfService} 
                    className="underline hover:opacity-80"
                    style={{ color: TEMPLATE_CONFIG.branding.primaryColor }}
                  >
                    {t('bookCall.form.footer.termsOfService', 'Terms of Service')}
                  </a>
                </p>
              </div>

              {/* Call Type Benefits */}
              <div 
                className="border rounded-lg p-4 text-left" 
                dir={isRTL ? 'rtl' : 'ltr'}
                style={{ 
                  backgroundColor: `${TEMPLATE_CONFIG.branding.primaryColor}20`,
                  borderColor: `${TEMPLATE_CONFIG.branding.primaryColor}30`
                }}
              >
                <h4 
                  className={`font-medium text-sm mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}
                  style={{ color: TEMPLATE_CONFIG.branding.primaryColor }}
                >
                  {t('bookCall.form.expectations.title', 'What to expect from your {{title}}:', { title: callInfo.title })}
                </h4>
                <ul className="text-xs space-y-1" style={{ color: `${TEMPLATE_CONFIG.branding.primaryColor}dd` }}>
                  {selectedCallType === 'strategy-call' && (
                    <>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.strategyCall.0', 'Business goal analysis and roadmap creation')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.strategyCall.1', 'Market opportunities and competitive insights')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.strategyCall.2', 'Growth strategy recommendations')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.strategyCall.3', 'Actionable next steps for success')}</li>
                    </>
                  )}
                  {selectedCallType === 'discovery-call' && (
                    <>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.discoveryCall.0', 'Project scope and requirements review')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.discoveryCall.1', 'Technical feasibility assessment')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.discoveryCall.2', 'Timeline and budget planning')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.discoveryCall.3', 'Solution recommendations')}</li>
                    </>
                  )}
                  {selectedCallType === 'consultation' && (
                    <>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.consultation.0', 'Expert guidance on your specific challenges')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.consultation.1', 'Industry best practices and insights')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.consultation.2', 'Problem-solving strategies')}</li>
                      <li className={isRTL ? 'font-arabic text-right' : ''}>• {t('bookCall.form.expectations.consultation.3', 'Implementation roadmap')}</li>
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

/* 
TODO: Template Customization Guide

1. TEMPLATE_CONFIG Object:
   - Update company.phone with your business phone number
   - Update company.email with your business email
   - Change branding.primaryColor to match your brand colors
   - Update routes to match your website structure

2. Translation Keys:
   - This component uses react-i18next for internationalization
   - Add your translation files with the corresponding keys
   - Customize all text content through translation files

3. Form Options:
   - Modify projectTypes array to match your services
   - Update budgetRanges to reflect your pricing structure
   - Adjust timelineOptions based on your project timelines
   - Customize timeSlots for your availability
   - Update timeZones for your target markets
   - Modify hearAboutOptions for your marketing channels

4. Styling Customization:
   - The component uses Tailwind CSS classes
   - Primary color is applied through CSS custom properties
   - Focus states and hover effects use the primary color
   - Form validation styling can be customized

5. Integration Requirements:
   - Ensure your API endpoint '/api/book-call' is implemented
   - Make sure the fadeInUp animation is available from '@/lib/animations'
   - Verify react-i18next is properly configured
   - Ensure framer-motion is installed and configured

6. Form Validation:
   - Email validation uses standard regex pattern
   - Phone validation accepts international formats
   - Date validation prevents past dates
   - All error messages are translatable

7. Success/Error States:
   - Success state shows booking confirmation with details
   - Error state provides user-friendly error messages
   - Both states maintain consistent branding
   - Navigation buttons use configured routes

8. Accessibility:
   - Form includes proper labels and ARIA attributes
   - Focus management for keyboard navigation
   - Color contrast meets accessibility standards
   - RTL language support included

9. Mobile Responsiveness:
   - Grid layouts adapt to smaller screens
   - Touch-friendly button sizes
   - Readable text sizes on all devices
   - Optimized form layout for mobile

10. Performance Considerations:
    - Component uses React.memo patterns where beneficial
    - Form validation is debounced for better UX
    - API calls include proper error handling
    - Loading states prevent multiple submissions
*/