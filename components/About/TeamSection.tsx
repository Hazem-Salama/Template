// components/TeamSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Import i18n configuration
import '@/lib/i18n'

export default function TeamSection() {
  const { t, i18n } = useTranslation('common')
  const isRTL = i18n.language === 'ar'

  const teamMembers = [
    {
      name: 'Soror Mohamed',
      nameAr: 'صرور محمد',
      position: t('team.members.soror.position'),
      description: t('team.members.soror.description'),
      skills: [
        t('team.members.soror.skills.0'),
        t('team.members.soror.skills.1'),
        t('team.members.soror.skills.2')
      ],
      avatar: 'SJ'
    },
    {
      name: 'Hazem Salama',
      nameAr: 'حازم سلامة',
      position: t('team.members.hazem.position'),
      description: t('team.members.hazem.description'),
      skills: [
        t('team.members.hazem.skills.0'),
        t('team.members.hazem.skills.1'),
        t('team.members.hazem.skills.2'),
        t('team.members.hazem.skills.3'),
        t('team.members.hazem.skills.4'),
        t('team.members.hazem.skills.5'),
        t('team.members.hazem.skills.6')
      ],
      avatar: 'MC'
    },
    {
      name: 'Amir Salem',
      nameAr: 'أمير سالم',
      position: t('team.members.amir.position'),
      description: t('team.members.amir.description'),
      skills: [
        t('team.members.amir.skills.0'),
        t('team.members.amir.skills.1'),
        t('team.members.amir.skills.2')
      ],
      avatar: 'ER'
    },
    {
      name: 'Abdullah Mohamed',
      nameAr: 'عبد الله محمد',
      position: t('team.members.abdullah.position'),
      description: t('team.members.abdullah.description'),
      skills: [
        t('team.members.abdullah.skills.0'),
        t('team.members.abdullah.skills.1'),
        t('team.members.abdullah.skills.2')
      ],
      avatar: 'AW'
    }
  ]

  const companyValues = [
    {
      title: t('team.values.innovation.title'),
      description: t('team.values.innovation.description'),
      icon: '💡'
    },
    {
      title: t('team.values.partnership.title'),
      description: t('team.values.partnership.description'),
      icon: '🤝'
    },
    {
      title: t('team.values.learning.title'),
      description: t('team.values.learning.description'),
      icon: '📚'
    },
    {
      title: t('team.values.quality.title'),
      description: t('team.values.quality.description'),
      icon: '⭐'
    }
  ]

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
            {t('team.title')} <span className="text-red-500">{t('team.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('team.subtitle')}
          </motion.p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ${isRTL ? 'rtl-grid' : ''}`}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {member.avatar}
              </div>
              
              {/* Name & Position */}
              <h4 className="text-xl font-bold text-black mb-2">
                {isRTL ? member.nameAr : member.name}
              </h4>
              <p className="text-red-500 font-semibold mb-4">{member.position}</p>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
              
              {/* Skills */}
              <div className={`flex flex-wrap justify-center gap-2 ${isRTL ? 'rtl-flex' : ''}`}>
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-red-50 text-red-600 text-sm rounded-full"
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
            {t('team.whatDrives')}
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          >
            {t('team.drivesDescription')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isRTL ? 'rtl-grid' : ''}`}
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
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-6">{t('team.joinTeam')}</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {t('team.joinDescription')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => window.location.href = '/Careers'}
            >
              {t('team.viewPositions')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors"
              onClick={() => window.location.href = '/Contact'}
            >
              {t('team.getInTouch')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}