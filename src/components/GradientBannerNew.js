import React from "react";

const GradientBannerNew = () => {
  const slides = [
    "AI-Powered Solutions - Built to solve real business challenges",
    "Business Platforms - Scalable solutions designed for growth",
    "Intelligent Agents - AI agents that support work and decisions",
    // "Cost-Effective Innovation - Faster value without unnecessary complexity."
  ];

  return (
    <div className="w-full h-[90px] md:h-[70px] flex items-center justify-center relative overflow-hidden font-[Inter] shadow-[0_10px_30px_rgba(0,0,0,0.2)] bg-gradient-to-r from-[#8a2be2] via-[#4a5de2] to-[#00bfff]">
      
      {slides.map((text, index) => (
        <div
          key={index}
          className="absolute w-full text-white font-poppins  whitespace-nowrap 
                     text-[1.4rem] md:text-[1.5rem] 
                     text-center md:text-right md:pr-[10%]
                     opacity-0 animate-crossFade"
          style={{ animationDelay: `${index * 4}s` }}
        >
          {text}
        </div>
      ))}

    </div>
  );
};

export default GradientBannerNew;