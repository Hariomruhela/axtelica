import React, { useState, useEffect } from "react";

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "features", label: "Key Features" },
  { key: "benefits", label: "Benefits" },
];

const ProductSection = ({ data }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ safe access (important)
  const tabData = data?.tabs?.[activeTab];

  // 🔥 Auto slide effect (ALWAYS called)
  useEffect(() => {
    if (!tabData?.image) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === tabData.image.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [tabData]);

  // 🔥 Reset when tab changes
  useEffect(() => {
    setCurrentImage(0);
  }, [activeTab]);

  // ✅ NOW conditionals (after hooks)
  if (!data || !data.tabs) {
    return <div className="text-center py-20">No Data Found</div>;
  }

  if (!tabData) {
    return <div className="text-center py-20">Invalid Tab</div>;
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        
        {/* IMAGE SLIDER */}
        <div className="relative rounded-2xl bg-gradient-to-r from-purple-300 to-gray-300 p-4 overflow-hidden">
          <img
            src={tabData.image?.[currentImage]}
            alt="product"
            className="rounded-xl w-full h-[400px] object-cover transition-all duration-700"
          />

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {tabData.images?.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === currentImage ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
       <div>
  {/* TABS (fixed) */}
  <div className="flex gap-12 px-6 py-3 w-[80%] mb-6 border-2 border-gray-400 bg-gray-100 rounded-full">
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

  {/* 🔥 CONTENT WRAPPER (important) */}
  <div className="min-h-[300px]">
    <h2 className="text-2xl md:text-4xl font-semibold text-black mb-4">
      {tabData.title}
    </h2>

    <p className="text-gray-700 mb-6">
      {tabData.description}
    </p>

    <ul className="space-y-2 mb-6 text-black">
      {tabData.points?.map((point, index) => (
        <li key={index} className="flex items-start gap-2">
          <span>•</span> {point}
        </li>
      ))}
    </ul>
  </div>

  <button className="bg-pink-500 text-white px-6 py-3 rounded-lg">
    Request a Demo
  </button>
</div>
      </div>
    </section>
  );
};

export default ProductSection;