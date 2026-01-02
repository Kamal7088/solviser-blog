import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import slugify from "slugify";

/* ======================
   GET → Fetch all blogs
====================== */
export async function GET() {
  await connectDB();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}

/* ======================
   POST → Create blog
====================== */
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const blog = await Blog.create({
    ...body,
    slug: slugify(body.title, { lower: true }),
  });

  return NextResponse.json(blog);
}

/* ======================
   DELETE → Delete blog by slug
====================== */
export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
) {
  await connectDB();

  await Blog.findOneAndDelete({
    slug: params.slug,
  });

  return NextResponse.json({
    success: true,
    message: "Blog deleted successfully",
  });
}
