'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Template service highlights - customize with your actual numbers
const serviceHighlights = [
  { 
    icon: '🎨', 
    title: 'Brands Created', 
    count: '50+' 
  },
  { 
    icon: '💻', 
    title: 'Websites Built', 
    count: '200+' 
  },
  { 
    icon: '📱', 
    title: 'Apps Developed', 
    count: '30+' 
  },
  { 
    icon: '📊', 
    title: 'Campaigns Launched', 
    count: '100+' 
  }
]

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
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
        className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
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
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              Services
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive digital solutions designed to elevate your brand, engage your audience, and drive measurable business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get Free Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
              onClick={() => {
                const servicesSection = document.getElementById('services-grid')
                servicesSection?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Services
            </motion.button>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-700/50"
          >
            {serviceHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{highlight.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-1">
                  {highlight.count}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  {highlight.title}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}