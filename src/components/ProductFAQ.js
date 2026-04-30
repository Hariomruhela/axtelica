import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductFAQ = ({ data = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        No FAQs available
      </p>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <h2 className="
          text-center  text-black mb-8 sm:mb-10
          text-2xl sm:text-3xl md:text-4xl
        ">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {data.map((item, index) => (
            <div
              key={item.id || index}
              className="
                border border-gray-200
                rounded-lg sm:rounded-xl
                p-4 sm:p-5
                bg-white
                shadow-sm hover:shadow-md
                transition
              "
            >
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start sm:items-center gap-4 text-left"
              >
                <h3 className="
                  text-gray-900 font-poppins
                  text-sm sm:text-base md:text-lg lg:text-xl
                  leading-snug
                ">
                  {item.question}
                </h3>

                {/* Toggle Icon */}
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="
                    text-lg sm:text-xl md:text-2xl
                    font-bold text-gray-900
                    flex-shrink-0
                  "
                >
                  {activeIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="
                      text-gray-700 font-poppins
                      text-sm sm:text-base md:text-lg
                      leading-relaxed
                      mt-3
                    ">
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