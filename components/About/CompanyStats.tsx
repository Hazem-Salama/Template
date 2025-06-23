// components/CompanyStats.tsx
'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Import i18n configuration
import '@/lib/i18n'

export default function CompanyStats() {
  const { t, i18n } = useTranslation('common')
  const isRTL = i18n.language === 'ar'

  const stats = [
    {
      number: '250+',
      label: t('stats.projectsCompleted'),
      description: t('stats.projectsCompletedDesc')
    },
    {
      number: '150+',
      label: t('stats.happyClients'),
      description: t('stats.happyClientsDesc')
    },
    {
      number: '98%',
      label: t('stats.clientRetention'),
      description: t('stats.clientRetentionDesc')
    },
    {
      number: '5+',
      label: t('stats.yearsExperience'),
      description: t('stats.yearsExperienceDesc')
    },
    {
      number: '24/7',
      label: t('stats.supportAvailable'),
      description: t('stats.supportAvailableDesc')
    },
    {
      number: '20+',
      label: t('stats.teamMembers'),
      description: t('stats.teamMembersDesc')
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50">
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
            {t('stats.title')} <span className="text-red-500">{t('stats.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('stats.description')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isRTL ? 'rtl-grid' : ''}`}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <h4 className="text-xl font-bold text-black mb-3">
                {stat.label}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-4">
              {t('stats.ctaTitle')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('stats.ctaDescription')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              onClick={() => window.location.href = '/book-call'}
            >
              {t('stats.ctaButton')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}