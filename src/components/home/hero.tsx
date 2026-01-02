export default function Hero() {
  return (
    <section className="px-6 py-24 border-b border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-surface border border-border">
            🔴 Live GST Intelligence
          </span>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Stop Guessing. <br />
            <span className="text-primary">Start Verifying.</span>
          </h1>

          <p className="text-textMuted text-lg mb-8 max-w-xl">
            Instantly decode the financial DNA of any Indian business.
            Enter a GST number to unlock their risk profile.
          </p>

          <div className="flex gap-4">
            <input
              placeholder="Enter 15-digit GST Number"
              className="flex-1 px-5 py-4 rounded-xl bg-surface border border-border
              focus:ring-2 focus:ring-primary outline-none"
            />
            <button className="px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primaryHover transition">
              ANALYZE
            </button>
          </div>

          <p className="text-sm text-textMuted mt-6">
            Joined by <b>12,000+</b> MSMEs this month
          </p>
        </div>

        {/* RIGHT – MOCK CARD */}
        <div className="bg-surface rounded-2xl border border-border p-6 shadow-xl">
          <div className="flex justify-between mb-4">
            <span className="text-sm">Credit Score</span>
            <span className="text-primary font-bold">842</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background p-4 rounded-xl">On-Time Filing</div>
            <div className="bg-background p-4 rounded-xl">Low Risk</div>
          </div>
        </div>
      </div>
    </section>
  );
}
