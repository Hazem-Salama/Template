'use client'

import { motion } from 'framer-motion'
import Button from '../Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Template configuration - customize for your agency
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency', // Update with your agency name
    brandColor: '#EF4444', // Update with your brand color (red-500 default)
    accentColor: '#DC2626' // Update with your accent color (red-600 default)
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
        action: '/Contact?service=branding' // Update with your contact page
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
  },
  background: {
    gradient: {
      from: 'black',
      via: 'gray-900',
      to: 'red-900' // Update to match your brand
    },
    animations: true // Set to false to disable background animations
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
    <section       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zM0 40c0-11.046 8.954-20 20-20v20H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated Background Elements */}
      {TEMPLATE_CONFIG.background.animations && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 right-1/3 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [180, 0, 180],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              {TEMPLATE_CONFIG.hero.title.highlight}
            </span>{' '}
            {TEMPLATE_CONFIG.hero.title.main}
          </motion.h1>

          {/* Subtitle */}
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
            <Button 
              variant="primary" 
              size="large"
              onClick={() => handleCTAClick(TEMPLATE_CONFIG.hero.ctaButtons.primary.action)}
            >
              {TEMPLATE_CONFIG.hero.ctaButtons.primary.text}
            </Button>
            <Button 
              variant="outline" 
              size="large"
              onClick={() => handleCTAClick(TEMPLATE_CONFIG.hero.ctaButtons.secondary.action)}
            >
              {TEMPLATE_CONFIG.hero.ctaButtons.secondary.text}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-700/50"
          >
            {TEMPLATE_CONFIG.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
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
🎯 TEMPLATE-READY BRANDING HERO

CUSTOMIZATION POINTS:
✅ Company name and brand colors
✅ Hero title and subtitle
✅ Service highlights with icons
✅ CTA button text and actions
✅ Statistics and achievements
✅ Background gradient colors
✅ Animation toggle

EASY CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Change brand colors to match your identity
3. Customize hero text and messaging
4. Update stats to reflect your achievements
5. Modify service highlights
6. Set CTA actions (URLs or scroll functions)

FEATURES:
- Responsive design
- Smooth animations
- Customizable colors
- Flexible CTA actions
- Background pattern overlay
- Statistics showcase

Perfect foundation for any branding service hero section!
*/