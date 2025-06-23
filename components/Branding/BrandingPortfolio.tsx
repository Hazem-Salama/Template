'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function BrandingPortfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'TechStart Startup',
      category: 'Complete Brand Identity',
      description: 'Modern tech startup needing a bold, innovative brand that appeals to both investors and customers.',
      image: '/api/placeholder/600/400',
      tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
      results: [
        '300% increase in brand recognition',
        '150% boost in investor interest',
        '200% growth in customer inquiries'
      ],
      challenge: 'Create a brand that stands out in a crowded tech market while building trust with enterprise clients.',
      solution: 'Developed a clean, modern identity with tech-forward typography and a versatile color system.',
      industry: 'Technology'
    },
    {
      id: 2,
      title: 'Artisan Coffee Co.',
      category: 'Brand Refresh',
      description: 'Established coffee roaster modernizing their brand while maintaining their artisan heritage.',
      image: '/api/placeholder/600/400',
      tags: ['Brand Refresh', 'Packaging Design', 'Brand Strategy'],
      results: [
        '180% increase in retail sales',
        '250% growth in online orders',
        '40% expansion to new markets'
      ],
      challenge: 'Modernize the brand without losing the artisan authenticity that loyal customers loved.',
      solution: 'Evolved the rustic aesthetic with refined typography and premium packaging design.',
      industry: 'Food & Beverage'
    },
    {
      id: 3,
      title: 'GreenLeaf Wellness',
      category: 'Healthcare Branding',
      description: 'Wellness clinic creating a calming, trustworthy brand for holistic healthcare services.',
      image: '/api/placeholder/600/400',
      tags: ['Logo Design', 'Brand Guidelines', 'Collateral Design'],
      results: [
        '200% increase in patient bookings',
        '300% growth in brand recognition',
        '150% boost in referrals'
      ],
      challenge: 'Build trust and credibility in the competitive wellness industry.',
      solution: 'Created a calming, nature-inspired identity with professional yet approachable design.',
      industry: 'Healthcare'
    },
    {
      id: 4,
      title: 'Urban Real Estate',
      category: 'Luxury Branding',
      description: 'High-end real estate firm needing a sophisticated brand to attract premium clients.',
      image: '/api/placeholder/600/400',
      tags: ['Luxury Branding', 'Visual Identity', 'Marketing Materials'],
      results: [
        '400% increase in luxury listings',
        '250% growth in high-value clients',
        '300% boost in referral business'
      ],
      challenge: 'Position the firm as the premium choice for luxury real estate.',
      solution: 'Developed an elegant, minimalist identity with gold accents and premium materials.',
      industry: 'Real Estate'
    }
  ]

  return (
    <section id="branding-portfolio" className="py-24 bg-gray-50">
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
            Branding <span className="text-red-500">Success Stories</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how our branding solutions have transformed businesses across industries, 
            driving recognition, trust, and measurable growth.
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
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">🎨</div>
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
                  <div>
                    <h4 className="font-semibold text-black mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
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

        {/* View More CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Want to see more branding projects?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-500 transition-colors shadow-lg"
            onClick={() => window.location.href = '/Portfolio?category=branding'}
          >
            View Complete Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}