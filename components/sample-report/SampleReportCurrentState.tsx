'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function SampleReportCurrentState() {
  const financialMetrics = [
    { metric: 'Annual Revenue', current: '$850,000', benchmark: '$1.2M', status: 'below' },
    { metric: 'Monthly Growth Rate', current: '1.2%', benchmark: '2.5%', status: 'below' },
    { metric: 'Customer Acquisition Cost', current: '$485', benchmark: '$320', status: 'above' },
    { metric: 'Customer Lifetime Value', current: '$2,150', benchmark: '$3,200', status: 'below' },
    { metric: 'Monthly Churn Rate', current: '5.8%', benchmark: '3.2%', status: 'above' },
    { metric: 'Gross Margin', current: '78%', benchmark: '75%', status: 'above' }
  ]

  const operationalData = [
    { area: 'Team Size', current: '12 employees', assessment: 'Adequate for current scale' },
    { area: 'Product Development', current: '2-week sprints', assessment: 'Well-organized development process' },
    { area: 'Customer Support', current: 'Email & chat', assessment: 'Responsive but limited channels' },
    { area: 'Sales Process', current: 'Inbound focused', assessment: 'Strong inbound, weak outbound' },
    { area: 'Marketing Channels', current: 'Content & SEO', assessment: 'Limited channel diversification' },
    { area: 'Technology Stack', current: 'Modern & scalable', assessment: 'Strong technical foundation' }
  ]

  const swotAnalysis = {
    strengths: [
      'Strong product-market fit in SMB segment',
      'Experienced technical team',
      'High-quality product with good user satisfaction',
      'Efficient development processes',
      'Strong brand reputation in niche market'
    ],
    weaknesses: [
      'Limited enterprise-level features',
      'High customer acquisition cost',
      'Narrow marketing channel strategy',
      'Lack of dedicated sales team',
      'Limited customer success programs'
    ],
    opportunities: [
      'Underserved enterprise market segment',
      'Integration partnership possibilities',
      'Geographic expansion potential',
      'Product feature expansion opportunities',
      'Market consolidation through M&A'
    ],
    threats: [
      'Well-funded competitors entering market',
      'Economic downturn affecting SMB spending',
      'Rapid technology changes',
      'Increasing customer acquisition costs',
      'Potential data privacy regulations'
    ]
  }

  const competitivePosition = [
    { competitor: 'CompetitorA', marketShare: '25%', strength: 'Enterprise features', weakness: 'High cost' },
    { competitor: 'CompetitorB', marketShare: '18%', strength: 'Marketing reach', weakness: 'Product quality' },
    { competitor: 'TechFlow', marketShare: '8%', strength: 'Product quality', weakness: 'Market reach' },
    { competitor: 'CompetitorC', marketShare: '12%', strength: 'Pricing model', weakness: 'Limited features' }
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
                2
              </div>
              <h2 className="text-3xl font-bold text-black">Current State Analysis</h2>
            </div>
            <div className="h-1 w-24 bg-red-500 rounded"></div>
          </motion.div>

          {/* Financial Performance */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 mb-12 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-black mb-6">Financial Performance vs. Industry Benchmarks</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-black">Metric</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Current</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Industry Benchmark</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {financialMetrics.map((metric, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">{metric.metric}</td>
                      <td className="py-3 px-4 font-medium text-black">{metric.current}</td>
                      <td className="py-3 px-4 text-gray-600">{metric.benchmark}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          metric.status === 'above' 
                            ? metric.metric.includes('Cost') || metric.metric.includes('Churn')
                              ? 'bg-red-100 text-red-700'  // Above benchmark is bad for costs/churn
                              : 'bg-green-100 text-green-700' // Above benchmark is good for revenue/margin
                            : metric.metric.includes('Cost') || metric.metric.includes('Churn')
                              ? 'bg-green-100 text-green-700' // Below benchmark is good for costs/churn
                              : 'bg-red-100 text-red-700'     // Below benchmark is bad for revenue/growth
                        }`}>
                          {metric.status === 'above' 
                            ? metric.metric.includes('Cost') || metric.metric.includes('Churn')
                              ? 'Needs Improvement'
                              : 'Above Benchmark'
                            : metric.metric.includes('Cost') || metric.metric.includes('Churn')
                              ? 'Below Benchmark'
                              : 'Needs Improvement'
                          }
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Operational Assessment */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 mb-12 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-black mb-6">Operational Assessment</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {operationalData.map((item, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-black">{item.area}</h4>
                    <span className="text-sm text-gray-600">{item.current}</span>
                  </div>
                  <p className="text-sm text-gray-700">{item.assessment}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SWOT Analysis */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 mb-12 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-black mb-6">SWOT Analysis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Strengths */}
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-green-800 mb-4 flex items-center">
                  <span className="text-lg mr-2">💪</span>
                  Strengths
                </h4>
                <ul className="space-y-2">
                  {swotAnalysis.strengths.map((strength, index) => (
                    <li key={index} className="text-sm text-green-700 flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="font-bold text-red-800 mb-4 flex items-center">
                  <span className="text-lg mr-2">⚠️</span>
                  Weaknesses
                </h4>
                <ul className="space-y-2">
                  {swotAnalysis.weaknesses.map((weakness, index) => (
                    <li key={index} className="text-sm text-red-700 flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Opportunities */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-bold text-blue-800 mb-4 flex items-center">
                  <span className="text-lg mr-2">🚀</span>
                  Opportunities
                </h4>
                <ul className="space-y-2">
                  {swotAnalysis.opportunities.map((opportunity, index) => (
                    <li key={index} className="text-sm text-blue-700 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      {opportunity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Threats */}
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-bold text-orange-800 mb-4 flex items-center">
                  <span className="text-lg mr-2">⚡</span>
                  Threats
                </h4>
                <ul className="space-y-2">
                  {swotAnalysis.threats.map((threat, index) => (
                    <li key={index} className="text-sm text-orange-700 flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      {threat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Competitive Position */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-black mb-6">Competitive Landscape</h3>
            
            <div className="space-y-4">
              {competitivePosition.map((comp, index) => (
                <div key={index} className={`border rounded-lg p-4 ${
                  comp.competitor === 'TechFlow' ? 'border-red-300 bg-red-50' : 'border-gray-200'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <h4 className={`font-semibold mr-4 ${
                        comp.competitor === 'TechFlow' ? 'text-red-700' : 'text-black'
                      }`}>
                        {comp.competitor}
                      </h4>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                        {comp.marketShare} market share
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm">
                      <div>
                        <span className="text-green-600 font-medium">Strength:</span> {comp.strength}
                      </div>
                      <div>
                        <span className="text-red-600 font-medium">Weakness:</span> {comp.weakness}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-black mb-2">Key Insights:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• TechFlow holds 8% market share with significant room for growth</li>
                <li>• Product quality is a key differentiator but limited by market reach</li>
                <li>• Enterprise features gap presents both challenge and opportunity</li>
                <li>• Competitors have larger marketing budgets but lower product satisfaction</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}