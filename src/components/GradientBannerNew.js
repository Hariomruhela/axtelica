import React from "react";

const GradientBannerNew = () => {
  const slides = [
    "AI-Powered Solutions - Built to solve real business challenges",
    "Business Platforms - Scalable solutions designed for growth",
    "Intelligent Agents - AI agents that support work and decisions",
  ];

  return (
    <div className="w-full h-[70px] sm:h-[80px] md:h-[90px] flex items-center justify-center relative overflow-hidden font-[Inter] shadow-[0_10px_30px_rgba(0,0,0,0.2)] bg-gradient-to-r from-[#8a2be2] via-[#4a5de2] to-[#00bfff]">

      {slides.map((text, index) => (
        <div
          key={index}
          className="
            absolute w-full text-white font-poppins
            px-4 sm:px-6
            text-center md:text-right md:pr-[10%]

            text-sm sm:text-base md:text-xl lg:text-2xl

            leading-snug
            opacity-0 animate-crossFade

            whitespace-normal md:whitespace-nowrap
          "
          style={{ animationDelay: `${index * 4}s` }}
        >
          {text}
        </div>
      ))}

    </div>
  );
};

export default GradientBannerNew;