export default function Features() {
  const features = [
    ["Comprehensive Buyer Database", "Shared blacklist of high-risk buyers"],
    ["Verified & Fair Process", "Admin-verified reports"],
    ["Real-Time Alerts", "Instant fraud notifications"],
  ];

  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          A powerful tool to safeguard your business
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map(([title, desc]) => (
            <div
              key={title}
              className="bg-surface border border-border rounded-2xl p-8 hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {title}
              </h3>
              <p className="text-textMuted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
