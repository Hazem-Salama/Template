'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Template CTA options - customize for your agency
const ctaOptions = [
  {
    icon: '📞',
    title: 'Strategy Call',
    description: 'Book a free 30-minute consultation to discuss your project and get expert advice.',
    action: 'Book Free Call',
    href: '/contact',
    variant: 'primary' as const
  },
  {
    icon: '💬',
    title: 'Quick Chat',
    description: 'Send us a message and we\'ll get back to you within 24 hours with next steps.',
    action: 'Send Message',
    href: '/contact',
    variant: 'secondary' as const
  },
  {
    icon: '📊',
    title: 'Get Quote',
    description: 'Receive a detailed proposal with timeline, deliverables, and transparent pricing.',
    action: 'Request Quote',
    href: '/contact',
    variant: 'outline' as const
  }
]

const guarantees = [
  {
    icon: '⚡',
    title: 'Quick Response',
    description: 'We respond to all inquiries within 24 hours'
  },
  {
    icon: '🎯',
    title: 'Custom Solutions',
    description: 'Tailored strategies for your unique needs'
  },
  {
    icon: '💯',
    title: 'No Pressure',
    description: 'Honest advice with no pushy sales tactics'
  },
  {
    icon: '🔒',
    title: 'Confidential',
    description: 'Your ideas and information stay secure'
  }
]

const nextSteps = [
  {
    step: '01',
    title: 'Get In Touch',
    description: 'Reach out through your preferred method - call, email, or contact form.'
  },
  {
    step: '02',
    title: 'Discovery Call',
    description: 'We discuss your goals, challenges, and vision for the project.'
  },
  {
    step: '03',
    title: 'Custom Proposal',
    description: 'Receive a detailed proposal with timeline and transparent pricing.'
  },
  {
    step: '04',
    title: 'Project Kickoff',
    description: 'Once approved, we begin bringing your vision to life.'
  }
]

// Template client logos - replace with your actual clients
const trustedLogos = [
  { logo: '/logo-placeholder-1.svg', name: 'Client One' },
  { logo: '/logo-placeholder-2.svg', name: 'Client Two' },
  { logo: '/logo-placeholder-3.svg', name: 'Client Three' },
  { logo: '/logo-placeholder-4.svg', name: 'Client Four' }
]

export default function ServicesCTA() {
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

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [180, 0, 180],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
            Ready to <span className="text-blue-500">Get Started?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Let's discuss your project and explore how we can help bring your vision to life with our expert team.
          </motion.p>
        </motion.div>

        {/* CTA Options */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {option.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {option.title}
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {option.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  option.variant === 'primary' 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : option.variant === 'secondary'
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'border-2 border-white text-white hover:bg-white hover:text-black'
                }`}
                onClick={() => window.location.href = option.href}
              >
                {option.action}
              </motion.button>
            </motion.div>
          ))}
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
              What to Expect
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl mb-3">{guarantee.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {guarantee.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Steps Process */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              How It Works
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our simple 4-step process to get your project started and delivered successfully.
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

          <motion.div
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Project Today
            </motion.button>
            <p className="text-gray-400 text-sm mt-4">
              Free consultation • No obligation • Quick response
            </p>
          </motion.div>
        </motion.div>

        {/* Trust Indicators with Logos */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <p className="text-gray-400 mb-8 text-sm uppercase tracking-wide">
            Trusted by Great Companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {trustedLogos.map((company, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  scale: 1.15,
                  y: -5
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut"
                }}
                className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer h-32"
              >
                <div className="w-32 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white/60 text-sm">Logo</span>
                </div>
                {/* Replace with actual logos:
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={240}
                  height={120}
                  className="object-contain max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}