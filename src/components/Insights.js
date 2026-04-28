import React, { useState, useEffect } from "react";
import { ChevronRight, MoveRight, MoveLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const insights = [
  {
    tag: "DATA QUALITY",
    title: "Why Your AI Models Are Only as Good as Your Data Pipeline.",
    image: "/assets/CS_01.png",
    path: "/blog/1",
  },
  {
    tag: "DECISION INTELLIGENCE",
    title: "From Dashboards to Decisions: The Next Step in Business Intelligence",
    image: "/assets/CS_01.png",
    path: "/blog/2",
  },
  {
    tag: "AI AGENTS",
    title: "Beyond Chatbots: What Intelligent Business Agents Actually Do",
    image: "/assets/CS_01.png",
    path: "/blog/3",
  },
  {
    tag: "AUTOMATION",
    title: "The Hidden Cost of Manual Workflows in Enterprise Operations",
    image: "/assets/CS_01.png",
    path: "/blog/4",
  },
  {
    tag: "STRATEGY",
    title: "Why Most AI Proof-of-Concepts Fail to Reach Production",
    image: "/assets/CS_01.png",
    path: "/blog/5",
  },
];

const Insights = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const handleNext = () => {
    if (startIndex + visibleCount < insights.length) {
      setDirection(1);
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleItems = insights.slice(
    startIndex,
    startIndex + visibleCount
  );

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section className="bg-[#f5f5f5] pb-8 sm:pb-12 lg:pb-16">
      
      {/* Header */}
      <div className="bg-white w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 py-4 sm:py-6">
          
          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-black">
            Insights
          </h2>

          <button
            onClick={() => navigate("/blog")}
            className="border border-purple-400 text-xs sm:text-base text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 hover:bg-purple-100 transition"
          >
            Explore all insights <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
        
        <h3 className="text-lg sm:text-2xl font-semibold text-black mb-4 sm:mb-8">
          Latest articles
        </h3>

        {/* Cards */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={startIndex}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            >
              {visibleItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start p-3 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt="insight"
                    className="w-full sm:w-[50%] h-[160px] sm:h-full object-cover rounded-lg"
                  />

                  {/* Content */}
                  <div className="flex flex-col justify-between h-full w-full">
                    
                    <span className="text-[10px] sm:text-sm bg-[#722bfe] text-white px-2 py-1 rounded-full w-fit">
                      {item.tag}
                    </span>

                    <h3 className="mt-2 sm:mt-3 text-sm sm:text-[16px] font-poppins text-black leading-snug">
                      {item.title}
                    </h3>

                    <Link to={item.path}>
                      <button className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3 hover:text-black flex items-center gap-1 transition">
                        Read Report <ChevronRight size={16} color="#722bfe" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center sm:justify-end gap-3 sm:gap-4 mt-6 sm:mt-10">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="p-2 sm:p-3 rounded-full bg-white text-black shadow hover:bg-gray-100 disabled:opacity-40"
          >
            <MoveLeft size={18} />
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= insights.length}
            className="p-2 sm:p-3 rounded-full bg-white text-black shadow hover:bg-gray-100 disabled:opacity-40"
          >
            <MoveRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Insights;