'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Template process steps - customize for your agency workflow
const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultation.',
    duration: '1-2 weeks',
    outcome: 'Project roadmap & strategy'
  },
  {
    step: '02',
    title: 'Proposal & Agreement',
    description: 'Based on our discovery, we create a detailed proposal with timeline, deliverables, and transparent pricing.',
    duration: '3-5 days',
    outcome: 'Signed agreement & kickoff'
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'Our team brings your vision to life with regular check-ins and iterative feedback throughout the process.',
    duration: '4-12 weeks',
    outcome: 'Completed deliverables'
  },
  {
    step: '04',
    title: 'Review & Refinement',
    description: 'We conduct thorough testing and refinements based on your feedback to ensure everything meets expectations.',
    duration: '1-2 weeks',
    outcome: 'Polished final product'
  },
  {
    step: '05',
    title: 'Launch & Support',
    description: 'We handle the launch process and provide ongoing support to ensure everything runs smoothly post-launch.',
    duration: '1 week+',
    outcome: 'Live project & documentation'
  }
]

export default function ServiceProcess() {
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
            Our <span className="text-blue-500">Process</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A proven methodology that ensures successful project delivery, clear communication, and exceptional results.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <motion.div
                  variants={fadeInUp}
                  className="flex-1 max-w-lg"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-blue-500 mr-4">
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-bold text-black">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 uppercase tracking-wide">
                          Duration
                        </span>
                        <span className="font-medium text-black">
                          {step.duration}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 uppercase tracking-wide">
                          Outcome
                        </span>
                        <span className="font-medium text-black">
                          {step.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Node */}
                <motion.div
                  variants={fadeInUp}
                  className="relative z-10 hidden lg:block"
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">
              Why Our Process Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold text-black mb-3">
                  Clear Communication
                </h4>
                <p className="text-gray-600">
                  Regular updates and feedback loops ensure everyone stays aligned throughout the project.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl mb-4">⏱️</div>
                <h4 className="text-xl font-semibold text-black mb-3">
                  On-Time Delivery
                </h4>
                <p className="text-gray-600">
                  Structured timeline and milestone approach ensures projects are delivered on schedule.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-xl font-semibold text-black mb-3">
                  Quality Assurance
                </h4>
                <p className="text-gray-600">
                  Multiple review stages and testing phases guarantee exceptional final results.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}