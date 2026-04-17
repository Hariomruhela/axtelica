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

  // ✅ Auto slide
  useEffect(() => {
    if (!data?.image) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === data.image.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [data]);

  // ✅ Reset image on tab change
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
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT - IMAGE */}
        <div>
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-r from-purple-300 to-gray-300 p-4 overflow-hidden">
            
            <AnimatePresence mode="normal"> <motion.img key={currentImage} src={data.image?.[currentImage]} alt="product" initial={{ opacity: 1, x: 100, scale: 1.05 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 1, x: -120, scale: 0.95 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full object-center rounded-xl" /> </AnimatePresence>

          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-4 gap-2">
            {data.image?.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentImage
                    ? "bg-gray-800 scale-125"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-start h-full">
          
          {/* ✅ TABS (FIXED WIDTH) */}
          <div className="inline-flex w-fit gap-2 px-2 py-2 mb-6 border border-gray-300 bg-gray-100 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm transition ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="min-h-[260px]"
            >
              <h2 className="text-[clamp(20px,3vw,28px)] font-semibold text-black mb-4">
                {tabData.title}
              </h2>

              <p className="text-gray-700 text-sm sm:text-base mb-6">
                {tabData.description}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-gray-800 font-medium text-sm sm:text-base">
                  Key value points
                </h4>

                {tabData.points?.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
                  >
                    <span className="mt-1">•</span>
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ✅ BUTTON (FIXED WIDTH) */}
          <button className="w-fit self-start bg-pink-500 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base hover:bg-pink-600 hover:scale-105 transition">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;