import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../data/blogData";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "./Footer";
import { motion } from "framer-motion";

const BlogDetail = () => {
    // 🔹 Animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <div className="p-10 text-center">Blog not found</div>;
  }

  // 🔥 Back handler
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // go to previous page
    } else {
      navigate("/blog"); // fallback
    }
  };

  return (
    <div>
        <section
   className="
    relative flex items-center justify-center
    py-12 sm:py-12 lg:py-16
    h-[350px] w-full overflow-hidden

    bg-[linear-gradient(-45deg,#101030,#0F1242,#2558BA,#306BCA)]
    bg-[length:400%_400%]
    animate-gradientFlow
  "
>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 flex justify-center"
        >
          <h1 className="text-[clamp(28px,5vw,52px)]  text-white text-center max-w-3xl leading-tight">
            AI Solutions Built for Real Business Impact
          </h1>
        </motion.div>
      </section>
    <section className="min-h-screen bg-white py-3 px-6 text-black">
      <div className="max-w-7xl mx-auto">

        {/* 🔙 Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6 transition"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Category + Date */}
        <p className="text-gray-700 mb-3">
          {blog.category} • {blog.date}
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl  mb-6">
          {blog.title}
        </h1>

        {/* Image
        <img
          src={blog.image}
          alt={blog.title}
          className="w-[80%]  h-[400px] rounded-xl mb-8"
        /> */}

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          {blog.description}
        </p>

        {/* Content */}
        <div className="text-gray-800  leading-relaxed space-y-4">
          {/* Title */}
        <h1 className="text-xl md:text-2xl font-poppins mb-3">
          {blog.heading1}
        </h1>
        <p className="text-gray-700 text-lg font-poppins leading-relaxed mb-10">
          {blog.desc1}
        </p>
         <h1 className="text-xl md:text-2xl font-poppins mb-3">
          {blog.heading2}
        </h1>
        <p className="text-gray-700 text-lg font-poppins leading-relaxed mb-10">
          {blog.desc2}
        </p>
         <h1 className="text-xl md:text-2xl font-poppins mb-3">
          {blog.heading3}
        </h1>
        <p className="text-gray-700 text-lg font-poppins leading-relaxed mb-10">
          {blog.desc3}
        </p>
         <h1 className="text-xl md:text-2xl font-poppins mb-3">
          {blog.heading4}
        </h1>
        <p className="text-gray-700 text-lg font-poppins leading-relaxed mb-10">
          {blog.desc4}
        </p>
         <h1 className="text-xl md:text-2xl font-poppins mb-3">
          {blog.heading5}
        </h1>
        <p className="text-gray-700 text-lg font-poppins leading-relaxed mb-6">
          {blog.desc5}
        </p>

        </div>

      </div>
    
    </section>
    <Footer/>
    </div>
  );
};

export default BlogDetail;