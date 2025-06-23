'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function DigitalMarketingProcess() {
  const processSteps = [
    {
      step: '01',
      title: 'Research & Strategy',
      description: 'Deep dive into your market, competitors, and target audience to create a winning strategy.',
      activities: [
        'Market research & competitor analysis',
        'Target audience identification & personas',
        'Platform selection & strategy development',
        'Goal setting & KPI definition'
      ],
      deliverable: 'Comprehensive marketing strategy document',
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Content Planning & Creation',
      description: 'Develop engaging content that resonates with your audience across all platforms.',
      activities: [
        'Content calendar development',
        'Visual content creation (photos/videos)',
        'Copywriting & messaging development',
        'Brand voice & tone establishment'
      ],
      deliverable: 'Content calendar & creative assets',
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Campaign Setup & Launch',
      description: 'Set up and launch campaigns across selected platforms with proper tracking.',
      activities: [
        'Social media account optimization',
        'Advertising campaign setup',
        'Tracking & analytics implementation',
        'Initial content publishing'
      ],
      deliverable: 'Live campaigns & tracking systems',
      duration: '1-2 weeks',
      icon: '🚀'
    },
    {
      step: '04',
      title: 'Execution & Management',
      description: 'Daily management of campaigns, content publishing, and community engagement.',
      activities: [
        'Daily content posting & scheduling',
        'Community management & engagement',
        'Ad campaign monitoring & optimization',
        'Performance tracking & reporting'
      ],
      deliverable: 'Ongoing campaign management',
      duration: 'Ongoing',
      icon: '⚙️'
    },
    {
      step: '05',
      title: 'Analysis & Optimization',
      description: 'Continuous analysis and optimization based on performance data and insights.',
      activities: [
        'Performance data analysis',
        'A/B testing & optimization',
        'Strategy refinement & adjustments',
        'ROI analysis & reporting'
      ],
      deliverable: 'Monthly performance reports',
      duration: 'Monthly',
      icon: '📊'
    },
    {
      step: '06',
      title: 'Scale & Growth',
      description: 'Scale successful campaigns and explore new opportunities for growth.',
      activities: [
        'Successful campaign scaling',
        'New platform exploration',
        'Advanced targeting & retargeting',
        'Long-term strategy development'
      ],
      deliverable: 'Growth strategy & expanded campaigns',
      duration: 'Quarterly',
      icon: '📈'
    }
  ]

  const marketingFeatures = [
    {
      icon: '🎯',
      title: 'Data-Driven Approach',
      description: 'Every decision backed by analytics and performance data for optimal results.'
    },
    {
      icon: '🎨',
      title: 'Creative Excellence',
      description: 'Eye-catching visuals and compelling content that stops the scroll.'
    },
    {
      icon: '⚡',
      title: 'Real-Time Optimization',
      description: 'Continuous monitoring and adjustment for maximum campaign performance.'
    },
    {
      icon: '📱',
      title: 'Multi-Platform Expertise',
      description: 'Native understanding of each platform\'s unique audience and algorithms.'
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
            Our Marketing <span className="text-red-500">Process</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A proven 6-step methodology that ensures your digital marketing campaigns 
            deliver maximum ROI and sustainable business growth.
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

        {/* Marketing Features */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Why Our Marketing Approach Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our data-driven methodology combined with creative excellence ensures 
              every campaign delivers measurable results and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingFeatures.map((feature, index) => (
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

        {/* Results & ROI Summary */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-black to-red-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Dominate Digital Marketing?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our comprehensive digital marketing approach typically delivers results within 
              30-60 days, with significant ROI improvements in the first quarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="text-xl font-semibold mb-2">Quick Results</h4>
              <p className="text-gray-300">See improvements within 30-60 days</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="text-xl font-semibold mb-2">High ROI</h4>
              <p className="text-gray-300">Average 500% return on investment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="text-xl font-semibold mb-2">Full Transparency</h4>
              <p className="text-gray-300">Detailed monthly reports & analytics</p>
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              onClick={() => window.location.href = '/contact?service=digital-marketing'}
            >
              Launch Your Marketing Campaign
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}