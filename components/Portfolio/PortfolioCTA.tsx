'use client'

import { motion } from 'framer-motion'
import Button from '../Button'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function PortfolioCTA() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const nextSteps = [
    {
      step: '01',
      title: t('portfolioCTA.steps.discuss.title'),
      description: t('portfolioCTA.steps.discuss.description')
    },
    {
      step: '02',
      title: t('portfolioCTA.steps.planning.title'),
      description: t('portfolioCTA.steps.planning.description')
    },
    {
      step: '03',
      title: t('portfolioCTA.steps.create.title'),
      description: t('portfolioCTA.steps.create.description')
    },
    {
      step: '04',
      title: t('portfolioCTA.steps.measure.title'),
      description: t('portfolioCTA.steps.measure.description')
    }
  ]

  const guarantees = [
    {
      icon: '💯',
      title: t('portfolioCTA.guarantees.customWork.title'),
      description: t('portfolioCTA.guarantees.customWork.description')
    },
    {
      icon: '⏱️',
      title: t('portfolioCTA.guarantees.onTime.title'),
      description: t('portfolioCTA.guarantees.onTime.description')
    },
    {
      icon: '🔄',
      title: t('portfolioCTA.guarantees.revisions.title'),
      description: t('portfolioCTA.guarantees.revisions.description')
    },
    {
      icon: '🎯',
      title: t('portfolioCTA.guarantees.results.title'),
      description: t('portfolioCTA.guarantees.results.description')
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-red-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className={`text-4xl md:text-6xl font-bold text-white mb-6 ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('portfolioCTA.title')}{' '}
            <span className="text-red-500">{t('portfolioCTA.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('portfolioCTA.subtitle')}
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="text-center mb-12" dir={isRTL ? 'rtl' : 'ltr'}>
            <h3 className={`text-3xl font-bold text-white mb-4 ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('portfolioCTA.processTitle')}
            </h3>
            <p className={`text-gray-300 max-w-2xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('portfolioCTA.processSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center relative"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {/* Connection Line */}
                {index < nextSteps.length - 1 && (
                  <div className={`hidden lg:block absolute top-6 w-full h-0.5 bg-red-500/30 transform translate-x-4 ${
                    isRTL ? 'right-full' : 'left-full'
                  }`}></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className={`text-lg font-bold text-white mb-3 ${
                    isRTL ? 'font-arabic' : ''
                  }`}>{step.title}</h4>
                  <p className={`text-gray-300 text-sm leading-relaxed ${
                    isRTL ? 'font-arabic' : ''
                  }`}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-12" dir={isRTL ? 'rtl' : 'ltr'}>
            <h3 className={`text-3xl font-bold text-white mb-4 ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('portfolioCTA.commitmentTitle')}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <div className="text-4xl mb-4">{guarantee.icon}</div>
                <h4 className={`text-lg font-bold text-white mb-3 ${
                  isRTL ? 'font-arabic' : ''
                }`}>{guarantee.title}</h4>
                <p className={`text-gray-300 text-sm leading-relaxed ${
                  isRTL ? 'font-arabic' : ''
                }`}>{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10" dir={isRTL ? 'rtl' : 'ltr'}>
            <h3 className={`text-3xl font-bold text-white mb-6 ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('portfolioCTA.ctaTitle')}
            </h3>
            <p className={`text-gray-300 mb-8 max-w-2xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('portfolioCTA.ctaSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button
                variant="primary"
                size="large"
                className={isRTL ? 'font-arabic' : ''}
                onClick={() => window.location.href = '/book-call'}
              >
                {t('portfolioCTA.startProject')}
              </Button>
              <Button
                variant="outline"
                size="large"
                className={isRTL ? 'font-arabic' : ''}
                onClick={() => window.open('', '_blank')}
              >
                {t('portfolioCTA.bookCall')}
              </Button>
            </div>

            <p className={`text-gray-400 text-sm ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('portfolioCTA.disclaimer')}
            </p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <p className={`text-gray-400 mb-8 text-sm uppercase tracking-wide ${
            isRTL ? 'font-arabic' : ''
          }`}>
            {t('portfolioCTA.trustedBy')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['TechStart', 'GrowthCo', 'InnovateLab', 'NextGen'].map((company, index) => (
              <div key={index} className="text-white font-bold text-lg">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}