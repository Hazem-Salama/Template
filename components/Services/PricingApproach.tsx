'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Template pricing models - customize for your agency
const pricingModels = [
  {
    icon: '💰',
    title: 'Project-Based',
    description: 'Perfect for defined scope projects with clear deliverables and timelines.',
    benefits: [
      'Fixed scope and budget',
      'Clear project timeline',
      'Dedicated project manager',
      'Post-launch support included'
    ],
    bestFor: 'Startups & Small Businesses',
    startingPrice: 'From $5,000'
  },
  {
    icon: '📅',
    title: 'Monthly Retainer',
    description: 'Ongoing partnership for businesses needing continuous design and development support.',
    benefits: [
      'Priority support & faster delivery',
      'Flexible scope adjustments',
      'Monthly strategy sessions',
      'Dedicated team access'
    ],
    bestFor: 'Growing Companies',
    startingPrice: 'From $3,000/month'
  },
  {
    icon: '🚀',
    title: 'Performance-Based',
    description: 'Results-driven pricing aligned with your business goals and measurable outcomes.',
    benefits: [
      'Risk-shared investment',
      'Results-focused approach',
      'Performance tracking',
      'Success-based scaling'
    ],
    bestFor: 'Established Businesses',
    startingPrice: 'Custom Quote'
  }
]

const pricingFactors = [
  {
    factor: 'Project Scope',
    description: 'Complexity and feature requirements',
    icon: '📏'
  },
  {
    factor: 'Timeline',
    description: 'Project urgency and delivery schedule',
    icon: '⏰'
  },
  {
    factor: 'Team Size',
    description: 'Number of specialists required',
    icon: '👥'
  },
  {
    factor: 'Customization',
    description: 'Level of custom development needed',
    icon: '🎨'
  },
  {
    factor: 'Support',
    description: 'Ongoing maintenance requirements',
    icon: '🔧'
  },
  {
    factor: 'Industry',
    description: 'Sector-specific requirements',
    icon: '🏢'
  }
]

export default function PricingApproach() {
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
            Our <span className="text-blue-500">Pricing</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transparent, fair pricing that scales with your business needs and delivers exceptional value.
          </motion.p>
        </motion.div>

        {/* Pricing Models */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {pricingModels.map((model, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {model.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-500 transition-colors duration-300">
                  {model.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {model.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">
                  What's Included
                </h4>
                <ul className="space-y-2">
                  {model.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="border-t border-gray-100 pt-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best For</span>
                    <span className="text-black font-medium">{model.bestFor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Starting At</span>
                    <span className="text-blue-500 font-bold text-lg">{model.startingPrice}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Factors */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              What Influences Pricing
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our pricing is based on several key factors to ensure you get the best value for your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingFactors.map((factor, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-3">{factor.icon}</div>
                <h4 className="text-lg font-bold text-black mb-2">
                  {factor.factor}
                </h4>
                <p className="text-gray-600 text-sm">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Promise */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-black to-blue-900 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            Our Pricing Promise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl mb-3">💯</div>
              <h4 className="text-xl font-semibold mb-2">
                Transparent
              </h4>
              <p className="text-gray-300">
                No hidden fees or surprise costs. What we quote is what you pay.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="text-xl font-semibold mb-2">
                Fair Value
              </h4>
              <p className="text-gray-300">
                Competitive pricing that reflects the quality and value we deliver.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">📋</div>
              <h4 className="text-xl font-semibold mb-2">
                Detailed Proposals
              </h4>
              <p className="text-gray-300">
                Clear breakdowns of all costs and deliverables before we start.
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Get Your Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}