// app/api/admin/logout/route.ts - Template Admin Logout API
import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/admin-auth'

export async function POST(request: NextRequest) {
  try {
    // Optional: Verify the current session before logout
    const token = request.cookies.get('admin-token')?.value
    let currentAdmin = null
    
    if (token) {
      try {
        currentAdmin = await verifyToken(token)
      } catch (error) {
        // Token might be invalid, but we still want to clear the cookie
        console.log('Invalid token during logout, clearing cookie anyway')
      }
    }

    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    })

    // Clear the admin authentication cookie
    response.cookies.delete('admin-token')

    // Optional: Add additional security headers
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')

    // Optional: Log the logout event
    if (currentAdmin) {
      console.log(`Admin user ${currentAdmin.username} logged out at ${new Date().toISOString()}`)
      
      // TODO: Implement logout logging if needed
      // Example: Save logout event to database
      /*
      await AdminActivityLog.create({
        adminId: currentAdmin.id,
        username: currentAdmin.username,
        action: 'logout',
        timestamp: new Date(),
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown'
      })
      */
    }

    return response

  } catch (error: unknown) {
    console.error('Logout error:', error)
    
    // Even if there's an error, we should still try to clear the cookie
    const response = NextResponse.json({
      success: false,
      error: 'Logout failed, but cookie cleared'
    }, { status: 500 })

    // Force clear the cookie even on error
    response.cookies.delete('admin-token')

    return response
  }
}

// Optional: Handle GET requests (redirect to login)
export async function GET() {
  return NextResponse.json({
    success: false,
    error: 'Use POST method to logout'
  }, { status: 405 })
}

