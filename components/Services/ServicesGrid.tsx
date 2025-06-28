'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Template services - customize for your agency
const services = [
  {
    id: 'Branding',
    icon: '🎨',
    title: 'Brand Strategy & Design',
    description: 'Create a powerful brand identity that resonates with your audience and builds lasting trust.',
    features: [
      'Logo design & brand identity',
      'Brand guidelines & style guide',
      'Marketing materials design',
      'Brand positioning strategy',
      'Color palette & typography',
      'Digital brand applications'
    ],
    deliverables: '15+ assets',
    timeline: '4-6 weeks',
    startingPrice: 'From $5,000'
  },
  {
    id: 'DM',
    icon: '📊',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase visibility and drive measurable growth.',
    features: [
      'Social media strategy & management',
      'Google Ads & PPC campaigns',
      'SEO optimization',
      'Content marketing strategy',
      'Email marketing campaigns',
      'Analytics & performance tracking'
    ],
    deliverables: 'Campaign setup',
    timeline: '2-3 weeks',
    startingPrice: 'From $2,500/month'
  },
  {
    id: 'UIUX',
    icon: '💻',
    title: 'UI/UX Design',
    description: 'Design intuitive and engaging user experiences that convert visitors into customers.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'UI design & visual interface',
      'Usability testing',
      'Design system creation',
      'Mobile-responsive design'
    ],
    deliverables: 'Complete design',
    timeline: '6-8 weeks',
    startingPrice: 'From $8,000'
  },
  {
    id: 'Consulting',
    icon: '💡',
    title: 'Strategy Consulting',
    description: 'Expert guidance to optimize your business strategy and accelerate growth.',
    features: [
      'Business strategy development',
      'Digital transformation planning',
      'Market research & analysis',
      'Competitive analysis',
      'Growth strategy planning',
      'Performance optimization'
    ],
    deliverables: 'Strategy report',
    timeline: '3-4 weeks',
    startingPrice: 'From $3,500'
  },
  {
    id: 'WebDev',
    icon: '⚡',
    title: 'Web Development',
    description: 'Build fast, secure, and scalable websites that perform excellently across all devices.',
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Web application development',
      'API integration',
      'Performance optimization',
      'Security implementation',
      'Ongoing maintenance'
    ],
    deliverables: 'Live website',
    timeline: '8-12 weeks',
    startingPrice: 'From $10,000'
  }
]

export default function ServicesGrid() {
  return (
    <section id="services-grid" className="py-24 bg-white">
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
            Our <span className="text-blue-500">Services</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive solutions designed to help your business grow and succeed in the digital landscape.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
                <h4 className="font-semibold text-black mb-3">
                  What's Included
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Details */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deliverables</span>
                    <span className="text-black font-medium">{service.deliverables}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline</span>
                    <span className="text-black font-medium">{service.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment</span>
                    <span className="text-blue-500 font-bold">{service.startingPrice}</span>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <motion.a
                href={`/${service.id}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-gray-100 text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 text-center"
              >
                Learn More
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Solutions CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Need Something Custom?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We specialize in creating tailored solutions that perfectly fit your unique business needs and goals.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
            >
              Discuss Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}