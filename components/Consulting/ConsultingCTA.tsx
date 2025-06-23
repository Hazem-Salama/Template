'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ConsultingCTA() {
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
            Ready to Transform Your
            <span className="block">Business Strategy?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed"
          >
            Don't let uncertainty hold your business back. Get the strategic clarity 
            you need to accelerate growth and outpace competitors.
          </motion.p>

          {/* Urgency Elements */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-2">Limited Spots</div>
                <div className="text-red-100 text-sm">Only 5 new clients per month</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">Quick Start</div>
                <div className="text-red-100 text-sm">Begin within 48 hours</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">Guaranteed ROI</div>
                <div className="text-red-100 text-sm">Or your money back</div>
              </div>
            </div>
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.a
              href="/book-call?service=Consulting&priority=urgent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl text-lg"
            >
              Start Your Strategy Today
            </motion.a>
            <motion.a
              href="/book-call?service=Consulting&type=discovery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white text-lg"
            >
              Book Discovery Call
            </motion.a>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            className="text-red-100"
          >
            <p className="mb-4">
              Questions about our consulting services? 
              <a href="tel:+1-555-0123" className="text-white hover:underline font-medium ml-2">
                Call us: (555) 123-4567
              </a>
            </p>
            <p className="text-sm">
              Or email us at 
              <a href="mailto:strategy@company.com" className="text-white hover:underline font-medium ml-1">
                strategy@company.com
              </a>
            </p>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-lg font-bold text-white">500+</div>
                <div className="text-red-100 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">98%</div>
                <div className="text-red-100 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">15:1</div>
                <div className="text-red-100 text-sm">Average ROI</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">85%</div>
                <div className="text-red-100 text-sm">Revenue Growth</div>
              </div>
            </div>
          </motion.div>

          {/* Final Motivational Message */}
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <p className="text-red-100 text-lg italic">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </p>
            <p className="text-white font-medium mt-2">
              Start building your strategic advantage today.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}