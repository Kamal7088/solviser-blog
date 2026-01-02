import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

/* ✅ SEO METADATA */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  await connectDB();

  const blog = await Blog.findOne({ slug });

  if (!blog) {
    return {
      title: "Blog not found | Solviser",
    };
  }

  return {
    title: blog.title,
    description: blog.content.slice(0, 150),
  };
}

/* ✅ PAGE */
export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  await connectDB();

  const blog = await Blog.findOne({ slug });

  if (!blog) {
    return (
      <div className="p-10 text-center text-textSecondary">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">
        {blog.title}
      </h1>

      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
