"use server"
import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) {
        console.log("Already Connected ✅");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_DB_STRING);
        isConnected = true;
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw new Error('MongoDB connection failed');
    }
};

