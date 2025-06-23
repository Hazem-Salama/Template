'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function CareersCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-red-500 via-red-600 to-red-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Join
            <span className="block">Our Team?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed"
          >
            Whether you're a seasoned professional or just starting your career, 
            we'd love to hear from you and explore how you can contribute to our mission.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold text-white mb-2">Growing Fast</h4>
              <p className="text-red-100 text-sm">5 new positions opening this quarter</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-white mb-2">Quick Process</h4>
              <p className="text-red-100 text-sm">2-week average hiring timeline</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="font-bold text-white mb-2">Great Culture</h4>
              <p className="text-red-100 text-sm">4.8/5 employee satisfaction rate</p>
            </div>
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#open-positions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl text-lg"
            >
              View Open Positions
            </motion.a>
            <motion.a
              href="/Contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white text-lg"
            >
              Submit General Application
            </motion.a>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            className="text-red-100 mb-8"
          >
            <p className="mb-4">
              Questions about working with us? 
              <a href="mailto:careers@unlimited.com" className="text-white hover:underline font-medium ml-2">
                careers@unlimited.com
              </a>
            </p>
            <p className="text-sm">
              Follow us on 
              <a href="https://linkedin.com/company/unlimited" className="text-white hover:underline font-medium ml-1">
                LinkedIn
              </a>
              {' '}for the latest updates and insights from our team.
            </p>
          </motion.div>

          {/* Application Process */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Our Hiring Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              <div className="text-center">
                <div className="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  1
                </div>
                <div className="font-semibold text-white mb-2">Application</div>
                <div className="text-red-100">Submit your application and portfolio</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  2
                </div>
                <div className="font-semibold text-white mb-2">Initial Screen</div>
                <div className="text-red-100">Brief call to discuss your background</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  3
                </div>
                <div className="font-semibold text-white mb-2">Skills Assessment</div>
                <div className="text-red-100">Practical project or technical interview</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  4
                </div>
                <div className="font-semibold text-white mb-2">Team Interview</div>
                <div className="text-red-100">Meet the team and discuss culture fit</div>
              </div>
            </div>
          </motion.div>

          {/* Equal Opportunity Statement */}
          <motion.div
            variants={fadeInUp}
            className="border-t border-white/20 pt-8"
          >
            <p className="text-red-100 text-sm max-w-2xl mx-auto">
              Unlimited is an equal opportunity employer committed to diversity and inclusion. 
              We welcome applications from all qualified candidates regardless of race, gender, 
              sexual orientation, religion, age, disability, or any other protected characteristic.
            </p>
          </motion.div>

          {/* Final Motivational Message */}
          <motion.div
            variants={fadeInUp}
            className="mt-8"
          >
            <p className="text-red-100 text-lg italic mb-2">
              "Great things happen when passionate people come together."
            </p>
            <p className="text-white font-medium">
              Be part of something unlimited.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}