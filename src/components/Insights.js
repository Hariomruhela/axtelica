import React from "react";
import { ArrowRight } from "lucide-react";

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
];

const Insights = () => {
  return (
    <section className="relative top-20  bg-[#f5f5f5]   ">
      {/* Header */}
      <div className="relative  bg-white w-full ">
      <div className="max-w-7xl mx-auto flex justify-between  items-center mb-10 py-5 ">
        <h2 className="text-[48px] font-poppins text-black ">Insights</h2>

        <button className="border border-purple-400 text-[24px] font-poppins font-medium text-black px-5 py-2 rounded-full flex items-center gap-2 hover:bg-purple-100 transition">
          Explore all insights <ArrowRight size={16} />
        </button>
      </div></div>
<div className=" pb-12  max-w-7xl mx-auto   ">
    <h2 className=" text-[30px] font-semibold font-poppins text-black  mb-6">Latest articles</h2>
      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-5 ">
        {insights.map((item, index) => (
          <div key={index} className="flex gap-2 items-start">
            <img
              src={item.image}
              alt="insight"
              className="  object-cover rounded-md"
            />

            <div className="mt-2 ">
              <span className="text-[12px] font-poppins regural   bg-purple-700 text-white px-3 py-1 rounded-full">
                {item.tag}
              </span>

              <h3 className="mt-2 px-2 text-[24px] font-poppins  font-medium  leading-snug text-black pt-4">
                {item.title}
              </h3>

              <button className="text-[16px] font-poppins font-medium  text-black mb-2 mt-3 px-2 hover:text-black hover:bg-gray-200 rounded-full flex items-center gap-1">
                Read Report <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Insights;