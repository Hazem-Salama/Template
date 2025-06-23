// lib/db-helpers.ts
import connectDB from './mongoose'
import { CallBooking, ContactMessage, NewsletterSubscriber } from '../models'
import { Types } from 'mongoose'

// TypeScript interfaces
interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  projectType?: string
  budget?: string
  timeline?: string
  message: string
  preferredDate: Date | string
  preferredTime: string
  timeZone: string
  hearAboutUs?: string
  urgency: string
  newsletter: boolean
}

interface BookingData {
  formData: BookingFormData
  callType: string
  callInfo: {
    title: string
    duration: string
    subtitle: string
  }
  submittedAt?: Date
  source: string
}

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  projectType?: string
  budget?: string
  timeline?: string
  message: string
  hearAboutUs?: string
  priority: string
  newsletter: boolean
}

interface ContactData {
  formData: ContactFormData
  method: 'general-inquiry' | 'project-quote' | 'support' | 'partnership'
  source: string
}

// Utility functions
export function generateReferenceId(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substr(2, 5).toUpperCase()
  return `REF-${timestamp}-${random}`
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  // More flexible phone validation for international numbers
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,20}$/
  return phoneRegex.test(phone.trim())
}

export function sanitizeInput(input: string): string {
  if (!input) return ''
  return input.trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/[<>]/g, '') // Remove < and > characters
    .substring(0, 1000) // Limit length
}

export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim()
}

// Call Booking Service
export class CallBookingService {
  static async create(bookingData: BookingData) {
    try {
      await connectDB()
      
      // Validation
      if (!bookingData.formData?.email || !validateEmail(bookingData.formData.email)) {
        throw new Error('Valid email is required')
      }
      
      if (!bookingData.formData?.phone || !validatePhone(bookingData.formData.phone)) {
        throw new Error('Valid phone number is required')
      }

      if (!bookingData.formData?.firstName?.trim()) {
        throw new Error('First name is required')
      }

      if (!bookingData.formData?.lastName?.trim()) {
        throw new Error('Last name is required')
      }
      
      const referenceId = generateReferenceId()
      const booking = new CallBooking({
        ...bookingData,
        referenceId,
        submittedAt: bookingData.submittedAt || new Date(),
        formData: {
          ...bookingData.formData,
          firstName: sanitizeInput(bookingData.formData.firstName),
          lastName: sanitizeInput(bookingData.formData.lastName),
          email: sanitizeEmail(bookingData.formData.email),
          phone: sanitizeInput(bookingData.formData.phone),
          company: bookingData.formData.company ? sanitizeInput(bookingData.formData.company) : undefined,
          message: sanitizeInput(bookingData.formData.message),
          projectType: bookingData.formData.projectType ? sanitizeInput(bookingData.formData.projectType) : undefined,
          budget: bookingData.formData.budget ? sanitizeInput(bookingData.formData.budget) : undefined,
          timeline: bookingData.formData.timeline ? sanitizeInput(bookingData.formData.timeline) : undefined,
          hearAboutUs: bookingData.formData.hearAboutUs ? sanitizeInput(bookingData.formData.hearAboutUs) : undefined
        }
      })
      
      return await booking.save()
      
    } catch (error: unknown) {
      console.error('Error creating booking:', error)
      throw error
    }
  }

  static async findById(id: string) {
    try {
      await connectDB()
      
      if (!Types.ObjectId.isValid(id)) {
        return null
      }
      
      return await CallBooking.findById(id)
    } catch (error: unknown) {
      console.error('Error finding booking by ID:', error)
      throw error
    }
  }

  static async findByReferenceId(referenceId: string) {
    try {
      await connectDB()
      return await CallBooking.findOne({ referenceId: sanitizeInput(referenceId) })
    } catch (error: unknown) {
      console.error('Error finding booking by reference ID:', error)
      throw error
    }
  }

  static async updateStatus(id: string, status: string, additionalData: Record<string, any> = {}) {
    try {
      await connectDB()
      
      if (!Types.ObjectId.isValid(id)) {
        throw new Error('Invalid booking ID')
      }
      
      const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled']
      if (!validStatuses.includes(status)) {
        throw new Error('Invalid status')
      }
      
      const updateData: Record<string, any> = { 
        status: sanitizeInput(status), 
        updatedAt: new Date(),
        ...additionalData 
      }
      
      if (status === 'confirmed') {
        updateData.confirmedAt = new Date()
      } else if (status === 'completed') {
        updateData.completedAt = new Date()
      } else if (status === 'cancelled') {
        updateData.cancelledAt = new Date()
      }
      
      return await CallBooking.findByIdAndUpdate(id, updateData, { new: true })
      
    } catch (error: unknown) {
      console.error('Error updating booking status:', error)
      throw error
    }
  }

