'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
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

export default function PortfolioGrid() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const categories = [
    t('portfolio.categories.all'),
    t('portfolio.categories.branding'),
    t('portfolio.categories.web'),
    t('portfolio.categories.mobile'),
    t('portfolio.categories.marketing'),
    t('portfolio.categories.ecommerce')
  ]

  const [activeCategory, setActiveCategory] = useState(t('portfolio.categories.all'))
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({})

  const projects: Project[] = [
    {
      id: 1,
      title: t('portfolioGrid.projects.finflow.title'),
      category: t('portfolio.categories.uiux'),
      description: t('portfolioGrid.projects.finflow.description'),
      image: '/Cover FinFlow.jpg',
      tags: [
        t('portfolioGrid.projects.finflow.tags.0'),
        t('portfolioGrid.projects.finflow.tags.1'),
        t('portfolioGrid.projects.finflow.tags.2')
      ],
      client: 'TechStart Inc.',
      year: '2024',
      results: [
        t('portfolioGrid.projects.finflow.results.0'),
        t('portfolioGrid.projects.finflow.results.1'),
        t('portfolioGrid.projects.finflow.results.2')
      ],
      link: ''
    },
    {
      id: 2,
      title: t('portfolioGrid.projects.unlimited.title'),
      category: t('portfolio.categories.web'),
      description: t('portfolioGrid.projects.unlimited.description'),
      image: '/Unlimited.jpg',
      tags: [
        t('portfolioGrid.projects.unlimited.tags.0'),
        t('portfolioGrid.projects.unlimited.tags.1'),
        t('portfolioGrid.projects.unlimited.tags.2')
      ],
      client: 'Unlimited Creative Solutions',
      year: '2024',
      results: [
        t('portfolioGrid.projects.unlimited.results.0'),
        t('portfolioGrid.projects.unlimited.results.1'),
        t('portfolioGrid.projects.unlimited.results.2')
      ],
      link: ''
    },
    {
      id: 3,
      title: t('portfolioGrid.projects.fixtra.title'),
      category: t('portfolio.categories.mobile'),
      description: t('portfolioGrid.projects.fixtra.description'),
      image: '/Fixtra.jpg',
      tags: [
        t('portfolioGrid.projects.fixtra.tags.0'),
        t('portfolioGrid.projects.fixtra.tags.1'),
        t('portfolioGrid.projects.fixtra.tags.2')
      ],
      client: 'Fixtra',
      year: '2024',
      results: [
        t('portfolioGrid.projects.fixtra.results.0'),
        t('portfolioGrid.projects.fixtra.results.1'),
        t('portfolioGrid.projects.fixtra.results.2')
      ]
    }
  ]

  const filteredProjects = activeCategory === t('portfolio.categories.all')
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
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-4xl md:text-5xl font-bold text-black mb-6 ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('portfolio.featuredProjects')} <span className="text-red-500">{t('portfolioGrid.projectsTitle')}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-xl text-gray-600 max-w-3xl mx-auto mb-12 ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('portfolio.projectsDescription')}
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
                dir={isRTL ? 'rtl' : 'ltr'}
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
                        priority={index < 3} // Prioritize first 3 images
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl text-gray-400 mb-2">🎨</div>
                          <p className={`text-sm text-gray-500 ${isRTL ? 'font-arabic' : ''}`}>
                            {t('portfolioGrid.imageNotFound')}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* View Icon */}
                    <div className={`absolute top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isRTL ? 'left-4' : 'right-4'
                    }`}>
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
                  <div className={`flex items-center justify-between mb-3 ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}>
                    <span className={`px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full ${
                      isRTL ? 'font-arabic' : ''
                    }`}>
                      {project.category}
                    </span>
                    <span className={`text-gray-500 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold text-black mb-3 group-hover:text-red-500 transition-colors duration-300 ${
                    isRTL ? 'font-arabic text-right' : ''
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-gray-600 mb-4 leading-relaxed line-clamp-3 ${
                    isRTL ? 'font-arabic text-right' : ''
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 mb-4 ${
                    isRTL ? 'justify-end' : ''
                  }`}>
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md ${
                          isRTL ? 'font-arabic' : ''
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className={`px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md ${
                        isRTL ? 'font-arabic' : ''
                      }`}>
                        +{project.tags.length - 2} {t('portfolioGrid.more')}
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center justify-between ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}>
                    <span className={`text-gray-500 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                      {t('portfolio.client')}: {project.client}
                    </span>
                    <motion.div
                      whileHover={{ x: isRTL ? -4 : 4 }}
                      className={`text-red-500 text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}
                    >
                      {t('portfolio.viewDetails')} {isRTL ? '←' : '→'}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal - Enhanced for video support */}
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
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {/* Modal Header */}
                <div className="p-8 border-b border-gray-200">
                  <div className={`flex items-center justify-between ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}>
                    <div className={isRTL ? 'text-right' : ''}>
                      <h2 className={`text-3xl font-bold text-black mb-2 ${
                        isRTL ? 'font-arabic' : ''
                      }`}>
                        {selectedProject.title}
                      </h2>
                      <p className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
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
                          <p className={`text-gray-500 ${isRTL ? 'font-arabic' : ''}`}>
                            {t('portfolioGrid.imageNotFound')}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Project Details */}
                    <div className={isRTL ? 'text-right' : ''}>
                      <h3 className={`text-xl font-bold text-black mb-4 ${
                        isRTL ? 'font-arabic' : ''
                      }`}>
                        {t('portfolio.projectOverview')}
                      </h3>
                      <p className={`text-gray-600 mb-6 leading-relaxed ${
                        isRTL ? 'font-arabic' : ''
                      }`}>
                        {selectedProject.description}
                      </p>
                      
                      <h4 className={`font-bold text-black mb-3 ${
                        isRTL ? 'font-arabic' : ''
                      }`}>
                        {t('portfolio.technologiesUsed')}:
                      </h4>
                      <div className={`flex flex-wrap gap-2 mb-6 ${
                        isRTL ? 'justify-end' : ''
                      }`}>
                        {selectedProject.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full ${
                              isRTL ? 'font-arabic' : ''
                            }`}
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
                          className={`inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors ${
                            isRTL ? 'font-arabic flex-row-reverse' : ''
                          }`}
                        >
                          {t('portfolio.visitLiveSite')}
                          <svg className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}
                    </div>

                    {/* Results */}
                    <div className={isRTL ? 'text-right' : ''}>
                      <h3 className={`text-xl font-bold text-black mb-4 ${
                        isRTL ? 'font-arabic' : ''
                      }`}>
                        {t('portfolio.resultsAchieved')}
                      </h3>
                      <div className="space-y-4">
                        {selectedProject.results.map((result, index) => (
                          <div key={index} className={`flex items-start ${
                            isRTL ? 'flex-row-reverse' : ''
                          }`}>
                            <div className={`w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 ${
                              isRTL ? 'ml-3' : 'mr-3'
                            }`}></div>
                            <p className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                              {result}
                            </p>
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