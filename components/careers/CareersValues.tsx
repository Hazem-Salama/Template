'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function CareersValues() {
  const values = [
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
  ]

  const culture = [
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
              Our <span className="text-red-500">Values & Culture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't just words on a wall. They're the principles that guide how we work, 
              make decisions, and treat each other every day.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>
                <ul className="space-y-2">
                  {value.principles.map((principle, principleIndex) => (
                    <li key={principleIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {principle}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Culture Highlights */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-black mb-8 text-center">
              What Makes Our <span className="text-red-500">Culture Special</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {culture.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-black mb-3">{item.aspect}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-red-50 to-gray-50 rounded-xl p-8 text-center">
              <h4 className="text-xl font-bold text-black mb-4">
                Our Promise to You
              </h4>
              <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                We're committed to creating an environment where you can do your best work, 
                grow your career, and make a meaningful impact while maintaining a healthy 
                work-life balance. Your success is our success.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}