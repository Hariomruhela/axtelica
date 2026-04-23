import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const DemoFooter = () => {
  return (
    <footer className="bg-[#e9e9e9] py-6 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
        
        {/* LEFT TEXT */}
        <div className="text-sm text-gray-700 space-y-1">
          <p>©2026 SentinelOne, All Rights Reserved.</p>
          <p className="cursor-pointer hover:underline">Privacy Notice</p>
          <p className="cursor-pointer hover:underline">Terms of Use</p>
        </div>

        {/* CENTER LOGO */}
        <div className="flex justify-center flex-1">
          <img
            src="/assets/chat_icon.png" // 👉 replace with your logo
            alt="logo"
            className="h-12 object-contain"
          />
        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="flex items-center gap-6 text-gray-700 text-lg">
          <FaXTwitter className="cursor-pointer hover:text-black transition" />
          <FaFacebookF className="cursor-pointer hover:text-black transition" />
          <FaLinkedinIn className="cursor-pointer hover:text-black transition" />
          <FaYoutube className="cursor-pointer hover:text-black transition" />
        </div>
      </div>
    </footer>
  );
};

export default DemoFooter;