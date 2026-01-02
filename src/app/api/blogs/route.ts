import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

/* GET: fetch all blogs */
export async function GET() {
  await connectDB();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}

/* POST: create blog */
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const blog = await Blog.create(body);
  return NextResponse.json(blog);
}
