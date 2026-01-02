import Hero from "@/components/home/hero";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import Tools from "@/components/home/Tools";
import HowItWorks from "@/components/home/HowItWorks";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="bg-background text-textPrimary overflow-hidden">

      {/* 🔥 MAIN HERO – BLOG + ADMIN (ENHANCED UI, SAME FUNCTIONALITY) */}
      <section className="relative min-h-screen flex items-center justify-center px-6 border-b border-border">

        {/* Glow background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-1/3 left-1/2
            h-[520px] w-[520px]
            -translate-x-1/2 -translate-y-1/2
            bg-primary/30 blur-[160px]"
          />
        </div>

        <div className="max-w-4xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2
            rounded-full border border-border bg-card
            text-sm text-textMuted
            hover:border-primary transition">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Solviser Blog & Risk Intelligence
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-extrabold tracking-tight mb-6">
            <span className="block text-textPrimary">
              Stop Guessing.
            </span>
            <span
              className="block text-primary
              hover:drop-shadow-[0_0_30px_rgba(255,92,0,0.6)]
              transition"
            >
              Start Verifying.
            </span>
          </h1>

          {/* Description */}
          <p className="text-textSecondary max-w-2xl mx-auto mb-10
            text-base sm:text-lg leading-relaxed
            hover:text-textPrimary transition">
            Solviser Blog system to share insights, updates,
            and AI-driven risk intelligence for MSMEs.
          </p>

          {/* CTA Buttons – SAME LINKS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="/blogs"
              className="bg-primary px-8 py-4 rounded-xl text-white
              font-semibold
              hover:bg-primaryHover
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(255,92,0,0.45)]
              transition-all duration-300
              focus:ring-2 focus:ring-primary"
            >
              View Blogs
            </a>

            <a
              href="/admin"
              className="border border-border px-8 py-4 rounded-xl
              font-semibold
              hover:border-primary
              hover:text-primary
              hover:scale-105
              transition-all duration-300
              focus:ring-2 focus:ring-primary"
            >
              Admin Panel
            </a>

          </div>

        </div>
      </section>

      {/* 🔽 EXISTING SOLVISER SECTIONS (UNCHANGED) */}
      <Hero />
      <Stats />
      <Features />
      <Tools />
      <HowItWorks />
      <CTA />

    </main>
  );
}
