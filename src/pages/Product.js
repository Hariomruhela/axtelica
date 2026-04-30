import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import ProductSection from "../components/ProductSection";
import { productsData } from "../data/products";
import DemoForm from "../components/DemoForm";
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
        className="
        relative flex items-center justify-center
        py-16 sm:py-20 lg:py-24
        min-h-[300px] sm:min-h-[380px] lg:min-h-[450px]
        w-full overflow-hidden
        bg-[linear-gradient(-45deg,#101030,#0F1242,#2558BA,#306BCA)]
        bg-[length:400%_400%]
        animate-gradientFlow
        "
      >
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* FLEX */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center justify-center">

            {/* LEFT (Logo) */}
            {productId !== "Intelligent" && (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className="flex justify-center lg:justify-start"
  >
    <img
      src={data.axtreamlogo}
      alt="logo"
      className="
        w-[100px] sm:w-[130px] md:w-[160px] lg:w-auto
        max-w-[200px]
        h-auto object-contain
      "
    />
  </motion.div>
)}

            {/* RIGHT (Text) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <h2
                className="
                text-[clamp(16px,4vw,32px)]
                font-poppins
                text-gray-200
                leading-relaxed
                max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl
                mx-auto lg:mx-0
                "
              >
                {data.heroTitle}
              </h2>
            </motion.div>

          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="
            text-[clamp(16px,2.8vw,26px)]
            font-poppins
            text-gray-900
            leading-relaxed
            "
          >
            {data.description}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <ProductSection data={data} />
      <ProductImageSection data={data} />

      {/* OTHER SECTIONS */}
      <DemoForm {...data.demoSection} />
      <ProductFAQ data={data?.FAQ || []} />

      <Footer />
    </div>
  );
};

export default Product;