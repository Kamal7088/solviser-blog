import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditForm from "./edit-form";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function EditBlogPage({ params }: Props) {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
    select: {
      title: true,
      author: true,
      excerpt: true,
      content: true,
    },
  });

  if (!blog) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>

      {/* Client Component */}
      <EditForm blog={blog} slug={slug} />
    </div>
  );
}
