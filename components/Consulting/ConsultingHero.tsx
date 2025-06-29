'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's consulting services
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  hero: {
    title: {
      main: 'Strategy',
      highlight: 'Consulting' // The highlighted word
    },
    subtitle: 'Expert guidance to help you make informed decisions about your brand, digital presence, and marketing. Transform challenges into opportunities with data-driven strategies.',
    stats: [
      { icon: '📊', title: '200+ Strategies', description: 'Successfully delivered across industries' },
      { icon: '📈', title: '85% Growth', description: 'Average revenue increase for clients' },
      { icon: '⚡', title: '1-3 Weeks', description: 'Typical project timeline' }
    ],
    cta: {
      primary: {
        text: 'Start Your Strategy Session',
        action: '/contact?service=consulting'
      },
      secondary: {
        text: 'See Our Process',
        action: '#consulting-process'
      }
    }
  }
}

export default function ConsultingHero() {
  const handleCTAClick = (action: string) => {
    if (action.startsWith('#')) {
      const element = document.querySelector(action)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = action
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Background Pattern - Unified with other components */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated Background Elements - Unified with other components */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Main Heading - Unified styling */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
          >
            {TEMPLATE_CONFIG.hero.title.main}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              {TEMPLATE_CONFIG.hero.title.highlight}
            </span>
          </motion.h1>

          {/* Subtitle - Unified styling */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {TEMPLATE_CONFIG.hero.subtitle}
          </motion.p>

          {/* Key Stats - Unified grid layout */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {TEMPLATE_CONFIG.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                <p className="text-gray-400">{stat.description}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
              onClick={() => handleCTAClick(TEMPLATE_CONFIG.hero.cta.primary.action)}
            >
              {TEMPLATE_CONFIG.hero.cta.primary.text}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 shadow-lg backdrop-blur-sm"
              onClick={() => handleCTAClick(TEMPLATE_CONFIG.hero.cta.secondary.action)}
            >
              {TEMPLATE_CONFIG.hero.cta.secondary.text}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CONSULTING HERO - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding/careers components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same background pattern and animations
✅ Consistent typography and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify hero text and messaging
3. Update company statistics
4. Set CTA button actions
5. Customize service highlights

UNIFIED ELEMENTS:
- Background gradient (black → gray-900 → blue-900)
- Blue accent color (blue-500/blue-600)
- Same dot pattern overlay
- Consistent button styling
- Unified animation timing
- Matching typography scale

Perfect foundation for consulting service pages that matches your unified design system!
*/