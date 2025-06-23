'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ROIMethodology() {
  const methodologySteps = [
    {
      step: '01',
      title: 'Historical Data Analysis',
      description: 'We analyze data from 500+ completed projects across various industries and business stages.',
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
  ]

  const roiComponents = [
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
  ]

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
            How We Calculate <span className="text-red-500">Your ROI</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our ROI calculations are based on proven methodologies and real client data 
            from over 500 successful strategy consulting projects.
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
            {methodologySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
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
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
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
            Key <span className="text-red-500">ROI Components</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiComponents.map((component, index) => (
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
            Proven <span className="text-red-500">Accuracy</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our ROI projections have been validated against actual client results over multiple years, 
            showing consistent accuracy in predicting strategic consulting outcomes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">92%</div>
              <div className="text-gray-600">Prediction Accuracy</div>
              <div className="text-sm text-gray-500 mt-1">Within ±15% of actual results</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-600">Validated Projects</div>
              <div className="text-sm text-gray-500 mt-1">Across 15+ industries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">3 Years</div>
              <div className="text-gray-600">Track Record</div>
              <div className="text-sm text-gray-500 mt-1">Consistent methodology</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}