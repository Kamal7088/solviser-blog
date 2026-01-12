import prisma from "@/lib/prisma";
import BlogCard from "@/components/BlogCard";

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      author: true,
      createdAt: true,
    },
  });

  return (
    <section className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Latest Blogs
      </h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-400">
          No blogs published yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
}
