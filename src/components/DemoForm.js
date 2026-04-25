import React from "react";

const DemoForm = ({
  title = "Ready to unlock the power of your data?",
  description = "Request a demo with an Axtelica AI product expert to see how you can:",
  points = [],
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-8 sm:px-6 lg:px-10 bg-white">
      
      <div className="max-w-[1400px] px-10 mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT CONTENT (Dynamic) */}
        <div className="max-w-xl">
          <h1 className="text-[clamp(28px,5vw,48px)] font-poppins font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-gray-700 mb-6 text-xl font-poppins">
            {description}
          </p>

          <ul className="space-y-4 text-gray-700 text-lg font-poppins">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400 text-lg mt-1">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT FORM (Same as before) */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {[
              { label: "First Name*", type: "text" },
              { label: "Last Name*", type: "text" },
              { label: "Company*", type: "text" },
              { label: "Business Email*", type: "email" },
              { label: "Phone*", type: "text" },
            ].map((field, i) => (
              <div key={i}>
                <label className="block text-lg font-poppins text-gray-600 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className="w-full border border-gray-300 rounded-md px-3 py-3 text-lg font-poppins focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            ))}

            <div>
              <label className="block text-lg font-poppins text-gray-600 mb-1">
                Employees*
              </label>
              <select className="w-full border border-gray-300 text-gray-500 rounded-md px-3 py-3 text-lg font-poppins">
                <option>Select...</option>
                <option>1-10</option>
                <option>10-50</option>
                <option>50+</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-lg font-poppins text-gray-600 mb-1">
                Country*
              </label>
              <select className="w-full border text-gray-500 border-gray-300 rounded-md px-3 py-3 font-poppins text-lg">
                <option>Select...</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-[#FF3366] text-white px-7 py-3 rounded-md text-lg font-poppins hover:bg-pink-600 hover:scale-105 transition"
              >
                Get a Demo
              </button>
            </div>

            <p className="md:col-span-2 text-lg font-poppins text-gray-500 leading-relaxed">
              By clicking Request a Demo, you agree to our Privacy Policy and Terms.
            </p>

          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;