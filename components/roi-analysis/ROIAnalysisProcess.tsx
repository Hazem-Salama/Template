'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ROIAnalysisProcess() {
  const processSteps = [
    {
      step: '01',
      title: 'Information Gathering',
      duration: 'Day 1',
      description: 'Our team reviews your submitted information and conducts additional research on your industry and competitive landscape.',
      activities: [
        'Form data analysis',
        'Industry research',
        'Competitive intelligence',
        'Market trend analysis',
        'Initial hypothesis formation'
      ],
      outcome: 'Complete understanding of your business context and challenges'
    },
    {
      step: '02',
      title: 'Data Analysis & Modeling',
      duration: 'Day 1-2',
      description: 'We build custom financial models and scenarios based on your specific business metrics and growth objectives.',
      activities: [
        'Financial model creation',
        'Scenario development',
        'ROI calculations',
        'Risk assessment',
        'Opportunity quantification'
      ],
      outcome: 'Detailed financial projections and ROI scenarios'
    },
    {
      step: '03',
      title: 'Strategic Recommendations',
      duration: 'Day 2',
      description: 'Our strategists develop actionable recommendations and implementation roadmaps tailored to your situation.',
      activities: [
        'Strategy formulation',
        'Roadmap development',
        'Resource planning',
        'Timeline optimization',
        'Success metrics definition'
      ],
      outcome: 'Comprehensive strategic action plan'
    },
    {
      step: '04',
      title: 'Report Creation',
      duration: 'Day 2',
      description: 'We compile all insights into a professional, easy-to-understand report with executive summary.',
      activities: [
        'Report writing',
        'Chart and graph creation',
        'Executive summary',
        'Quality review',
        'Final formatting'
      ],
      outcome: 'Professional 20+ page ROI analysis report'
    },
    {
      step: '05',
      title: 'Delivery & Follow-up',
      duration: 'Day 2-3',
      description: 'We deliver your report and offer a complimentary consultation to discuss findings and next steps.',
      activities: [
        'Report delivery',
        'Initial review call',
        'Q&A session',
        'Implementation guidance',
        'Resource recommendations'
      ],
      outcome: 'Clear understanding of recommendations and next steps'
    }
  ]

  const methodology = [
    {
      title: 'Industry Benchmarking',
      description: 'We compare your metrics against industry standards and top performers',
      icon: '📊',
      details: ['Performance gap analysis', 'Best practice identification', 'Improvement potential assessment']
    },
    {
      title: 'Financial Modeling',
      description: 'Custom models built specifically for your business and industry',
      icon: '📈',
      details: ['Revenue projection models', 'Cost optimization scenarios', 'Cash flow analysis']
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive evaluation of potential risks and mitigation strategies',
      icon: '🛡️',
      details: ['Market risk analysis', 'Implementation risk factors', 'Contingency planning']
    },
    {
      title: 'Opportunity Analysis',
      description: 'Identification and prioritization of growth opportunities',
      icon: '🎯',
      details: ['Market expansion potential', 'Product/service opportunities', 'Strategic partnerships']
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
            Our Analysis <span className="text-red-500">Process</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From submission to delivery, here's exactly how we create your comprehensive ROI analysis 
            within 48 hours.
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Step Info */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">{step.title}</h3>
                        <p className="text-red-500 font-medium">{step.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-gray-700 leading-relaxed mb-4">{step.description}</p>
                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="font-semibold text-black text-sm mb-2">Outcome:</div>
                      <div className="text-red-600 text-sm">{step.outcome}</div>
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="lg:col-span-5">
                    <h4 className="font-semibold text-black mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {step.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start text-sm text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Progress Line */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-px h-8 bg-gray-200"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology */}
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
            Our <span className="text-red-500">Methodology</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((method, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h4 className="text-lg font-bold text-black mb-3">{method.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                <ul className="space-y-1">
                  {method.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-xs text-gray-500">
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Summary */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-black mb-6">
            Guaranteed <span className="text-red-500">48-Hour Delivery</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We understand that time is critical in business. That's why we guarantee delivery 
            of your comprehensive ROI analysis within 48 hours of form submission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-red-500 mb-2">Day 1</div>
              <div className="text-gray-600 text-sm">Research & Analysis</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-red-500 mb-2">Day 2</div>
              <div className="text-gray-600 text-sm">Modeling & Recommendations</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-red-500 mb-2">Day 2</div>
              <div className="text-gray-600 text-sm">Report Creation</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-red-500 mb-2">Day 3</div>
              <div className="text-gray-600 text-sm">Delivery & Consultation</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mb-6">
            <h4 className="font-bold text-black mb-2">What if we need more time?</h4>
            <p className="text-gray-600 text-sm">
              In the rare case where additional research is needed, we'll notify you immediately 
              and provide a revised timeline. Quality is never compromised for speed.
            </p>
          </div>

          <motion.a
            href="#roi-analysis-form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Start Your Analysis Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}