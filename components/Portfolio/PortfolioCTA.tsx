'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Template process steps - customize for your workflow
const nextSteps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We discuss your goals, requirements, and vision for the project'
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description: 'Develop a comprehensive plan and timeline for your project'
  },
  {
    step: '03',
    title: 'Design & Create',
    description: 'Bring your vision to life with expert design and development'
  },
  {
    step: '04',
    title: 'Launch & Optimize',
    description: 'Deploy your project and continuously optimize for best results'
  }
]

// Template guarantees - customize for your service offerings
const guarantees = [
  {
    icon: '💯',
    title: 'Custom Solutions',
    description: 'Tailored specifically to your business needs and goals'
  },
  {
    icon: '⏱️',
    title: 'On-Time Delivery',
    description: 'Projects delivered on schedule with clear milestones'
  },
  {
    icon: '🔄',
    title: 'Unlimited Revisions',
    description: 'We work until you\'re completely satisfied with the results'
  },
  {
    icon: '🎯',
    title: 'Results-Driven',
    description: 'Focus on measurable outcomes that grow your business'
  }
]

export default function PortfolioCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Ready to Start{' '}
            <span className="text-blue-500">Your Project?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Let's transform your ideas into exceptional digital experiences that drive real business results.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              How We Work Together
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our proven process ensures successful project delivery from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < nextSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-blue-500/30 transform translate-x-4"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Commitment to You
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{guarantee.icon}</div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {guarantee.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to take your business to the next level? Get in touch and let's discuss how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Call
              </motion.button>
            </div>

            <p className="text-gray-400 text-sm">
              Free consultation • No obligation • Quick response within 24 hours
            </p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-8 text-sm uppercase tracking-wide">
            Trusted by Leading Companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['TechStart', 'GrowthCo', 'InnovateLab', 'NextGen'].map((company, index) => (
              <div key={index} className="text-white font-bold text-lg">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}