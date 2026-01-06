"use client";

import { useState } from "react";
import Editor from "@/components/Editor";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Title and Content required");
      return;
    }

    setLoading(true);

    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content, // 🔥 Editor ka HTML yahin ja raha hai
      }),
    });

    setTitle("");
    setContent("");
    setLoading(false);

    alert("Blog Published Successfully");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-surface rounded-2xl shadow-xl border border-border p-8">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary">
            Create New Blog
          </h1>
          <p className="text-textMuted mt-2">
            Publish insights, updates and stories
          </p>
        </div>

        {/* Title */}
        <div className="mb-6">
          <label className="block mb-2 text-sm text-textSecondary">
            Blog Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            className="w-full px-4 py-3 rounded-xl bg-background border border-border
            text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* ✅ CONTENT – TEXTAREA REMOVED, EDITOR ADDED */}
        <div className="mb-8">
          <label className="block mb-2 text-sm text-textSecondary">
            Blog Content
          </label>

          {/* 🔥 WORDPRESS-LIKE EDITOR */}
          <Editor content={content} onChange={setContent} />
        </div>

        {/* Action */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-10 py-3 rounded-xl bg-primary text-white font-semibold
            hover:bg-primaryHover active:scale-95 transition-all
            focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>
        </div>
      </div>
    </div>
  );
}
