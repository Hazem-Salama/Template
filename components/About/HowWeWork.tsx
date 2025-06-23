'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, slideInLeft } from '@/lib/animations'

// Template process steps - customize for your workflow
const processSteps = [
  {
    step: '01',
    title: 'Understand Your Goals',
    description: 'We start by diving deep into your business objectives, target audience, and unique challenges to create a solid foundation.',
    details: [
      'In-depth discovery sessions',
      'Market and competitor analysis',
      'Target audience research',
      'Goal setting and KPI definition'
    ],
    icon: '🔍'
  },
  {
    step: '02',
    title: 'Strategize & Plan',
    description: 'Based on our research, we develop a comprehensive strategy tailored to your specific needs and objectives.',
    details: [
      'Custom strategy development',
      'Project roadmap creation',
      'Resource allocation planning',
      'Timeline and milestone setting'
    ],
    icon: '🎯'
  },
  {
    step: '03',
    title: 'Create & Execute',
    description: 'Our expert team brings the strategy to life with creative excellence and technical precision.',
    details: [
      'Creative concept development',
      'Design and development',
      'Content creation and optimization',
      'Quality assurance testing'
    ],
    icon: '⚡'
  },
  {
    step: '04',
    title: 'Launch & Deploy',
    description: 'We ensure a smooth launch with comprehensive testing and seamless implementation across all platforms.',
    details: [
      'Pre-launch testing and optimization',
      'Deployment and go-live support',
      'Performance monitoring setup',
      'Team training and handover'
    ],
    icon: '🚀'
  },
  {
    step: '05',
    title: 'Optimize & Scale',
    description: 'Post-launch, we continuously monitor, analyze, and optimize to ensure ongoing success and growth.',
    details: [
      'Performance tracking and analysis',
      'Continuous optimization',
      'Growth strategy implementation',
      'Long-term partnership support'
    ],
    icon: '📈'
  }
]

const serviceApproaches = [
  {
    title: 'Single Service Focus',
    description: 'Specialized expertise for specific needs with targeted solutions.',
    examples: [
      'Brand Identity Design',
      'Website Development',
      'SEO Optimization',
      'Social Media Campaign'
    ],
    icon: '🎯'
  },
  {
    title: 'Integrated Solutions',
    description: 'Comprehensive approach combining multiple services for maximum impact.',
    examples: [
      'Complete Brand Overhaul',
      'Digital Transformation',
      'Marketing Ecosystem',
      'Multi-platform Strategy'
    ],
    icon: '🔗'
  },
  {
    title: 'Long-term Partnership',
    description: 'Ongoing collaboration for sustained growth and continuous improvement.',
    examples: [
      'Monthly Retainer Services',
      'Strategic Consulting',
      'Performance Monitoring',
      'Continuous Optimization'
    ],
    icon: '🤝'
  }
]

export default function HowWeWork() {
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
            How We <span className="text-blue-500">Work</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Our proven methodology ensures successful project delivery through clear communication, strategic planning, and exceptional execution.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {serviceApproaches.map((approach, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{approach.icon}</div>
                <h4 className="font-bold text-black mb-3">{approach.title}</h4>
                <p className="text-gray-600 mb-4">{approach.description}</p>
                <div className="text-sm text-gray-500">
                  {approach.examples.map((example, i) => (
                    <span key={i}>
                      {example}{i < approach.examples.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <motion.div
                variants={index % 2 === 0 ? slideInLeft : fadeInUp}
                className="flex-1 max-w-2xl"
              >
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-black text-blue-500/20 mr-4">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-2">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Icon Card */}
              <motion.div
                variants={fadeInUp}
                className="flex-1 max-w-md"
              >
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-12 text-center shadow-lg">
                  <div className="text-8xl mb-6">{step.icon}</div>
                  <div className="text-2xl font-bold text-blue-500 mb-2">Step {step.step}</div>
                  <div className="text-lg font-semibold text-black">{step.title}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 bg-gradient-to-r from-black to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Why Our Process Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-4">🔧</div>
              <h4 className="text-xl font-semibold mb-2">Flexible</h4>
              <p className="text-gray-300">Adaptable to your unique needs and changing requirements</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📋</div>
              <h4 className="text-xl font-semibold mb-2">Structured</h4>
              <p className="text-gray-300">Clear phases and milestones ensure project success</p>
            </div>
            <div>
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-xl font-semibold mb-2">Collaborative</h4>
              <p className="text-gray-300">Regular communication and feedback throughout</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Results-Driven</h4>
              <p className="text-gray-300">Focused on achieving your business objectives</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}