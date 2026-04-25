import React from "react";
import { motion } from "framer-motion";
import DemoFooter from "./DemoFooter";
import { Link } from "react-router-dom";

const DemoLanding = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center text-white relative overflow-hidden px-4"
        style={{
          backgroundImage: "url('/assets/book_demo_pagebg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Background Icon */}
        <div className="hidden md:block absolute right-10 bottom-10 opacity-10">
          <img
            src="/assets/chat_icon.png"
            alt="bg-icon"
            className="h-[200px] lg:h-[350px] object-contain"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 md:py-24">
          
          {/* 🔹 LEFT FORM */}
          <div className="bg-white text-black p-6 md:p-8 rounded-xl shadow-xl w-full">
            
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              
              {[
                "First Name*",
                "Last Name*",
                "Company*",
                "Business Email*",
                "Phone*",
                "Employees*",
              ].map((label, i) => (
                <div key={i} className="w-full">
                  <label className="text-sm md:text-base text-gray-600">
                    {label}
                  </label>
                  <input className="w-full border border-gray-300 mt-1 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
              ))}

              {/* Country */}
              <div className="col-span-1 sm:col-span-2">
                <label className="text-sm md:text-base text-gray-600">
                  Country*
                </label>
                <input className="w-full border border-gray-300 mt-1 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </div>

              {/* Button */}
              <div className="col-span-1 sm:col-span-2 mt-4">
                <button className="w-full bg-[#FF3366] hover:bg-pink-600 text-white py-3 rounded-full font-semibold transition">
                  Get a Demo
                </button>
              </div>

              {/* Footer */}
              <p className="col-span-1 sm:col-span-2 text-xs md:text-sm text-gray-500 mt-2 leading-relaxed">
                By clicking Request a Demo, I agree to the use of my personal
                data in accordance with Axtelica Privacy Notice. Axtelica will
                not sell or rent your data. This site is protected by reCAPTCHA.
              </p>
            </form>
          </div>

          {/* 🔹 RIGHT CONTENT */}
          <div className="flex flex-col justify-center text-center lg:text-left lg:pl-10">
            
            {/* Logo */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <Link to="/">
                <img
                  src="/assets/Logo_header_white.png"
                  alt="logo"
                  className="h-10 md:h-12"
                />
              </Link>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
              AI Security Built for <br /> Speed and Scale
            </h1>

            {/* Paragraph */}
            <p className="mb-6 text-base md:text-lg text-gray-200">
              Request a demo with Axtelica AI product expert to see how you can:
            </p>

            {/* Points */}
            <ul className="space-y-3 text-sm md:text-base">
              {[
                "Connect data from multiple sources",
                "Ingest batch and real-time data",
                "Improve data quality and trust",
                "Detect anomalies and operational risks",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 justify-center lg:justify-start">
                  <span className="text-green-400">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      <DemoFooter />
    </>
  );
};

export default DemoLanding;