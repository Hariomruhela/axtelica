import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import ProductSection from "../components/ProductSection";
import { productsData } from "../data/products";
import DemoForm from "../components/DemoForm";

// import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ProductImageSection from "../components/ProductImageSection";
import ProductFAQ from "../components/ProductFAQ";

const Product = () => {
  const { productId } = useParams();
  const data = productsData[productId];

  if (!data)
    return <h1 className="text-center py-20 text-xl">Not Found</h1>;

  return (
    
    <div key={productId} className="w-full overflow-hidden">

      {/* HERO */}
       <section
  className="relative flex items-center justify-center py-12 sm:py-12 lg:py-16 h-[450px] w-full overflow-hidden

    bg-[linear-gradient(-45deg,#101030,#0F1242,#2558BA,#306BCA)]
    bg-[length:400%_400%]
    animate-gradientFlow
  "
>
      
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}

        <div className="relative z-10 max-w-7xl mt-10 mx-auto">
          <div className="flex  gap-3 items-center justify-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mt-10 lg:text-left "
            > 
            <img src={data.axtreamlogo} alt="axtreamlogo"
            className="h-full w-full"

            />
              {/* <h1 className="text-[clamp(28px,5vw,48px)]  font-bold text-white text-center max-w-3xl leading-tight">
                {data.name}
              </h1> */}
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center  lg:text-center"
            >
              <h2 className="text-[clamp(18px,3vw,32px)] pl-10 font-poppins text-left max-w-7xl text-gray-200 leading-tight">
                {data.heroTitle}
              </h2>

              
            </motion.div>

          </div>
        </div>
        {/* Bottom Shape */}
  {/* <div className="absolute bottom-0 w-full leading-none">
    <svg viewBox="0 0 1440 120" className="w-full">
      <path
        d="M0 0L1440 40V120H0V0Z"
        fill="white"
        fillOpacity="0.05"
      />
    </svg>
  </div> */}
      </section>

      {/* DESCRIPTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-[clamp(18px,3vw,28px)] font-poppins text-gray-900 leading-relaxed ">
            {data.description}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <ProductSection data={data} />
      <ProductImageSection data={data} />

      {/* OTHER SECTIONS */}
      <DemoForm {...data.demoSection} />
      <ProductFAQ data={data?.FAQ||[]}/>
      
      {/* <FAQ /> */}
      <Footer />
    </div>
  );
};

export default Product;