export default function HowItWorks() {
  const steps = [
    ["Onboarding", "Verify business using GST/PAN"],
    ["Data Sync", "Connect business data"],
    ["Analysis & Alerts", "AI risk analysis"],
    ["Reports", "Actionable insights"],
  ];

  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {steps.map(([title, desc]) => (
            <div key={title}>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {title}
              </h3>
              <p className="text-textMuted text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
