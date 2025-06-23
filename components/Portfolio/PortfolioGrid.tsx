'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import PortfolioFilter from './PortfolioFilter'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  client: string
  year: string
  results: string[]
  link?: string
}

// Template categories - customize for your services
const categories = [
  'All Projects',
  'Branding',
  'Web Design',
  'Mobile Apps',
  'Marketing',
  'E-commerce'
]

// Template projects - replace with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Finance App',
    category: 'Mobile Apps',
    description: 'A sleek and intuitive mobile banking application with advanced security features and user-friendly interface design.',
    image: '/project-1.jpg', // Replace with actual image paths
    tags: ['React Native', 'UI/UX Design', 'Mobile Development'],
    client: 'FinTech Solutions Inc.',
    year: '2024',
    results: [
      '40% increase in user engagement',
      '25% faster transaction processing',
      '95% user satisfaction rating'
    ],
    link: 'https://example.com'
  },
  {
    id: 2,
    title: 'Creative Agency Website',
    category: 'Web Design',
    description: 'A stunning portfolio website showcasing creative work with smooth animations and responsive design.',
    image: '/project-2.jpg',
    tags: ['Next.js', 'Framer Motion', 'Responsive Design'],
    client: 'Creative Studio',
    year: '2024',
    results: [
      '60% increase in leads',
      '50% better page load speed',
      '30% higher conversion rate'
    ],
    link: 'https://example.com'
  },
  {
    id: 3,
    title: 'Service Marketplace App',
    category: 'Mobile Apps',
    description: 'A comprehensive marketplace connecting service providers with customers through an intuitive mobile platform.',
    image: '/project-3.jpg',
    tags: ['Flutter', 'Backend API', 'Payment Integration'],
    client: 'ServiceHub',
    year: '2024',
    results: [
      '200% growth in bookings',
      '45% improvement in user retention',
      '99.9% platform uptime'
    ]
  },
  {
    id: 4,
    title: 'E-commerce Brand Identity',
    category: 'Branding',
    description: 'Complete brand identity design for a sustainable fashion e-commerce platform.',
    image: '/project-4.jpg',
    tags: ['Brand Design', 'Logo Design', 'Visual Identity'],
    client: 'EcoFashion Co.',
    year: '2023',
    results: [
      '80% brand recognition increase',
      '35% sales growth after rebrand',
      '90% positive customer feedback'
    ]
  },
  {
    id: 5,
    title: 'Digital Marketing Campaign',
    category: 'Marketing',
    description: 'Multi-channel digital marketing campaign that drove significant growth for a B2B SaaS company.',
    image: '/project-5.jpg',
    tags: ['Social Media', 'PPC Advertising', 'Content Strategy'],
    client: 'TechSaaS Ltd.',
    year: '2023',
    results: [
      '150% increase in qualified leads',
      '45% reduction in cost per acquisition',
      '300% growth in social engagement'
    ]
  },
  {
    id: 6,
    title: 'Online Store Platform',
    category: 'E-commerce',
    description: 'Custom e-commerce platform with advanced inventory management and seamless checkout experience.',
    image: '/project-6.jpg',
    tags: ['Shopify', 'Custom Development', 'Payment Systems'],
    client: 'RetailPro',
    year: '2023',
    results: [
      '120% increase in online sales',
      '40% improvement in checkout completion',
      '25% reduction in cart abandonment'
    ]
  }
]

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All Projects')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({})

  const filteredProjects = activeCategory === 'All Projects'
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [projectId]: true
    }))
  }

  return (
    <section id="portfolio-grid" className="py-24 bg-white">
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
            Featured <span className="text-blue-500">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Discover how we've helped businesses achieve their goals through innovative design and strategic thinking.
          </motion.p>

          {/* Filter */}
          <PortfolioFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 relative">
                    {!imageErrors[project.id] ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={() => handleImageError(project.id)}
                        priority={index < 3}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl text-gray-400 mb-2">🎨</div>
                          <p className="text-sm text-gray-500">Project Image</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* View Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        +{project.tags.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      Client: {project.client}
                    </span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="text-blue-500 text-sm font-medium"
                    >
                      View Details →
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-8 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-black mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-600">
                        {selectedProject.client} • {selectedProject.year}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  {/* Project Image */}
                  <div className="w-full h-64 relative rounded-2xl overflow-hidden mb-8">
                    {!imageErrors[selectedProject.id] ? (
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(selectedProject.id)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl text-gray-400 mb-2">🎨</div>
                          <p className="text-gray-500">Project Image</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Project Details */}
                    <div>
                      <h3 className="text-xl font-bold text-black mb-4">
                        Project Overview
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {selectedProject.description}
                      </p>
                      
                      <h4 className="font-bold text-black mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {selectedProject.link && (
                        <motion.a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                        >
                          Visit Live Site
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-xl font-bold text-black mb-4">
                        Results Achieved
                      </h3>
                      <div className="space-y-4">
                        {selectedProject.results.map((result, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 mr-3"></div>
                            <p className="text-gray-600">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}