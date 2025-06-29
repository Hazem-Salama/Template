'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your UI/UX design process
const TEMPLATE_CONFIG = {
  content: {
    title: {
      main: 'Our UI/UX',
      highlight: 'Process'
    },
    subtitle: 'A systematic 6-step approach that ensures every design decision is user-centered, strategically sound, and optimized for maximum business impact.',
    featuresTitle: 'Why Our UX Process Works',
    featuresSubtitle: 'Our methodology combines proven UX principles with business strategy to create designs that users love and businesses profit from.',
    ctaTitle: 'Ready to Transform Your User Experience?',
    ctaSubtitle: 'Our comprehensive UX design process typically takes 8-14 weeks, depending on project scope, ensuring every interaction delights your users.',
    ctaButton: 'Start Your UI/UX Project'
  },
  // Update these process steps based on your actual methodology
  processSteps: [
    {
      step: '01',
      title: 'Discover & Understand',
      description: 'We begin by understanding your users, business goals, and market context through comprehensive research.',
      activities: [
        'Stakeholder interviews & goal alignment',
        'User research & persona development',
        'Competitive analysis & market research',
        'Current state audit & pain point identification'
      ],
      deliverable: 'Research insights & user personas',
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Define & Structure',
      description: 'Transform research insights into clear user flows and information architecture.',
      activities: [
        'User journey mapping & flow creation',
        'Information architecture planning',
        'Content strategy & hierarchy',
        'Feature prioritization & scoping'
      ],
      deliverable: 'User flows & site architecture',
      duration: '1-2 weeks',
      icon: '📐'
    },
    {
      step: '03',
      title: 'Design & Prototype',
      description: 'Create wireframes and interactive prototypes to test concepts and validate solutions.',
      activities: [
        'Low-fidelity wireframe creation',
        'Interactive prototype development',
        'Usability testing & iteration',
        'Design system foundation'
      ],
      deliverable: 'Wireframes & interactive prototypes',
      duration: '2-3 weeks',
      icon: '🎯'
    },
    {
      step: '04',
      title: 'Visual Design',
      description: 'Apply visual design principles to create beautiful, on-brand interfaces that engage users.',
      activities: [
        'Visual design exploration & concepts',
        'Component library creation',
        'Responsive design adaptation',
        'Accessibility compliance review'
      ],
      deliverable: 'High-fidelity UI designs',
      duration: '2-4 weeks',
      icon: '🎨'
    },
    {
      step: '05',
      title: 'Test & Optimize',
      description: 'Validate designs with real users and optimize based on feedback and performance data.',
      activities: [
        'Usability testing with target users',
        'A/B testing setup & analysis',
        'Performance optimization recommendations',
        'Design iteration & refinement'
      ],
      deliverable: 'Optimized designs & test results',
      duration: '1-2 weeks',
      icon: '🧪'
    },
    {
      step: '06',
      title: 'Deliver & Support',
      description: 'Hand off polished designs with detailed specifications and provide ongoing design support.',
      activities: [
        'Design specification documentation',
        'Developer handoff & collaboration',
        'Quality assurance during development',
        'Post-launch optimization support'
      ],
      deliverable: 'Complete design package & specs',
      duration: '1 week',
      icon: '🚀'
    }
  ],
  // Update these features based on your methodology highlights
  processFeatures: [
    {
      icon: '👥',
      title: 'User-Centered Approach',
      description: 'Every design decision is backed by user research and validated with real users.'
    },
    {
      icon: '🔄',
      title: 'Iterative Design',
      description: 'We test and refine continuously, ensuring the best possible user experience.'
    },
    {
      icon: '📊',
      title: 'Data-Driven Decisions',
      description: 'Analytics and user feedback guide our design choices for optimal results.'
    },
    {
      icon: '🎯',
      title: 'Goal-Oriented Design',
      description: 'Every element serves a purpose and drives toward your business objectives.'
    }
  ],
  // Update these summary metrics based on your offerings
  summary: {
    timeline: '8-14 weeks',
    timelineDescription: 'for complete UX transformation',
    investment: '$2,000',
    investmentDescription: 'for individual services',
    results: '85%',
    resultsDescription: 'average conversion rate improvement'
  },
  // Update contact URL with your actual page
  contactUrl: '/contact?service=ui-ux-design'
}

export default function UIUXProcess() {
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

        {/* Process Steps */}
        <div className="space-y-16 mb-20">
          {TEMPLATE_CONFIG.processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <motion.div
                variants={fadeInUp}
                className="flex-1 max-w-2xl"
              >
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-black text-blue-500/20 mr-4">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-2">
                      {step.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📅 {step.duration}</span>
                      <span>📋 {step.deliverable}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex-1 max-w-md"
              >
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-12 text-center shadow-lg">
                  <div className="text-8xl mb-6">{step.icon}</div>
                  <div className="text-2xl font-bold text-blue-500 mb-2">Step {step.step}</div>
                  <div className="text-lg font-semibold text-black">{step.title}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Process Features */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              {TEMPLATE_CONFIG.content.featuresTitle}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {TEMPLATE_CONFIG.content.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEMPLATE_CONFIG.processFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-black mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline & Pricing Summary */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-black to-blue-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{TEMPLATE_CONFIG.content.ctaTitle}</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {TEMPLATE_CONFIG.content.ctaSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h4 className="text-xl font-semibold mb-2">Timeline</h4>
              <p className="text-gray-300">{TEMPLATE_CONFIG.summary.timeline} {TEMPLATE_CONFIG.summary.timelineDescription}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="text-xl font-semibold mb-2">Investment</h4>
              <p className="text-gray-300">{TEMPLATE_CONFIG.summary.investment} {TEMPLATE_CONFIG.summary.investmentDescription}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="text-xl font-semibold mb-2">Results</h4>
              <p className="text-gray-300">{TEMPLATE_CONFIG.summary.results} {TEMPLATE_CONFIG.summary.resultsDescription}</p>
            </div>
          </div>

          <div className="text-center">
            <motion.a
              href={TEMPLATE_CONFIG.contactUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
            >
              {TEMPLATE_CONFIG.content.ctaButton}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED UI/UX PROCESS - TEMPLATE READY

FEATURES:
✅ Unified styling with blue color scheme (blue-500/blue-600)
✅ Template-ready configuration in TEMPLATE_CONFIG
✅ Removed all branding and company-specific content
✅ Consistent typography and spacing
✅ Professional, educational tone

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your specific process
2. Modify process steps based on your actual methodology
3. Adjust timelines and deliverables to match your workflow
4. Update features to highlight your approach
5. Customize summary metrics with your offerings
6. Set contact URL to your actual page

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600) instead of red
- Consistent card design and shadows
- Same typography and spacing
- Unified animation timing
- Matching section layouts

Perfect for explaining your UI/UX design process with credibility and transparency!
*/