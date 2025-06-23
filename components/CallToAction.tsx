'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Button from './Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function CallToAction() {
  const { i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const trustedLogos = [
    { logo: '/ElShamy.svg', name: 'Elshamy Group' },
    { logo: '/Alamaan.svg', name: 'Alamaan Center' },
    { logo: '/ElShamy.svg', name: 'Elshamy Group' }, // Duplicate for now
    { logo: '/Alamaan.svg', name: 'Alamaan Center' } // Duplicate for now
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-red-900 relative overflow-hidden">
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
            className={`text-4xl md:text-6xl font-bold text-white mb-6 cta-title ${
              isRTL ? 'font-arabic' : ''
            }`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {isRTL ? (
              <>
                مستعد لتحويل{' '}
                <span className="block text-red-500">علامتك التجارية؟</span>
              </>
            ) : (
              <>
                Ready to Transform{' '}
                <span className="block text-red-500">Your Brand?</span>
              </>
            )}
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className={`text-xl text-gray-300 mb-12 max-w-2xl mx-auto cta-description ${
              isRTL ? 'font-arabic' : ''
            }`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {isRTL ? (
              'احجز مكالمة استراتيجية مجانية لمدة 30 دقيقة واكتشف كيف يمكننا مساعدتك في تحقيق أهداف عملك بحلول إبداعية بلا حدود.'
            ) : (
              'Book a free 30-minute strategy call and discover how we can help you achieve your business goals with unlimited creative solutions.'
            )}
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${
              isRTL ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <Button 
              variant="primary" 
              size="large"
              onClick={() => window.location.href = '/book-call'}
            >
              {isRTL ? 'احجز مكالمة استراتيجية مجانية' : 'Book Free Strategy Call'}
            </Button>
            <Button 
              variant="outline" 
              size="large"
              onClick={() => window.open('https://calendly.com/unlimited-agency', '_blank')}
            >
              {isRTL ? 'جدولة عبر التقويم' : 'Schedule via Calendar'}
            </Button>
          </motion.div>

          {/* Trust Indicators with Logos */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-12 border-t border-gray-700"
          >
            <p className={`text-gray-400 mb-8 text-sm uppercase tracking-wide ${
              isRTL ? 'font-arabic' : ''
            }`}>
              {isRTL ? 'موثوق به من قبل رواد الصناعة' : 'Trusted by Industry Leaders'}
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
                  className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer h-32"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={240}
                    height={120}
                    className="object-contain max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}