export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import BlogCard from "@/components/BlogCard";
import { slugify } from "@/lib/slugify";

export default async function BlogsPage() {
  await connectDB();

  const blogsFromDb = await Blog.find().lean();

  const blogs = blogsFromDb.map((blog: any) => {
    const safeSlug = blog.slug || slugify(blog.title);

    return {
      id: blog._id.toString(),
      title: blog.title,
      slug: safeSlug,          // ✅ NEVER undefined now
      excerpt: blog.excerpt || "",
    };
  });

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-8">Blogs</h1>

      <div className="grid grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
