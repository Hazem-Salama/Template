'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's success stories
const TEMPLATE_CONFIG = {
  content: {
    title: {
      main: 'Real ROI',
      highlight: 'Success Stories'
    },
    subtitle: 'See how our ROI predictions compared to actual results achieved by real clients across different industries and investment levels.',
    predictionTitle: {
      main: 'Prediction vs',
      highlight: 'Actual Results'
    },
    accuracyTitle: {
      main: 'ROI Prediction',
      highlight: 'Accuracy'
    },
    accuracySubtitle: 'Our track record shows consistently accurate ROI predictions, with most clients exceeding our conservative estimates.',
    cta: {
      text: 'Discuss Your ROI Potential',
      url: '/contact?service=consulting&intent=roi-discussion'
    }
  },
  // Update these testimonials with your actual client success stories
  // Note: Use anonymized or permission-granted client data only
  roiTestimonials: [
    {
      name: 'David Kim',
      title: 'CEO',
      company: 'SaaS Startup',
      investment: '$4,500',
      actualROI: '24:1',
      timeframe: '8 months',
      quote: 'The ROI calculator predicted 18:1, but we actually achieved 24:1. The strategic framework helped us pivot at exactly the right time and capture a significant market opportunity.',
      results: {
        revenue: '$1,080,000',
        growth: '340%',
        payback: '2.1 months'
      },
      image: '👨‍💼'
    },
    {
      name: 'Sarah Martinez',
      title: 'Founder',
      company: 'Healthcare Provider',
      investment: '$1,500',
      actualROI: '16:1',
      timeframe: '6 months',
      quote: 'Initially skeptical about the ROI projections, but they were spot-on. The strategic audit identified inefficiencies that saved us significantly and helped us expand to new locations.',
      results: {
        revenue: '$240,000',
        growth: '125%',
        payback: '3.8 months'
      },
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      title: 'VP Strategy',
      company: 'E-commerce Platform',
      investment: '$15,000',
      actualROI: '19:1',
      timeframe: '12 months',
      quote: 'Our enterprise strategy package delivered exactly what was promised. The digital transformation roadmap generated substantial additional revenue and positioned us as a market leader.',
      results: {
        revenue: '$2,850,000',
        growth: '180%',
        payback: '4.2 months'
      },
      image: '👨‍💼'
    }
  ],
  // Update these ROI stories with your actual case studies
  roiStories: [
    {
      industry: 'FinTech',
      challenge: 'Market entry strategy',
      prediction: '15:1 ROI in 12 months',
      actual: '22:1 ROI in 9 months',
      outcome: 'Exceeded projections by 47%',
      details: 'Strategic positioning helped secure Series A funding ahead of schedule'
    },
    {
      industry: 'Manufacturing',
      challenge: 'Digital transformation',
      prediction: '8:1 ROI in 18 months',
      actual: '11:1 ROI in 14 months',
      outcome: 'Exceeded projections by 38%',
      details: 'Process optimization reduced costs significantly'
    },
    {
      industry: 'Professional Services',
      challenge: 'Growth strategy',
      prediction: '12:1 ROI in 8 months',
      actual: '18:1 ROI in 6 months',
      outcome: 'Exceeded projections by 50%',
      details: 'New service lines generated substantial additional revenue'
    }
  ],
  // Update these accuracy statistics based on your track record
  accuracyStats: [
    { number: '94%', label: 'Achieved Predicted ROI', sublabel: 'Or better' },
    { number: '68%', label: 'Exceeded Predictions', sublabel: 'By 20%+ on average' },
    { number: '15%', label: 'Average Variance', sublabel: 'Prediction accuracy' },
    { number: '100+', label: 'Tracked Projects', sublabel: 'Data validation' }
  ]
}

export default function ROITestimonials() {
  return (
    <section className="py-24 bg-gray-50">
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
            {TEMPLATE_CONFIG.content.title.main}{' '}
            <span className="text-blue-500">{TEMPLATE_CONFIG.content.title.highlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>
        </motion.div>

        {/* Detailed Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="space-y-8">
            {TEMPLATE_CONFIG.roiTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{testimonial.image}</div>
                      <div>
                        <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.title}</p>
                        <p className="text-blue-500 font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="bg-gray-100 px-3 py-1 rounded-full">
                        Investment: <span className="font-medium">{testimonial.investment}</span>
                      </div>
                      <div className="bg-green-100 px-3 py-1 rounded-full text-green-700">
                        Timeframe: <span className="font-medium">{testimonial.timeframe}</span>
                      </div>
                    </div>
                  </div>

                  {/* Results Metrics */}
                  <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6">
                    <h5 className="font-bold text-black mb-4 text-center">Actual Results</h5>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-500 mb-1">{testimonial.actualROI}</div>
                        <div className="text-gray-600 text-sm">Actual ROI</div>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-sm text-gray-600">Additional Revenue</div>
                          <div className="font-bold text-green-600">{testimonial.results.revenue}</div>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-sm text-gray-600">Growth Increase</div>
                          <div className="font-bold text-blue-600">{testimonial.results.growth}</div>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-sm text-gray-600">Payback Period</div>
                          <div className="font-bold text-purple-600">{testimonial.results.payback}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prediction vs Actual Comparison */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-black mb-12"
          >
            {TEMPLATE_CONFIG.content.predictionTitle.main}{' '}
            <span className="text-blue-500">{TEMPLATE_CONFIG.content.predictionTitle.highlight}</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEMPLATE_CONFIG.roiStories.map((story, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h4 className="font-bold text-black mb-2">{story.industry}</h4>
                <p className="text-gray-600 text-sm mb-4">{story.challenge}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Predicted:</span>
                    <span className="font-medium text-black">{story.prediction}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Actual:</span>
                    <span className="font-bold text-green-600">{story.actual}</span>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3 mb-3">
                  <div className="text-center">
                    <div className="font-bold text-green-600">{story.outcome}</div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700">{story.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Accuracy Statistics */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-black mb-6">
            {TEMPLATE_CONFIG.content.accuracyTitle.main}{' '}
            <span className="text-blue-500">{TEMPLATE_CONFIG.content.accuracyTitle.highlight}</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {TEMPLATE_CONFIG.content.accuracySubtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TEMPLATE_CONFIG.accuracyStats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          <motion.a
            href={TEMPLATE_CONFIG.content.cta.url}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            {TEMPLATE_CONFIG.content.cta.text}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED ROI TESTIMONIALS - TEMPLATE READY

FEATURES:
✅ Unified styling with blue color scheme (blue-500/blue-600)
✅ Template-ready configuration in TEMPLATE_CONFIG
✅ Removed all specific branding and company references
✅ Anonymized client testimonials (update with real data)
✅ Consistent typography and spacing

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your actual client success stories
2. Replace testimonials with real, permission-granted client data
3. Modify ROI stories based on your case studies
4. Update accuracy statistics with your track record
5. Customize CTA URL and messaging
6. Add or remove testimonial cards as needed

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600) instead of red
- Consistent card design and shadows
- Same typography and spacing
- Unified animation timing
- Matching section layouts

IMPORTANT: Replace template testimonials with real client data (with permission) for authenticity!
*/