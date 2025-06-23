// components/Mission.tsx
'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Import i18n configuration
import '@/lib/i18n'

export default function Mission() {
  const { t, i18n } = useTranslation('common')
  const isRTL = i18n.language === 'ar'

  const values = [
    {
      icon: '🎨',
      title: t('mission.values.creativity.title'),
      description: t('mission.values.creativity.description')
    },
    {
      icon: '📊',
      title: t('mission.values.dataDriven.title'),
      description: t('mission.values.dataDriven.description')
    },
    {
      icon: '🚀',
      title: t('mission.values.resultsFocused.title'),
      description: t('mission.values.resultsFocused.description')
    },
    {
      icon: '🤝',
      title: t('mission.values.collaborative.title'),
      description: t('mission.values.collaborative.description')
    },
    {
      icon: '⚡',
      title: t('mission.values.agile.title'),
      description: t('mission.values.agile.description')
    },
    {
      icon: '🌟',
      title: t('mission.values.excellence.title'),
      description: t('mission.values.excellence.description')
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-black mb-6"
          >
            {t('mission.title')} <span className="text-red-500">{t('mission.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            {t('mission.description')}
          </motion.p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-gray-50 to-red-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-black mb-6">{t('mission.statement.title')}</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t('mission.statement.content')}
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isRTL ? 'rtl-grid' : ''}`}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-black mb-4 group-hover:text-red-500 transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}