'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's consulting CTA and contact info
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
    phone: '+1-555-0123', // Update with your phone number
    email: 'strategy@youragency.com' // Update with your strategy email
  },
  content: {
    title: 'Ready to Transform Your Business Strategy?',
    subtitle: 'Don\'t let uncertainty hold your business back. Get the strategic clarity you need to accelerate growth and outpace competitors.',
    motivationalQuote: '"The best time to plant a tree was 20 years ago. The second best time is now."',
    tagline: 'Start building your strategic advantage today.'
  },
  urgency: [
    {
      title: 'Limited Spots',
      description: 'Only 5 new clients per month'
    },
    {
      title: 'Quick Start',
      description: 'Begin within 48 hours'
    },
    {
      title: 'Guaranteed ROI',
      description: 'Or your money back'
    }
  ],
  trustSignals: [
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15:1', label: 'Average ROI' },
    { value: '85%', label: 'Revenue Growth' }
  ],
  cta: {
    primary: {
      text: 'Start Your Strategy Today',
      action: '/contact?service=consulting&priority=urgent'
    },
    secondary: {
      text: 'Book Discovery Call',
      action: '/contact?service=consulting&type=discovery'
    }
  }
}

export default function ConsultingCTA() {
  const handleCTAClick = (action: string) => {
    window.location.href = action
  }

  const handlePhoneClick = () => {
    window.location.href = `tel:${TEMPLATE_CONFIG.company.phone}`
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${TEMPLATE_CONFIG.company.email}`
  }

  return (
    <section className="py-24 bg-gradient-to-br from-black to-blue-900 relative overflow-hidden">
      {/* Background Elements - Unified with other hero sections */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Transform Your
            <span className="block">Business Strategy?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>

          {/* Urgency Elements - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {TEMPLATE_CONFIG.urgency.map((item, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-white mb-2">{item.title}</div>
                  <div className="text-blue-100 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main CTA Buttons - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl text-lg"
              onClick={() => handleCTAClick(TEMPLATE_CONFIG.cta.primary.action)}
            >
              {TEMPLATE_CONFIG.cta.primary.text}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white text-lg"
              onClick={() => handleCTAClick(TEMPLATE_CONFIG.cta.secondary.action)}
            >
              {TEMPLATE_CONFIG.cta.secondary.text}
            </motion.button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            className="text-blue-100"
          >
            <p className="mb-4">
              Questions about our consulting services? 
              <button 
                onClick={handlePhoneClick}
                className="text-white hover:underline font-medium ml-2"
              >
                Call us: {TEMPLATE_CONFIG.company.phone}
              </button>
            </p>
            <p className="text-sm">
              Or email us at 
              <button 
                onClick={handleEmailClick}
                className="text-white hover:underline font-medium ml-1"
              >
                {TEMPLATE_CONFIG.company.email}
              </button>
            </p>
          </motion.div>

          {/* Trust Signals - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {TEMPLATE_CONFIG.trustSignals.map((signal, index) => (
                <div key={index}>
                  <div className="text-lg font-bold text-white">{signal.value}</div>
                  <div className="text-blue-100 text-sm">{signal.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final Motivational Message */}
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <p className="text-blue-100 text-lg italic">
              {TEMPLATE_CONFIG.content.motivationalQuote}
            </p>
            <p className="text-white font-medium mt-2">
              {TEMPLATE_CONFIG.content.tagline}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CONSULTING CTA - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding/careers components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same background gradient and effects
✅ Consistent card styling and animations
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify company contact information
3. Customize urgency elements
4. Update trust signals and metrics
5. Adjust CTA button actions
6. Customize messaging and quotes

UNIFIED ELEMENTS:
- Background gradient (black → blue-900)
- Blue accent colors and transparency
- Consistent card styling with backdrop blur
- Same button styling and hover effects
- Unified typography and spacing
- Matching animation patterns

SECTIONS INCLUDED:
- Hero title and subtitle
- Urgency indicators (3 items)
- Primary and secondary CTAs
- Contact information with links
- Trust signals grid (4 metrics)
- Motivational closing message

INTERACTIVE FEATURES:
- Phone and email links
- Smooth hover animations
- Professional contact options
- Trust-building statistics

Perfect for converting visitors into consulting clients with unified design!
*/