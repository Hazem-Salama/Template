'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  href?: string
}

export default function ServiceCard({ icon, title, description, features, href }: ServiceCardProps) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const handleLearnMore = () => {
    if (href) {
      window.location.href = href
    }
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 h-full flex flex-col"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className={`text-2xl font-bold text-black mb-4 group-hover:text-red-500 transition-colors duration-300 service-card-title ${
        isRTL ? 'font-arabic' : ''
      }`}>
        {title}
      </h3>
      
      <p className={`text-gray-600 mb-6 leading-relaxed flex-grow service-card-description ${
        isRTL ? 'font-arabic' : ''
      }`}>
        {description}
      </p>
      
      <ul className={`space-y-2 mb-8 ${isRTL ? 'text-right' : ''}`}>
        {features.map((feature, index) => (
          <li key={index} className={`flex items-center text-sm text-gray-700 ${
            isRTL ? 'flex-row-reverse font-arabic' : ''
          }`}>
            <div className={`w-2 h-2 bg-red-500 rounded-full flex-shrink-0 ${
              isRTL ? 'ml-3' : 'mr-3'
            }`}></div>
            {feature}
          </li>
        ))}
      </ul>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLearnMore}
        className={`w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-red-500 transition-colors duration-300 mt-auto ${
          isRTL ? 'font-arabic' : ''
        }`}
      >
        {t('common.learnMore')}
      </motion.button>
    </motion.div>
  )
}