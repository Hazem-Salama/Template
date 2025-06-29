'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's work environment and culture
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  content: {
    title: 'Life at Your Agency',
    subtitle: 'Get a glimpse into our daily life, work environment, and the culture that makes our team excited to create amazing work together.',
    workspacesTitle: 'Our Workspaces',
    traditionsTitle: 'Our Traditions',
    diversityTitle: 'Diversity & Inclusion',
    diversitySubtitle: 'We believe diverse teams create better work. Our commitment to inclusion means creating an environment where everyone can bring their authentic selves to work.',
    commitmentTitle: 'Our Commitment',
    commitmentText: 'We actively work to build an inclusive workplace through bias training, diverse hiring practices, employee resource groups, and creating psychological safety for all team members to thrive.'
  },
  lifeAtWork: [
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
  ],
  officeSpaces: [
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
  ],
  teamTraditions: [
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
  ],
  diversityStats: [
    { metric: 'Gender Balance', value: '52% / 48%', description: 'Women / Men on our team' },
    { metric: 'Cultural Diversity', value: '15+', description: 'Countries represented' },
    { metric: 'Experience Range', value: '1-20 years', description: 'Career experience levels' },
    { metric: 'Educational Background', value: '25+', description: 'Different degree types' }
  ]
}

export default function CareersLife() {
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
              Life at <span className="text-blue-500">{TEMPLATE_CONFIG.company.name}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {TEMPLATE_CONFIG.content.subtitle}
            </p>
          </motion.div>

          {/* Life at Work - Unified styling */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {TEMPLATE_CONFIG.lifeAtWork.map((aspect, index) => (
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
                
                <ul className="space-y-3">
                  {aspect.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Office Spaces - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-black mb-12 text-center">
              Our <span className="text-blue-500">Workspaces</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEMPLATE_CONFIG.officeSpaces.map((office, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">{office.image}</div>
                  <h4 className="text-xl font-bold text-black mb-2 text-center">{office.location}</h4>
                  <p className="text-gray-600 text-sm mb-6 text-center">{office.address}</p>
                  
                  <ul className="space-y-3">
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

          {/* Team Traditions - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-20"
          >
            <h3 className="text-3xl font-bold text-black mb-8 text-center">
              Our <span className="text-blue-500">Traditions</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TEMPLATE_CONFIG.teamTraditions.map((tradition, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-black">{tradition.tradition}</h4>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {tradition.frequency}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{tradition.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Diversity & Inclusion - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200"
          >
            <h3 className="text-3xl font-bold text-black mb-6 text-center">
              Diversity & <span className="text-blue-500">Inclusion</span>
            </h3>
            
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              {TEMPLATE_CONFIG.content.diversitySubtitle}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {TEMPLATE_CONFIG.diversityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-2">{stat.value}</div>
                  <div className="font-semibold text-black mb-1">{stat.metric}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h4 className="font-bold text-black mb-3">{TEMPLATE_CONFIG.content.commitmentTitle}</h4>
              <p className="text-gray-700 text-sm max-w-2xl mx-auto">
                {TEMPLATE_CONFIG.content.commitmentText}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CAREERS LIFE - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify life at work aspects
3. Customize office spaces and locations
4. Update team traditions
5. Adjust diversity statistics
6. Customize commitment messaging

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same grid layouts and spacing
- Unified typography scale
- Matching background gradients
- Consistent section structure

SECTIONS INCLUDED:
- Life at Work (4 aspects)
- Office Spaces (3 locations)
- Team Traditions (4 traditions)
- Diversity & Inclusion stats

Perfect for showcasing work environment and culture with unified design!
*/