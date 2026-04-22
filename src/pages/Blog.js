import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import { blogData } from "../data/blogData";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const categories = ["All", "AI", "Automation", "Security"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // 🔹 Animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // 🔹 Filter Logic
  const filteredBlogs =
    activeCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === activeCategory);

  return (
    <div>
      {/* 🔥 HERO SECTION */}
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
          <h1 className="text-[clamp(28px,5vw,52px)] font-bold text-white text-center max-w-3xl leading-tight">
            AI Solutions Built for Real Business Impact
          </h1>
        </motion.div>
      </section>

      {/* 🔥 BLOG SECTION */}
      <section className="min-h-screen bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-10 text-center">
            Insights & Resources
          </h1>

          {/* 🔥 Tabs (Centered + Active State) */}
          <div className="flex justify-center gap-24 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-md border transition ${
                  activeCategory === cat
                    ? "bg-[#FF3366] text-white border-pink-500"
                    : "border-gray-400 text-gray-700 hover:bg-[#FF3366] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 🔥 Blog Grid with Animation */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </motion.div>

          {/* Optional Empty State */}
          {filteredBlogs.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No blogs found for this category.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;