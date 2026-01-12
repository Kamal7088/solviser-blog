import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const SITE_URL = "http://localhost:3000"; 
// 👉 production में अपना domain डाल देना
// e.g. https://solviser.in

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================
   🔥 SEO META PER BLOG
========================= */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
    select: {
      title: true,
      excerpt: true,
      author: true,
      seoTitle: true,
      seoDescription: true,
      featuredImage: true,
    },
  });

  if (!blog) {
    return {
      title: "Blog not found | Solviser",
    };
  }

  const url = `${SITE_URL}/blogs/${slug}`;

  return {
    title: blog.seoTitle || `${blog.title} | Solviser Blog`,
    description:
      blog.seoDescription ||
      blog.excerpt ||
      "Solviser insights and articles",

    alternates: {
      canonical: url, // ✅ Google canonical link
    },

    authors: [{ name: blog.author }],

    openGraph: {
      title: blog.seoTitle || blog.title,
      description:
        blog.seoDescription || blog.excerpt || "",
      url,
      type: "article",
      images: blog.featuredImage
        ? [{ url: blog.featuredImage }]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.seoTitle || blog.title,
      description:
        blog.seoDescription || blog.excerpt || "",
      images: blog.featuredImage
        ? [blog.featuredImage]
        : [],
    },
  };
}

/* =========================
   🧠 BLOG DETAIL PAGE
========================= */
export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
    select: {
      title: true,
      content: true,
      author: true,
      createdAt: true,
      featuredImage: true,
    },
  });

  if (!blog) return notFound();

  return (
    <article className="max-w-4xl mx-auto p-6 text-white">
      {/* FEATURED IMAGE */}
      {blog.featuredImage && (
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="w-full h-[350px] object-cover rounded-xl mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-2">
        {blog.title}
      </h1>

      <p className="text-sm text-gray-400 mb-8">
        ✍ {blog.author} ·{" "}
        {new Date(blog.createdAt).toDateString()}
      </p>

      <div
        className="prose prose-invert max-w-none prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}
