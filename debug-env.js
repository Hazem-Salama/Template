// debug-env.js
console.log('MONGODB_URI:', process.env.MONGODB_URI)
console.log('Length:', process.env.MONGODB_URI?.length)
console.log('First 20 chars:', process.env.MONGODB_URI?.substring(0, 20))