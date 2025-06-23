'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ROIAnalysisDeliverables() {
  const deliverables = [
    {
      title: 'Executive Summary',
      pages: '2-3 pages',
      description: 'High-level overview perfect for stakeholder presentations',
      includes: [
        'Key findings and insights',
        'ROI projections overview',
        'Critical recommendations',
        'Next steps summary'
      ]
    },
    {
      title: 'Current State Analysis',
      pages: '4-5 pages', 
      description: 'Comprehensive assessment of your current business performance',
      includes: [
        'Financial performance review',
        'Operational efficiency analysis',
        'Market position assessment',
        'Competitive benchmark comparison'
      ]
    },
    {
      title: 'ROI Projections & Scenarios',
      pages: '6-8 pages',
      description: 'Detailed financial modeling with multiple scenarios',
      includes: [
        'Conservative ROI projections',
        'Likely case scenarios',
        'Optimistic growth models',
        'Break-even analysis and timelines'
      ]
    },
    {
      title: 'Strategic Recommendations',
      pages: '4-6 pages',
      description: 'Actionable strategies tailored to your business',
      includes: [
        'Growth opportunity prioritization',
        'Operational improvement recommendations',
        'Technology investment guidance',
        'Market expansion strategies'
      ]
    },
    {
      title: 'Implementation Roadmap',
      pages: '3-4 pages',
      description: 'Step-by-step action plan with timelines and milestones',
      includes: [
        'Phase-by-phase breakdown',
        'Resource requirements',
        'Timeline and milestones',
        'Success metrics and KPIs'
      ]
    },
    {
      title: 'Appendix & Data',
      pages: '2-3 pages',
      description: 'Supporting data, assumptions, and methodology',
      includes: [
        'Data sources and assumptions',
        'Calculation methodologies',
        'Industry benchmarks',
        'Additional resources'
      ]
    }
  ]

  const additionalDeliverables = [
    {
      icon: '📞',
      title: '30-Minute Consultation Call',
      description: 'Discuss findings and answer questions about your analysis',
      value: 'Worth $300'
    },
    {
      icon: '📧',
      title: 'Email Support',
      description: '30 days of email support for implementation questions',
      value: 'Worth $200'
    },
    {
      icon: '📊',
      title: 'Excel Financial Models',
      description: 'Editable spreadsheets with your custom projections',
      value: 'Worth $500'
    },
    {
      icon: '🎯',
      title: 'Strategic Planning Template',
      description: 'Framework for ongoing strategic planning and review',
      value: 'Worth $250'
    }
  ]

  const reportPreview = [
    {
      section: 'Cover & Table of Contents',
      description: 'Professional presentation with clear navigation'
    },
    {
      section: 'Executive Summary',
      description: 'Key insights at a glance for quick decision making'
    },
    {
      section: 'Company Overview',
      description: 'Your business context and current state summary'
    },
    {
      section: 'Market Analysis',
      description: 'Industry trends and competitive landscape review'
    },
    {
      section: 'Financial Projections',
      description: 'Detailed ROI calculations and scenario modeling'
    },
    {
      section: 'Strategic Recommendations',
      description: 'Prioritized action items with expected outcomes'
    },
    {
      section: 'Implementation Plan',
      description: 'Timeline, resources, and success metrics'
    },
    {
      section: 'Risk Assessment',
      description: 'Potential challenges and mitigation strategies'
    },
    {
      section: 'Next Steps',
      description: 'Immediate actions and long-term planning'
    },
    {
      section: 'Appendix',
      description: 'Supporting data, calculations, and references'
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
            What You'll <span className="text-red-500">Receive</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Your comprehensive ROI analysis includes everything you need to make informed strategic decisions 
            and start implementing growth initiatives immediately.
          </motion.p>
        </motion.div>

        {/* Main Report Breakdown */}
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
            Comprehensive <span className="text-red-500">20+ Page Report</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-black">{deliverable.title}</h4>
                  <span className="text-sm text-red-500 font-medium">{deliverable.pages}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{deliverable.description}</p>
                <div>
                  <h5 className="font-semibold text-black mb-2 text-sm">Includes:</h5>
                  <ul className="space-y-1">
                    {deliverable.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Deliverables */}
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
            <span className="text-red-500">Bonus</span> Deliverables
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalDeliverables.map((bonus, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-red-50 to-gray-50 rounded-xl p-6 text-center border border-red-100"
              >
                <div className="text-3xl mb-3">{bonus.icon}</div>
                <h4 className="font-bold text-black mb-2">{bonus.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{bonus.description}</p>
                <div className="text-red-500 font-semibold text-sm">{bonus.value}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            variants={fadeInUp}
            className="mt-8 text-center"
          >
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h4 className="font-bold text-black mb-2">Total Bonus Value: $1,250</h4>
              <p className="text-gray-600 text-sm">All included completely free with your ROI analysis</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Report Structure Preview */}
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
            Report <span className="text-red-500">Structure</span>
          </motion.h3>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reportPreview.map((section, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-lg p-4 flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-sm">{section.section}</h4>
                    <p className="text-gray-600 text-xs">{section.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-black mb-6">
            Exceptional <span className="text-red-500">Value</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Consulting firms typically charge $5,000-$15,000 for similar analysis. 
            We're providing this comprehensive service completely free.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-red-500 mb-2">$12,500</div>
              <div className="text-gray-600 text-sm">Typical Market Value</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-green-600 mb-2">$0</div>
              <div className="text-gray-600 text-sm">Your Investment</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">48 Hours</div>
              <div className="text-gray-600 text-sm">Delivery Time</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mb-6">
            <h4 className="font-bold text-black mb-2">Why do we offer this for free?</h4>
            <p className="text-gray-600 text-sm">
              We believe that when you see the quality of our analysis and the potential ROI 
              of working together, you'll want to explore our consulting services. This is our 
              way of demonstrating value upfront.
            </p>
          </div>

          <motion.a
            href="#roi-analysis-form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Get Your Free Analysis
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}