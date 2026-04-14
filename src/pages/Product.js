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

  if (!data) return <h1 className="text-center py-20">Not Found</h1>;

  return (
    <div>
      {/* HERO */}
      <div
        style={{
          backgroundImage: "url('/assets/hero_banner_new.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex py-32 md:py-48 justify-center px-6"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {data.name}
              </h1>
            </motion.div>

            {/* RIGHT */}
            <motion.div>
              <h2 className="text-2xl md:text-4xl mb-6 font-bold text-white">
                {data.heroTitle}
              </h2>

              <button className="bg-[#FF3366] text-white px-5 py-2 rounded-lg">
                {data.button}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECTION TEXT */}
      <div className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl text-center font-bold font-poppins text-black">
            {data.description}
          </h1>
        </div>
      </div>

      {/* 🔥 REUSABLE COMPONENT */}
      <ProductSection data={data} />
      <DemoForm/>
      <Insights/>
      <FAQ/>
      <Footer/>
      
    </div>
  );
};

export default Product;