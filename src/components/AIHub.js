import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    title: "Axtream",
    path: "/product/axtream",
    description:
      "A real-time business intelligence platform for KPI monitoring, data quality visibility, and operational insight.",
    image: "/assets/axtream_home_img.png",
  },
  {
    title: "Infinisight",
    path: "/product/infinisight",
    description:
      "A simulation and synthetic data platform for what-if analysis and smarter forecasting.",
    image: "/assets/infi_home_img.png",
  },
  {
    title: "Intelligent Business Agents",
    path: "/product/Intelligent",
    description:
      "Axtelica is developing intelligent agents to assist teams with analytics, validation, and automation.",
    image: "/assets/ai_agent_home_img.png",
  },
];

const AIHub = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  const handleClick = (i, path) => {
    if (window.innerWidth < 768) {
      // mobile behavior
      if (active === i) {
        navigate(path);
      } else {
        setActive(i);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 mb-4">

          {/* Left */}
          <div className="leading-tight">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[clamp(28px,5vw,48px)] text-gray-900">
              AI Innovation Hub
            </h2>

            <p className="mt-2 sm:mt-3 mb-4 sm:mb-3 lg:mb-12 
              text-[14px] sm:text-[16px] lg:text-[clamp(16px,2vw,30px)] 
              text-gray-700">
              Platforms and products built by Axtelica
            </p>
          </div>

          {/* Right */}
          <p className="text-gray-600 
            text-[13px] sm:text-[14px] md:text-base lg:text-[16px] 
            lg:text-right max-w-xl ml-auto 
            mt-0 sm:mt-2">
            Our platforms are built as standalone products — but designed to work together as a unified intelligence layer across your business.
          </p>
        </div>

        {/* Cards (✅ FIXED GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {products.map((item, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                onClick={() => handleClick(i, item.path)}
                className="relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group h-[420px] sm:h-[450px] cursor-pointer"
              >

                {/* Image */}
                <div
                  className={`
                    absolute w-full h-full origin-bottom
                    transition-all duration-500 ease-in-out
                    ${isActive ? "h-[60%]" : ""}
                    lg:group-hover:h-[60%]
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 lg:group-hover:scale-125"
                  />
                </div>

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 transition-all duration-500
                    ${isActive ? "bg-black/40" : "bg-black/20"}
                    lg:group-hover:bg-black/40
                  `}
                />

                {/* White Panel */}
                <div className="absolute left-0 right-0 bottom-0 bg-white p-4 pt-7 z-20">

                  {/* Title */}
                  <h3 className="text-gray-900 text-xl sm:text-2xl">
                    {item.title}

                    {item.title === "Intelligent Business Agents" && (
                      <span className="ml-2 text-xs text-gray-500">
                        (Coming Soon)
                      </span>
                    )}
                  </h3>

                  {/* Hidden Content */}
                  <div
                    className={`
                      mt-3 overflow-hidden transition-all duration-500
                      ${isActive ? "opacity-100 max-h-[120px]" : "opacity-0 max-h-0"}
                      lg:group-hover:opacity-100 lg:group-hover:max-h-[100px]
                    `}
                  >
                    <p className="text-sm sm:text-lg text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AIHub;