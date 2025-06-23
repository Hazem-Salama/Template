'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function SampleReportRecommendations() {
  const recommendations = [
    {
      priority: 1,
      title: 'Enterprise Market Entry Strategy',
      category: 'Market Expansion',
      timeline: '3-6 months',
      investment: '$45,000',
      expectedReturn: '$650K',
      description: 'Develop enterprise-grade features and launch targeted enterprise sales initiative.',
      keyActions: [
        'Develop advanced security and compliance features',
        'Create enterprise pricing tiers with volume discounts',
        'Hire dedicated enterprise sales representative',
        'Build enterprise customer onboarding process',
        'Develop case studies and enterprise-focused marketing materials'
      ],
      successMetrics: [
        'Acquire 5 enterprise customers (>100 users each)',
        'Increase average contract value by 180%',
        'Achieve 95% enterprise customer satisfaction',
        'Generate $650K in enterprise revenue within 12 months'
      ],
      riskLevel: 'Medium'
    },
    {
      priority: 2,
      title: 'Customer Retention Optimization',
      category: 'Customer Success',
      timeline: '2-4 months',
      investment: '$25,000',
      expectedReturn: '$420K',
      description: 'Implement comprehensive customer success program to reduce churn and increase lifetime value.',
      keyActions: [
        'Launch proactive customer health monitoring system',
        'Develop automated onboarding sequence',
        'Create customer success playbooks and processes',
        'Implement quarterly business reviews for key accounts',
        'Build customer community and knowledge base'
      ],
      successMetrics: [
        'Reduce churn rate from 5.8% to 3.2%',
        'Increase customer satisfaction score to 4.5+',
        'Achieve 90% feature adoption rate',
        'Generate $420K in retained revenue annually'
      ],
      riskLevel: 'Low'
    },
    {
      priority: 3,
      title: 'Marketing Automation & Lead Generation',
      category: 'Marketing',
      timeline: '1-3 months',
      investment: '$20,000',
      expectedReturn: '$280K',
      description: 'Implement advanced marketing automation to improve lead quality and conversion rates.',
      keyActions: [
        'Deploy marketing automation platform (HubSpot/Marketo)',
        'Create lead scoring and qualification system',
        'Develop nurture campaigns for different buyer personas',
        'Implement advanced analytics and attribution tracking',
        'Launch account-based marketing for enterprise prospects'
      ],
      successMetrics: [
        'Increase qualified lead volume by 150%',
        'Improve lead-to-customer conversion by 40%',
        'Reduce customer acquisition cost by 35%',
        'Generate $280K in additional revenue from improved conversion'
      ],
      riskLevel: 'Low'
    },
    {
      priority: 4,
      title: 'Product Feature Enhancement',
      category: 'Product Development',
      timeline: '4-8 months',
      investment: '$35,000',
      expectedReturn: '$350K',
      description: 'Develop advanced features to increase product stickiness and enable premium pricing.',
      keyActions: [
        'Build advanced analytics and reporting dashboard',
        'Develop API integrations with popular business tools',
        'Create mobile application for key functionality',
        'Implement advanced user permissions and roles',
        'Add white-label and customization options'
      ],
      successMetrics: [
        'Increase feature utilization by 60%',
        'Enable 25% price increase for premium features',
        'Achieve 95% user satisfaction with new features',
        'Generate $350K in additional revenue from upsells'
      ],
      riskLevel: 'Medium'
    }
  ]

  const implementationPhases = [
    {
      phase: 'Phase 1: Foundation',
      duration: '0-3 months',
      focus: 'Quick wins and infrastructure',
      initiatives: [
        'Marketing automation implementation',
        'Customer success program launch',
        'Pricing optimization',
        'Initial market research for enterprise expansion'
      ],
      expectedImpact: '$120K revenue increase'
    },
    {
      phase: 'Phase 2: Growth',
      duration: '3-6 months',
      focus: 'Market expansion and product enhancement',
      initiatives: [
        'Enterprise feature development',
        'Enterprise sales team hiring',
        'Advanced product features launch',
        'Customer retention program optimization'
      ],
      expectedImpact: '$450K revenue increase'
    },
    {
      phase: 'Phase 3: Scale',
      duration: '6-12 months',
      focus: 'Scaling and optimization',
      initiatives: [
        'Enterprise customer acquisition',
        'Product feature refinement',
        'Advanced marketing campaigns',
        'International market exploration'
      ],
      expectedImpact: '$800K revenue increase'
    }
  ]

  const resourceRequirements = [
    { role: 'Enterprise Sales Rep', type: 'New Hire', timeline: 'Month 2', cost: '$8,000/month' },
    { role: 'Customer Success Manager', type: 'New Hire', timeline: 'Month 1', cost: '$6,500/month' },
    { role: 'Senior Developer', type: 'Contractor', timeline: 'Month 3', cost: '$12,000/month' },
    { role: 'Marketing Specialist', type: 'Existing + Tools', timeline: 'Month 1', cost: '$3,000/month' }
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
                4
              </div>
              <h2 className="text-3xl font-bold text-black">Strategic Recommendations</h2>
            </div>
            <div className="h-1 w-24 bg-red-500 rounded"></div>
          </motion.div>

          {/* Priority Recommendations */}
          <motion.div
            variants={fadeInUp}
            className="space-y-8 mb-12"
          >
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {rec.priority}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">{rec.title}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {rec.category}
                        </span>
                        <span className={`text-sm px-2 py-1 rounded ${
                          rec.riskLevel === 'Low' ? 'bg-green-100 text-green-700' :
                          rec.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {rec.riskLevel} Risk
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center lg:w-72">
                    <div>
                      <div className="text-lg font-bold text-red-500">{rec.investment}</div>
                      <div className="text-xs text-gray-600">Investment</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">{rec.expectedReturn}</div>
                      <div className="text-xs text-gray-600">Expected Return</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{rec.timeline}</div>
                      <div className="text-xs text-gray-600">Timeline</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{rec.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-black mb-3">Key Actions</h4>
                    <ul className="space-y-2">
                      {rec.keyActions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start text-sm text-gray-700">
                          <span className="text-red-500 mr-2 mt-1">•</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Success Metrics</h4>
                    <ul className="space-y-2">
                      {rec.successMetrics.map((metric, metricIndex) => (
                        <li key={metricIndex} className="flex items-start text-sm text-gray-700">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Implementation Phases */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-gray-200 mb-12"
          >
            <h3 className="text-xl font-bold text-black mb-6">Phased Implementation Approach</h3>
            
            <div className="space-y-6">
              {implementationPhases.map((phase, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-black">{phase.phase}</h4>
                      <p className="text-gray-600">{phase.focus}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{phase.duration}</div>
                      <div className="font-semibold text-green-600">{phase.expectedImpact}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {phase.initiatives.map((initiative, initIndex) => (
                      <div key={initIndex} className="flex items-center text-sm text-gray-700">
                        <span className="text-blue-500 mr-2">▶</span>
                        {initiative}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-green-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-black">Total Expected Impact (12 months)</span>
                <span className="text-2xl font-bold text-green-600">$1.37M Revenue Increase</span>
              </div>
            </div>
          </motion.div>

          {/* Resource Requirements */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-black mb-6">Resource Requirements</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-black">Role/Resource</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Start Timeline</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {resourceRequirements.map((resource, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-black">{resource.role}</td>
                      <td className="py-3 px-4 text-gray-700">{resource.type}</td>
                      <td className="py-3 px-4 text-gray-700">{resource.timeline}</td>
                      <td className="py-3 px-4 font-semibold text-red-500">{resource.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-black">$29.5K</div>
                <div className="text-sm text-gray-600">Monthly Resource Cost</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-black">4 Resources</div>
                <div className="text-sm text-gray-600">Total Additional Resources</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-black">12 Months</div>
                <div className="text-sm text-gray-600">Implementation Period</div>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-black mb-2">Resource Strategy Notes</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Prioritize enterprise sales rep hire to capture immediate market opportunity</li>
                <li>• Customer success manager critical for retention improvement initiatives</li>
                <li>• Consider contractor model for development to maintain flexibility</li>
                <li>• Leverage existing marketing team with additional automation tools</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}