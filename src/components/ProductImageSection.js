
import React from "react";

const ProductImageSection = ({data}) => {
  return (<>
  
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* 🔹 Top Heading */}
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
          Business Intelligence Dashboards
        </h2>

        {/* 🔹 Top Paragraph */}
        <p className="text-gray-700 text-lg font-poppins md:text-3xl max-w-7xl mx-auto mb-10">
         
         Generate business KPIs, risk insights & data health reports
        </p>
        <div className=" flex justify-center">
            <img src={data.productlogo} alt="asterm logo" />
        </div>

        {/* 🔹 Center Image */}
        <div className=" mb-12">
          <img
            src={data.Productimage} // change dynamically if needed
            alt="product"
            className="w-full h-full  object-contain "
          />
        </div>

        {/* 🔹 Bottom Heading */}
        <h3 className="text-2xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
          Explore Solution and AI Generated Dashboard
        </h3>

        {/* 🔹 Bottom Paragraph */}
        <p className="text-gray-600 text-lg md:text-2xl max-w-7xl mx-auto mb-8">
          A real time business intelligence platform for KPI monitoring, data quality visibility, and operational insights.
        </p>

        {/* 🔹 Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          
          <button className="bg-[#FF3366] text-white px-6 py-3 rounded-md text-sm md:text-lg font-poppins hover:bg-[#FF3366] transition">
            Product Tour 
          </button>
            
          <button className="bg-gradient-to-r from-[#00bfff] via-[#4a5de2] to-[#8a2be2] text-white px-6 py-3 rounded-md text-sm md:text-lg hover:bg-gradient-to-r hover:from-[#8a2be2] hover:via-[#4a5de2] hover:to-[#00bfff] hover:text-white transition">
            Start free 7 day-tail
          </button>

         
        </div>
         <p className="text-gray-600 text-sm font-poppins mx-auto max-w-[250px]  py-3">No Credit Card required. You will start trail with corporate email only.</p>

      </div>
    </section></>
  );
};

export default ProductImageSection;