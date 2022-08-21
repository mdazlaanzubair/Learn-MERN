import mongoose from "mongoose";
const { Schema } = mongoose;

// created schema for Blog Collection
const blogSchema = new Schema(
  {
    title: {
      required: [true, "Blog must have a title."],
      type: String,
    },
    author: {
      required: true,
      type: Number,
    },
    snippet: {
      required: [true, "Snippet is required for short display."],
      type: String,
    },
    body: {
      required: [true, "Blog must have a body."],
      type: String,
      minLength: [200, "Body must have at least 250 characters"],
      maxLength: [1200, "Body must not be greater than 1200 characters"],
    },
    isDeleted: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// created model for Blog Schema
const Blog = mongoose.model("Blog", blogSchema);
 
// exporting Blog Model
export default Blog