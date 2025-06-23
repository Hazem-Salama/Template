'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../Button'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ServicesCTA() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const ctaOptions = [
    {
      icon: '📞',
      title: t('servicesCTA.options.strategyCall.title'),
      description: t('servicesCTA.options.strategyCall.description'),
      action: t('servicesCTA.options.strategyCall.action'),
      href: '/book-call',
      variant: 'primary' as const
    },
    {
      icon: '💬',
      title: t('servicesCTA.options.chat.title'),
      description: t('servicesCTA.options.chat.description'),
      action: t('servicesCTA.options.chat.action'),
      href: '/Contact',
      variant: 'secondary' as const
    },
    {
      icon: '📊',
      title: t('servicesCTA.options.quote.title'),
      description: t('servicesCTA.options.quote.description'),
      action: t('servicesCTA.options.quote.action'),
      href: '/book-call',
      variant: 'outline' as const
    }
  ]

  const guarantees = [
    {
      icon: '⚡',
      title: t('servicesCTA.expectations.quickResponse.title'),
      description: t('servicesCTA.expectations.quickResponse.description')
    },
    {
      icon: '🎯',
      title: t('servicesCTA.expectations.customSolutions.title'),
      description: t('servicesCTA.expectations.customSolutions.description')
    },
    {
      icon: '💯',
      title: t('servicesCTA.expectations.noPressure.title'),
      description: t('servicesCTA.expectations.noPressure.description')
    },
    {
      icon: '🔒',
      title: t('servicesCTA.expectations.confidential.title'),
      description: t('servicesCTA.expectations.confidential.description')
    }
  ]

  const nextSteps = [
    {
      step: '01',
      title: t('servicesCTA.nextSteps.steps.getInTouch.title'),
      description: t('servicesCTA.nextSteps.steps.getInTouch.description')
    },
    {
      step: '02',
      title: t('servicesCTA.nextSteps.steps.discoveryCall.title'),
      description: t('servicesCTA.nextSteps.steps.discoveryCall.description')
    },
    {
      step: '03',
      title: t('servicesCTA.nextSteps.steps.customProposal.title'),
      description: t('servicesCTA.nextSteps.steps.customProposal.description')
    },
    {
      step: '04',
      title: t('servicesCTA.nextSteps.steps.projectKickoff.title'),
      description: t('servicesCTA.nextSteps.steps.projectKickoff.description')
    }
  ]

  const trustedLogos = [
    { logo: '/ElShamy.svg', name: 'Elshamy Group' },
    { logo: '/Alamaan.svg', name: 'Alamaan Center' },
    { logo: '/ElShamy.svg', name: 'Elshamy Group' },
    { logo: '/Alamaan.svg', name: 'Alamaan Center' }
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

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [180, 0, 180],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
            {t('servicesCTA.title')} <span className="text-red-500">{t('servicesCTA.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('servicesCTA.subtitle')}
          </motion.p>
        </motion.div>

        {/* CTA Options */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 group"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {option.icon}
              </div>
              <h3 className={`text-2xl font-bold text-white mb-4 ${
                isRTL ? 'font-arabic' : ''
              }`}>
                {option.title}
              </h3>
              <p className={`text-gray-300 mb-8 leading-relaxed ${
                isRTL ? 'font-arabic' : ''
              }`}>
                {option.description}
              </p>
              <Button
                variant={option.variant}
                size="large"
                className={`w-full ${isRTL ? 'font-arabic' : ''}`}
                onClick={() => window.location.href = option.href}
              >
                {option.action}
              </Button>
            </motion.div>
          ))}
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
              {t('servicesCTA.expectations.title')}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <div className="text-4xl mb-3">{guarantee.icon}</div>
                <h4 className={`text-lg font-bold text-white mb-2 ${
                  isRTL ? 'font-arabic' : ''
                }`}>{guarantee.title}</h4>
                <p className={`text-gray-300 text-sm ${
                  isRTL ? 'font-arabic' : ''
                }`}>{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Steps Process */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12" dir={isRTL ? 'rtl' : 'ltr'}>
            <h3 className={`text-3xl font-bold text-white mb-4 ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('servicesCTA.nextSteps.title')}
            </h3>
            <p className={`text-gray-300 max-w-2xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('servicesCTA.nextSteps.subtitle')}
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

          <motion.div
            variants={fadeInUp}
            className="text-center mt-12"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <Button
              variant="primary"
              size="large"
              className={isRTL ? 'font-arabic' : ''}
              onClick={() => window.location.href = '/book-call'}
            >
              {t('servicesCTA.nextSteps.ctaButton')}
            </Button>
            <p className={`text-gray-400 text-sm mt-4 ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {t('servicesCTA.nextSteps.disclaimer')}
            </p>
          </motion.div>
        </motion.div>

        {/* Trust Indicators with Logos */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <p className={`text-gray-400 mb-8 text-sm uppercase tracking-wide ${
            isRTL ? 'font-arabic' : ''
          }`}>
            {t('servicesCTA.trustedBy')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {trustedLogos.map((company, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  scale: 1.15,
                  y: -5
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut"
                }}
                className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer h-32"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={240}
                  height={120}
                  className="object-contain max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}