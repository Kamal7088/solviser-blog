import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  // ✅ IMPORTANT: params ko await karo
  const { slug } = await context.params;

  await connectDB();
  await Blog.findOneAndDelete({ slug });

  return NextResponse.json({ success: true });
}
