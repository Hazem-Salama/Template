'use client'

import { motion } from 'framer-motion'
import Button from '../Button'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function PortfolioHero() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const categories = [
    { name: t('portfolioHero.categories.all'), count: '50+', active: true },
    { name: t('portfolioHero.categories.branding'), count: '15+', active: false },
    { name: t('portfolioHero.categories.webDesign'), count: '20+', active: false },
    { name: t('portfolioHero.categories.mobileApps'), count: '8+', active: false },
    { name: t('portfolioHero.categories.marketing'), count: '12+', active: false }
  ]

  const stats = [
    { number: '500+', label: t('portfolioHero.stats.projectsCompleted') },
    { number: '150+', label: t('portfolioHero.stats.happyClients') },
    { number: '25+', label: t('portfolioHero.stats.industriesServed') },
    { number: '98%', label: t('portfolioHero.stats.clientSatisfaction') }
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
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className={`text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('portfolioHero.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              {t('portfolioHero.titleHighlight')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('portfolioHero.subtitle')}
          </motion.p>

          {/* Category Pills */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm'
                } ${isRTL ? 'font-arabic' : ''}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {category.name} ({category.count})
              </motion.button>
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
              className={isRTL ? 'font-arabic' : ''}
              onClick={() => {
                const portfolioGrid = document.getElementById('portfolio-grid')
                portfolioGrid?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t('portfolioHero.exploreProjects')}
            </Button>
            <Button 
              variant="outline" 
              size="large"
              className={isRTL ? 'font-arabic' : ''}
              onClick={() => window.location.href = '/book-call'}
            >
              {t('portfolioHero.startProject')}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-700/50"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  {stat.number}
                </div>
                <div className={`text-gray-400 text-sm uppercase tracking-wide ${
                  isRTL ? 'font-arabic' : ''
                }`}>
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