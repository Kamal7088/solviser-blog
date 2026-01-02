import BlogCard from "@/components/BlogCard";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export default async function BlogsPage() {
  await connectDB();

  // ✅ Convert mongoose docs → plain objects
  const blogs = (await Blog.find().sort({ createdAt: -1 })).map((blog) => ({
    id: blog._id.toString(),
    title: blog.title,
    slug: blog.slug,
    excerpt: blog.excerpt || "",
  }));

  return (
    <section className="min-h-screen bg-background px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-textPrimary mb-4">
            Latest Insights from Solviser
          </h1>
          <p className="text-textMuted max-w-2xl mx-auto">
            Stay informed with expert articles, updates, and insights designed
            to help businesses make smarter decisions.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {blogs.length === 0 && (
          <p className="text-center text-textMuted mt-20">
            No blogs published yet.
          </p>
        )}
      </div>
    </section>
  );
}