  static async getAll(filters: Record<string, any> = {}, page: number = 1, limit: number = 10) {
    try {
      await connectDB()
      
      // Sanitize pagination
      const safePage = Math.max(1, Math.floor(page))
      const safeLimit = Math.min(100, Math.max(1, Math.floor(limit))) // Max 100 items per page
      const skip = (safePage - 1) * safeLimit
      
      const bookings = await CallBooking.find(filters)
        .sort({ submittedAt: -1 })
        .skip(skip)
        .limit(safeLimit)
        .lean() // Better performance
        
      const total = await CallBooking.countDocuments(filters)
      
      return {
        bookings,
        pagination: {
          current: safePage,
          total: Math.ceil(total / safeLimit),
          count: bookings.length,
          totalItems: total
        }
      }
      
    } catch (error: unknown) {
      console.error('Error getting bookings:', error)
      throw error
    }
  }

  static async getStats() {
    try {
      await connectDB()
      
      const [total, pending, confirmed, completed, cancelled] = await Promise.all([
        CallBooking.countDocuments(),
        CallBooking.countDocuments({ status: 'pending' }),
        CallBooking.countDocuments({ status: 'confirmed' }),
        CallBooking.countDocuments({ status: 'completed' }),
        CallBooking.countDocuments({ status: 'cancelled' })
      ])
      
      return { total, pending, confirmed, completed, cancelled }
      
    } catch (error: unknown) {
      console.error('Error getting booking stats:', error)
      throw error
    }
  }

  static async delete(id: string) {
    try {
      await connectDB()
      
      if (!id || !Types.ObjectId.isValid(id)) {
        throw new Error('Valid booking ID is required')
      }
      
      const deletedBooking = await CallBooking.findByIdAndDelete(id)
      
      if (!deletedBooking) {
        return null
      }
      
      return deletedBooking
      
    } catch (error: unknown) {
      console.error('Error deleting booking:', error)
      throw error
    }
  }
}

// Contact Message Service
export class ContactMessageService {
  static async create(messageData: ContactData) {
    try {
      await connectDB()
      
      // Validation
      if (!messageData.formData?.email || !validateEmail(messageData.formData.email)) {
        throw new Error('Valid email is required')
      }

      if (!messageData.formData?.firstName?.trim()) {
        throw new Error('First name is required')
      }

      if (!messageData.formData?.lastName?.trim()) {
        throw new Error('Last name is required')
      }

      if (!messageData.formData?.message?.trim()) {
        throw new Error('Message is required')
      }
      
      const referenceId = generateReferenceId()
      const message = new ContactMessage({
        ...messageData,
        referenceId,
        submittedAt: new Date(),
        formData: {
          ...messageData.formData,
          firstName: sanitizeInput(messageData.formData.firstName),
          lastName: sanitizeInput(messageData.formData.lastName),
          email: sanitizeEmail(messageData.formData.email),
          phone: messageData.formData.phone ? sanitizeInput(messageData.formData.phone) : undefined,
          company: messageData.formData.company ? sanitizeInput(messageData.formData.company) : undefined,
          message: sanitizeInput(messageData.formData.message),
          projectType: messageData.formData.projectType ? sanitizeInput(messageData.formData.projectType) : undefined,
          budget: messageData.formData.budget ? sanitizeInput(messageData.formData.budget) : undefined,
          timeline: messageData.formData.timeline ? sanitizeInput(messageData.formData.timeline) : undefined,
          hearAboutUs: messageData.formData.hearAboutUs ? sanitizeInput(messageData.formData.hearAboutUs) : undefined
        }
      })
      
      return await message.save()
      
    } catch (error: unknown) {
      console.error('Error creating contact message:', error)
      throw error
    }
  }

  static async findById(id: string) {
    try {
      await connectDB()
      
      if (!Types.ObjectId.isValid(id)) {
        return null
      }
      
      return await ContactMessage.findById(id)
    } catch (error: unknown) {
      console.error('Error finding message by ID:', error)
      throw error
    }
  }

