import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
) {
  await connectDB();

  await Blog.findOneAndDelete({ slug: params.slug });

  return NextResponse.json({
    success: true,
    message: "Blog deleted successfully",
  });
}
