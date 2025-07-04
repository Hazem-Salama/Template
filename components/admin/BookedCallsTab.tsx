'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

// Template configuration - customize for your project
const TEMPLATE_CONFIG = {
  developmentMode: true, // Set to false when implementing real API
  mockData: {
    enabled: true, // Show mock data for demonstration
    bookings: [
      {
        _id: 'mock-1',
        formData: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phone: '+1 (555) 123-4567',
          company: 'Tech Startup Inc.',
          projectType: 'Web Development',
          message: 'We need a modern website for our startup. Looking for a complete redesign with focus on user experience and mobile responsiveness.',
          preferredDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          preferredTime: '2:00 PM',
          timeZone: 'EST (Eastern)',
          urgency: 'high'
        },
        callInfo: {
          title: 'Strategy Call',
          duration: '45 minutes'
        },
        status: 'pending',
        referenceId: 'CALL-2024001',
        submittedAt: new Date().toISOString(),
        meetingUrl: undefined as string | undefined
      },
      {
        _id: 'mock-2',
        formData: {
          firstName: 'Sarah',
          lastName: 'Johnson',
          email: 'sarah@designstudio.com',
          phone: '+1 (555) 987-6543',
          company: 'Design Studio',
          projectType: 'UI/UX Design',
          message: 'Looking for consultation on improving our current app design. Need expert advice on user flow and interface optimization.',
          preferredDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          preferredTime: '10:30 AM',
          timeZone: 'PST (Pacific)',
          urgency: 'normal'
        },
        callInfo: {
          title: 'Discovery Call',
          duration: '30 minutes'
        },
        status: 'confirmed',
        referenceId: 'CALL-2024002',
        submittedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        meetingUrl: 'https://meet.google.com/mock-meeting-link'
      },
      {
        _id: 'mock-3',
        formData: {
          firstName: 'Mike',
          lastName: 'Wilson',
          email: 'mike.wilson@corp.com',
          phone: '+1 (555) 456-7890',
          company: 'Corporate Solutions',
          projectType: 'Digital Marketing',
          message: 'Need comprehensive digital marketing strategy for Q2. Looking to increase online presence and lead generation.',
          preferredDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          preferredTime: '4:00 PM',
          timeZone: 'CST (Central)',
          urgency: 'low'
        },
        callInfo: {
          title: 'Consultation',
          duration: '60 minutes'
        },
        status: 'cancelled',
        referenceId: 'CALL-2024003',
        submittedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        meetingUrl: undefined as string | undefined
      }
    ]
  }
}

interface Booking {
  _id: string
  formData: {
    firstName: string
    lastName: string
    email: string
    phone: string
    company?: string
    projectType?: string
    message: string
    preferredDate: string
    preferredTime: string
    timeZone: string
    urgency: string
  }
  callInfo: {
    title: string
    duration: string
  }
  status: string
  referenceId: string
  submittedAt: string
  meetingUrl?: string | undefined // Fixed: Allow undefined
}

