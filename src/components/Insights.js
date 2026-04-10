import React, { useState } from "react";
import { ChevronRight,  MoveRight, MoveLeft } from "lucide-react";

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
  const visibleCount = 3;

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
    <section className="relative top-20 h-[500px]  bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-white w-full">
        <div className="max-w-[1650px] pl-4 mx-auto flex justify-between items-center mb-10 py-5">
          <h2 className="text-[48px] font-poppins text-black">
            Insights
          </h2>

          <button className="border border-purple-400 text-[24px] font-poppins font-medium text-black px-5 py-2 rounded-full flex items-center gap-2 hover:bg-purple-100 transition">
            Explore all insights <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="pb-12 max-w-[1650px] pl-4 mx-auto">
        <h2 className="text-[30px] font-semibold font-poppins text-black mb-6">
          Latest articles
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {visibleItems.map((item, index) => (
            <div key={index} className="flex gap-5 items-start">
              <img
                src={item.image}
                alt="insight"
                className="object-cover rounded-md"
              />

              <div className="mt-2">
                <span className="text-[12px] font-poppins bg-[#722bfe] text-white px-3 py-1 rounded-full">
                  {item.tag}
                </span>

                <h3 className="mt-2 px-2 text-[22px] max-w-[60%] font-poppins font-medium leading-tight text-black pt-4">
                  {item.title}
                </h3>

                <button className="text-[16px] font-poppins font-medium text-gray-700 mb-2 mt-3 px-2 hover:text-black hover:bg-gray-200 rounded-full flex items-center gap-1">
                  Read Report{" "}
                  <ChevronRight size={24} color={"#722bfe"} />
                </button>
              </div>
            </div>
          ))}
        </div>

       <div className="absolute max-w-7xl mx-32 flex right-52 justify-end gap-6 mt-20 text-black">
  <button
    onClick={handlePrev}
    disabled={startIndex === 0}
    className="p-3 rounded-full  text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed"
  >
    <MoveLeft size={28} />
  </button>

  <button
    onClick={handleNext}
    disabled={startIndex + visibleCount >= insights.length}
    className="p-3 rounded-full  text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed"
  >
    <MoveRight size={28} />
  </button>
</div>
      </div>
    </section>
  );
};

export default Insights;