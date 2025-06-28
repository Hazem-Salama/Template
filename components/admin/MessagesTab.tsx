'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

// Template configuration - customize for your project
const TEMPLATE_CONFIG = {
  developmentMode: true, // Set to false when implementing real API
  mockData: {
    enabled: true, // Show mock data for demonstration
    messages: [
      {
        _id: 'msg-1',
        formData: {
          firstName: 'Emily',
          lastName: 'Rodriguez',
          email: 'emily.rodriguez@startup.com',
          phone: '+1 (555) 234-5678',
          company: 'TechFlow Startup',
          projectType: 'Web Development',
          budget: '$25,000 - $35,000',
          timeline: '3-6 Months',
          message: 'Hi! We\'re a growing startup looking to completely redesign our website. We need a modern, responsive design that can handle high traffic and integrates with our existing CRM system. Can you help us with this project?',
          priority: 'high'
        },
        method: 'project-quote',
        status: 'new',
        referenceId: 'MSG-2024001',
        submittedAt: new Date().toISOString()
      },
      {
        _id: 'msg-2',
        formData: {
          firstName: 'David',
          lastName: 'Chen',
          email: 'david@digitalagency.co',
          phone: '+1 (555) 345-6789',
          company: 'Digital Marketing Co',
          projectType: 'Partnership',
          budget: 'Let\'s Discuss',
          timeline: 'Just Exploring',
          message: 'We\'re interested in exploring a potential partnership opportunity. Our agency specializes in digital marketing and we think there could be synergies with your web development services. Would love to discuss this further.',
          priority: 'normal'
        },
        method: 'partnership',
        status: 'in-progress',
        referenceId: 'MSG-2024002',
        submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
      },
              {
        _id: 'msg-3',
        formData: {
          firstName: 'Lisa',
          lastName: 'Thompson',
          email: 'lisa.thompson@retailcorp.com',
          phone: '+1 (555) 456-7890',
          company: 'Retail Corp',
          projectType: 'E-commerce Solutions',
          budget: '$50,000+',
          timeline: '1-3 Months',
          message: 'We need urgent help with our e-commerce platform. Our current system is experiencing performance issues and we\'re losing sales. We need a complete overhaul before the holiday season. Time is critical!',
          priority: 'urgent'
        },
        method: 'support',
        status: 'responded',
        referenceId: 'MSG-2024003',
        submittedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        _id: 'msg-4',
        formData: {
          firstName: 'Alex',
          lastName: 'Johnson',
          email: 'alex.johnson@freelance.com',
          phone: '+1 (555) 567-8901',
          company: 'Freelance Designer',
          projectType: 'UI/UX Design',
          budget: '$10,000 - $15,000',
          timeline: '1-3 Months',
          message: 'Hello! I\'m a freelance designer working on a client project and need some development support. The design is ready and I\'m looking for a reliable development partner. Would you be interested in collaborating?',
          priority: 'low'
        },
        method: 'general-inquiry',
        status: 'new',
        referenceId: 'MSG-2024004',
        submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
      }
    ]
  }
}

interface Message {
  _id: string
  formData: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    company?: string
    projectType?: string
    budget?: string
    timeline?: string
    message: string
    priority: string
  }
  method: string
  status: string
  referenceId: string
  submittedAt: string
}

