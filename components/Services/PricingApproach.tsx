'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function PricingApproach() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const pricingModels = [
    {
      icon: '💰',
      title: t('pricing.models.projectBased.title'),
      description: t('pricing.models.projectBased.description'),
      benefits: [
        t('pricing.models.projectBased.benefits.0'),
        t('pricing.models.projectBased.benefits.1'),
        t('pricing.models.projectBased.benefits.2'),
        t('pricing.models.projectBased.benefits.3')
      ],
      bestFor: t('pricing.models.projectBased.bestFor'),
      startingPrice: t('pricing.models.projectBased.startingPrice')
    },
    {
      icon: '📅',
      title: t('pricing.models.monthlyRetainer.title'),
      description: t('pricing.models.monthlyRetainer.description'),
      benefits: [
        t('pricing.models.monthlyRetainer.benefits.0'),
        t('pricing.models.monthlyRetainer.benefits.1'),
        t('pricing.models.monthlyRetainer.benefits.2'),
        t('pricing.models.monthlyRetainer.benefits.3')
      ],
      bestFor: t('pricing.models.monthlyRetainer.bestFor'),
      startingPrice: t('pricing.models.monthlyRetainer.startingPrice')
    },
    {
      icon: '🚀',
      title: t('pricing.models.performanceBased.title'),
      description: t('pricing.models.performanceBased.description'),
      benefits: [
        t('pricing.models.performanceBased.benefits.0'),
        t('pricing.models.performanceBased.benefits.1'),
        t('pricing.models.performanceBased.benefits.2'),
        t('pricing.models.performanceBased.benefits.3')
      ],
      bestFor: t('pricing.models.performanceBased.bestFor'),
      startingPrice: t('pricing.models.performanceBased.startingPrice')
    }
  ]

  const pricingFactors = [
    {
      factor: t('pricing.factors.projectScope.title'),
      description: t('pricing.factors.projectScope.description'),
      icon: '📏'
    },
    {
      factor: t('pricing.factors.timeline.title'),
      description: t('pricing.factors.timeline.description'),
      icon: '⏰'
    },
    {
      factor: t('pricing.factors.teamSize.title'),
      description: t('pricing.factors.teamSize.description'),
      icon: '👥'
    },
    {
      factor: t('pricing.factors.customization.title'),
      description: t('pricing.factors.customization.description'),
      icon: '🎨'
    },
    {
      factor: t('pricing.factors.ongoingSupport.title'),
      description: t('pricing.factors.ongoingSupport.description'),
      icon: '🔧'
    },
    {
      factor: t('pricing.factors.industry.title'),
      description: t('pricing.factors.industry.description'),
      icon: '🏢'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
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
            {t('pricing.title')} <span className="text-red-500">{t('pricing.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-xl text-gray-600 max-w-3xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('pricing.subtitle')}
          </motion.p>
        </motion.div>

        {/* Pricing Models */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {pricingModels.map((model, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {model.icon}
                </div>
                <h3 className={`text-2xl font-bold text-black mb-3 group-hover:text-red-500 transition-colors duration-300 ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {model.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {model.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className={`font-semibold text-black mb-3 ${
                  isRTL ? 'font-arabic text-right' : ''
                }`}>
                  {t('pricing.benefitsLabel')}
                </h4>
                <ul className="space-y-2">
                  {model.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className={`flex items-start text-sm text-gray-700 ${
                      isRTL ? 'flex-row-reverse font-arabic text-right' : ''
                    }`}>
                      <div className={`w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 ${
                        isRTL ? 'ml-3' : 'mr-3'
                      }`}></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="border-t border-gray-100 pt-6">
                <div className="space-y-3 text-sm">
                  <div className={isRTL ? 'text-right' : ''}>
                    <span className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                      {t('pricing.bestForLabel')}
                    </span>
                    <div className={`text-black font-medium ${isRTL ? 'font-arabic' : ''}`}>
                      {model.bestFor}
                    </div>
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <span className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                      {t('pricing.startingAtLabel')}
                    </span>
                    <div className={`text-red-500 font-bold text-lg ${isRTL ? 'font-arabic' : ''}`}>
                      {model.startingPrice}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Factors */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-12" dir={isRTL ? 'rtl' : 'ltr'}>
            <h3 className={`text-3xl font-bold text-black mb-4 ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('pricing.influencesTitle')}
            </h3>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('pricing.influencesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingFactors.map((factor, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <div className="text-3xl mb-3">{factor.icon}</div>
                <h4 className={`text-lg font-bold text-black mb-2 ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {factor.factor}
                </h4>
                <p className={`text-gray-600 text-sm ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Promise */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-black to-red-900 rounded-3xl p-8 md:p-12 text-white text-center"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <h3 className={`text-3xl font-bold mb-6 ${
            isRTL ? 'font-arabic' : ''
          }`}>
            {t('pricing.promise.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl mb-3">💯</div>
              <h4 className={`text-xl font-semibold mb-2 ${
                isRTL ? 'font-arabic' : ''
              }`}>
                {t('pricing.promise.transparent.title')}
              </h4>
              <p className={`text-gray-300 ${
                isRTL ? 'font-arabic' : ''
              }`}>
                {t('pricing.promise.transparent.description')}
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h4 className={`text-xl font-semibold mb-2 ${
                isRTL ? 'font-arabic' : ''
              }`}>
                {t('pricing.promise.fair.title')}
              </h4>
              <p className={`text-gray-300 ${
                isRTL ? 'font-arabic' : ''
              }`}>
                {t('pricing.promise.fair.description')}
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">📋</div>
              <h4 className={`text-xl font-semibold mb-2 ${
                isRTL ? 'font-arabic' : ''
              }`}>
                {t('pricing.promise.detailed.title')}
              </h4>
              <p className={`text-gray-300 ${
                isRTL ? 'font-arabic' : ''
              }`}>
                {t('pricing.promise.detailed.description')}
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg ${
              isRTL ? 'font-arabic' : ''
            }`}
            onClick={() => window.location.href = '/book-call'}
          >
            {t('pricing.promise.ctaButton')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}