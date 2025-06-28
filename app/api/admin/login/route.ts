// app/api/admin/login/route.ts - Template Admin Login API
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdmin, generateToken } from '@/lib/admin-auth'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Validate input
    if (!username || !password) {
      return NextResponse.json({
        success: false,
        error: 'Username and password are required'
      }, { status: 400 })
    }

    // Verify admin credentials using the admin-auth library
    // TODO: The admin-auth library currently uses default credentials (admin/admin)
    // Make sure to update the credentials in lib/admin-auth.ts before production
    const admin = await verifyAdmin(username, password)

    if (!admin) {
      // Add delay to prevent timing attacks
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      return NextResponse.json({
        success: false,
        error: 'Invalid credentials'
      }, { status: 401 })
    }

    // Generate JWT token for the authenticated admin
    const token = await generateToken(admin)

    // Create response with admin data (excluding sensitive information)
    const response = NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        username: admin.username,
        role: admin.role
      }
    })

    // Set secure HTTP-only cookie with the JWT token
    response.cookies.set('admin-token', token, {
      httpOnly: true, // Prevents XSS attacks
      secure: process.env.NODE_ENV === 'production', // HTTPS only in production
      sameSite: 'strict', // CSRF protection
      maxAge: 24 * 60 * 60, // 24 hours in seconds
      path: '/admin' // Restrict cookie to admin routes
    })

    return response

  } catch (error: unknown) {
    console.error('Admin login error:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Login failed'
    }, { status: 500 })
  }
}

/* 
TODO: SETUP INSTRUCTIONS (No External Dependencies Required)

1. NO ADDITIONAL PACKAGES NEEDED:
   - Uses Node.js built-in crypto module
   - No bcrypt or jsonwebtoken dependencies
   - Works immediately with any Next.js setup

2. UPDATE DEFAULT CREDENTIALS:
   - Open lib/admin-auth.ts
   - Change the default username and password in TEMPLATE_CONFIG
   - Current defaults: username="admin", password="admin"
   - For production, implement proper user management

3. SET ENVIRONMENT VARIABLES:
   - Add AUTH_SECRET to your .env.local file
   - Example: AUTH_SECRET="your-super-secret-auth-key-at-least-32-characters-long"
   - Never commit this secret to version control

4. SECURITY CONSIDERATIONS:
   - Current implementation uses built-in crypto (safer than plain text)
   - For production, consider upgrading to bcrypt for password hashing
   - Current approach is suitable for internal admin tools
   - Implements HMAC-SHA-256 for token signing

5. PRODUCTION DEPLOYMENT:
   - Ensure HTTPS is enabled
   - Set NODE_ENV=production
   - Use a secure, randomly generated AUTH_SECRET
   - Implement proper logging and monitoring

6. TESTING THE LOGIN:
   - Default credentials: username="admin", password="admin"
   - These can be changed in lib/admin-auth.ts
   - Test both successful and failed login attempts

7. AUTHENTICATION METHODS (Choose one):
   
   A. Environment Variables (Simplest):
   ```env
   ADMIN_USERNAME=youradmin
   ADMIN_PASSWORD=yourpassword
   AUTH_SECRET=your-32-char-secret
   ```
   
   B. Hardcoded in lib/admin-auth.ts:
   - Update TEMPLATE_CONFIG.defaultCredentials
   
   C. Database/File Storage:
   - Implement your preferred storage method
   - Use hashPasswordForStorage() for password hashing

8. ADDITIONAL FEATURES TO IMPLEMENT:
   - Logout endpoint (clear the admin-token cookie)
   - Session management
   - Rate limiting for login attempts
   - Account lockout policies
   - Password reset functionality

9. BUILT-IN CRYPTO FEATURES:
   - SHA-256 password hashing with salt
   - HMAC-SHA-256 token signing
   - Random salt generation
   - Base64 token encoding
   - Session expiration handling

CURRENT TEMPLATE CREDENTIALS:
- Username: admin
- Password: admin

⚠️  WARNING: Change these credentials before deploying to production!

ADVANTAGES OF NO EXTERNAL DEPENDENCIES:
- ✅ No package installation required
- ✅ Smaller bundle size
- ✅ No dependency security vulnerabilities
- ✅ Works immediately out of the box
- ✅ Uses Node.js built-in security features

SECURITY LEVEL:
- 🟡 Basic security (suitable for internal tools)
- 🟡 Better than plain text storage
- 🟢 Uses cryptographic functions
- 🟡 Consider bcrypt upgrade for high-security needs
*/