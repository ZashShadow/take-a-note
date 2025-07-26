"use server"
import { connectDB } from "./connectDb";
import Note from "../models/Note";

export async function deleteNote(uid) {
    await connectDB();
    try {
        console.log("The Id going in Is", uid);
        await Note.findByIdAndDelete(uid);
    }
    catch (e) {
        console.log(e);
    }
}

