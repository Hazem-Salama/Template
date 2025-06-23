'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ConsultingProcess() {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We start by understanding your business, challenges, and goals through comprehensive analysis.',
      duration: '2-3 days',
      deliverables: [
        'Business audit report',
        'Current state analysis',
        'Stakeholder interviews',
        'Initial findings summary'
      ]
    },
    {
      step: '02',
      title: 'Research & Analysis',
      description: 'Deep dive into market research, competitive analysis, and strategic opportunity identification.',
      duration: '3-5 days',
      deliverables: [
        'Market research report',
        'Competitive landscape analysis',
        'SWOT analysis',
        'Opportunity matrix'
      ]
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'Create comprehensive strategic recommendations tailored to your specific business context.',
      duration: '5-7 days',
      deliverables: [
        'Strategic framework',
        'Implementation roadmap',
        'Resource requirements',
        'Risk assessment'
      ]
    },
    {
      step: '04',
      title: 'Presentation & Refinement',
      description: 'Present findings and recommendations, gather feedback, and refine the strategy.',
      duration: '1-2 days',
      deliverables: [
        'Strategy presentation',
        'Q&A session',
        'Refined recommendations',
        'Final strategy document'
      ]
    },
    {
      step: '05',
      title: 'Implementation Support',
      description: 'Provide guidance and support during the initial implementation phase of your new strategy.',
      duration: 'Ongoing',
      deliverables: [
        'Implementation guidance',
        'Progress monitoring',
        'Adjustment recommendations',
        'Performance tracking'
      ]
    }
  ]

  return (
    <section id="consulting-process" className="py-24 bg-gray-50">
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
            Our Proven <span className="text-red-500">Strategy Process</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A structured approach that ensures comprehensive analysis and actionable strategies 
            tailored to your unique business needs.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                {/* Step Number */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {step.duration}
                  </div>
                </div>

                {/* Step Content */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="font-semibold text-black mb-3">Deliverables:</h4>
                  <ul className="space-y-2">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {deliverable}
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
        </motion.div>

        {/* Timeline Summary */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-black mb-4">
              Typical Project Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">1-3</div>
                <div className="text-gray-600">Weeks Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">3-5</div>
                <div className="text-gray-600">Strategy Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">1</div>
                <div className="text-gray-600">Comprehensive Strategy</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}