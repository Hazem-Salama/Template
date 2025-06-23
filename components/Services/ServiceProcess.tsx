'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ServiceProcess() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const processSteps = [
    {
      step: '01',
      title: t('serviceProcess.steps.discovery.title'),
      description: t('serviceProcess.steps.discovery.description'),
      duration: t('serviceProcess.steps.discovery.duration'),
      outcome: t('serviceProcess.steps.discovery.outcome')
    },
    {
      step: '02',
      title: t('serviceProcess.steps.proposal.title'),
      description: t('serviceProcess.steps.proposal.description'),
      duration: t('serviceProcess.steps.proposal.duration'),
      outcome: t('serviceProcess.steps.proposal.outcome')
    },
    {
      step: '03',
      title: t('serviceProcess.steps.development.title'),
      description: t('serviceProcess.steps.development.description'),
      duration: t('serviceProcess.steps.development.duration'),
      outcome: t('serviceProcess.steps.development.outcome')
    },
    {
      step: '04',
      title: t('serviceProcess.steps.review.title'),
      description: t('serviceProcess.steps.review.description'),
      duration: t('serviceProcess.steps.review.duration'),
      outcome: t('serviceProcess.steps.review.outcome')
    },
    {
      step: '05',
      title: t('serviceProcess.steps.launch.title'),
      description: t('serviceProcess.steps.launch.description'),
      duration: t('serviceProcess.steps.launch.duration'),
      outcome: t('serviceProcess.steps.launch.outcome')
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
            {t('serviceProcess.title')} <span className="text-red-500">{t('serviceProcess.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-xl text-gray-600 max-w-3xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('serviceProcess.subtitle')}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200 hidden lg:block"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isRTL ? (
                    index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  ) : (
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  )
                }`}
              >
                {/* Content */}
                <motion.div
                  variants={fadeInUp}
                  className="flex-1 max-w-lg"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg" dir={isRTL ? 'rtl' : 'ltr'}>
                    <div className={`flex items-center mb-4 ${
                      isRTL ? 'flex-row-reverse' : ''
                    }`}>
                      <span className={`text-4xl font-bold text-red-500 ${
                        isRTL ? 'ml-4' : 'mr-4'
                      }`}>
                        {step.step}
                      </span>
                      <h3 className={`text-2xl font-bold text-black ${
                        isRTL ? 'font-arabic' : ''
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className={`text-gray-600 mb-6 leading-relaxed ${
                      isRTL ? 'font-arabic' : ''
                    }`}>
                      {step.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className={`flex justify-between items-center ${
                        isRTL ? 'flex-row-reverse' : ''
                      }`}>
                        <span className={`text-sm text-gray-500 uppercase tracking-wide ${
                          isRTL ? 'font-arabic' : ''
                        }`}>
                          {t('serviceProcess.durationLabel')}
                        </span>
                        <span className={`font-medium text-black ${
                          isRTL ? 'font-arabic' : ''
                        }`}>
                          {step.duration}
                        </span>
                      </div>
                      <div className={`flex justify-between items-center ${
                        isRTL ? 'flex-row-reverse' : ''
                      }`}>
                        <span className={`text-sm text-gray-500 uppercase tracking-wide ${
                          isRTL ? 'font-arabic' : ''
                        }`}>
                          {t('serviceProcess.outcomeLabel')}
                        </span>
                        <span className={`font-medium text-black ${
                          isRTL ? 'font-arabic' : ''
                        }`}>
                          {step.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Node */}
                <motion.div
                  variants={fadeInUp}
                  className="relative z-10 hidden lg:block"
                >
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg" dir={isRTL ? 'rtl' : 'ltr'}>
            <h3 className={`text-3xl font-bold text-black mb-8 text-center ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('serviceProcess.whyWorks.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className={`text-xl font-semibold text-black mb-3 ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {t('serviceProcess.whyWorks.communication.title')}
                </h4>
                <p className={`text-gray-600 ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {t('serviceProcess.whyWorks.communication.description')}
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl mb-4">⏱️</div>
                <h4 className={`text-xl font-semibold text-black mb-3 ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {t('serviceProcess.whyWorks.delivery.title')}
                </h4>
                <p className={`text-gray-600 ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {t('serviceProcess.whyWorks.delivery.description')}
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h4 className={`text-xl font-semibold text-black mb-3 ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {t('serviceProcess.whyWorks.quality.title')}
                </h4>
                <p className={`text-gray-600 ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  {t('serviceProcess.whyWorks.quality.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}