export default function BookedCallsTab() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [meetingUrl, setMeetingUrl] = useState('')
  const [isProcessing, setIsProcessing] = useState('')

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      if (TEMPLATE_CONFIG.developmentMode && TEMPLATE_CONFIG.mockData.enabled) {
        // DEVELOPMENT MODE: Use mock data
        console.log('📞 DEVELOPMENT MODE: Loading mock bookings...')
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay
        setBookings(TEMPLATE_CONFIG.mockData.bookings as Booking[]) // Fixed: Type assertion
      } else {
        // PRODUCTION MODE: Real API call
        const response = await fetch('/api/admin/bookings')
        const data = await response.json()
        
        if (data.success) {
          setBookings(data.bookings)
        } else {
          console.error('Failed to fetch bookings:', data.error)
        }
      }
    } catch (error) {
      console.error('Failed to fetch bookings:', error)
      
      // Fallback to mock data on error in development
      if (TEMPLATE_CONFIG.developmentMode) {
        console.log('📞 API failed, using mock data as fallback')
        setBookings(TEMPLATE_CONFIG.mockData.bookings as Booking[]) // Fixed: Type assertion
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleAction = async (booking: Booking, action: 'approve' | 'decline') => {
    if (action === 'approve' && !meetingUrl.trim()) {
      alert('Please enter a meeting URL before approving')
      return
    }

    setIsProcessing(booking._id)

    try {
      if (TEMPLATE_CONFIG.developmentMode) {
        // DEVELOPMENT MODE: Simulate API call
        console.log(`📞 DEVELOPMENT MODE: ${action}ing booking for ${booking.formData.firstName}`)
        await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate processing time
        
        // Update local state
        setBookings(prev => prev.map(b => 
          b._id === booking._id 
            ? { 
                ...b, 
                status: action === 'approve' ? 'confirmed' : 'cancelled', 
                meetingUrl: action === 'approve' ? meetingUrl : undefined 
              }
            : b
        ))
        
        // Clear form
        setSelectedBooking(null)
        setMeetingUrl('')
        
        // Show success message
        alert(`✅ Booking ${action === 'approve' ? 'approved' : 'declined'} successfully! (Development Mode - No real email sent)`)
      } else {
        // PRODUCTION MODE: Real API call
        const response = await fetch('/api/admin/bookings', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: booking._id,
            action,
            status: action === 'approve' ? 'confirmed' : 'cancelled',
            meetingUrl: action === 'approve' ? meetingUrl : undefined
          })
        })

        const data = await response.json()

        if (data.success) {
          setBookings(prev => prev.map(b => 
            b._id === booking._id 
              ? { ...b, status: action === 'approve' ? 'confirmed' : 'cancelled', meetingUrl: action === 'approve' ? meetingUrl : undefined }
              : b
          ))
          
          setSelectedBooking(null)
          setMeetingUrl('')
          
          alert(`Booking ${action === 'approve' ? 'approved' : 'declined'} successfully!${data.emailSent ? ' Email sent to customer.' : ''}`)
        } else {
          alert(data.error || `Failed to ${action} booking`)
        }
      }
    } catch (error) {
      alert(`Failed to ${action} booking`)
    } finally {
      setIsProcessing('')
    }
  }

  const handleDelete = async (booking: Booking) => {
    if (!confirm(`Are you sure you want to delete the booking for ${booking.formData.firstName} ${booking.formData.lastName}? This action cannot be undone.`)) {
      return
    }

    setIsProcessing(booking._id)

    try {
      if (TEMPLATE_CONFIG.developmentMode) {
        // DEVELOPMENT MODE: Simulate API call
        console.log(`📞 DEVELOPMENT MODE: Deleting booking for ${booking.formData.firstName}`)
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Remove from local state
        setBookings(prev => prev.filter(b => b._id !== booking._id))
        alert('✅ Booking deleted successfully! (Development Mode)')
      } else {
        // PRODUCTION MODE: Real API call
        const response = await fetch('/api/admin/bookings', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: booking._id })
        })

        const data = await response.json()

        if (data.success) {
          setBookings(prev => prev.filter(b => b._id !== booking._id))
          alert('Booking deleted successfully!')
        } else {
          alert(data.error || 'Failed to delete booking')
        }
      }
    } catch (error) {
      alert('Failed to delete booking')
    } finally {
      setIsProcessing('')
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getPriorityColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'bg-red-500 text-white'
      case 'high': return 'bg-orange-500 text-white'
      case 'normal': return 'bg-blue-500 text-white'
      case 'low': return 'bg-green-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500 text-white'
      case 'confirmed': return 'bg-green-500 text-white'
      case 'cancelled': return 'bg-red-500 text-white'
      case 'completed': return 'bg-blue-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const isMeetingPassed = (booking: Booking) => {
    const now = new Date()
    const meetingDate = new Date(booking.formData.preferredDate)
    const meetingTime = booking.formData.preferredTime
    
    // Create full datetime for comparison
    const [time, modifier] = meetingTime.split(' ')
    let [hours, minutes] = time.split(':')
    
    if (modifier && modifier.toLowerCase() === 'pm' && hours !== '12') {
      hours = String(parseInt(hours, 10) + 12)
    } else if (modifier && modifier.toLowerCase() === 'am' && hours === '12') {
      hours = '0'
    }
    
    const fullMeetingDateTime = new Date(meetingDate)
    fullMeetingDateTime.setHours(parseInt(hours), parseInt(minutes || '0'))
    
    return fullMeetingDateTime < now
  }

  const shouldShowDeleteButton = (booking: Booking) => {
    return booking.status === 'cancelled' || isMeetingPassed(booking)
  }

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Loading booked calls...</p>
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
          <h2 className="text-2xl font-bold text-white mb-2">📞 Booked Calls</h2>
          <p className="text-gray-300">Manage and approve customer call bookings</p>
        </div>
        <div className="text-white text-sm">
          Total: {bookings.length} bookings
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📞</div>
          <h3 className="text-xl font-semibold text-white mb-2">No Bookings Yet</h3>
          <p className="text-gray-300">Call bookings will appear here when customers request meetings</p>
          {TEMPLATE_CONFIG.developmentMode && (
            <div className="mt-4">
              <button
                onClick={() => {
                  setBookings(TEMPLATE_CONFIG.mockData.bookings as Booking[])
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
          {bookings.map((booking) => (
            <motion.div
              key={booking._id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {booking.formData.firstName} {booking.formData.lastName}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(booking.formData.urgency)}`}>
                      {booking.formData.urgency}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                    {isMeetingPassed(booking) && (
                      <span className="px-2 py-1 bg-gray-500 text-white rounded-full text-xs font-medium">
                        PAST
                      </span>
                    )}
                    {TEMPLATE_CONFIG.developmentMode && (
                      <span className="px-2 py-1 bg-yellow-500 text-black rounded-full text-xs font-medium">
                        MOCK
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-1">📧 {booking.formData.email}</p>
                  <p className="text-gray-300 text-sm mb-1">📞 {booking.formData.phone}</p>
                  {booking.formData.company && (
                    <p className="text-gray-300 text-sm mb-1">🏢 {booking.formData.company}</p>
                  )}
                  <p className="text-gray-300 text-sm">📋 Reference: {booking.referenceId}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">{booking.callInfo.title}</p>
                  <p className="text-gray-300 text-sm">{booking.callInfo.duration}</p>
                  <p className="text-gray-300 text-sm mt-1">
                    {formatDate(booking.formData.preferredDate)}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {booking.formData.preferredTime} {booking.formData.timeZone}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <h4 className="text-white font-medium mb-2">💬 Project Message:</h4>
                <p className="text-gray-300 text-sm leading-relaxed">"{booking.formData.message}"</p>
                {booking.formData.projectType && (
                  <p className="text-gray-300 text-sm mt-2">🎯 Project Type: {booking.formData.projectType}</p>
                )}
              </div>

              {/* Meeting URL Display */}
              {booking.meetingUrl && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-4">
                  <h4 className="text-green-300 font-medium mb-2">🎥 Meeting URL:</h4>
                  <a href={booking.meetingUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline break-all">
                    {booking.meetingUrl}
                  </a>
                </div>
              )}

              {/* Action Buttons */}
              {booking.status === 'pending' && (
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedBooking(booking)}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Approve</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAction(booking, 'decline')}
                    disabled={isProcessing === booking._id}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 disabled:opacity-50"
                  >
                    {isProcessing === booking._id ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span>Decline</span>
                  </motion.button>

                  <div className="text-gray-400 text-sm">
                    Submitted: {new Date(booking.submittedAt).toLocaleDateString()}
                  </div>
                </div>
              )}

              {booking.status !== 'pending' && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-gray-400 text-sm">
                      Status: <span className="text-white capitalize">{booking.status}</span>
                    </div>
                    
                    {/* Delete Button - Show for cancelled bookings or past meetings */}
                    {shouldShowDeleteButton(booking) && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleDelete(booking)}
                        disabled={isProcessing === booking._id}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 disabled:opacity-50"
                      >
                        {isProcessing === booking._id ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        )}
                        <span>Delete</span>
                      </motion.button>
                    )}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Submitted: {new Date(booking.submittedAt).toLocaleDateString()}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Approval Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl p-6 max-w-md w-full border border-white/20"
          >
            <h3 className="text-xl font-bold text-white mb-4">✅ Approve Booking</h3>
            <p className="text-gray-300 mb-4">
              Approving call for <strong>{selectedBooking.formData.firstName} {selectedBooking.formData.lastName}</strong>
            </p>
            
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">
                Meeting URL <span className="text-red-400">*</span>
              </label>
              <input
                type="url"
                required
                value={meetingUrl}
                onChange={(e) => setMeetingUrl(e.target.value)}
                placeholder="https://meet.google.com/... or https://zoom.us/..."
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <p className="text-gray-400 text-xs mt-2">
                Enter the meeting link (Google Meet, Zoom, Teams, etc.)
              </p>
            </div>

            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAction(selectedBooking, 'approve')}
                disabled={isProcessing === selectedBooking._id || !meetingUrl.trim()}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isProcessing === selectedBooking._id ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Approving...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      {TEMPLATE_CONFIG.developmentMode ? 'Approve (Dev Mode)' : 'Approve & Send Email'}
                    </span>
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedBooking(null)
                  setMeetingUrl('')
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