'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's branding
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  hero: {
    title: {
      main: 'Join Our',
      highlight: 'Creative Team' // The highlighted word
    },
    subtitle: 'We\'re a team of passionate creators, strategists, and innovators who believe in pushing boundaries and creating unlimited possibilities for our clients and ourselves.',
    stats: [
      { icon: '🚀', title: 'Fast Growth', description: '200% team growth in 2 years' },
      { icon: '🌟', title: 'Great Culture', description: '4.8/5 employee satisfaction' },
      { icon: '💡', title: 'Innovation First', description: 'Cutting-edge projects daily' },
      { icon: '🎯', title: 'Remote Friendly', description: 'Work from anywhere policy' }
    ],
    cta: {
      primary: {
        text: 'View Open Positions',
        action: '#open-positions'
      }
    }
  },
  api: {
    careersEndpoint: '/api/careers' // Update with your careers API endpoint
  }
}

export default function CareersHero() {
  const [openPositionsCount, setOpenPositionsCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchOpenPositionsCount()
  }, [])

  const fetchOpenPositionsCount = async () => {
    try {
      const response = await fetch(TEMPLATE_CONFIG.api.careersEndpoint)
      const data = await response.json()
      
      if (data.success) {
        setOpenPositionsCount(data.jobs.length)
      }
    } catch (error) {
      console.error('Failed to fetch open positions count:', error)
      setOpenPositionsCount(0)
    } finally {
      setIsLoading(false)
    }
  }

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
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
          >
            {TEMPLATE_CONFIG.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                <p className="text-gray-400">{stat.description}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg text-lg"
              onClick={() => handleCTAClick(TEMPLATE_CONFIG.hero.cta.primary.action)}
            >
              {TEMPLATE_CONFIG.hero.cta.primary.text}
            </motion.button>
          </motion.div>

          {/* Dynamic Current Openings Badge - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            {isLoading ? (
              <>
                <div className="w-3 h-3 bg-gray-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-medium">Loading positions...</span>
              </>
            ) : openPositionsCount > 0 ? (
              <>
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-white font-medium">
                  {openPositionsCount} Open Position{openPositionsCount !== 1 ? 's' : ''} Available
                </span>
              </>
            ) : (
              <>
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                <span className="text-white font-medium">No open positions at the moment</span>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CAREERS HERO - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same background pattern and animations
✅ Consistent typography and spacing
✅ Dynamic job openings counter
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify hero text and messaging
3. Update company statistics
4. Set CTA button action
5. Configure API endpoints
6. Customize career highlights

UNIFIED ELEMENTS:
- Background gradient (black → gray-900 → blue-900)
- Blue accent color (blue-500/blue-600)
- Same dot pattern overlay
- Consistent button styling
- Unified animation timing
- Matching typography scale

API INTEGRATION:
- Fetches live job count from careers API
- Shows loading states
- Handles API errors gracefully
- Updates badge dynamically

Perfect foundation for careers pages that matches your unified design system!
*/