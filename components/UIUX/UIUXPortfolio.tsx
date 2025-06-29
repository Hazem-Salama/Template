'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your UI/UX portfolio
const TEMPLATE_CONFIG = {
  content: {
    title: {
      main: 'UI/UX',
      highlight: 'Success Stories'
    },
    subtitle: 'See how our user-centered design approach has transformed digital experiences, improved usability, and driven significant business results.',
    metricsTitle: 'Proven UX Impact Across Industries',
    metricsSubtitle: 'Our data-driven approach to UX design consistently delivers measurable improvements in key business metrics across diverse industries.',
    ctaText: 'Want to see more UI/UX design projects?',
    ctaButton: 'View Complete Portfolio'
  },
  // Update these portfolio items with your actual projects
  // Note: Replace with real project data and ensure you have permission to showcase
  portfolioItems: [
    {
      id: 1,
      title: 'FinTech Mobile App Redesign',
      category: 'UI/UX Design',
      description: 'Complete UX overhaul of a financial platform to improve conversion rates and user satisfaction.',
      tags: ['User Research', 'Conversion Optimization', 'Responsive Design'],
      results: [
        '85% increase in conversion rate',
        '40% reduction in cart abandonment',
        '65% improvement in user satisfaction'
      ],
      challenge: 'High cart abandonment rate and poor user experience leading to lost sales.',
      solution: 'Streamlined checkout process, improved navigation, and mobile-first responsive design.',
      industry: 'Financial Technology',
      userJourney: 'Simplified 3-step checkout vs previous 7-step process'
    },
    {
      id: 2,
      title: 'Healthcare App User Interface',
      category: 'User Interface',
      description: 'User-friendly mobile healthcare app design focused on accessibility, simplicity, and trust.',
      tags: ['Mobile UX', 'Accessibility', 'Healthcare Design'],
      results: [
        '150% increase in user engagement',
        '200% increase in daily active users',
        '50% reduction in support tickets'
      ],
      challenge: 'Complex healthcare features needed to be accessible to users of all technical levels.',
      solution: 'Progressive disclosure, clear visual hierarchy, and intuitive navigation patterns.',
      industry: 'Healthcare',
      userJourney: 'Reduced task completion time by 60%'
    }
  ],
  // Update these metrics with your actual performance data
  impactMetrics: [
    { number: '85%', label: 'Average Conversion', sublabel: 'Rate Improvement' },
    { number: '60%', label: 'Task Completion', sublabel: 'Time Reduction' },
    { number: '95%', label: 'User Satisfaction', sublabel: 'Score Average' },
    { number: '45%', label: 'Support Tickets', sublabel: 'Reduction Rate' }
  ],
  // Update URLs with your actual pages
  portfolioUrl: '/portfolio?category=ui-ux-design'
}

export default function UIUXPortfolio() {
  return (
    <section id="uiux-portfolio" className="py-24 bg-white">
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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {TEMPLATE_CONFIG.portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">📱</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                    {item.industry}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="mb-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">User Impact:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.userJourney}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="font-semibold text-black mb-3">Results Achieved:</h4>
                  <div className="space-y-2">
                    {item.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* UX Metrics Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              {TEMPLATE_CONFIG.content.metricsTitle}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {TEMPLATE_CONFIG.content.metricsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TEMPLATE_CONFIG.impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">{metric.number}</div>
                <div className="text-gray-700 font-medium mb-1">{metric.label}</div>
                <div className="text-gray-600 text-sm">{metric.sublabel}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">{TEMPLATE_CONFIG.content.ctaText}</p>
          <motion.a
            href={TEMPLATE_CONFIG.portfolioUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors shadow-lg"
          >
            {TEMPLATE_CONFIG.content.ctaButton}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED UI/UX PORTFOLIO - TEMPLATE READY

FEATURES:
✅ Unified styling with blue color scheme (blue-500/blue-600)
✅ Template-ready configuration in TEMPLATE_CONFIG
✅ Removed all branding and specific project references
✅ Placeholder project data (replace with real portfolio)
✅ Consistent typography and spacing

CUSTOMIZATION:
1. Replace TEMPLATE_CONFIG.portfolioItems with your actual projects
2. Update impact metrics with your performance data
3. Add real project images (remove placeholder)
4. Modify portfolio URL to match your site structure
5. Ensure you have permission to showcase client work
6. Update industry categories and case study details

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600) instead of red
- Consistent card design and shadows
- Same typography and spacing
- Unified animation timing
- Matching section layouts

IMPORTANT: Replace template portfolio items with real projects and ensure client permission for showcase!
*/