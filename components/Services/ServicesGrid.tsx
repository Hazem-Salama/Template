'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ServicesGrid() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const services = [
    {
      id: 'Branding',
      icon: '🎨',
      title: t('servicesGrid.services.branding.title'),
      description: t('servicesGrid.services.branding.description'),
      features: [
        t('servicesGrid.services.branding.features.0'),
        t('servicesGrid.services.branding.features.1'),
        t('servicesGrid.services.branding.features.2'),
        t('servicesGrid.services.branding.features.3'),
        t('servicesGrid.services.branding.features.4'),
        t('servicesGrid.services.branding.features.5')
      ],
      deliverables: t('servicesGrid.services.branding.deliverables'),
      timeline: t('servicesGrid.services.branding.timeline'),
      startingPrice: t('servicesGrid.services.branding.startingPrice')
    },
    {
      id: 'DM',
      icon: '📊',
      title: t('servicesGrid.services.digitalMarketing.title'),
      description: t('servicesGrid.services.digitalMarketing.description'),
      features: [
        t('servicesGrid.services.digitalMarketing.features.0'),
        t('servicesGrid.services.digitalMarketing.features.1'),
        t('servicesGrid.services.digitalMarketing.features.2'),
        t('servicesGrid.services.digitalMarketing.features.3'),
        t('servicesGrid.services.digitalMarketing.features.4'),
        t('servicesGrid.services.digitalMarketing.features.5')
      ],
      deliverables: t('servicesGrid.services.digitalMarketing.deliverables'),
      timeline: t('servicesGrid.services.digitalMarketing.timeline'),
      startingPrice: t('servicesGrid.services.digitalMarketing.startingPrice')
    },
    {
      id: 'UIUX',
      icon: '💻',
      title: t('servicesGrid.services.uiux.title'),
      description: t('servicesGrid.services.uiux.description'),
      features: [
        t('servicesGrid.services.uiux.features.0'),
        t('servicesGrid.services.uiux.features.1'),
        t('servicesGrid.services.uiux.features.2'),
        t('servicesGrid.services.uiux.features.3'),
        t('servicesGrid.services.uiux.features.4'),
        t('servicesGrid.services.uiux.features.5')
      ],
      deliverables: t('servicesGrid.services.uiux.deliverables'),
      timeline: t('servicesGrid.services.uiux.timeline'),
      startingPrice: t('servicesGrid.services.uiux.startingPrice')
    },
    {
      id: 'Consulting',
      icon: '💡',
      title: t('servicesGrid.services.consulting.title'),
      description: t('servicesGrid.services.consulting.description'),
      features: [
        t('servicesGrid.services.consulting.features.0'),
        t('servicesGrid.services.consulting.features.1'),
        t('servicesGrid.services.consulting.features.2'),
        t('servicesGrid.services.consulting.features.3'),
        t('servicesGrid.services.consulting.features.4'),
        t('servicesGrid.services.consulting.features.5')
      ],
      deliverables: t('servicesGrid.services.consulting.deliverables'),
      timeline: t('servicesGrid.services.consulting.timeline'),
      startingPrice: t('servicesGrid.services.consulting.startingPrice')
    },
    {
      id: 'WebDev',
      icon: '⚡',
      title: t('servicesGrid.services.development.title'),
      description: t('servicesGrid.services.development.description'),
      features: [
        t('servicesGrid.services.development.features.0'),
        t('servicesGrid.services.development.features.1'),
        t('servicesGrid.services.development.features.2'),
        t('servicesGrid.services.development.features.3'),
        t('servicesGrid.services.development.features.4'),
        t('servicesGrid.services.development.features.5'),
        t('servicesGrid.services.development.features.6')
      ],
      deliverables: t('servicesGrid.services.development.deliverables'),
      timeline: t('servicesGrid.services.development.timeline'),
      startingPrice: t('servicesGrid.services.development.startingPrice')
    }
  ]

  return (
    <section id="services-grid" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-4xl md:text-5xl font-bold text-black mb-6 ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('servicesGrid.title')} <span className="text-red-500">{t('servicesGrid.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-xl text-gray-600 max-w-3xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('servicesGrid.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold text-black mb-3 group-hover:text-red-500 transition-colors duration-300 ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {service.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className={`font-semibold text-black mb-3 ${
                  isRTL ? 'font-arabic text-right' : ''
                }`}>
                  {t('servicesGrid.includesLabel')}
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-start text-sm text-gray-700 ${
                      isRTL ? 'flex-row-reverse font-arabic text-right' : ''
                    }`}>
                      <div className={`w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 ${
                        isRTL ? 'ml-3' : 'mr-3'
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Details */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <div className="space-y-3 text-sm">
                  <div className={`flex justify-between ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}>
                    <span className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                      {t('servicesGrid.deliverablesLabel')}
                    </span>
                    <span className={`text-black font-medium ${isRTL ? 'font-arabic' : ''}`}>
                      {service.deliverables}
                    </span>
                  </div>
                  <div className={`flex justify-between ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}>
                    <span className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                      {t('servicesGrid.timelineLabel')}
                    </span>
                    <span className={`text-black font-medium ${isRTL ? 'font-arabic' : ''}`}>
                      {service.timeline}
                    </span>
                  </div>
                  <div className={`flex justify-between ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}>
                    <span className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                      {t('servicesGrid.investmentLabel')}
                    </span>
                    <span className={`text-red-500 font-bold ${isRTL ? 'font-arabic' : ''}`}>
                      {service.startingPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <motion.a
                href={`/${service.id}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full bg-gray-100 text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 text-center ${
                  isRTL ? 'font-arabic' : ''
                }`}
              >
                {t('common.learnMore')}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Solutions CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-3xl p-8 md:p-12" dir={isRTL ? 'rtl' : 'ltr'}>
            <h3 className={`text-3xl font-bold text-black mb-4 ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('servicesGrid.customSolution.title')}
            </h3>
            <p className={`text-gray-600 mb-6 max-w-2xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('servicesGrid.customSolution.description')}
            </p>
            <motion.a
              href="/book-call"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t('servicesGrid.customSolution.ctaButton')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}