import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-primary">
          SOLVISER
        </h1>

        <nav className="space-x-6 text-textSecondary">
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/admin/login" className="text-primary">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
