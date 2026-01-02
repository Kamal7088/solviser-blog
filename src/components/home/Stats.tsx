export default function Stats() {
  const stats = [
    ["Trusted MSMEs", "12,500+"],
    ["Risk Assessments", "10M+"],
    ["Satisfaction Rate", "95%"],
  ];

  return (
    <section className="px-6 py-16 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {stats.map(([label, value]) => (
          <div key={label}>
            <h3 className="text-3xl font-bold text-primary">{value}</h3>
            <p className="text-textMuted mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
