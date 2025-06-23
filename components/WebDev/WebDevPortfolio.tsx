'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function WebDevPortfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Custom E-commerce',
      description: 'Full-featured online store with advanced inventory management and customer portal.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: [
        '300% increase in online sales',
        '50% faster checkout process',
        '99.9% uptime achievement'
      ],
      challenge: 'Legacy system couldn\'t handle growing traffic and needed modern e-commerce features.',
      solution: 'Built scalable microservices architecture with real-time inventory and payment processing.',
      industry: 'Retail',
      techStack: 'React, Node.js, MongoDB, AWS',
      performance: 'Page load time: 1.2s, 99.9% uptime'
    },
    {
      id: 2,
      title: 'SaaS Dashboard Platform',
      category: 'Web Application',
      description: 'Complex data analytics dashboard with real-time reporting and user management.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
      results: [
        '80% improvement in user productivity',
        '200% increase in data processing speed',
        '95% user satisfaction score'
      ],
      challenge: 'Need for real-time data visualization with complex user permissions and role management.',
      solution: 'Developed modular dashboard with real-time WebSocket connections and role-based access.',
      industry: 'Technology',
      techStack: 'Next.js, TypeScript, PostgreSQL, Redis',
      performance: 'Real-time updates, sub-second query responses'
    },
    {
      id: 3,
      title: 'Healthcare Portal',
      category: 'Healthcare Platform',
      description: 'Secure patient portal with appointment scheduling and medical record management.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Express', 'MySQL', 'HIPAA'],
      results: [
        '60% reduction in administrative work',
        '90% patient adoption rate',
        'HIPAA compliance achieved'
      ],
      challenge: 'Complex healthcare regulations and need for secure patient data management.',
      solution: 'HIPAA-compliant architecture with encrypted data storage and secure authentication.',
      industry: 'Healthcare',
      techStack: 'React, Express.js, MySQL, AWS',
      performance: 'Bank-level security, 2.1s load time'
    },
    {
      id: 4,
      title: 'Educational Platform',
      category: 'Learning Management',
      description: 'Interactive learning platform with video streaming and progress tracking.',
      image: '/api/placeholder/600/400',
      tags: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
      results: [
        '150% increase in course completion',
        '40% improvement in learning outcomes',
        '500+ concurrent users supported'
      ],
      challenge: 'Scalable video delivery and interactive learning experiences for diverse user base.',
      solution: 'CDN-optimized video streaming with adaptive learning algorithms and progress tracking.',
      industry: 'Education',
      techStack: 'Vue.js, Django, PostgreSQL, AWS',
      performance: 'HD video streaming, 99.5% availability'
    }
  ]

  return (
    <section id="webdev-portfolio" className="py-24 bg-white">
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
            Development <span className="text-red-500">Success Stories</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our portfolio of custom web applications, e-commerce platforms, 
            and digital solutions that have transformed businesses across industries.
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
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-green-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">💻</div>
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

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Technical Details */}
                <div className="mb-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-black mb-1">Tech Stack:</h5>
                      <p className="text-gray-600">{item.techStack}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-black mb-1">Performance:</h5>
                      <p className="text-gray-600">{item.performance}</p>
                    </div>
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

        {/* Technical Excellence Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 bg-gradient-to-r from-gray-50 to-red-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Technical Excellence Across All Projects
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every website and application we build meets the highest standards of performance, 
              security, and scalability using modern development practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">2.5s</div>
              <div className="text-gray-700 font-medium mb-1">Average Load Time</div>
              <div className="text-gray-600 text-sm">Optimized Performance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">99.9%</div>
              <div className="text-gray-700 font-medium mb-1">Uptime Guarantee</div>
              <div className="text-gray-600 text-sm">Reliable Infrastructure</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-gray-700 font-medium mb-1">Mobile Responsive</div>
              <div className="text-gray-600 text-sm">All Device Compatible</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">A+</div>
              <div className="text-gray-700 font-medium mb-1">Security Grade</div>
              <div className="text-gray-600 text-sm">Industry Standards</div>
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
          <p className="text-gray-600 mb-6">Want to see more web development projects?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-500 transition-colors shadow-lg"
            onClick={() => window.location.href = '/Portfolio?category=web-development'}
          >
            View Complete Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}