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
        <div className="grid lg:grid-cols-2 gap-10 mb-12 items-center">
          
          <div>
            <h2 className="text-[clamp(28px,5vw,48px)] font-semibold text-gray-900 leading-tight">
              Platforms & Products by Axtelica
            </h2>

            <p className="mt-3 text-[clamp(16px,2vw,22px)] text-gray-700">
              Practical AI. Proven results. Built for real business problems.
            </p>
          </div>

          <p className="text-gray-600 text-base md:text-lg lg:text-right max-w-xl ml-auto">
            Our platforms are built as standalone products — but designed to work together as a unified intelligence layer across your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden text-white flex flex-col justify-between min-h-[420px] group transition duration-300 hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full">
                
                {/* Top */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6 flex justify-start sm:justify-end">
                  {item.buttonImage && (
                    <img
                      src={item.buttonImage}
                      alt="button"
                      className="w-[140px] sm:w-[160px] transition group-hover:scale-105"
                    />
                  )}
                </div>
              </div>

              {/* Floating Image (only second card) */}
              {i === 1 && (
                <img
                  src="/assets/PRD_01_img.png"
                  alt="preview"
                  className="absolute bottom-4 right-4 w-[200px] sm:w-[260px] md:w-[300px] pointer-events-none transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AIHub;