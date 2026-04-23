import React from "react";
import { Whitepapers } from "../data/blogData";
import WhitepaperCard from "./WhitepaperCard";

const WhitepapersSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Whitepapers
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Whitepapers.map((item, i) => (
            <WhitepaperCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhitepapersSection;