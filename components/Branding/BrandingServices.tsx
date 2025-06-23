'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function BrandingServices() {
  const brandingServices = [
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
      startingPrice: '4,000 EGP'
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
      startingPrice: '1,500 EGP'
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
      startingPrice: '3,500 EGP'
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
      startingPrice: '8,000 EGP'
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
      startingPrice: '1,200 EGP'
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
      startingPrice: '4,000 EGP'
    }
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
            Complete <span className="text-red-500">Branding</span> Solutions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From logo design to complete brand systems, we create cohesive identities 
            that build recognition, trust, and business value.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {brandingServices.map((service, index) => (
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

        {/* Complete Package CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Need a Complete Brand Package?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get everything you need to launch your brand with our comprehensive package that 
              includes logo, guidelines, visual identity, and brand strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
                onClick={() => window.location.href = '/Contact?service=complete-branding'}
              >
                Get Complete Package - Starting at 20,500 EGP
              </motion.button>
              <span className="text-gray-500 text-sm">Save 25% vs individual services</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}