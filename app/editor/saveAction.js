"use server"

import { connectDB } from "../lib/connectDb"
import Note from "../models/Note"
import { getUserEmail } from "../lib/getUserEmail";

export async function saveNote(title, content, date) {
    await connectDB();
    const email = await getUserEmail();
    if (title.trim() === "") {
        title = "Untitled Note"
    }
    try {
        const createdNote = await Note.create({ title: title, body: content, createdAt: date, email: email});
        const plainNote = createdNote.toObject();
        const newID = plainNote._id.toString();
        return newID
    } catch (err) {
        console.error('❌ Failed to save note:', err);
        throw err;
    }
}
