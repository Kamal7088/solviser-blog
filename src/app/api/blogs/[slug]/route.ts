import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params; // ✅ VERY IMPORTANT

  await connectDB();
  await Blog.findOneAndDelete({ slug });

  return NextResponse.json({
    success: true,
    message: "Blog deleted successfully",
  });
}
