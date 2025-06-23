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
  return `${timestamp}-${random}`
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{9,15}$/
  return phoneRegex.test(phone.replace(/\s+/g, ''))
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
}

// Call Booking Service
export class CallBookingService {
  static async create(bookingData: BookingData) {
    try {
      await connectDB()
      
      if (!bookingData.formData?.email || !validateEmail(bookingData.formData.email)) {
        throw new Error('Valid email is required')
      }
      
      if (!bookingData.formData?.phone || !validatePhone(bookingData.formData.phone)) {
        throw new Error('Valid phone number is required')
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
          email: bookingData.formData.email.toLowerCase(),
          message: sanitizeInput(bookingData.formData.message)
        }
      })
      
      return await booking.save()
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async findById(id: string) {
    try {
      await connectDB()
      return await CallBooking.findById(id)
    } catch (error: unknown) {
      throw error
    }
  }

  static async findByReferenceId(referenceId: string) {
    try {
      await connectDB()
      return await CallBooking.findOne({ referenceId })
    } catch (error: unknown) {
      throw error
    }
  }

  static async updateStatus(id: string, status: string, additionalData: Record<string, any> = {}) {
    try {
      await connectDB()
      
      const updateData: Record<string, any> = { status, ...additionalData }
      
      if (status === 'confirmed') {
        updateData.confirmedAt = new Date()
      } else if (status === 'completed') {
        updateData.completedAt = new Date()
      }
      
      return await CallBooking.findByIdAndUpdate(id, updateData, { new: true })
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async getAll(filters: Record<string, any> = {}, page: number = 1, limit: number = 10) {
    try {
      await connectDB()
      
      const skip = (page - 1) * limit
      
      const bookings = await CallBooking.find(filters)
        .sort({ submittedAt: -1 })
        .skip(skip)
        .limit(limit)
        
      const total = await CallBooking.countDocuments(filters)
      
      return {
        bookings,
        pagination: {
          current: page,
          total: Math.ceil(total / limit),
          count: bookings.length,
          totalItems: total
        }
      }
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async getStats() {
    try {
      await connectDB()
      
      const total = await CallBooking.countDocuments()
      const pending = await CallBooking.countDocuments({ status: 'pending' })
      const confirmed = await CallBooking.countDocuments({ status: 'confirmed' })
      const completed = await CallBooking.countDocuments({ status: 'completed' })
      const cancelled = await CallBooking.countDocuments({ status: 'cancelled' })
      
      return { total, pending, confirmed, completed, cancelled }
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async delete(id: string) {
    try {
      await connectDB()
      
      if (!id) {
        throw new Error('Booking ID is required')
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
      
      if (!messageData.formData?.email || !validateEmail(messageData.formData.email)) {
        throw new Error('Valid email is required')
      }
      
      const referenceId = generateReferenceId()
      const message = new ContactMessage({
        ...messageData,
        referenceId,
        formData: {
          ...messageData.formData,
          firstName: sanitizeInput(messageData.formData.firstName),
          lastName: sanitizeInput(messageData.formData.lastName),
          email: messageData.formData.email.toLowerCase(),
          message: sanitizeInput(messageData.formData.message)
        }
      })
      
      return await message.save()
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async findById(id: string) {
    try {
      await connectDB()
      return await ContactMessage.findById(id)
    } catch (error: unknown) {
      throw error
    }
  }

  static async findByReferenceId(referenceId: string) {
    try {
      await connectDB()
      return await ContactMessage.findOne({ referenceId })
    } catch (error: unknown) {
      throw error
    }
  }

  static async updateStatus(id: string, status: string, assignedTo?: string) {
    try {
      await connectDB()
      
      const updateData: Record<string, any> = { status }
      
      if (assignedTo) {
        updateData.assignedTo = new Types.ObjectId(assignedTo)
      }
      
      if (status === 'responded') {
        updateData.respondedAt = new Date()
      }
      
      return await ContactMessage.findByIdAndUpdate(id, updateData, { new: true })
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async getAll(filters: Record<string, any> = {}, page: number = 1, limit: number = 10) {
    try {
      await connectDB()
      
      const skip = (page - 1) * limit
      
      const messages = await ContactMessage.find(filters)
        .sort({ submittedAt: -1 })
        .skip(skip)
        .limit(limit)
        
      const total = await ContactMessage.countDocuments(filters)
      
      return {
        messages,
        pagination: {
          current: page,
          total: Math.ceil(total / limit),
          count: messages.length,
          totalItems: total
        }
      }
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async getStats() {
    try {
      await connectDB()
      
      const total = await ContactMessage.countDocuments()
      const newMessages = await ContactMessage.countDocuments({ status: 'new' })
      const inProgress = await ContactMessage.countDocuments({ status: 'in-progress' })
      const responded = await ContactMessage.countDocuments({ status: 'responded' })
      const closed = await ContactMessage.countDocuments({ status: 'closed' })
      
      return { total, new: newMessages, inProgress, responded, closed }
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async delete(id: string) {
    try {
      await connectDB()
      
      if (!id) {
        throw new Error('Message ID is required')
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
      
      // Check if already subscribed
      const existing = await NewsletterSubscriber.findOne({ email: email.toLowerCase() })
      
      if (existing) {
        if (existing.status === 'unsubscribed') {
          existing.status = 'active'
          existing.subscribedAt = new Date()
          return await existing.save()
        }
        return existing
      }
      
      const subscriber = new NewsletterSubscriber({
        email: email.toLowerCase(),
        firstName: firstName ? sanitizeInput(firstName) : undefined,
        lastName: lastName ? sanitizeInput(lastName) : undefined,
        source
      })
      
      return await subscriber.save()
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async unsubscribe(email: string) {
    try {
      await connectDB()
      
      return await NewsletterSubscriber.findOneAndUpdate(
        { email: email.toLowerCase() },
        { status: 'unsubscribed' },
        { new: true }
      )
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async getStats() {
    try {
      await connectDB()
      
      const total = await NewsletterSubscriber.countDocuments()
      const active = await NewsletterSubscriber.countDocuments({ status: 'active' })
      const unsubscribed = await NewsletterSubscriber.countDocuments({ status: 'unsubscribed' })
      const bounced = await NewsletterSubscriber.countDocuments({ status: 'bounced' })
      
      return { total, active, unsubscribed, bounced }
      
    } catch (error: unknown) {
      throw error
    }
  }
}

// Database health check
export async function checkDatabaseConnection(): Promise<{ status: string; message: string }> {
  try {
    await connectDB()
    return { status: 'connected', message: 'Database connection successful' }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return { status: 'error', message: errorMessage }
  }
}