  static async findByReferenceId(referenceId: string) {
    try {
      await connectDB()
      return await ContactMessage.findOne({ referenceId: sanitizeInput(referenceId) })
    } catch (error: unknown) {
      console.error('Error finding message by reference ID:', error)
      throw error
    }
  }

  static async updateStatus(id: string, status: string, assignedTo?: string) {
    try {
      await connectDB()
      
      if (!Types.ObjectId.isValid(id)) {
        throw new Error('Invalid message ID')
      }
      
      const validStatuses = ['new', 'in-progress', 'responded', 'closed']
      if (!validStatuses.includes(status)) {
        throw new Error('Invalid status')
      }
      
      const updateData: Record<string, any> = { 
        status: sanitizeInput(status),
        updatedAt: new Date()
      }
      
      if (assignedTo && Types.ObjectId.isValid(assignedTo)) {
        updateData.assignedTo = new Types.ObjectId(assignedTo)
      }
      
      if (status === 'responded') {
        updateData.respondedAt = new Date()
      } else if (status === 'closed') {
        updateData.closedAt = new Date()
      }
      
      return await ContactMessage.findByIdAndUpdate(id, updateData, { new: true })
      
    } catch (error: unknown) {
      console.error('Error updating message status:', error)
      throw error
    }
  }

  static async getAll(filters: Record<string, any> = {}, page: number = 1, limit: number = 10) {
    try {
      await connectDB()
      
      // Sanitize pagination
      const safePage = Math.max(1, Math.floor(page))
      const safeLimit = Math.min(100, Math.max(1, Math.floor(limit)))
      const skip = (safePage - 1) * safeLimit
      
      const messages = await ContactMessage.find(filters)
        .sort({ submittedAt: -1 })
        .skip(skip)
        .limit(safeLimit)
        .lean()
        
      const total = await ContactMessage.countDocuments(filters)
      
      return {
        messages,
        pagination: {
          current: safePage,
          total: Math.ceil(total / safeLimit),
          count: messages.length,
          totalItems: total
        }
      }
      
    } catch (error: unknown) {
      console.error('Error getting messages:', error)
      throw error
    }
  }

  static async getStats() {
    try {
      await connectDB()
      
      const [total, newMessages, inProgress, responded, closed] = await Promise.all([
        ContactMessage.countDocuments(),
        ContactMessage.countDocuments({ status: 'new' }),
        ContactMessage.countDocuments({ status: 'in-progress' }),
        ContactMessage.countDocuments({ status: 'responded' }),
        ContactMessage.countDocuments({ status: 'closed' })
      ])
      
      return { total, new: newMessages, inProgress, responded, closed }
      
    } catch (error: unknown) {
      console.error('Error getting message stats:', error)
      throw error
    }
  }

  static async delete(id: string) {
    try {
      await connectDB()
      
      if (!id || !Types.ObjectId.isValid(id)) {
        throw new Error('Valid message ID is required')
      }
      
      const deletedMessage = await ContactMessage.findByIdAndDelete(id)
      
      if (!deletedMessage) {
        return null
      }
      
      return deletedMessage
      
    } catch (error: unknown) {
      console.error('Error deleting message:', error)
      throw error
    }
  }
}

// Newsletter Service
export class NewsletterService {
  static async subscribe(email: string, source: string, firstName?: string, lastName?: string) {
    try {
      await connectDB()
      
      if (!validateEmail(email)) {
        throw new Error('Valid email is required')
      }
      
      const cleanEmail = sanitizeEmail(email)
      
      // Check if already subscribed
      const existing = await NewsletterSubscriber.findOne({ email: cleanEmail })
      
      if (existing) {
        if (existing.status === 'unsubscribed') {
          existing.status = 'active'
          existing.subscribedAt = new Date()
          existing.source = sanitizeInput(source)
          return await existing.save()
        }
        return existing
      }
      
      const subscriber = new NewsletterSubscriber({
        email: cleanEmail,
        firstName: firstName ? sanitizeInput(firstName) : undefined,
        lastName: lastName ? sanitizeInput(lastName) : undefined,
        source: sanitizeInput(source),
        subscribedAt: new Date()
      })
      
      return await subscriber.save()
      
    } catch (error: unknown) {
      console.error('Error subscribing to newsletter:', error)
      throw error
    }
  }

