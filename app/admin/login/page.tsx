'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

// Template configuration - customize these values for your project
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Company', // Update with your company name
    brandIcon: '🔐' // Update with your preferred icon
  },
  branding: {
    primaryColor: '#3B82F6', // Blue - customize this
    colors: {
      dark: '#1F2937',
      darker: '#111827'
    }
  },
  login: {
    title: 'Admin Login', // Customize login title
    subtitle: 'Dashboard Access', // Customize subtitle
    placeholders: {
      username: 'Enter admin username', // Username placeholder
      password: 'Enter admin password' // Password placeholder
    }
  },
  routes: {
    dashboard: '/admin/dashboard', // Dashboard route after login
    loginApi: '/api/admin/login' // Login API endpoint
  },
  // DEVELOPMENT MODE: Set to false when authentication is implemented
  developmentMode: true
}

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    if (TEMPLATE_CONFIG.developmentMode) {
      // DEVELOPMENT MODE: Skip authentication completely
      console.log('🔧 DEVELOPMENT MODE: Skipping authentication')
      console.log('🔧 DEVELOPMENT MODE: Simulating login...')
      
      try {
        // Small delay for UX
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        console.log('🔧 SUCCESS: Redirecting to dashboard...')
        
        // Force redirect using window.location.assign (more reliable than href)
        window.location.assign(TEMPLATE_CONFIG.routes.dashboard)
        
      } catch (error) {
        console.error('Login simulation error:', error)
        setError('Simulation error. Please try again.')
      } finally {
        setIsLoading(false)
      }
    } else {
      // PRODUCTION MODE: Real authentication
      try {
        const response = await fetch(TEMPLATE_CONFIG.routes.loginApi, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (data.success) {
          console.log('✅ Login successful, redirecting...')
          window.location.assign(TEMPLATE_CONFIG.routes.dashboard)
        } else {
          setError(data.error || 'Invalid credentials')
        }
      } catch (error) {
        console.error('Login error:', error)
        setError('Connection error. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${TEMPLATE_CONFIG.branding.colors.darker} 0%, ${TEMPLATE_CONFIG.branding.colors.dark} 50%, ${TEMPLATE_CONFIG.branding.primaryColor}20 100%)`
      }}
    >
      {/* Development Mode Banner */}
      {TEMPLATE_CONFIG.developmentMode && (
        <div className="absolute top-0 left-0 right-0 bg-yellow-600 text-black px-4 py-2 text-center font-bold z-50">
          🔧 DEVELOPMENT MODE - Any credentials will work for login
        </div>
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: `${TEMPLATE_CONFIG.branding.primaryColor}10` }}
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [180, 0, 180],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
      />

      {/* Login Form */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md"
        style={{ marginTop: TEMPLATE_CONFIG.developmentMode ? '3rem' : '0' }}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">{TEMPLATE_CONFIG.company.brandIcon}</div>
            <h1 className="text-3xl font-bold text-white mb-2">{TEMPLATE_CONFIG.login.title}</h1>
            <p className="text-gray-300">{TEMPLATE_CONFIG.company.name} {TEMPLATE_CONFIG.login.subtitle}</p>
          </div>

          {/* Development Mode Notice */}
          {TEMPLATE_CONFIG.developmentMode && (
            <div className="mb-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
              <p className="text-blue-300 text-sm text-center">
                🔧 <strong>Development Mode Active</strong><br/>
                Enter any username and password to access the dashboard.
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                required={!TEMPLATE_CONFIG.developmentMode}
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                style={{ 
                  '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                } as React.CSSProperties}
                placeholder={TEMPLATE_CONFIG.login.placeholders.username}
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                required={!TEMPLATE_CONFIG.developmentMode}
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                style={{ 
                  '--tw-ring-color': TEMPLATE_CONFIG.branding.primaryColor 
                } as React.CSSProperties}
                placeholder={TEMPLATE_CONFIG.login.placeholders.password}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="w-full text-white py-4 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${TEMPLATE_CONFIG.branding.primaryColor}, ${TEMPLATE_CONFIG.branding.primaryColor}dd)`
              }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                  {TEMPLATE_CONFIG.developmentMode ? 'Accessing Dashboard...' : 'Logging in...'}
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Access Dashboard
                </>
              )}
            </motion.button>
          </form>

          {/* Footer */}
          <div className="text-center mt-8 pt-6 border-t border-white/20">
            <p className="text-gray-400 text-xs">
              Secure admin access for {TEMPLATE_CONFIG.company.name}
            </p>
            {!TEMPLATE_CONFIG.developmentMode && (
              <p className="text-gray-400 text-xs mt-2">
                Contact support if you need assistance
              </p>
            )}
            
            {/* Development Mode Info */}
            {TEMPLATE_CONFIG.developmentMode && (
              <div className="mt-4 p-3 bg-gray-500/20 border border-gray-500/30 rounded-lg">
                <p className="text-gray-300 text-xs">
                  💡 <strong>For Production:</strong> Set developmentMode to false in the component configuration
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* 
✨ CLEAN LOGIN PAGE - NO BYPASS BUTTONS

WHAT'S BEEN REMOVED:
- All bypass buttons and alternative navigation methods
- Emergency bypass functionality
- Manual navigation instructions
- Multiple fallback methods

WHAT REMAINS:
- Clean, professional login form
- Development mode indicator (shows it accepts any credentials)
- Proper form validation
- Loading states and error handling
- Smooth animations and transitions

DEVELOPMENT MODE:
- Shows clear indicator that any credentials work
- Form validation is relaxed (not required)
- Simulates login process with loading state
- Automatically redirects to dashboard

PRODUCTION MODE:
- Full form validation
- Real authentication API calls
- Proper error handling
- Secure credential requirements

TO SWITCH TO PRODUCTION:
1. Set developmentMode: false
2. Implement your authentication API
3. Update credentials handling as needed
4. Test the real authentication flow

The login now looks professional while still being functional for development!
*/