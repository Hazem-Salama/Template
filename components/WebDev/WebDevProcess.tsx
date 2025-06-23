'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function WebDevProcess() {
  const processSteps = [
    {
      step: '01',
      title: 'Requirements Analysis & Planning',
      description: 'We analyze your technical requirements, define system architecture, and create a comprehensive development roadmap.',
      activities: [
        'Technical requirements gathering',
        'System architecture design',
        'Technology stack selection',
        'Database schema planning',
        'API endpoints definition'
      ],
      deliverable: 'Technical specification & development plan',
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: 'Environment Setup & Configuration',
      description: 'Set up development, staging, and production environments with proper CI/CD pipelines.',
      activities: [
        'Development environment setup',
        'Version control configuration',
        'CI/CD pipeline creation',
        'Database setup & migrations',
        'Third-party service integrations'
      ],
      deliverable: 'Configured development environment',
      duration: '3-5 days',
      icon: '⚙️'
    },
    {
      step: '03',
      title: 'Backend Development',
      description: 'Build robust server-side architecture, APIs, and database systems that power your application.',
      activities: [
        'Server architecture implementation',
        'RESTful API development',
        'Database design & optimization',
        'Authentication & authorization',
        'Security implementation'
      ],
      deliverable: 'Complete backend system with APIs',
      duration: '3-6 weeks',
      icon: '🗄️'
    },
    {
      step: '04',
      title: 'Frontend Development',
      description: 'Develop responsive, interactive user interfaces that seamlessly connect with backend services.',
      activities: [
        'Component-based UI development',
        'State management implementation',
        'API integration & data handling',
        'Responsive design implementation',
        'Performance optimization'
      ],
      deliverable: 'Functional frontend application',
      duration: '3-6 weeks',
      icon: '💻'
    },
    {
      step: '05',
      title: 'Integration & Testing',
      description: 'Comprehensive testing of all system components to ensure functionality, performance, and security.',
      activities: [
        'Unit & integration testing',
        'API testing & validation',
        'Performance & load testing',
        'Security vulnerability testing',
        'Cross-browser & device testing'
      ],
      deliverable: 'Fully tested & integrated system',
      duration: '2-3 weeks',
      icon: '🧪'
    },
    {
      step: '06',
      title: 'Deployment & Go-Live',
      description: 'Deploy your application to production with monitoring, analytics, and ongoing support systems.',
      activities: [
        'Production deployment',
        'SSL certificates & security setup',
        'Monitoring & analytics integration',
        'Performance optimization',
        'Documentation & training'
      ],
      deliverable: 'Live application with monitoring',
      duration: '1-2 weeks',
      icon: '🚀'
    }
  ]

  const developmentFeatures = [
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Built-in security measures, encryption, and regular security audits to protect against threats.'
    },
    {
      icon: '📈',
      title: 'Scalable Architecture',
      description: 'Designed to handle growth with microservices, load balancing, and horizontal scaling.'
    },
    {
      icon: '⚡',
      title: 'Performance Optimized',
      description: 'Fast loading times, efficient algorithms, and optimized database queries for better performance.'
    },
    {
      icon: '🔧',
      title: 'Maintainable Code',
      description: 'Clean, documented code following best practices for easy maintenance and future updates.'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
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
            Our Development <span className="text-red-500">Process</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A systematic 6-step development approach that ensures your application is built efficiently, 
            securely, and ready to scale with your business growth.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <motion.div
                variants={fadeInUp}
                className="flex-1 max-w-2xl"
              >
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-black text-red-500/20 mr-4">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-2">
                      {step.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📅 {step.duration}</span>
                      <span>📋 {step.deliverable}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex-1 max-w-md"
              >
                <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-3xl p-12 text-center shadow-lg">
                  <div className="text-8xl mb-6">{step.icon}</div>
                  <div className="text-2xl font-bold text-red-500 mb-2">Step {step.step}</div>
                  <div className="text-lg font-semibold text-black">{step.title}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Development Features */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Why Our Development Approach Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every application we build follows industry best practices and modern development standards 
              to ensure reliability, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-black mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology & Standards */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-black to-red-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Modern Development Standards</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We follow the latest development standards and use cutting-edge technologies 
              to build applications that are future-proof and scalable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Performance</h4>
              <p className="text-gray-300">Average 2.5s load time with 99.9% uptime</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h4 className="text-xl font-semibold mb-2">Security</h4>
              <p className="text-gray-300">SSL, secure coding practices & regular updates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="text-xl font-semibold mb-2">Scalability</h4>
              <p className="text-gray-300">Built to grow with your business needs</p>
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              onClick={() => window.location.href = '/Contact?service=development'}
            >
              Start Your Development Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}