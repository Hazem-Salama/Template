// app/api/admin/login/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdmin, generateToken } from '@/lib/admin-auth'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json({
        success: false,
        error: 'Username and password are required'
      }, { status: 400 })
    }

    const admin = await verifyAdmin(username, password)

    if (!admin) {
      return NextResponse.json({
        success: false,
        error: 'Invalid credentials'
      }, { status: 401 })
    }

    const token = await generateToken(admin)

    const response = NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        username: admin.username,
        role: admin.role
      }
    })

    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 // 24 hours
    })

    return response

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: 'Login failed'
    }, { status: 500 })
  }
}