'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, staggerContainer, slideInLeft } from '@/lib/animations'

// Import i18n configuration
import '@/lib/i18n'

export default function HowWeWork() {
  const { t, i18n } = useTranslation('common')
  const isRTL = i18n.language === 'ar'

  const processSteps = [
    {
      step: '01',
      title: t('howWeWork.steps.understand.title'),
      description: t('howWeWork.steps.understand.description'),
      details: [
        t('howWeWork.steps.understand.details.0'),
        t('howWeWork.steps.understand.details.1'),
        t('howWeWork.steps.understand.details.2'),
        t('howWeWork.steps.understand.details.3')
      ],
      icon: '🔍'
    },
    {
      step: '02',
      title: t('howWeWork.steps.strategize.title'),
      description: t('howWeWork.steps.strategize.description'),
      details: [
        t('howWeWork.steps.strategize.details.0'),
        t('howWeWork.steps.strategize.details.1'),
        t('howWeWork.steps.strategize.details.2'),
        t('howWeWork.steps.strategize.details.3')
      ],
      icon: '🎯'
    },
    {
      step: '03',
      title: t('howWeWork.steps.create.title'),
      description: t('howWeWork.steps.create.description'),
      details: [
        t('howWeWork.steps.create.details.0'),
        t('howWeWork.steps.create.details.1'),
        t('howWeWork.steps.create.details.2'),
        t('howWeWork.steps.create.details.3')
      ],
      icon: '⚡'
    },
    {
      step: '04',
      title: t('howWeWork.steps.launch.title'),
      description: t('howWeWork.steps.launch.description'),
      details: [
        t('howWeWork.steps.launch.details.0'),
        t('howWeWork.steps.launch.details.1'),
        t('howWeWork.steps.launch.details.2'),
        t('howWeWork.steps.launch.details.3')
      ],
      icon: '🚀'
    },
    {
      step: '05',
      title: t('howWeWork.steps.optimize.title'),
      description: t('howWeWork.steps.optimize.description'),
      details: [
        t('howWeWork.steps.optimize.details.0'),
        t('howWeWork.steps.optimize.details.1'),
        t('howWeWork.steps.optimize.details.2'),
        t('howWeWork.steps.optimize.details.3')
      ],
      icon: '📈'
    }
  ]

  const serviceApproaches = [
    {
      title: t('howWeWork.approaches.single.title'),
      description: t('howWeWork.approaches.single.description'),
      examples: [
        t('howWeWork.approaches.single.examples.0'),
        t('howWeWork.approaches.single.examples.1'),
        t('howWeWork.approaches.single.examples.2'),
        t('howWeWork.approaches.single.examples.3')
      ],
      icon: '🎯'
    },
    {
      title: t('howWeWork.approaches.integrated.title'),
      description: t('howWeWork.approaches.integrated.description'),
      examples: [
        t('howWeWork.approaches.integrated.examples.0'),
        t('howWeWork.approaches.integrated.examples.1'),
        t('howWeWork.approaches.integrated.examples.2'),
        t('howWeWork.approaches.integrated.examples.3')
      ],
      icon: '🔗'
    },
    {
      title: t('howWeWork.approaches.partnership.title'),
      description: t('howWeWork.approaches.partnership.description'),
      examples: [
        t('howWeWork.approaches.partnership.examples.0'),
        t('howWeWork.approaches.partnership.examples.1'),
        t('howWeWork.approaches.partnership.examples.2'),
        t('howWeWork.approaches.partnership.examples.3')
      ],
      icon: '🤝'
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
            {t('howWeWork.title')} <span className="text-red-500">{t('howWeWork.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            {t('howWeWork.description')}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {serviceApproaches.map((approach, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{approach.icon}</div>
                <h4 className="font-bold text-black mb-3">{approach.title}</h4>
                <p className="text-gray-600 mb-4">{approach.description}</p>
                <div className="text-sm text-gray-500">
                  {approach.examples.map((example, i) => (
                    <span key={i}>
                      {example}{i < approach.examples.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Process Steps - Using CSS classes to force layout */}
        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 process-step-container ${
                index % 2 === 1 ? 'reverse' : ''
              }`}
              style={{
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
              }}
            >
              {/* Text Content */}
              <motion.div
                variants={index % 2 === 0 ? slideInLeft : fadeInUp}
                className="flex-1 max-w-2xl"
              >
                <div className="flex items-center mb-6" style={{ flexDirection: 'row' }}>
                  <span className="text-6xl font-black text-red-500/20 mr-4">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-2">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-700" style={{ flexDirection: 'row' }}>
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Icon Card */}
              <motion.div
                variants={fadeInUp}
                className="flex-1 max-w-md"
              >
                <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-3xl p-12 text-center shadow-lg">
                  <div className="text-8xl mb-6">{step.icon}</div>
                  <div className="text-2xl font-bold text-red-500 mb-2">{t('howWeWork.stepLabel')} {step.step}</div>
                  <div className="text-lg font-semibold text-black">{step.title}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 bg-gradient-to-r from-black to-red-900 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-6">{t('howWeWork.whyWorks.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-4">🔧</div>
              <h4 className="text-xl font-semibold mb-2">{t('howWeWork.whyWorks.flexible.title')}</h4>
              <p className="text-gray-300">{t('howWeWork.whyWorks.flexible.description')}</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📋</div>
              <h4 className="text-xl font-semibold mb-2">{t('howWeWork.whyWorks.structured.title')}</h4>
              <p className="text-gray-300">{t('howWeWork.whyWorks.structured.description')}</p>
            </div>
            <div>
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-xl font-semibold mb-2">{t('howWeWork.whyWorks.collaborative.title')}</h4>
              <p className="text-gray-300">{t('howWeWork.whyWorks.collaborative.description')}</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">{t('howWeWork.whyWorks.resultsDriven.title')}</h4>
              <p className="text-gray-300">{t('howWeWork.whyWorks.resultsDriven.description')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}