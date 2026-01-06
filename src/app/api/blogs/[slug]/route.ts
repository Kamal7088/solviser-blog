import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function DELETE(req: Request, { params }: Props) {
  const { slug } = await params; // ✅ IMPORTANT (Next 15+ fix)

  await connectDB();

  const deleted = await Blog.findOneAndDelete({ slug }); // ✅ FIX

  if (!deleted) {
    return NextResponse.json(
      { success: false, message: "Blog not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Blog deleted successfully",
  });
}
