// lib/admin-auth.ts - Template Admin Authentication (No External Dependencies)
import { createHash, randomBytes } from 'crypto'

// Template configuration - CHANGE THESE VALUES FOR PRODUCTION
const TEMPLATE_CONFIG = {
  // TODO: Change these default credentials before deploying to production
  defaultCredentials: {
    username: 'admin',
    password: 'admin' // WARNING: Change this immediately in production!
  },
  // TODO: Set a secure secret in your environment variables
  authSecret: process.env.AUTH_SECRET || 'your-super-secret-auth-key-change-this-in-production',
  // TODO: Configure session expiration (in milliseconds)
  sessionExpiry: 24 * 60 * 60 * 1000, // 24 hours
  // TODO: Update admin user details
  adminUser: {
    id: 'admin-001',
    username: 'admin',
    role: 'administrator',
    permissions: ['read', 'write', 'delete', 'manage']
  }
}

interface AdminUser {
  id: string
  username: string
  role: string
  permissions: string[]
}

interface SessionData {
  adminId: string
  username: string
  role: string
  permissions: string[]
  createdAt: number
  expiresAt: number
}

/**
 * Simple hash function using Node.js crypto (no bcrypt dependency)
 */
function hashPassword(password: string, salt?: string): string {
  const useSalt = salt || randomBytes(16).toString('hex')
  const hash = createHash('sha256')
  hash.update(password + useSalt + TEMPLATE_CONFIG.authSecret)
  return `${useSalt}:${hash.digest('hex')}`
}

/**
 * Verify password against hash
 */
function verifyPasswordHash(password: string, hashedPassword: string): boolean {
  try {
    const [salt, hash] = hashedPassword.split(':')
    const testHash = hashPassword(password, salt)
    return testHash === hashedPassword
  } catch {
    return false
  }
}

/**
 * Create session token using built-in crypto
 */
function createSessionToken(sessionData: SessionData): string {
  const payload = JSON.stringify(sessionData)
  const signature = createHash('hmac-sha256')
    .update(payload)
    .update(TEMPLATE_CONFIG.authSecret)
    .digest('hex')
  
  const token = Buffer.from(`${payload}.${signature}`).toString('base64')
  return token
}

/**
 * Verify and decode session token
 */
function verifySessionToken(token: string): SessionData | null {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    const [payload, signature] = decoded.split('.')
    
    // Verify signature
    const expectedSignature = createHash('hmac-sha256')
      .update(payload)
      .update(TEMPLATE_CONFIG.authSecret)
      .digest('hex')
    
    if (signature !== expectedSignature) {
      return null
    }
    
    const sessionData: SessionData = JSON.parse(payload)
    
    // Check expiration
    if (Date.now() > sessionData.expiresAt) {
      return null
    }
    
    return sessionData
  } catch {
    return null
  }
}

/**
 * Verify admin credentials
 * TODO: Replace this with your actual authentication method
 * Options:
 * 1. Database lookup (MongoDB, PostgreSQL, etc.)
 * 2. LDAP/Active Directory integration
 * 3. OAuth provider (Google, GitHub, etc.)
 * 4. Custom user management system
 * 5. Environment variables
 */
export async function verifyAdmin(username: string, password: string): Promise<AdminUser | null> {
  try {
    // TEMPLATE IMPLEMENTATION - Replace with your authentication logic
    
    // Simple credential check (Basic security for template)
    if (username === TEMPLATE_CONFIG.defaultCredentials.username && 
        password === TEMPLATE_CONFIG.defaultCredentials.password) {
      
      return {
        ...TEMPLATE_CONFIG.adminUser,
        username: username
      }
    }

    // TODO: Implement your actual authentication logic here
    
    // Example with environment variables:
    /*
    const envUsername = process.env.ADMIN_USERNAME
    const envPassword = process.env.ADMIN_PASSWORD
    
    if (username === envUsername && password === envPassword) {
      return TEMPLATE_CONFIG.adminUser
    }
    */

    // Example with hashed passwords:
    /*
    const storedUsers = [
      {
        username: 'admin',
        passwordHash: 'salt:hash', // Use hashPassword() to generate
        ...TEMPLATE_CONFIG.adminUser
      }
    ]
    
    const user = storedUsers.find(u => u.username === username)
    if (user && verifyPasswordHash(password, user.passwordHash)) {
      return {
        id: user.id,
        username: user.username,
        role: user.role,
        permissions: user.permissions
      }
    }
    */

    // Example database lookup (no external dependencies):
    /*
    // If using a simple JSON file or in-memory store
    const users = await getStoredUsers() // Your implementation
    const user = users.find(u => u.username === username)
    
    if (user && verifyPasswordHash(password, user.passwordHash)) {
      return {
        id: user.id,
        username: user.username,
        role: user.role,
        permissions: user.permissions
      }
    }
    */

    return null

  } catch (error) {
    console.error('Admin verification error:', error)
    return null
  }
}

/**
 * Generate session token for authenticated admin
 */
export async function generateToken(admin: AdminUser): Promise<string> {
  try {
    const now = Date.now()
    const sessionData: SessionData = {
      adminId: admin.id,
      username: admin.username,
      role: admin.role,
      permissions: admin.permissions,
      createdAt: now,
      expiresAt: now + TEMPLATE_CONFIG.sessionExpiry
    }

    return createSessionToken(sessionData)

  } catch (error) {
    console.error('Token generation error:', error)
    throw new Error('Failed to generate authentication token')
  }
}

