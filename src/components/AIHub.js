import React from "react";

const products = [
  {
    title: "Axtream",
    description:
      "A real-time business intelligence platform for KPI monitoring, data quality visibility, and operational insight.",
    image: "/assets/prod_card_bg.png",
    buttonImage: "/assets/start_free_trial_btn.png",
  },
  {
    title: "Infinisight",
    description:
      "A simulation and synthetic data platform for what-if analysis and smarter forecasting.",
    image: "/assets/prod_card_bg.png",
    buttonImage: "/assets/start_free_trial_btn.png",
  },
  {
    title: "Intelligent Business Agents — Coming Soon",
    description:
      "Axtelica is developing intelligent agents to assist teams with analytics, validation, and automation.",
    image: "/assets/prod_card_bg.png",
    buttonImage: "/assets/start_free_trial_btn.png",
  },
];

const AIHub = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10  ">
          
          <div>
            <h2 className="text-[clamp(28px,5vw,48px)] font-semibold text-gray-900 leading-tight">
              AI Innovation Hub
            </h2>

            <p className="mt-3 mb-12 text-[clamp(16px,2vw,22px)] text-gray-700">
              Practical AI. Proven results. Built for real business problems.
            </p>
          </div>

          <p className="text-gray-600  text-base md:text-lg lg:text-right max-w-xl mt-2 ml-auto">
            Our platforms are built as standalone products — but designed to work together as a unified intelligence layer across your business.
          </p>
        </div>

       {/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {products.map((item, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col group"
    >

      {/* 🔥 Top Image */}
      <div className="w-full h-[200px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* 🔥 Content */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
          {item.description}
        </p>

        {/* 🔥 Push button to bottom */}
        <div className="mt-auto">
          {item.buttonImage ? (
            <img
              src={item.buttonImage}
              alt="button"
              className="w-[140px] sm:w-[160px] transition group-hover:scale-105"
            />
          ) : (
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
              Explore
            </button>
          )}
        </div>

      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default AIHub;