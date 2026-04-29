import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import { blogData } from "../data/blogData";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import WhitepapersSection from "../components/WhitepapersSection";

const categories = [
  "All",
  "DATA QUALITY",
  "DECISION INTELLIGENCE",
  "AI AGENTS",
  "AUTOMATION",
  "STRATEGY",
  "PLATFORMS",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
          py-12 sm:py-14 lg:py-16
          min-h-[300px] sm:min-h-[350px] lg:h-[450px]
          w-full overflow-hidden
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
          <h1 className="text-[clamp(22px,6vw,52px)] font-bold text-white text-center max-w-3xl leading-tight">
            AI Solutions Built for Real Business Impact
          </h1>
        </motion.div>
      </section>

      {/* 🔥 BLOG SECTION */}
      <section className="min-h-screen bg-white py-10 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h1 className="text-[clamp(22px,5vw,48px)] font-bold text-black mb-6 sm:mb-8 lg:mb-10 text-center">
            Insights & Resources
          </h1>

          {/* ✅ TABS */}
          <div className="w-full overflow-x-auto no-scrollbar mb-6 sm:mb-8 py-2">
            <div className="flex sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-4 px-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    whitespace-nowrap
                    px-3 py-1.5 sm:px-5 sm:py-2
                    text-xs sm:text-sm md:text-base
                    rounded-md border transition
                    ${
                      activeCategory === cat
                        ? "bg-[#FF3366] text-white border-pink-500"
                        : "border-gray-400 text-gray-700 hover:bg-[#FF3366] hover:text-white"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 🔥 Blog Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          >
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <p className="text-center text-gray-500 mt-8 sm:mt-10">
              No blogs found for this category.
            </p>
          )}
        </div>

        {/* Whitepapers */}
        <div className="mt-10 sm:mt-14 lg:mt-16">
          <WhitepapersSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;