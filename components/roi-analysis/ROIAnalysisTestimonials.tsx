'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ROIAnalysisTestimonials() {
  const testimonials = [
    {
      name: 'Jennifer Walsh',
      title: 'CEO, TechFlow Solutions',
      company: 'SaaS Platform',
      quote: 'The detailed ROI analysis was incredibly thorough and accurate. It showed us exactly where to focus our efforts and predicted our growth trajectory perfectly. Six months later, we\'re exactly where they said we\'d be.',
      results: [
        'Received 24-page comprehensive analysis',
        'Identified $2.3M revenue opportunity',
        'Implemented 3 key recommendations',
        'Achieved 180% growth in 8 months'
      ],
      accuracy: '98% prediction accuracy',
      image: '👩‍💼'
    },
    {
      name: 'Robert Chen',
      title: 'Founder, GreenTech Innovations',
      company: 'Clean Energy Startup',
      quote: 'I was skeptical about a free analysis, but the quality exceeded my expectations. The strategic recommendations were spot-on and the financial modeling helped us secure our Series A funding.',
      results: [
        'Detailed market analysis included',
        'Strategic roadmap provided',
        'Funding strategy recommendations',
        'Secured $3.5M Series A round'
      ],
      accuracy: '100% funding prediction accuracy',
      image: '👨‍💼'
    },
    {
      name: 'Maria Rodriguez',
      title: 'VP Operations, RetailPlus',
      company: 'E-commerce Company',
      quote: 'The analysis identified operational inefficiencies we hadn\'t seen and quantified the impact of fixing them. The implementation roadmap was detailed and actionable. We saved $400K in the first year alone.',
      results: [
        'Operational efficiency analysis',
        'Cost optimization opportunities',
        'Implementation timeline provided',
        '$400K annual cost savings achieved'
      ],
      accuracy: '95% cost saving prediction accuracy',
      image: '👩‍💼'
    }
  ]

  const analysisResults = [
    {
      metric: 'Analysis Requests',
      value: '2,500+',
      description: 'Completed analyses across industries'
    },
    {
      metric: 'Prediction Accuracy',
      value: '94%',
      description: 'Within ±10% of actual results'
    },
    {
      metric: 'Client Satisfaction',
      value: '98%',
      description: 'Would recommend to others'
    },
    {
      metric: 'Average ROI Achieved',
      value: '240%',
      description: 'From implementing recommendations'
    }
  ]

  const beforeAfter = [
    {
      company: 'TechStartup Inc.',
      industry: 'Software',
      before: {
        revenue: '$500K',
        growth: '5%',
        efficiency: 'Low'
      },
      after: {
        revenue: '$1.8M',
        growth: '45%',
        efficiency: 'Optimized'
      },
      timeframe: '12 months',
      implementation: '8 of 10 recommendations'
    },
    {
      company: 'HealthCare Partners',
      industry: 'Healthcare',
      before: {
        revenue: '$2.1M',
        growth: '8%',
        efficiency: 'Moderate'
      },
      after: {
        revenue: '$3.2M',
        growth: '28%',
        efficiency: 'High'
      },
      timeframe: '18 months',
      implementation: '7 of 9 recommendations'
    },
    {
      company: 'ManufacturingCorp',
      industry: 'Manufacturing',
      before: {
        revenue: '$5.5M',
        growth: '3%',
        efficiency: 'Low'
      },
      after: {
        revenue: '$7.8M',
        growth: '22%',
        efficiency: 'Optimized'
      },
      timeframe: '24 months',
      implementation: '9 of 12 recommendations'
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
            Analysis <span className="text-red-500">Success Stories</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how our detailed ROI analyses have helped businesses make informed decisions 
            and achieve remarkable growth results.
          </motion.p>
        </motion.div>

        {/* Detailed Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{testimonial.image}</div>
                      <div>
                        <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.title}</p>
                        <p className="text-red-500 font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="font-semibold text-green-700 mb-2">Prediction Accuracy:</div>
                      <div className="text-green-600 font-bold">{testimonial.accuracy}</div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-xl p-6">
                    <h5 className="font-bold text-black mb-4 text-center">Key Results</h5>
                    <ul className="space-y-3">
                      {testimonial.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start text-sm text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Before/After Comparisons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-black mb-12"
          >
            Before vs <span className="text-red-500">After Results</span>
          </motion.h3>
          
          <div className="space-y-8">
            {beforeAfter.map((comparison, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-black">{comparison.company}</h4>
                  <p className="text-gray-600">{comparison.industry} • {comparison.timeframe}</p>
                  <p className="text-sm text-red-500 font-medium">
                    Implemented {comparison.implementation}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Before */}
                  <div className="text-center">
                    <h5 className="font-bold text-gray-600 mb-4">BEFORE</h5>
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-lg font-bold text-gray-700">{comparison.before.revenue}</div>
                        <div className="text-sm text-gray-600">Annual Revenue</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-lg font-bold text-gray-700">{comparison.before.growth}</div>
                        <div className="text-sm text-gray-600">Growth Rate</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-lg font-bold text-gray-700">{comparison.before.efficiency}</div>
                        <div className="text-sm text-gray-600">Efficiency</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="text-4xl text-red-500">→</div>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <h5 className="font-bold text-green-600 mb-4">AFTER</h5>
                    <div className="space-y-3">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="text-lg font-bold text-green-700">{comparison.after.revenue}</div>
                        <div className="text-sm text-green-600">Annual Revenue</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="text-lg font-bold text-green-700">{comparison.after.growth}</div>
                        <div className="text-sm text-green-600">Growth Rate</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="text-lg font-bold text-green-700">{comparison.after.efficiency}</div>
                        <div className="text-sm text-green-600">Efficiency</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-black mb-6">
            Track Record of <span className="text-red-500">Success</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our detailed ROI analyses have consistently helped businesses achieve remarkable results 
            by providing clear, actionable strategic guidance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {analysisResults.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">{result.value}</div>
                <div className="font-semibold text-black mb-1">{result.metric}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h4 className="font-bold text-black mb-2">Ready to join our success stories?</h4>
            <p className="text-gray-600 text-sm mb-4">
              Get your free detailed ROI analysis and discover your business's growth potential.
            </p>
            <motion.a
              href="#roi-analysis-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Start Your Analysis
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}