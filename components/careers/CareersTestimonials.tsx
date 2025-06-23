'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function CareersTestimonials() {
  const testimonials = [
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
  ]

  const careerPaths = [
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
  ]

  const recognitions = [
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
              What Our Team <span className="text-red-500">Says</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our team members about their experiences, growth, 
              and what makes working here special.
            </p>
          </motion.div>

          {/* Employee Testimonials */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {testimonials.map((testimonial, index) => (
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
                    <p className="text-red-500 text-sm">{testimonial.tenure} with us</p>
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

          {/* Career Growth Stories */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 md:p-12 mb-20"
          >
            <h3 className="text-3xl font-bold text-black mb-8 text-center">
              Career <span className="text-red-500">Growth Stories</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {careerPaths.map((path, index) => (
                <div key={index} className="space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{path.image}</div>
                    <h4 className="text-xl font-bold text-black">{path.person}'s Journey</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {path.journey.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-16 text-center">
                          <div className="text-sm font-medium text-red-500">{step.year}</div>
                          <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mt-2"></div>
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

          {/* Industry Recognition */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-black mb-8 text-center">
              Industry <span className="text-red-500">Recognition</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {recognitions.map((recognition, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl mb-4">🏆</div>
                  <h4 className="font-bold text-black mb-2">{recognition.award}</h4>
                  <p className="text-red-500 font-medium mb-2">{recognition.organization}</p>
                  <p className="text-gray-600 text-sm mb-3">{recognition.year}</p>
                  <p className="text-gray-700 text-xs">{recognition.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-black mb-4">What This Means for You</h4>
              <p className="text-gray-700 max-w-2xl mx-auto">
                These recognitions reflect our commitment to creating an exceptional workplace. 
                When you join us, you're joining a company that's recognized for putting its people first 
                and fostering an environment where everyone can thrive.
              </p>
            </div>
          </motion.div>

          {/* Employee Net Promoter Score */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 bg-white rounded-2xl p-8 border border-gray-200"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Employee Net Promoter Score
              </h3>
              <div className="text-5xl font-bold text-red-500 mb-4">78</div>
              <p className="text-gray-600 mb-6">
                78% of our employees would recommend us as a great place to work
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">4.8/5</div>
                  <div className="text-gray-600 text-sm">Work-Life Balance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">4.9/5</div>
                  <div className="text-gray-600 text-sm">Team Collaboration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">4.7/5</div>
                  <div className="text-gray-600 text-sm">Career Growth</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}