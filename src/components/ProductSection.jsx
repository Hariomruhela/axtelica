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
    <section className="py-12 sm:py-16 lg:py-24 px-1 sm:px-1 md:px-8 lg:px-8 bg-[#f5f5f5]">
      <div className="max-w-[1400px] px-0 md:px-6 mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-hidden">

        {/* LEFT - IMAGE */}
        <div className=" lg:order-none">
          <div className=" relative aspect-[4/4] w-full rounded-2xl overflow-hidden">

            {/* 🔵 Background Layer (Responsive Fix) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/assets/product_slide_bg.png"
                alt="bg"
                className="max-h-full max-w-full md:h-[862px] md:w-[815px] object-contain"
              />
            </div>

            {/* 🟢 Content Layer */}
            <div className="relative z-10 flex items-center justify-center pb-7 h-full w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={data.image?.[currentImage]}
                  alt="product"
                  initial={{ opacity: 0, x: 0, scale: 1.05 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="max-h-[80%] sm:max-h-[90%] max-w-[90%] object-contain"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-10 gap-2">
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
        <div className="px-2 md:px-5 flex flex-col items-start h-full">

          {/* ✅ TABS (Scrollable on Mobile) */}
          <div className="inline-flex w-full sm:w-fit overflow-x-auto no-scrollbar gap-6 sm:gap-12 px-2 py-1 mb-6 border border-gray-300 bg-gray-100 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-3 rounded-full text-lg sm:text-xl font-poppins transition ${
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
              className="min-h-[260px] px-2 sm:px-4 pt-5 sm:pt-7"
            >
              <h2 className="text-[clamp(20px,3vw,28px)] font-poppins text-black mb-4 leading-snug">
                {tabData.title}
              </h2>

              {activeTab === "overview" && tabData.Subtitles && (
                <p className="text-gray-800 font-poppins text-base sm:text-lg whitespace-pre-line mb-3">
                  {tabData.Subtitles}
                </p>
              )}

              <p className="text-gray-700 font-poppins text-base sm:text-lg mb-7 leading-snug">
                {tabData.description}
              </p>

              <div className="space-y-2 mb-6">
                {activeTab === "overview" && tabData.description2 && (
                  <p className="text-gray-700 font-poppins text-base sm:text-lg whitespace-pre-line">
                    {tabData.description2}
                  </p>
                )}

                {tabData.points?.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-base sm:text-lg font-poppins text-gray-700"
                  >
                    <span className="mt-1">•</span>
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/demo")}
            className="w-fit mt-5 ml-2 md:ml-4 self-start bg-[#FF3366] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-poppins hover:bg-pink-600 hover:scale-105 transition"
          >
            Explore Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;