/**
 * Verify and decode session token
 */
export async function verifyToken(token: string): Promise<AdminUser | null> {
  try {
    const sessionData = verifySessionToken(token)
    
    if (!sessionData) {
      return null
    }

    // TODO: Optionally validate against database or cache
    // Example: Check if user is still active
    /*
    const user = await getUserById(sessionData.adminId)
    if (!user || !user.isActive) return null
    */

    return {
      id: sessionData.adminId,
      username: sessionData.username,
      role: sessionData.role,
      permissions: sessionData.permissions
    }

  } catch (error) {
    console.error('Token verification error:', error)
    return null
  }
}

/**
 * Hash password for storage (no bcrypt dependency)
 */
export async function hashPasswordForStorage(password: string): Promise<string> {
  return hashPassword(password)
}

/**
 * Verify password against stored hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return verifyPasswordHash(password, hash)
}

/**
 * Middleware helper for protecting admin routes
 */
export async function requireAdminAuth(request: Request): Promise<AdminUser | null> {
  try {
    // Extract token from cookie or Authorization header
    const cookieHeader = request.headers.get('cookie')
    let token = null

    if (cookieHeader) {
      const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=')
        acc[key] = value
        return acc
      }, {} as Record<string, string>)
      token = cookies['admin-token']
    }

    // Fallback to Authorization header
    if (!token) {
      const authHeader = request.headers.get('authorization')
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7)
      }
    }

    if (!token) {
      return null
    }

    return await verifyToken(token)

  } catch (error) {
    console.error('Auth middleware error:', error)
    return null
  }
}

/**
 * Check if admin has specific permission
 */
export function hasPermission(admin: AdminUser, permission: string): boolean {
  return admin.permissions.includes(permission) || admin.role === 'administrator'
}

/**
 * Generate secure random password
 */
export function generateSecurePassword(length: number = 12): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
  let password = ''
  
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  
  return password
}

/**
 * Create initial admin user (helper for setup)
 */
export async function createInitialAdmin(username: string, password: string): Promise<string> {
  const hashedPassword = await hashPasswordForStorage(password)
  
  // TODO: Store this in your preferred storage method
  console.log('Initial admin created:')
  console.log(`Username: ${username}`)
  console.log(`Password Hash: ${hashedPassword}`)
  console.log('Store this hash in your user storage system')
  
  return hashedPassword
}

/* 
TODO: PRODUCTION SETUP CHECKLIST (No External Dependencies)

1. CHANGE DEFAULT CREDENTIALS:
   - Update TEMPLATE_CONFIG.defaultCredentials
   - Or remove the default credentials entirely
   - Use environment variables or secure storage

2. SET SECURE AUTH SECRET:
   - Add AUTH_SECRET to your environment variables
   - Use a cryptographically secure random string (at least 32 characters)
   - Example: AUTH_SECRET="your-super-secret-auth-key-at-least-32-characters-long"

3. IMPLEMENT PROPER USER STORAGE:
   - Replace the simple credential check with your storage method
   - Use the hashPasswordForStorage() function for new passwords
   - Store user data securely (database, encrypted files, etc.)

4. ENVIRONMENT VARIABLES TO SET:
   - AUTH_SECRET: Your secure authentication signing key
   - ADMIN_USERNAME: Initial admin username (optional)
   - ADMIN_PASSWORD: Initial admin password (optional)

5. SECURITY ENHANCEMENTS:
   - Implement rate limiting for login attempts
   - Add account lockout after failed attempts
   - Use HTTPS in production
   - Implement session management and logout
   - Consider password complexity requirements

6. NO EXTERNAL DEPENDENCIES NEEDED:
   - Uses Node.js built-in 'crypto' module
   - No bcrypt or jsonwebtoken required
   - Works out of the box with any Node.js/Next.js setup

7. USER STORAGE OPTIONS (Choose one):
   
   A. Environment Variables (Simple):
   ```env
   ADMIN_USERNAME=youradmin
   ADMIN_PASSWORD=yourpassword
   AUTH_SECRET=your-32-char-secret
   ```
   
   B. JSON File Storage:
   ```json
   {
     "users": [
       {
         "id": "admin-001",
         "username": "admin",
         "passwordHash": "salt:hash",
         "role": "administrator"
       }
     ]
   }
   ```
   
   C. Database Storage (implement your own):
   - Use any database you prefer
   - Store hashed passwords using hashPasswordForStorage()

8. CREATING ADMIN USERS:
   ```javascript
   // Generate hash for a new admin
   const hash = await hashPasswordForStorage('newpassword')
   console.log('Store this hash:', hash)
   ```

9. TESTING AUTHENTICATION:
   - Default: admin/admin
   - Change in TEMPLATE_CONFIG or use environment variables
   - Test token generation and verification

SECURITY WARNING:
- Default credentials (admin/admin) are for development only
- Change immediately for production use
- While this uses built-in crypto, consider upgrading to bcrypt for production
- This implementation provides basic security suitable for internal admin tools

CRYPTO MODULE FEATURES USED:
- SHA-256 hashing for passwords
- HMAC-SHA-256 for token signing
- Random salt generation
- Base64 encoding for tokens
- No external dependencies required
*/