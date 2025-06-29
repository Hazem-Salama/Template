'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's job openings and application process
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
  },
  content: {
    title: 'Open Positions',
    subtitle: 'Ready to join our team? Explore our current openings and find the perfect role to grow your career with us.',
    noJobsTitle: 'No openings available right now',
    noJobsSubtitle: 'Check back soon or explore other departments. We\'re always growing!',
    noDeptJobsTitle: 'No openings in {department} right now',
    generalAppTitle: 'Don\'t See Your Perfect Role?',
    generalAppSubtitle: 'We\'re always looking for exceptional talent. Send us your resume and tell us how you\'d like to contribute to our team.',
    generalAppCTA: 'Submit General Application'
  },
  departments: ['all', 'Design', 'Development', 'Marketing', 'Strategy', 'Operations', 'Leadership'],
  api: {
    careersEndpoint: '/api/careers', // Update with your careers API endpoint
  },
  contact: {
    baseUrl: '/contact', // Update with your contact page URL
    applicationUrl: '/contact?type=application' // Update with your application page URL
  }
}

interface Job {
  id: string
  title: string
  department: string
  type: string
  location: string
  experience: string
  salary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  posted: string
}

export default function CareersOpenings() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')

  useEffect(() => {
    fetchJobs()
  }, [selectedDepartment])

  const fetchJobs = async () => {
    try {
      const url = selectedDepartment === 'all' 
        ? TEMPLATE_CONFIG.api.careersEndpoint
        : `${TEMPLATE_CONFIG.api.careersEndpoint}?department=${selectedDepartment}`
      
      const response = await fetch(url)
      const data = await response.json()
      
      if (data.success) {
        setJobs(data.jobs)
      }
    } catch (error) {
      console.error('Failed to fetch jobs:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 14) return '1 week ago'
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    return date.toLocaleDateString()
  }

  const handleApplyClick = (jobTitle?: string) => {
    const url = jobTitle 
      ? `${TEMPLATE_CONFIG.contact.applicationUrl}&position=${encodeURIComponent(jobTitle)}`
      : TEMPLATE_CONFIG.contact.applicationUrl
    window.location.href = url
  }

  if (isLoading) {
    return (
      <section id="open-positions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading career opportunities...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="open-positions" className="py-24 bg-white">
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
              Open <span className="text-blue-500">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {TEMPLATE_CONFIG.content.subtitle}
            </p>
          </motion.div>

          {/* Department Filter - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {TEMPLATE_CONFIG.departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </motion.div>

          {/* Job Listings */}
          {jobs.length === 0 ? (
            <motion.div
              variants={fadeInUp}
              className="text-center py-12"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {selectedDepartment === 'all' 
                  ? TEMPLATE_CONFIG.content.noJobsTitle
                  : TEMPLATE_CONFIG.content.noDeptJobsTitle.replace('{department}', selectedDepartment)
                }
              </h3>
              <p className="text-gray-600">
                {TEMPLATE_CONFIG.content.noJobsSubtitle}
              </p>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold text-black mr-4">{job.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-gray-600">Type:</span>
                          <div className="font-medium text-black">{job.type}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Location:</span>
                          <div className="font-medium text-black">{job.location}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Experience:</span>
                          <div className="font-medium text-black">{job.experience}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Salary:</span>
                          <div className="font-medium text-green-600">{job.salary}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">{job.description}</p>
                    </div>
                    
                    <div className="lg:ml-8 mt-6 lg:mt-0">
                      <div className="text-sm text-gray-500 mb-4">Posted {formatDate(job.posted)}</div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                        onClick={() => handleApplyClick(job.title)}
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <details className="group">
                    <summary className="cursor-pointer text-blue-500 font-medium hover:text-blue-600 transition-colors">
                      View Details
                    </summary>
                    
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-black mb-4">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-black mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((requirement, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Don't See Your Role CTA - Unified styling */}
          <motion.div
            variants={fadeInUp}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-black mb-4">
                  {TEMPLATE_CONFIG.content.generalAppTitle}
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  {TEMPLATE_CONFIG.content.generalAppSubtitle}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
                  onClick={() => handleApplyClick()}
                >
                  {TEMPLATE_CONFIG.content.generalAppCTA}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* 
🎯 UNIFIED CAREERS OPENINGS - TEMPLATE READY

FEATURES:
✅ Unified styling with about/branding components
✅ Blue color scheme consistency (blue-500/blue-600)
✅ Same card design and hover effects
✅ Consistent shadow and spacing
✅ Template-ready configuration
✅ Dynamic job loading from API
✅ Department filtering
✅ Expandable job details

CUSTOMIZATION:
1. Update TEMPLATE_CONFIG with your details
2. Configure API endpoints
3. Modify department categories
4. Customize application URLs
5. Update content messaging
6. Adjust job detail fields

UNIFIED ELEMENTS:
- Blue accent color (blue-500/blue-600)
- Consistent card styling and shadows
- Same loading states and animations
- Unified button styling
- Matching typography and spacing
- Consistent background gradients

API INTEGRATION:
- Fetches jobs from careers endpoint
- Supports department filtering
- Shows loading states
- Handles empty states gracefully
- Date formatting utilities

FEATURES INCLUDED:
- Department filter tabs
- Job cards with key details
- Expandable responsibilities/requirements
- Apply now CTAs
- General application fallback
- Posted date formatting

Perfect for showcasing job openings with unified design and full functionality!
*/