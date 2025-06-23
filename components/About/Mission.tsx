'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Template values - customize for your agency
const values = [
  {
    icon: '🎨',
    title: 'Creative Excellence',
    description: 'We push creative boundaries to deliver innovative solutions that captivate and inspire your audience.'
  },
  {
    icon: '📊',
    title: 'Data-Driven Decisions',
    description: 'Every strategy is backed by research and analytics to ensure measurable results and continuous improvement.'
  },
  {
    icon: '🚀',
    title: 'Results-Focused',
    description: 'We measure success by your success, focusing on outcomes that drive real business growth and value.'
  },
  {
    icon: '🤝',
    title: 'Collaborative Partnership',
    description: 'We work as an extension of your team, fostering open communication and shared ownership of success.'
  },
  {
    icon: '⚡',
    title: 'Agile Methodology',
    description: 'We adapt quickly to changes and optimize continuously to deliver projects efficiently and effectively.'
  },
  {
    icon: '🌟',
    title: 'Quality Commitment',
    description: 'We maintain the highest standards in everything we do, from initial concept to final delivery and beyond.'
  }
]

export default function Mission() {
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
            Our <span className="text-blue-500">Mission & Values</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Driven by purpose and guided by principles that shape everything we do for our clients and community.
          </motion.p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-black mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              To empower businesses of all sizes with innovative digital solutions that drive growth, enhance customer experiences, 
              and create lasting competitive advantages. We believe that exceptional design and strategic thinking can transform 
              brands and unlock their full potential in the digital landscape.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-black mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}