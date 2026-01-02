export default function AboutPage() {
  return (
    <main className="bg-background text-textPrimary">

      {/* HERO */}
      <section className="px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-primary">Solviser</span>
          </h1>
          <p className="text-textMuted text-lg max-w-3xl mx-auto">
            We are dedicated to empowering MSMEs by creating a safer,
            more transparent, and efficient B2B ecosystem.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16 px-6">
        <div
          className="max-w-5xl mx-auto bg-card border border-border
                     rounded-2xl p-8 md:p-12
                     hover:border-primary transition duration-300"
        >
          <p
            className="text-lg leading-relaxed text-textSecondary
                       font-light tracking-wide
                       hover:text-textPrimary transition"
          >
            <span className="font-semibold text-primary">Solviser</span> is a
            next-generation financial intelligence and risk assessment platform
            built with a clear mission: to empower Indian MSMEs by making B2B
            transactions safer, smarter, and more transparent.
            <br /><br />

            In today’s fast-moving business environment, MSMEs face challenges
            such as delayed payments, fraudulent buyers, lack of reliable data,
            and limited access to risk insights. Solviser addresses these
            problems using AI-driven, transaction-based intelligence that
            replaces guesswork with verified data.
            <br /><br />

            At its core, Solviser focuses on{" "}
            <span className="text-primary font-medium">
              100% data-backed analysis
            </span>
            . Unlike traditional systems that rely on subjective ratings,
            Solviser delivers unbiased insights that help businesses evaluate
            buyers, suppliers, and partners before committing financially.
            <br /><br />

            Solviser provides powerful tools such as AI Risk Engine, Buyer
            Reputation Insights, MSME Credit Score, Blocklist & Watchlist,
            Digital Contracts, and Real-Time Alerts. These tools work together
            to reduce fraud, improve cash-flow predictability, and secure
            transactions.
            <br /><br />

            Our mission is to build a transparent and secure B2B ecosystem
            where MSMEs can scale confidently without fear of defaults or
            manipulation. Our vision is to become India’s most trusted
            financial intelligence platform — where every business decision
            is powered by data, trust, and transparency.
            <br /><br />

            <span className="font-semibold text-primary">
              Solviser is not just a platform — it is a commitment to MSME
              growth, security, and long-term success.
            </span>
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Values for MSMEs
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Reduce Fraud",
                desc: "Identify potential fraudulent buyers before entering into business deals.",
              },
              {
                title: "Better Evaluation",
                desc: "Make informed decisions about suppliers and buyers with risk profiles.",
              },
              {
                title: "Safer B2B Payments",
                desc: "Ensure timely payments with digital contracts and payment tracking.",
              },
              {
                title: "Peace of Mind",
                desc: "Legally binding digital contracts protect your interests.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface border border-border rounded-2xl p-6
                           hover:-translate-y-2 hover:border-primary
                           transition-all"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-textMuted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
<section className="px-6 py-20 bg-surface border-y border-border">
  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-2 gap-10">

      {/* MISSION CARD */}
      <div
        className="group bg-background border border-border rounded-2xl p-8
                   hover:border-primary hover:-translate-y-2
                   transition-all duration-300"
      >
        <h2
          className="text-3xl font-bold mb-4 text-center
                     group-hover:text-primary transition"
        >
          Our Mission
        </h2>

        <p
          className="text-textMuted leading-relaxed text-center
                     group-hover:text-textPrimary transition"
        >
          To empower MSMEs with innovative, data-driven tools that enhance
          business security, financial stability, and operational efficiency.
          <br /><br />
          Build a transparent, secure, and efficient B2B ecosystem where
          MSMEs thrive without payment worries.
          <br /><br />
          Delivering a 100% transaction-driven system where authenticity is
          guaranteed, bias is eliminated, and manipulation is reduced to zero.
        </p>
      </div>

      {/* VISION CARD */}
      <div
        className="group bg-background border border-border rounded-2xl p-8
                   hover:border-primary hover:-translate-y-2
                   transition-all duration-300"
      >
        <h2
          className="text-3xl font-bold mb-4 text-center
                     group-hover:text-primary transition"
        >
          Our Vision
        </h2>

        <p
          className="text-textMuted leading-relaxed text-center
                     group-hover:text-textPrimary transition"
        >
          To become India’s most trusted platform for financial intelligence —
          where every business decision is powered by data, trust, and
          transparency.
          <br /><br />
          To bridge the gap between businesses, financial institutions, and
          suppliers while fostering a secure and transparent ecosystem.
          <br /><br />
          A platform built on 100% transaction-based insights — free from
          subjective ratings — ensuring absolute accuracy and zero bias.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* WHY TRUST */}
      <section className="px-6 py-20 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Trust <span className="text-primary">Solviser AI?</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-xl overflow-hidden">
              <thead className="bg-background">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left text-primary">Solviser AI</th>
                  <th className="p-4 text-left">Traditional</th>
                </tr>
              </thead>
              <tbody className="text-textMuted text-sm">
                <tr className="border-t border-border">
                  <td className="p-4">Accuracy</td>
                  <td className="p-4">Advanced ML Models</td>
                  <td className="p-4">Human Error</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4">Speed</td>
                  <td className="p-4">Instant Processing</td>
                  <td className="p-4">Slow Analysis</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4">Security</td>
                  <td className="p-4">End-to-End Encryption</td>
                  <td className="p-4">Vulnerable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </main>
  );
}
