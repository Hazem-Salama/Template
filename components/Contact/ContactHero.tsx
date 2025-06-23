'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface ContactHeroProps {
  selectedMethod: string
  onMethodSelect: (method: string) => void
}

export default function ContactHero({ selectedMethod, onMethodSelect }: ContactHeroProps) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const contactMethods = [
    {
      id: 'general-inquiry',
      icon: '💬',
      title: t('contactHero.methods.generalInquiry.title'),
      description: t('contactHero.methods.generalInquiry.description'),
      action: t('contactHero.methods.generalInquiry.action')
    },
    {
      id: 'service-inquiry',
      icon: '🔍',
      title: t('contactHero.methods.serviceInquiry.title'),
      description: t('contactHero.methods.serviceInquiry.description'),
      action: t('contactHero.methods.serviceInquiry.action')
    },
    {
      id: 'project-quote',
      icon: '📋',
      title: t('contactHero.methods.projectQuote.title'),
      description: t('contactHero.methods.projectQuote.description'),
      action: t('contactHero.methods.projectQuote.action')
    },
    {
      id: 'support',
      icon: '🛠️',
      title: t('contactHero.methods.support.title'),
      description: t('contactHero.methods.support.description'),
      action: t('contactHero.methods.support.action')
    },
    {
      id: 'partnership',
      icon: '🤝',
      title: t('contactHero.methods.partnership.title'),
      description: t('contactHero.methods.partnership.description'),
      action: t('contactHero.methods.partnership.action')
    }
  ]

  const responsePromise = [
    {
      icon: '⚡',
      title: t('contactHero.promises.quickResponse.title'),
      description: t('contactHero.promises.quickResponse.description')
    },
    {
      icon: '🎯',
      title: t('contactHero.promises.customSolutions.title'),
      description: t('contactHero.promises.customSolutions.description')
    },
    {
      icon: '💯',
      title: t('contactHero.promises.professional.title'),
      description: t('contactHero.promises.professional.description')
    },
    {
      icon: '🔒',
      title: t('contactHero.promises.confidential.title'),
      description: t('contactHero.promises.confidential.description')
    }
  ]

  return (
    <div className="flex-1 flex items-start justify-center p-8 lg:p-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-lg w-full mt-8"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className={`text-center lg:text-${isRTL ? 'right' : 'left'} mb-12`}>
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {t('contactHero.title')} <span className="text-red-500">{t('contactHero.titleHighlight')}</span>
          </h1>
          <p className={`text-gray-300 text-lg leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
            {t('contactHero.subtitle')}
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div variants={fadeInUp} className="space-y-4 mb-12">
          <h3 className={`text-xl font-bold text-white mb-6 ${isRTL ? 'font-arabic text-right' : ''}`}>
            {t('contactHero.methodsTitle')}
          </h3>
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.id}
              variants={fadeInUp}
              onClick={() => onMethodSelect(method.id)}
              className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                selectedMethod === method.id
                  ? 'bg-red-500/20 border border-red-500/30 hover:bg-red-500/30' 
                  : 'bg-white/5 backdrop-blur-sm hover:bg-white/10'
              } ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <div className="text-3xl flex-shrink-0">{method.icon}</div>
              <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                <h4 className={`text-lg font-semibold text-white mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                  {method.title}
                </h4>
                <p className={`text-gray-300 text-sm leading-relaxed mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                  {method.description}
                </p>
                <span className={`text-sm font-medium ${
                  selectedMethod === method.id ? 'text-red-300' : 'text-red-500'
                } ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? '←' : ''} {method.action} {isRTL ? '' : '→'}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Response Promise */}
        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mb-8">
          {responsePromise.map((promise, index) => (
            <div key={index} className="text-center p-4 bg-white/5 rounded-lg" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="text-2xl mb-2">{promise.icon}</div>
              <h4 className={`text-sm font-bold text-white mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                {promise.title}
              </h4>
              <p className={`text-gray-400 text-xs leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                {promise.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeInUp} className={`text-center lg:text-${isRTL ? 'right' : 'left'} border-t border-white/20 pt-8`}>
          <h4 className={`text-white font-semibold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('contactHero.otherWays')}
          </h4>
          <div className="space-y-3 text-gray-300">
            <div className={`flex items-center justify-center lg:justify-${isRTL ? 'end' : 'start'} space-x-3 ${
              isRTL ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              <span className="text-red-500">📧</span>
              <a href="mailto:Unlimitedadvv@gmail.com" className="hover:text-white transition-colors">
                Unlimitedadvv@gmail.com
              </a>
            </div>
            <div className={`flex items-center justify-center lg:justify-${isRTL ? 'end' : 'start'} space-x-3 ${
              isRTL ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              <span className="text-red-500">📞</span>
              <a href="tel:+201060233872" className="hover:text-white transition-colors">
                +20 106 023 3872
              </a>
            </div>
            <div className={`flex items-center justify-center lg:justify-${isRTL ? 'end' : 'start'} space-x-3 ${
              isRTL ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              <span className="text-red-500">📍</span>
              <span className={isRTL ? 'font-arabic' : ''}>{t('contactHero.address')}</span>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className={`text-gray-400 text-xs ${isRTL ? 'font-arabic' : ''}`}>
                {t('contactHero.availability')}
              </p>
              <div className="mt-3">
                <Link href="/book-call" className={`inline-flex items-center text-red-500 hover:text-red-400 transition-colors text-sm font-medium ${
                  isRTL ? 'flex-row-reverse font-arabic' : ''
                }`}>
                  <svg className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {t('contactHero.bookCallLink')}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}