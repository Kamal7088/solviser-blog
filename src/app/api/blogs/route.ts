import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { slugify } from "@/lib/slugify";

export async function POST(req: Request) {
  await connectDB();

  // 🔒 Existing fields + new fields
  const { title, content, excerpt, tags = [], category = "" } =
    await req.json();

  // 🔒 SAME SLUG LOGIC (UNCHANGED)
  let baseSlug = slugify(title);
  let slug = baseSlug;
  let count = 1;

  while (await Blog.findOne({ slug })) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  // 🔥 Create blog with extra features
  const blog = await Blog.create({
    title,
    slug,
    content,      // HTML from Quill (images + links)
    excerpt,
    tags,         // NEW
    category,     // NEW
  });

  return NextResponse.json(blog, { status: 201 });
}
