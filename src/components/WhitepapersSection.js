import React from "react";
import { Whitepapers } from "../data/blogData";
import WhitepaperCard from "./WhitepaperCard";

const WhitepapersSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16  ">
      
      <div className="">
        
        {/* Heading */}
        <h2 className="text-3xl  text-gray-900 mb-10">
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