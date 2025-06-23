// models/index.ts
import mongoose, { Schema, Document, Model, Types } from 'mongoose'

// Call Booking Interface
export interface ICallBooking extends Document {
  _id: Types.ObjectId
  formData: {
    firstName: string
    lastName: string
    email: string
    phone: string
    company?: string
    projectType?: string
    budget?: string
    timeline?: string
    message: string
    preferredDate: Date
    preferredTime: string
    timeZone: string
    hearAboutUs?: string
    urgency: 'low' | 'normal' | 'high' | 'urgent'
    newsletter: boolean
  }
  callType: 'strategy-call' | 'discovery-call' | 'consultation'
  callInfo: {
    title: string
    duration: string
    subtitle: string
  }
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  submittedAt: Date
  confirmedAt?: Date
  completedAt?: Date
  source: string
  referenceId: string
}

// Contact Message Interface
export interface IContactMessage extends Document {
  _id: Types.ObjectId
  formData: {
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
    priority: 'low' | 'normal' | 'high' | 'urgent'
    newsletter: boolean
  }
  method: 'general-inquiry' | 'project-quote' | 'support' | 'partnership'
  status: 'new' | 'in-progress' | 'responded' | 'closed'
  assignedTo?: Types.ObjectId
  responseRequired: boolean
  submittedAt: Date
  respondedAt?: Date
  source: string
  referenceId: string
}

// Newsletter Subscriber Interface
export interface INewsletterSubscriber extends Document {
  _id: Types.ObjectId
  email: string
  firstName?: string
  lastName?: string
  subscribedAt: Date
  status: 'active' | 'unsubscribed' | 'bounced'
  source: string
  preferences: {
    marketing: boolean
    updates: boolean
    newsletters: boolean
  }
}

// Call Booking Schema
const CallBookingSchema = new Schema<ICallBooking>({
  formData: {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    projectType: { type: String, trim: true },
    budget: { type: String, trim: true },
    timeline: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    preferredDate: { type: Date, required: true },
    preferredTime: { type: String, required: true },
    timeZone: { type: String, default: 'EST' },
    hearAboutUs: { type: String, trim: true },
    urgency: { 
      type: String, 
      default: 'normal', 
      enum: ['low', 'normal', 'high', 'urgent'] as const
    },
    newsletter: { type: Boolean, default: true }
  },
  callType: { 
    type: String, 
    required: true,
    enum: ['strategy-call', 'discovery-call', 'consultation'] as const
  },
  callInfo: {
    title: { type: String, required: true },
    duration: { type: String, required: true },
    subtitle: { type: String, required: true }
  },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'] as const,
    default: 'pending'
  },
  submittedAt: { type: Date, default: Date.now },
  confirmedAt: { type: Date },
  completedAt: { type: Date },
  source: { type: String, default: 'book_call_page' },
  referenceId: { type: String, required: true, unique: true }
}, {
  timestamps: true
})

// Contact Message Schema
const ContactMessageSchema = new Schema<IContactMessage>({
  formData: {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    company: { type: String, trim: true },
    projectType: { type: String, trim: true },
    budget: { type: String, trim: true },
    timeline: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    hearAboutUs: { type: String, trim: true },
    priority: { 
      type: String, 
      default: 'normal',
      enum: ['low', 'normal', 'high', 'urgent'] as const
    },
    newsletter: { type: Boolean, default: true }
  },
  method: { 
    type: String, 
    enum: ['general-inquiry', 'project-quote', 'support', 'partnership'] as const,
    required: true 
  },
  status: { 
    type: String, 
    enum: ['new', 'in-progress', 'responded', 'closed'] as const,
    default: 'new'
  },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'TeamMember' },
  responseRequired: { type: Boolean, default: true },
  submittedAt: { type: Date, default: Date.now },
  respondedAt: { type: Date },
  source: { type: String, default: 'contact_form' },
  referenceId: { type: String, required: true, unique: true }
}, {
  timestamps: true
})

// Newsletter Subscriber Schema
const NewsletterSubscriberSchema = new Schema<INewsletterSubscriber>({
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true 
  },
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  subscribedAt: { type: Date, default: Date.now },
  status: { 
    type: String, 
    enum: ['active', 'unsubscribed', 'bounced'] as const,
    default: 'active'
  },
  source: { type: String, required: true },
  preferences: {
    marketing: { type: Boolean, default: true },
    updates: { type: Boolean, default: true },
    newsletters: { type: Boolean, default: true }
  }
}, {
  timestamps: true
})
// models/index.ts - Add this to your existing models file

// Career Job Interface
export interface ICareerJob extends Document {
  _id: Types.ObjectId
  title: string
  department: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  location: string
  experience: string
  salary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  status: 'active' | 'inactive' | 'filled'
  posted: Date
  updatedAt: Date
  createdBy: string
}

// Career Job Schema
const CareerJobSchema = new Schema<ICareerJob>({
  title: { 
    type: String, 
    required: true, 
    trim: true 
  },
  department: { 
    type: String, 
    required: true, 
    trim: true,
    enum: ['Design', 'Development', 'Marketing', 'Strategy', 'Operations', 'Leadership']
  },
  type: { 
    type: String, 
    required: true,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship']
  },
  location: { 
    type: String, 
    required: true, 
    trim: true 
  },
  experience: { 
    type: String, 
    required: true, 
    trim: true 
  },
  salary: { 
    type: String, 
    required: true, 
    trim: true 
  },
  description: { 
    type: String, 
    required: true, 
    trim: true 
  },
  responsibilities: [{ 
    type: String, 
    required: true 
  }],
  requirements: [{ 
    type: String, 
    required: true 
  }],
  status: { 
    type: String, 
    enum: ['active', 'inactive', 'filled'],
    default: 'active'
  },
  posted: { 
    type: Date, 
    default: Date.now 
  },
  createdBy: { 
    type: String, 
    required: true 
  }
}, {
  timestamps: true
})

// Create indexes for better performance
CareerJobSchema.index({ status: 1, department: 1 })
CareerJobSchema.index({ posted: -1 })
CareerJobSchema.index({ title: 'text', description: 'text' })

// Export model
export const CareerJob: Model<ICareerJob> = 
  mongoose.models.CareerJob || mongoose.model<ICareerJob>('CareerJob', CareerJobSchema)

// Create indexes for better performance
CallBookingSchema.index({ 'formData.email': 1 })
CallBookingSchema.index({ submittedAt: -1 })
CallBookingSchema.index({ status: 1 })
CallBookingSchema.index({ referenceId: 1 })

ContactMessageSchema.index({ 'formData.email': 1 })
ContactMessageSchema.index({ submittedAt: -1 })
ContactMessageSchema.index({ status: 1, method: 1 })
ContactMessageSchema.index({ referenceId: 1 })

NewsletterSubscriberSchema.index({ email: 1 })
NewsletterSubscriberSchema.index({ status: 1 })

// Export models with proper error handling
export const CallBooking: Model<ICallBooking> = 
  mongoose.models.CallBooking || mongoose.model<ICallBooking>('CallBooking', CallBookingSchema)

export const ContactMessage: Model<IContactMessage> = 
  mongoose.models.ContactMessage || mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema)

export const NewsletterSubscriber: Model<INewsletterSubscriber> = 
  mongoose.models.NewsletterSubscriber || mongoose.model<INewsletterSubscriber>('NewsletterSubscriber', NewsletterSubscriberSchema)