'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function DigitalMarketingServices() {
  const marketingServices = [
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
      startingPrice: '2,500 EGP/month'
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
      startingPrice: '15,000 EGP/month'
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
      startingPrice: '4,000 EGP'
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
      startingPrice: '600 EGP'
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
      startingPrice: '2,500 EGP'
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
      startingPrice: '25,000 EGP'
    }
  ]

  const platforms = [
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      color: 'bg-blue-100 text-blue-700' 
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      color: 'bg-pink-100 text-pink-700' 
    },
    { 
      name: 'TikTok', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ), 
      color: 'bg-gray-100 text-gray-700' 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      color: 'bg-blue-100 text-blue-800' 
    },
    { 
      name: 'YouTube', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      color: 'bg-red-100 text-red-700' 
    },
    { 
      name: 'X', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      color: 'bg-gray-100 text-gray-700' 
    },
    { 
      name: 'Google Ads', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
        </svg>
      ), 
      color: 'bg-green-100 text-green-700' 
    },

  ]

  return (
    <section className="py-24 bg-white">
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
            Complete <span className="text-red-500">Digital Marketing</span> Solutions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From social media management to paid advertising campaigns, we provide 
            comprehensive digital marketing services that drive real business growth.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {marketingServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-red-500 transition-colors duration-300">
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
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
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
                    <span className="text-red-500 font-bold text-lg">{service.startingPrice}</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-red-500 transition-colors duration-300"
                onClick={() => window.location.href = `/Contact?service=${service.title.toLowerCase().replace(/ /g, '-')}`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Platforms We Work With */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Platforms We Master
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We create and manage campaigns across all major social media and advertising 
              platforms to maximize your reach and engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`text-center p-4 rounded-xl ${platform.color} transition-all duration-300 cursor-pointer`}
              >
                <div className="flex justify-center mb-2">{platform.icon}</div>
                <div className="font-medium text-sm">{platform.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Complete Marketing Package CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Need a Complete Marketing Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get everything you need to dominate digital marketing with our all-inclusive 
              package covering social media, advertising, content creation, and strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
                onClick={() => window.location.href = '/book-call?service=complete-digital-marketing'}
              >
                Get Complete Package - Starting at 40,000 EGP/month
              </motion.button>
              <span className="text-gray-500 text-sm">Includes all services + dedicated account manager</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}