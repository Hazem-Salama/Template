// lib/careers-db-helpers.ts
import connectDB from './mongoose'
import { CareerJob } from '../models'
import { Types } from 'mongoose'

// TypeScript interfaces
interface CareerJobData {
  title: string
  department: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  location: string
  experience: string
  salary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  status?: 'active' | 'inactive' | 'filled'
  createdBy: string
}

// Utility functions
export function sanitizeInput(input: string): string {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
}

export function sanitizeArray(inputs: string[]): string[] {
  return inputs.map(input => sanitizeInput(input)).filter(input => input.length > 0)
}

// Career Job Service
export class CareerJobService {
  static async create(jobData: CareerJobData) {
    try {
      await connectDB()
      
      if (!jobData.title || !jobData.department || !jobData.description) {
        throw new Error('Title, department, and description are required')
      }
      
      const job = new CareerJob({
        ...jobData,
        title: sanitizeInput(jobData.title),
        department: sanitizeInput(jobData.department),
        location: sanitizeInput(jobData.location),
        experience: sanitizeInput(jobData.experience),
        salary: sanitizeInput(jobData.salary),
        description: sanitizeInput(jobData.description),
        responsibilities: sanitizeArray(jobData.responsibilities),
        requirements: sanitizeArray(jobData.requirements),
        status: jobData.status || 'active',
        posted: new Date()
      })
      
      return await job.save()
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async findById(id: string) {
    try {
      await connectDB()
      return await CareerJob.findById(id)
    } catch (error: unknown) {
      throw error
    }
  }

  static async update(id: string, jobData: Partial<CareerJobData>) {
    try {
      await connectDB()
      
      const updateData: any = { ...jobData }
      
      if (updateData.title) updateData.title = sanitizeInput(updateData.title)
      if (updateData.department) updateData.department = sanitizeInput(updateData.department)
      if (updateData.location) updateData.location = sanitizeInput(updateData.location)
      if (updateData.experience) updateData.experience = sanitizeInput(updateData.experience)
      if (updateData.salary) updateData.salary = sanitizeInput(updateData.salary)
      if (updateData.description) updateData.description = sanitizeInput(updateData.description)
      if (updateData.responsibilities) updateData.responsibilities = sanitizeArray(updateData.responsibilities)
      if (updateData.requirements) updateData.requirements = sanitizeArray(updateData.requirements)
      
      return await CareerJob.findByIdAndUpdate(id, updateData, { new: true })
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async delete(id: string) {
    try {
      await connectDB()
      return await CareerJob.findByIdAndDelete(id)
    } catch (error: unknown) {
      throw error
    }
  }

  static async getAll(filters: Record<string, any> = {}, page: number = 1, limit: number = 10) {
    try {
      await connectDB()
      
      const skip = (page - 1) * limit
      
      const jobs = await CareerJob.find(filters)
        .sort({ posted: -1 })
        .skip(skip)
        .limit(limit)
        
      const total = await CareerJob.countDocuments(filters)
      
      return {
        jobs,
        pagination: {
          current: page,
          total: Math.ceil(total / limit),
          count: jobs.length,
          totalItems: total
        }
      }
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async getActiveJobs(department?: string) {
    try {
      await connectDB()
      
      const filters: Record<string, any> = { status: 'active' }
      if (department && department !== 'all') {
        filters.department = department
      }
      
      return await CareerJob.find(filters).sort({ posted: -1 })
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async getStats() {
    try {
      await connectDB()
      
      const total = await CareerJob.countDocuments()
      const active = await CareerJob.countDocuments({ status: 'active' })
      const inactive = await CareerJob.countDocuments({ status: 'inactive' })
      const filled = await CareerJob.countDocuments({ status: 'filled' })
      
      // Get jobs by department
      const byDepartment = await CareerJob.aggregate([
        { $match: { status: 'active' } },
        { $group: { _id: '$department', count: { $sum: 1 } } },
        { $sort: { _id: 1 } }
      ])
      
      return { 
        total, 
        active, 
        inactive, 
        filled,
        byDepartment: byDepartment.reduce((acc, item) => {
          acc[item._id] = item.count
          return acc
        }, {} as Record<string, number>)
      }
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async updateStatus(id: string, status: 'active' | 'inactive' | 'filled') {
    try {
      await connectDB()
      
      return await CareerJob.findByIdAndUpdate(
        id, 
        { status, updatedAt: new Date() }, 
        { new: true }
      )
      
    } catch (error: unknown) {
      throw error
    }
  }

  static async searchJobs(query: string) {
    try {
      await connectDB()
      
      return await CareerJob.find({
        status: 'active',
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
          { department: { $regex: query, $options: 'i' } }
        ]
      }).sort({ posted: -1 })
      
    } catch (error: unknown) {
      throw error
    }
  }
}