'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's benefits and perks
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
    currency: '$', // Update with your currency symbol
  },
  content: {
    title: 'Benefits & Perks',
    subtitle: 'We believe in taking care of our team with comprehensive benefits, professional development opportunities, and a supportive work environment.',
    workingStylesTitle: 'Flexible Working Styles',
    compensationTitle: 'Total Compensation Package'
  },
  benefits: [
    {
      category: 'Health & Wellness',
      icon: '🏥',
      items: [
        {
          title: 'Premium Health Insurance',
          description: '100% company-paid health, dental, and vision insurance'
        },
        {
          title: 'Mental Health Support',
          description: 'Free therapy sessions and mental wellness programs'
        },
        {
          title: 'Fitness Membership',
          description: '$100/month fitness and wellness allowance'
        },
        {
          title: 'Wellness Days',
          description: '4 additional wellness days off per year'
        }
      ]
    },
    {
      category: 'Professional Growth',
      icon: '📚',
      items: [
        {
          title: 'Learning Budget',
          description: '$2,000 annual budget for courses, conferences, and books'
        },
        {
          title: 'Mentorship Program',
          description: 'Paired with senior team members for career guidance'
        },
        {
          title: 'Conference Attendance',
          description: 'Attend industry conferences with company support'
        },
        {
          title: 'Internal Training',
          description: 'Regular workshops and skill-building sessions'
        }
      ]
    },
    {
      category: 'Financial Benefits',
      icon: '💰',
      items: [
        {
          title: 'Competitive Salary',
          description: 'Above-market compensation with annual reviews'
        },
        {
          title: 'Performance Bonuses',
          description: 'Quarterly and annual bonus opportunities'
        },
        {
          title: 'Equity Program',
          description: 'Company equity for all full-time employees'
        },
        {
          title: '401(k) Matching',
          description: '6% company match on retirement contributions'
        }
      ]
    },
    {
      category: 'Perks & Lifestyle',
      icon: '🎉',
      items: [
        {
          title: 'Home Office Setup',
          description: '$1,500 budget for your perfect home office'
        },
        {
          title: 'Latest Equipment',
          description: 'MacBook Pro, external monitors, and premium tools'
        },
        {
          title: 'Team Retreats',
          description: 'Annual team trips and quarterly social events'
        },
        {
          title: 'Catered Meals',
          description: 'Free lunch and snacks when working in office'
        }
      ]
    },
    {
      category: 'Family Support',
      icon: '👨‍👩‍👧‍👦',
      items: [
        {
          title: 'Parental Leave',
          description: '16 weeks paid leave for new parents'
        },
        {
          title: 'Childcare Support',
          description: '$200/month childcare assistance'
        },
        {
          title: 'Family Health Coverage',
          description: 'Health insurance for spouse and dependents'
        },
        {
          title: 'Flexible Parenting',
          description: 'Adjusted schedules for working parents'
        }
      ]
    }
  ],
  workingStyles: [
    {
      style: 'Remote First',
      description: 'Work from anywhere in the world with flexible hours',
      icon: '🌍',
      details: ['Async communication tools', 'Global team collaboration', 'Home office stipend', 'Coworking space credits']
    },
    {
      style: 'Hybrid Options',
      description: 'Combine remote work with office collaboration',
      icon: '🏢',
      details: ['Flexible office days', 'Hot desk availability', 'Team collaboration spaces', 'Social events and meetups']
    },
    {
      style: 'Results Focused',
      description: 'Focus on outcomes and impact, not hours worked',
      icon: '🎯',
      details: ['Goal-oriented approach', 'Flexible deadlines', 'Quality over quantity', 'Autonomous work environment']
    }
  ],
  compensation: {
    stats: [
      { value: '$85K+', label: 'Average Salary', note: 'Plus bonuses & equity' },
      { value: '$25K+', label: 'Benefits Value', note: 'Health, wellness, perks' },
      { value: '$3K+', label: 'Learning Budget', note: 'Equipment & development' },
      { value: 'Equity', label: 'Ownership Stake', note: 'Share in our success' }
    ],
    description: 'Our total compensation packages are designed to be competitive and rewarding, ensuring you\'re well taken care of while you help us grow.'
  }
}

export default function CareersBenefits() {
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
              Benefits & <span className="text-blue-500">Perks</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {TEMPLATE_CONFIG.content.subtitle}
            </p>
          </motion.div>

          {/* Benefits Grid - Unified styling */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {TEMPLATE_CONFIG.benefits.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-black">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-black mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Working Styles - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-3xl font-bold text-black mb-8 text-center">
              Flexible <span className="text-blue-500">Working Styles</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEMPLATE_CONFIG.workingStyles.map((style, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{style.icon}</div>
                  <h4 className="text-xl font-bold text-black mb-3">{style.style}</h4>
                  <p className="text-gray-600 mb-6">{style.description}</p>
                  <ul className="space-y-2">
                    {style.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-gray-700">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Total Compensation - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-black mb-6 text-center">
              Total Compensation <span className="text-blue-500">Package</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-8">
              {TEMPLATE_CONFIG.compensation.stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <div className="text-2xl font-bold text-blue-500 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.note}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-700 max-w-2xl mx-auto">
                {TEMPLATE_CONFIG.compensation.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CAREERS BENEFITS - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Modify benefits categories and items
3. Customize working styles options
4. Update compensation figures
5. Add/remove benefit categories
6. Adjust currency and values

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same grid layouts and spacing
- Unified typography scale
- Matching background gradients
- Consistent section structure

BENEFIT CATEGORIES INCLUDED:
- Health & Wellness
- Professional Growth
- Financial Benefits
- Perks & Lifestyle
- Family Support

WORKING STYLES:
- Remote First
- Hybrid Options
- Results Focused

Perfect for showcasing comprehensive benefits with unified design!
*/