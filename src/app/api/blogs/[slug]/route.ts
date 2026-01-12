import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type Props = {
  params: Promise<{ slug: string }>;
};

/* ======================
   ✏️ UPDATE BLOG
====================== */
export async function PUT(req: Request, { params }: Props) {
  try {
    const { slug } = await params; // ✅ MUST await
    const body = await req.json();

    const updatedBlog = await prisma.blog.update({
      where: { slug },
      data: {
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        author: body.author,
      },
    });

    return NextResponse.json(
      { success: true, data: updatedBlog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Blog update failed" },
      { status: 500 }
    );
  }
}

/* ======================
   🗑️ DELETE BLOG
====================== */
export async function DELETE(req: Request, { params }: Props) {
  try {
    const { slug } = await params; // ✅ MUST await

    await prisma.blog.delete({
      where: { slug },
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Blog delete failed" },
      { status: 500 }
    );
  }
}
