import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AdminPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Blogs</h1>

        <Link
          href="/admin/create"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          + Create Blog
        </Link>
      </div>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-400">
                ✍ {blog.author} ·{" "}
                {new Date(blog.createdAt).toDateString()}
              </p>
            </div>

            <Link
              href={`/admin/edit/${blog.slug}`}
              className="px-4 py-2 bg-orange-500 text-white rounded"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
