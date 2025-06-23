'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ROICTA() {
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
            Ready to Achieve
            <span className="block">Your ROI Potential?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed"
          >
            Don't let another quarter pass without strategic clarity. Start your journey 
            to measurable business growth with a proven ROI framework.
          </motion.p>

          {/* ROI Guarantee */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">ROI Guarantee</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-xl font-bold text-white mb-2">10:1 Minimum</div>
                <div className="text-red-100 text-sm">Or your money back</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white mb-2">6 Months</div>
                <div className="text-red-100 text-sm">Maximum payback period</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white mb-2">90 Days</div>
                <div className="text-red-100 text-sm">Follow-up support included</div>
              </div>
            </div>
          </motion.div>

          {/* Action Steps */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold text-white mb-2">1. Calculate ROI</h4>
              <p className="text-red-100 text-sm">Get your personalized estimate above</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-bold text-white mb-2">2. Book Strategy Call</h4>
              <p className="text-red-100 text-sm">Discuss your specific situation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold text-white mb-2">3. Start Growing</h4>
              <p className="text-red-100 text-sm">Implement your custom strategy</p>
            </div>
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.a
              href="/contact?service=Consulting&intent=roi-guarantee"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl text-lg"
            >
              Start Your ROI Journey
            </motion.a>
            <motion.a
              href="/book-call?service=Consulting&type=roi-analysis"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white text-lg"
            >
              Book ROI Analysis Call
            </motion.a>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            className="text-red-100 mb-8"
          >
            <p className="mb-4">
              Questions about ROI calculations or guarantees? 
              <a href="tel:+1-555-0123" className="text-white hover:underline font-medium ml-2">
                Call us: (555) 123-4567
              </a>
            </p>
            <p className="text-sm">
              Or email our ROI specialists at 
              <a href="mailto:roi@company.com" className="text-white hover:underline font-medium ml-1">
                roi@company.com
              </a>
            </p>
          </motion.div>

          {/* Special Offers */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Limited Time Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-white">Free ROI Audit</div>
                <div className="text-red-100">Worth $500 - This month only</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-white">Double ROI Guarantee</div>
                <div className="text-red-100">20:1 minimum for enterprise clients</div>
              </div>
            </div>
          </motion.div>

          {/* Success Statistics */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-red-100 text-sm">ROI Success Stories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">94%</div>
              <div className="text-red-100 text-sm">Exceed Projections</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">15:1</div>
              <div className="text-red-100 text-sm">Average ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">3.5 Months</div>
              <div className="text-red-100 text-sm">Average Payback</div>
            </div>
          </motion.div>

          {/* Final Motivational Message */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-red-100 text-lg italic mb-2">
              "The best investment you can make is in your business strategy."
            </p>
            <p className="text-white font-medium">
              Start calculating and achieving your ROI today.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}