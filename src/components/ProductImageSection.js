
import React from "react";

const ProductImageSection = ({data}) => {
  return (<>
  
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
  {data.midleTitle}
</h2>
        {/* 🔹 Top Paragraph */}
        <p className="text-gray-700 text-[16px] font-poppins md:text-2xl max-w-7xl mx-auto mb-10">
         
         {data.midlePara}
        </p>
        <div className=" flex justify-center  ">
            <img
            className="h-[10%] w-[30%]"
             src={data.productlogo} alt="asterm logo" />
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
          {data.botomtitle}
        </h3>

        {/* 🔹 Bottom Paragraph */}
        <p className="text-gray-600 text-lg md:text-2xl max-w-7xl mx-auto mb-8">
          {data.bottompara}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

  {/* Button 1 */}
  <button className="w-fit bg-[#FF3366] text-white px-7 py-3 rounded-md text-lg font-poppins hover:bg-pink-600 hover:scale-105 transition">
    Product Tour
  </button>

  {/* Button 2 + Text */}
  <div className="flex items-center gap-4">
    
    <button className="bg-gradient-to-r from-[#00bfff] via-[#4a5de2] to-[#8a2be2] text-white px-6 py-3 rounded-md text-lg font-poppins hover:from-[#8a2be2] hover:via-[#4a5de2] hover:to-[#00bfff] transition">
      Start free 7 day-Trial
    </button>

    <p className="text-gray-600 text-sm font-poppins max-w-[250px]">
      No Credit Card required. You will start trial with corporate email only.
    </p>

  </div>

</div>

      </div>
    </section></>
  );
};

export default ProductImageSection;