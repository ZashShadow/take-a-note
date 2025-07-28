"use server"
import { connectDB } from "./connectDb";
import Note from "../models/Note";
import { getUserEmail } from "./getUserEmail";

export async function getAllNotes() {
    await connectDB();
    const email = await getUserEmail();
    try {
        const notes = await Note.find({ email: email });
        const plainNotes = await notes.map(note =>
            JSON.parse(JSON.stringify(note))
        );
        return plainNotes;
    }
    catch (e) {
        console.log(e);
    }
}

