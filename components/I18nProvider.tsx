'use client'

import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'

interface I18nProviderProps {
  children: React.ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initializeI18n = async () => {
      try {
        // Check for saved language preference
        let savedLanguage = null
        if (typeof window !== 'undefined') {
          savedLanguage = localStorage.getItem('preferred-language')
        }
        
        if (savedLanguage && ['en', 'ar'].includes(savedLanguage)) {
          await i18n.changeLanguage(savedLanguage)
        } else {
          // Default to English if no preference saved
          await i18n.changeLanguage('en')
        }

        // Set initial document properties
        const currentLang = i18n.language
        const isRTL = currentLang === 'ar'
        
        document.dir = isRTL ? 'rtl' : 'ltr'
        document.documentElement.lang = currentLang
        
        // Add Arabic font class if needed
        if (isRTL) {
          document.body.classList.add('font-arabic')
        } else {
          document.body.classList.remove('font-arabic')
        }

        setIsInitialized(true)
      } catch (error) {
        console.error('Failed to initialize i18n:', error)
        setIsInitialized(true) // Still render even if initialization fails
      }
    }

    initializeI18n()
  }, [])

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      const isRTL = lng === 'ar'
      
      document.dir = isRTL ? 'rtl' : 'ltr'
      document.documentElement.lang = lng
      
      if (isRTL) {
        document.body.classList.add('font-arabic')
      } else {
        document.body.classList.remove('font-arabic')
      }
      
      // Save preference
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferred-language', lng)
      }
    }

    i18n.on('languageChanged', handleLanguageChange)
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [])

  // Show loading state while initializing
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="loading-dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}