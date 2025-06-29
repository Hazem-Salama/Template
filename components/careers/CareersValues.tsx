'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's culture and values
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  content: {
    title: 'Our Values & Culture',
    subtitle: 'These aren\'t just words on a wall. They\'re the principles that guide how we work, make decisions, and treat each other every day.',
    promiseTitle: 'Our Promise to You',
    promiseText: 'We\'re committed to creating an environment where you can do your best work, grow your career, and make a meaningful impact while maintaining a healthy work-life balance. Your success is our success.'
  },
  values: [
    {
      icon: '💫',
      title: 'Creativity First',
      description: 'We believe in the power of creative thinking to solve complex problems and deliver extraordinary results.',
      principles: [
        'Encourage bold ideas and experimentation',
        'Challenge conventional thinking',
        'Foster innovation in every project',
        'Celebrate creative breakthroughs'
      ]
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Great work happens when talented people come together, share ideas, and support each other.',
      principles: [
        'Open communication and transparency',
        'Cross-functional team collaboration',
        'Knowledge sharing and mentorship',
        'Collective problem-solving approach'
      ]
    },
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We set high standards for ourselves and continuously strive to exceed client expectations.',
      principles: [
        'Quality over quantity mindset',
        'Continuous learning and improvement',
        'Attention to detail in everything',
        'Delivering results that matter'
      ]
    },
    {
      icon: '🌱',
      title: 'Growth Mindset',
      description: 'We invest in our people\'s development and create opportunities for career advancement.',
      principles: [
        'Personal and professional development',
        'Learning from failures and successes',
        'Skill building and career progression',
        'Embracing new challenges'
      ]
    },
    {
      icon: '⚖️',
      title: 'Work-Life Balance',
      description: 'We believe that well-rested, happy people do their best work and live fulfilling lives.',
      principles: [
        'Flexible working arrangements',
        'Respect for personal time',
        'Mental health and wellness support',
        'Sustainable work practices'
      ]
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'We work with purpose, creating meaningful solutions that make a positive difference.',
      principles: [
        'Working with purpose-driven clients',
        'Sustainable business practices',
        'Community involvement and giving back',
        'Long-term positive impact focus'
      ]
    }
  ],
  culture: [
    {
      aspect: 'Communication',
      description: 'Open, honest, and respectful dialogue across all levels',
      icon: '💬'
    },
    {
      aspect: 'Innovation',
      description: 'Encouraging experimentation and learning from failure',
      icon: '🔬'
    },
    {
      aspect: 'Excellence',
      description: 'Striving for the highest standards in everything we do',
      icon: '🏆'
    },
    {
      aspect: 'Autonomy',
      description: 'Trusting team members to own their work and decisions',
      icon: '🎮'
    }
  ]
}

export default function CareersValues() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our <span className="text-blue-500">Values & Culture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {TEMPLATE_CONFIG.content.subtitle}
            </p>
          </motion.div>

          {/* Core Values Grid - Unified styling */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {TEMPLATE_CONFIG.values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-blue-500 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>
                <ul className="space-y-3">
                  {value.principles.map((principle, principleIndex) => (
                    <li key={principleIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {principle}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Culture Highlights - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-black mb-8 text-center">
              What Makes Our <span className="text-blue-500">Culture Special</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEMPLATE_CONFIG.culture.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-black mb-3">{item.aspect}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            
            {/* Promise Section - Unified styling */}
            <div className="mt-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
              <h4 className="text-xl font-bold text-black mb-4">
                {TEMPLATE_CONFIG.content.promiseTitle}
              </h4>
              <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                {TEMPLATE_CONFIG.content.promiseText}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CAREERS VALUES - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify values and principles
3. Customize culture highlights
4. Update promise section text
5. Add/remove values as needed
6. Adjust descriptions to match your culture

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same hover effects and animations
- Unified button styling
- Matching typography and spacing
- Consistent background gradients

VALUES INCLUDED:
- Creativity First
- Collaboration
- Excellence
- Growth Mindset
- Work-Life Balance
- Impact

CULTURE ASPECTS:
- Communication
- Innovation
- Excellence
- Autonomy

Perfect for showcasing company culture with unified design!
*/