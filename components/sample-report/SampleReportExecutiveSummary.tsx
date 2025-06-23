'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function SampleReportExecutiveSummary() {
  const keyFindings = [
    {
      title: 'Market Opportunity',
      value: '$2.1M',
      description: 'Untapped revenue potential in enterprise segment'
    },
    {
      title: 'ROI Projection',
      value: '18:1',
      description: 'Return on strategic consulting investment'
    },
    {
      title: 'Growth Acceleration',
      value: '240%',
      description: 'Projected increase in annual growth rate'
    },
    {
      title: 'Implementation Time',
      value: '6 Months',
      description: 'Timeline to achieve initial ROI milestones'
    }
  ]

  const recommendations = [
    {
      priority: 'High',
      action: 'Enterprise Sales Channel Development',
      impact: '$1.2M Revenue',
      timeline: '3-4 months'
    },
    {
      priority: 'High',
      action: 'Product Feature Enhancement',
      impact: '35% Retention Boost',
      timeline: '2-3 months'
    },
    {
      priority: 'Medium',
      action: 'Marketing Automation Implementation',
      impact: '60% Lead Quality',
      timeline: '1-2 months'
    },
    {
      priority: 'Medium',
      action: 'Customer Success Program',
      impact: '25% Upsell Rate',
      timeline: '4-5 months'
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
                1
              </div>
              <h2 className="text-3xl font-bold text-black">Executive Summary</h2>
            </div>
            <div className="h-1 w-24 bg-red-500 rounded"></div>
          </motion.div>

          {/* Key Findings Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {keyFindings.map((finding, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">{finding.value}</div>
                <div className="font-semibold text-black mb-2">{finding.title}</div>
                <div className="text-sm text-gray-600">{finding.description}</div>
              </div>
            ))}
          </motion.div>

          {/* Executive Summary Content */}
          <motion.div
            variants={fadeInUp}
            className="bg-white border border-gray-200 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-xl font-bold text-black mb-6">Strategic Assessment Overview</h3>
            
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>TechFlow Solutions</strong> is well-positioned for accelerated growth in the competitive SaaS 
                marketplace. Our comprehensive analysis reveals significant untapped potential, particularly in the 
                enterprise segment, with strategic opportunities that could drive substantial revenue expansion.
              </p>
              
              <p>
                The company's current annual revenue of <strong>$850,000</strong> with a growth rate of 
                <strong>15%</strong> represents solid performance in the SMB market. However, our analysis identifies 
                a clear path to achieve <strong>$2.95M in annual revenue</strong> within 18 months through targeted 
                strategic initiatives.
              </p>
              
              <p>
                Key growth drivers include: (1) expansion into enterprise markets with enhanced feature sets, 
                (2) implementation of advanced marketing automation to improve lead quality and conversion rates, 
                (3) development of a comprehensive customer success program to increase retention and upsell opportunities, 
                and (4) strategic partnerships to accelerate market penetration.
              </p>
              
              <p>
                The projected <strong>18:1 ROI</strong> on strategic consulting investment is based on conservative 
                estimates and proven methodologies. Implementation risk is low due to TechFlow's strong technical 
                foundation and experienced leadership team.
              </p>
            </div>
          </motion.div>

          {/* Priority Recommendations */}
          <motion.div
            variants={fadeInUp}
            className="bg-white border border-gray-200 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-black mb-6">Priority Recommendations</h3>
            
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium mr-3 ${
                          rec.priority === 'High' 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {rec.priority} Priority
                        </span>
                        <h4 className="font-semibold text-black">{rec.action}</h4>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center lg:text-right space-y-1 sm:space-y-0 sm:space-x-6">
                      <div className="text-green-600 font-medium">{rec.impact}</div>
                      <div className="text-gray-600 text-sm">{rec.timeline}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Line */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-black mb-4">Bottom Line</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              TechFlow Solutions has the opportunity to <strong>triple its revenue</strong> within 18 months 
              by executing the strategic recommendations outlined in this report. The path to growth is clear, 
              achievable, and backed by data-driven insights from comparable market successes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}