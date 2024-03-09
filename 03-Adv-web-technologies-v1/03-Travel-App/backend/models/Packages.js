import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Package = mongoose.model("Package", packageSchema);
