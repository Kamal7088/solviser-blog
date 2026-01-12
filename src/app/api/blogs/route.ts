import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { slugify } from "@/lib/slugify";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const title = body.title?.trim();
    const content = body.content;
    const excerpt = body.excerpt || null;
    const author = body.author?.trim() || "Admin";
    const featuredImage = body.featuredImage || null;
    const seoTitle = body.seoTitle || null;
    const seoDescription = body.seoDescription || null;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content required" },
        { status: 400 }
      );
    }

    // 🔥 base slug
    let slug = slugify(title);

    // 🔥 Make slug unique
    let counter = 1;
    while (await prisma.blog.findUnique({ where: { slug } })) {
      slug = `${slugify(title)}-${counter}`;
      counter++;
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        author,
        featuredImage,
        seoTitle,
        seoDescription,
      },
    });

    return NextResponse.json(blog, { status: 201 });

  } catch (error) {
    console.error("Create Blog Error:", error);
    return NextResponse.json(
      { error: "Blog create failed" },
      { status: 500 }
    );
  }
}
