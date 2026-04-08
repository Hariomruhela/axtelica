import { ArrowRight } from "lucide-react";
import React from "react";

const products = [
  {
    title: "Infinisight",
    subtitle: "AML AND FRAUD PLATFORM",
    description:
      "The Universal Enterprise Platform Powering Growth Across Every Function and Industry",
    
    image: "/assets/Prd_bg01.png",
    unlockImage: "/assets/unlock_btn.png",
    buttonImage: "/assets/get_a_demo_btnnew.png",
  },
  {
    title: "Optima Orbit",
    description:
      "An AI-powered business platform that unifies growth, operations, automation, and insights in one connected ecosystem.Built for modern businesses to improve execution, increase productivity, and drive smarter decisions",
    description2:
      "Build for modern businesses to improve execution, increase productivity, and drive smarter decisions.",
    image: "/assets/Prd_bg02.png",
    buttonImage: "/assets/get_a_demo_btnnew.png",
  },
  {
    title: "Axtream",
    description1:
      "Axtream Real-Time Data Integration, Quality, and Intelligence.",
    description2:
      "Axtream helps businesses connect data from applications, databases, APIs, and streaming platforms to enable faster decisions, trusted reporting, and AI - ready operations.",
    image: "/assets/Prd_bg03.png",
    buttonImage: "/assets/get_a_demo_btnnew.png",
  },
];

const AIHub = () => {
  return (
    <section className="relative pt-20 px-6 bg-white">
      <div className="max-w-[1650px] pl-4 mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-14 mb-12">
          <div className="leading-tight">
            <h2 className="text-[48px] md:text-[58px] font-poppins text-gray-900">
              AI Innovation Hub
            </h2>
            <p className="text-[24px] md:text-[36px] font-poppins text-gray-900">
              The Architecture of Advantage
            </p>
          </div>

          <p className="pl-32 ml-10 text-[18px] md:text-[21px] font-poppins text-gray-600 text-right">
            Secure your enterprise with a unified, AI-native platform and managed
            services built to deliver a true operating advantage across endpoints,
            identities, cloud, and AI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {products.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden text-white p-6 flex flex-col justify-between min-h-[450px] hover:scale-105 transition duration-300"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div
                className={`absolute inset-0 ${
                  i === 0
                    ? "bg-purple-900/60"
                    : i === 1
                    ? "bg-indigo-900/60"
                    : "bg-blue-900/60"
                }`}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">

                {/* Top */}
                <div className="px-8">
                  <h3 className="text-[28px] md:text-[36px] font-poppins font-medium mb-2">
                    {item.title}
                  </h3>

                  {/* Unlock Image */}
                  {item.unlockImage && (
                    <img
                      className="absolute top-3 right-[-23px] w-16 md:w-48 z-20"
                      src={item.unlockImage}
                      alt="unlock"
                    />
                  )}

                  {item.subtitle && (
                    <p className="text-[16px] md:text-[18px] font-bold text-purple-200 mb-1 leading-tight">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="text-[16px] md:text-[24px] font-semibold font-poppins text-left w-[90%] text-white/90 leading-tight">
                    {item.description1}
                  </p>

                  <p className="text-[16px] md:text-[20px] font-semibold font-poppins text-left w-[90%] text-white/90 leading-none">
                    {item.description}
                  </p>

                  <p className=" mt-4 text-[16px] md:text-[20px] font-medium font-poppins text-left w-[100%] text-white/90 leading-none">
                    {item.description2}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6 flex justify-end">
                   <button className="flex items-center gap-4 bg-gradient-to-r from-[#b5b0ec] to-[#d7d2f6] text-white pl-3  rounded-full shadow-md hover:scale-105 transition-all duration-300">
      
      {/* Text */}
      <span className="text-lg font-medium py-2 text-white">
        Get a Demo
      </span>

      {/* Arrow Circle */}
      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600">
        <ArrowRight size={28} className="text-white" />
      </div>
      
    </button>
                  {/* <button className="rounded-full border border-gray-200 overflow-hidden">
                    {item.buttonImage && (
                      <img
                        src={item.buttonImage}
                        alt="btn"
                        className="w-[140px] md:w-[160px]"
                      />
                    )}
                  </button> */}
                </div>
               
              </div>

              {/* 🔥 Overlapping Image ONLY for first card */}
              {i === 0 && (
                <img
                  src="/assets/PRD_01_img.png"
                  alt="preview"
                  className="absolute -bottom-20 right-[28px] w-[200px] md:w-[450px] z-20 pointer-events-none transition-transform duration-500 hover:scale-105"
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