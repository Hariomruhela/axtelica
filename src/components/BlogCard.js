import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      
      {/* Image */}
      {/* <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />
      </div> */}

      {/* Content */}
      <div className="p-5 space-y-3">
        
        {/* Category + Date */}
        <div className="flex justify-between text-lg text-gray-400">
          <span className="text-pink-400 ">
            {blog.category}
          </span>
          <span>{blog.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-black text-2xl font-poppins  leading-snug  transition">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-lg font-poppins">
          {blog.description}
        </p>

        {/* CTA */}
        <button
        onClick={() => navigate(`/blog/${blog.id}`)}
         className="text-pink-400 font-medium hover:underline">
          Read More →
        </button>
      </div>
    </div>
  );
};
export default BlogCard;