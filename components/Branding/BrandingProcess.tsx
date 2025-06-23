'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function BrandingProcess() {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'We dive deep into your business, competitors, and target audience to understand your unique positioning.',
      activities: [
        'Brand audit and analysis',
        'Competitive landscape research',
        'Target audience personas',
        'Market positioning analysis'
      ],
      deliverable: 'Brand discovery document',
      duration: '1 week',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Define your brand strategy, messaging, and visual direction based on research insights.',
      activities: [
        'Brand positioning strategy',
        'Messaging framework',
        'Visual direction planning',
        'Brand personality definition'
      ],
      deliverable: 'Brand strategy document',
      duration: '1-2 weeks',
      icon: '🎯'
    },
    {
      step: '03',
      title: 'Design Exploration',
      description: 'Create multiple design concepts and directions for your consideration and feedback.',
      activities: [
        'Logo concept development',
        'Color palette exploration',
        'Typography selection',
        'Visual style testing'
      ],
      deliverable: '3-5 design concepts',
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '04',
      title: 'Refinement & Finalization',
      description: 'Refine the chosen direction based on your feedback until we achieve the perfect result.',
      activities: [
        'Design refinement iterations',
        'Color and typography finalization',
        'Application testing',
        'Quality assurance review'
      ],
      deliverable: 'Final brand assets',
      duration: '1-2 weeks',
      icon: '✨'
    },
    {
      step: '05',
      title: 'Guidelines & Implementation',
      description: 'Create comprehensive brand guidelines and support the rollout across all touchpoints.',
      activities: [
        'Brand guidelines creation',
        'Asset preparation',
        'Implementation support',
        'Team training (if needed)'
      ],
      deliverable: 'Complete brand package',
      duration: '1 week',
      icon: '📋'
    }
  ]

  const processFeatures = [
    {
      icon: '🤝',
      title: 'Collaborative Approach',
      description: 'We work closely with you throughout the process, ensuring your vision is realized.'
    },
    {
      icon: '🔄',
      title: 'Iterative Design',
      description: 'Multiple rounds of revisions ensure we get every detail perfect.'
    },
    {
      icon: '📊',
      title: 'Data-Driven Decisions',
      description: 'All design choices are backed by research and strategic thinking.'
    },
    {
      icon: '🚀',
      title: 'Implementation Support',
      description: 'We help you roll out your new brand across all channels and materials.'
    }
  ]

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
            Our Branding <span className="text-red-500">Process</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A proven 5-step process that ensures your brand is strategically sound, 
            visually compelling, and ready for success in the marketplace.
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
              Why Our Process Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures every brand we create is strategically sound 
              and designed for long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
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
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Brand Journey?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our comprehensive branding process typically takes 6-10 weeks from start to finish, 
              ensuring every detail is perfect before launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h4 className="text-xl font-semibold mb-2">Timeline</h4>
              <p className="text-gray-300">6-10 weeks for complete brand development</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="text-xl font-semibold mb-2">Investment</h4>
              <p className="text-gray-300">Starting at 1,200 EGP for individual services</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Results</h4>
              <p className="text-gray-300">Complete brand system ready for launch</p>
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              onClick={() => window.location.href = '/Contact?service=branding'}
            >
              Start Your Brand Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}