'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import BookCallHero from './BookCallHero'
import BookCallForm from './BookCallForm'
import CallBenefits from './CallBenefits'

// Template configuration - customize these values for your project
const TEMPLATE_CONFIG = {
  branding: {
    colors: {
      primary: '#3B82F6', // Blue - customize this
      dark: '#1F2937',
      darker: '#111827'
    }
  }
}

export default function BookCallClient() {
  const [selectedCallType, setSelectedCallType] = useState('strategy-call')

  return (
    <div 
      className="min-h-screen relative overflow-hidden" 
      style={{
        background: `linear-gradient(135deg, ${TEMPLATE_CONFIG.branding.colors.dark} 0%, ${TEMPLATE_CONFIG.branding.colors.darker} 50%, ${TEMPLATE_CONFIG.branding.colors.primary}20 100%)`
      }}
    >
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
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: `${TEMPLATE_CONFIG.branding.colors.primary}20` }}
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
        {/* Left Side - Hero & Benefits */}
        <div className="flex-1 flex flex-col">
          <BookCallHero 
            selectedCallType={selectedCallType}
            onCallTypeSelect={setSelectedCallType}
          />
          <CallBenefits />
        </div>

        {/* Right Side - Booking Form */}
        <div className="flex-1">
          <BookCallForm selectedCallType={selectedCallType} />
        </div>
      </div>
    </div>
  )
}