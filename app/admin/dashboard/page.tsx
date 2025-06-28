'use client'

import { useState } from 'react'

// ULTRA-MINIMAL DASHBOARD - Absolutely no auth, no redirects, no imports that could cause issues
export default function MinimalDashboard() {
  const [activeTab, setActiveTab] = useState('booked-calls')

  // Inline styles to avoid any CSS import issues
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #111827 0%, #1F2937 50%, #3B82F620 100%)',
    color: 'white',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }

  const headerStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const tabStyle = (isActive: boolean) => ({
    padding: '1rem 1.5rem',
    borderRadius: '0.75rem',
    border: 'none',
    background: isActive ? '#3B82F6' : 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.875rem',
    fontWeight: '500'
  })

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  }

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    marginBottom: '1rem'
  }

  const buttonStyle = {
    background: '#10B981',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '0.875rem'
  }

  const tabs = [
    { id: 'booked-calls', name: '📞 Booked Calls' },
    { id: 'messages', name: '💬 Messages' },
    { id: 'meetings', name: '📅 Meetings' },
    { id: 'careers', name: '💼 Careers' }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'booked-calls':
        return (
          <div>
            <div style={{...cardStyle, background: 'rgba(34, 197, 94, 0.2)', border: '1px solid rgba(34, 197, 94, 0.3)'}}>
              <h2 style={{color: '#22C55E', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                🎉 SUCCESS! Dashboard is Working!
              </h2>
              <p style={{color: '#86EFAC', fontSize: '0.875rem'}}>
                This minimal dashboard proves that your React component CAN load without redirects. 
                If you're seeing this, the issue is elsewhere in your codebase.
              </p>
            </div>
            
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>📞 Booked Calls</h3>
            
            <div style={cardStyle}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                <div>
                  <h4 style={{fontSize: '1.125rem', marginBottom: '0.5rem'}}>John Doe - Strategy Call</h4>
                  <p style={{fontSize: '0.875rem', opacity: 0.8}}>john.doe@example.com • +1 (555) 123-4567</p>
                  <p style={{fontSize: '0.75rem', opacity: 0.6}}>March 15, 2024 at 2:00 PM EST</p>
                </div>
                <span style={{background: '#EAB308', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem'}}>
                  Pending
                </span>
              </div>
              <p style={{fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.9}}>
                "We need help with our startup's digital strategy. Looking for expert guidance on growth and marketing."
              </p>
              <div style={{display: 'flex', gap: '0.5rem'}}>
                <button 
                  style={{...buttonStyle, background: '#10B981'}}
                  onClick={() => alert('✅ Booking approved! (Demo)')}
                >
                  Approve
                </button>
                <button 
                  style={{...buttonStyle, background: '#EF4444'}}
                  onClick={() => alert('❌ Booking declined! (Demo)')}
                >
                  Decline
                </button>
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                <div>
                  <h4 style={{fontSize: '1.125rem', marginBottom: '0.5rem'}}>Sarah Johnson - Discovery Call</h4>
                  <p style={{fontSize: '0.875rem', opacity: 0.8}}>sarah@designstudio.com • +1 (555) 987-6543</p>
                  <p style={{fontSize: '0.75rem', opacity: 0.6}}>March 18, 2024 at 10:30 AM PST</p>
                </div>
                <span style={{background: '#10B981', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem'}}>
                  Confirmed
                </span>
              </div>
              <p style={{fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.9}}>
                "Interested in UI/UX design consultation for our mobile app redesign project."
              </p>
              <div style={{background: 'rgba(16, 185, 129, 0.2)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '0.5rem', padding: '0.75rem'}}>
                <p style={{color: '#10B981', fontSize: '0.75rem'}}>
                  📹 Meeting URL: https://meet.google.com/demo-meeting-link
                </p>
              </div>
            </div>
          </div>
        )

      case 'messages':
        return (
          <div>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>💬 Messages</h3>
            
            <div style={cardStyle}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                <div>
                  <h4 style={{fontSize: '1.125rem', marginBottom: '0.5rem'}}>Emily Rodriguez - Project Quote</h4>
                  <p style={{fontSize: '0.875rem', opacity: 0.8}}>emily@startup.com</p>
                </div>
                <span style={{background: '#EAB308', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem'}}>
                  New
                </span>
              </div>
              <p style={{fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.9}}>
                "Hi! We're looking to redesign our website. Need a modern, responsive design that can handle high traffic..."
              </p>
              <button 
                style={buttonStyle}
                onClick={() => alert('📧 Reply sent! (Demo)')}
              >
                Reply
              </button>
            </div>

            <div style={cardStyle}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                <div>
                  <h4 style={{fontSize: '1.125rem', marginBottom: '0.5rem'}}>David Chen - Partnership</h4>
                  <p style={{fontSize: '0.875rem', opacity: 0.8}}>david@agency.co</p>
                </div>
                <span style={{background: '#10B981', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem'}}>
                  Responded
                </span>
              </div>
              <p style={{fontSize: '0.875rem', opacity: 0.9}}>
                "Interested in exploring partnership opportunities between our agencies..."
              </p>
            </div>
          </div>
        )

      case 'meetings':
        return (
          <div>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>📅 Meetings</h3>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
              <div>
                <h4 style={{fontSize: '1.125rem', marginBottom: '1rem'}}>Today's Meetings</h4>
                <div style={{...cardStyle, background: 'rgba(239, 68, 68, 0.2)', border: '1px solid rgba(239, 68, 68, 0.3)'}}>
                  <p style={{fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem'}}>🔴 NOW: John Doe - Strategy Call</p>
                  <p style={{fontSize: '0.875rem', opacity: 0.8}}>2:00 PM - 2:45 PM</p>
                </div>
              </div>
              
              <div>
                <h4 style={{fontSize: '1.125rem', marginBottom: '1rem'}}>Upcoming This Week</h4>
                <div style={cardStyle}>
                  <p style={{fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem'}}>Sarah Johnson - Discovery Call</p>
                  <p style={{fontSize: '0.875rem', opacity: 0.8}}>Tomorrow 10:30 AM</p>
                </div>
                <div style={cardStyle}>
                  <p style={{fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem'}}>Mike Wilson - Consultation</p>
                  <p style={{fontSize: '0.875rem', opacity: 0.8}}>Friday 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'careers':
        return (
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
              <h3 style={{fontSize: '1.5rem'}}>💼 Careers</h3>
              <button 
                style={{...buttonStyle, background: '#10B981'}}
                onClick={() => alert('Add New Job clicked! (Demo)')}
              >
                Add New Job
              </button>
            </div>
            
            <div style={cardStyle}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                <div>
                  <h4 style={{fontSize: '1.125rem', marginBottom: '0.5rem'}}>Senior Frontend Developer</h4>
                  <p style={{fontSize: '0.875rem', opacity: 0.8}}>Full-time • Remote • $80K - $120K</p>
                </div>
                <span style={{background: '#10B981', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem'}}>
                  Active
                </span>
              </div>
              <p style={{fontSize: '0.75rem', opacity: 0.6}}>Posted 2 days ago • 5 applications</p>
            </div>

            <div style={cardStyle}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                <div>
                  <h4 style={{fontSize: '1.125rem', marginBottom: '0.5rem'}}>UI/UX Designer</h4>
                  <p style={{fontSize: '0.875rem', opacity: 0.8}}>Full-time • New York • $70K - $100K</p>
                </div>
                <span style={{background: '#3B82F6', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem'}}>
                  Active
                </span>
              </div>
              <p style={{fontSize: '0.75rem', opacity: 0.6}}>Posted 1 week ago • 12 applications</p>
            </div>
          </div>
        )

      default:
        return <div>Select a tab</div>
    }
  }

  return (
    <div style={containerStyle}>
      {/* Success Banner */}
      <div style={{
        background: 'rgba(34, 197, 94, 0.2)', 
        border: '1px solid rgba(34, 197, 94, 0.3)', 
        padding: '1rem 2rem', 
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 'bold'
      }}>
        🔧 MINIMAL DASHBOARD LOADED SUCCESSFULLY - No authentication, no redirects, pure React!
      </div>

      {/* Header */}
      <header style={headerStyle}>
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <span style={{fontSize: '1.5rem'}}>🔧</span>
          <div>
            <h1 style={{fontSize: '1.25rem', fontWeight: 'bold', margin: 0}}>Admin Dashboard</h1>
            <p style={{fontSize: '0.875rem', opacity: 0.8, margin: 0}}>Your Company</p>
          </div>
        </div>

        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <div style={{textAlign: 'right'}}>
            <p style={{margin: 0, fontWeight: '500'}}>Welcome, Admin</p>
            <p style={{margin: 0, fontSize: '0.875rem', opacity: 0.8}}>Development Mode</p>
          </div>
          <button 
            style={{...buttonStyle, background: '#EF4444'}}
            onClick={() => alert('Logout clicked! (Demo - does nothing)')}
          >
            Logout (Demo)
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div style={contentStyle}>
        {/* Tab Navigation */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)', 
          borderRadius: '1rem', 
          padding: '0.5rem',
          marginBottom: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.5rem'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={tabStyle(activeTab === tab.id)}
              onMouseOver={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          minHeight: '600px',
          padding: '1.5rem'
        }}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  )
}

/* 
🎯 ULTRA-MINIMAL DASHBOARD

This dashboard has ZERO external dependencies and ZERO auth checks:
- No useRouter imports
- No auth checks in useEffect
- No external CSS dependencies
- No complex state management
- No API calls that could redirect
- All styles are inline
- All functionality is local

IF THIS STILL REDIRECTS:
The issue is NOT in your React component. Check:

1. middleware.ts file
2. layout.tsx files  
3. next.config.js
4. Server redirects (.htaccess, nginx)
5. Browser cache (try incognito)

TO USE:
Replace your dashboard page.tsx with this file temporarily.
If this loads, your component works and the issue is elsewhere.
*/