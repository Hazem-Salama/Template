'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  isLoading = false,
  className = '',
  ...props 
}: ButtonProps) {
  const { i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-black text-white hover:bg-gray-800 focus:ring-gray-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black focus:ring-white'
  }
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
          isRTL ? 'font-arabic' : ''
        }`}
        disabled={isLoading}
        dir={isRTL ? 'rtl' : 'ltr'}
        {...props}
      >
        {isLoading && (
          <div className={`w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin ${
            isRTL ? 'ml-2' : 'mr-2'
          }`} />
        )}
        {children}
      </button>
    </motion.div>
  )
}