import React from "react";

const DemoForm = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Experience Axtelica <br /> Firsthand
          </h1>

          <p className="text-gray-600 mb-6 text-lg">
            Request a demo with a Axtelica AI product expert to see how you can:
          </p>

          <ul className="space-y-4 text-gray-700">
            {[
              "Connect data from multiple sources",
              "Ingest batch and real-time data",
              "Improve data quality and trust",
              "Detect anomalies and operational risks",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400 text-sm">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* First Name */}
            <div>
              <label className="text-sm text-gray-600">First Name*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-sm text-gray-600">Last Name*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Company */}
            <div>
              <label className="text-sm text-gray-600">Company*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Business Email*</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-600">Phone*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            {/* Employees */}
            <div>
              <label className="text-sm text-gray-600">Employees*</label>
              <select className="w-full border border-gray-300 text-gray-900 rounded-md p-2 mt-1">
                <option>Select...</option>
                <option>1-10</option>
                <option>10-50</option>
                <option>50+</option>
              </select>
            </div>

            {/* Country */}
            <div className="md:col-span-2">
              <label className="text-sm text-gray-900">Country*</label>
              <select className="w-full border border-gray-300 text-gray-900 rounded-md p-2 mt-1">
                <option>Select...</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>

            {/* Button */}
            <div className="md:col-span-2  mt-4">
              <button
                type="submit"
                className="px-6 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full text-lg font-medium transition"
              >
                Get a Demo
              </button>
            </div>

            {/* Footer text */}
            <p className="md:col-span-2 text-sm font-poppins text-gray-500 mt-2 leading-relaxed">
              By clicking Request a Demo, I agree to the use of my personal data
              in accordance with Axtelica Privacy Notice. This site is protected
              by reCAPTCHA and the Privacy Policy and Terms of Service apply.
            </p>

          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;