/* 
TODO: IMPLEMENTATION GUIDE

1. ENHANCED LOGOUT FEATURES:
   You can extend this basic logout with additional features:

   A. Session Invalidation (if using database sessions):
   ```javascript
   // If you store sessions in database
   if (currentAdmin && token) {
     await SessionService.invalidate(token)
     // or invalidate all sessions for user
     await SessionService.invalidateAllForUser(currentAdmin.id)
   }
   ```

   B. Audit Logging:
   ```javascript
   const logoutData = {
     adminId: currentAdmin.id,
     username: currentAdmin.username,
     action: 'admin_logout',
     timestamp: new Date(),
     ipAddress: request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 'unknown',
     userAgent: request.headers.get('user-agent') || 'unknown',
     sessionDuration: Date.now() - currentAdmin.loginTime
   }
   
   await AuditLog.create(logoutData)
   ```

   C. Multi-Device Logout:
   ```javascript
   // Option to logout from all devices
   const { logoutAll } = await request.json()
   
   if (logoutAll && currentAdmin) {
     // Invalidate all sessions for this user
     await SessionService.invalidateAllForUser(currentAdmin.id)
     
     // Or blacklist all tokens issued before now
     await TokenBlacklist.blacklistAllBefore(currentAdmin.id, new Date())
   }
   ```

2. DATABASE SCHEMA FOR AUDIT LOGGING:

   A. MongoDB Collection:
   ```javascript
   {
     _id: ObjectId,
     adminId: String,
     username: String,
     action: String, // 'login', 'logout', 'password_change'
     timestamp: Date,
     ipAddress: String,
     userAgent: String,
     sessionDuration: Number, // milliseconds
     details: Object // additional context
   }
   ```

   B. PostgreSQL Table:
   ```sql
   CREATE TABLE admin_activity_log (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     admin_id VARCHAR(50),
     username VARCHAR(100),
     action VARCHAR(50) NOT NULL,
     timestamp TIMESTAMP DEFAULT NOW(),
     ip_address INET,
     user_agent TEXT,
     session_duration INTEGER, -- in seconds
     details JSONB,
     created_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Indexes for performance
   CREATE INDEX idx_admin_activity_admin_id ON admin_activity_log(admin_id);
   CREATE INDEX idx_admin_activity_timestamp ON admin_activity_log(timestamp);
   CREATE INDEX idx_admin_activity_action ON admin_activity_log(action);
   ```

3. SESSION MANAGEMENT (if needed):

   A. Database Session Storage:
   ```javascript
   // Session table structure
   CREATE TABLE admin_sessions (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     admin_id VARCHAR(50) NOT NULL,
     token_hash VARCHAR(255) NOT NULL,
     ip_address INET,
     user_agent TEXT,
     created_at TIMESTAMP DEFAULT NOW(),
     expires_at TIMESTAMP NOT NULL,
     is_active BOOLEAN DEFAULT true
   );
   
   // Session service
   class SessionService {
     static async invalidate(token) {
       const tokenHash = createHash('sha256').update(token).digest('hex')
       await pool.query(
         'UPDATE admin_sessions SET is_active = false WHERE token_hash = $1',
         [tokenHash]
       )
     }
     
     static async invalidateAllForUser(adminId) {
       await pool.query(
         'UPDATE admin_sessions SET is_active = false WHERE admin_id = $1',
         [adminId]
       )
     }
   }
   ```

4. FRONTEND LOGOUT HANDLING:
   ```javascript
   // Frontend logout function
   const handleLogout = async (logoutFromAllDevices = false) => {
     try {
       const response = await fetch('/api/admin/logout', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           logoutAll: logoutFromAllDevices
         })
       })
       
       if (response.ok) {
         // Clear any client-side state
         localStorage.removeItem('admin-preferences')
         sessionStorage.clear()
         
         // Redirect to login
         window.location.href = '/admin/login'
       }
     } catch (error) {
       console.error('Logout failed:', error)
       // Force redirect anyway
       window.location.href = '/admin/login'
     }
   }
   ```

5. SECURITY CONSIDERATIONS:

   A. Token Blacklisting (for JWT-like tokens):
   ```javascript
   // If using custom tokens, you might want to blacklist them
   class TokenBlacklist {
     static async add(tokenHash, expiresAt) {
       await pool.query(
         'INSERT INTO token_blacklist (token_hash, expires_at) VALUES ($1, $2)',
         [tokenHash, expiresAt]
       )
     }
     
     static async isBlacklisted(tokenHash) {
       const result = await pool.query(
         'SELECT 1 FROM token_blacklist WHERE token_hash = $1 AND expires_at > NOW()',
         [tokenHash]
       )
       return result.rows.length > 0
     }
   }
   ```

   B. Rate Limiting:
   ```javascript
   // Prevent logout spam
   const rateLimitStore = new Map() // Use Redis in production
   
   export async function POST(request) {
     const ip = request.headers.get('x-forwarded-for') || 'unknown'
     const key = `logout_${ip}`
     
     const attempts = rateLimitStore.get(key) || 0
     if (attempts > 10) { // Max 10 logout attempts per hour
       return NextResponse.json({ error: 'Rate limited' }, { status: 429 })
     }
     
     rateLimitStore.set(key, attempts + 1)
     setTimeout(() => rateLimitStore.delete(key), 3600000) // 1 hour
     
     // ... rest of logout logic
   }
   ```

6. ENVIRONMENT VARIABLES:
   ```env
   # Session settings
   SESSION_TIMEOUT_HOURS=24
   ALLOW_CONCURRENT_SESSIONS=true
   
   # Logging settings
   ENABLE_AUDIT_LOGGING=true
   LOG_RETENTION_DAYS=90
   
   # Security settings
   LOGOUT_RATE_LIMIT=10
   CLEAR_SESSIONS_ON_LOGOUT=false
   ```

7. ADDITIONAL FEATURES:

   A. Forced Logout (admin can force logout other sessions):
   ```javascript
   // POST /api/admin/force-logout
   export async function POST(request) {
     const { targetAdminId } = await request.json()
     const currentAdmin = await verifyToken(token)
     
     // Check permissions
     if (currentAdmin.role !== 'super-admin') {
       return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 })
     }
     
     await SessionService.invalidateAllForUser(targetAdminId)
     return NextResponse.json({ success: true })
   }
   ```

   B. Session Status Endpoint:
   ```javascript
   // GET /api/admin/session-status
   export async function GET(request) {
     const token = request.cookies.get('admin-token')?.value
     const admin = await verifyToken(token)
     
     if (!admin) {
       return NextResponse.json({ authenticated: false })
     }
     
     return NextResponse.json({
       authenticated: true,
       admin: {
         id: admin.id,
         username: admin.username,
         role: admin.role
       },
       sessionInfo: {
         loginTime: admin.loginTime,
         expiresAt: admin.expiresAt
       }
     })
   }
   ```

CURRENT TEMPLATE STATUS:
- ✅ Basic logout functionality implemented
- ✅ Cookie clearing implemented
- ✅ Error handling implemented
- ✅ Security headers added
- 🟡 Audit logging needs implementation
- 🟡 Session management needs implementation
- 🟡 Rate limiting needs implementation

SECURITY FEATURES:
- ✅ HTTP-only cookie deletion
- ✅ Cache control headers
- ✅ Error handling that still clears cookies
- ✅ Optional session verification
- 🟡 Token blacklisting (if needed)
- 🟡 Multi-device logout (if needed)
*/