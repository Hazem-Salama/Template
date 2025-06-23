'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface BookCallHeroProps {
  selectedCallType: string
  onCallTypeSelect: (type: string) => void
}

export default function BookCallHero({ selectedCallType, onCallTypeSelect }: BookCallHeroProps) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  // Safe function to get features array with fallback
  const getFeatures = (callTypeId: string): string[] => {
    try {
      const features = t(`bookCall.callTypes.${callTypeId}.features`, { returnObjects: true })
      // Check if features is an array of strings
      if (Array.isArray(features) && features.every(item => typeof item === 'string')) {
        return features as string[]
      }
      // Fallback features based on call type
      return getDefaultFeatures(callTypeId)
    } catch (error) {
      return getDefaultFeatures(callTypeId)
    }
  }

  // Default features as fallback
  const getDefaultFeatures = (callTypeId: string): string[] => {
    switch (callTypeId) {
      case 'strategy-call':
        return [
          t('bookCall.callTypes.strategy-call.features.0', 'Business Analysis'),
          t('bookCall.callTypes.strategy-call.features.1', 'Growth Strategy'),
          t('bookCall.callTypes.strategy-call.features.2', 'Market Research'),
          t('bookCall.callTypes.strategy-call.features.3', 'Action Plan')
        ]
      case 'discovery-call':
        return [
          t('bookCall.callTypes.discovery-call.features.0', 'Project Scope'),
          t('bookCall.callTypes.discovery-call.features.1', 'Technical Review'),
          t('bookCall.callTypes.discovery-call.features.2', 'Timeline Planning'),
          t('bookCall.callTypes.discovery-call.features.3', 'Budget Discussion')
        ]
      case 'consultation':
        return [
          t('bookCall.callTypes.consultation.features.0', 'Expert Advice'),
          t('bookCall.callTypes.consultation.features.1', 'Problem Solving'),
          t('bookCall.callTypes.consultation.features.2', 'Best Practices'),
          t('bookCall.callTypes.consultation.features.3', 'Implementation Guide')
        ]
      default:
        return [
          'Expert Consultation',
          'Personalized Advice',
          'Strategic Planning',
          'Action Items'
        ]
    }
  }

  const callTypes = [
    {
      id: 'strategy-call',
      icon: '🎯',
      title: t('bookCall.callTypes.strategy-call.title', 'Strategy Call'),
      duration: t('bookCall.callTypes.strategy-call.duration', '45 minutes'),
      description: t('bookCall.callTypes.strategy-call.description', 'Deep dive into your business goals and create a roadmap for success.'),
      features: getFeatures('strategy-call')
    },
    {
      id: 'discovery-call',
      icon: '🔍',
      title: t('bookCall.callTypes.discovery-call.title', 'Discovery Call'),
      duration: t('bookCall.callTypes.discovery-call.duration', '30 minutes'),
      description: t('bookCall.callTypes.discovery-call.description', 'Understand your project requirements and explore possibilities.'),
      features: getFeatures('discovery-call')
    },
    {
      id: 'consultation',
      icon: '💡',
      title: t('bookCall.callTypes.consultation.title', 'Consultation'),
      duration: t('bookCall.callTypes.consultation.duration', '60 minutes'),
      description: t('bookCall.callTypes.consultation.description', 'Expert guidance on specific challenges and opportunities.'),
      features: getFeatures('consultation')
    }
  ]

  const stats = [
    { 
      number: '500+', 
      label: t('bookCall.stats.successfulProjects', 'Successful Projects')
    },
    { 
      number: '98%', 
      label: t('bookCall.stats.clientSatisfaction', 'Client Satisfaction')
    },
    { 
      number: '24hr', 
      label: t('bookCall.stats.responseTime', 'Response Time')
    },
    { 
      number: '10+', 
      label: t('bookCall.stats.yearsExperience', 'Years Experience')
    }
  ]

  return (
    <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-lg"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className={`text-center lg:text-${isRTL ? 'right' : 'left'} mb-12`}>
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? (
              <>
                احجز مكالمة{' '}
                <span className="text-red-500">استراتيجية مجانية</span>
              </>
            ) : (
              <>
                Book Your Free{' '}
                <span className="text-red-500">Strategy Call</span>
              </>
            )}
          </h1>
          <p className={`text-gray-300 text-lg leading-relaxed mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 
              'احصل على رؤى خبراء حول مشروعك مع استشارة مجانية. لا يوجد عرض مبيعات - فقط نصائح قيمة لمساعدتك على النجاح.' :
              'Get expert insights on your project with a complimentary consultation. No sales pitch - just valuable advice to help you succeed.'
            }
          </p>
          <div className={`flex items-center justify-center lg:justify-${isRTL ? 'end' : 'start'} space-x-2 text-green-400 ${
            isRTL ? 'flex-row-reverse space-x-reverse' : ''
          }`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 
                'مجاني 100% • لا يوجد التزام مطلوب' :
                '100% Free • No Commitment Required'
              }
            </span>
          </div>
        </motion.div>

        {/* Call Type Selection */}
        <motion.div variants={fadeInUp} className="space-y-4 mb-12">
          <h3 className={`text-xl font-bold text-white mb-6 ${isRTL ? 'font-arabic text-right' : ''}`}>
            {isRTL ? 
              'اختر نوع المكالمة:' :
              'Choose Your Call Type:'
            }
          </h3>
          {callTypes.map((callType, index) => (
            <motion.div
              key={callType.id}
              variants={fadeInUp}
              onClick={() => onCallTypeSelect(callType.id)}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer border ${
                selectedCallType === callType.id
                  ? 'bg-red-500/20 border-red-500/50 shadow-lg' 
                  : 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10'
              }`}
            >
              <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className="text-3xl flex-shrink-0">{callType.icon}</div>
                <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                  <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <h4 className={`text-lg font-semibold text-white ${isRTL ? 'font-arabic' : ''}`}>
                      {callType.title}
                    </h4>
                    <span className={`text-red-400 text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}>
                      {callType.duration}
                    </span>
                  </div>
                  <p className={`text-gray-300 text-sm mb-3 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                    {callType.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {callType.features && callType.features.length > 0 && callType.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`flex items-center text-xs text-gray-400 ${
                        isRTL ? 'flex-row-reverse' : ''
                      }`}>
                        <div className={`w-1.5 h-1.5 bg-red-500 rounded-full ${isRTL ? 'ml-2' : 'mr-2'}`}></div>
                        <span className={isRTL ? 'font-arabic' : ''}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/5 rounded-lg" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="text-2xl font-bold text-red-500 mb-1">{stat.number}</div>
              <div className={`text-gray-400 text-xs uppercase tracking-wide ${isRTL ? 'font-arabic' : ''}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeInUp} className={`text-center lg:text-${isRTL ? 'right' : 'left'} border-t border-white/20 pt-8`}>
          <h4 className={`text-white font-semibold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('bookCall.preferCallDirectly', 'Prefer to call directly?')}
          </h4>
          <div className="space-y-3 text-gray-300">
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
              <span className="text-red-500">📧</span>
              <a href="mailto:Unlimitedadvv@gmail.com" className="hover:text-white transition-colors">
                Unlimitedadvv@gmail.com
              </a>
            </div>
            <div className={`text-xs text-gray-400 mt-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('bookCall.availability', 'Available 9 AM - 6 PM (GMT+2)')}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}