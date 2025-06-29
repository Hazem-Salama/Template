'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's ROI methodology
const TEMPLATE_CONFIG = {
  content: {
    title: {
      main: 'How We Calculate',
      highlight: 'Your ROI'
    },
    subtitle: 'Our ROI calculations are based on proven methodologies and real client data from multiple successful strategy consulting projects.',
    componentsTitle: {
      main: 'Key',
      highlight: 'ROI Components'
    },
    accuracyTitle: {
      main: 'Proven',
      highlight: 'Accuracy'
    },
    accuracySubtitle: 'Our ROI projections have been validated against actual client results over multiple years, showing consistent accuracy in predicting strategic consulting outcomes.'
  },
  // Update these methodology steps based on your actual process
  methodologySteps: [
    {
      step: '01',
      title: 'Historical Data Analysis',
      description: 'We analyze data from multiple completed projects across various industries and business stages.',
      factors: [
        'Industry-specific growth patterns',
        'Business stage multipliers', 
        'Implementation success rates',
        'Market condition adjustments'
      ]
    },
    {
      step: '02', 
      title: 'Performance Benchmarking',
      description: 'Compare your current metrics against industry benchmarks and high-performing peers.',
      factors: [
        'Revenue growth comparisons',
        'Operational efficiency metrics',
        'Market penetration analysis',
        'Competitive positioning assessment'
      ]
    },
    {
      step: '03',
      title: 'Strategy Impact Modeling',
      description: 'Model the specific improvements our strategies typically deliver for businesses like yours.',
      factors: [
        'Strategic clarity benefits',
        'Process optimization gains',
        'Market opportunity capture',
        'Risk mitigation value'
      ]
    },
    {
      step: '04',
      title: 'Conservative Projections',
      description: 'Apply conservative estimates and risk adjustments to ensure realistic expectations.',
      factors: [
        'Implementation risk factors',
        'Market volatility adjustments',
        'Timeline consideration',
        'Resource availability impact'
      ]
    }
  ],
  // Update these ROI components based on your service offerings
  roiComponents: [
    {
      icon: '📈',
      title: 'Revenue Growth',
      description: 'Direct revenue increases from improved strategy execution and market positioning.',
      impact: '15-40% increase',
      color: 'text-green-500'
    },
    {
      icon: '⚡',
      title: 'Operational Efficiency',
      description: 'Cost savings from streamlined processes and optimized resource allocation.',
      impact: '20-35% reduction',
      color: 'text-blue-500'
    },
    {
      icon: '🎯',
      title: 'Strategic Focus',
      description: 'Improved decision-making speed and accuracy leading to better outcomes.',
      impact: '50% faster decisions',
      color: 'text-purple-500'
    },
    {
      icon: '🛡️',
      title: 'Risk Mitigation',
      description: 'Avoided costs from strategic mistakes and market miscalculations.',
      impact: '65% risk reduction',
      color: 'text-orange-500'
    }
  ],
  // Update these accuracy statistics based on your track record
  accuracyStats: [
    { number: '92%', label: 'Prediction Accuracy', sublabel: 'Within ±15% of actual results' },
    { number: '100+', label: 'Validated Projects', sublabel: 'Across 15+ industries' },
    { number: '2+ Years', label: 'Track Record', sublabel: 'Consistent methodology' }
  ]
}

export default function ROIMethodology() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {TEMPLATE_CONFIG.content.title.main}{' '}
            <span className="text-blue-500">{TEMPLATE_CONFIG.content.title.highlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>
        </motion.div>

        {/* Methodology Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEMPLATE_CONFIG.methodologySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-black">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-2">
                  {step.factors.map((factor, factorIndex) => (
                    <div key={factorIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {factor}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Components */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-black mb-12"
          >
            {TEMPLATE_CONFIG.content.componentsTitle.main}{' '}
            <span className="text-blue-500">{TEMPLATE_CONFIG.content.componentsTitle.highlight}</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEMPLATE_CONFIG.roiComponents.map((component, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{component.icon}</div>
                <h4 className="text-lg font-bold text-black mb-3">{component.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {component.description}
                </p>
                <div className={`font-bold ${component.color}`}>
                  {component.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Accuracy & Validation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-black mb-6">
            {TEMPLATE_CONFIG.content.accuracyTitle.main}{' '}
            <span className="text-blue-500">{TEMPLATE_CONFIG.content.accuracyTitle.highlight}</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {TEMPLATE_CONFIG.content.accuracySubtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEMPLATE_CONFIG.accuracyStats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED ROI METHODOLOGY - TEMPLATE READY

FEATURES:
✅ Unified styling with blue color scheme (blue-500/blue-600)
✅ Template-ready configuration in TEMPLATE_CONFIG
✅ Removed all branding and specific company references
✅ Consistent typography and spacing
✅ Professional, educational tone

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your specific methodology
2. Modify methodology steps based on your actual process
3. Adjust ROI components to match your service offerings
4. Update accuracy statistics with your track record
5. Customize titles and messaging
6. Add or remove methodology steps as needed

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600) instead of red
- Consistent card design and shadows
- Same typography and spacing
- Unified animation timing
- Matching section layouts

Perfect for explaining your ROI calculation methodology with credibility and transparency!
*/