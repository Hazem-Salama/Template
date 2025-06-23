'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ROIAnalysisFeatures() {
  const features = [
    {
      icon: '📊',
      title: 'Custom Financial Modeling',
      description: 'Detailed financial projections based on your specific business metrics and industry benchmarks.',
      details: [
        'Revenue growth projections',
        'Cost optimization analysis',
        'Cash flow impact modeling',
        'Scenario planning (best/worst/likely cases)'
      ]
    },
    {
      icon: '🎯',
      title: 'Strategic Opportunity Analysis',
      description: 'Identification and quantification of untapped growth opportunities in your market.',
      details: [
        'Market opportunity sizing',
        'Competitive gap analysis',
        'Digital transformation potential',
        'New revenue stream identification'
      ]
    },
    {
      icon: '📈',
      title: 'Implementation Roadmap',
      description: 'Step-by-step action plan with timelines, milestones, and resource requirements.',
      details: [
        'Prioritized action items',
        'Timeline and milestones',
        'Resource allocation plan',
        'Risk mitigation strategies'
      ]
    },
    {
      icon: '🔍',
      title: 'Competitive Intelligence',
      description: 'In-depth analysis of your competitive landscape and positioning opportunities.',
      details: [
        'Competitor benchmarking',
        'Market positioning analysis',
        'Differentiation opportunities',
        'Pricing strategy recommendations'
      ]
    },
    {
      icon: '💡',
      title: 'Strategic Recommendations',
      description: 'Actionable insights and recommendations tailored to your specific business context.',
      details: [
        'Growth strategy options',
        'Operational improvements',
        'Technology investments',
        'Partnership opportunities'
      ]
    },
    {
      icon: '📋',
      title: 'Executive Summary',
      description: 'Concise overview perfect for board presentations and stakeholder communications.',
      details: [
        'Key findings summary',
        'ROI projections overview',
        'Critical action items',
        'Investment recommendations'
      ]
    }
  ]

  const analysisComponents = [
    {
      title: 'Current State Assessment',
      description: 'Comprehensive evaluation of your current business performance',
      items: ['Financial health analysis', 'Operational efficiency review', 'Market position assessment', 'SWOT analysis']
    },
    {
      title: 'Future State Modeling',
      description: 'Detailed projections of potential outcomes with strategic interventions',
      items: ['Growth scenario modeling', 'ROI calculations', 'Break-even analysis', 'Sensitivity analysis']
    },
    {
      title: 'Implementation Planning',
      description: 'Practical roadmap for achieving projected results',
      items: ['Phase-by-phase breakdown', 'Resource requirements', 'Timeline optimization', 'Success metrics']
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
            What's Included in Your <span className="text-red-500">ROI Analysis</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our comprehensive analysis goes far beyond basic calculations. You'll receive a detailed, 
            actionable report that serves as your strategic roadmap for growth.
          </motion.p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start text-sm text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Analysis Process */}
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
            Three-Phase <span className="text-red-500">Analysis Approach</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analysisComponents.map((component, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl p-8 border border-red-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-black">{component.title}</h4>
                </div>
                <p className="text-gray-600 mb-6">{component.description}</p>
                <ul className="space-y-2">
                  {component.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sample Report Preview */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-black mb-6">
            Sample <span className="text-red-500">Report Preview</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            See what type of insights and recommendations you can expect in your personalized ROI analysis report.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-red-500 mb-2">20+ Pages</div>
              <div className="text-gray-600 text-sm">Comprehensive Analysis</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-red-500 mb-2">15+ Charts</div>
              <div className="text-gray-600 text-sm">Visual Data Presentation</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-red-500 mb-2">3 Scenarios</div>
              <div className="text-gray-600 text-sm">Best/Likely/Conservative</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-red-500 mb-2">50+ Insights</div>
              <div className="text-gray-600 text-sm">Actionable Recommendations</div>
            </div>
          </div>

          <motion.a
            href="/SampleReport"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            View Sample Report
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}