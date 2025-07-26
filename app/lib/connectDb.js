"use server"
import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) {
        console.log("Already Connected ✅");
        return;
    }
    try {
        await mongoose.connect('mongodb://localhost:27017/users');
        isConnected = true;
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw new Error('MongoDB connection failed');
    }
};

