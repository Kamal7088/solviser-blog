import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

type Params = {
  params: Promise<{ slug: string }>; // ✅ params is Promise
};

export async function DELETE(req: Request, { params }: Params) {
  try {
    const { slug } = await params; // ✅ FIX HERE

    await connectDB();

    const deleted = await Blog.findOneAndDelete({
      slug, // ✅ schema ke according (blog_slug ❌, slug ✅)
    });

    if (!deleted) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Delete failed" },
      { status: 500 }
    );
  }
}
