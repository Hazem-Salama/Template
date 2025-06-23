'use client'

import { motion } from 'framer-motion'
import Button from '../Button'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ServicesHero() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const serviceHighlights = [
    { 
      icon: '🎨', 
      title: t('servicesHero.highlights.branding'), 
      count: '50+' 
    },
    { 
      icon: '💻', 
      title: t('servicesHero.highlights.websites'), 
      count: '200+' 
    },
    { 
      icon: '📱', 
      title: t('servicesHero.highlights.apps'), 
      count: '30+' 
    },
    { 
      icon: '📊', 
      title: t('servicesHero.highlights.campaigns'), 
      count: '100+' 
    }
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
        className="absolute top-1/4 right-1/3 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"
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
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className={`text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('servicesHero.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              {/* No need to translate "Services" as it's handled in the main title */}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('servicesHero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button 
              variant="primary" 
              size="large"
              className={isRTL ? 'font-arabic' : ''}
              onClick={() => window.location.href = '/book-call'}
            >
              {t('servicesHero.ctaQuote')}
            </Button>
            <Button 
              variant="outline" 
              size="large"
              className={isRTL ? 'font-arabic' : ''}
              onClick={() => {
                const servicesSection = document.getElementById('services-grid')
                servicesSection?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t('servicesHero.ctaExplore')}
            </Button>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-700/50"
          >
            {serviceHighlights.map((highlight, index) => (
              <div key={index} className="text-center" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="text-3xl mb-2">{highlight.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">
                  {highlight.count}
                </div>
                <div className={`text-gray-400 text-sm uppercase tracking-wide ${
                  isRTL ? 'font-arabic' : ''
                }`}>
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