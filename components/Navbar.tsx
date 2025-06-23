'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'

// Import i18n configuration
import '@/lib/i18n'

export default function Navbar() {
  const { t, i18n } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isRTL = i18n.language === 'ar'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: t('navigation.home') },
    { href: '/About', label: t('navigation.about') },
    { href: '/Services', label: t('navigation.services') },
    { href: '/Portfolio', label: t('navigation.portfolio') },
    { href: '/Contact', label: t('navigation.contact') },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="group flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <Image
                  src="/Unlimited Logo.svg"
                  alt="Unlimited Creative Agency"
                  width={120}
                  height={120}
                  className="w-28 h-28 md:w-32 md:h-32 transition-transform duration-300"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - Centered - Force English layout */}
            <div 
              className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 navbar-items"
              style={{ flexDirection: 'row', gap: '2rem' }}
            >
              {isRTL ? (
                // For Arabic, reverse the order but keep flex-direction: row
                [...navItems].reverse().map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative group whitespace-nowrap ${
                      pathname === item.href 
                        ? 'text-red-500' 
                        : 'text-white hover:text-red-500'
                    }`}
                    style={{ marginLeft: '1rem', marginRight: '1rem' }}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? 'w-full' : ''
                    }`} />
                  </Link>
                ))
              ) : (
                // For English, normal order
                navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative group whitespace-nowrap ${
                      pathname === item.href 
                        ? 'text-red-500' 
                        : 'text-white hover:text-red-500'
                    }`}
                    style={{ marginLeft: '1rem', marginRight: '1rem' }}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? 'w-full' : ''
                    }`} />
                  </Link>
                ))
              )}
            </div>

            {/* Desktop CTA Section */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0" style={{ flexDirection: 'row' }}>
              {/* Language Switcher */}
              <LanguageSwitcher />
              
              {/* CTA Button */}
              <Link href="/book-call">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                >
                  {t('navigation.bookCall')}
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-red-500 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: isRTL ? '-100%' : '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? '-100%' : '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80" onClick={() => setIsOpen(false)} />
            <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-0 h-full w-80 bg-black shadow-xl overflow-y-auto`}>
              <div className="flex flex-col h-full pt-20 px-6">
                {/* Logo in mobile menu */}
                <div className="flex justify-center mb-8">
                  <Image
                    src="/Unlimited Logo.svg"
                    alt="Unlimited Creative Agency"
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>

                {/* Language Switcher in Mobile */}
                <div className="flex justify-center mb-8">
                  <LanguageSwitcher />
                </div>

                {/* Main Navigation */}
                <div className={`flex flex-col space-y-6 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wide font-semibold">
                    {isRTL ? 'التنقل' : 'Navigation'}
                  </h3>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-xl font-medium transition-colors block ${
                          pathname === item.href 
                            ? 'text-red-500' 
                            : 'text-white hover:text-red-500'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-auto pb-6 border-t border-gray-700 pt-6"
                >
                  <Link href="/book-call" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg">
                      {t('navigation.bookCall')}
                    </button>
                  </Link>
                </motion.div>

                {/* Contact Info for Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pb-6 text-center"
                >
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p>📞 +20 106 023 3872</p>
                    <p>📧 Unlimitedadvv@gmail.com</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}