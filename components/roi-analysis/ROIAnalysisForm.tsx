'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface FormData {
  // Company Information
  companyName: string
  industry: string
  businessStage: string
  employeeCount: string
  
  // Financial Information
  currentRevenue: string
  currentGrowthRate: string
  profitMargin: string
  marketingBudget: string
  
  // Strategic Information
  primaryGoals: string[]
  currentChallenges: string[]
  competitiveLandscape: string
  timeframe: string
  
  // Contact Information
  name: string
  title: string
  email: string
  phone: string
  
  // Additional Context
  additionalInfo: string
  urgency: string
}

export default function ROIAnalysisForm() {
  const [formData, setFormData] = useState<FormData>({
    // Company Information
    companyName: '',
    industry: '',
    businessStage: '',
    employeeCount: '',
    
    // Financial Information
    currentRevenue: '',
    currentGrowthRate: '',
    profitMargin: '',
    marketingBudget: '',
    
    // Strategic Information
    primaryGoals: [],
    currentChallenges: [],
    competitiveLandscape: '',
    timeframe: '',
    
    // Contact Information
    name: '',
    title: '',
    email: '',
    phone: '',
    
    // Additional Context
    additionalInfo: '',
    urgency: ''
  })

  const [currentStep, setCurrentStep] = useState<number>(1)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const totalSteps = 4

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCheckboxChange = (field: 'primaryGoals' | 'currentChallenges', option: string) => {
    const currentValues = formData[field]
    const newValues = currentValues.includes(option)
      ? currentValues.filter(item => item !== option)
      : [...currentValues, option]
    
    setFormData(prev => ({
      ...prev,
      [field]: newValues
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.companyName && formData.industry && formData.businessStage)
      case 2:
        return !!(formData.currentRevenue)
      case 3:
        return !!(formData.primaryGoals.length > 0)
      case 4:
        return !!(formData.name && formData.title && formData.email)
      default:
        return false
    }
  }

  const submitForm = async () => {
    if (!validateStep(4)) {
      alert('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      
      // Redirect to thank you page or show success message
      setTimeout(() => {
        window.location.href = '/thank-you?service=roi-analysis'
      }, 2000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const primaryGoalOptions = [
    'Increase revenue',
    'Expand market share',
    'Improve operational efficiency',
    'Digital transformation',
    'New product/service launch',
    'Enter new markets',
    'Optimize costs',
    'Improve customer retention'
  ]

  const challengeOptions = [
    'Slow growth',
    'Competitive pressure',
    'Operational inefficiencies',
    'Market uncertainty',
    'Resource constraints',
    'Technology gaps',
    'Team alignment issues',
    'Customer acquisition costs'
  ]

  if (submitStatus === 'success') {
    return (
      <section id="roi-analysis-form" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold text-black mb-4">
                Thank You!
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Your ROI analysis request has been submitted successfully.
              </p>
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-green-800 mb-2">What happens next?</h3>
                <ul className="text-left text-green-700 space-y-2">
                  <li>• You'll receive a confirmation email within 5 minutes</li>
                  <li>• Our team will begin your analysis within 24 hours</li>
                  <li>• Your detailed report will be delivered within 48 hours</li>
                  <li>• We'll schedule your complimentary consultation call</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Redirecting you to our thank you page...
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="roi-analysis-form" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-black mb-6"
          >
            Get Your <span className="text-red-500">Free ROI Analysis</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Complete this detailed questionnaire to receive a comprehensive ROI analysis 
            specifically tailored to your business situation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-red-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Company Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6">Company Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your Company Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Financial Services</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="consulting">Professional Services</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Stage *
                  </label>
                  <select
                    value={formData.businessStage}
                    onChange={(e) => handleInputChange('businessStage', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Stage</option>
                    <option value="startup">Startup (2 years)</option>
                    <option value="growth">Growth Stage (2-7 years)</option>
                    <option value="mature">Mature (7+ years)</option>
                    <option value="enterprise">Enterprise (100+ employees)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Range</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Financial Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6">Financial Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Annual Revenue *
                  </label>
                  <select
                    value={formData.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Range</option>
                    <option value="0-100k">$0 - $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="10m+">$10M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Growth Rate (Annual %)
                  </label>
                  <input
                    type="number"
                    value={formData.currentGrowthRate}
                    onChange={(e) => handleInputChange('currentGrowthRate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="e.g., 15"
                    min="0"
                    max="1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profit Margin (%)
                  </label>
                  <input
                    type="number"
                    value={formData.profitMargin}
                    onChange={(e) => handleInputChange('profitMargin', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="e.g., 20"
                    min="0"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Marketing/Growth Budget
                  </label>
                  <select
                    value={formData.marketingBudget}
                    onChange={(e) => handleInputChange('marketingBudget', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Range</option>
                    <option value="0-10k">$0 - $10K</option>
                    <option value="10k-50k">$10K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k+">$500K+</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Strategic Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6">Strategic Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Primary Business Goals (Select all that apply) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {primaryGoalOptions.map((goal) => (
                    <label key={goal} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.primaryGoals.includes(goal)}
                        onChange={() => handleCheckboxChange('primaryGoals', goal)}
                        className="mr-3 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Current Business Challenges (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {challengeOptions.map((challenge) => (
                    <label key={challenge} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.currentChallenges.includes(challenge)}
                        onChange={() => handleCheckboxChange('currentChallenges', challenge)}
                        className="mr-3 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{challenge}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Competitive Landscape
                  </label>
                  <select
                    value={formData.competitiveLandscape}
                    onChange={(e) => handleInputChange('competitiveLandscape', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="highly-competitive">Highly Competitive</option>
                    <option value="moderately-competitive">Moderately Competitive</option>
                    <option value="emerging-market">Emerging Market</option>
                    <option value="niche-market">Niche Market</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Timeframe
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => handleInputChange('timeframe', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="immediate">Immediate (1 month)</option>
                    <option value="short-term">Short-term (1-3 months)</option>
                    <option value="medium-term">Medium-term (3-6 months)</option>
                    <option value="long-term">Long-term (6+ months)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact Information */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your Full Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="CEO, Founder, etc."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How urgent is your need for strategic guidance?
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => handleInputChange('urgency', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="critical">Critical - Need immediate help</option>
                  <option value="high">High - Within 1 month</option>
                  <option value="medium">Medium - Within 3 months</option>
                  <option value="low">Low - Just exploring options</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Any additional context about your business situation, specific challenges, or goals..."
                />
              </div>
            </div>
          )}

          {/* Error State */}
          {submitStatus === 'error' && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="text-red-700">
                <strong>Error:</strong> There was a problem submitting your form. Please try again or contact us directly.
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={!validateStep(currentStep)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  validateStep(currentStep)
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={submitForm}
                disabled={!validateStep(currentStep) || isSubmitting}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                  validateStep(currentStep) && !isSubmitting
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  'Get My ROI Analysis'
                )}
              </button>
            )}
          </div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="text-green-500 text-xl">🔒</div>
              <span className="text-gray-600">100% Confidential</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="text-blue-500 text-xl">⚡</div>
              <span className="text-gray-600">48-Hour Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="text-red-500 text-xl">🎁</div>
              <span className="text-gray-600">Completely Free</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}