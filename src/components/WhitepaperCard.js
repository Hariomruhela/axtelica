import React from "react";

const WhitepaperCard = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition duration-300">
      
      {/* Title */}
      <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-3">
        {item.title}
      </h3>

      {/* Description */}
      <p className="body text-gray-700 mb-4 leading-relaxed">
        {item.desc}
      </p>

      {/* Meta */}
      {item.meta && (
        <p className="text-sm text-gray-500 tracking-wide">
          {item.meta}
        </p>
      )}

      <button
        // onClick={() => navigate(`/blog/${blog.id}`)}
         className="text-pink-400 font-medium hover:underline mt-4">
          Read More →
        </button>

      
    </div>
  );
};

export default WhitepaperCard;