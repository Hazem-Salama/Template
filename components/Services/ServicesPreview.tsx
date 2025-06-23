// components/Services/ServicesPreview.tsx
'use client'

import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { staggerContainer, fadeInUp } from '@/lib/animations'

// Template services data - customize for your agency
const services = [
  {
    title: 'Brand Strategy',
    description: 'Create a powerful brand identity that resonates with your audience and builds lasting trust.',
    icon: "🎨",
    href: "/Branding",
    features: [
      "Logo Design",
      "Visual Identity", 
      "Brand Guidelines",
      "Digital Applications"
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'Design intuitive and engaging user experiences that convert visitors into customers.',
    icon: "💻",
    href: "/UIUX",
    features: [
      "User Research",
      "UI Design",
      "Prototyping",
      "Usability Testing"
    ]
  },
  {
    title: 'Web Development',
    description: 'Build fast, secure, and scalable websites that perform excellently across all devices.',
    icon: "🌐",
    href: "/WebDev",
    features: [
      "Custom Websites",
      "Web Applications",
      "E-commerce Solutions",
      "Performance Optimization"
    ]
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase visibility and drive measurable growth.',
    icon: "📈",
    href: "/DM",
    features: [
      "Social Media Marketing",
      "Google Ads",
      "SEO Optimization", 
      "Analytics & Insights"
    ]
  }
]

export default function ServicesPreview() {
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-blue-500">Expertise</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We combine strategic thinking with creative execution to deliver solutions that drive real business growth and measurable results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Something Custom?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We specialize in creating tailored solutions that perfectly fit your unique business needs and goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/Contact'}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg"
            >
              Discuss Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}