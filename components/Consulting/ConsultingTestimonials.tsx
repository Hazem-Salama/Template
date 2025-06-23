'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ConsultingTestimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CEO, TechVision Inc.',
      company: 'SaaS Platform',
      quote: 'The strategic framework they developed transformed our entire business approach. We went from struggling to scale to achieving 300% growth in 18 months.',
      result: '300% revenue growth',
      image: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Founder, GreenEco Solutions',
      company: 'Sustainability Consulting',
      quote: 'Their market analysis revealed opportunities we never knew existed. The digital transformation strategy they created became our roadmap to market leadership.',
      result: 'Market leader in 12 months',
      image: '👨‍💼'
    },
    {
      name: 'Emily Foster',
      title: 'VP Strategy, RetailMax',
      company: 'E-commerce Platform',
      quote: 'Working with them was like adding a world-class strategy team to our company. The insights were actionable, and the results exceeded our expectations.',
      result: '150% increase in market share',
      image: '👩‍💼'
    }
  ]

  const caseStudies = [
    {
      industry: 'FinTech Startup',
      challenge: 'Market entry strategy for competitive landscape',
      solution: 'Developed unique positioning and go-to-market strategy',
      result: 'Achieved $5M Series A funding within 6 months',
      metrics: ['400% user growth', '250% revenue increase', '$5M funding raised']
    },
    {
      industry: 'Healthcare Technology',
      challenge: 'Digital transformation and process optimization',
      solution: 'Created comprehensive digital strategy and implementation plan',
      result: 'Reduced operational costs by 45% while improving patient outcomes',
      metrics: ['45% cost reduction', '30% efficiency gain', '98% patient satisfaction']
    },
    {
      industry: 'Manufacturing Company',
      challenge: 'Supply chain optimization and growth strategy',
      solution: 'Redesigned supply chain and developed expansion framework',
      result: 'Expanded to 3 new markets with 60% cost savings',
      metrics: ['60% cost savings', '3 new markets', '180% profit increase']
    }
  ]

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
            Client <span className="text-red-500">Success Stories</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real results from real businesses. See how our strategic consulting 
            has transformed companies across various industries.
          </motion.p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-red-500">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <div className="font-semibold text-red-500">{testimonial.result}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-black mb-12"
          >
            Detailed <span className="text-red-500">Case Studies</span>
          </motion.h3>
          
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div>
                    <h4 className="font-bold text-red-500 mb-2">{study.industry}</h4>
                    <p className="text-sm text-gray-600">Industry</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">Challenge</h5>
                    <p className="text-sm text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">Solution</h5>
                    <p className="text-sm text-gray-700">{study.solution}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">Results</h5>
                    <p className="text-sm text-gray-700 mb-3">{study.result}</p>
                    <div className="space-y-1">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center text-xs text-red-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-black mb-6">
              Join 500+ Companies That Trust Our Strategic Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-gray-400 font-bold">STARTUP</div>
              <div className="text-gray-400 font-bold">SCALE-UP</div>
              <div className="text-gray-400 font-bold">ENTERPRISE</div>
              <div className="text-gray-400 font-bold">FORTUNE 500</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}