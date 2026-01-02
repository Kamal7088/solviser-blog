export default function Tools() {
  const tools = [
    "AI Risk Engine",
    "Blocklist & Watchlist",
    "Digital Contracts",
    "Network Intelligence",
    "MSME Credit Score",
    "ERP Solution",
    "Ecommerce Page",
    "Cost Calculators",
  ];

  return (
    <section className="px-6 py-24 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <div
              key={tool}
              className="flex justify-between items-center bg-background border border-border p-5 rounded-xl hover:border-primary transition"
            >
              <span>{tool}</span>
              <span className="text-primary text-xl">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
