'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's ROI CTA section
const TEMPLATE_CONFIG = {
  content: {
    title: {
      line1: 'Ready to Achieve',
      line2: 'Your ROI Potential?'
    },
    subtitle: 'Don\'t let another quarter pass without strategic clarity. Start your journey to measurable business growth with a proven ROI framework.',
    guaranteeTitle: 'ROI Guarantee',
    motivationalQuote: '"The best investment you can make is in your business strategy."',
    motivationalFooter: 'Start calculating and achieving your ROI today.'
  },
  // Update these guarantee terms based on your actual offerings
  guarantee: [
    { metric: '10:1 Minimum', description: 'Or your money back' },
    { metric: '6 Months', description: 'Maximum payback period' },
    { metric: '90 Days', description: 'Follow-up support included' }
  ],
  // Update these action steps based on your process
  actionSteps: [
    { icon: '📊', step: '1. Calculate ROI', description: 'Get your personalized estimate above' },
    { icon: '💬', step: '2. Book Strategy Call', description: 'Discuss your specific situation' },
    { icon: '🚀', step: '3. Start Growing', description: 'Implement your custom strategy' }
  ],
  // Update these CTAs with your actual URLs
  ctas: {
    primary: {
      text: 'Start Your ROI Journey',
      url: '/contact?service=consulting&intent=roi-guarantee'
    },
    secondary: {
      text: 'Book ROI Analysis Call',
      url: '/book-call?service=consulting&type=roi-analysis'
    }
  },
  // Update contact information with your details
  contact: {
    phone: '+1-555-0123',
    phoneDisplay: '(555) 123-4567',
    email: 'roi@yourcompany.com'
  },
  // Update these offers based on your current promotions
  specialOffers: [
    { title: 'Free ROI Audit', description: 'Worth $500 - This month only' },
    { title: 'Double ROI Guarantee', description: '20:1 minimum for enterprise clients' }
  ],
  // Update these statistics based on your track record
  successStats: [
    { number: '100+', label: 'ROI Success Stories' },
    { number: '94%', label: 'Exceed Projections' },
    { number: '15:1', label: 'Average ROI' },
    { number: '3.5 Months', label: 'Average Payback' }
  ]
}

export default function ROICTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {TEMPLATE_CONFIG.content.title.line1}
            <span className="block">{TEMPLATE_CONFIG.content.title.line2}</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>

          {/* ROI Guarantee */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">{TEMPLATE_CONFIG.content.guaranteeTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {TEMPLATE_CONFIG.guarantee.map((item, index) => (
                <div key={index}>
                  <div className="text-xl font-bold text-white mb-2">{item.metric}</div>
                  <div className="text-blue-100 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Action Steps */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {TEMPLATE_CONFIG.actionSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{step.icon}</div>
                <h4 className="font-bold text-white mb-2">{step.step}</h4>
                <p className="text-blue-100 text-sm">{step.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.a
              href={TEMPLATE_CONFIG.ctas.primary.url}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl text-lg"
            >
              {TEMPLATE_CONFIG.ctas.primary.text}
            </motion.a>
            <motion.a
              href={TEMPLATE_CONFIG.ctas.secondary.url}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white text-lg"
            >
              {TEMPLATE_CONFIG.ctas.secondary.text}
            </motion.a>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            className="text-blue-100 mb-8"
          >
            <p className="mb-4">
              Questions about ROI calculations or guarantees? 
              <a href={`tel:${TEMPLATE_CONFIG.contact.phone}`} className="text-white hover:underline font-medium ml-2">
                Call us: {TEMPLATE_CONFIG.contact.phoneDisplay}
              </a>
            </p>
            <p className="text-sm">
              Or email our ROI specialists at 
              <a href={`mailto:${TEMPLATE_CONFIG.contact.email}`} className="text-white hover:underline font-medium ml-1">
                {TEMPLATE_CONFIG.contact.email}
              </a>
            </p>
          </motion.div>

          {/* Special Offers */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Limited Time Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {TEMPLATE_CONFIG.specialOffers.map((offer, index) => (
                <div key={index} className="text-center">
                  <div className="font-bold text-white">{offer.title}</div>
                  <div className="text-blue-100">{offer.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Success Statistics */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {TEMPLATE_CONFIG.successStats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Final Motivational Message */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-blue-100 text-lg italic mb-2">
              {TEMPLATE_CONFIG.content.motivationalQuote}
            </p>
            <p className="text-white font-medium">
              {TEMPLATE_CONFIG.content.motivationalFooter}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED ROI CTA - TEMPLATE READY

FEATURES:
✅ Unified styling with blue color scheme (blue-500/blue-600/blue-700)
✅ Template-ready configuration in TEMPLATE_CONFIG
✅ Removed all specific branding and company references
✅ Customizable contact information and URLs
✅ Consistent typography and spacing

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your specific details
2. Modify guarantee terms based on your actual offerings
3. Update contact information (phone, email)
4. Customize CTA URLs to match your site structure
5. Adjust special offers based on current promotions
6. Update success statistics with your track record
7. Modify action steps to match your process

UNIFIED ELEMENTS:
- Blue gradient background (blue-500 → blue-600 → blue-700)
- Consistent card design and backdrop blur effects
- Same typography and spacing
- Unified animation timing
- Matching button styles and hover effects

Perfect high-converting CTA section to drive ROI calculator leads!
*/