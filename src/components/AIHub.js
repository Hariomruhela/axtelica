// import { ArrowRight } from "lucide-react";
import React from "react";

const products = [
  {
    title: "Axtream",
    description:
      "A real-time business intelligence platform for KPI monitoring, data quality visibility, and operational insight. Axtream gives your teams a single live view of business performance — across functions, systems, and data sources.",
    image: "/assets/prod_card_bg.png",
    buttonImage: "/assets/start_free_trial_btn.png",
  },
  {
    title: "Infinisight",
    subtitle: "AML AND FRAUD PLATFORM",
    description:
      "A simulation and synthetic data platform for what-if analysis, scenario planning, and smarter forecasting. Infinisight helps leaders test decisions before committing to them — reducing risk and improving strategic confidence.",
    
    image: "/assets/prod_card_bg.png",
    unlockImage: "/assets/unlock_btn.png",
    buttonImage: "/assets/start_free_trial_btn.png",
  },
  
  {
    title: "Intelligent Business Agents — Coming Soon",
    description:
      "Axtelica is actively developing a suite of intelligent agents designed to work inside your workflows — assisting teams with requirement capture, analytics, data validation, and process automation. Early access available.",
    image: "/assets/prod_card_bg.png",
    buttonImage: "/assets/start_free_trial_btn.png",
  },
  
];

const AIHub = () => {
  return (
    <section className="relative pt-20 px-3 bg-white">
      <div className="max-w-[1650px] pl-4 mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-14 mb-12">
          <div className="leading-tight">
            <h2 className="text-[48px] md:text-[48px] font-poppins text-gray-900">
              Platforms & Products by Axtelica
            </h2>
            <p className="text-[24px] md:text-[24px] font-poppins text-gray-900">
              Practical AI. Proven results. Built for real business problems.
            </p>
          </div>

          <p className="pl-32 ml-10 text-[18px] md:text-[21px] font-poppins text-gray-600 text-right">
            Our platforms are built as standalone products — but designed to work together as a unified intelligence layer across your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {products.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden text-white pt-8 pl-6 flex flex-col justify-between min-h-[500px] hover:scale-105 transition duration-300"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              {/* <div
                className={`absolute inset-0 ${
                  i === 0
                    ? "bg-purple-900/60"
                    : i === 1
                    ? "bg-indigo-900/60"
                    : "bg-blue-900/60"
                }`}
              ></div> */}

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">

                {/* Top */}
                <div className="px-8">
                  <h3 className="text-[28px] md:text-[24px] font-poppins leading-tight font-medium mb-2">
                    {item.title}
                  </h3>

                  {/* Unlock Image */}
                  {/* {item.unlockImage && (
                    <img
                      className="absolute top-3 right-[-23px] w-16 md:w-48 z-20"
                      src={item.unlockImage}
                      alt="unlock"
                    />
                  )} */}

                 
                  

                  <p className="text-[16px] md:text-[16px]  font-poppins text-left w-[90%] text-white/90 leading-[20px]">
                    {item.description}
                  </p>

                  
                </div>

               {/* Button */}
                <div className="     -bottom-5 hover:scale-105 rounded-full flex justify-end ">
                  
                  <button className="  overflow-hidden">
                    {item.buttonImage && (
                      <img
                        src={item.buttonImage}
                        alt="btn"
                        className="  "
                      />
                    )}
                  </button>
                </div>
               
              </div>

              {/* 🔥 Overlapping Image ONLY for first card */}
              {i === 1 && (
                <img
                  src="/assets/PRD_01_img.png"
                  alt="preview"
                  className="absolute bottom-20  left-14 text-center   sm:w-[350px] w-[330px] md:h-[200px] md:w-[376px] z-20 pointer-events-none transition-transform duration-500 hover:scale-105"
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