  static async unsubscribe(email: string) {
    try {
      await connectDB()
      
      if (!validateEmail(email)) {
        throw new Error('Valid email is required')
      }
      
      return await NewsletterSubscriber.findOneAndUpdate(
        { email: sanitizeEmail(email) },
        { 
          status: 'unsubscribed',
          unsubscribedAt: new Date()
        },
        { new: true }
      )
      
    } catch (error: unknown) {
      console.error('Error unsubscribing from newsletter:', error)
      throw error
    }
  }

  static async getStats() {
    try {
      await connectDB()
      
      const [total, active, unsubscribed, bounced] = await Promise.all([
        NewsletterSubscriber.countDocuments(),
        NewsletterSubscriber.countDocuments({ status: 'active' }),
        NewsletterSubscriber.countDocuments({ status: 'unsubscribed' }),
        NewsletterSubscriber.countDocuments({ status: 'bounced' })
      ])
      
      return { total, active, unsubscribed, bounced }
      
    } catch (error: unknown) {
      console.error('Error getting newsletter stats:', error)
      throw error
    }
  }

  static async getSubscribers(page: number = 1, limit: number = 50) {
    try {
      await connectDB()
      
      const safePage = Math.max(1, Math.floor(page))
      const safeLimit = Math.min(100, Math.max(1, Math.floor(limit)))
      const skip = (safePage - 1) * safeLimit
      
      const subscribers = await NewsletterSubscriber.find({ status: 'active' })
        .sort({ subscribedAt: -1 })
        .skip(skip)
        .limit(safeLimit)
        .lean()
        
      const total = await NewsletterSubscriber.countDocuments({ status: 'active' })
      
      return {
        subscribers,
        pagination: {
          current: safePage,
          total: Math.ceil(total / safeLimit),
          count: subscribers.length,
          totalItems: total
        }
      }
      
    } catch (error: unknown) {
      console.error('Error getting newsletter subscribers:', error)
      throw error
    }
  }
}

// Database health check
export async function checkDatabaseConnection(): Promise<{ status: string; message: string }> {
  try {
    await connectDB()
    
    // Test with a simple query
    await ContactMessage.findOne().limit(1)
    
    return { 
      status: 'connected', 
      message: 'Database connection successful and operational' 
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown database error'
    console.error('Database connection check failed:', errorMessage)
    
    return { 
      status: 'error', 
      message: `Database connection failed: ${errorMessage}` 
    }
  }
}

// Cleanup utilities for maintenance
export class DatabaseCleanup {
  // Remove old test data (useful for development)
  static async removeTestData() {
    try {
      await connectDB()
      
      const testPatterns = [
        /test@/i,
        /example@/i,
        /demo@/i,
        /@test\./i,
        /@example\./i
      ]
      
      let deletedCount = 0
      
      for (const pattern of testPatterns) {
        const deleted = await ContactMessage.deleteMany({
          'formData.email': { $regex: pattern }
        })
        deletedCount += deleted.deletedCount || 0
      }
      
      return { deletedCount, message: `Removed ${deletedCount} test records` }
      
    } catch (error: unknown) {
      console.error('Error cleaning test data:', error)
      throw error
    }
  }

  // Remove old completed bookings (older than specified days)
  static async archiveOldBookings(daysOld: number = 90) {
    try {
      await connectDB()
      
      const cutoffDate = new Date()
      cutoffDate.setDate(cutoffDate.getDate() - daysOld)
      
      const result = await CallBooking.deleteMany({
        status: 'completed',
        completedAt: { $lt: cutoffDate }
      })
      
      return { 
        deletedCount: result.deletedCount || 0, 
        message: `Archived ${result.deletedCount || 0} old bookings` 
      }
      
    } catch (error: unknown) {
      console.error('Error archiving old bookings:', error)
      throw error
    }
  }
}

// Export all services for easy access
export const dbServices = {
  bookings: CallBookingService,
  messages: ContactMessageService,
  newsletter: NewsletterService,
  cleanup: DatabaseCleanup
}

export default {
  CallBookingService,
  ContactMessageService,
  NewsletterService,
  DatabaseCleanup,
  checkDatabaseConnection,
  generateReferenceId,
  validateEmail,
  validatePhone,
  sanitizeInput,
  sanitizeEmail
}