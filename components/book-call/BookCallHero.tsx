'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Template configuration - customize these values for your project
const TEMPLATE_CONFIG = {
  company: {
    phone: '+1 (555) 123-4567', // Update with your phone
    email: 'hello@yourcompany.com' // Update with your email
  },
  branding: {
    primaryColor: '#3B82F6' // Blue - customize this
  },
  business: {
    workingHours: 'Mon-Fri 9:00 AM - 6:00 PM',
    timezone: 'EST'
  }
}

interface BookCallHeroProps {
  selectedCallType: string
  onCallTypeSelect: (type: string) => void
}

export default function BookCallHero({ selectedCallType, onCallTypeSelect }: BookCallHeroProps) {
  const callTypes = [
    {
      id: 'strategy-call',
      icon: '🎯',
      title: 'Strategy Call',
      duration: '45 minutes',
      description: 'Deep dive into your business goals and create a roadmap for success.',
      features: [
        'Business Analysis',
        'Growth Strategy',
        'Market Research',
        'Action Plan'
      ]
    },
    {
      id: 'discovery-call',
      icon: '🔍',
      title: 'Discovery Call',
      duration: '30 minutes',
      description: 'Understand your project requirements and explore possibilities.',
      features: [
        'Project Scope',
        'Technical Review',
        'Timeline Planning',
        'Budget Discussion'
      ]
    },
    {
      id: 'consultation',
      icon: '💡',
      title: 'Consultation',
      duration: '60 minutes',
      description: 'Expert guidance on specific challenges and opportunities.',
      features: [
        'Expert Advice',
        'Problem Solving',
        'Best Practices',
        'Implementation Guide'
      ]
    }
  ]

  const stats = [
    { 
      number: '500+', 
      label: 'Successful Projects'
    },
    { 
      number: '98%', 
      label: 'Client Satisfaction'
    },
    { 
      number: '24hr', 
      label: 'Response Time'
    },
    { 
      number: '10+', 
      label: 'Years Experience'
    }
  ]

  return (
    <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-lg"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center lg:text-left mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book Your Free{' '}
            <span style={{ color: TEMPLATE_CONFIG.branding.primaryColor }}>Strategy Call</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Get expert insights on your project with a complimentary consultation. No sales pitch - just valuable advice to help you succeed.
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-green-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">
              100% Free • No Commitment Required
            </span>
          </div>
        </motion.div>

        {/* Call Type Selection */}
        <motion.div variants={fadeInUp} className="space-y-4 mb-12">
          <h3 className="text-xl font-bold text-white mb-6">
            Choose Your Call Type:
          </h3>
          {callTypes.map((callType, index) => (
            <motion.div
              key={callType.id}
              variants={fadeInUp}
              onClick={() => onCallTypeSelect(callType.id)}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer border ${
                selectedCallType === callType.id
                  ? 'shadow-lg' 
                  : 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10'
              }`}
              style={selectedCallType === callType.id ? {
                backgroundColor: `${TEMPLATE_CONFIG.branding.primaryColor}20`,
                borderColor: `${TEMPLATE_CONFIG.branding.primaryColor}50`
              } : {}}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{callType.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      {callType.title}
                    </h4>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: TEMPLATE_CONFIG.branding.primaryColor }}
                    >
                      {callType.duration}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {callType.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {callType.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mr-2"
                          style={{ backgroundColor: TEMPLATE_CONFIG.branding.primaryColor }}
                        ></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
              <div 
                className="text-2xl font-bold mb-1"
                style={{ color: TEMPLATE_CONFIG.branding.primaryColor }}
              >
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeInUp} className="text-center lg:text-left border-t border-white/20 pt-8">
          <h4 className="text-white font-semibold mb-4">
            Prefer to call directly?
          </h4>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <span style={{ color: TEMPLATE_CONFIG.branding.primaryColor }}>📞</span>
              <a 
                href={`tel:${TEMPLATE_CONFIG.company.phone}`} 
                className="hover:text-white transition-colors"
              >
                {TEMPLATE_CONFIG.company.phone}
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <span style={{ color: TEMPLATE_CONFIG.branding.primaryColor }}>📧</span>
              <a 
                href={`mailto:${TEMPLATE_CONFIG.company.email}`} 
                className="hover:text-white transition-colors"
              >
                {TEMPLATE_CONFIG.company.email}
              </a>
            </div>
            <div className="text-xs text-gray-400 mt-4">
              Available {TEMPLATE_CONFIG.business.workingHours} ({TEMPLATE_CONFIG.business.timezone})
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}