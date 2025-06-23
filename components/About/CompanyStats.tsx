'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Template stats - customize with your actual numbers
const stats = [
  {
    number: '250+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects across various industries'
  },
  {
    number: '150+',
    label: 'Happy Clients',
    description: 'Businesses that trust us with their digital presence'
  },
  {
    number: '98%',
    label: 'Client Retention',
    description: 'Long-term partnerships built on trust and results'
  },
  {
    number: '5+',
    label: 'Years Experience',
    description: 'Proven track record in digital marketing and design'
  },
  {
    number: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock assistance for all our clients'
  },
  {
    number: '20+',
    label: 'Team Members',
    description: 'Skilled professionals dedicated to your success'
  }
]

export default function CompanyStats() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
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
            Our <span className="text-blue-500">Track Record</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Numbers that speak to our commitment to excellence and client success.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <h4 className="text-xl font-bold text-black mb-3">
                {stat.label}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results and exceed your goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}