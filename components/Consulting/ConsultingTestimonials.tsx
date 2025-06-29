'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's client testimonials and case studies
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  content: {
    title: 'Client Success Stories',
    subtitle: 'Real results from real businesses. See how our strategic consulting has transformed companies across various industries.',
    caseStudiesTitle: 'Detailed Case Studies',
    socialProofTitle: 'Join 500+ Companies That Trust Our Strategic Expertise'
  },
  testimonials: [
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
  ],
  caseStudies: [
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
  ],
  socialProof: {
    companies: ['STARTUP', 'SCALE-UP', 'ENTERPRISE', 'FORTUNE 500']
  }
}

export default function ConsultingTestimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Client <span className="text-blue-500">Success Stories</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>
        </motion.div>

        {/* Testimonials - Unified styling */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {TEMPLATE_CONFIG.testimonials.map((testimonial, index) => (
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
                  <p className="text-sm text-blue-500">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="font-semibold text-blue-500">{testimonial.result}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies - Unified styling */}
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
            Detailed <span className="text-blue-500">Case Studies</span>
          </motion.h3>
          
          <div className="space-y-8">
            {TEMPLATE_CONFIG.caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div>
                    <h4 className="font-bold text-blue-500 mb-2">{study.industry}</h4>
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
                        <div key={metricIndex} className="flex items-center text-xs text-blue-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
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

        {/* Social Proof - Unified styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">
              {TEMPLATE_CONFIG.content.socialProofTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {TEMPLATE_CONFIG.socialProof.companies.map((company, index) => (
                <div key={index} className="text-gray-400 font-bold text-lg">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CONSULTING TESTIMONIALS - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding/careers components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Replace testimonials with real client quotes
3. Customize case studies with actual projects
4. Update social proof companies
5. Modify success metrics
6. Adjust industry examples

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same grid layouts and spacing
- Unified typography scale
- Matching background gradients
- Consistent section structure

SECTIONS INCLUDED:
- Client testimonials (3 examples)
- Detailed case studies (3 examples)
- Social proof with company types

TESTIMONIAL FEATURES:
- Client photos (placeholder avatars)
- Company information
- Results highlights
- Quote formatting

CASE STUDY FEATURES:
- Industry classification
- Challenge/solution format
- Results with metrics
- Visual organization

Perfect for showcasing client success with unified design!
*/