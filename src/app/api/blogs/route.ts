import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import slugify from "slugify";

export async function GET() {
  await connectDB();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const blog = await Blog.create({
    ...body,
    slug: slugify(body.title, { lower: true }),
  });

  return NextResponse.json(blog);
}
