'use client'

import { motion } from 'framer-motion'
import Button from '../Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's branding
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  hero: {
    title: {
      highlight: 'Branding', // The highlighted word
      main: 'That Inspires' // The main part of the title
    },
    subtitle: 'Create a powerful brand identity that resonates with your audience, builds trust, and sets you apart from the competition.',
    services: [
      { name: 'Logo Design', icon: '🎨' },
      { name: 'Brand Guidelines', icon: '📋' },
      { name: 'Visual Identity', icon: '👁️' },
      { name: 'Brand Strategy', icon: '🎯' }
    ],
    ctaButtons: {
      primary: {
        text: 'Start Your Brand',
        action: '/contact?service=branding' // Update with your contact page
      },
      secondary: {
        text: 'View Our Work',
        action: 'scroll-to-portfolio' // Can be URL or scroll action
      }
    },
    stats: [
      { number: '50+', label: 'Brands Created' },
      { number: '300%', label: 'Avg. Recognition Boost' },
      { number: '98%', label: 'Client Satisfaction' },
      { number: '15+', label: 'Industries Served' }
    ]
  }
}

export default function BrandingHero() {
  const handleCTAClick = (action: string) => {
    if (action.startsWith('http') || action.startsWith('/')) {
      window.location.href = action
    } else if (action === 'scroll-to-portfolio') {
      const portfolioSection = document.getElementById('branding-portfolio')
      portfolioSection?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Background Pattern - Unified with AboutHero */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated Background Elements - Unified with AboutHero */}
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              {TEMPLATE_CONFIG.hero.title.highlight}
            </span>{' '}
            {TEMPLATE_CONFIG.hero.title.main}
          </motion.h1>

          {/* Subtitle - Unified styling */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {TEMPLATE_CONFIG.hero.subtitle}
          </motion.p>

          {/* Service Highlights */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {TEMPLATE_CONFIG.hero.services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <span className="text-2xl">{service.icon}</span>
                <span className="text-white font-medium">{service.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
              onClick={() => handleCTAClick(TEMPLATE_CONFIG.hero.ctaButtons.primary.action)}
            >
              {TEMPLATE_CONFIG.hero.ctaButtons.primary.text}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition-colors"
              onClick={() => handleCTAClick(TEMPLATE_CONFIG.hero.ctaButtons.secondary.action)}
            >
              {TEMPLATE_CONFIG.hero.ctaButtons.secondary.text}
            </motion.button>
          </motion.div>

          {/* Stats - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-700/50"
          >
            {TEMPLATE_CONFIG.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED BRANDING HERO - TEMPLATE READY

FEATURES:
✅ Unified styling with AboutHero component
✅ Blue color scheme consistency
✅ Same background pattern and animations
✅ Consistent typography and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify hero text and messaging
3. Update service highlights
4. Set CTA button actions
5. Customize statistics

UNIFIED ELEMENTS:
- Background gradient (black → gray-900 → blue-900)
- Blue accent color (blue-500/blue-600)
- Same dot pattern overlay
- Consistent button styling
- Unified animation timing
- Matching typography scale

Perfect foundation for branding service pages that matches your about section!
*/