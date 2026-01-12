"use client";

import { useState } from "react";
import Editor from "@/components/Editor";

type Props = {
  slug: string;
  blog: {
    title: string;
    author: string;
    excerpt?: string | null;
    content: string;
  };
};

export default function EditForm({ blog, slug }: Props) {
  const [title, setTitle] = useState(blog.title);
  const [author, setAuthor] = useState(blog.author);
  const [excerpt, setExcerpt] = useState(blog.excerpt || "");
  const [content, setContent] = useState(blog.content);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);

    await fetch(`/api/blogs/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        author,
        excerpt,
        content,
      }),
    });

    setLoading(false);
    alert("Blog Updated Successfully");
  };

  return (
    <div className="space-y-5">

      {/* TITLE */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className="w-full px-4 py-3 rounded
          bg-[#111] text-white
          border border-gray-700
          focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* AUTHOR */}
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author Name"
        className="w-full px-4 py-3 rounded
          bg-[#111] text-white
          border border-gray-700
          focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* EXCERPT */}
      <textarea
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        rows={3}
        placeholder="Short Excerpt"
        className="w-full px-4 py-3 rounded
          bg-[#111] text-white
          border border-gray-700
          focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* CONTENT EDITOR */}
      <Editor content={content} onChange={setContent} />

      {/* UPDATE BUTTON */}
      <button
        onClick={handleUpdate}
        disabled={loading}
        className="px-6 py-3 bg-orange-500 text-white rounded
          hover:bg-orange-600 transition"
      >
        {loading ? "Updating..." : "Update Blog"}
      </button>
    </div>
  );
}
