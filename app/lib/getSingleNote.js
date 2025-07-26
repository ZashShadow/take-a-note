"use server"
import { connectDB } from "./connectDb";
import Note from "../models/Note";

export async function getSingleNote(uid) {
    await connectDB();
    try {
        console.log("The Id going in Is", uid);
        const note = await Note.findById(uid);
        console.log(note);
        const plainNote = await JSON.parse(JSON.stringify(note));
        return plainNote;
    }
    catch (e) {
        console.log(e);
    }
}

