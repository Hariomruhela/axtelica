import React from "react";

const GradientBannerNew = () => {
  const slides = [
    "AI-Powered Solutions - Built to solve real business challenges",
    "Business Platforms - Scalable solutions designed for growth",
    "Intelligent Agents - AI agents that enhance workflows and decision-making",
  ];

  return (
    <div className="w-full h-[70px] sm:h-[80px] md:h-[90px] flex items-center justify-center relative overflow-hidden font-[Inter] shadow-[0_10px_30px_rgba(0,0,0,0.2)] bg-gradient-to-r from-[#8a2be2] via-[#4a5de2] to-[#00bfff]">

      {slides.map((text, index) => (
        <div
          key={index}
          className="
            max-w-[1400px] absolute w-full text-white font-poppins px-1 lg:px-4 
            
            /* ✅ Converted strip-text */
            text-[13px] text-center
            
            /* ✅ Desktop override */
            md:text-[14px] md:text-right
            
            /* Existing styles */
            sm:text-base md:text-2xl lg:text-3xl 
            leading-snug opacity-0 animate-crossFade 
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