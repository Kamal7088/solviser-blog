export const dynamic = "force-dynamic";

import BlogCard from "@/components/BlogCard";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export default async function BlogsPage() {
  try {
    await connectDB();

    const blogs = (await Blog.find().sort({ createdAt: -1 })).map((blog) => ({
      id: blog._id.toString(),
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt || "",
    }));

    return (
      <section className="min-h-screen bg-background px-6 py-16">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Latest Insights from Solviser
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed with expert articles and insights.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {blogs.length === 0 && (
            <p className="text-center mt-20 text-muted-foreground">
              No blogs published yet.
            </p>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error("BLOG PAGE ERROR:", error);

    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          Failed to load blogs. Please try again later.
        </p>
      </div>
    );
  }
}
