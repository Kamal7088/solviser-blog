import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slugify";

export async function GET() {
  // ✅ Prisma-safe condition
  const blogs = await prisma.blog.findMany({
    where: {
      OR: [
        { slug: "" }, // empty slug
      ],
    },
  });

  for (const blog of blogs) {
    await prisma.blog.update({
      where: { id: blog.id },
      data: {
        slug: slugify(blog.title),
      },
    });
  }

  return NextResponse.json({
    fixed: blogs.length,
    message: "Slugs fixed successfully (Prisma + PostgreSQL)",
  });
}
