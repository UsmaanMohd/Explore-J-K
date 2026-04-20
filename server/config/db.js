// import mongoose from 'mongoose';

// /**
//  * Validates and connects to MongoDB securely.
//  * Designed to gracefully fall back without crashing if DB is unreachable.
//  */
// const connectDB = async () => {
//     try {
//         const uri = process.env.MONGO_URI;
//         if (!uri) {
//             console.warn("⚠️ MONGO_URI missing from environment. Starting with mock database structures.");
//             return false;
//         }

//         const conn = await mongoose.connect(uri);
//         console.log(`✅ MongoDB Connection Successful: ${conn.connection.host}`);
//         return true;
//     } catch (error) {
//         console.error(`❌ MongoDB Connectivity Error: ${error.message}`);
//         // Allows the rest of the application to execute rather than a hard exit
//         return false;
//     }
// };

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected:", conn.connection.host);
  } catch (error) {
    console.error("DB error:", error.message);
  }
};

export default connectDB;