import mongoose, { Schema, models } from "mongoose";

const BlogSchema = new Schema(
  {
    // 🔒 EXISTING (UNCHANGED)
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: String,
    content: { type: String, required: true },

    // 🔥 NEW (OPTIONAL – WORDPRESS LIKE)
    tags: {
      type: [String],
      default: [],
    },

    category: {
      type: String,
      default: "",
    },

    // future ready (image, seo etc)
    coverImage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default models.Blog || mongoose.model("Blog", BlogSchema);
