import React from "react";

const data = [
  {
    title: "Legal access",
    real: "Restricted — GDPR, CCPA, BSA confidentiality, PCI DSS prevent sharing or use outside production",
    synthetic: "✓ Zero PII — freely shareable across teams, vendors, researchers, regulators",
  },
  {
    title: "Fraud labels",
    real: "Mostly unknown — only ~2% of real ML is ever detected or confirmed. Ground truth is incomplete.",
    synthetic:
      "✓ 100% ground truth. Every fraud row is labelled with pattern type, anomaly score, and 6AMLD article",
  },
  {
    title: "Rare event coverage",
    real: "Arms trafficking, maritime piracy, PEP corruption — too rare to appear in sufficient volume for training",
    synthetic:
      "✓ Any fraud rate, any pattern type, any volume — on demand",
  },
  {
    title: "Class balance control",
    real: "Fixed ~0.1–1% fraud rate — causes severe model bias toward predicting normal",
    synthetic:
      "✓ Configure 1–30% fraud rate. Generate balanced training and imbalanced evaluation sets separately",
  },
  {
    title: "Cross-border & EU typologies",
    real: "Isolated to one institution's jurisdiction — no controlled EU corridor scenarios",
    synthetic:
      "✓ 7 EU corridor typologies, 10 origin/destination countries with Europol-calibrated weights",
  },
  {
    title: "Regulatory defensibility",
    real: "Cannot share with regulator without anonymisation (which degrades signal)",
    synthetic:
      "✓ Present to FCA / BaFin / DNB directly. No anonymisation needed — it was never real.",
  },
  {
    title: "Time to dataset",
    real: "6–18 months data engineering, legal review, anonymisation pipeline",
    synthetic:
      "✓ Under 60 seconds. 5,000 rows to 1M+ rows, any schema.",
  },
];

const ComparisonTable = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <p className="body uppercase tracking-widest text-gray-400 mb-3">
            Synthetic vs. Real Data
          </p>

          <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-gray-900 mb-4">
            Why not just use real data?
          </h2>

          <p className="body text-gray-600 max-w-2xl">
            This is the most common question we get. The answer is: for model
            training and compliance testing, synthetic data is often{" "}
            <span className="italic font-medium">better</span> than real data —
            not just safer.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-lg font-poppins">
            
            {/* Head */}
            <thead className="bg-gray-900 text-white text-lg font-poppins uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 text-left">Dimension</th>
                <th className="px-6 py-4 text-left">Real Transaction Data</th>
                <th className="px-6 py-4 text-left">Synthetic Data</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="border-b last:border-none even:bg-gray-50"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {row.title}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {row.real}
                  </td>

                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {row.synthetic}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;