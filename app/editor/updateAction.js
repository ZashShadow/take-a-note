"use server"

import { connectDB } from "../lib/connectDb"
import Note from "../models/Note"
import { getUserEmail } from "../lib/getUserEmail";

export async function updateNote(title, content, date, uid) {
    await connectDB();
    const email = await getUserEmail();
    if (title.trim() === "") {
        title = "Untitled Note"
    }
    try {
        await Note.findByIdAndUpdate(uid, { title: title, body: content, createdAt: date, email: email });
    } catch (err) {
        console.error('❌ Failed to update note:', err);
        throw err;
    }
}
