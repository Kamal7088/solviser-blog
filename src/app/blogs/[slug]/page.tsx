import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPage({ params }: Props) {
  // ✅ Next.js params Promise fix
  const { slug } = await params;

  await connectDB();

  const blog = await Blog.findOne({ slug }).lean();

  if (!blog) {
    return (
      <div className="p-10 text-center text-red-500">
        Blog not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-10">

        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-textPrimary mb-6">
          {blog.title}
        </h1>

        {/* ✅ BLOG CONTENT (WORDPRESS STYLE + IMAGE SUPPORT) */}
        <div
          className="
            prose 
            prose-lg 
            max-w-none
            prose-headings:text-textPrimary
            prose-p:text-textSecondary
            prose-strong:text-textPrimary
            prose-a:text-primary
            prose-img:rounded-xl
            prose-img:shadow-lg
          "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
