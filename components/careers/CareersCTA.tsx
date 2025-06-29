'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's hiring process and contact info
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
    email: 'careers@youragency.com', // Update with your careers email
    linkedinUrl: 'https://linkedin.com/company/youragency' // Update with your LinkedIn URL
  },
  content: {
    title: 'Ready to Join Our Team?',
    subtitle: 'Whether you\'re a seasoned professional or just starting your career, we\'d love to hear from you and explore how you can contribute to our mission.',
    motivationalQuote: '"Great things happen when passionate people come together."',
    tagline: 'Be part of something unlimited.',
    equalOpportunity: 'Your Agency is an equal opportunity employer committed to diversity and inclusion. We welcome applications from all qualified candidates regardless of race, gender, sexual orientation, religion, age, disability, or any other protected characteristic.'
  },
  quickStats: [
    {
      icon: '🚀',
      title: 'Growing Fast',
      description: '5 new positions opening this quarter'
    },
    {
      icon: '⚡',
      title: 'Quick Process',
      description: '2-week average hiring timeline'
    },
    {
      icon: '🌟',
      title: 'Great Culture',
      description: '4.8/5 employee satisfaction rate'
    }
  ],
  hiringProcess: [
    {
      step: 1,
      title: 'Application',
      description: 'Submit your application and portfolio'
    },
    {
      step: 2,
      title: 'Initial Screen',
      description: 'Brief call to discuss your background'
    },
    {
      step: 3,
      title: 'Skills Assessment',
      description: 'Practical project or technical interview'
    },
    {
      step: 4,
      title: 'Team Interview',
      description: 'Meet the team and discuss culture fit'
    }
  ],
  cta: {
    primary: {
      text: 'View Open Positions',
      action: '#open-positions'
    },
    secondary: {
      text: 'Submit General Application',
      action: '/contact?type=application'
    }
  }
}

export default function CareersCTA() {
  const handleCTAClick = (action: string) => {
    if (action.startsWith('#')) {
      const element = document.querySelector(action)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = action
    }
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${TEMPLATE_CONFIG.company.email}`
  }

  const handleLinkedInClick = () => {
    window.open(TEMPLATE_CONFIG.company.linkedinUrl, '_blank')
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
            Ready to Join
            <span className="block">Our Team?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>

          {/* Quick Stats - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {TEMPLATE_CONFIG.quickStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <h4 className="font-bold text-white mb-2">{stat.title}</h4>
                <p className="text-blue-100 text-sm">{stat.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Main CTA Buttons - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
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
            className="text-blue-100 mb-8"
          >
            <p className="mb-4">
              Questions about working with us? 
              <button 
                onClick={handleEmailClick}
                className="text-white hover:underline font-medium ml-2"
              >
                {TEMPLATE_CONFIG.company.email}
              </button>
            </p>
            <p className="text-sm">
              Follow us on 
              <button 
                onClick={handleLinkedInClick}
                className="text-white hover:underline font-medium ml-1"
              >
                LinkedIn
              </button>
              {' '}for the latest updates and insights from our team.
            </p>
          </motion.div>

          {/* Application Process - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Our Hiring Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              {TEMPLATE_CONFIG.hiringProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {step.step}
                  </div>
                  <div className="font-semibold text-white mb-2">{step.title}</div>
                  <div className="text-blue-100">{step.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Equal Opportunity Statement */}
          <motion.div
            variants={fadeInUp}
            className="border-t border-white/20 pt-8"
          >
            <p className="text-blue-100 text-sm max-w-2xl mx-auto">
              {TEMPLATE_CONFIG.content.equalOpportunity}
            </p>
          </motion.div>

          {/* Final Motivational Message */}
          <motion.div
            variants={fadeInUp}
            className="mt-8"
          >
            <p className="text-blue-100 text-lg italic mb-2">
              {TEMPLATE_CONFIG.content.motivationalQuote}
            </p>
            <p className="text-white font-medium">
              {TEMPLATE_CONFIG.content.tagline}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CAREERS CTA - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same background gradient and effects
✅ Consistent card styling and animations
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify company contact information
3. Customize hiring process steps
4. Update quick stats and achievements
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
- Quick stats grid (3 items)
- Primary and secondary CTAs
- Contact information with links
- Hiring process overview (4 steps)
- Equal opportunity statement
- Motivational closing message

INTERACTIVE FEATURES:
- Scroll-to-section navigation
- Email and LinkedIn links
- Hover animations on all buttons
- Smooth transitions and effects

Perfect for converting visitors into applicants with unified design!
*/