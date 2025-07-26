"use server"

import { connectDB } from "../lib/connectDb"
import Note from "../models/Note"

export async function updateNote(title, content, date, uid) {
    await connectDB();
    if (title.trim() === "") {
        title = "Untitled Note"
    }
    try {
        await Note.findByIdAndUpdate(uid, { title: title, body: content, createdAt: date });
    } catch (err) {
        console.error('❌ Failed to update note:', err);
        throw err;
    }
}
