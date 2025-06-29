'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's consulting process
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  content: {
    title: 'Our Proven Strategy Process',
    subtitle: 'A structured approach that ensures comprehensive analysis and actionable strategies tailored to your unique business needs.',
    timelineTitle: 'Typical Project Timeline'
  },
  processSteps: [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We start by understanding your business, challenges, and goals through comprehensive analysis.',
      duration: '2-3 days',
      deliverables: [
        'Business audit report',
        'Current state analysis',
        'Stakeholder interviews',
        'Initial findings summary'
      ]
    },
    {
      step: '02',
      title: 'Research & Analysis',
      description: 'Deep dive into market research, competitive analysis, and strategic opportunity identification.',
      duration: '3-5 days',
      deliverables: [
        'Market research report',
        'Competitive landscape analysis',
        'SWOT analysis',
        'Opportunity matrix'
      ]
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'Create comprehensive strategic recommendations tailored to your specific business context.',
      duration: '5-7 days',
      deliverables: [
        'Strategic framework',
        'Implementation roadmap',
        'Resource requirements',
        'Risk assessment'
      ]
    },
    {
      step: '04',
      title: 'Presentation & Refinement',
      description: 'Present findings and recommendations, gather feedback, and refine the strategy.',
      duration: '1-2 days',
      deliverables: [
        'Strategy presentation',
        'Q&A session',
        'Refined recommendations',
        'Final strategy document'
      ]
    },
    {
      step: '05',
      title: 'Implementation Support',
      description: 'Provide guidance and support during the initial implementation phase of your new strategy.',
      duration: 'Ongoing',
      deliverables: [
        'Implementation guidance',
        'Progress monitoring',
        'Adjustment recommendations',
        'Performance tracking'
      ]
    }
  ],
  timeline: {
    duration: '1-3',
    sessions: '3-5',
    strategies: '1'
  }
}

export default function ConsultingProcess() {
  return (
    <section id="consulting-process" className="py-24 bg-gray-50">
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
            Our Proven <span className="text-blue-500">Strategy Process</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>
        </motion.div>

        {/* Process Steps - Unified styling */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {TEMPLATE_CONFIG.processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                {/* Step Number */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {step.duration}
                  </div>
                </div>

                {/* Step Content */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="font-semibold text-black mb-3">Deliverables:</h4>
                  <ul className="space-y-2">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Progress Line */}
              {index < TEMPLATE_CONFIG.processSteps.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-px h-8 bg-gray-200"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Summary - Unified styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-black mb-4 text-center">
              {TEMPLATE_CONFIG.content.timelineTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">{TEMPLATE_CONFIG.timeline.duration}</div>
                <div className="text-gray-600">Weeks Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">{TEMPLATE_CONFIG.timeline.sessions}</div>
                <div className="text-gray-600">Strategy Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">{TEMPLATE_CONFIG.timeline.strategies}</div>
                <div className="text-gray-600">Comprehensive Strategy</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CONSULTING PROCESS - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding/careers components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify process steps to match your methodology
3. Customize deliverables for each step
4. Update timeline information
5. Adjust duration estimates
6. Add/remove process steps

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same hover effects and animations
- Unified button styling
- Matching typography and spacing
- Consistent background gradients

PROCESS STEPS INCLUDED:
1. Discovery & Assessment
2. Research & Analysis
3. Strategy Development
4. Presentation & Refinement
5. Implementation Support

FEATURES:
- Step-by-step process visualization
- Deliverables for each phase
- Timeline estimates
- Progress indicators
- Summary statistics

Perfect for showcasing your consulting methodology with unified design!
*/