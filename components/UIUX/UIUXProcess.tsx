'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function UIUXProcess() {
  const processSteps = [
    {
      step: '01',
      title: 'Discover & Understand',
      description: 'We begin by understanding your users, business goals, and market context through comprehensive research.',
      activities: [
        'Stakeholder interviews & goal alignment',
        'User research & persona development',
        'Competitive analysis & market research',
        'Current state audit & pain point identification'
      ],
      deliverable: 'Research insights & user personas',
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Define & Structure',
      description: 'Transform research insights into clear user flows and information architecture.',
      activities: [
        'User journey mapping & flow creation',
        'Information architecture planning',
        'Content strategy & hierarchy',
        'Feature prioritization & scoping'
      ],
      deliverable: 'User flows & site architecture',
      duration: '1-2 weeks',
      icon: '📐'
    },
    {
      step: '03',
      title: 'Design & Prototype',
      description: 'Create wireframes and interactive prototypes to test concepts and validate solutions.',
      activities: [
        'Low-fidelity wireframe creation',
        'Interactive prototype development',
        'Usability testing & iteration',
        'Design system foundation'
      ],
      deliverable: 'Wireframes & interactive prototypes',
      duration: '2-3 weeks',
      icon: '🎯'
    },
    {
      step: '04',
      title: 'Visual Design',
      description: 'Apply visual design principles to create beautiful, on-brand interfaces that engage users.',
      activities: [
        'Visual design exploration & concepts',
        'Component library creation',
        'Responsive design adaptation',
        'Accessibility compliance review'
      ],
      deliverable: 'High-fidelity UI designs',
      duration: '2-4 weeks',
      icon: '🎨'
    },
    {
      step: '05',
      title: 'Test & Optimize',
      description: 'Validate designs with real users and optimize based on feedback and performance data.',
      activities: [
        'Usability testing with target users',
        'A/B testing setup & analysis',
        'Performance optimization recommendations',
        'Design iteration & refinement'
      ],
      deliverable: 'Optimized designs & test results',
      duration: '1-2 weeks',
      icon: '🧪'
    },
    {
      step: '06',
      title: 'Deliver & Support',
      description: 'Hand off polished designs with detailed specifications and provide ongoing design support.',
      activities: [
        'Design specification documentation',
        'Developer handoff & collaboration',
        'Quality assurance during development',
        'Post-launch optimization support'
      ],
      deliverable: 'Complete design package & specs',
      duration: '1 week',
      icon: '🚀'
    }
  ]

  const processFeatures = [
    {
      icon: '👥',
      title: 'User-Centered Approach',
      description: 'Every design decision is backed by user research and validated with real users.'
    },
    {
      icon: '🔄',
      title: 'Iterative Design',
      description: 'We test and refine continuously, ensuring the best possible user experience.'
    },
    {
      icon: '📊',
      title: 'Data-Driven Decisions',
      description: 'Analytics and user feedback guide our design choices for optimal results.'
    },
    {
      icon: '🎯',
      title: 'Goal-Oriented Design',
      description: 'Every element serves a purpose and drives toward your business objectives.'
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
            Our UI/UX <span className="text-red-500">Process</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A systematic 6-step approach that ensures every design decision is user-centered, 
            strategically sound, and optimized for maximum business impact.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <motion.div
                variants={fadeInUp}
                className="flex-1 max-w-2xl"
              >
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-black text-red-500/20 mr-4">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-2">
                      {step.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📅 {step.duration}</span>
                      <span>📋 {step.deliverable}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex-1 max-w-md"
              >
                <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-3xl p-12 text-center shadow-lg">
                  <div className="text-8xl mb-6">{step.icon}</div>
                  <div className="text-2xl font-bold text-red-500 mb-2">Step {step.step}</div>
                  <div className="text-lg font-semibold text-black">{step.title}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Process Features */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Why Our UX Process Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our methodology combines proven UX principles with business strategy 
              to create designs that users love and businesses profit from.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-black mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline & Pricing Summary */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-black to-red-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your User Experience?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our comprehensive UX design process typically takes 8-14 weeks, depending on project scope, 
              ensuring every interaction delights your users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h4 className="text-xl font-semibold mb-2">Timeline</h4>
              <p className="text-gray-300">8-14 weeks for complete UX transformation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="text-xl font-semibold mb-2">Investment</h4>
              <p className="text-gray-300">Starting at $2,000 for individual services</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="text-xl font-semibold mb-2">Results</h4>
              <p className="text-gray-300">85% average conversion rate improvement</p>
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              onClick={() => window.location.href = '/Contact?service=ui-ux-design'}
            >
              Start Your UI/UX Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}