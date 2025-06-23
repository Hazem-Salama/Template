'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/About', label: 'About' },
    { href: '/Services', label: 'Services' },
    { href: '/Portfolio', label: 'Portfolio' },
    { href: '/Contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/90 backdrop-blur-lg border-b border-gray-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - TODO: Replace with your logo */}
            <Link href="/" className="group flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                {/* Placeholder logo - replace with your actual logo */}
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AC</span>
                </div>
                {/* Alternative: Use your logo image
                <Image
                  src="/your-logo.svg"
                  alt="Your Agency Name"
                  width={120}
                  height={120}
                  className="w-28 h-28 md:w-32 md:h-32 transition-transform duration-300"
                  priority
                />
                */}
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    pathname === item.href 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? 'w-full' : ''
                  }`} />
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/book-call">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-blue-400 transition-colors"
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-gray-900 shadow-xl overflow-y-auto">
              <div className="flex flex-col h-full pt-20 px-6">
                {/* Logo in mobile menu */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">AC</span>
                  </div>
                </div>

                {/* Main Navigation */}
                <div className="flex flex-col space-y-6 mb-8">
                  <h3 className="text-gray-400 text-sm uppercase tracking-wide font-semibold">
                    Navigation
                  </h3>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-xl font-medium transition-colors block ${
                          pathname === item.href 
                            ? 'text-blue-400' 
                            : 'text-white hover:text-blue-400'
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
                    <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg">
                      Get Started
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
                    <p>📞 +1 (555) 123-4567</p>
                    <p>📧 hello@youragency.com</p>
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