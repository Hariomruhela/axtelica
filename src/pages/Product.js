import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import ProductSection from "../components/ProductSection";
import { productsData } from "../data/products";
import DemoForm from "../components/DemoForm";
import Insights from "../components/Insights";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Product = () => {
  const { productId } = useParams();
  const data = productsData[productId];

  if (!data)
    return <h1 className="text-center py-20 text-xl">Not Found</h1>;

  return (
    <div className="w-full overflow-hidden">

      {/* HERO */}
      <section
        className="relative bg-cover bg-center  py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url('/assets/hero_banner_new.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-[1400px] mt-10 mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-[clamp(28px,5vw,56px)] font-bold text-white leading-tight">
                {data.name}
              </h1>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-[clamp(18px,3vw,28px)] text-gray-200 leading-relaxed">
                {data.heroTitle}
              </h2>

              <button className="mt-6 bg-[#FF3366] text-white px-6 py-3 rounded-lg text-sm sm:text-base hover:scale-105 transition">
                {data.button}
              </button>
            </motion.div>

          </div>
        </div>
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

      {/* OTHER SECTIONS */}
      <DemoForm />
      <Insights />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Product;