// lib/mongodb.ts
import { MongoClient, MongoClientOptions } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options: MongoClientOptions = {
  // Connection options for better reliability
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  maxIdleTimeMS: 30000,
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise

// Database helper functions
export async function getDatabase() {
  try {
    const client = await clientPromise
    return client.db(process.env.DATABASE_NAME || 'agency_template')
  } catch (error) {
    console.error('Failed to connect to database:', error)
    throw new Error('Database connection failed')
  }
}

export async function getCollection(collectionName: string) {
  try {
    const db = await getDatabase()
    return db.collection(collectionName)
  } catch (error) {
    console.error(`Failed to get collection ${collectionName}:`, error)
    throw error
  }
}

// Test database connection
export async function testConnection(): Promise<boolean> {
  try {
    const client = await clientPromise
    await client.db(process.env.DATABASE_NAME || 'agency_template').admin().ping()
    return true
  } catch (error) {
    console.error('Database connection test failed:', error)
    return false
  }
}

// Graceful shutdown
export async function closeConnection(): Promise<void> {
  try {
    const client = await clientPromise
    await client.close()
  } catch (error) {
    console.error('Error closing database connection:', error)
  }
}

// Handle process termination
process.on('SIGINT', async () => {
  await closeConnection()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  await closeConnection()
  process.exit(0)
})