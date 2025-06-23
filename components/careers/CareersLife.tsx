'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function CareersLife() {
  const lifeAtWork = [
    {
      aspect: 'Daily Rituals',
      description: 'How we start and structure our days for maximum creativity and productivity',
      highlights: [
        'Flexible start times (7am-11am)',
        'Daily standup meetings (15 min max)',
        'Focus time blocks (no meetings)',
        'Team coffee chats and walks'
      ],
      image: '☕'
    },
    {
      aspect: 'Collaboration',
      description: 'Working together across disciplines to create amazing results',
      highlights: [
        'Cross-functional project teams',
        'Weekly design critiques',
        'Brainstorming sessions',
        'Peer code reviews and feedback'
      ],
      image: '🤝'
    },
    {
      aspect: 'Learning & Growth',
      description: 'Continuous learning and skill development opportunities',
      highlights: [
        'Lunch & learn sessions',
        'Industry conference attendance',
        'Internal skill workshops',
        'Mentorship and coaching'
      ],
      image: '📚'
    },
    {
      aspect: 'Social Events',
      description: 'Building relationships and having fun together',
      highlights: [
        'Monthly team happy hours',
        'Annual company retreats',
        'Game nights and tournaments',
        'Volunteer and charity events'
      ],
      image: '🎉'
    }
  ]

  const officeSpaces = [
    {
      location: 'New York Office',
      address: '123 Creative Ave, Manhattan',
      features: [
        'Open collaborative spaces',
        'Private focus rooms',
        'Fully stocked kitchen',
        'Rooftop terrace',
        'Game room and lounge',
        'Standing desks available'
      ],
      image: '🏙️'
    },
    {
      location: 'San Francisco Studio',
      address: '456 Innovation St, SOMA',
      features: [
        'Creative workshop space',
        'Video production studio',
        'Client presentation rooms',
        'Meditation room',
        'Bike storage and shower',
        'Dog-friendly environment'
      ],
      image: '🌉'
    },
    {
      location: 'Remote Hubs',
      address: 'Coworking spaces worldwide',
      features: [
        'WeWork and similar partnerships',
        'Local meetup spaces',
        'Home office stipends',
        'Virtual collaboration tools',
        'Regular team gatherings',
        'Flexible workspace credits'
      ],
      image: '🌍'
    }
  ]

  const teamTraditions = [
    {
      tradition: 'Creative Fridays',
      description: 'Last Friday of every month dedicated to passion projects and experimentation',
      frequency: 'Monthly'
    },
    {
      tradition: 'Show & Tell',
      description: 'Team members share interesting projects, learnings, or personal interests',
      frequency: 'Bi-weekly'
    },
    {
      tradition: 'Innovation Challenges',
      description: 'Quarterly hackathons to solve client problems or internal improvements',
      frequency: 'Quarterly'
    },
    {
      tradition: 'Appreciation Awards',
      description: 'Peer nominations for outstanding work, collaboration, and team spirit',
      frequency: 'Monthly'
    }
  ]

  const diversityStats = [
    { metric: 'Gender Balance', value: '52% / 48%', description: 'Women / Men on our team' },
    { metric: 'Cultural Diversity', value: '15+', description: 'Countries represented' },
    { metric: 'Experience Range', value: '1-20 years', description: 'Career experience levels' },
    { metric: 'Educational Background', value: '25+', description: 'Different degree types' }
  ]

  return (
    <section className="py-24 bg-white">
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
              Life at <span className="text-red-500">Unlimited</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a glimpse into our daily life, work environment, and the culture that makes 
              our team excited to create amazing work together.
            </p>
          </motion.div>

          {/* Life at Work */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {lifeAtWork.map((aspect, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{aspect.image}</div>
                  <h3 className="text-xl font-bold text-black">{aspect.aspect}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{aspect.description}</p>
                
                <ul className="space-y-2">
                  {aspect.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Office Spaces */}
          <motion.div
            variants={fadeInUp}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-black mb-12 text-center">
              Our <span className="text-red-500">Workspaces</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officeSpaces.map((office, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">{office.image}</div>
                  <h4 className="text-xl font-bold text-black mb-2 text-center">{office.location}</h4>
                  <p className="text-gray-600 text-sm mb-6 text-center">{office.address}</p>
                  
                  <ul className="space-y-2">
                    {office.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Traditions */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 md:p-12 mb-20"
          >
            <h3 className="text-3xl font-bold text-black mb-8 text-center">
              Our <span className="text-red-500">Traditions</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamTraditions.map((tradition, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-black">{tradition.tradition}</h4>
                    <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">
                      {tradition.frequency}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{tradition.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Diversity & Inclusion */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200"
          >
            <h3 className="text-3xl font-bold text-black mb-6 text-center">
              Diversity & <span className="text-red-500">Inclusion</span>
            </h3>
            
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We believe diverse teams create better work. Our commitment to inclusion means 
              creating an environment where everyone can bring their authentic selves to work.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {diversityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-red-500 mb-2">{stat.value}</div>
                  <div className="font-semibold text-black mb-1">{stat.metric}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h4 className="font-bold text-black mb-3">Our Commitment</h4>
              <p className="text-gray-700 text-sm max-w-2xl mx-auto">
                We actively work to build an inclusive workplace through bias training, diverse hiring practices, 
                employee resource groups, and creating psychological safety for all team members to thrive.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}