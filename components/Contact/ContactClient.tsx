'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import { templateConfig } from '@/lib/template-config'

export default function ContactClient() {
  const [selectedMethod, setSelectedMethod] = useState('general-inquiry')

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method)
  }

  const { branding } = templateConfig

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Navbar Spacer */}
      <div className="h-32 lg:h-36 w-full flex-shrink-0"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [180, 0, 180],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-9rem)] flex flex-col lg:flex-row">
        {/* Left Side - Hero/Contact Info */}
        <ContactHero 
          selectedMethod={selectedMethod}
          onMethodSelect={handleMethodSelect}
        />

        {/* Right Side - Contact Form */}
        <ContactForm selectedMethod={selectedMethod} />
      </div>
    </div>
  )
}