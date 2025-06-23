'use client'

import { motion } from 'framer-motion'
import Button from '../Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function WebDevHero() {
  const developmentServices = [
    { name: 'Web Development', icon: '🌐' },
    { name: 'Mobile Development', icon: '📱' },
    { name: 'E/M-commerce', icon: '🛒' },
    { name: 'Performance Optimization', icon: '⚡' }
  ]

  const stats = [
    { number: '300+', label: 'Projects Built' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '2.5s', label: 'Avg Load Time' },
    { number: '100%', label: 'Mobile Responsive' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900 pt-20">
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
              Development
            </span>{' '}
            That Performs
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Build fast, secure, and scalable websites and mobile apps that deliver exceptional performance, 
            drive conversions, and grow with your business.
          </motion.p>

          {/* Service Highlights */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {developmentServices.map((service, index) => (
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
              onClick={() => window.location.href = '/Contact?service=development'}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="large"
              onClick={() => {
                 window.location.href = '/Services'}

              }
            >
              View Our Services
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-700/50"
          >
            {stats.map((stat, index) => (
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