'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp } from '@/lib/animations'

export default function CallBenefits() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const benefits = [
    {
      icon: '🎯',
      title: t('bookCall.benefits.personalizedStrategy.title', 'Personalized Strategy'),
      description: t('bookCall.benefits.personalizedStrategy.description', 'Get a custom strategy tailored specifically to your business goals and challenges.')
    },
    {
      icon: '💰',
      title: t('bookCall.benefits.budgetOptimization.title', 'Budget Optimization'),
      description: t('bookCall.benefits.budgetOptimization.description', 'Learn how to maximize your ROI and allocate resources for maximum impact.')
    },
    {
      icon: '⏱️',
      title: t('bookCall.benefits.timelinePlanning.title', 'Timeline Planning'),
      description: t('bookCall.benefits.timelinePlanning.description', 'Create realistic timelines and milestones to achieve your objectives efficiently.')
    },
    {
      icon: '🔍',
      title: t('bookCall.benefits.marketInsights.title', 'Market Insights'),
      description: t('bookCall.benefits.marketInsights.description', 'Gain valuable insights into your market, competitors, and growth opportunities.')
    }
  ]

  const process = [
    { 
      step: isRTL ? '١' : '1', 
      title: t('bookCall.howItWorks.steps.book.title', 'Book Your Call'), 
      description: t('bookCall.howItWorks.steps.book.description', 'Choose your preferred time and tell us about your project goals.') 
    },
    { 
      step: isRTL ? '٢' : '2', 
      title: t('bookCall.howItWorks.steps.preparation.title', 'We Prepare'), 
      description: t('bookCall.howItWorks.steps.preparation.description', 'Our team reviews your information and prepares tailored insights.') 
    },
    { 
      step: isRTL ? '٣' : '3', 
      title: t('bookCall.howItWorks.steps.call.title', 'Strategic Discussion'), 
      description: t('bookCall.howItWorks.steps.call.description', 'We discuss your goals, challenges, and create an action plan together.') 
    },
    { 
      step: isRTL ? '٤' : '4', 
      title: t('bookCall.howItWorks.steps.followUp.title', 'Follow-Up'), 
      description: t('bookCall.howItWorks.steps.followUp.description', 'Receive a summary of recommendations and next steps via email.') 
    }
  ]

  return (
    <div className="p-8 lg:p-12" dir={isRTL ? 'rtl' : 'ltr'}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="max-w-lg mx-auto"
      >
        {/* What You'll Get */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h3 className={`text-2xl font-bold text-white mb-6 text-center lg:text-${isRTL ? 'right' : 'left'} ${
            isRTL ? 'font-arabic' : ''
          }`}>
            {t('bookCall.benefits.title', 'What You\'ll Get')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <h4 className={`text-white font-semibold text-sm mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {benefit.title}
                </h4>
                <p className={`text-gray-400 text-xs leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div variants={fadeInUp} className="mb-8">
          <h3 className={`text-2xl font-bold text-white mb-6 text-center lg:text-${isRTL ? 'right' : 'left'} ${
            isRTL ? 'font-arabic' : ''
          }`}>
            {t('bookCall.howItWorks.title', 'How It Works')}
          </h3>
          <div className="space-y-4">
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <h4 className={`text-white font-semibold text-sm mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                    {step.title}
                  </h4>
                  <p className={`text-gray-400 text-xs leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={fadeInUp} className={`text-center lg:text-${isRTL ? 'right' : 'left'}`}>
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
            <div className={`flex items-center justify-center lg:justify-${isRTL ? 'end' : 'start'} space-x-2 mb-2 ${
              isRTL ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={`text-green-300 font-medium text-sm ${isRTL ? 'font-arabic' : ''}`}>
                {t('bookCall.trustIndicator.title', '100% Risk-Free')}
              </span>
            </div>
            <p className={`text-green-200 text-xs leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
              {t('bookCall.trustIndicator.description', 'No commitment required. This is a completely free consultation to help you make informed decisions about your business growth.')}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}