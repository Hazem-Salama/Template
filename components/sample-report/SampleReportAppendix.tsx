'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function SampleReportAppendix() {
  const dataSources = [
    { source: 'TechFlow Internal Analytics', type: 'Primary Data', coverage: 'Customer metrics, financial data, product usage' },
    { source: 'SaaS Industry Reports 2024', type: 'Industry Research', coverage: 'Market benchmarks, industry trends, competitive analysis' },
    { source: 'Gartner SaaS Market Analysis', type: 'Third-party Research', coverage: 'Market sizing, growth projections, technology trends' },
    { source: 'Customer Interview Data', type: 'Primary Research', coverage: 'User satisfaction, feature requests, pain points' },
    { source: 'Competitive Intelligence Tools', type: 'Market Data', coverage: 'Competitor pricing, features, market positioning' }
  ]

  const assumptions = [
    {
      category: 'Market Assumptions',
      items: [
        'SaaS market continues 15% annual growth rate',
        'Enterprise adoption of SaaS solutions accelerates',
        'No major economic recession in 18-month period',
        'Regulatory environment remains stable'
      ]
    },
    {
      category: 'Financial Assumptions',
      items: [
        'Customer acquisition cost improves with scale',
        'Churn rate improvement achievable through customer success',
        'Pricing power exists for premium features',
        'Cash flow positive within 12 months'
      ]
    },
    {
      category: 'Operational Assumptions',
      items: [
        'Ability to hire qualified enterprise sales talent',
        'Product development team can deliver on timeline',
        'Customer success initiatives drive retention',
        'Marketing automation improves lead quality'
      ]
    }
  ]

  const methodology = [
    {
      area: 'Financial Modeling',
      approach: 'Bottom-up revenue projection based on customer segments, pricing, and conversion rates',
      tools: 'Excel financial models, scenario analysis, Monte Carlo simulations'
    },
    {
      area: 'Market Analysis',
      approach: 'Total Addressable Market (TAM) analysis with bottom-up and top-down validation',
      tools: 'Industry reports, competitive research, customer survey data'
    },
    {
      area: 'Competitive Benchmarking',
      approach: 'Feature comparison, pricing analysis, and market positioning assessment',
      tools: 'Competitive intelligence platforms, public financial data, customer feedback'
    },
    {
      area: 'Risk Assessment',
      approach: 'Probability-weighted impact analysis with mitigation strategies',
      tools: 'Risk matrices, scenario planning, sensitivity analysis'
    }
  ]

  const glossary = [
    { term: 'ARR', definition: 'Annual Recurring Revenue - Predictable revenue that a company expects to receive annually' },
    { term: 'CAC', definition: 'Customer Acquisition Cost - Total cost to acquire a new customer including sales and marketing expenses' },
    { term: 'Churn Rate', definition: 'Percentage of customers who cancel their subscription in a given period' },
    { term: 'LTV', definition: 'Customer Lifetime Value - Total revenue expected from a customer over their entire relationship' },
    { term: 'MRR', definition: 'Monthly Recurring Revenue - Predictable revenue generated each month from subscriptions' },
    { term: 'NPS', definition: 'Net Promoter Score - Customer loyalty metric based on likelihood to recommend' },
    { term: 'SaaS', definition: 'Software as a Service - Cloud-based software delivery model' },
    { term: 'TAM', definition: 'Total Addressable Market - Total market demand for a product or service' }
  ]

  const nextSteps = [
    {
      timeframe: 'Immediate (Next 2 weeks)',
      actions: [
        'Review and approve strategic recommendations',
        'Secure budget allocation for Phase 1 initiatives',
        'Begin recruitment process for key hires',
        'Set up project management and tracking systems'
      ]
    },
    {
      timeframe: 'Short-term (Next 30 days)',
      actions: [
        'Finalize implementation team structure',
        'Conduct detailed planning for priority initiatives',
        'Establish baseline metrics and tracking systems',
        'Begin vendor selection for marketing automation'
      ]
    },
    {
      timeframe: 'Medium-term (Next 90 days)',
      actions: [
        'Complete Phase 1 hiring and onboarding',
        'Launch customer success and marketing initiatives',
        'Begin enterprise feature development',
        'Implement governance and reporting structure'
      ]
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                6
              </div>
              <h2 className="text-3xl font-bold text-black">Appendix</h2>
            </div>
            <div className="h-1 w-24 bg-red-500 rounded"></div>
          </motion.div>

          {/* Data Sources */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-gray-200 mb-12"
          >
            <h3 className="text-xl font-bold text-black mb-6">Data Sources & Research Methodology</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-black">Source</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {dataSources.map((source, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-black">{source.source}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {source.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700 text-sm">{source.coverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Key Assumptions */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-gray-200 mb-12"
          >
            <h3 className="text-xl font-bold text-black mb-6">Key Assumptions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {assumptions.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-black mb-4">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Methodology */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-gray-200 mb-12"
          >
            <h3 className="text-xl font-bold text-black mb-6">Analysis Methodology</h3>
            
            <div className="space-y-6">
              {methodology.map((method, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-6">
                  <h4 className="font-semibold text-black mb-3">{method.area}</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Approach:</h5>
                      <p className="text-sm text-gray-600">{method.approach}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Tools & Methods:</h5>
                      <p className="text-sm text-gray-600">{method.tools}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Glossary */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-gray-200 mb-12"
          >
            <h3 className="text-xl font-bold text-black mb-6">Glossary of Terms</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {glossary.map((term, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">{term.term}</h4>
                  <p className="text-sm text-gray-700">{term.definition}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 border border-red-200"
          >
            <h3 className="text-xl font-bold text-black mb-6">Recommended Next Steps</h3>
            
            <div className="space-y-8">
              {nextSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-black mb-4">{step.timeframe}</h4>
                  <ul className="space-y-2">
                    {step.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="text-sm text-gray-700 flex items-start">
                        <span className="text-red-500 mr-2 mt-1">→</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Report Footer */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 text-center"
          >
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-bold text-black mb-4">Report Prepared By</h3>
              <div className="text-gray-600 mb-4">
                <div className="font-semibold">Strategic Consulting Team</div>
                <div className="text-sm">Senior Strategy Consultant: Sarah Mitchell</div>
                <div className="text-sm">Financial Analyst: David Chen</div>
                <div className="text-sm">Market Research Specialist: Maria Rodriguez</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 mt-8">
                <div>
                  <strong>Report Date:</strong><br />
                  March 15, 2024
                </div>
                <div>
                  <strong>Analysis Period:</strong><br />
                  January 2024 - February 2024
                </div>
                <div>
                  <strong>Next Review:</strong><br />
                  June 15, 2024
                </div>
              </div>
              
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-black mb-2">Confidentiality Notice</h4>
                <p className="text-xs text-gray-700">
                  This report contains confidential and proprietary information. It is intended solely for the use of 
                  TechFlow Solutions management team and authorized stakeholders. Distribution or reproduction without 
                  written consent is strictly prohibited.
                </p>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>© 2025 Unlimited Creative Solutions. All rights reserved.</p>
                <p>For questions or clarifications, contact: Unlimitedadvv@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}