'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your UI/UX design services
const TEMPLATE_CONFIG = {
  content: {
    title: {
      main: 'Complete',
      highlight: 'UI/UX',
      suffix: 'Solutions'
    },
    subtitle: 'From user research to final interface design, we create experiences that users love and businesses benefit from through increased engagement and conversions.',
    packageTitle: 'Need a Complete UX Design Package?',
    packageSubtitle: 'Get the full user experience treatment with our comprehensive package that includes research, wireframing, prototyping, and final UI design.',
    packagePrice: 'Starting at $15,000',
    packageSavings: 'Save 30% vs individual services'
  },
  currency: '$', // Update with your currency symbol
  // Update these services with your actual offerings and pricing
  services: [
    {
      icon: '🔍',
      title: 'User Research & Analysis',
      description: 'Deep dive into user behavior, needs, and pain points to create data-driven design decisions.',
      features: [
        'User persona development',
        'Journey mapping & flow analysis',
        'Competitive analysis & benchmarking',
        'Usability heuristic evaluation',
        'User interview & survey design'
      ],
      deliverables: 'Research report, personas, journey maps',
      timeline: '2-3 weeks',
      startingPrice: 2000
    },
    {
      icon: '📐',
      title: 'Wireframing & Information Architecture',
      description: 'Structure your content and features logically for optimal user flow and navigation.',
      features: [
        'Site mapping & content strategy',
        'Low-fidelity wireframes',
        'User flow diagrams',
        'Information hierarchy planning',
        'Navigation structure design'
      ],
      deliverables: 'Wireframes, site maps, user flows',
      timeline: '2-4 weeks',
      startingPrice: 2500
    },
    {
      icon: '🎯',
      title: 'Interactive Prototyping',
      description: 'Create clickable prototypes to test and validate design concepts before development.',
      features: [
        'High-fidelity interactive prototypes',
        'Micro-interaction design',
        'Animation & transition planning',
        'Multi-device responsive previews',
        'Stakeholder review sessions'
      ],
      deliverables: 'Interactive prototypes, animation specs',
      timeline: '3-4 weeks',
      startingPrice: 5000
    },
    {
      icon: '🎨',
      title: 'Visual Interface Design',
      description: 'Beautiful, modern interfaces that align with your brand and engage your users.',
      features: [
        'High-fidelity UI design',
        'Component library creation',
        'Responsive design systems',
        'Icon & illustration design',
        'Brand-aligned visual styling'
      ],
      deliverables: 'UI designs, component library, style guide',
      timeline: '3-5 weeks',
      startingPrice: 8000
    },
    {
      icon: '📱',
      title: 'Mobile App Design',
      description: 'Native mobile app interfaces optimized for iOS and Android platforms.',
      features: [
        'iOS & Android design guidelines',
        'Touch-optimized interactions',
        'Platform-specific patterns',
        'Adaptive layouts & scaling',
        'App store optimization design'
      ],
      deliverables: 'Mobile UI designs, interaction specs',
      timeline: '4-6 weeks',
      startingPrice: 8000
    },
    {
      icon: '🧪',
      title: 'Usability Testing & Optimization',
      description: 'Test your designs with real users and optimize based on feedback and analytics.',
      features: [
        'Moderated usability testing',
        'A/B testing design setup',
        'Conversion rate optimization',
        'Accessibility compliance review',
        'Performance impact analysis'
      ],
      deliverables: 'Testing reports, optimization recommendations',
      timeline: '2-3 weeks',
      startingPrice: 2200
    }
  ],
  // Update contact URLs with your actual pages
  contactUrls: {
    individual: '/contact?service=', // Will append service name
    package: '/contact?service=complete-ux-design'
  }
}

export default function UIUXServices() {
  const formatPrice = (price: number) => {
    return `${TEMPLATE_CONFIG.currency}${price.toLocaleString()}`
  }

  const getContactUrl = (serviceName: string) => {
    return `${TEMPLATE_CONFIG.contactUrls.individual}${serviceName.toLowerCase().replace(/ /g, '-')}`
  }

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
            {TEMPLATE_CONFIG.content.title.main}{' '}
            <span className="text-blue-500">{TEMPLATE_CONFIG.content.title.highlight}</span>{' '}
            {TEMPLATE_CONFIG.content.title.suffix}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TEMPLATE_CONFIG.services.map((service, index) => (
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
                    <span className="text-blue-500 font-bold text-lg">{formatPrice(service.startingPrice)}</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href={getContactUrl(service.title)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center bg-black text-white py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors duration-300"
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Complete Package CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              {TEMPLATE_CONFIG.content.packageTitle}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {TEMPLATE_CONFIG.content.packageSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href={TEMPLATE_CONFIG.contactUrls.package}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
              >
                Get Complete Package - {TEMPLATE_CONFIG.content.packagePrice}
              </motion.a>
              <span className="text-gray-500 text-sm">{TEMPLATE_CONFIG.content.packageSavings}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED UI/UX SERVICES - TEMPLATE READY

FEATURES:
✅ Unified styling with blue color scheme (blue-500/blue-600)
✅ Template-ready configuration in TEMPLATE_CONFIG
✅ Removed all branding and currency-specific content
✅ Flexible pricing and currency formatting
✅ Dynamic contact URL generation

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your specific services
2. Modify pricing with your actual rates
3. Change currency symbol and formatting
4. Update contact URLs to match your site structure
5. Adjust service features and deliverables
6. Customize timeline and package offerings

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600) instead of red
- Consistent card design and shadows
- Same typography and spacing
- Unified animation timing
- Matching hover effects and transitions

Perfect for showcasing UI/UX services with professional, unified styling!
*/