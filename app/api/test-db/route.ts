// app/api/test-db/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { checkDatabaseConnection } from '@/lib/db-helpers'
import connectDB from '@/lib/mongoose'
import { emailService } from '@/lib/email-service'

export async function GET(request: NextRequest) {
  try {
    console.log('🧪 Testing Unlimited Creative Agency database connection...')
    
    // Test MongoDB connection
    const dbStatus = await checkDatabaseConnection()
    console.log('📊 Database Status:', dbStatus)
    
    // Test Mongoose connection
    let mongooseStatus = 'disconnected'
    try {
      await connectDB()
      mongooseStatus = 'connected'
      console.log('✅ Mongoose connection successful')
    } catch (mongooseError) {
      console.error('❌ Mongoose connection failed:', mongooseError)
      mongooseStatus = 'error'
    }
    
    // Test email service (optional)
    let emailStatus = 'not_tested'
    try {
      const emailTest = await emailService.testConnection()
      emailStatus = emailTest ? 'connected' : 'failed'
      console.log('📧 Email Status:', emailStatus)
    } catch (emailError) {
      console.error('❌ Email test failed:', emailError)
      emailStatus = 'error'
    }
    
    // Environment check
    const envStatus = {
      mongoUri: !!process.env.MONGODB_URI,
      database: process.env.DATABASE_NAME || 'Unlimited',
      emailUser: !!process.env.EMAIL_USER,
      emailService: process.env.EMAIL_SERVICE || 'Not set',
      nodeEnv: process.env.NODE_ENV
    }
    
    console.log('🔧 Environment Status:', envStatus)
    
    const allGood = dbStatus.status === 'connected' && 
                   mongooseStatus === 'connected' && 
                   envStatus.mongoUri && 
                   envStatus.emailUser
    
    return NextResponse.json({
      success: allGood,
      message: allGood ? 'All systems operational' : 'Some issues detected',
      database: {
        status: dbStatus.status,
        message: dbStatus.message,
        mongoose: mongooseStatus
      },
      email: {
        status: emailStatus,
        configured: envStatus.emailUser
      },
      environment: envStatus,
      timestamp: new Date().toISOString(),
      agency: 'Unlimited Creative Agency'
    })
    
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    console.error('❌ Database test failed:', errorMessage)
    
    return NextResponse.json({
      success: false,
      error: 'Database test failed',
      message: errorMessage,
      timestamp: new Date().toISOString(),
      agency: 'Unlimited Creative Agency'
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('🧪 Running comprehensive system test...')
    
    const testData = await request.json()
    console.log('🔍 Test data received:', testData)
    
    // Test database write operation
    const { CallBookingService, ContactMessageService, NewsletterService } = await import('@/lib/db-helpers')
    
    // Test contact creation
    const testContact = {
      formData: {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@unlimited-test.com',
        message: 'System test message',
        priority: 'normal',
        newsletter: false
      },
      method: 'general-inquiry' as const,
      source: 'system_test'
    }
    
    console.log('📝 Testing contact creation...')
    const contact = await ContactMessageService.create(testContact)
    console.log('✅ Test contact created:', contact.referenceId)
    
    // Test newsletter subscription
    console.log('📧 Testing newsletter subscription...')
    const newsletter = await NewsletterService.subscribe(
      'test@unlimited-test.com',
      'system_test',
      'Test',
      'User'
    )
    console.log('✅ Test newsletter subscription created')
    
    // Clean up test data (optional)
    console.log('🧹 Test completed - data created for verification')
    
    return NextResponse.json({
      success: true,
      message: 'Comprehensive test completed successfully',
      results: {
        contactCreated: contact.referenceId,
        newsletterSubscribed: newsletter.email,
        database: 'connected',
        timestamp: new Date().toISOString()
      },
      agency: 'Unlimited Creative Agency'
    })
    
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    console.error('❌ Comprehensive test failed:', errorMessage)
    
    return NextResponse.json({
      success: false,
      error: 'Comprehensive test failed',
      message: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error : undefined,
      timestamp: new Date().toISOString(),
      agency: 'Unlimited Creative Agency'
    }, { status: 500 })
  }
}