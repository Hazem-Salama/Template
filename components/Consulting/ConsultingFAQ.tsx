'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's consulting FAQ
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  content: {
    title: 'Frequently Asked Questions',
    subtitle: 'Get answers to common questions about our strategy consulting services.',
    contactTitle: 'Still Have Questions?',
    contactSubtitle: 'Our strategy experts are here to help you understand how our consulting services can benefit your specific business situation.'
  },
  faqs: [
    {
      question: 'How long does a typical strategy consulting project take?',
      answer: 'Most strategy consulting projects are completed within 1-3 weeks, depending on the scope and complexity. We offer expedited services for urgent strategic decisions and extended engagements for comprehensive transformations.'
    },
    {
      question: 'What makes your approach different from other consultants?',
      answer: 'We combine deep industry expertise with data-driven insights and practical implementation focus. Unlike traditional consultants, we don\'t just deliver reports – we provide actionable strategies with clear roadmaps and ongoing support to ensure successful execution.'
    },
    {
      question: 'Do you work with startups or only established businesses?',
      answer: 'We work with businesses of all sizes, from early-stage startups to Fortune 500 companies. Our approach is scalable and tailored to your specific stage of growth, resources, and strategic needs.'
    },
    {
      question: 'What kind of ROI can I expect from strategy consulting?',
      answer: 'Our clients typically see a 15:1 ROI within the first year. Most businesses experience 85% revenue growth and achieve payback on their consulting investment within 3-6 months through improved decision-making and strategic clarity.'
    },
    {
      question: 'How do you ensure the strategy will work for my specific industry?',
      answer: 'We conduct comprehensive industry analysis and competitive research specific to your market. Our team includes specialists across various industries, and we customize every strategy based on your unique market dynamics, customer base, and competitive landscape.'
    },
    {
      question: 'What happens after the strategy is delivered?',
      answer: 'We provide implementation support to ensure successful execution. This includes regular check-ins, progress monitoring, strategy adjustments, and ongoing consultation to address challenges that arise during implementation.'
    },
    {
      question: 'Can you help with digital transformation strategy?',
      answer: 'Absolutely. Digital transformation is one of our core specialties. We help businesses develop comprehensive digital strategies, select the right technology stack, plan implementation roadmaps, and manage organizational change.'
    },
    {
      question: 'How much does strategy consulting cost?',
      answer: 'Our consulting packages start at $1,500 for strategic audits and go up to custom enterprise solutions. The investment depends on project scope, timeline, and deliverables. We offer transparent pricing and work within your budget to maximize value.'
    }
  ],
  contact: {
    primaryCTA: 'Ask a Question',
    secondaryCTA: 'Book a Call',
    primaryAction: '/contact?service=consulting&type=question',
    secondaryAction: '/contact?service=consulting&type=call'
  }
}

export default function ConsultingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleContactClick = (action: string) => {
    window.location.href = action
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-black mb-6"
          >
            Frequently Asked <span className="text-blue-500">Questions</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>
        </motion.div>

        {/* FAQ Items - Unified styling */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {TEMPLATE_CONFIG.faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-black pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-6 h-6 flex items-center justify-center"
                    >
                      <div className="w-4 h-4 relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2"></div>
                        <div className="absolute left-1/2 top-0 w-0.5 h-full bg-black transform -translate-x-1/2"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA - Unified styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                {TEMPLATE_CONFIG.content.contactTitle}
              </h3>
              <p className="text-gray-600 mb-6">
                {TEMPLATE_CONFIG.content.contactSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                  onClick={() => handleContactClick(TEMPLATE_CONFIG.contact.primaryAction)}
                >
                  {TEMPLATE_CONFIG.contact.primaryCTA}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200"
                  onClick={() => handleContactClick(TEMPLATE_CONFIG.contact.secondaryAction)}
                >
                  {TEMPLATE_CONFIG.contact.secondaryCTA}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CONSULTING FAQ - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding/careers components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration
✅ Interactive accordion functionality

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify FAQ questions and answers
3. Customize contact CTAs
4. Update contact page URLs
5. Add/remove FAQ items
6. Adjust messaging and tone

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same hover effects and animations
- Unified button styling
- Matching typography and spacing
- Consistent background gradients

FAQ TOPICS INCLUDED:
- Project timeline
- Approach differentiation
- Business size compatibility
- ROI expectations
- Industry specificity
- Post-delivery support
- Digital transformation
- Pricing information

FEATURES:
- Expandable FAQ items
- Smooth animations
- Interactive plus/minus icons
- Contact CTA section
- Primary and secondary actions

Perfect for addressing common consulting questions with unified design!
*/