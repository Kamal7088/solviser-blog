import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { slugify } from "@/lib/slugify";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const blogs = await Blog.find({ $or: [{ slug: { $exists: false } }, { slug: "" }] });

  for (const blog of blogs) {
    blog.slug = slugify(blog.title);
    await blog.save();
  }

  return NextResponse.json({
    fixed: blogs.length,
    message: "Slugs fixed successfully",
  });
}
