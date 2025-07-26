"use server"
import { connectDB } from "./connectDb";
import Note from "../models/Note";

export async function getAllNotes() {
    await connectDB();
    try {
        const notes = await Note.find()
        const plainNotes = await notes.map(note =>
            JSON.parse(JSON.stringify(note))
        );
        return plainNotes;
    }
    catch (e) {
        console.log(e);
    }
}

