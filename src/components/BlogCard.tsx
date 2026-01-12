import Link from "next/link";

type Props = {
  blog: {
    title: string;
    slug: string;
    excerpt?: string | null;
    author: string;
    createdAt: Date;
  };
};

export default function BlogCard({ blog }: Props) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="border p-4 rounded cursor-pointer hover:border-orange-500 transition">
        <h2 className="font-bold text-lg">{blog.title}</h2>

        <p className="text-sm text-gray-400 mt-1">
          ✍ {blog.author} · {new Date(blog.createdAt).toDateString()}
        </p>

        {blog.excerpt && (
          <p className="mt-2 text-gray-300">{blog.excerpt}</p>
        )}
      </div>
    </Link>
  );
}
