'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function CareersHero() {
  const [openPositionsCount, setOpenPositionsCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchOpenPositionsCount()
  }, [])

  const fetchOpenPositionsCount = async () => {
    try {
      const response = await fetch('/api/careers')
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated Background Elements */}
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
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
          >
            Join Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Creative Team
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            We're a team of passionate creators, strategists, and innovators who believe in pushing 
            boundaries and creating unlimited possibilities for our clients and ourselves.
          </motion.p>

          {/* Key Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Growth</h3>
              <p className="text-gray-400">200% team growth in 2 years</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-2">Great Culture</h3>
              <p className="text-gray-400">4.8/5 employee satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-gray-400">Cutting-edge projects daily</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Remote Friendly</h3>
              <p className="text-gray-400">Work from anywhere policy</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <motion.a
              href="#open-positions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg text-lg"
            >
              View Open Positions
            </motion.a>
          </motion.div>

          {/* Dynamic Current Openings Badge */}
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