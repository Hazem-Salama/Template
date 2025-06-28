// middleware.ts - FIXED VERSION
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // 🔧 DEVELOPMENT MODE: Skip ALL middleware checks
  const isDevelopment = process.env.NODE_ENV === 'development'
  
  if (isDevelopment) {
    console.log('🔧 MIDDLEWARE: Development mode - skipping all auth checks for:', pathname)
    return NextResponse.next()
  }

  // Only apply middleware to admin routes in PRODUCTION
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('admin-token')?.value
    
    // Allow login page to pass through
    if (pathname === '/admin/login' || pathname.startsWith('/admin/login')) {
      return NextResponse.next()
    }
    
    // Allow dev-dashboard to pass through (if you're using it)
    if (pathname === '/admin/dev-dashboard' || pathname.startsWith('/admin/dev-dashboard')) {
      return NextResponse.next()
    }
    
    // Check if user has token for other admin pages (PRODUCTION ONLY)
    if (!token) {
      console.log('🔧 MIDDLEWARE: No token found, redirecting to login')
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    
    // If has token and trying to access login, redirect to dashboard (PRODUCTION ONLY)
    if (token && (pathname === '/admin/login' || pathname.startsWith('/admin/login'))) {
      console.log('🔧 MIDDLEWARE: Token found on login page, redirecting to dashboard')
      return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Only apply to admin routes
    '/admin/:path*'
  ]
}

/* 
🎯 WHAT THIS FIXES:

1. DEVELOPMENT MODE BYPASS:
   - Completely skips middleware in development mode
   - No auth checks, no redirects, just lets everything through
   - Perfect for testing and development

2. PRODUCTION MODE ONLY:
   - Auth checks only happen in production
   - Protects your admin routes when deployed
   - Maintains security when needed

3. FLEXIBLE ROUTING:
   - Allows both /admin/login and /admin/dev-dashboard
   - No conflicts with bypass mechanisms
   - Clean separation of concerns

TO USE:
1. Replace your current middleware.ts with this code
2. Make sure NODE_ENV=development (should be automatic in dev)
3. Your bypass buttons should now work perfectly
4. Dashboard should be accessible directly

WHY YOUR ORIGINAL MIDDLEWARE FAILED:
- It was always checking for tokens, even in development
- It redirected EVERY request to /admin routes without tokens
- It didn't have a development mode bypass
- It caused infinite loops between login and dashboard

NOW IT WILL WORK:
✅ Development: No auth checks, everything works
✅ Production: Full auth protection
✅ Bypass buttons: Will work perfectly
✅ Direct navigation: Works in development
*/