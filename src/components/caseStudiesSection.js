import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "../data/caseStudies";
const CaseCard = ({ data, index, open, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 py-16 transition-all duration-300 ${
        open ? "shadow-2xl scale-[1.01]" : "shadow-lg"
      }`}
    >
      {/* 🔹 Header */}
      <div
        className="flex w-[100%]  justify-between cursor-pointer"
        onClick={onToggle}
      >
        {/* Industry on top */}
   <div>
    {/* Industry on top */}
    <span className="text-lg font-poppins uppercase tracking-widest text-pink-400 mb-6">
      {data.industry}
    </span>

    {/* Title below */}
    <h2 className="text-xl md:text-2xl font-poppins text-gray-900 mt-1">
      {data.title}
    </h2>
  </div>

        {/* Toggle Button */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-3xl"
        >
          {open ? "−" : "+"}
        </motion.div>
      </div>

      {/* 🔹 Expandable Content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="mt-6">
              

              {/* Challenge */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  THE CHALLENGE
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {data.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  THE SOLUTION
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {data.solution}
                </p>
              </div>

              {/* Products */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  PRODUCTS USED
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
                  {data.products.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {data.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                  >
                    <p className="text-xl font-bold text-black">
                      {metric.value}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const CaseStudiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-12 text-center">
          Customer Success Stories
        </h1>

        <div className="space-y-6">
          {caseStudies.map((item, index) => (
            <CaseCard
              key={index}
              data={item}
              index={index}
              open={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;
