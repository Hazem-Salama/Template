'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Tab Components
import BookedCallsTab from '@/components/admin/BookedCallsTab'
import MessagesTab from '@/components/admin/MessagesTab'
import MeetingsTab from '@/components/admin/MeetingsTab'
import CareersTab from '@/components/admin/CareersTab'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('booked-calls')
  const [admin, setAdmin] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      // Try to fetch some protected data to verify auth
      const response = await fetch('/api/admin/bookings?limit=1')
      if (response.status === 401) {
        router.push('/admin/login')
        return
      }
      setAdmin({ username: 'admin' }) // Set basic admin info
    } catch (error) {
      router.push('/admin/login')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      // Force redirect even if logout fails
      router.push('/admin/login')
    }
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    // Force reload the entire page to refresh all data
    window.location.reload()
  }

  const tabs = [
    {
      id: 'booked-calls',
      name: 'Booked Calls',
      icon: '📞',
      description: 'Approve or decline call bookings'
    },
    {
      id: 'messages',
      name: 'Messages',
      icon: '💬',
      description: 'Respond to contact form messages'
    },
    {
      id: 'meetings',
      name: 'Meetings',
      icon: '📅',
      description: 'View upcoming meetings'
    },
    {
      id: 'careers',
      name: 'Careers',
      icon: '💼',
      description: 'Manage job postings'
    }
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-12 h-12 border-3 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="admin-header relative z-20 bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Title */}
            <div className="flex items-center space-x-4">
              <div className="text-2xl">🔧</div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-gray-300 text-sm">Unlimited Creative Agency</p>
              </div>
            </div>

            {/* User Info & Actions */}
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-white font-medium">Welcome, {admin?.username}</p>
                <p className="text-gray-300 text-sm">Administrator</p>
              </div>
              
              {/* Refresh Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors flex items-center space-x-2 shadow-lg disabled:opacity-50"
                title="Refresh Dashboard"
              >
                <svg 
                  className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                  />
                </svg>
                <span className="hidden sm:inline">
                  {isRefreshing ? 'Refreshing...' : 'Refresh'}
                </span>
              </motion.button>

              {/* Logout Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">Logout</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Tab Navigation */}
          <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-3 lg:p-4 rounded-xl transition-all duration-300 text-left ${
                    activeTab === tab.id
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-3 space-y-1 lg:space-y-0">
                    <span className="text-xl lg:text-2xl">{tab.icon}</span>
                    <div className="text-center lg:text-left">
                      <h3 className="font-semibold text-sm lg:text-base">{tab.name}</h3>
                      <p className={`text-xs hidden lg:block ${activeTab === tab.id ? 'text-red-100' : 'text-gray-400'}`}>
                        {tab.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 min-h-[600px]"
          >
            {activeTab === 'booked-calls' && <BookedCallsTab />}
            {activeTab === 'messages' && <MessagesTab />}
            {activeTab === 'meetings' && <MeetingsTab />}
            {activeTab === 'careers' && <CareersTab />}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}