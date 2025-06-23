'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ConsultingServices() {
  const services = [
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
            Our <span className="text-red-500">Consulting Services</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive strategic guidance across all aspects of your business, 
            from brand positioning to digital transformation.
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
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-red-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Packages */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            Choose Your <span className="text-red-500">Consulting Package</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-black mb-2">Strategy Audit</h4>
                <div className="text-3xl font-bold text-red-500 mb-4">4,500 EGP</div>
                <p className="text-gray-600">Perfect for startups and small businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Current state assessment
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Strategic recommendations
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  90-minute strategy session
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Action plan document
                </li>
              </ul>
              <a
                href="/book-call?service=Consulting&package=audit"
                className="block w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center"
              >
                Get Started
              </a>
            </div>

            {/* Professional Package */}
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-black mb-2">Strategic Transformation</h4>
                <div className="text-3xl font-bold text-red-500 mb-4">10,500 EGP</div>
                <p className="text-gray-600">Ideal for growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Comprehensive strategy development
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Market & competitive analysis
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Implementation roadmap
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  3 strategy sessions
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  30-day follow-up support
                </li>
              </ul>
              <a
                href="/book-call?service=Consulting&package=transformation"
                className="block w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors text-center"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise Package */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-black mb-2">Enterprise Strategy</h4>
                <div className="text-3xl font-bold text-red-500 mb-4">Custom</div>
                <p className="text-gray-600">For large organizations</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Multi-department strategy
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Digital transformation plan
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Ongoing consulting partnership
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Dedicated strategy team
                </li>
              </ul>
              <a
                href="/book-call?service=Consulting&package=enterprise"
                className="block w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center"
              >
                Discuss Needs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}