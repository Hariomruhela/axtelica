import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "features", label: "Key Features" },
  { key: "benefits", label: "Benefits" },
];

const ProductSection = ({ data }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const tabData = data?.tabs?.[activeTab];

  useEffect(() => {
    if (!data?.image) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === data.image.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [data]);

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
    <section className="py-8 sm:py-12 lg:py-24 px-3 sm:px-4 md:px-8 lg:px-8 bg-[#f5f5f5]">
      <div className="max-w-[1400px] px-0 md:px-6 mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center overflow-hidden">

        {/* LEFT IMAGE */}
        <div>
          <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[420px] lg:max-w-full mx-auto rounded-2xl overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/assets/product_slide_bg.png"
                alt="bg"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Image */}
            <div className="relative z-10 flex items-center justify-center h-full w-full pb-4 sm:pb-6">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={data.image?.[currentImage]}
                  alt="product"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="max-h-[85%] sm:max-h-[85%] md:max-h-[97%] md:max-w-[89%]  max-w-[85%] object-contain"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-5 sm:mt-8 gap-2">
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
        <div className="px-1 sm:px-3 md:px-5 flex flex-col items-start h-full">

          {/* Tabs */}
          <div className="flex w-fit overflow-x-auto no-scrollbar gap-3 sm:gap-4 px-2 py-2 mb-5 border border-gray-300 bg-gray-100 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-sm sm:text-base whitespace-nowrap font-poppins transition ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="min-h-auto sm:min-h-[260px] px-1 sm:px-4 pt-3 sm:pt-7"
            >
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-poppins text-black mb-3 leading-snug">
                {tabData.title}
              </h2>

              {activeTab === "overview" && tabData.Subtitles && (
                <p className="text-gray-800 font-poppins text-sm sm:text-lg whitespace-pre-line mb-3">
                  {tabData.Subtitles}
                </p>
              )}

              <p className="text-gray-700 font-poppins text-sm sm:text-lg mb-5 leading-relaxed">
                {tabData.description}
              </p>

              <div className="space-y-2 mb-5">
                {activeTab === "overview" && tabData.description2 && (
                  <p className="text-gray-700 font-poppins text-sm sm:text-lg whitespace-pre-line">
                    {tabData.description2}
                  </p>
                )}

                {tabData.points?.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-sm sm:text-lg font-poppins text-gray-700"
                  >
                    <span className="mt-1">•</span>
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Button */}
          <button
            onClick={() => navigate("/demo")}
            className="w-fit mt-4 ml-1 sm:ml-3 self-start bg-[#FF3366] text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg text-sm sm:text-lg font-poppins hover:bg-pink-600 hover:scale-105 transition"
          >
            Explore Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;