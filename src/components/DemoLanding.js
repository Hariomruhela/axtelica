import React from "react";
import DemoFooter from "./DemoFooter";
import { Link } from "react-router-dom";

const DemoLanding = () => {
  return (<>
    <section className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#1a0f3c,#0b0f3a,#0b1f5c)] text-white relative overflow-hidden"
    style={{ backgroundImage: "url('/assets/book_demo_pagebg.jpg')", backgroundSize: "cover", }}>
      
      {/* Background Logo (optional) */}
      <div className="absolute right-40 bottom-10 opacity-10 text-[200px] font-bold">
        <img
            src="/assets/chat_icon.png" // 👉 replace with your logo
            alt="logo"
            className="h-[400px] object-contain"
          />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-24  ">
        
        {/* LEFT FORM */}
        <div className="bg-white text-black p-8 rounded-md shadow-lg">
          
          <form className="grid grid-cols-2 gap-6">
            
            {[
              "First Name*",
              "Last Name*",
              "Company*",
              "Business Email*",
              "Phone*",
              "Employees*",
            ].map((label, i) => (
              <div key={i} className={label === "Country*" ? "col-span-2" : ""}>
                <label className="text-lg font-poppins text-gray-600">{label}</label>
                <input className="w-full border border-gray-400 mt-1 p-2 text-sm" />
              </div>
            ))}

            {/* Country */}
            <div className="col-span-2">
              <label className="text-lg font-poppins     text-gray-600">Country*</label>
              <input className="w-full border border-gray-400 mt-1 p-2 text-sm" />
            </div>

            {/* Button */}
            <div className="col-span-2 mt-4">
              <button className=" body w-full px-4 bg-[#FF3366] hover:bg-pink-600 text-white py-3 rounded-full font-semibold">
                Get a Demo
              </button>
            </div>

            {/* Footer */}
            <p className="col-span-2 text-sm font-poppins text-gray-500 mt-2">
              By clicking Request a Demo, I agree to the use of my  personal data in accordance with Axtelica Privacy Notice. Axtelica will not sell, trade,lease,or rent your personal data to third parties.This site is protected by reCAPTCHA and Privacy Policy and Terms of Service apply.
            </p>
          </form>
        </div>

        {/* RIGHT CONTENT */}
        <div className=" md:ml-32">
            
        <div className="mb-6" >
            <Link to="/">
        <img src="assets/Logo_header_white.png" alt="axtelica"/></Link></div>
        
          <h1 className=" text-4xl md:text-5xl font-poppins leading-tight mb-6">
            AI Security Built for <br /> Speed and Scale
          </h1>

          <p className="body mb-6">
            Request a demo with  Axtelica AI product expert to see how you can:
          </p>

          <ul className="space-y-3">
            {[
              "Connect data from multiple sources",
              "Ingest batch and real-time data",
              "Improve data quality and trust",
              "Detect anomalies and operational risks",
            ].map((item, i) => (
              <li key={i} className=" body flex items-start gap-3">
                <span>✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </section>
    <DemoFooter/></>
  );
};

export default DemoLanding;