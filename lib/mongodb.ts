// lib/local-storage-utils.ts
// Simple local storage utilities to replace MongoDB functionality

interface ContactSubmission {
  id: string
  referenceId: string
  timestamp: string
  method: string
  formData: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    company?: string
    message: string
    priority: string
    projectType?: string
    budget?: string
    timeline?: string
    hearAboutUs?: string
    newsletter: boolean
  }
  status: 'pending' | 'responded' | 'archived'
  responseDate?: string
  notes?: string
}

// In-memory storage for development (in production, you might want to use Redis or file system)
let inMemoryStorage: ContactSubmission[] = []

// Generate unique ID
function generateId(): string {
  return Date.now().toString() + Math.random().toString(36).substring(2)
}

// Save contact submission
export async function saveContactSubmission(formData: any, referenceId: string): Promise<ContactSubmission> {
  const submission: ContactSubmission = {
    id: generateId(),
    referenceId,
    timestamp: new Date().toISOString(),
    method: formData.method || 'general-inquiry',
    formData: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      priority: formData.priority || 'normal',
      projectType: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      hearAboutUs: formData.hearAboutUs,
      newsletter: formData.newsletter || false
    },
    status: 'pending'
  }

  // Save to in-memory storage
  inMemoryStorage.push(submission)

  // Log the submission
  console.log('💾 Contact submission saved:', {
    referenceId: submission.referenceId,
    email: submission.formData.email,
    timestamp: submission.timestamp
  })

  return submission
}

// Get submission by reference ID
export async function getSubmissionByReference(referenceId: string): Promise<ContactSubmission | null> {
  return inMemoryStorage.find(submission => submission.referenceId === referenceId) || null
}

// Get all submissions (for admin purposes)
export async function getAllSubmissions(): Promise<ContactSubmission[]> {
  return [...inMemoryStorage].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )
}

// Update submission status
export async function updateSubmissionStatus(
  referenceId: string, 
  status: 'pending' | 'responded' | 'archived',
  notes?: string
): Promise<boolean> {
  const submissionIndex = inMemoryStorage.findIndex(
    submission => submission.referenceId === referenceId
  )

  if (submissionIndex === -1) {
    return false
  }

  inMemoryStorage[submissionIndex].status = status
  if (notes) {
    inMemoryStorage[submissionIndex].notes = notes
  }
  if (status === 'responded') {
    inMemoryStorage[submissionIndex].responseDate = new Date().toISOString()
  }

  console.log(`📋 Submission ${referenceId} status updated to: ${status}`)
  return true
}

// Get submissions by status
export async function getSubmissionsByStatus(status: 'pending' | 'responded' | 'archived'): Promise<ContactSubmission[]> {
  return inMemoryStorage.filter(submission => submission.status === status)
}

// Get recent submissions (last N days)
export async function getRecentSubmissions(days: number = 7): Promise<ContactSubmission[]> {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - days)

  return inMemoryStorage.filter(submission => 
    new Date(submission.timestamp) >= cutoffDate
  ).sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )
}

// Export data as JSON (for backup purposes)
export function exportSubmissionsAsJSON(): string {
  return JSON.stringify(inMemoryStorage, null, 2)
}

// Import data from JSON (for restore purposes)
export function importSubmissionsFromJSON(jsonData: string): boolean {
  try {
    const data = JSON.parse(jsonData) as ContactSubmission[]
    inMemoryStorage = data
    console.log(`📥 Imported ${data.length} submissions`)
    return true
  } catch (error) {
    console.error('❌ Failed to import submissions:', error)
    return false
  }
}

// Clear all data (use with caution)
export function clearAllSubmissions(): number {
  const count = inMemoryStorage.length
  inMemoryStorage = []
  console.log(`🗑️ Cleared ${count} submissions`)
  return count
}

// Get statistics
export function getSubmissionStats(): {
  total: number
  pending: number
  responded: number
  archived: number
  todayCount: number
  weekCount: number
} {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const week = new Date()
  week.setDate(week.getDate() - 7)

  return {
    total: inMemoryStorage.length,
    pending: inMemoryStorage.filter(s => s.status === 'pending').length,
    responded: inMemoryStorage.filter(s => s.status === 'responded').length,
    archived: inMemoryStorage.filter(s => s.status === 'archived').length,
    todayCount: inMemoryStorage.filter(s => new Date(s.timestamp) >= today).length,
    weekCount: inMemoryStorage.filter(s => new Date(s.timestamp) >= week).length
  }
}

// Test connection (always returns true for local storage)
export async function testConnection(): Promise<boolean> {
  console.log('✅ Local storage connection test passed')
  return true
}

// Initialize (no-op for local storage)
export async function initializeStorage(): Promise<boolean> {
  console.log('🚀 Local storage initialized')
  return true
}