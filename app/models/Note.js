"use server"
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {type: String, required: true },
  body: {type: String, required: true },
  createdAt: {type: Date, required: true },
  email: {type: String, required: true },
});

// 🛡️ Ensure models object exists (just in case)
if (!mongoose.models) {
  mongoose.models = {};
}

const Note = mongoose.models.Note || mongoose.model('Note', noteSchema);

export default Note;