'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's ROI calculator
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  hero: {
    title: {
      main: 'Calculate Your',
      highlight: 'ROI' // The highlighted word
    },
    subtitle: 'Discover the potential return on investment from our strategy consulting services. Get a personalized estimate based on your business metrics and industry benchmarks.',
    stats: [
      { icon: '📊', number: '15:1', label: 'Average ROI Ratio' },
      { icon: '⚡', number: '3-6 Months', label: 'Time to ROI' },
      { icon: '📈', number: '85%', label: 'Revenue Growth' },
      { icon: '🎯', number: '500+', label: 'Success Stories' }
    ],
    cta: {
      text: 'Calculate Your ROI Now',
      action: '#roi-calculator'
    },
    trustBadge: 'Free • No Email Required • Instant Results'
  }
}

export default function ROIHero() {
  const handleCTAClick = () => {
    const element = document.querySelector(TEMPLATE_CONFIG.hero.cta.action)
    element?.scrollIntoView({ behavior: 'smooth' })
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

          {/* ROI Preview Stats - Unified grid layout */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
          >
            {TEMPLATE_CONFIG.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg text-lg"
              onClick={handleCTAClick}
            >
              {TEMPLATE_CONFIG.hero.cta.text}
            </motion.button>
          </motion.div>

          {/* Trust Badge - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <span className="text-white font-medium">{TEMPLATE_CONFIG.hero.trustBadge}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED ROI HERO - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding/careers/consulting/marketing components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same background pattern and animations
✅ Consistent typography and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify hero text and messaging
3. Update ROI statistics
4. Set CTA scroll target
5. Customize trust badge text

UNIFIED ELEMENTS:
- Background gradient (black → gray-900 → blue-900)
- Blue accent color (blue-500/blue-600)
- Same dot pattern overlay
- Consistent button styling
- Unified animation timing
- Matching typography scale

Perfect foundation for ROI calculator pages that matches your unified design system!
*/