'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ROIAnalysisHero() {
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
            Detailed{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              ROI Analysis
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Get a comprehensive, personalized ROI analysis tailored to your specific business situation. 
            Our detailed report includes custom projections, implementation roadmap, and strategic recommendations.
          </motion.p>

          {/* Value Props */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Analysis</h3>
              <p className="text-gray-400">Tailored to your business</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Detailed Report</h3>
              <p className="text-gray-400">20+ page comprehensive analysis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">48-Hour Delivery</h3>
              <p className="text-gray-400">Fast turnaround time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Insights</h3>
              <p className="text-gray-400">Strategic recommendations included</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <motion.a
              href="#roi-analysis-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg text-lg"
            >
              Get Your Detailed Analysis
            </motion.a>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-400 text-sm">Analyses Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-gray-400 text-sm">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">48 Hours</div>
              <div className="text-gray-400 text-sm">Average Delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-gray-400 text-sm">No Cost Analysis</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}