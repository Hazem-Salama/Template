'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function SampleReportHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Report Header */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8"
          >
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
                Strategic ROI Analysis Report
              </h1>
              <div className="text-gray-600">
                <div className="font-semibold text-lg text-red-500 mb-2">TechFlow Solutions</div>
                <div className="text-sm">SaaS Platform • Technology Industry</div>
                <div className="text-sm">Prepared: March 2024 • Confidential</div>
              </div>
            </div>

            {/* Report Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">24 Pages</div>
                <div className="text-xs text-gray-600">Comprehensive Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">18:1</div>
                <div className="text-xs text-gray-600">Projected ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">$2.1M</div>
                <div className="text-xs text-gray-600">Revenue Potential</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">6 Months</div>
                <div className="text-xs text-gray-600">Payback Period</div>
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            variants={fadeInUp}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800"
          >
            <div className="font-semibold mb-2">Sample Report Notice</div>
            <p>
              This is a sample report based on a real client case study with anonymized data. 
              All financial figures and company details have been modified to protect client confidentiality.
            </p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-left"
          >
            <h2 className="text-2xl font-bold text-black mb-6 text-center">Table of Contents</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-700">1. Executive Summary</span>
                  <span className="text-gray-500">Page 2</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-700">2. Current State Analysis</span>
                  <span className="text-gray-500">Page 4</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-700">3. Market Assessment</span>
                  <span className="text-gray-500">Page 8</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-700">4. ROI Projections</span>
                  <span className="text-gray-500">Page 12</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-700">5. Strategic Recommendations</span>
                  <span className="text-gray-500">Page 16</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-700">6. Implementation Roadmap</span>
                  <span className="text-gray-500">Page 20</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-700">7. Risk Assessment</span>
                  <span className="text-gray-500">Page 22</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-700">8. Appendix</span>
                  <span className="text-gray-500">Page 24</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}