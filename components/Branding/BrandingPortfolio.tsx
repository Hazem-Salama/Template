'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's branding
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  content: {
    title: 'Branding Success Stories',
    subtitle: 'See how our branding solutions have transformed businesses across industries, driving recognition, trust, and measurable growth.',
    ctaText: 'View Complete Portfolio',
    ctaDescription: 'Want to see more branding projects?'
  },
  portfolio: {
    showResults: true,
    showChallengeSolution: true,
    placeholderIcon: '🎨',
    items: [
      {
        id: 1,
        title: 'TechStart Startup',
        category: 'Complete Brand Identity',
        description: 'Modern tech startup needing a bold, innovative brand that appeals to both investors and customers.',
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
        tags: ['Luxury Branding', 'Visual Identity', 'Marketing Materials'],
        results: [
          '400% increase in luxury listings',
          '250% growth in high-value clients',
          '300% boost in referral business'
        ],
        challenge: 'Position the firm as the premium choice for luxury real estate.',
        solution: 'Developed an elegant, minimalist identity with premium materials.',
        industry: 'Real Estate'
      },
      {
        id: 5,
        title: 'FitLife Gym',
        category: 'Fitness Branding',
        description: 'Local gym chain needing an energetic brand to compete with national fitness franchises.',
        tags: ['Logo Design', 'Brand Identity', 'Signage Design'],
        results: [
          '250% increase in memberships',
          '180% growth in brand awareness',
          '300% boost in social media following'
        ],
        challenge: 'Create an energetic brand that motivates and inspires fitness enthusiasts.',
        solution: 'Designed a dynamic identity with bold colors and motivational messaging.',
        industry: 'Fitness'
      },
      {
        id: 6,
        title: 'EcoClean Products',
        category: 'Sustainable Branding',
        description: 'Eco-friendly cleaning company building trust through transparent, sustainable branding.',
        tags: ['Sustainable Design', 'Packaging', 'Brand Guidelines'],
        results: [
          '320% increase in retail partnerships',
          '200% growth in online sales',
          '150% boost in brand trust scores'
        ],
        challenge: 'Communicate environmental values while maintaining premium positioning.',
        solution: 'Created an earthy, authentic brand with transparent messaging and eco-friendly materials.',
        industry: 'Consumer Products'
      }
    ]
  },
  links: {
    portfolioUrl: '/portfolio?category=branding',
    contactUrl: '/contact?service=branding'
  }
}

export default function BrandingPortfolio() {
  const handleViewMoreClick = () => {
    window.location.href = TEMPLATE_CONFIG.links.portfolioUrl
  }

  const handleContactClick = (projectTitle: string) => {
    const url = `${TEMPLATE_CONFIG.links.contactUrl}&project=${encodeURIComponent(projectTitle)}`
    window.location.href = url
  }

  return (
    <section id="branding-portfolio" className="py-24 bg-gray-50">
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
            Branding <span className="text-blue-500">Success Stories</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {TEMPLATE_CONFIG.portfolio.items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => handleContactClick(item.title)}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="text-6xl text-gray-400">{TEMPLATE_CONFIG.portfolio.placeholderIcon}</div>
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
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Project Details</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Challenge & Solution */}
                {TEMPLATE_CONFIG.portfolio.showChallengeSolution && (
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
                )}

                {/* Results */}
                {TEMPLATE_CONFIG.portfolio.showResults && (
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
                )}

                {/* Contact CTA */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button 
                    className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleContactClick(item.title)
                    }}
                  >
                    Discuss Similar Project →
                  </button>
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
          <p className="text-gray-600 mb-6">{TEMPLATE_CONFIG.content.ctaDescription}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors shadow-lg"
            onClick={handleViewMoreClick}
          >
            {TEMPLATE_CONFIG.content.ctaText}
          </motion.button>
        </motion.div>

        {/* Portfolio Statistics */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 pt-16 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                {TEMPLATE_CONFIG.portfolio.items.length}+
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                {new Set(TEMPLATE_CONFIG.portfolio.items.map(item => item.industry)).size}+
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                Industries Served
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                250%
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                Avg. Growth Achieved
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                100%
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                Client Satisfaction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED BRANDING PORTFOLIO - TEMPLATE READY

FEATURES:
✅ Unified styling with about components
✅ Blue color scheme consistency
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Replace portfolio items with your projects
3. Update image paths with actual project images
4. Customize results and statistics
5. Set portfolio and contact page URLs
6. Adjust industry examples

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same hover effects and animations
- Unified button styling
- Matching typography and spacing
- Consistent background colors

PORTFOLIO EXAMPLES INCLUDED:
- Technology startup
- Coffee company refresh
- Healthcare wellness
- Luxury real estate
- Fitness gym chain
- Eco-friendly products

TOGGLEABLE SECTIONS:
- Results display
- Challenge/solution sections
- Portfolio statistics

Perfect for showcasing branding expertise with unified design!
*/