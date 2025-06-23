'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ROIAnalysisCTA() {
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
            Get Your Free
            <span className="block">ROI Analysis Today</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed"
          >
            Don't make strategic decisions in the dark. Get a comprehensive, data-driven analysis 
            that shows exactly how to maximize your business growth potential.
          </motion.p>

          {/* Value Proposition */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">What You Get (Worth $12,500)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center text-red-100">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  20+ page comprehensive report
                </div>
                <div className="flex items-center text-red-100">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Custom financial projections
                </div>
                <div className="flex items-center text-red-100">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Strategic recommendations
                </div>
                <div className="flex items-center text-red-100">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Implementation roadmap
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-red-100">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  30-minute consultation call
                </div>
                <div className="flex items-center text-red-100">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Excel financial models
                </div>
                <div className="flex items-center text-red-100">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Strategic planning template
                </div>
                <div className="flex items-center text-red-100">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  30 days email support
                </div>
              </div>
            </div>
          </motion.div>

          {/* Urgency Elements */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⏰</div>
              <h4 className="font-bold text-white mb-2">Limited Availability</h4>
              <p className="text-red-100 text-sm">Only 10 analyses per month</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-white mb-2">Fast Delivery</h4>
              <p className="text-red-100 text-sm">Guaranteed 48-hour turnaround</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎁</div>
              <h4 className="font-bold text-white mb-2">Completely Free</h4>
              <p className="text-red-100 text-sm">No cost, no commitment</p>
            </div>
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <motion.a
              href="#roi-analysis-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-12 py-5 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl text-xl"
            >
              Get My Free ROI Analysis
            </motion.a>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            variants={fadeInUp}
            className="text-red-100 mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <div className="text-white mr-2">🔒</div>
                <span className="text-sm">100% Confidential</span>
              </div>
              <div className="flex items-center">
                <div className="text-white mr-2">📧</div>
                <span className="text-sm">No spam, ever</span>
              </div>
              <div className="flex items-center">
                <div className="text-white mr-2">⭐</div>
                <span className="text-sm">98% satisfaction rate</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            className="text-red-100 mb-8"
          >
            <p className="mb-4">
              Questions about the analysis process? 
              <a href="tel:+1-555-0123" className="text-white hover:underline font-medium ml-2">
                Call us: (555) 123-4567
              </a>
            </p>
            <p className="text-sm">
              Or email our analysis team at 
              <a href="mailto:analysis@company.com" className="text-white hover:underline font-medium ml-1">
                analysis@company.com
              </a>
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-white">2,500+</div>
              <div className="text-red-100 text-sm">Analyses Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">94%</div>
              <div className="text-red-100 text-sm">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">48 Hours</div>
              <div className="text-red-100 text-sm">Average Delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">$12.5K</div>
              <div className="text-red-100 text-sm">Value Provided Free</div>
            </div>
          </motion.div>

          {/* Final Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-red-100 text-lg italic mb-2">
              "The analysis that could transform your business is just a few clicks away."
            </p>
            <p className="text-white font-medium mb-6">
              Join 2,500+ businesses that have unlocked their growth potential.
            </p>
            
            <motion.a
              href="#roi-analysis-form"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30 backdrop-blur-sm"
            >
              Complete the Analysis Form Above ↑
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}