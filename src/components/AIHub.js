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
    title: "Intelligent Business Agents ",
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
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-[clamp(28px,5vw,48px)] font-semibold text-gray-900 leading-tight">
              AI Innovation Hub
            </h2>

            <p className="mt-3 mb-12 text-[clamp(16px,2vw,22px)] text-gray-700">
              Practical AI. Proven results. Built for real business problems.
            </p>
          </div>

          <p className="text-gray-600 text-base md:text-lg lg:text-right max-w-xl mt-2 ml-auto">
            Our platforms are built as standalone products — but designed to work together as a unified intelligence layer across your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((item, i) => (
            
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group h-[320px] cursor-pointer"
            >

              {/* Image */}
              <div className="absolute inset-0 h-full group-hover:h-[60%] transition-all duration-500 ease-in-out origin-bottom">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full   object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>

              {/* White Panel */}
              <div className="absolute left-0 right-0 bottom-0 bg-white p-5 
                              transition-all duration-500 ease-in-out z-20">

                {/* Title (always visible) */}
                <h3 className="text-gray-900 text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>

                {/* Hidden Content */}
                <div className="mt-3 opacity-0 max-h-0 overflow-hidden 
                                group-hover:opacity-100 group-hover:max-h-[100px] 
                                transition-all duration-500">

                  <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* {item.buttonImage ? (
                    <img
                      src={item.buttonImage}
                      alt="button"
                      className="w-[140px] transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition">
                      Explore
                    </button>
                  )} */}
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