import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductFAQ = ({ data = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500">No FAQs available</p>
    );
  }

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-[1400px] px-7 mx-auto">
        
        <h2 className="text-3xl md:text-4xl text-black font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="border rounded-xl p-5 shadow-sm bg-white"
            >
              {/* 🔹 Question Row */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-poppins  text-gray-900">
                  {item.question}
                </h3>

                {/* + / - Button */}
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-gray-900"
                >
                  {activeIndex === index ? "−" : "+"}
                </motion.span>
              </div>

              {/* 🔹 Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700 font-poppins text-lg mt-3">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductFAQ;