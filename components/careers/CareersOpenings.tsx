'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

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

  const departments = ['all', 'Design', 'Development', 'Marketing', 'Strategy', 'Operations', 'Leadership']

  useEffect(() => {
    fetchJobs()
  }, [selectedDepartment])

  const fetchJobs = async () => {
    try {
      const url = selectedDepartment === 'all' 
        ? '/api/careers' 
        : `/api/careers?department=${selectedDepartment}`
      
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

  if (isLoading) {
    return (
      <section id="open-positions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
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
              Open <span className="text-red-500">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join our team? Explore our current openings and find the perfect 
              role to grow your career with us.
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-red-500 text-white'
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
                  ? 'No openings available right now' 
                  : `No openings in ${selectedDepartment} right now`
                }
              </h3>
              <p className="text-gray-600">
                Check back soon or explore other departments. We're always growing!
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
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
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
                      <motion.a
                        href="/Contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                      >
                        Apply Now
                      </motion.a>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <details className="group">
                    <summary className="cursor-pointer text-red-500 font-medium hover:text-red-600 transition-colors">
                      View Details
                    </summary>
                    
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-black mb-4">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
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

          {/* Don't See Your Role CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-black mb-4">
                Don't See Your Perfect Role?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're always looking for exceptional talent. Send us your resume and tell us 
                how you'd like to contribute to our team.
              </p>
              <motion.a
                href="/Contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              >
                Submit General Application
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}