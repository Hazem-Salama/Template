'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's digital marketing services
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
    currency: 'EGP', // Update with your currency
    currencySymbol: 'EGP' // Update with your currency symbol
  },
  content: {
    title: 'Complete Digital Marketing Solutions',
    subtitle: 'From social media management to paid advertising campaigns, we provide comprehensive digital marketing services that drive real business growth.',
    platformsTitle: 'Platforms We Master',
    platformsSubtitle: 'We create and manage campaigns across all major social media and advertising platforms to maximize your reach and engagement.',
    packageTitle: 'Need a Complete Marketing Solution?',
    packageSubtitle: 'Get everything you need to dominate digital marketing with our all-inclusive package covering social media, advertising, content creation, and strategy.'
  },
  services: [
    {
      icon: '📱',
      title: 'Social Media Management (SMM)',
      description: 'Complete social media strategy, content creation, and community management across all platforms.',
      features: [
        'Facebook, Instagram, TikTok, LinkedIn management',
        'Content calendar planning & scheduling',
        'Community engagement & response management',
        'Hashtag research & trend monitoring',
        'Monthly performance reports & analytics'
      ],
      deliverables: 'Content calendar, posts, stories, engagement reports',
      timeline: 'Ongoing monthly',
      startingPrice: 2500
    },
    {
      icon: '🎯',
      title: 'Paid Advertising Campaigns',
      description: 'Strategic paid advertising across Facebook, Instagram, TikTok, Google, and other platforms.',
      features: [
        'Facebook & Instagram Ads management',
        'TikTok Ads & influencer campaigns',
        'Google Ads & YouTube advertising',
        'LinkedIn & Twitter promoted content',
        'A/B testing & conversion optimization'
      ],
      deliverables: 'Campaign setup, ad creatives, performance reports',
      timeline: 'Ongoing monthly',
      startingPrice: 15000
    },
    {
      icon: '📸',
      title: 'Photography & Visual Content',
      description: 'Professional photography and visual content creation for all your marketing needs.',
      features: [
        'Product photography & lifestyle shots',
        'Brand photography & headshots',
        'Social media content creation',
        'Event & behind-the-scenes photography',
        'Photo editing & retouching services'
      ],
      deliverables: 'High-resolution photos, edited content, usage rights',
      timeline: '1-2 weeks',
      startingPrice: 4000
    },
    {
      icon: '🎥',
      title: 'Video & Ads Editing',
      description: 'Professional video production and editing for marketing campaigns and social media.',
      features: [
        'Social media video content (Reels, TikToks)',
        'Advertisement video production',
        'Promotional & explainer videos',
        'Motion graphics & animations',
        'Video optimization for each platform'
      ],
      deliverables: 'Edited videos, multiple format exports, thumbnails',
      timeline: '1-3 weeks',
      startingPrice: 600
    },
    {
      icon: '📊',
      title: 'Marketing Strategy Consultation',
      description: 'Comprehensive marketing strategy development and consultation services.',
      features: [
        'Market research & competitor analysis',
        'Target audience identification & personas',
        'Multi-channel marketing strategy',
        'Campaign planning & budget allocation',
        'Performance metrics & KPI setup'
      ],
      deliverables: 'Strategy document, action plan, implementation guide',
      timeline: '2-4 weeks',
      startingPrice: 2500
    },
    {
      icon: '🚀',
      title: 'Integrated Marketing Campaigns',
      description: 'End-to-end marketing campaigns across multiple platforms and channels.',
      features: [
        'Cross-platform campaign development',
        'Content creation & copywriting',
        'Influencer partnerships & collaborations',
        'Email marketing integration',
        'Campaign performance tracking & optimization'
      ],
      deliverables: 'Complete campaign package, content, reports',
      timeline: '4-8 weeks',
      startingPrice: 25000
    }
  ],
  platforms: [
    { name: 'Facebook', icon: '📘', color: 'bg-blue-100 text-blue-700' },
    { name: 'Instagram', icon: '📷', color: 'bg-pink-100 text-pink-700' },
    { name: 'TikTok', icon: '🎵', color: 'bg-gray-100 text-gray-700' },
    { name: 'LinkedIn', icon: '💼', color: 'bg-blue-100 text-blue-800' },
    { name: 'YouTube', icon: '📺', color: 'bg-red-100 text-red-700' },
    { name: 'X (Twitter)', icon: '🐦', color: 'bg-gray-100 text-gray-700' },
    { name: 'Google Ads', icon: '🔍', color: 'bg-green-100 text-green-700' }
  ],
  completePackage: {
    price: 40000,
    note: 'Includes all services + dedicated account manager'
  }
}

export default function DigitalMarketingServices() {
  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} ${TEMPLATE_CONFIG.company.currencySymbol}`
  }

  const handleServiceClick = (serviceTitle: string) => {
    const serviceSlug = serviceTitle.toLowerCase().replace(/ /g, '-')
    window.location.href = `/contact?service=${serviceSlug}`
  }

  const handleCompletePackageClick = () => {
    window.location.href = '/contact?service=complete-digital-marketing'
  }

  return (
    <section className="py-24 bg-white">
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
            Complete <span className="text-blue-500">Digital Marketing</span> Solutions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid - Unified styling */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {TEMPLATE_CONFIG.services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Details */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deliverables:</span>
                    <span className="text-black font-medium text-right flex-1 ml-2">{service.deliverables}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="text-black font-medium">{service.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Starting at:</span>
                    <span className="text-blue-500 font-bold text-lg">
                      {service.timeline.includes('month') ? `${formatPrice(service.startingPrice)}/month` : formatPrice(service.startingPrice)}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors duration-300"
                onClick={() => handleServiceClick(service.title)}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Platforms We Work With - Unified styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Platforms We <span className="text-blue-500">Master</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {TEMPLATE_CONFIG.content.platformsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {TEMPLATE_CONFIG.platforms.map((platform, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`text-center p-4 rounded-xl ${platform.color} transition-all duration-300 cursor-pointer`}
              >
                <div className="text-2xl mb-2">{platform.icon}</div>
                <div className="font-medium text-sm">{platform.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Complete Marketing Package CTA - Unified styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                {TEMPLATE_CONFIG.content.packageTitle}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {TEMPLATE_CONFIG.content.packageSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
                  onClick={handleCompletePackageClick}
                >
                  Get Complete Package - Starting at {formatPrice(TEMPLATE_CONFIG.completePackage.price)}/month
                </motion.button>
                <span className="text-gray-500 text-sm">{TEMPLATE_CONFIG.completePackage.note}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED DIGITAL MARKETING SERVICES - TEMPLATE READY

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify services array with your offerings
3. Customize pricing in your currency
4. Update platform icons and colors
5. Set contact page URLs
6. Adjust complete package pricing

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same hover effects and animations
- Unified button styling
- Matching typography and spacing
- Consistent background gradients

SERVICES INCLUDED:
- Social Media Management (SMM)
- Paid Advertising Campaigns
- Photography & Visual Content
- Video & Ads Editing
- Marketing Strategy Consultation
- Integrated Marketing Campaigns

PLATFORMS INCLUDED:
- Facebook, Instagram, TikTok
- LinkedIn, YouTube, X (Twitter)
- Google Ads

Perfect for showcasing digital marketing services with unified design!
*/