'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ROIBenchmarks() {
  const industryBenchmarks = [
    {
      industry: 'Technology',
      avgROI: '18:1',
      growthIncrease: '95%',
      paybackTime: '2.8 months',
      topResults: '$2.8M additional revenue',
      characteristics: ['High scalability', 'Digital-first', 'Rapid iteration']
    },
    {
      industry: 'Healthcare',
      avgROI: '12:1',
      growthIncrease: '75%',
      paybackTime: '4.2 months',
      topResults: '$1.9M additional revenue',
      characteristics: ['Regulatory compliance', 'Patient-centric', 'Quality focus']
    },
    {
      industry: 'Financial Services',
      avgROI: '15:1',
      growthIncrease: '85%',
      paybackTime: '3.5 months',
      topResults: '$2.1M additional revenue',
      characteristics: ['Risk management', 'Regulatory oversight', 'Trust-based']
    },
    {
      industry: 'Retail & E-commerce',
      avgROI: '14:1',
      growthIncrease: '80%',
      paybackTime: '3.8 months',
      topResults: '$1.7M additional revenue',
      characteristics: ['Customer experience', 'Omnichannel', 'Data-driven']
    },
    {
      industry: 'Manufacturing',
      avgROI: '11:1',
      growthIncrease: '65%',
      paybackTime: '5.1 months',
      topResults: '$1.5M additional revenue',
      characteristics: ['Process optimization', 'Supply chain', 'Efficiency focus']
    },
    {
      industry: 'Professional Services',
      avgROI: '16:1',
      growthIncrease: '88%',
      paybackTime: '3.2 months',
      topResults: '$2.2M additional revenue',
      characteristics: ['Knowledge-based', 'Relationship-driven', 'Expertise value']
    }
  ]

  const businessStageData = [
    {
      stage: 'Startup',
      description: '< 2 years, building foundation',
      avgROI: '22:1',
      keyFocus: 'Market positioning & product-market fit',
      typicalGains: [
        '150% faster time to market',
        '300% improvement in customer acquisition',
        '200% increase in funding success rate'
      ]
    },
    {
      stage: 'Growth Stage',
      description: '2-7 years, scaling operations',
      avgROI: '18:1',
      keyFocus: 'Scalability & operational efficiency',
      typicalGains: [
        '120% revenue growth acceleration',
        '85% operational efficiency gain',
        '60% faster market expansion'
      ]
    },
    {
      stage: 'Mature',
      description: '7+ years, market established',
      avgROI: '12:1',
      keyFocus: 'Innovation & market expansion',
      typicalGains: [
        '75% revenue diversification',
        '90% process optimization',
        '40% new market penetration'
      ]
    },
    {
      stage: 'Enterprise',
      description: '100+ employees, complex operations',
      avgROI: '15:1',
      keyFocus: 'Digital transformation & optimization',
      typicalGains: [
        '65% digital efficiency gain',
        '50% cost reduction',
        '80% strategic alignment improvement'
      ]
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
            Industry <span className="text-red-500">ROI Benchmarks</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how businesses in different industries and stages typically benefit 
            from strategic consulting investments.
          </motion.p>
        </motion.div>

        {/* Industry Benchmarks */}
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
            <span className="text-red-500">Industry</span> Performance
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryBenchmarks.map((benchmark, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-black mb-4">{benchmark.industry}</h4>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average ROI:</span>
                    <span className="font-bold text-red-500">{benchmark.avgROI}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth Increase:</span>
                    <span className="font-bold text-green-600">{benchmark.growthIncrease}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payback Time:</span>
                    <span className="font-bold text-black">{benchmark.paybackTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Top Result:</span>
                    <span className="font-bold text-purple-600">{benchmark.topResults}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h5 className="font-semibold text-black mb-2">Key Characteristics:</h5>
                  <div className="space-y-1">
                    {benchmark.characteristics.map((char, charIndex) => (
                      <div key={charIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2 flex-shrink-0"></div>
                        {char}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Stage Analysis */}
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
            ROI by <span className="text-red-500">Business Stage</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessStageData.map((stage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl p-8 border border-red-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {stage.avgROI}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black">{stage.stage}</h4>
                    <p className="text-gray-600 text-sm">{stage.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-black mb-2">Strategic Focus:</h5>
                  <p className="text-gray-700">{stage.keyFocus}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-black mb-3">Typical Gains:</h5>
                  <div className="space-y-2">
                    {stage.typicalGains.map((gain, gainIndex) => (
                      <div key={gainIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                        {gain}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Comparison Chart */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-black mb-6">
            How Does Strategy Consulting <span className="text-red-500">Compare?</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            See how strategy consulting ROI compares to other business investments and marketing channels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-black mb-2">Strategy Consulting</h4>
              <div className="text-2xl font-bold text-red-500 mb-2">15:1</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-black mb-2">Digital Marketing</h4>
              <div className="text-2xl font-bold text-gray-400 mb-2">4:1</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-black mb-2">Technology Investment</h4>
              <div className="text-2xl font-bold text-gray-400 mb-2">6:1</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-black mb-2">Traditional Advertising</h4>
              <div className="text-2xl font-bold text-gray-400 mb-2">2:1</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
          </div>

          <motion.a
            href="#roi-calculator"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Calculate Your Specific ROI
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}