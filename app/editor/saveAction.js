"use server"

import { connectDB } from "../lib/connectDb"
import Note from "../models/Note"

export async function saveNote(title, content, date) {
    await connectDB();
    if (title.trim() === "") {
        title = "Untitled Note"
    }
    try {
        await Note.create({ title: title, body: content, createdAt: date });
    } catch (err) {
        console.error('❌ Failed to save note:', err);
        throw err;
    }
}
