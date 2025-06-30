// components/Contact/ContactClient.tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { templateConfig } from '@/lib/template-config'

// Inline the components to avoid import issues
const ContactHero = ({ selectedMethod, onMethodSelect }: { selectedMethod: string; onMethodSelect: (method: string) => void }) => {
  const { company, branding, business, social } = templateConfig

  return (
    <div className="flex-1 flex items-start justify-center p-8 lg:p-12">
      <div className="max-w-lg w-full mt-8">
        <div className="text-center lg:text-left mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span style={{ color: branding.primaryColor }}>Our Team</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Ready to start your project? Get in touch and let's discuss how we can help bring your vision to life.
          </p>
        </div>
        
        <div className="text-center lg:text-left border-t border-white/20 pt-8">
          <h4 className="text-white font-semibold mb-4">
            Get in touch
          </h4>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <span style={{ color: branding.primaryColor }}>📧</span>
              <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                {company.email}
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <span style={{ color: branding.primaryColor }}>📞</span>
              <a href={`tel:${company.phone}`} className="hover:text-white transition-colors">
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    newsletter: false
  })

  const { branding } = templateConfig

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="flex-1 flex items-start justify-center p-8 lg:p-12">
      <div className="max-w-lg w-full mt-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">
            Get in <span style={{ color: branding.primaryColor }}>Touch</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="w-4 h-4 rounded border-white/20"
                style={{ accentColor: branding.primaryColor }}
              />
              <label className="ml-2 text-white text-sm">
                Subscribe to our newsletter
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300"
              style={{ backgroundColor: branding.primaryColor }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const ContactClient: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('general-inquiry')

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      <div className="h-32 lg:h-36 w-full flex-shrink-0"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

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

      <div className="relative z-10 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-9rem)] flex flex-col lg:flex-row">
        <ContactHero 
          selectedMethod={selectedMethod}
          onMethodSelect={handleMethodSelect}
        />
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactClient