'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's team testimonials and achievements
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  content: {
    title: 'What Our Team Says',
    subtitle: 'Hear directly from our team members about their experiences, growth, and what makes working here special.',
    growthTitle: 'Career Growth Stories',
    recognitionTitle: 'Industry Recognition',
    recognitionSubtitle: 'These recognitions reflect our commitment to creating an exceptional workplace. When you join us, you\'re joining a company that\'s recognized for putting its people first and fostering an environment where everyone can thrive.',
    promoterTitle: 'Employee Net Promoter Score',
    promoterDescription: '78% of our employees would recommend us as a great place to work'
  },
  testimonials: [
    {
      name: 'Sarah Chen',
      role: 'Senior UI/UX Designer',
      tenure: '2 years',
      image: '👩‍🎨',
      quote: 'This is the first place where I truly feel like my creativity is valued and supported. The team challenges me to think bigger while giving me the autonomy to explore innovative solutions.',
      highlight: 'Led the redesign of our biggest client\'s platform, resulting in 40% increase in user engagement'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Full Stack Developer',
      tenure: '1.5 years',
      image: '👨‍💻',
      quote: 'The learning opportunities here are incredible. From attending conferences to working with cutting-edge tech, I\'ve grown more in 18 months than I did in my previous 3 years elsewhere.',
      highlight: 'Built a new automation system that saved the company 20 hours per week'
    },
    {
      name: 'Emily Foster',
      role: 'Strategy Consultant',
      tenure: '3 years',
      image: '👩‍💼',
      quote: 'What I love most is how collaborative and supportive everyone is. When I had a family emergency, the team stepped up without hesitation. The work-life balance here is real, not just a buzzword.',
      highlight: 'Promoted to Senior Consultant and now mentors 3 junior team members'
    },
    {
      name: 'David Kim',
      role: 'Digital Marketing Specialist',
      tenure: '1 year',
      image: '👨‍📊',
      quote: 'Coming from a corporate environment, the culture shock was amazing. Here, my ideas are heard, implemented, and celebrated. The unlimited PTO policy actually works - they encourage you to take time off.',
      highlight: 'Increased client campaign performance by an average of 65% across all accounts'
    }
  ],
  careerPaths: [
    {
      person: 'Alex Thompson',
      journey: [
        { year: '2022', position: 'Junior Designer', description: 'Started as intern, converted to full-time' },
        { year: '2023', position: 'UI/UX Designer', description: 'Promoted after leading successful redesign project' },
        { year: '2024', position: 'Senior Designer', description: 'Now leads design for enterprise clients' },
        { year: '2025', position: 'Design Lead', description: 'Goal: Leading design team and strategy' }
      ],
      image: '🎨'
    },
    {
      person: 'Jordan Martinez',
      journey: [
        { year: '2021', position: 'Marketing Coordinator', description: 'Started in entry-level marketing role' },
        { year: '2022', position: 'Digital Marketing Specialist', description: 'Specialized in paid advertising and SEO' },
        { year: '2023', position: 'Senior Marketing Specialist', description: 'Manages multiple client accounts' },
        { year: '2024', position: 'Marketing Manager', description: 'Leads marketing team and strategy' }
      ],
      image: '📈'
    }
  ],
  recognitions: [
    {
      award: 'Best Places to Work',
      organization: 'Creative Industry Awards',
      year: '2024',
      description: 'Recognized for outstanding company culture and employee satisfaction'
    },
    {
      award: 'Top Employer for Innovation',
      organization: 'Tech Talent Awards',
      year: '2024',
      description: 'Honored for fostering innovation and creative problem-solving'
    },
    {
      award: 'Diversity & Inclusion Leader',
      organization: 'Business Excellence Awards',
      year: '2023',
      description: 'Acknowledged for commitment to building diverse and inclusive teams'
    }
  ],
  satisfaction: {
    nps: 78,
    metrics: [
      { score: '4.8/5', category: 'Work-Life Balance' },
      { score: '4.9/5', category: 'Team Collaboration' },
      { score: '4.7/5', category: 'Career Growth' }
    ]
  }
}

export default function CareersTestimonials() {
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
              What Our Team <span className="text-blue-500">Says</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {TEMPLATE_CONFIG.content.subtitle}
            </p>
          </motion.div>

          {/* Employee Testimonials - Unified styling */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {TEMPLATE_CONFIG.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-blue-500 text-sm">{testimonial.tenure} with us</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2">Recent Achievement:</h5>
                  <p className="text-green-700 text-sm">{testimonial.highlight}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Career Growth Stories - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 md:p-12 mb-20"
          >
            <h3 className="text-3xl font-bold text-black mb-8 text-center">
              Career <span className="text-blue-500">Growth Stories</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {TEMPLATE_CONFIG.careerPaths.map((path, index) => (
                <div key={index} className="space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{path.image}</div>
                    <h4 className="text-xl font-bold text-black">{path.person}'s Journey</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {path.journey.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-16 text-center">
                          <div className="text-sm font-medium text-blue-500">{step.year}</div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mt-2"></div>
                          {stepIndex < path.journey.length - 1 && (
                            <div className="w-px h-8 bg-gray-300 mx-auto mt-2"></div>
                          )}
                        </div>
                        <div className="ml-4 flex-1">
                          <h5 className="font-semibold text-black">{step.position}</h5>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industry Recognition - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-3xl font-bold text-black mb-8 text-center">
              Industry <span className="text-blue-500">Recognition</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {TEMPLATE_CONFIG.recognitions.map((recognition, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl mb-4">🏆</div>
                  <h4 className="font-bold text-black mb-2">{recognition.award}</h4>
                  <p className="text-blue-500 font-medium mb-2">{recognition.organization}</p>
                  <p className="text-gray-600 text-sm mb-3">{recognition.year}</p>
                  <p className="text-gray-700 text-xs">{recognition.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-black mb-4">What This Means for You</h4>
              <p className="text-gray-700 max-w-2xl mx-auto">
                {TEMPLATE_CONFIG.content.recognitionSubtitle}
              </p>
            </div>
          </motion.div>

          {/* Employee Net Promoter Score - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-gray-200"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                {TEMPLATE_CONFIG.content.promoterTitle}
              </h3>
              <div className="text-5xl font-bold text-blue-500 mb-4">{TEMPLATE_CONFIG.satisfaction.nps}</div>
              <p className="text-gray-600 mb-6">
                {TEMPLATE_CONFIG.content.promoterDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TEMPLATE_CONFIG.satisfaction.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">{metric.score}</div>
                    <div className="text-gray-600 text-sm">{metric.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CAREERS TESTIMONIALS - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Replace testimonials with real employee quotes
3. Customize career growth paths
4. Update industry recognitions
5. Adjust satisfaction metrics
6. Modify achievement highlights

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same grid layouts and spacing
- Unified typography scale
- Matching background gradients
- Consistent section structure

SECTIONS INCLUDED:
- Employee testimonials (4 examples)
- Career growth stories (2 paths)
- Industry recognitions (3 awards)
- Employee satisfaction metrics

Perfect for showcasing team experiences and company culture with unified design!
*/