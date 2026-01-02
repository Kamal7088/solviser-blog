"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => pathname === href;

  // ✅ check single blog page
  const isBlogDetail =
    pathname.startsWith("/blogs/") && pathname !== "/blogs";

  const handleDeleteBlog = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    const slug = pathname.split("/blogs/")[1];

    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error();

      alert("Blog deleted successfully");
      router.push("/blogs");
    } catch {
      alert("Failed to delete blog");
    }
  };

  const NavItem = ({
    href,
    label,
    highlight = false,
  }: {
    href: string;
    label: string;
    highlight?: boolean;
  }) => (
    <Link
      href={href}
      className={`px-6 py-3 rounded-xl
        text-base md:text-lg font-semibold
        transition-all duration-300
        hover:scale-105
        ${
          highlight
            ? "bg-primary text-white hover:bg-primaryHover shadow-md"
            : isActive(href)
            ? "text-primary bg-primary/15"
            : "text-textMuted hover:text-textPrimary hover:bg-primary/10"
        }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT */}
        <div className="hidden md:flex gap-3">
          <NavItem href="/" label="Home" />
          <NavItem href="/about" label="About" />
        </div>

        {/* CENTER */}
        <div className="flex justify-center flex-1">
          <Link
            href="/"
            className="relative group px-8 py-3 rounded-full
            border border-primary/30 hover:border-primary transition"
          >
            <span className="absolute inset-0 rounded-full bg-primary/40 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            <span className="relative text-xl md:text-2xl font-extrabold tracking-widest text-primary">
              SOLVISER BLOG
            </span>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex gap-3 items-center">
          <NavItem href="/blogs" label="Blogs" />
          <NavItem href="/admin" label="Admin" highlight />

          {/* 🔥 DELETE BLOG (NO UI CHANGE) */}
          {isBlogDetail && (
            <button
              onClick={handleDeleteBlog}
              className="px-6 py-3 rounded-xl
              text-base md:text-lg font-semibold
              transition-all duration-300
              hover:scale-105
              bg-red-600/90 text-white hover:bg-red-700"
            >
              Delete
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE */}
      <div className="md:hidden flex flex-wrap justify-center gap-4 border-t border-border px-4 py-4">
        <NavItem href="/" label="Home" />
        <NavItem href="/about" label="About" />
        <NavItem href="/blogs" label="Blogs" />
        <NavItem href="/admin" label="Admin" highlight />
        {isBlogDetail && (
          <button
            onClick={handleDeleteBlog}
            className="px-6 py-3 rounded-xl font-semibold bg-red-600 text-white"
          >
            Delete
          </button>
        )}
      </div>
    </header>
  );
}
