'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function SampleReportROIProjections() {
  const scenarios = [
    {
      name: 'Conservative',
      probability: '80%',
      revenue: {
        month6: '$1.1M',
        month12: '$1.8M',
        month18: '$2.4M'
      },
      roi: '12:1',
      payback: '8 months',
      color: 'blue'
    },
    {
      name: 'Likely',
      probability: '60%',
      revenue: {
        month6: '$1.3M',
        month12: '$2.1M',
        month18: '$2.9M'
      },
      roi: '18:1',
      payback: '6 months',
      color: 'green'
    },
    {
      name: 'Optimistic',
      probability: '25%',
      revenue: {
        month6: '$1.5M',
        month12: '$2.5M',
        month18: '$3.6M'
      },
      roi: '28:1',
      payback: '4 months',
      color: 'purple'
    }
  ]

  const investmentBreakdown = [
    { category: 'Strategic Consulting', amount: '$25,000', percentage: '25%', description: 'Initial analysis and strategy development' },
    { category: 'Product Development', amount: '$45,000', percentage: '45%', description: 'Enterprise features and platform enhancements' },
    { category: 'Sales & Marketing', amount: '$20,000', percentage: '20%', description: 'Team expansion and marketing automation' },
    { category: 'Operations & Support', amount: '$10,000', percentage: '10%', description: 'Customer success and support scaling' }
  ]

  const revenueDrivers = [
    {
      driver: 'Enterprise Market Entry',
      impact: '$650K',
      confidence: '85%',
      timeline: '6-9 months',
      description: 'New enterprise customers with higher contract values'
    },
    {
      driver: 'Customer Retention Improvement',
      impact: '$420K',
      confidence: '90%',
      timeline: '3-6 months',
      description: 'Reduced churn through enhanced customer success'
    },
    {
      driver: 'Pricing Optimization',
      impact: '$280K',
      confidence: '95%',
      timeline: '1-3 months',
      description: 'Strategic pricing adjustments for value-based model'
    },
    {
      driver: 'Upsell Program Launch',
      impact: '$350K',
      confidence: '75%',
      timeline: '4-8 months',
      description: 'Additional revenue from existing customer expansion'
    }
  ]

  const monthlyProjections = [
    { month: 'Current', revenue: 850, growth: 15 },
    { month: 'Month 3', revenue: 920, growth: 22 },
    { month: 'Month 6', revenue: 1100, growth: 35 },
    { month: 'Month 9', revenue: 1450, growth: 45 },
    { month: 'Month 12', revenue: 1850, growth: 52 },
    { month: 'Month 15', revenue: 2300, growth: 58 },
    { month: 'Month 18', revenue: 2900, growth: 62 }
  ]

  return (
    <section className="py-16 bg-white">
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
                3
              </div>
              <h2 className="text-3xl font-bold text-black">ROI Projections & Financial Modeling</h2>
            </div>
            <div className="h-1 w-24 bg-red-500 rounded"></div>
          </motion.div>

          {/* Scenario Analysis */}
          <motion.div
            variants={fadeInUp}
            className="bg-gray-50 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-xl font-bold text-black mb-6">Three-Scenario Financial Projections</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scenarios.map((scenario, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 border-2 ${
                  scenario.color === 'green' ? 'border-green-300' : 
                  scenario.color === 'blue' ? 'border-blue-300' : 'border-purple-300'
                }`}>
                  <div className="text-center mb-4">
                    <h4 className={`text-lg font-bold mb-2 ${
                      scenario.color === 'green' ? 'text-green-700' : 
                      scenario.color === 'blue' ? 'text-blue-700' : 'text-purple-700'
                    }`}>
                      {scenario.name} Scenario
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      scenario.color === 'green' ? 'bg-green-100 text-green-700' : 
                      scenario.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {scenario.probability} probability
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className={`text-2xl font-bold mb-1 ${
                        scenario.color === 'green' ? 'text-green-600' : 
                        scenario.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                      }`}>
                        {scenario.roi}
                      </div>
                      <div className="text-sm text-gray-600">Projected ROI</div>
                    </div>
                    
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">6 months:</span>
                        <span className="font-medium">{scenario.revenue.month6}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">12 months:</span>
                        <span className="font-medium">{scenario.revenue.month12}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-gray-600">18 months:</span>
                        <span className="font-medium">{scenario.revenue.month18}</span>
                      </div>
                      <div className="text-center pt-2 border-t">
                        <div className="text-xs text-gray-600">Payback Period</div>
                        <div className="font-semibold">{scenario.payback}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Investment Breakdown */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-black mb-6">Investment Requirements</h3>
              
              <div className="space-y-4">
                {investmentBreakdown.map((item, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-black">{item.category}</h4>
                      <div className="text-right">
                        <div className="font-bold text-red-500">{item.amount}</div>
                        <div className="text-sm text-gray-600">{item.percentage}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                ))}
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-black">Total Investment</span>
                    <span className="text-2xl font-bold text-red-500">$100,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-black mb-6">Revenue Growth Trajectory</h3>
              
              <div className="space-y-3">
                {monthlyProjections.map((projection, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{projection.month}</span>
                    <div className="text-right">
                      <div className="font-semibold text-black">${projection.revenue}K</div>
                      <div className="text-sm text-green-600">+{projection.growth}% growth</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-green-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-700">18-Month Target</div>
                  <div className="text-2xl font-bold text-green-600">$2.9M ARR</div>
                  <div className="text-sm text-green-600">241% growth from baseline</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Revenue Drivers */}
          <motion.div
            variants={fadeInUp}
            className="bg-white border border-gray-200 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-xl font-bold text-black mb-6">Key Revenue Drivers Analysis</h3>
            
            <div className="space-y-4">
              {revenueDrivers.map((driver, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <h4 className="font-semibold text-black mb-2">{driver.driver}</h4>
                      <p className="text-gray-700 text-sm">{driver.description}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 lg:w-80">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{driver.impact}</div>
                        <div className="text-xs text-gray-600">Revenue Impact</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{driver.confidence}</div>
                        <div className="text-xs text-gray-600">Confidence</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{driver.timeline}</div>
                        <div className="text-xs text-gray-600">Timeline</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-black">Total Revenue Impact (18 months)</span>
                <span className="text-xl font-bold text-green-600">$1.7M</span>
              </div>
            </div>
          </motion.div>

          {/* Risk Assessment */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-black mb-6">Financial Risk Assessment</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-black mb-3">Market Risk</h4>
                <div className="mb-2">
                  <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Medium Risk</span>
                </div>
                <p className="text-sm text-gray-700">
                  Economic downturn could affect enterprise spending, but SaaS resilience is historically strong.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-black mb-3">Execution Risk</h4>
                <div className="mb-2">
                  <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Low Risk</span>
                </div>
                <p className="text-sm text-gray-700">
                  Strong technical team and proven development processes minimize execution risk.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-black mb-3">Competitive Risk</h4>
                <div className="mb-2">
                  <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Medium Risk</span>
                </div>
                <p className="text-sm text-gray-700">
                  Well-funded competitors exist, but product differentiation provides sustainable advantage.
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-lg p-4">
              <h4 className="font-semibold text-black mb-2">Risk Mitigation</h4>
              <p className="text-sm text-gray-700">
                Conservative projections, phased implementation approach, and diversified revenue streams 
                minimize downside risk while preserving upside potential.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}