"use client";

import { useState } from "react";
import Editor from "@/components/Editor";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");

  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  const slugPreview = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  // Upload featured image
  const uploadFeaturedImage = async (file: File) => {
    try {
      setImageUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setFeaturedImage(data.url);
    } catch {
      alert("Image upload failed");
    } finally {
      setImageUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!title || !author || !content) {
      alert("Title, Author and Content are required");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        author,
        excerpt,
        content,
        featuredImage,
        seoTitle,
        seoDescription,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      router.push(`/blogs/${data.slug}`); // 🔥 redirect to blog
    } else {
      alert("Blog publish failed");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>

      {/* TITLE */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className="w-full mb-2 px-4 py-3 rounded bg-[#111] border border-gray-700 focus:ring-2 focus:ring-orange-500"
      />

      <p className="text-sm text-gray-400 mb-4">
        🔗 URL: /blogs/{slugPreview || "your-blog-title"}
      </p>

      {/* AUTHOR */}
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author Name"
        className="w-full mb-4 px-4 py-3 rounded bg-[#111] border border-gray-700 focus:ring-2 focus:ring-orange-500"
      />

      {/* EXCERPT */}
      <textarea
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        placeholder="Short Excerpt (for blog cards)"
        rows={3}
        className="w-full mb-6 px-4 py-3 rounded bg-[#111] border border-gray-700 focus:ring-2 focus:ring-orange-500"
      />

      {/* FEATURED IMAGE */}
      <div className="mb-6">
        <p className="mb-2 text-gray-400">Featured Image</p>

        {featuredImage && (
          <img
            src={featuredImage}
            className="w-full max-h-64 object-cover rounded mb-3"
          />
        )}

        <input
          type="file"
          accept="image/*"
          disabled={imageUploading}
          onChange={(e) => {
            if (e.target.files?.[0]) {
              uploadFeaturedImage(e.target.files[0]);
            }
          }}
        />

        {imageUploading && (
          <p className="text-orange-400 mt-2">Uploading image...</p>
        )}
      </div>

      {/* SEO SECTION */}
      <h2 className="text-xl font-semibold mb-3">SEO (Google)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          value={seoTitle}
          onChange={(e) => setSeoTitle(e.target.value)}
          placeholder="SEO Title"
          className="px-4 py-3 rounded bg-[#111] border border-gray-700 focus:ring-2 focus:ring-orange-500"
        />

        <input
          value={seoDescription}
          onChange={(e) => setSeoDescription(e.target.value)}
          placeholder="Meta Description"
          className="px-4 py-3 rounded bg-[#111] border border-gray-700 focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Google preview */}
      <div className="bg-black border border-gray-700 p-4 rounded mb-6">
        <p className="text-blue-400 text-lg">
          {seoTitle || title || "Blog title here"}
        </p>
        <p className="text-green-500 text-sm">
          solviser.in/blogs/{slugPreview || "blog-title"}
        </p>
        <p className="text-gray-400 text-sm">
          {seoDescription || excerpt || "Blog meta description..."}
        </p>
      </div>

      {/* EDITOR */}
      <Editor content={content} onChange={setContent} />

      {/* BUTTON */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 rounded text-white font-semibold"
      >
        {loading ? "Publishing..." : "Publish Blog"}
      </button>
    </div>
  );
}
