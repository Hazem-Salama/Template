'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp } from '@/lib/animations'

interface PortfolioFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function PortfolioFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: PortfolioFilterProps) {
  const { i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-wrap justify-center gap-4 mb-12"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
          } ${isRTL ? 'font-arabic' : ''}`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  )
}