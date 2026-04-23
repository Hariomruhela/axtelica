import React from "react";
import { motion } from "framer-motion";
import { caseStudies } from "../data/caseStudies"; // ✅ data moved to separate file

const CaseCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
    >
      <span className="text-xs uppercase tracking-widest text-pink-400">
        {data.industry}
      </span>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">
        {data.title}
      </h2>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">
          THE CHALLENGE
        </h3>
        <p className="text-gray-700 text-lg font-poppins leading-relaxed">
          {data.challenge}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-1">
          THE SOLUTION
        </h3>
        <p className="text-gray-700 text-lg font-poppins leading-relaxed">
          {data.solution}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">
          PRODUCTS USED
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-lg font-poppins space-y-1">
          {data.products.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {data.metrics.map((metric, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
          >
            <p className="text-2xl font-poppins font-bold text-black">{metric.value}</p>
            <p className="text-lg font-poppins text-gray-700 mt-1">{metric.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const CaseStudiesSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-12 text-center">
          Customer Success Stories
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-10">
          {caseStudies.map((item, index) => (
            <CaseCard key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
