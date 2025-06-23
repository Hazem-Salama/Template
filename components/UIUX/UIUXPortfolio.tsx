'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function UIUXPortfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'FinFlow Mobile App User Interface Design',
      category: 'UI/UX Design',
      description: 'Complete UX overhaul of an Financial platform to improve conversion rates and user satisfaction.',
      image: '/public/Cover FinFlow.jpg',
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
      title: 'Fixtra Mobile App User Interface Design',
      category: 'User Interface',
      description: 'User-friendly mobile banking app design focused on security, simplicity, and trust.',
      image: '/public/Fixtra.jpg',
      tags: ['Mobile UX', 'UI', 'Security Design'],
      results: [
        '150% increase in user engagement',
        '200% increase in daily active users',
        '50% reduction in support tickets'
      ],
      challenge: 'Complex financial features needed to be accessible to non-technical users.',
      solution: 'Progressive disclosure, clear visual hierarchy, and intuitive navigation patterns.',
      industry: 'Automotive',
      userJourney: 'Reduced task completion time by 60%'
    }
  ]

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
            UI/UX <span className="text-red-500">Success Stories</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how our user-centered design approach has transformed digital experiences, 
            improved usability, and driven significant business results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">📱</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
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
                      className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full"
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
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
          className="mt-20 bg-gradient-to-r from-gray-50 to-red-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Proven UX Impact Across Industries
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our data-driven approach to UX design consistently delivers measurable improvements 
              in key business metrics across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">85%</div>
              <div className="text-gray-700 font-medium mb-1">Average Conversion</div>
              <div className="text-gray-600 text-sm">Rate Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">60%</div>
              <div className="text-gray-700 font-medium mb-1">Task Completion</div>
              <div className="text-gray-600 text-sm">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">95%</div>
              <div className="text-gray-700 font-medium mb-1">User Satisfaction</div>
              <div className="text-gray-600 text-sm">Score Average</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">45%</div>
              <div className="text-gray-700 font-medium mb-1">Support Tickets</div>
              <div className="text-gray-600 text-sm">Reduction Rate</div>
            </div>
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
          <p className="text-gray-600 mb-6">Want to see more UI/UX design projects?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-500 transition-colors shadow-lg"
            onClick={() => window.location.href = '/Portfolio?category=ui-ux-design'}
          >
            View Complete Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}