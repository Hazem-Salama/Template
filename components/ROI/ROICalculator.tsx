'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface ROIData {
  currentRevenue: number
  industry: string
  businessStage: string
  currentGrowthRate: number
  consultingInvestment: number
}

export default function ROICalculator() {
  const [formData, setFormData] = useState<ROIData>({
    currentRevenue: 1000000,
    industry: 'technology',
    businessStage: 'growth',
    currentGrowthRate: 10,
    consultingInvestment: 4500
  })

  const [results, setResults] = useState({
    projectedGrowth: 0,
    additionalRevenue: 0,
    roiRatio: 0,
    paybackMonths: 0,
    totalROI: 0
  })

  // Industry multipliers based on our experience
  const industryMultipliers = {
    technology: 1.2,
    healthcare: 1.1,
    finance: 1.15,
    retail: 1.0,
    manufacturing: 0.95,
    consulting: 1.1,
    other: 1.0
  }

  // Business stage multipliers
  const stageMultipliers = {
    startup: 1.3,
    growth: 1.2,
    mature: 1.0,
    enterprise: 0.9
  }

  const calculateROI = () => {
    const industryMultiplier = industryMultipliers[formData.industry as keyof typeof industryMultipliers] || 1.0
    const stageMultiplier = stageMultipliers[formData.businessStage as keyof typeof stageMultipliers] || 1.0
    
    // Base improvement from strategy consulting (typically 15-25% additional growth)
    const baseImprovement = 0.20 // 20% additional growth rate
    const totalMultiplier = industryMultiplier * stageMultiplier
    
    const projectedGrowthRate = formData.currentGrowthRate + (baseImprovement * 100 * totalMultiplier)
    const newAnnualRevenue = formData.currentRevenue * (1 + projectedGrowthRate / 100)
    const currentProjectedRevenue = formData.currentRevenue * (1 + formData.currentGrowthRate / 100)
    const additionalRevenue = newAnnualRevenue - currentProjectedRevenue
    
    const roiRatio = additionalRevenue / formData.consultingInvestment
    const paybackMonths = (formData.consultingInvestment / (additionalRevenue / 12))
    const totalROI = ((additionalRevenue - formData.consultingInvestment) / formData.consultingInvestment) * 100

    setResults({
      projectedGrowth: projectedGrowthRate,
      additionalRevenue,
      roiRatio,
      paybackMonths,
      totalROI
    })
  }

  useEffect(() => {
    calculateROI()
  }, [formData])

  const handleInputChange = (field: keyof ROIData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <section id="roi-calculator" className="py-24 bg-white">
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
            ROI <span className="text-red-500">Calculator</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Enter your business details below to get a personalized ROI estimate 
            for our strategy consulting services.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-black mb-8">Your Business Details</h3>
            
            <div className="space-y-6">
              {/* Current Annual Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formData.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="1,000,000"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Business Stage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Stage
                </label>
                <select
                  value={formData.businessStage}
                  onChange={(e) => handleInputChange('businessStage', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="startup">Startup ( 2 years)</option>
                  <option value="growth">Growth Stage (2-7 years)</option>
                  <option value="mature">Mature (7+ years)</option>
                  <option value="enterprise">Enterprise (100+ employees)</option>
                </select>
              </div>

              {/* Current Growth Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Growth Rate (%)
                </label>
                <input
                  type="number"
                  value={formData.currentGrowthRate}
                  onChange={(e) => handleInputChange('currentGrowthRate', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="10"
                  min="0"
                  max="100"
                />
              </div>

              {/* Consulting Investment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Consulting Investment
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <select
                    value={formData.consultingInvestment}
                    onChange={(e) => handleInputChange('consultingInvestment', parseInt(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="1500">1,500 (Strategy Audit)</option>
                    <option value="4500">4,500 (Strategic Transformation)</option>
                    <option value="15000">15,000 (Enterprise Strategy)</option>
                    <option value="25000">25,000+ (Custom Solution)</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-black mb-8">Your ROI Projection</h3>
            
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">
                    {results.roiRatio.toFixed(1)}:1
                  </div>
                  <div className="text-gray-600 text-sm">ROI Ratio</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">
                    {results.totalROI.toFixed(0)}%
                  </div>
                  <div className="text-gray-600 text-sm">Total ROI</div>
                </div>
              </div>

              {/* Detailed Results */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Projected Growth Rate:</span>
                    <span className="font-bold text-black">{results.projectedGrowth.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Additional Annual Revenue:</span>
                    <span className="font-bold text-green-600">
                      ${results.additionalRevenue.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Payback Period:</span>
                    <span className="font-bold text-black">{results.paybackMonths.toFixed(1)} months</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Net Profit (Year 1):</span>
                    <span className="font-bold text-green-600">
                      ${(results.additionalRevenue - formData.consultingInvestment).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-gray-200">
                <motion.a
                  href="/contact?service=Consulting&intent=roi-estimate"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-red-500 text-white py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors text-center"
                >
                  Get Detailed ROI Analysis
                </motion.a>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Schedule a call to discuss your specific situation
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            * This calculator provides estimates based on industry benchmarks and our historical client data. 
            Actual results may vary based on implementation, market conditions, and specific business factors. 
            ROI projections are not guaranteed.
          </p>
        </motion.div>
      </div>
    </section>
  )
}