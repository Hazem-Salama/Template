'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's digital marketing portfolio
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  content: {
    title: 'Marketing Success Stories',
    subtitle: 'See how our strategic digital marketing campaigns have transformed brands, driven massive growth, and delivered exceptional ROI across industries.',
    impactTitle: 'Proven Marketing Results Across Industries',
    impactSubtitle: 'Our data-driven marketing strategies consistently deliver exceptional ROI and measurable business growth across diverse sectors.',
    differenceTitle: 'What Makes Our Marketing Different',
    ctaText: 'View Complete Portfolio'
  },
  portfolioItems: [
    {
      id: 1,
      title: 'E-commerce Fashion Brand',
      category: 'Social Media Marketing',
      description: 'Complete social media transformation for a fashion e-commerce brand across Instagram, TikTok, and Facebook.',
      tags: ['Instagram', 'TikTok', 'Facebook Ads', 'Content Creation'],
      results: [
        '800% increase in Instagram followers',
        '450% boost in online sales',
        '12M+ TikTok video views per month'
      ],
      challenge: 'Low brand awareness and poor social media presence in a competitive fashion market.',
      solution: 'Developed viral TikTok content strategy, influencer partnerships, and targeted ad campaigns.',
      industry: 'Fashion E-commerce',
      campaign: 'Multi-platform social media campaign with UGC focus',
      duration: '6 months',
      platforms: ['Instagram', 'TikTok', 'Facebook']
    },
    {
      id: 2,
      title: 'Local Restaurant Chain',
      category: 'Integrated Marketing Campaign',
      description: 'Comprehensive digital marketing campaign to increase foot traffic and online orders.',
      tags: ['Google Ads', 'Facebook Marketing', 'Photography', 'Local SEO'],
      results: [
        '300% increase in online orders',
        '150% boost in foot traffic',
        '90% increase in social media engagement'
      ],
      challenge: 'Declining sales during pandemic and need to pivot to online ordering and delivery.',
      solution: 'Professional food photography, targeted local ads, and social media content strategy.',
      industry: 'Food & Beverage',
      campaign: 'Local digital marketing with food photography',
      duration: '4 months',
      platforms: ['Google', 'Facebook', 'Instagram']
    },
    {
      id: 3,
      title: 'Tech Startup SaaS',
      category: 'B2B Marketing Campaign',
      description: 'Lead generation and brand awareness campaign for a B2B SaaS startup.',
      tags: ['LinkedIn Ads', 'Video Marketing', 'Content Strategy', 'Lead Generation'],
      results: [
        '500% increase in qualified leads',
        '200% boost in demo requests',
        '75% improvement in conversion rate'
      ],
      challenge: 'New product launch in competitive SaaS market with limited brand recognition.',
      solution: 'LinkedIn advertising, educational video content, and thought leadership content.',
      industry: 'Technology',
      campaign: 'B2B lead generation with video content',
      duration: '8 months',
      platforms: ['LinkedIn', 'YouTube', 'Twitter']
    },
    {
      id: 4,
      title: 'Fitness Influencer Brand',
      category: 'Personal Brand Marketing',
      description: 'Building a personal brand for a fitness influencer across multiple platforms.',
      tags: ['Personal Branding', 'Content Creation', 'Influencer Marketing', 'Community Building'],
      results: [
        '2M+ followers across all platforms',
        '400% increase in brand partnerships',
        '600% growth in course sales'
      ],
      challenge: 'Needed to monetize social media presence and build a sustainable business.',
      solution: 'Content strategy, brand partnerships, course creation, and community building.',
      industry: 'Fitness & Wellness',
      campaign: 'Personal brand development with monetization',
      duration: '12 months',
      platforms: ['Instagram', 'YouTube', 'TikTok']
    }
  ],
  impactMetrics: [
    { value: '500%', label: 'Average ROI', description: 'Return on Investment' },
    { value: '2M+', label: 'Followers Managed', description: 'Across All Platforms' },
    { value: '85%', label: 'Engagement Rate', description: 'Average Improvement' },
    { value: '150+', label: 'Campaigns Launched', description: 'Successful Projects' }
  ],
  differencePoints: [
    {
      icon: '📸',
      title: 'Professional Content Creation',
      description: 'High-quality photography, video editing, and visual content that stops the scroll.'
    },
    {
      icon: '🎯',
      title: 'Platform-Native Strategy',
      description: 'Tailored approaches for each platform\'s unique algorithm and audience behavior.'
    },
    {
      icon: '📊',
      title: 'Data-Driven Optimization',
      description: 'Continuous testing and optimization based on real performance data and insights.'
    }
  ],
  links: {
    portfolioUrl: '/portfolio?category=digital-marketing'
  }
}

export default function DigitalMarketingPortfolio() {
  const handleViewMoreClick = () => {
    window.location.href = TEMPLATE_CONFIG.links.portfolioUrl
  }

  return (
    <section id="marketing-portfolio" className="py-24 bg-white">
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
            Marketing <span className="text-blue-500">Success Stories</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>
        </motion.div>

        {/* Portfolio Grid - Unified styling */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {TEMPLATE_CONFIG.portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100">
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

                {/* Platform Tags */}
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

                {/* Campaign Details */}
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
                      <h5 className="font-medium text-black mb-1">Campaign Type:</h5>
                      <p className="text-gray-600">{item.campaign}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-black mb-1">Duration:</h5>
                      <p className="text-gray-600">{item.duration}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-medium text-black mb-2">Platforms Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {item.platforms.map((platform, platformIndex) => (
                        <span
                          key={platformIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
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

        {/* Marketing Impact Metrics - Unified styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-black mb-4">
                {TEMPLATE_CONFIG.content.impactTitle}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {TEMPLATE_CONFIG.content.impactSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {TEMPLATE_CONFIG.impactMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-500 mb-2">{metric.value}</div>
                  <div className="text-gray-700 font-medium mb-1">{metric.label}</div>
                  <div className="text-gray-600 text-sm">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Showcase - Unified styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              What Makes Our Marketing <span className="text-blue-500">Different</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEMPLATE_CONFIG.differencePoints.map((point, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h4 className="text-lg font-bold text-black mb-3">{point.title}</h4>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View More CTA - Unified styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">Want to see more marketing campaign results?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors shadow-lg"
            onClick={handleViewMoreClick}
          >
            {TEMPLATE_CONFIG.content.ctaText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED DIGITAL MARKETING PORTFOLIO - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding/careers/consulting components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Replace portfolio items with real campaigns
3. Update impact metrics and statistics
4. Customize difference points
5. Set portfolio page URL
6. Adjust campaign details

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same hover effects and animations
- Unified button styling
- Matching typography and spacing
- Consistent background gradients

PORTFOLIO EXAMPLES INCLUDED:
- E-commerce Fashion Brand
- Local Restaurant Chain
- Tech Startup SaaS
- Fitness Influencer Brand

FEATURES INCLUDED:
- Campaign challenge/solution sections
- Platform usage details
- Results and metrics
- Impact statistics
- Difference points

Perfect for showcasing digital marketing success with unified design!
*/