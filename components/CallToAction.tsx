'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function CallToAction() {
  // Template placeholder logos - replace with actual client logos
  const trustedLogos = [
    { logo: '/placeholder-logo-1.svg', name: 'Company One' },
    { logo: '/placeholder-logo-2.svg', name: 'Company Two' },
    { logo: '/placeholder-logo-3.svg', name: 'Company Three' },
    { logo: '/placeholder-logo-4.svg', name: 'Company Four' }
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Ready to Transform{' '}
            <span className="block text-blue-400">Your Business?</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Book a free 30-minute strategy consultation and discover how we can help you achieve your business goals with innovative solutions.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              variant="primary" 
              size="large"
              onClick={() => window.location.href = '/book-call'}
            >
              Book Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="large"
              onClick={() => window.open('https://calendly.com/your-agency', '_blank')}
            >
              Schedule via Calendar
            </Button>
          </motion.div>

          {/* Trust Indicators with Placeholder Logos */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-12 border-t border-gray-700"
          >
            <p className="text-gray-400 mb-8 text-sm uppercase tracking-wide">
              Trusted by Industry Leaders
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {trustedLogos.map((company, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ 
                    scale: 1.15,
                    y: -5
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer h-20"
                >
                  {/* Placeholder logo - replace with actual client logos */}
                  <div className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                    <span className="text-white/60 text-sm font-medium">{company.name}</span>
                  </div>
                  {/* Alternative: Use actual logo images
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={160}
                    height={80}
                    className="object-contain max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}