import React, { useState } from "react";
import { ChevronRight, MoveRight, MoveLeft } from "lucide-react";

const insights = [
  {
    tag: "Datasheet",
    title: "Threat Detection & Response",
    image: "/assets/CS_01.png",
  },
  {
    tag: "Report",
    title: "Quarterly Treat Briefing 2026",
    image: "/assets/CS_01.png",
  },
  {
    tag: "Webinar",
    title: "Human Expertise and the Future",
    image: "/assets/CS_01.png",
  },
  {
    tag: "Blog",
    title: "AI Security Trends",
    image: "/assets/CS_01.png",
  },
  {
    tag: "Guide",
    title: "Cloud Protection Strategy",
    image: "/assets/CS_01.png",
  },
];

const Insights = () => {
  const [startIndex, setStartIndex] = useState(0);

  // ✅ Responsive visible count
  const visibleCount =
    typeof window !== "undefined" && window.innerWidth < 768
      ? 1
      : window.innerWidth < 1024
      ? 2
      : 3;

  const handleNext = () => {
    if (startIndex + visibleCount < insights.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleItems = insights.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <section className="bg-[#f5f5f5] h-full md:h-[500px] pb-10 md:pb-16">
      
      {/* Header */}
      <div className="bg-white w-full">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-5 pt-14">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins text-black">
            Insights
          </h2>

          <button className="border border-purple-400 text-sm sm:text-base md:text-lg font-medium text-black px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple-100 transition">
            Explore all insights <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="max-w-[1650px] mx-auto px-4 sm:px-6 mt-8">
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-poppins text-black mb-6">
          Latest articles
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              
              <img
                src={item.image}
                alt="insight"
                className=" object-cover rounded-md flex-shrink-0"
              />

              <div className="mt-2">
                <span className="text-[12px] lg:text-[12px] md:text-[11px] sm:text-xs bg-[#722bfe] text-white px-2 py-1 rounded-full">
                  {item.tag}
                </span>

                <h3 className="mt-2 px-2 text-[22px] max-w-[70%] font-poppins font-medium leading-tight text-black pt-2">
                  {item.title}
                </h3>

                <button className="text-sm sm:text-base font-medium text-gray-700 mt-2 hover:text-black flex items-center gap-1">
                  Read Report{" "}
                  <ChevronRight size={20} color={"#722bfe"} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center sm:justify-end gap-4 mt-8">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="p-3 rounded-full text-gray-700 hover:bg-gray-200 disabled:opacity-40"
          >
            <MoveLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= insights.length}
            className="p-3 rounded-full text-gray-700 hover:bg-gray-200 disabled:opacity-40"
          >
            <MoveRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Insights;