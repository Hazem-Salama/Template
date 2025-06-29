'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's branding
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
    currency: 'USD',
    currencySymbol: '$'
  },
  content: {
    title: 'Complete Branding Solutions',
    subtitle: 'From logo design to complete brand systems, we create cohesive identities that build recognition, trust, and business value.',
    packageOffer: {
      title: 'Need a Complete Brand Package?',
      description: 'Get everything you need to launch your brand with our comprehensive package that includes logo, guidelines, visual identity, and brand strategy.',
      discount: '25%',
      ctaText: 'Get Complete Package',
      note: 'Save 25% vs individual services'
    }
  },
  services: [
    {
      icon: '🎨',
      title: 'Logo Design',
      description: 'Create memorable, scalable logos that capture your brand essence and work across all platforms.',
      features: [
        'Multiple concept development',
        'Vector file delivery',
        'Color and monochrome versions',
        'Usage guidelines',
        'Unlimited revisions'
      ],
      deliverables: '5-10 logo concepts, final files in all formats',
      timeline: '1-2 weeks',
      startingPrice: 800,
      popular: false
    },
    {
      icon: '📋',
      title: 'Brand Guidelines',
      description: 'Comprehensive brand standards that ensure consistent application across all touchpoints.',
      features: [
        'Logo usage rules',
        'Color palette specifications',
        'Typography systems',
        'Imagery guidelines',
        'Application examples'
      ],
      deliverables: 'Complete brand guidelines document (20-40 pages)',
      timeline: '2-3 weeks',
      startingPrice: 600,
      popular: false
    },
    {
      icon: '👁️',
      title: 'Visual Identity System',
      description: 'Complete visual language including patterns, icons, and design elements for cohesive branding.',
      features: [
        'Icon set design',
        'Pattern library',
        'Photography style',
        'Graphic elements',
        'Template creation'
      ],
      deliverables: 'Complete visual identity package with assets',
      timeline: '3-4 weeks',
      startingPrice: 1200,
      popular: true
    },
    {
      icon: '🎯',
      title: 'Brand Strategy',
      description: 'Define your brand positioning, messaging, and target audience for maximum market impact.',
      features: [
        'Brand positioning',
        'Target audience research',
        'Competitive analysis',
        'Messaging framework',
        'Brand architecture'
      ],
      deliverables: 'Brand strategy document and messaging guide',
      timeline: '2-3 weeks',
      startingPrice: 1500,
      popular: false
    },
    {
      icon: '📄',
      title: 'Brand Collateral',
      description: 'Business cards, letterheads, and marketing materials that reinforce your brand identity.',
      features: [
        'Business card design',
        'Letterhead and stationery',
        'Presentation templates',
        'Marketing materials',
        'Print-ready files'
      ],
      deliverables: 'Complete stationery suite and templates',
      timeline: '1-2 weeks',
      startingPrice: 400,
      popular: false
    },
    {
      icon: '🔄',
      title: 'Brand Refresh',
      description: 'Modernize and evolve your existing brand while maintaining equity and recognition.',
      features: [
        'Current brand audit',
        'Evolution strategy',
        'Modernized design',
        'Migration planning',
        'Implementation support'
      ],
      deliverables: 'Refreshed brand package with migration plan',
      timeline: '3-5 weeks',
      startingPrice: 1000,
      popular: false
    }
  ],
  pricing: {
    showPricing: true,
    showTimeline: true,
    completePackagePrice: 4000,
    packageServices: ['Logo Design', 'Brand Guidelines', 'Visual Identity System', 'Brand Strategy']
  },
  contact: {
    baseUrl: '/contact',
    serviceParam: 'service'
  }
}

export default function BrandingServices() {
  const formatPrice = (price: number) => {
    return `${TEMPLATE_CONFIG.company.currencySymbol}${price.toLocaleString()}`
  }

  const handleServiceClick = (serviceTitle: string) => {
    const serviceSlug = serviceTitle.toLowerCase().replace(/ /g, '-')
    const url = `${TEMPLATE_CONFIG.contact.baseUrl}?${TEMPLATE_CONFIG.contact.serviceParam}=${serviceSlug}`
    window.location.href = url
  }

  const handleCompletePackageClick = () => {
    const url = `${TEMPLATE_CONFIG.contact.baseUrl}?${TEMPLATE_CONFIG.contact.serviceParam}=complete-branding`
    window.location.href = url
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
            Complete <span className="text-blue-500">Branding</span> Solutions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {TEMPLATE_CONFIG.content.subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TEMPLATE_CONFIG.services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border group relative ${
                service.popular ? 'border-blue-500 border-2' : 'border border-gray-100'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-3 group-hover:transition-colors duration-300 ${
                  service.popular ? 'text-blue-500' : 'text-black group-hover:text-blue-500'
                }`}>
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
                  {TEMPLATE_CONFIG.pricing.showTimeline && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timeline:</span>
                      <span className="text-black font-medium">{service.timeline}</span>
                    </div>
                  )}
                  {TEMPLATE_CONFIG.pricing.showPricing && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting at:</span>
                      <span className="text-blue-500 font-bold text-lg">
                        {formatPrice(service.startingPrice)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                  service.popular 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-black text-white hover:bg-blue-500'
                }`}
                onClick={() => handleServiceClick(service.title)}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Complete Package CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                {TEMPLATE_CONFIG.content.packageOffer.title}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {TEMPLATE_CONFIG.content.packageOffer.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
                  onClick={handleCompletePackageClick}
                >
                  {TEMPLATE_CONFIG.content.packageOffer.ctaText} - {formatPrice(TEMPLATE_CONFIG.pricing.completePackagePrice)}
                </motion.button>
                <span className="text-gray-500 text-sm">{TEMPLATE_CONFIG.content.packageOffer.note}</span>
              </div>
              
              {/* Package Includes */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Complete package includes:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {TEMPLATE_CONFIG.pricing.packageServices.map((service, index) => (
                    <span key={index} className="px-3 py-1 bg-white border rounded-full text-sm text-gray-700">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED BRANDING SERVICES - TEMPLATE READY

FEATURES:
✅ Unified styling with about components
✅ Blue color scheme consistency  
✅ Consistent card design and shadows
✅ Same hover animations and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify services array with your offerings
3. Set pricing in your currency
4. Mark popular services
5. Configure complete package details
6. Update contact page URL

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same hover effects and animations
- Unified button styling
- Matching typography and spacing
- Consistent background gradients

Perfect for showcasing branding services with unified design!
*/