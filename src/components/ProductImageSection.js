import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductImageSection = ({ data }) => {
  const navigate=useNavigate();
  const location=useLocation();
   // ❌ Hide component on this route
  if (location.pathname === "/product/Intelligent") {
    return null;
  }

  return (
    <section className="py-10 sm:py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* 🔹 Top Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-poppins font-bold mb-4 sm:mb-8 
        bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-snug">
          {data.midleTitle}
        </h2>

        {/* 🔹 Top Paragraph */}
        <p className="text-gray-700 text-sm sm:text-base md:text-2xl 
        max-w-3xl sm:max-w-5xl md:max-w-7xl mx-auto mb-6 sm:mb-10 leading-relaxed">
          {data.midlePara}
        </p>

        {/* 🔹 Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            className="w-[50%] sm:w-[30%] md:w-[30%] h-auto object-contain"
            src={data.productlogo}
            alt="product logo"
          />
        </div>

        {/* 🔹 Center Image */}
        <div className="mb-8 sm:mb-12">
          <img
            src={data.Productimage}
            alt="product"
            className="w-full h-auto object-contain max-h-[300px] sm:max-h-none"
          />
        </div>

        {/* 🔹 Bottom Heading */}
        <h3 className="text-xl sm:text-2xl md:text-5xl font-poppins font-semibold text-gray-900 mb-3 sm:mb-4 leading-snug">
          {data.botomtitle}
        </h3>

        {/* 🔹 Bottom Paragraph */}
        <p className="text-gray-600 text-sm sm:text-lg md:text-2xl 
        max-w-3xl sm:max-w-5xl md:max-w-7xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          {data.bottompara}
        </p>

        {/* 🔹 Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">

          {/* Button 1 */}
          <button
          onClick={() => (window.location.href = "https://axtream.axtelica.com/")}
           className=" sm:w-fit bg-[#FF3366] text-white px-6 sm:px-7 py-3 
          rounded-md text-sm sm:text-lg font-poppins hover:bg-pink-600 hover:scale-105 transition">
            Product Tour
          </button>

          {/* Button 2 + Text */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            
            <button
            onClick={()=>navigate("/demo")}
    
             className="w-full sm:w-fit bg-gradient-to-r from-[#00bfff] via-[#4a5de2] to-[#8a2be2] 
            text-white px-6 sm:px-7 py-3 rounded-md text-sm sm:text-lg font-poppins 
            hover:from-[#8a2be2] hover:via-[#4a5de2] hover:to-[#00bfff] transition">
              Start free 7 day-Trial
            </button>

            <p className="text-gray-600 text-xs sm:text-sm font-poppins max-w-[220px] sm:max-w-[250px]">
              No Credit Card required. You will start trial with corporate email only.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductImageSection;