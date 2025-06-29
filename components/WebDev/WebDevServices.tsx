'use client'

import { useState } from 'react'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your web development services
const TEMPLATE_CONFIG = {
  content: {
    title: {
      main: 'Complete',
      highlight: 'Development',
      suffix: 'Solutions'
    },
    subtitle: 'From websites to mobile apps and everything in between, we build digital solutions that drive business growth and deliver exceptional user experiences.',
    techTitle: 'Our Technology Stack',
    techSubtitle: 'We use cutting-edge technologies and proven frameworks to build robust, scalable, and maintainable digital solutions across web and mobile platforms.',
    packageTitle: 'Need a Complete Development Solution?',
    packageSubtitle: 'Get everything you need to launch your digital presence with our full-service package including web, mobile, design, hosting, and ongoing support.',
    packagePrice: 'Starting at $60,000',
    packageFeatures: 'Includes web, mobile, design & 6 months support'
  },
  currency: '$', // Update with your currency symbol
  // Update these services with your actual offerings and pricing
  services: [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built from scratch using modern technologies and best practices.',
      features: [
        'Responsive Web Development',
        'Custom frontend & backend development',
        'Modern JavaScript frameworks (React, Next.js)',
        'RESTful API development & integration',
        'Database design & optimization'
      ],
      deliverables: 'Fully functional website',
      timeline: '4-8 weeks',
      startingPrice: 25000
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps for iOS and Android with seamless user experiences.',
      features: [
        'React Native / Flutter development',
        'Native performance & UI',
        'Integration with device features (camera, GPS)',
        'Cross-platform compatibility',
        'API Development',
        'API integration & backend services'
      ],
      deliverables: 'Complete mobile app ready for app stores',
      timeline: '8-16 weeks',
      startingPrice: 30000
    },
    {
      icon: '🛒',
      title: 'E-commerce Development',
      description: 'Complete online commerce solutions with secure payment processing and inventory management.',
      features: [
        'E-commerce platform development',
        'Payment gateway integration',
        'Inventory management systems',
        'Order tracking & customer accounts',
        'Responsive design for mobile shopping'
      ],
      deliverables: 'Complete e-commerce platform ready for sales',
      timeline: '8-16 weeks',
      startingPrice: 15000
    },
    {
      icon: '📊',
      title: 'Dashboard Management Systems',
      description: 'Comprehensive admin panels and management interfaces for easy content and system administration.',
      features: [
        'Custom dashboard development',
        'Intuitive admin interfaces',
        'Multi-user roles & permissions',
        'Real-time analytics & reporting',
        'Content scheduling & workflow'
      ],
      deliverables: 'Complete dashboard with training and documentation',
      timeline: '4-8 weeks',
      startingPrice: 40000
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Speed up existing websites and apps for better user experience and search rankings.',
      features: [
        'Site speed optimization',
        'Core Web Vitals optimization',
        'Image & asset optimization',
        'Caching strategy implementation',
        'Database query optimization'
      ],
      deliverables: 'Optimized platform with performance report',
      timeline: '2-4 weeks',
      startingPrice: 10000
    },
    {
      icon: '🔍',
      title: 'SEO Implementation',
      description: 'Comprehensive search engine optimization to improve visibility and organic traffic.',
      features: [
        'Technical SEO optimization',
        'On-page SEO improvements',
        'Schema markup implementation',
        'Performance & Core Web Vitals',
        'Content optimization strategy'
      ],
      deliverables: 'SEO-optimized website with reports',
      timeline: '2-4 weeks',
      startingPrice: 10000
    },
    {
      icon: '🔗',
      title: 'API Integration',
      description: 'Seamless integration with third-party services and custom API development for enhanced functionality.',
      features: [
        'Third-party API integration',
        'Custom API development',
        'Data synchronization',
        'Real-time data processing',
        'Microservices architecture'
      ],
      deliverables: 'Integrated APIs with documentation',
      timeline: '8-16 weeks',
      startingPrice: 30000
    },
    {
      icon: '🗄️',
      title: 'Database Design',
      description: 'Robust database architecture and design for scalable and efficient data management.',
      features: [
        'Data architecture planning',
        'Performance optimization',
        'Security implementation',
        'Backup & recovery systems',
        'Scalability planning'
      ],
      deliverables: 'Complete database with documentation',
      timeline: '2-4 weeks',
      startingPrice: 30000
    }
  ],
  // Update these technologies with your actual tech stack
  techStack: [
    { 
      name: 'HTML', 
      icon: '🌐', 
      category: 'Markup',
      description: 'Semantic HTML5 for accessible and SEO-friendly web structure',
      experience: '8+ years'
    },
    { 
      name: 'CSS', 
      icon: '🎨', 
      category: 'Styling',
      description: 'Modern CSS3, animations, and responsive design techniques',
      experience: '8+ years'
    },
    { 
      name: 'JavaScript', 
      icon: '⚡', 
      category: 'Language',
      description: 'ES6+ modern JavaScript for dynamic and interactive experiences',
      experience: '7+ years'
    },
    { 
      name: 'React', 
      icon: '⚛️', 
      category: 'Frontend',
      description: 'Component-based UI development for scalable applications',
      experience: '6+ years'
    },
    { 
      name: 'React Native', 
      icon: '📱', 
      category: 'Mobile',
      description: 'Cross-platform mobile app development with native performance',
      experience: '4+ years'
    },
    { 
      name: 'Flutter', 
      icon: '💙', 
      category: 'Mobile',
      description: 'Google\'s UI toolkit for building beautiful mobile applications',
      experience: '3+ years'
    },
    { 
      name: 'Next.js', 
      icon: '▲', 
      category: 'Framework',
      description: 'Full-stack React framework for production-ready applications',
      experience: '6+ years'
    },
    { 
      name: 'Node.js', 
      icon: '🟢', 
      category: 'Backend',
      description: 'Server-side JavaScript runtime for scalable web services',
      experience: '4+ years'
    },
    { 
      name: 'TypeScript', 
      icon: '💙', 
      category: 'Language',
      description: 'Type-safe JavaScript for better code quality and maintainability',
      experience: '5+ years'
    },
    { 
      name: 'MongoDB', 
      icon: '🍃', 
      category: 'Database',
      description: 'NoSQL database for flexible and scalable data storage',
      experience: '5+ years'
    },
    { 
      name: 'Firebase', 
      icon: '🔥', 
      category: 'Backend',
      description: 'Real-time database and authentication services',
      experience: '4+ years'
    }
  ],
  // Update contact URLs with your actual pages
  contactUrls: {
    individual: '/contact?service=', // Will append service name
    package: '/contact?service=complete-development-solution'
  }
}

// TechCard Component
const TechCard = ({ tech }: { tech: any }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative flex-shrink-0">
      <motion.div
        className="flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-xl border hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 cursor-pointer min-w-[180px]"
        whileHover={{ scale: 1.1, y: -5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="text-2xl">{tech.icon}</span>
        <div>
          <span className="text-black font-medium block">{tech.name}</span>
          <div className="text-gray-500 text-xs">{tech.category}</div>
        </div>
      </motion.div>

      {/* Hover Information Popup */}
      {isHovered && (
        <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2" style={{ zIndex: 9999 }}>
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 min-w-[300px]"
          >
            <div className="text-center">
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h4 className="font-bold text-black mb-2 text-lg">{tech.name}</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {tech.description}
              </p>
              <div className="flex justify-between items-center text-xs">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                  {tech.category}
                </span>
                <span className="text-gray-500 font-medium">
                  {tech.experience}
                </span>
              </div>
            </div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default function WebDevServices() {
  const [isPaused, setIsPaused] = useState(false)

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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

        {/* Tech Stack Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 overflow-hidden"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              {TEMPLATE_CONFIG.content.techTitle}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {TEMPLATE_CONFIG.content.techSubtitle}
            </p>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-6"
              animate={!isPaused ? {
                x: [0, -50 * TEMPLATE_CONFIG.techStack.length]
              } : {}}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: TEMPLATE_CONFIG.techStack.length * 2,
                  ease: "linear",
                },
              }}
              style={{ width: `${TEMPLATE_CONFIG.techStack.length * 200}px` }}
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
            >
              {/* First set of technologies */}
              {TEMPLATE_CONFIG.techStack.map((tech, index) => (
                <TechCard key={`first-${index}`} tech={tech} />
              ))}
              {/* Duplicate set for seamless loop */}
              {TEMPLATE_CONFIG.techStack.map((tech, index) => (
                <TechCard key={`second-${index}`} tech={tech} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Complete Package CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
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
              <span className="text-gray-500 text-sm">{TEMPLATE_CONFIG.content.packageFeatures}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED WEB DEV SERVICES - TEMPLATE READY

FEATURES:
✅ Unified styling with blue color scheme (blue-500/blue-600)
✅ Template-ready configuration in TEMPLATE_CONFIG
✅ Removed all branding and currency-specific content
✅ Interactive tech stack carousel with hover effects
✅ Flexible pricing and currency formatting

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your specific services
2. Modify pricing with your actual rates
3. Change currency symbol and formatting
4. Update tech stack with your technologies
5. Adjust contact URLs to match your site structure
6. Customize service features and deliverables

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600) instead of red
- Consistent card design and shadows
- Same typography and spacing
- Unified animation timing
- Matching hover effects and transitions

Perfect for showcasing web development services with professional, unified styling!
*/