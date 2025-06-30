'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { templateConfig } from '@/lib/template-config'

interface ContactHeroProps {
  selectedMethod: string
  onMethodSelect: (method: string) => void
}

interface ContactMethod {
  id: string
  icon: string
  title: string
  description: string
  action: string
  responseTime: string
}

interface ResponsePromise {
  icon: string
  title: string
  description: string
}

interface QuickStat {
  number: string
  label: string
}

function ContactHero({ selectedMethod, onMethodSelect }: ContactHeroProps) {
  const { company, branding, business, social } = templateConfig

  // Contact methods - easily customizable
  const contactMethods: ContactMethod[] = [
    {
      id: 'general-inquiry',
      icon: '💬',
      title: 'General Inquiry',
      description: 'Get in touch with us for any questions or information about our services.',
      action: 'Start conversation',
      responseTime: business.responseTime
    },
    {
      id: 'service-inquiry',
      icon: '🔍',
      title: 'Service Inquiry',
      description: 'Learn more about our specific services and how we can help your business.',
      action: 'Learn more',
      responseTime: business.responseTime
    },
    {
      id: 'project-quote',
      icon: '📋',
      title: 'Project Quote',
      description: 'Tell us about your project and get a detailed quote with timeline and deliverables.',
      action: 'Get quote',
      responseTime: '48 hours'
    },
    {
      id: 'support',
      icon: '🛠️',
      title: 'Support Request',
      description: 'Need help with an existing project or have technical questions? We\'re here to help.',
      action: 'Get support',
      responseTime: '12 hours'
    },
    {
      id: 'partnership',
      icon: '🤝',
      title: 'Partnership',
      description: 'Interested in partnering with us? Let\'s explore collaboration opportunities.',
      action: 'Explore partnership',
      responseTime: business.responseTime
    },
    {
      id: 'consultation',
      icon: '📞',
      title: 'Free Consultation',
      description: 'Schedule a free strategy session to discuss your goals and requirements.',
      action: 'Book consultation',
      responseTime: '24 hours'
    }
  ]

  const responsePromise: ResponsePromise[] = [
    {
      icon: '⚡',
      title: 'Quick Response',
      description: `We respond to all inquiries within ${business.responseTime}`
    },
    {
      icon: '🎯',
      title: 'Custom Solutions',
      description: 'Tailored strategies for your unique needs'
    },
    {
      icon: '💯',
      title: 'Professional Service',
      description: 'Expert advice with no pushy sales tactics'
    },
    {
      icon: '🔒',
      title: 'Confidential',
      description: 'Your ideas and information stay secure'
    }
  ]

  const quickStats: QuickStat[] = [
    {
      number: '500+',
      label: 'Projects Completed'
    },
    {
      number: '98%',
      label: 'Client Satisfaction'
    },
    {
      number: '5+',
      label: 'Years Experience'
    },
    {
      number: '24h',
      label: 'Average Response'
    }
  ]

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = branding.primaryColor
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = 'inherit'
  }

  return (
    <div className="flex-1 flex items-start justify-center p-8 lg:p-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-lg w-full mt-8"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center lg:text-left mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span style={{ color: branding.primaryColor }}>Our Team</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Ready to start your project? Get in touch and let's discuss how we can help bring your vision to life.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div variants={fadeInUp} className="space-y-4 mb-12">
          <h3 className="text-xl font-bold text-white mb-6">
            How can we help you?
          </h3>
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.id}
              variants={fadeInUp}
              onClick={() => onMethodSelect(method.id)}
              className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                selectedMethod === method.id
                  ? `bg-opacity-20 border border-opacity-30 hover:bg-opacity-30` 
                  : 'bg-white/5 backdrop-blur-sm hover:bg-white/10'
              }`}
              style={selectedMethod === method.id ? {
                backgroundColor: `${branding.primaryColor}20`,
                borderColor: `${branding.primaryColor}30`
              } : {}}
            >
              <div className="text-3xl flex-shrink-0">{method.icon}</div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1">
                  {method.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  {method.description}
                </p>
                <div className="flex items-center justify-between">
                  <span 
                    className={`text-sm font-medium ${
                      selectedMethod === method.id ? 'text-opacity-80' : ''
                    }`}
                    style={{ 
                      color: selectedMethod === method.id 
                        ? `${branding.primaryColor}CC` 
                        : branding.primaryColor 
                    }}
                  >
                    {method.action} →
                  </span>
                  <span className="text-xs text-gray-400">
                    Response: {method.responseTime}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Response Promise */}
        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mb-8">
          {responsePromise.map((promise, index) => (
            <div key={index} className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-2xl mb-2">{promise.icon}</div>
              <h4 className="text-sm font-bold text-white mb-1">
                {promise.title}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                {promise.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Company Info Section */}
        <motion.div variants={fadeInUp} className="bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
          <h4 className="text-white font-semibold mb-4 flex items-center">
            <span className="text-2xl mr-2">🏢</span>
            About {company.name}
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {company.tagline}
          </p>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center">
              <span className="text-lg mr-2">🌍</span>
              <span>{company.address}</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg mr-2">⏰</span>
              <span>Available {business.workingHours} {business.timezone}</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeInUp} className="text-center lg:text-left border-t border-white/20 pt-8">
          <h4 className="text-white font-semibold mb-4">
            Other ways to reach us
          </h4>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <span style={{ color: branding.primaryColor }}>📧</span>
              <a 
                href={`mailto:${company.email}`} 
                className="hover:text-white transition-colors"
                style={{ color: 'inherit' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {company.email}
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <span style={{ color: branding.primaryColor }}>📞</span>
              <a 
                href={`tel:${company.phone}`} 
                className="hover:text-white transition-colors"
                style={{ color: 'inherit' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {company.phone}
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <span style={{ color: branding.primaryColor }}>📍</span>
              <span>{company.address}</span>
            </div>
            
            {/* Social Links */}
            {(social?.linkedin || social?.twitter || social?.instagram) && (
              <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
                <span className="text-sm text-gray-400">Follow us:</span>
                {social?.linkedin && (
                  <a 
                    href={social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ fontSize: '1.2rem' }}
                  >
                    💼
                  </a>
                )}
                {social?.twitter && (
                  <a 
                    href={social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ fontSize: '1.2rem' }}
                  >
                    🐦
                  </a>
                )}
                {social?.instagram && (
                  <a 
                    href={social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ fontSize: '1.2rem' }}
                  >
                    📸
                  </a>
                )}
              </div>
            )}
            
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-gray-400 text-xs mb-3">
                Available {business.workingHours} {business.timezone}
              </p>
              <div className="space-y-2">
                {/* Quick Action Buttons */}
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-sm font-medium transition-colors mr-4"
                  style={{ color: branding.primaryColor }}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  View Services
                </Link>
                <Link 
                  href="/portfolio" 
                  className="inline-flex items-center text-sm font-medium transition-colors"
                  style={{ color: branding.primaryColor }}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div variants={fadeInUp} className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <h5 className="text-red-300 font-semibold text-sm mb-2 flex items-center">
            <span className="text-lg mr-2">🚨</span>
            Urgent Support?
          </h5>
          <p className="text-red-200 text-xs mb-3">
            For critical issues or urgent support needs, call us directly:
          </p>
          <a 
            href={`tel:${company.phone}`}
            className="inline-flex items-center text-red-300 hover:text-red-200 font-semibold text-sm transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {company.phone}
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactHero;