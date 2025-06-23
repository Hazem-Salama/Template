// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if this is an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('admin-token')?.value
    
    // If no token and not on login page, redirect to login
    if (!token && !request.nextUrl.pathname.includes('/admin/login')) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    
    // If has token and on login page, redirect to dashboard
    if (token && request.nextUrl.pathname.includes('/admin/login')) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}