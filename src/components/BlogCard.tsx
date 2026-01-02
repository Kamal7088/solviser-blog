"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  const router = useRouter();

  const handleDelete = async () => {
    const ok = confirm(`Delete "${blog.title}" ?`);
    if (!ok) return;

    await fetch(`/api/blogs/${blog.slug}`, {
      method: "DELETE",
    });

    router.refresh();
  };

  return (
    <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary transition">
      
      {/* DELETE */}
      <button
        onClick={handleDelete}
        className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full
        bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition"
      >
        Delete
      </button>

      <h3 className="text-xl font-semibold text-primary mb-2">
        {blog.title}
      </h3>

      <p className="text-textMuted text-sm mb-4">
        {blog.excerpt}
      </p>

      <Link
        href={`/blogs/${blog.slug}`}
        className="text-primary text-sm font-medium hover:underline"
      >
        Read article →
      </Link>
    </div>
  );
}
