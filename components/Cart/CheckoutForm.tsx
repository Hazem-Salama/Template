'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { CartService } from '@/types/cart'

interface CheckoutFormProps {
  cartItems: CartService[]
  total: number
  onBackToCart: () => void
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
  hearAboutUs: string
  newsletter: boolean
}

export default function CheckoutForm({ cartItems, total, onBackToCart }: CheckoutFormProps) {
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
    hearAboutUs: '',
    newsletter: true
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Let\'s discuss'
  ]

  const timelineOptions = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ]

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ]

  const hearAboutOptions = [
    'Google Search',
    'Social Media',
    'Referral',
    'LinkedIn',
    'Industry Event',
    'Previous Client',
    'Other'
  ]

  const projectTypes = [
    'Branding & Identity',
    'UI/UX Design',
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'E-commerce Solution',
    'Strategy Consulting',
    'Multiple Services',
    'Other'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.message.trim()) newErrors.message = 'Please provide project details'

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Prepare submission data
      const submissionData = {
        formData,
        cartItems,
        total,
        submittedAt: new Date().toISOString(),
        source: 'service_cart'
      }

      // Simulate API call - replace with actual API endpoint later
      console.log('Consultation booking submitted:', submissionData)
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In real implementation, this would be:
      // const response = await fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submissionData)
      // })
      // 
      // if (!response.ok) throw new Error('Failed to submit')
      
      setIsSubmitted(true)
      
      // Clear cart after successful submission (optional)
      // You might want to keep the cart until the consultation is confirmed
      
    } catch (error) {
      console.error('Error submitting consultation request:', error)
      setErrors({ submit: 'Failed to book consultation. Please try again or call us directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success state
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold text-white mb-4">Consultation Booked Successfully!</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Thank you for choosing our services! We've received your request for a strategy call regarding 
            your ${total.toLocaleString()} estimated project. Our team will contact you within 24 hours 
            to schedule your consultation.
          </p>
          
          {/* What's Next Section */}
          <div className="bg-white/5 rounded-lg p-6 mb-6 text-left">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">What happens next:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  1
                </div>
                <div>
                  <h4 className="text-white font-medium">Review & Preparation</h4>
                  <p className="text-gray-300 text-sm">We'll review your selected services and project requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  2
                </div>
                <div>
                  <h4 className="text-white font-medium">Contact & Scheduling</h4>
                  <p className="text-gray-300 text-sm">Our team will contact you within 24 hours to schedule your strategy call</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  3
                </div>
                <div>
                  <h4 className="text-white font-medium">Strategy Call</h4>
                  <p className="text-gray-300 text-sm">30-60 minute consultation to discuss your project and finalize pricing</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  4
                </div>
                <div>
                  <h4 className="text-white font-medium">Custom Proposal</h4>
                  <p className="text-gray-300 text-sm">You'll receive a detailed proposal tailored to your specific needs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-6">
            <h4 className="text-blue-300 font-medium text-sm mb-2">Need immediate assistance?</h4>
            <p className="text-blue-200 text-sm mb-2">
              Call us directly at{' '}
              <a href="tel:+15551234567" className="font-semibold hover:underline">
                +1 (555) 123-4567
              </a>
            </p>
            <p className="text-blue-200 text-xs">
              Monday - Friday, 9 AM - 6 PM EST
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/'}
              className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              Return to Homepage
            </motion.button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/services'}
                className="w-full bg-white/20 text-white py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30"
              >
                Browse More Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/portfolio'}
                className="w-full bg-white/20 text-white py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30"
              >
                View Our Work
              </motion.button>
            </div>
          </div>

          {/* Reference Number */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-gray-400 text-xs">
              Reference ID: {Date.now().toString(36).toUpperCase()}
            </p>
          </div>
        </div>
      </motion.div>
    )
  }

  // Form state
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
      >
        {/* Header with Back Button */}
        <div className="text-center mb-8">
          <button
            onClick={onBackToCart}
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-6 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Cart
          </button>
          <h2 className="text-3xl font-bold text-white mb-2">Book Your Strategy Call</h2>
          <p className="text-gray-300 leading-relaxed">
            Tell us about your project and we'll schedule a consultation to discuss final pricing for your 
            <span className="text-red-400 font-semibold"> ${total.toLocaleString()}</span> estimated project.
          </p>
        </div>

        {/* Selected Services Summary */}
        <div className="bg-white/5 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Selected Services Summary:</h3>
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <span className="text-gray-300">{item.title}</span>
                  {item.quantity > 1 && (
                    <span className="text-gray-400 text-sm ml-2">× {item.quantity}</span>
                  )}
                  <div className="text-xs text-gray-400">{item.category}</div>
                </div>
                <span className="text-white font-medium">
                  ${(item.basePrice * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
            <div className="border-t border-white/20 pt-3 flex justify-between items-center">
              <span className="text-white font-semibold">Estimated Total:</span>
              <span className="text-red-400 font-bold text-lg">${total.toLocaleString()}</span>
            </div>
          </div>
          <p className="text-yellow-300 text-xs mt-3 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Final pricing will be discussed and confirmed during your consultation call
          </p>
        </div>

        {/* Form */}
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
                  className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
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
                  className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
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
                  className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                    errors.email ? 'border-red-500' : 'border-white/30'
                  }`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                    errors.phone ? 'border-red-500' : 'border-white/30'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-white font-medium mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                placeholder="Your company or organization name"
              />
            </div>
          </div>

          {/* Project Information */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
              Project Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Additional Services Needed</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Any additional services beyond your cart?</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-gray-800">{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Total Project Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Select your total budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range} className="bg-gray-800">{range}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-white font-medium mb-2">Project Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">When do you need this completed?</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option} className="bg-gray-800">{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">How did you hear about us?</label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">How did you find us?</option>
                  {hearAboutOptions.map((option) => (
                    <option key={option} value={option} className="bg-gray-800">{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Call Scheduling */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
              Call Scheduling (Optional)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Preferred Call Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                />
                <p className="text-gray-400 text-xs mt-1">We'll try to accommodate your preferred date</p>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Preferred Time (EST)</label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Select preferred time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-gray-800">{slot}</option>
                  ))}
                </select>
                <p className="text-gray-400 text-xs mt-1">All times in Eastern Standard Time</p>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
              Project Details
            </h3>
            <div>
              <label className="block text-white font-medium mb-2">
                Tell us about your project <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none ${
                  errors.message ? 'border-red-500' : 'border-white/30'
                }`}
                placeholder="Please describe your project goals, challenges, specific requirements, target audience, and what you hope to achieve with the selected services. The more details you provide, the better we can prepare for our consultation call..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
              <p className="text-gray-400 text-xs mt-2">
                Minimum 50 characters. Feel free to include any specific requirements, deadlines, or questions you have.
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/5 rounded-lg p-4">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="w-5 h-5 text-red-500 bg-white/20 border-white/30 rounded focus:ring-red-500 focus:ring-2 mt-0.5 flex-shrink-0"
              />
              <span className="ml-3 text-white text-sm leading-relaxed">
                <strong>Subscribe to our newsletter</strong><br />
                Receive creative insights, industry tips, project updates, and exclusive offers. 
                We respect your privacy and you can unsubscribe anytime.
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
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                  Booking Your Consultation...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book My Free Strategy Call
                </>
              )}
            </motion.button>

            {errors.submit && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm text-center">{errors.submit}</p>
              </div>
            )}
          </div>

          {/* Trust Indicators & Additional Info */}
          <div className="text-center pt-6 border-t border-white/20 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-green-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free consultation call</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-green-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No upfront payment</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-green-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom proposal included</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                Questions? Call us directly at{' '}
                <a href="tel:+15551234567" className="text-red-500 hover:text-red-400 font-semibold transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="text-gray-400 text-xs">
                We'll contact you within 24 hours • All information is kept confidential • No spam, ever
              </p>
              <p className="text-gray-400 text-xs">
                By submitting this form, you agree to our{' '}
                <a href="/privacy-policy" className="text-red-400 hover:text-red-300 underline">Privacy Policy</a>{' '}
                and{' '}
                <a href="/terms-of-service" className="text-red-400 hover:text-red-300 underline">Terms of Service</a>
              </p>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  )
}