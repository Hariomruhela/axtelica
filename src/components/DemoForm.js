import React from "react";

const DemoForm = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h1 className="text-[clamp(28px,5vw,48px)] font-poppins font-bold text-gray-900 mb-6 leading-tight">
            Experience Axtelica <br /> Firsthand
          </h1>

          <p className="text-gray-700 mb-6 text-xl font-poppins md:text-xl">
            Request a demo with an Axtelica AI product expert to see how you can:
          </p>

          <ul className="space-y-4 text-gray-700 text-lg font-poppins">
            {[
              "Connect data from multiple sources",
              "Ingest batch and real-time data",
              "Improve data quality and trust",
              "Detect anomalies and operational risks",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400 text-lg mt-1">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* INPUT STYLE */}
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

            {/* Employees */}
            <div>
              <label className="block text-lg font-poppins text-gray-600 mb-1">
                Employees*
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-3 text-lg font-poppins">
                <option>Select...</option>
                <option>1-10</option>
                <option>10-50</option>
                <option>50+</option>
              </select>
            </div>

            {/* Country */}
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

            {/* Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-poppins font-medium transition-all duration-300 hover:scale-105"
              >
                Get a Demo
              </button>
            </div>

            {/* Footer text */}
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