export default function MessagesTab() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [replyMessage, setReplyMessage] = useState('')
  const [isProcessing, setIsProcessing] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchMessages()
  }, [filter])

  const fetchMessages = async () => {
    try {
      if (TEMPLATE_CONFIG.developmentMode && TEMPLATE_CONFIG.mockData.enabled) {
        // DEVELOPMENT MODE: Use mock data
        console.log('💬 DEVELOPMENT MODE: Loading mock messages...')
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay
        
        // Filter mock data based on filter
        let filteredMessages = TEMPLATE_CONFIG.mockData.messages
        if (filter !== 'all') {
          filteredMessages = TEMPLATE_CONFIG.mockData.messages.filter(msg => msg.status === filter)
        }
        setMessages(filteredMessages)
      } else {
        // PRODUCTION MODE: Real API call
        const url = filter === 'all' ? '/api/admin/messages' : `/api/admin/messages?status=${filter}`
        const response = await fetch(url)
        const data = await response.json()
        
        if (data.success) {
          setMessages(data.messages)
        } else {
          console.error('Failed to fetch messages:', data.error)
        }
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error)
      
      // Fallback to mock data on error in development
      if (TEMPLATE_CONFIG.developmentMode) {
        console.log('💬 API failed, using mock data as fallback')
        setMessages(TEMPLATE_CONFIG.mockData.messages)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleReply = async (message: Message) => {
    if (!replyMessage.trim()) {
      alert('Please enter a reply message')
      return
    }

    setIsProcessing(message._id)

    try {
      if (TEMPLATE_CONFIG.developmentMode) {
        // DEVELOPMENT MODE: Simulate API call
        console.log(`💬 DEVELOPMENT MODE: Replying to ${message.formData.firstName}`)
        console.log('Reply message:', replyMessage.trim())
        await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate processing time
        
        // Update local state
        setMessages(prev => prev.map(m => 
          m._id === message._id 
            ? { ...m, status: 'responded' }
            : m
        ))
        
        // Clear form
        setSelectedMessage(null)
        setReplyMessage('')
        
        // Show success message
        alert('✅ Reply sent successfully! (Development Mode - No real email sent)')
      } else {
        // PRODUCTION MODE: Real API call
        const response = await fetch('/api/admin/messages', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: message._id,
            status: 'responded',
            replyMessage: replyMessage.trim()
          })
        })

        const data = await response.json()

        if (data.success) {
          setMessages(prev => prev.map(m => 
            m._id === message._id 
              ? { ...m, status: 'responded' }
              : m
          ))
          
          setSelectedMessage(null)
          setReplyMessage('')
          
          alert(`Reply sent successfully!${data.emailSent ? ' Email delivered to customer.' : ''}`)
        } else {
          alert(data.error || 'Failed to send reply')
        }
      }
    } catch (error) {
      alert('Failed to send reply')
    } finally {
      setIsProcessing('')
    }
  }

  const handleDelete = async (message: Message) => {
    if (!confirm(`Are you sure you want to delete the message from ${message.formData.firstName} ${message.formData.lastName}? This action cannot be undone.`)) {
      return
    }

    setIsProcessing(message._id)

    try {
      if (TEMPLATE_CONFIG.developmentMode) {
        // DEVELOPMENT MODE: Simulate API call
        console.log(`💬 DEVELOPMENT MODE: Deleting message from ${message.formData.firstName}`)
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Remove from local state
        setMessages(prev => prev.filter(m => m._id !== message._id))
        alert('✅ Message deleted successfully! (Development Mode)')
      } else {
        // PRODUCTION MODE: Real API call
        const response = await fetch('/api/admin/messages', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: message._id })
        })

        const data = await response.json()

        if (data.success) {
          setMessages(prev => prev.filter(m => m._id !== message._id))
          alert('Message deleted successfully!')
        } else {
          alert(data.error || 'Failed to delete message')
        }
      }
    } catch (error) {
      alert('Failed to delete message')
    } finally {
      setIsProcessing('')
    }
  }

  const markAsRead = async (message: Message) => {
    if (message.status === 'new') {
      try {
        if (TEMPLATE_CONFIG.developmentMode) {
          // DEVELOPMENT MODE: Simulate marking as read
          setMessages(prev => prev.map(m => 
            m._id === message._id 
              ? { ...m, status: 'in-progress' }
              : m
          ))
        } else {
          // PRODUCTION MODE: Real API call
          await fetch('/api/admin/messages', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: message._id,
              status: 'in-progress'
            })
          })

          setMessages(prev => prev.map(m => 
            m._id === message._id 
              ? { ...m, status: 'in-progress' }
              : m
          ))
        }
      } catch (error) {
        // Silent fail for read status
      }
    }
  }

  const getMethodLabel = (method: string) => {
    const labels: Record<string, string> = {
      'general-inquiry': 'General Inquiry',
      'project-quote': 'Project Quote',
      'support': 'Support Request',
      'partnership': 'Partnership'
    }
    return labels[method] || method
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500 text-white'
      case 'high': return 'bg-orange-500 text-white'
      case 'normal': return 'bg-blue-500 text-white'
      case 'low': return 'bg-green-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-yellow-500 text-white'
      case 'in-progress': return 'bg-blue-500 text-white'
      case 'responded': return 'bg-green-500 text-white'
      case 'closed': return 'bg-gray-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Loading messages...</p>
        {TEMPLATE_CONFIG.developmentMode && (
          <p className="text-yellow-300 text-sm mt-2">🔧 Development Mode: Loading mock data...</p>
        )}
      </div>
    )
  }

  return (
    <div className="p-6">
      {/* Development Mode Banner */}
      {TEMPLATE_CONFIG.developmentMode && (
        <div className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-3 mb-6">
          <p className="text-yellow-300 text-sm">
            🔧 <strong>Development Mode:</strong> Showing mock data. Set developmentMode to false in the component to use real API.
          </p>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">💬 Messages</h2>
          <p className="text-gray-300">Respond to customer inquiries and support requests</p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex space-x-2">
          {['all', 'new', 'in-progress', 'responded'].map((status) => (
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
              {status === 'all' ? 'All' : status.replace('-', ' ')}
            </motion.button>
          ))}
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">💬</div>
          <h3 className="text-xl font-semibold text-white mb-2">No Messages</h3>
          <p className="text-gray-300">
            {filter === 'all' 
              ? 'Customer messages will appear here when they contact you'
              : `No messages with status "${filter.replace('-', ' ')}"`
            }
          </p>
          {TEMPLATE_CONFIG.developmentMode && filter === 'all' && (
            <div className="mt-4">
              <button
                onClick={() => {
                  setMessages(TEMPLATE_CONFIG.mockData.messages)
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Load Mock Data
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message._id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border cursor-pointer transition-all duration-300 ${
                message.status === 'new' 
                  ? 'border-yellow-500/50 bg-yellow-500/10' 
                  : 'border-white/20 hover:border-white/40'
              }`}
              onClick={() => markAsRead(message)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {message.formData.firstName} {message.formData.lastName}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(message.formData.priority)}`}>
                      {message.formData.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                      {message.status.replace('-', ' ')}
                    </span>
                    {message.status === 'new' && (
                      <span className="px-2 py-1 bg-yellow-500 text-white rounded-full text-xs font-medium animate-pulse">
                        New
                      </span>
                    )}
                    {TEMPLATE_CONFIG.developmentMode && (
                      <span className="px-2 py-1 bg-yellow-500 text-black rounded-full text-xs font-medium">
                        MOCK
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-1">📧 {message.formData.email}</p>
                  {message.formData.phone && (
                    <p className="text-gray-300 text-sm mb-1">📞 {message.formData.phone}</p>
                  )}
                  {message.formData.company && (
                    <p className="text-gray-300 text-sm mb-1">🏢 {message.formData.company}</p>
                  )}
                  <p className="text-gray-300 text-sm">📋 Reference: {message.referenceId}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">{getMethodLabel(message.method)}</p>
                  <p className="text-gray-300 text-sm">{formatDate(message.submittedAt)}</p>
                  {message.formData.projectType && (
                    <p className="text-gray-300 text-sm mt-1">🎯 {message.formData.projectType}</p>
                  )}
                  {message.formData.budget && (
                    <p className="text-gray-300 text-sm">💰 {message.formData.budget}</p>
                  )}
                </div>
              </div>

              {/* Message Content */}
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <h4 className="text-white font-medium mb-2">💬 Customer Message:</h4>
                <p className="text-gray-300 text-sm leading-relaxed">"{message.formData.message}"</p>
                {message.formData.timeline && (
                  <p className="text-gray-300 text-sm mt-2">⏰ Timeline: {message.formData.timeline}</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedMessage(message)
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Reply</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(message)
                    }}
                    disabled={isProcessing === message._id}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 disabled:opacity-50"
                  >
                    {isProcessing === message._id ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    )}
                    <span>Delete</span>
                  </motion.button>
                </div>

                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                  <span>Priority: {message.formData.priority}</span>
                  <span>Status: {message.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Reply Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full border border-white/20 max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-xl font-bold text-white mb-4">📧 Reply to Message</h3>
            
            {TEMPLATE_CONFIG.developmentMode && (
              <div className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-3 mb-4">
                <p className="text-yellow-300 text-sm">
                  🔧 <strong>Development Mode:</strong> Reply will be simulated. No real email will be sent.
                </p>
              </div>
            )}
            
            {/* Customer Info */}
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <h4 className="text-white font-medium mb-2">Customer Details:</h4>
              <p className="text-gray-300 text-sm">
                <strong>{selectedMessage.formData.firstName} {selectedMessage.formData.lastName}</strong> 
                ({selectedMessage.formData.email})
              </p>
              <p className="text-gray-300 text-sm">Method: {getMethodLabel(selectedMessage.method)}</p>
              <p className="text-gray-300 text-sm">Reference: {selectedMessage.referenceId}</p>
            </div>

            {/* Original Message */}
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <h4 className="text-white font-medium mb-2">Original Message:</h4>
              <p className="text-gray-300 text-sm leading-relaxed">"{selectedMessage.formData.message}"</p>
            </div>
            
            {/* Reply Form */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">
                Your Reply <span className="text-red-400">*</span>
              </label>
              <textarea
                required
                rows={6}
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="Type your response to the customer here..."
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <p className="text-gray-400 text-xs mt-2">
                {TEMPLATE_CONFIG.developmentMode 
                  ? 'This message will be simulated in development mode'
                  : 'This message will be sent directly to the customer\'s email address'
                }
              </p>
            </div>

            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleReply(selectedMessage)}
                disabled={isProcessing === selectedMessage._id || !replyMessage.trim()}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isProcessing === selectedMessage._id ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>
                      {TEMPLATE_CONFIG.developmentMode ? 'Send Reply (Dev Mode)' : 'Send Reply'}
                    </span>
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedMessage(null)
                  setReplyMessage('')
                }}
                className="px-6 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

/* 
TODO: Template Customization Guide

1. DEVELOPMENT vs PRODUCTION:
   - Set developmentMode: false when ready for production
   - Replace mock data with real API calls
   - Update API endpoints to match your backend

2. MOCK DATA CUSTOMIZATION:
   - Update TEMPLATE_CONFIG.mockData.messages with relevant examples
   - Adjust data structure to match your needs
   - Add or remove fields as necessary

3. API INTEGRATION:
   - Replace fetch('/api/admin/messages') with your actual endpoint
   - Update request/response handling for your API structure
   - Add proper error handling for your use case

4. CUSTOMIZATION OPTIONS:
   - Modify message statuses and colors
   - Update priority levels and indicators
   - Customize date/time formatting
   - Add additional message fields

5. FEATURES TO ADD:
   - Real-time updates via WebSocket
   - Message threading/conversation history
   - Advanced filtering and search
   - Bulk operations (mark as read, delete multiple)
   - Export functionality
   - Template responses

CURRENT TEMPLATE STATUS:
- ✅ Mock data for immediate demonstration
- ✅ Complete UI with all interactions
- ✅ Development mode indicators
- ✅ Error handling and fallbacks
- 🟡 Replace with real API when ready
- 🟡 Customize mock data for your use case
*/
