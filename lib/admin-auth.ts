// lib/admin-auth.ts
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret-key-change-in-production')

export interface AdminUser {
  id: string
  username: string
  role: 'admin' | 'super-admin'
  loginTime: number
}

// Admin credentials - in production, store these in database with hashed passwords
const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'admin123'
}

export async function generateToken(user: AdminUser): Promise<string> {
  return await new SignJWT({ user })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret)
}

export async function verifyToken(token: string): Promise<AdminUser | null> {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload.user as AdminUser
  } catch {
    return null
  }
}

export async function verifyAdmin(username: string, password: string): Promise<AdminUser | null> {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    return {
      id: 'admin-001',
      username,
      role: 'admin',
      loginTime: Date.now()
    }
  }
  return null
}

export async function getCurrentAdmin(): Promise<AdminUser | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin-token')?.value
    
    if (!token) return null
    
    return await verifyToken(token)
  } catch {
    return null
  }
}

export async function setAdminSession(user: AdminUser): Promise<void> {
  const token = await generateToken(user)
  const cookieStore = await cookies()
  
  cookieStore.set('admin-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 // 24 hours
  })
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete('admin-token')
}

export function requireAuth(request: NextRequest): AdminUser | null {
  const token = request.cookies.get('admin-token')?.value
  
  if (!token) return null
  
  // Note: In middleware, we'll do a simpler check
  // Full verification will be done in the page components
  return { id: 'admin', username: 'admin', role: 'admin', loginTime: Date.now() }
}