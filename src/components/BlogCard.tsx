import Link from "next/link";

export default function BlogCard({ blog }: any) {
  if (!blog?.slug) return null; // 🔥 HARD FIX

  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="p-6 border rounded-xl hover:shadow-lg transition">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        {blog.excerpt && (
          <p className="text-sm text-gray-500 mt-2">{blog.excerpt}</p>
        )}
      </div>
    </Link>
  );
}
