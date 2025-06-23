'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface Meeting {
  _id: string
  formData: {
    firstName: string
    lastName: string
    email: string
    phone: string
    company?: string
    projectType?: string
    preferredDate: string
    preferredTime: string
    timeZone: string
    message: string
    urgency: string
  }
  callInfo: {
    title: string
    duration: string
    subtitle: string
  }
  status: string
  referenceId: string
  meetingUrl?: string
  submittedAt: string
  confirmedAt?: string
}

export default function MeetingsTab() {
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null)

  useEffect(() => {
    fetchMeetings()
  }, [])

  const fetchMeetings = async () => {
    try {
      // Fetch only confirmed meetings (approved bookings)
      const response = await fetch('/api/admin/bookings?status=confirmed')
      const data = await response.json()
      
      if (data.success) {
        setMeetings(data.bookings)
      }
    } catch (error) {
      console.error('Failed to fetch meetings:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getWeekDates = (date: Date) => {
    const startOfWeek = new Date(date)
    const day = startOfWeek.getDay()
    const diff = startOfWeek.getDate() - day // Sunday as start of week
    startOfWeek.setDate(diff)
    startOfWeek.setHours(0, 0, 0, 0)

    const weekDates = []
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startOfWeek)
      currentDate.setDate(startOfWeek.getDate() + i)
      weekDates.push(currentDate)
    }
    return weekDates
  }

  const getMeetingsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0]
    return meetings.filter(meeting => {
      const meetingDate = new Date(meeting.formData.preferredDate).toISOString().split('T')[0]
      return meetingDate === dateString
    })
  }

  const formatTime = (timeString: string) => {
    try {
      // Handle various time formats
      const [time, modifier] = timeString.split(' ')
      let [hours, minutes] = time.split(':')
      
      if (modifier && modifier.toLowerCase() === 'pm' && hours !== '12') {
        hours = String(parseInt(hours, 10) + 12)
      } else if (modifier && modifier.toLowerCase() === 'am' && hours === '12') {
        hours = '0'
      }
      
      const timeObj = new Date(`2000-01-01T${hours.padStart(2, '0')}:${minutes || '00'}:00`)
      return timeObj.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    } catch {
      return timeString
    }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatFullDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isPast = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const isFuture = (date: Date) => {
    const today = new Date()
    today.setHours(23, 59, 59, 999)
    return date > today
  }

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newWeek = new Date(currentWeek)
    newWeek.setDate(currentWeek.getDate() + (direction === 'next' ? 7 : -7))
    setCurrentWeek(newWeek)
  }

  const goToToday = () => {
    setCurrentWeek(new Date())
  }

  const weekDates = getWeekDates(currentWeek)
  const weekMeetings = meetings.filter(meeting => {
    const meetingDate = new Date(meeting.formData.preferredDate)
    const startOfWeek = weekDates[0]
    const endOfWeek = new Date(weekDates[6])
    endOfWeek.setHours(23, 59, 59, 999)
    return meetingDate >= startOfWeek && meetingDate <= endOfWeek
  })

  const todayMeetings = meetings.filter(meeting => {
    const today = new Date()
    const meetingDate = new Date(meeting.formData.preferredDate)
    return meetingDate.toDateString() === today.toDateString()
  })

  const upcomingMeetings = meetings.filter(meeting => {
    const meetingDate = new Date(meeting.formData.preferredDate)
    return isFuture(meetingDate)
  }).slice(0, 5) // Show next 5 upcoming meetings

  const getStatusIcon = (meeting: Meeting) => {
    const meetingDate = new Date(meeting.formData.preferredDate)
    if (isToday(meetingDate)) return '🔴'
    if (isFuture(meetingDate)) return '🟢'
    return '⚪'
  }

  const getMeetingTimeStatus = (meeting: Meeting) => {
    const now = new Date()
    const meetingDate = new Date(meeting.formData.preferredDate)
    const meetingTime = meeting.formData.preferredTime
    
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
    
    if (fullMeetingDateTime < now) return 'past'
    if (isToday(meetingDate)) {
      const timeDiff = fullMeetingDateTime.getTime() - now.getTime()
      const minutesDiff = timeDiff / (1000 * 60)
      if (minutesDiff <= 30 && minutesDiff > 0) return 'soon'
      if (minutesDiff <= 0) return 'now'
    }
    return 'future'
  }

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Loading meetings...</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">📅 Meetings Dashboard</h2>
          <p className="text-gray-300">Manage your confirmed meetings and upcoming calls</p>
        </div>
        
        {/* Quick Stats */}
        <div className="flex items-center space-x-4">
          <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
            <div className="text-2xl font-bold text-white">{todayMeetings.length}</div>
            <div className="text-xs text-gray-300">Today</div>
          </div>
          <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
            <div className="text-2xl font-bold text-white">{weekMeetings.length}</div>
            <div className="text-xs text-gray-300">This Week</div>
          </div>
          <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
            <div className="text-2xl font-bold text-white">{meetings.length}</div>
            <div className="text-xs text-gray-300">Total</div>
          </div>
        </div>
      </div>

      {/* Today's Meetings Alert */}
      {todayMeetings.length > 0 && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 mb-6"
        >
          <h3 className="text-red-300 font-semibold mb-2">🔴 Today's Meetings</h3>
          <div className="space-y-2">
            {todayMeetings.map((meeting) => {
              const timeStatus = getMeetingTimeStatus(meeting)
              return (
                <div
                  key={meeting._id}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    timeStatus === 'now' ? 'bg-red-500/30' :
                    timeStatus === 'soon' ? 'bg-orange-500/30' :
                    'bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-sm">
                      {timeStatus === 'now' ? '🔴 NOW' :
                       timeStatus === 'soon' ? '🟡 SOON' :
                       timeStatus === 'past' ? '⚪ PAST' : '🟢'}
                    </span>
                    <div>
                      <p className="text-white font-medium">
                        {meeting.formData.firstName} {meeting.formData.lastName}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {formatTime(meeting.formData.preferredTime)} - {meeting.callInfo.title}
                      </p>
                    </div>
                  </div>
                  {meeting.meetingUrl && (
                    <a
                      href={meeting.meetingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Join
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Calendar */}
        <div className="lg:col-span-2">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Weekly Calendar</h3>
              
              {/* Week Navigation */}
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateWeek('prev')}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <div className="text-white font-medium text-sm px-3">
                  {weekDates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {' '}
                  {weekDates[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateWeek('next')}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToToday}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Today
                </motion.button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-gray-400 text-sm font-medium py-2">
                  {day}
                </div>
              ))}
              
              {weekDates.map((date, index) => {
                const dayMeetings = getMeetingsForDate(date)
                
                return (
                  <div
                    key={date.toISOString()}
                    className={`min-h-[120px] p-2 rounded-lg border transition-all duration-300 ${
                      isToday(date) 
                        ? 'border-red-500 bg-red-500/20' 
                        : isPast(date)
                        ? 'border-gray-600 bg-gray-500/10'
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                  >
                    {/* Day Header */}
                    <div className="text-center mb-2">
                      <div className={`text-lg font-bold ${
                        isToday(date) ? 'text-red-200' : 'text-white'
                      }`}>
                        {date.getDate()}
                      </div>
                    </div>

                    {/* Meetings for this day */}
                    <div className="space-y-1">
                      {dayMeetings.length === 0 ? (
                        <div className="text-center text-gray-500 text-xs py-2">
                          No meetings
                        </div>
                      ) : (
                        dayMeetings
                          .sort((a, b) => a.formData.preferredTime.localeCompare(b.formData.preferredTime))
                          .slice(0, 3) // Show max 3 meetings per day
                          .map((meeting) => (
                            <motion.div
                              key={meeting._id}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => setSelectedMeeting(meeting)}
                              className="bg-white/20 rounded p-2 border border-white/20 hover:bg-white/30 transition-colors cursor-pointer"
                            >
                              <div className="flex items-center space-x-1 mb-1">
                                <span className="text-xs">{getStatusIcon(meeting)}</span>
                                <div className="text-xs text-gray-300">
                                  {formatTime(meeting.formData.preferredTime)}
                                </div>
                              </div>
                              <div className="text-xs font-medium text-white truncate">
                                {meeting.formData.firstName} {meeting.formData.lastName}
                              </div>
                              <div className="text-xs text-gray-400 truncate">
                                {meeting.callInfo.title}
                              </div>
                            </motion.div>
                          ))
                      )}
                      {dayMeetings.length > 3 && (
                        <div className="text-xs text-gray-400 text-center">
                          +{dayMeetings.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Meetings Sidebar */}
        <div className="space-y-6">
          {/* Next Meetings */}
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-bold text-white mb-4">🚀 Upcoming Meetings</h3>
            
            {upcomingMeetings.length === 0 ? (
              <div className="text-center py-6">
                <div className="text-4xl mb-2">📅</div>
                <p className="text-gray-300 text-sm">No upcoming meetings</p>
              </div>
            ) : (
              <div className="space-y-3">
                {upcomingMeetings.map((meeting) => (
                  <motion.div
                    key={meeting._id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedMeeting(meeting)}
                    className="bg-white/10 rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <span>{getStatusIcon(meeting)}</span>
                      <div className="text-sm font-medium text-white">
                        {meeting.formData.firstName} {meeting.formData.lastName}
                      </div>
                    </div>
                    <div className="text-xs text-gray-300 mb-1">
                      📅 {formatDate(new Date(meeting.formData.preferredDate))}
                    </div>
                    <div className="text-xs text-gray-300 mb-1">
                      ⏰ {formatTime(meeting.formData.preferredTime)} {meeting.formData.timeZone}
                    </div>
                    <div className="text-xs text-gray-400">
                      {meeting.callInfo.title}
                    </div>
                    {meeting.meetingUrl && (
                      <div className="mt-2">
                        <a
                          href={meeting.meetingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center space-x-1 text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded transition-colors"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span>Join</span>
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-bold text-white mb-4">⚡ Quick Actions</h3>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://calendar.google.com', '_blank')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Open Google Calendar</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={fetchMeetings}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Refresh Meetings</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Meeting Detail Modal */}
      {selectedMeeting && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full border border-white/20 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">📅 Meeting Details</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMeeting(null)}
                className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
            
            {/* Meeting Info */}
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{getStatusIcon(selectedMeeting)}</span>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {selectedMeeting.formData.firstName} {selectedMeeting.formData.lastName}
                  </h4>
                  <p className="text-gray-300 text-sm">{selectedMeeting.callInfo.title}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Date:</span>
                  <p className="text-white">{formatFullDate(selectedMeeting.formData.preferredDate)}</p>
                </div>
                <div>
                  <span className="text-gray-400">Time:</span>
                  <p className="text-white">{formatTime(selectedMeeting.formData.preferredTime)} {selectedMeeting.formData.timeZone}</p>
                </div>
                <div>
                  <span className="text-gray-400">Duration:</span>
                  <p className="text-white">{selectedMeeting.callInfo.duration}</p>
                </div>
                <div>
                  <span className="text-gray-400">Status:</span>
                  <p className="text-green-400 capitalize">{selectedMeeting.status}</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <h5 className="text-white font-medium mb-3">📞 Contact Information</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <a href={`mailto:${selectedMeeting.formData.email}`} className="text-blue-400 hover:text-blue-300">
                    {selectedMeeting.formData.email}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone:</span>
                  <a href={`tel:${selectedMeeting.formData.phone}`} className="text-blue-400 hover:text-blue-300">
                    {selectedMeeting.formData.phone}
                  </a>
                </div>
                {selectedMeeting.formData.company && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Company:</span>
                    <span className="text-white">{selectedMeeting.formData.company}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-400">Reference:</span>
                  <span className="text-white font-mono text-xs">{selectedMeeting.referenceId}</span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <h5 className="text-white font-medium mb-3">💬 Project Details</h5>
              <p className="text-gray-300 text-sm leading-relaxed">"{selectedMeeting.formData.message}"</p>
              {selectedMeeting.formData.projectType && (
                <p className="text-gray-400 text-sm mt-2">Project Type: {selectedMeeting.formData.projectType}</p>
              )}
            </div>

            {/* Meeting Link */}
            {selectedMeeting.meetingUrl && (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-green-300 font-medium mb-1">🎥 Meeting Link</h5>
                    <p className="text-green-400 text-sm break-all">{selectedMeeting.meetingUrl}</p>
                  </div>
                  <a
                    href={selectedMeeting.meetingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 002 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Join Meeting</span>
                  </a>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(`mailto:${selectedMeeting.formData.email}`, '_blank')}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send Email</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(`tel:${selectedMeeting.formData.phone}`, '_blank')}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Customer</span>
              </motion.button>

              {selectedMeeting.meetingUrl && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(selectedMeeting.meetingUrl, '_blank')}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Join Now</span>
                </motion.button>
              )}
            </div>

            {/* Meeting Timestamps */}
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                <div>
                  <span>Booked:</span>
                  <p className="text-white">{new Date(selectedMeeting.submittedAt).toLocaleDateString()}</p>
                </div>
                {selectedMeeting.confirmedAt && (
                  <div>
                    <span>Confirmed:</span>
                    <p className="text-white">{new Date(selectedMeeting.confirmedAt).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* No meetings message */}
      {meetings.length === 0 && (
        <div className="text-center py-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white/10 rounded-xl p-8 border border-white/20"
          >
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-white mb-2">No Meetings Scheduled</h3>
            <p className="text-gray-300 mb-4">Approved call bookings will appear here</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={fetchMeetings}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Refresh Meetings
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  )
}