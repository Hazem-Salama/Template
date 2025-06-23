'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ConsultingBenefits() {
  const benefits = [
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
  ]

  return (
    <section className="py-24 bg-white">
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
            Why Choose Our <span className="text-red-500">Strategic Consulting</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our proven methodology delivers measurable results that transform businesses 
            and accelerate growth across all industries.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-red-500 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <div className="text-sm font-semibold text-red-500">
                {benefit.stats}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-red-50 to-gray-50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-black mb-6">
            Calculate Your Potential <span className="text-red-500">ROI</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-red-500 mb-2">15:1</div>
              <div className="text-gray-600">Average ROI Ratio</div>
              <div className="text-sm text-gray-500 mt-2">For every $1 invested</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-red-500 mb-2">3-6</div>
              <div className="text-gray-600">Months to ROI</div>
              <div className="text-sm text-gray-500 mt-2">Typical payback period</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-red-500 mb-2">200%+</div>
              <div className="text-gray-600">Growth Acceleration</div>
              <div className="text-sm text-gray-500 mt-2">Compared to no strategy</div>
            </div>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our strategic consulting has helped businesses achieve remarkable growth. 
            Your investment in strategy typically pays for itself within the first quarter.
          </p>
          <motion.a
            href="/DetailedROI?service=Consulting&intent=roi"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
          >
            Get Your ROI Estimate
          </motion.a>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
            <div className="text-gray-600">Strategies Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500 mb-2">$50M+</div>
            <div className="text-gray-600">Revenue Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500 mb-2">85%</div>
            <div className="text-gray-600">Long-term Partnerships</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}