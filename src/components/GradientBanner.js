import React from "react";

const GradientBanner = () => {
  return (
    <div className="w-full py-6 px-4 bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-500 flex items-center justify-end">
      
      {/* Content */}
      <div className="flex items-center  gap-4">
        
        {/* Arrow Icon (SVG) */}
        <div className="opacity-90">
         <img src="assets/banner_icon01.png" alt="banner" />
        </div>

        {/* Text */}
        <h2 className="H2 text-white ">
          AI-Driven Data for Smarter Insights
        </h2>

      </div>
    </div>
  );
};

export default GradientBanner;