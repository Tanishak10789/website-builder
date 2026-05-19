import mongoose from "mongoose"

const connectDB = async () => {
    // === TEMP DEBUG ===
    console.log('========== ENV DEBUG ==========')
    console.log('MONGO_URI value:', JSON.stringify(process.env.MONGO_URI))
    console.log('MONGO_URI type:', typeof process.env.MONGO_URI)
    console.log('Keys containing MONGO:', Object.keys(process.env).filter(k => k.toUpperCase().includes('MONGO')))
    console.log('All env keys count:', Object.keys(process.env).length)
    console.log('SECRET_KEY present:', !!process.env.SECRET_KEY)
    console.log('OPENROUTER_API_KEY present:', !!process.env.OPENROUTER_API_KEY)
    console.log('===============================')
    // === END DEBUG ===

    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.log('MongoDB connection error', error)
    }
}

export default connectDB