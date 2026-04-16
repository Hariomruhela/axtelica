import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "features", label: "Key Features" },
  { key: "benefits", label: "Benefits" },
];

const ProductSection = ({ data }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImage, setCurrentImage] = useState(0);

  const tabData = data?.tabs?.[activeTab];

  // 🔥 Auto slide (fixed)
  useEffect(() => {
    if (!data?.image) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === data.image.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [data]);

  // 🔥 Reset on tab change
  useEffect(() => {
    setCurrentImage(0);
  }, [activeTab]);

  if (!data || !data.tabs) {
    return <div className="text-center py-20">No Data Found</div>;
  }

  if (!tabData) {
    return <div className="text-center py-20">Invalid Tab</div>;
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT - IMAGE */}
        <div>
          <div className="relative h-[400px]  rounded-2xl bg-gradient-to-r from-purple-300 to-gray-300 p-4 overflow-hidden ">
            
            <AnimatePresence mode="normal">
              <motion.img
                key={currentImage}
                src={data.image?.[currentImage]}
                alt="product"
                initial={{ opacity: 1, x: 100, scale: 1.05 }}
               animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 1, x: -120, scale: 0.95 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-[590px] h-full object-center rounded-xl"
              />
            </AnimatePresence>

          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-6 gap-2">
            {data.image?.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentImage
                    ? "bg-gray-700 scale-125"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* TABS */}
          <div className="flex gap-6 px-4 py-2 w-fit mb-6 border border-gray-300 bg-gray-100 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* CONTENT ANIMATION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[300px]"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">
                {tabData.title}
              </h2>

              <p className="text-gray-700 mb-6">
                {tabData.description}
              </p>

              <ul className="space-y-2 mb-6 text-gray-700">
                <h4 className="text-gray-800 font-medium">
                  Key value points
                </h4>
                {tabData.points?.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span>•</span> {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
            Request a Demo
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;