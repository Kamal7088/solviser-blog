import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            SOLVISER
          </h2>
          <p className="text-textMuted text-sm leading-relaxed">
            Empowering Indian MSMEs with AI-driven risk intelligence,
            smarter decisions, and confident growth.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-textPrimary font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-textMuted text-sm">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-textPrimary font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-textMuted text-sm">
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="#">Documentation</Link></li>
            <li><Link href="#">Support</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-textPrimary font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-textMuted text-sm">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-textMuted text-sm">
        © 2026 Solviser India Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
