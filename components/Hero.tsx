'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Button from './Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight hero-title"
          >
            {isRTL ? (
              <>
                <span className="block">حلول</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  إبداعية
                </span>
                <span className="block">بلا حدود</span>
              </>
            ) : (
              <>
                <span className="block">Unlimited</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Creative
                </span>
                <span className="block">Solutions</span>
              </>
            )}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed hero-subtitle"
          >
            {isRTL 
              ? 'حوّل علامتك التجارية بحلول مبتكرة في التصميم والتطوير والتسويق تحقق نتائج حقيقية.'
              : 'Transform your brand with innovative design, development, and marketing solutions that drive real results.'
            }
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${
              isRTL ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <Button 
              variant="primary" 
              size="large"
              onClick={() => {
                window.location.href = '/book-call'
              }}
            >
              {isRTL ? 'احجز مكالمة استراتيجية مجانية' : 'Book Free Strategy Call'}
            </Button>
            <Button 
              variant="outline" 
              size="large"
              onClick={() => {
                window.location.href = '/Portfolio'
              }}
            >
              {isRTL ? 'شاهد أعمالنا' : 'View Our Work'}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-700/50"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2 arabic-numerals">
                500+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide stat-label">
                {isRTL ? 'مشاريع مكتملة' : 'Projects Completed'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2 arabic-numerals">
                98%
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide stat-label">
                {isRTL ? 'رضا العملاء' : 'Client Satisfaction'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2 arabic-numerals">
                5
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide stat-label">
                {isRTL ? 'سنوات خبرة' : 'Years Experience'}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}