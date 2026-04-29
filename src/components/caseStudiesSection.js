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
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl 
      p-4 sm:p-6 lg:p-8 transition-all duration-300 ${
        open ? "shadow-2xl scale-[1.01]" : "shadow-lg"
      }`}
    >
      {/* 🔹 Header */}
      <div
        className="flex flex-col sm:flex-row justify-between gap-4 cursor-pointer"
        onClick={onToggle}
      >
        <div>
          {/* Industry */}
          <span className="text-xs sm:text-sm md:text-base font-poppins uppercase tracking-widest text-pink-400">
            {data.industry}
          </span>

          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-poppins text-gray-900 mt-1">
            {data.title}
          </h2>
        </div>

        {/* Toggle Button */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center 
          rounded-full bg-white text-black text-xl sm:text-2xl self-end sm:self-center"
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
            <div className="mt-5 sm:mt-6">

              {/* Challenge */}
              <div className="mt-3">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                  THE CHALLENGE
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {data.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mt-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                  THE SOLUTION
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {data.solution}
                </p>
              </div>

              {/* Products */}
              <div className="mt-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                  PRODUCTS USED
                </h3>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                  {data.products.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
                {data.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-[#f1f4f7] rounded-xl p-3 sm:p-4 text-center"
                  >
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                      {metric.value}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-poppins text-gray-700 mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="mt-5">
                <button className="text-pink-400 text-sm sm:text-base font-medium hover:underline">
                  Read More
                </button>
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
    <section className="bg-white py-10 sm:py-14 lg:py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="space-y-4 sm:space-y-6">
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