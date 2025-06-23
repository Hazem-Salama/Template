'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface CareerJob {
  _id: string
  title: string
  department: string
  type: string
  location: string
  experience: string
  salary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  status: 'active' | 'inactive' | 'filled'
  posted: string
  createdBy: string
}

export default function CareersTab() {
  const [jobs, setJobs] = useState<CareerJob[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingJob, setEditingJob] = useState<CareerJob | null>(null)
  const [filter, setFilter] = useState('all')
  const [formData, setFormData] = useState({
    title: '',
    department: 'Design',
    type: 'Full-time',
    location: '',
    experience: '',
    salary: '',
    description: '',
    responsibilities: [''],
    requirements: ['']
  })

  const departments = ['Design', 'Development', 'Marketing', 'Strategy', 'Operations', 'Leadership']
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship']

  useEffect(() => {
    fetchJobs()
  }, [filter])

  const fetchJobs = async () => {
    try {
      const url = filter === 'all' ? '/api/admin/careers' : `/api/admin/careers?status=${filter}`
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const url = editingJob ? '/api/admin/careers' : '/api/admin/careers'
      const method = editingJob ? 'PUT' : 'POST'
      const payload = editingJob 
        ? { id: editingJob._id, ...formData }
        : formData

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      if (data.success) {
        await fetchJobs()
        closeModal()
        alert(editingJob ? 'Job updated successfully!' : 'Job created successfully!')
      } else {
        alert(data.error || 'Failed to save job')
      }
    } catch (error) {
      alert('Failed to save job')
    }
  }

  const handleDelete = async (jobId: string) => {
    if (!confirm('Are you sure you want to delete this job? This action cannot be undone.')) {
      return
    }

    try {
      const response = await fetch(`/api/admin/careers?id=${jobId}`, {
        method: 'DELETE'
      })

      const data = await response.json()

      if (data.success) {
        await fetchJobs()
        alert('Job deleted successfully!')
      } else {
        alert(data.error || 'Failed to delete job')
      }
    } catch (error) {
      alert('Failed to delete job')
    }
  }

  const handleStatusChange = async (jobId: string, newStatus: string) => {
    try {
      const response = await fetch('/api/admin/careers', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: jobId, status: newStatus })
      })

      const data = await response.json()

      if (data.success) {
        await fetchJobs()
        alert('Job status updated successfully!')
      } else {
        alert(data.error || 'Failed to update job status')
      }
    } catch (error) {
      alert('Failed to update job status')
    }
  }

  const openModal = (job?: CareerJob) => {
    if (job) {
      setEditingJob(job)
      setFormData({
        title: job.title,
        department: job.department,
        type: job.type,
        location: job.location,
        experience: job.experience,
        salary: job.salary,
        description: job.description,
        responsibilities: job.responsibilities,
        requirements: job.requirements
      })
    } else {
      setEditingJob(null)
      setFormData({
        title: '',
        department: 'Design',
        type: 'Full-time',
        location: '',
        experience: '',
        salary: '',
        description: '',
        responsibilities: [''],
        requirements: ['']
      })
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingJob(null)
  }

  const addField = (field: 'responsibilities' | 'requirements') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const removeField = (field: 'responsibilities' | 'requirements', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  const updateField = (field: 'responsibilities' | 'requirements', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500 text-white'
      case 'inactive': return 'bg-gray-500 text-white'
      case 'filled': return 'bg-blue-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Loading career jobs...</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">💼 Career Management</h2>
          <p className="text-gray-300">Manage job postings and career opportunities</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openModal()}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Add New Job</span>
        </motion.button>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-2 mb-6">
        {['all', 'active', 'inactive', 'filled'].map((status) => (
          <motion.button
            key={status}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
              filter === status
                ? 'bg-red-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            {status === 'all' ? 'All Jobs' : status}
          </motion.button>
        ))}
      </div>

      {/* Jobs List */}
      {jobs.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">💼</div>
          <h3 className="text-xl font-semibold text-white mb-2">No Jobs Found</h3>
          <p className="text-gray-300">
            {filter === 'all' 
              ? 'No career jobs have been created yet'
              : `No jobs with status "${filter}"`
            }
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <motion.div
              key={job._id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                      {job.department}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300 mb-3">
                    <div><strong>Type:</strong> {job.type}</div>
                    <div><strong>Location:</strong> {job.location}</div>
                    <div><strong>Experience:</strong> {job.experience}</div>
                    <div><strong>Salary:</strong> {job.salary}</div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{job.description}</p>
                  <p className="text-gray-400 text-xs">
                    Posted: {new Date(job.posted).toLocaleDateString()} • Created by: {job.createdBy}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal(job)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors"
                >
                  Edit
                </motion.button>
                
                <select
                  value={job.status}
                  onChange={(e) => handleStatusChange(job._id, e.target.value)}
                  className="bg-gray-700 text-white px-3 py-2 rounded text-sm border border-gray-600"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="filled">Filled</option>
                </select>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDelete(job._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition-colors"
                >
                  Delete
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Add/Edit Job Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl p-6 max-w-4xl w-full border border-white/20 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                {editingJob ? 'Edit Job' : 'Add New Job'}
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
                className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Job Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Senior UI/UX Designer"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Department <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    value={formData.department}
                    onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept} className="bg-gray-800">{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Job Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {jobTypes.map((type) => (
                      <option key={type} value={type} className="bg-gray-800">{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Location <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Remote / New York"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Experience Level <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 3-5 years"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Salary Range <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.salary}
                    onChange={(e) => setFormData(prev => ({ ...prev, salary: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. $80K - $120K"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Job Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Brief description of the role and what the candidate will do..."
                />
              </div>

              {/* Responsibilities */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-white font-medium">
                    Key Responsibilities <span className="text-red-400">*</span>
                  </label>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addField('responsibilities')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Add
                  </motion.button>
                </div>
                <div className="space-y-2">
                  {formData.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        required
                        value={responsibility}
                        onChange={(e) => updateField('responsibilities', index, e.target.value)}
                        className="flex-1 px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. Design user interfaces for web applications"
                      />
                      {formData.responsibilities.length > 1 && (
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => removeField('responsibilities', index)}
                          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </motion.button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-white font-medium">
                    Requirements <span className="text-red-400">*</span>
                  </label>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addField('requirements')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Add
                  </motion.button>
                </div>
                <div className="space-y-2">
                  {formData.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        required
                        value={requirement}
                        onChange={(e) => updateField('requirements', index, e.target.value)}
                        className="flex-1 px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. Bachelor's degree in Design or related field"
                      />
                      {formData.requirements.length > 1 && (
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => removeField('requirements', index)}
                          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </motion.button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex space-x-3 pt-6">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  {editingJob ? 'Update Job' : 'Create Job'}
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closeModal}
                  className="px-6 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}