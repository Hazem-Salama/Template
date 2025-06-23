'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Template team members - customize with your actual team
const teamMembers = [
  {
    name: 'Sarah Johnson',
    position: 'Creative Director',
    description: 'Leading our creative vision with over 8 years of experience in brand strategy and visual design.',
    skills: [
      'Brand Strategy',
      'Creative Direction',
      'Team Leadership'
    ],
    avatar: 'SJ'
  },
  {
    name: 'Mike Chen',
    position: 'Lead Developer',
    description: 'Full-stack developer passionate about creating scalable, user-friendly web applications and digital experiences.',
    skills: [
      'Frontend Development',
      'Backend Systems',
      'UI/UX Implementation',
      'Database Design',
      'API Development',
      'Mobile Development',
      'DevOps'
    ],
    avatar: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Marketing Strategist',
    description: 'Data-driven marketing expert specializing in digital campaigns that drive measurable business growth.',
    skills: [
      'Digital Marketing',
      'Analytics & Insights',
      'Campaign Management'
    ],
    avatar: 'ER'
  },
  {
    name: 'Alex Wilson',
    position: 'UI/UX Designer',
    description: 'User experience designer focused on creating intuitive interfaces that delight users and achieve business goals.',
    skills: [
      'User Research',
      'Interface Design',
      'Prototyping'
    ],
    avatar: 'AW'
  }
]

const companyValues = [
  {
    title: 'Innovation First',
    description: 'We embrace new technologies and creative approaches to solve complex challenges.',
    icon: '💡'
  },
  {
    title: 'Client Partnership',
    description: 'Building long-term relationships based on trust, transparency, and mutual success.',
    icon: '🤝'
  },
  {
    title: 'Continuous Learning',
    description: 'We invest in our team\'s growth and stay ahead of industry trends and best practices.',
    icon: '📚'
  },
  {
    title: 'Quality Excellence',
    description: 'Every project reflects our commitment to delivering exceptional results and experiences.',
    icon: '⭐'
  }
]

export default function TeamSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Introduction */}
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
            Meet Our <span className="text-blue-500">Team</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Talented individuals united by a passion for creating exceptional digital experiences and driving client success.
          </motion.p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {member.avatar}
              </div>
              
              {/* Name & Position */}
              <h4 className="text-xl font-bold text-black mb-2">
                {member.name}
              </h4>
              <p className="text-blue-500 font-semibold mb-4">{member.position}</p>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
              
              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Values */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl font-bold text-black mb-6"
          >
            What Drives Us
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Our core values guide every decision we make and every project we undertake.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {companyValues.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-4">{value.icon}</div>
              <h4 className="text-lg font-bold text-black mb-3">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Join Our Team</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for talented individuals who share our passion for creating exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => window.location.href = '/careers'}
            >
              View Open Positions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition-colors"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}