'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's consulting benefits and ROI
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  content: {
    title: 'Why Choose Our Strategic Consulting',
    subtitle: 'Our proven methodology delivers measurable results that transform businesses and accelerate growth across all industries.',
    roiTitle: 'Calculate Your Potential ROI',
    roiDescription: 'Our strategic consulting has helped businesses achieve remarkable growth. Your investment in strategy typically pays for itself within the first quarter.'
  },
  benefits: [
    {
      icon: '📈',
      title: 'Accelerated Growth',
      description: 'Strategic insights that unlock new growth opportunities and revenue streams.',
      stats: '85% average revenue increase within 12 months'
    },
    {
      icon: '🎯',
      title: 'Clear Direction',
      description: 'Eliminate uncertainty with data-driven strategies and clear roadmaps.',
      stats: '90% of clients report improved decision-making clarity'
    },
    {
      icon: '⚡',
      title: 'Competitive Advantage',
      description: 'Position your business ahead of competitors with unique strategic positioning.',
      stats: '73% market share improvement on average'
    },
    {
      icon: '💰',
      title: 'Cost Optimization',
      description: 'Identify inefficiencies and optimize resource allocation for better ROI.',
      stats: '40% reduction in operational waste'
    },
    {
      icon: '🚀',
      title: 'Innovation Framework',
      description: 'Develop systematic approaches to innovation and digital transformation.',
      stats: '3x faster implementation of new initiatives'
    },
    {
      icon: '🛡️',
      title: 'Risk Mitigation',
      description: 'Anticipate challenges and develop contingency plans for sustainable growth.',
      stats: '65% reduction in strategic risks'
    }
  ],
  roi: {
    ratio: '15:1',
    ratioDescription: 'For every $1 invested',
    payback: '3-6',
    paybackDescription: 'Typical payback period',
    growth: '200%+',
    growthDescription: 'Compared to no strategy'
  },
  successMetrics: [
    { value: '500+', label: 'Strategies Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '$50M+', label: 'Revenue Generated' },
    { value: '85%', label: 'Long-term Partnerships' }
  ],
  links: {
    roiEstimate: '/ROI', // Update with your ROI estimate page
    contact: '/Contact?service=consulting' // Update with your contact page
  }
}

export default function ConsultingBenefits() {
  const handleROIClick = () => {
    window.location.href = TEMPLATE_CONFIG.links.roiEstimate
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Why Choose Our <span className="text-blue-500">Strategic Consulting</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>
        </motion.div>

        {/* Benefits Grid - Unified styling */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {TEMPLATE_CONFIG.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <div className="text-sm font-semibold text-blue-500">
                {benefit.stats}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ROI Calculator - Unified styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-black mb-6">
            Calculate Your Potential <span className="text-blue-500">ROI</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-blue-500 mb-2">{TEMPLATE_CONFIG.roi.ratio}</div>
              <div className="text-gray-600">Average ROI Ratio</div>
              <div className="text-sm text-gray-500 mt-2">{TEMPLATE_CONFIG.roi.ratioDescription}</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-blue-500 mb-2">{TEMPLATE_CONFIG.roi.payback}</div>
              <div className="text-gray-600">Months to ROI</div>
              <div className="text-sm text-gray-500 mt-2">{TEMPLATE_CONFIG.roi.paybackDescription}</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-blue-500 mb-2">{TEMPLATE_CONFIG.roi.growth}</div>
              <div className="text-gray-600">Growth Acceleration</div>
              <div className="text-sm text-gray-500 mt-2">{TEMPLATE_CONFIG.roi.growthDescription}</div>
            </div>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {TEMPLATE_CONFIG.content.roiDescription}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
            onClick={handleROIClick}
          >
            Get Your ROI Estimate
          </motion.button>
        </motion.div>

        {/* Success Metrics - Unified styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {TEMPLATE_CONFIG.successMetrics.map((metric, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-blue-500 mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CONSULTING BENEFITS - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding/careers components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify benefits and statistics
3. Customize ROI calculations
4. Update success metrics
5. Set contact page URLs
6. Adjust value propositions

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same hover effects and animations
- Unified button styling
- Matching typography and spacing
- Consistent background gradients

BENEFITS INCLUDED:
- Accelerated Growth
- Clear Direction
- Competitive Advantage
- Cost Optimization
- Innovation Framework
- Risk Mitigation

ROI FEATURES:
- ROI ratio display
- Payback period
- Growth acceleration metrics
- Success statistics

Perfect for showcasing consulting value proposition with unified design!
*/