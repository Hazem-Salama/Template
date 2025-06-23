'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', dir: 'ltr' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (languageCode: string) => {
    const selectedLang = languages.find(lang => lang.code === languageCode)
    if (selectedLang) {
      i18n.changeLanguage(languageCode)
      
      // Update document direction and language
      document.dir = selectedLang.dir
      document.documentElement.lang = languageCode
      
      // Add or remove Arabic font class
      if (languageCode === 'ar') {
        document.body.classList.add('font-arabic')
      } else {
        document.body.classList.remove('font-arabic')
      }
      
      setIsOpen(false)
      
      // Store preference in localStorage
      localStorage.setItem('preferred-language', languageCode)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    // Set initial direction based on current language
    const currentLang = languages.find(lang => lang.code === i18n.language)
    if (currentLang) {
      document.dir = currentLang.dir
      document.documentElement.lang = i18n.language
      
      if (i18n.language === 'ar') {
        document.body.classList.add('font-arabic')
      } else {
        document.body.classList.remove('font-arabic')
      }
    }

    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language')
    if (savedLanguage && savedLanguage !== i18n.language) {
      changeLanguage(savedLanguage)
    }
  }, [i18n.language])

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all border border-white/20"
        aria-label="Change language"
      >
        <span className="text-lg" role="img" aria-label={`${currentLanguage.name} flag`}>
          {currentLanguage.flag}
        </span>
        <span className="hidden sm:block font-medium">
          {currentLanguage.nativeName}
        </span>
        <motion.svg 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 min-w-[180px] z-50 overflow-hidden"
          >
            {languages.map((language, index) => (
              <motion.button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  currentLanguage.code === language.code 
                    ? 'bg-red-50 text-red-600 border-r-2 border-red-500' 
                    : 'text-gray-700 hover:text-gray-900'
                } ${index === 0 ? 'rounded-t-xl' : ''} ${index === languages.length - 1 ? 'rounded-b-xl' : ''}`}
                dir={language.dir}
              >
                <span className="text-lg" role="img" aria-label={`${language.name} flag`}>
                  {language.flag}
                </span>
                <div className="flex flex-col">
                  <span className="font-medium">{language.nativeName}</span>
                  <span className="text-xs text-gray-500">{language.name}</span>
                </div>
                {currentLanguage.code === language.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto w-2 h-2 bg-red-500 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}