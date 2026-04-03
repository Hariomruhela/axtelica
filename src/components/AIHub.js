import React from "react";

const products = [
  {
    title: "Infinisight",
    subtitle: "AML AND FRAUD PLATFORM",
    description:
      "The Universal Enterprise Platform Powering Growth Across Every Function and Industry",
    description2:
      "Build for modern businesses to improve execution, increase productivity, and drive smarter decisions.",
    image: "/assets/Prd_bg01.png",
    unlockImage: "/assets/unlock_btn.png",
    buttonImage: "/assets/get_a_demo_btnnew.png",
  },
  {
    title: "Optima Orbit",
    description:
      "An AI-powered business platform that unifies growth, operations, automation, and insights in one connected ecosystem.",
    description2:
      "Build for modern businesses to improve execution, increase productivity, and drive smarter decisions.",
    image: "/assets/Prd_bg02.png",
    buttonImage: "/assets/get_a_demo_btnnew.png",
  },
  {
    title: "Axtream",
    description:
      "Axtream Real-Time Data Integration, Quality, and Intelligence.",
    description2:
      "Axtream helps businesses connect data from applications, databases, APIs, and streaming platforms.",
    image: "/assets/Prd_bg03.png",
    buttonImage: "/assets/get_a_demo_btnnew.png",
  },
];

const AIHub = () => {
  return (
    <section className="relative pt-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-[48px] md:text-[60px] font-poppins text-gray-900">
              AI Innovation Hub
            </h2>
            <p className="text-[24px] md:text-[36px] font-poppins text-gray-600">
              The Architecture of Advantage
            </p>
          </div>

          <p className="text-[18px] md:text-[21px] font-poppins text-gray-600">
            Secure your enterprise with a unified, AI-native platform and managed
            services built to deliver a true operating advantage across endpoints,
            identities, cloud, and AI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {products.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden text-white p-6 flex flex-col justify-between min-h-[420px] hover:scale-105 transition duration-300"
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
                <div>
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
                    <p className="text-[16px] md:text-[18px] font-semibold text-purple-200 mb-3">
                      {item.subtitle}
                    </p>
                  )}

                  <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed">
                    {item.description}
                  </p>

                  <p className="text-[14px] md:text-[16px] mt-4 text-white/80 leading-relaxed">
                    {item.description2}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6 flex justify-end">
                  <button className="rounded-full border border-gray-200 overflow-hidden">
                    {item.buttonImage && (
                      <img
                        src={item.buttonImage}
                        alt="btn"
                        className="w-[140px] md:w-[160px]"
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* 🔥 Overlapping Image ONLY for first card */}
              {i === 0 && (
                <img
                  src="/assets/PRD_01_img.png"
                  alt="preview"
                  className="absolute -bottom-10 right-[32px] w-[200px] md:w-[350px] z-20 pointer-events-none transition-transform duration-500 hover:scale-105"
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