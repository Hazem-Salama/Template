'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's consulting services
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
    currency: 'USD', // Update with your currency
    currencySymbol: '$' // Update with your currency symbol
  },
  content: {
    title: 'Our Consulting Services',
    subtitle: 'Comprehensive strategic guidance across all aspects of your business, from brand positioning to digital transformation.',
    packagesTitle: 'Choose Your Consulting Package'
  },
  services: [
    {
      icon: '🎯',
      title: 'Business Strategy Development',
      description: 'Comprehensive strategic planning to align your business goals with market opportunities.',
      features: [
        'SWOT Analysis',
        'Market Positioning',
        'Competitive Landscape Review',
        'Growth Strategy Framework',
        'KPI Development'
      ]
    },
    {
      icon: '🚀',
      title: 'Digital Transformation Planning',
      description: 'Guide your organization through digital evolution with structured transformation roadmaps.',
      features: [
        'Digital Maturity Assessment',
        'Technology Stack Evaluation',
        'Process Optimization',
        'Change Management Strategy',
        'Implementation Roadmap'
      ]
    },
    {
      icon: '🎨',
      title: 'Brand Positioning Strategy',
      description: 'Define and refine your brand\'s unique position in the marketplace for maximum impact.',
      features: [
        'Brand Audit & Analysis',
        'Target Audience Research',
        'Value Proposition Design',
        'Brand Architecture',
        'Messaging Framework'
      ]
    },
    {
      icon: '📊',
      title: 'Market Research & Analysis',
      description: 'In-depth market insights to inform strategic decisions and identify new opportunities.',
      features: [
        'Industry Analysis',
        'Customer Behavior Study',
        'Market Sizing',
        'Trend Identification',
        'Opportunity Mapping'
      ]
    },
    {
      icon: '🔍',
      title: 'Competitive Analysis',
      description: 'Comprehensive competitor research to identify gaps and strategic advantages.',
      features: [
        'Competitor Profiling',
        'Feature Comparison',
        'Pricing Analysis',
        'Market Share Evaluation',
        'Differentiation Strategy'
      ]
    },
    {
      icon: '📈',
      title: 'Growth Strategy Planning',
      description: 'Scalable growth frameworks designed to accelerate your business expansion.',
      features: [
        'Growth Channel Analysis',
        'Revenue Stream Optimization',
        'Scalability Assessment',
        'Resource Planning',
        'Performance Metrics'
      ]
    }
  ],
  packages: [
    {
      name: 'Strategy Audit',
      price: 4500,
      description: 'Perfect for startups and small businesses',
      popular: false,
      features: [
        'Current state assessment',
        'Strategic recommendations',
        '90-minute strategy session',
        'Action plan document'
      ],
      cta: 'Get Started',
      action: '/contact?service=consulting&package=audit'
    },
    {
      name: 'Strategic Transformation',
      price: 10500,
      description: 'Ideal for growing businesses',
      popular: true,
      features: [
        'Comprehensive strategy development',
        'Market & competitive analysis',
        'Implementation roadmap',
        '3 strategy sessions',
        '30-day follow-up support'
      ],
      cta: 'Get Started',
      action: '/contact?service=consulting&package=transformation'
    },
    {
      name: 'Enterprise Strategy',
      price: null,
      description: 'For large organizations',
      popular: false,
      features: [
        'Multi-department strategy',
        'Digital transformation plan',
        'Ongoing consulting partnership',
        'Dedicated strategy team'
      ],
      cta: 'Discuss Needs',
      action: '/contact?service=consulting&package=enterprise'
    }
  ]
}

export default function ConsultingServices() {
  const formatPrice = (price: number | null) => {
    if (price === null) return 'Custom'
    return `${price.toLocaleString()} ${TEMPLATE_CONFIG.company.currencySymbol}`
  }

  const handlePackageClick = (action: string) => {
    window.location.href = action
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
            Our <span className="text-blue-500">Consulting Services</span>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {TEMPLATE_CONFIG.services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Packages - Unified styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            Choose Your <span className="text-blue-500">Consulting Package</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEMPLATE_CONFIG.packages.map((pkg, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 border-2 relative ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-blue-50 to-gray-50 border-blue-500' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-black mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-blue-500 mb-4">
                    {formatPrice(pkg.price)}
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    pkg.popular
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                  onClick={() => handlePackageClick(pkg.action)}
                >
                  {pkg.cta}
                </motion.button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CONSULTING SERVICES - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding/careers components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify services array with your offerings
3. Customize service packages and pricing
4. Set contact page URLs
5. Update currency and pricing format
6. Mark popular packages

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same hover effects and animations
- Unified button styling
- Matching typography and spacing
- Consistent background gradients

SERVICES INCLUDED:
- Business Strategy Development
- Digital Transformation Planning
- Brand Positioning Strategy
- Market Research & Analysis
- Competitive Analysis
- Growth Strategy Planning

PACKAGES INCLUDED:
- Strategy Audit (Entry level)
- Strategic Transformation (Popular)
- Enterprise Strategy (Custom)

Perfect for showcasing consulting services with unified design!
*/