'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function SampleReportImplementation() {
  const timeline = [
    {
      month: 'Month 1',
      milestones: [
        'Hire Customer Success Manager',
        'Implement marketing automation platform',
        'Launch customer health monitoring system',
        'Begin enterprise market research'
      ],
      kpis: ['Customer satisfaction baseline', 'Lead quality metrics', 'Churn rate tracking'],
      investment: '$15K'
    },
    {
      month: 'Month 2',
      milestones: [
        'Hire Enterprise Sales Representative',
        'Deploy automated onboarding sequence',
        'Implement lead scoring system',
        'Begin enterprise feature development'
      ],
      kpis: ['Sales pipeline metrics', 'Onboarding completion rates', 'Lead conversion rates'],
      investment: '$25K'
    },
    {
      month: 'Month 3',
      milestones: [
        'Launch customer success playbooks',
        'Deploy advanced analytics features',
        'Begin enterprise customer outreach',
        'Implement pricing optimization'
      ],
      kpis: ['Feature adoption rates', 'Enterprise pipeline growth', 'Average contract value'],
      investment: '$20K'
    },
    {
      month: 'Month 4-6',
      milestones: [
        'Complete enterprise feature suite',
        'Launch enterprise sales campaigns',
        'Implement quarterly business reviews',
        'Deploy mobile application'
      ],
      kpis: ['Enterprise customer acquisition', 'Retention improvement', 'Mobile adoption'],
      investment: '$40K'
    }
  ]

  const successMetrics = [
    {
      category: 'Revenue Metrics',
      metrics: [
        { name: 'Monthly Recurring Revenue', baseline: '$71K', target: '$125K', improvement: '+76%' },
        { name: 'Average Contract Value', baseline: '$2,850', target: '$4,200', improvement: '+47%' },
        { name: 'Annual Revenue Run Rate', baseline: '$850K', target: '$1.5M', improvement: '+76%' }
      ]
    },
    {
      category: 'Customer Metrics',
      metrics: [
        { name: 'Customer Churn Rate', baseline: '5.8%', target: '3.2%', improvement: '-45%' },
        { name: 'Customer Satisfaction Score', baseline: '4.1', target: '4.6', improvement: '+12%' },
        { name: 'Net Promoter Score', baseline: '32', target: '48', improvement: '+50%' }
      ]
    },
    {
      category: 'Operational Metrics',
      metrics: [
        { name: 'Customer Acquisition Cost', baseline: '$485', target: '$315', improvement: '-35%' },
        { name: 'Lead Conversion Rate', baseline: '2.8%', target: '4.2%', improvement: '+50%' },
        { name: 'Feature Adoption Rate', baseline: '45%', target: '72%', improvement: '+60%' }
      ]
    }
  ]

  const riskMitigation = [
    {
      risk: 'Enterprise Sales Challenges',
      probability: 'Medium',
      impact: 'High',
      mitigation: [
        'Hire experienced enterprise sales professional',
        'Develop comprehensive sales training program',
        'Create detailed enterprise sales playbook',
        'Establish partnership with sales consultancy'
      ],
      contingency: 'Pivot to channel partner strategy if direct sales underperform'
    },
    {
      risk: 'Product Development Delays',
      probability: 'Medium',
      impact: 'Medium',
      mitigation: [
        'Use experienced contractor developers',
        'Implement agile development methodology',
        'Prioritize features based on customer feedback',
        'Maintain buffer time in development schedule'
      ],
      contingency: 'Focus on most critical features first, defer nice-to-have items'
    },
    {
      risk: 'Market Competition Intensification',
      probability: 'High',
      impact: 'Medium',
      mitigation: [
        'Accelerate product differentiation efforts',
        'Focus on superior customer experience',
        'Build strong customer relationships',
        'Develop unique value propositions'
      ],
      contingency: 'Adjust pricing strategy and accelerate partnership development'
    },
    {
      risk: 'Economic Downturn Impact',
      probability: 'Low',
      impact: 'High',
      mitigation: [
        'Diversify customer base across industries',
        'Focus on ROI-positive features',
        'Maintain lean operational structure',
        'Build strong cash reserves'
      ],
      contingency: 'Shift focus to customer retention and cost optimization'
    }
  ]

  const governanceStructure = [
    {
      frequency: 'Weekly',
      meeting: 'Implementation Team Standup',
      participants: 'Project leads, key team members',
      focus: 'Progress updates, blockers, immediate priorities'
    },
    {
      frequency: 'Bi-weekly',
      meeting: 'Strategic Review Meeting',
      participants: 'Leadership team, department heads',
      focus: 'KPI review, strategic adjustments, resource allocation'
    },
    {
      frequency: 'Monthly',
      meeting: 'Board/Investor Update',
      participants: 'CEO, board members, key investors',
      focus: 'High-level progress, financial performance, strategic pivots'
    },
    {
      frequency: 'Quarterly',
      meeting: 'Comprehensive Strategy Review',
      participants: 'All stakeholders',
      focus: 'Complete strategy assessment, plan adjustments, next quarter planning'
    }
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
                5
              </div>
              <h2 className="text-3xl font-bold text-black">Implementation Roadmap</h2>
            </div>
            <div className="h-1 w-24 bg-red-500 rounded"></div>
          </motion.div>

          {/* Implementation Timeline */}
          <motion.div
            variants={fadeInUp}
            className="mb-12"
          >
            <h3 className="text-xl font-bold text-black mb-6">6-Month Implementation Timeline</h3>
            
            <div className="space-y-6">
              {timeline.map((period, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-black">{period.month}</h4>
                        <span className="text-red-500 font-medium">Investment: {period.investment}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-semibold text-black mb-3">Key Milestones</h5>
                      <ul className="space-y-2">
                        {period.milestones.map((milestone, milestoneIndex) => (
                          <li key={milestoneIndex} className="flex items-start text-sm text-gray-700">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-black mb-3">KPIs to Track</h5>
                      <ul className="space-y-2">
                        {period.kpis.map((kpi, kpiIndex) => (
                          <li key={kpiIndex} className="flex items-start text-sm text-gray-700">
                            <span className="text-blue-500 mr-2 mt-1">📊</span>
                            {kpi}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-black mb-2">Success Criteria</h5>
                      <p className="text-sm text-gray-700">
                        All milestones completed on time with KPIs showing positive trend toward targets.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Success Metrics Dashboard */}
          <motion.div
            variants={fadeInUp}
            className="bg-white border border-gray-200 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-xl font-bold text-black mb-6">Success Metrics Dashboard</h3>
            
            <div className="space-y-8">
              {successMetrics.map((category, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-black mb-4">{category.category}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-medium text-black mb-2">{metric.name}</h5>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Baseline:</span>
                          <span className="font-medium">{metric.baseline}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Target:</span>
                          <span className="font-medium">{metric.target}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-green-600 font-bold">{metric.improvement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Risk Management */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-xl font-bold text-black mb-6">Risk Management Framework</h3>
            
            <div className="space-y-6">
              {riskMitigation.map((risk, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-black mb-2">{risk.risk}</h4>
                      <div className="flex space-x-4 mb-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          risk.probability === 'Low' ? 'bg-green-100 text-green-700' :
                          risk.probability === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {risk.probability} Probability
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          risk.impact === 'Low' ? 'bg-green-100 text-green-700' :
                          risk.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {risk.impact} Impact
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-black mb-2">Mitigation Strategies</h5>
                      <ul className="space-y-1">
                        {risk.mitigation.map((strategy, strategyIndex) => (
                          <li key={strategyIndex} className="text-sm text-gray-700 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            {strategy}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-black mb-2">Contingency Plan</h5>
                      <p className="text-sm text-gray-700">{risk.contingency}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Governance Structure */}
          <motion.div
            variants={fadeInUp}
            className="bg-white border border-gray-200 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-black mb-6">Governance & Communication Structure</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {governanceStructure.map((governance, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-black">{governance.meeting}</h4>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {governance.frequency}
                    </span>
                  </div>
                  <div className="text-sm text-gray-700 mb-2">
                    <strong>Participants:</strong> {governance.participants}
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>Focus:</strong> {governance.focus}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-black mb-2">Communication Principles</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Transparent reporting of both successes and challenges</li>
                <li>• Data-driven decision making with clear metrics</li>
                <li>• Regular stakeholder updates with actionable insights</li>
                <li>• Escalation protocols for critical issues or decisions</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}