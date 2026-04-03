import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  // ✅ Navbar item (TOP MENU)
  const navItem =
    "relative px-0 py-2 text-[#1f2937] font-medium text-[20px] font-Poppins flex items-center gap-1 cursor-pointer hover:text-cyan-500 transition";

  // ✅ Dropdown container
  const dropdownMenu =
  "absolute left-0 top-full mt-3 w-max min-w-[220px] bg-white rounded-xl shadow-lg p-4 border border-gray-200 z-[999]";
  // ✅ Dropdown item (INSIDE MENU)
  const dropdownItem =
    "px-2 py-2 text-[#1f2937] font-medium text-[20px] font-Poppins hover:bg-gray-100 hover:text-cyan-500 rounded-md transition cursor-pointer";

  const dropdownItems = {
    services: [
      "Data & Analytics",
      "AI & Machine Learning",
      "Cloud Solutions",
      "Agile & DevOps",
    ],
    ai: ["Infinisight", "Optimaorbit", "Axtream"],
    industries: [
      "Finance",
      "Retail",
      "Healthcare",
      "Manufacturing & more",
    ],
    case: ["Success Stories", "Client Projects"],
  };

  return (
    <div className="w-full mt-1 relative z-50">
      {/* Wrapper */}
      <div className="px-[1px] bg-white w-full">
        
        {/* Navbar */}
        <div className="flex items-center justify-between pr-6 md:pr-16 py-4 relative">
          
          {/* Logo */}
          <div className="max-w-7xl mx-auto pr-6">
            <img src="/Axt_logo.jpg" alt="logo" className="h-full" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 relative">
            
            <div className={navItem}>Company</div>

            {Object.keys(dropdownItems).map((key) => (
              <div
                key={key}
                className={navItem}
                onMouseEnter={() => setHovered(key)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Title */}
                {key === "ai"
                  ? "AI Innovation Hub"
                  : key === "case"
                  ? "Case Studies"
                  : key.charAt(0).toUpperCase() + key.slice(1)}

                <ChevronDown size={16} />

                {/* Dropdown */}
                <AnimatePresence>
                  {hovered === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={dropdownMenu}
                    >
                      <div className="grid grid-cols-2 gap-1 w-[100%]">
                        {dropdownItems[key].map((item, i) => (
                          <div key={i} className={dropdownItem}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className={navItem}>Insights</div>

            {/* Button */}
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[16px] Font-['Franklin Gothic Book
'] px-5 py-2 rounded-full shadow-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300">
              Book Demo
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden text-black z-50">
            {mobileOpen ? (
              <X onClick={() => setMobileOpen(false)} />
            ) : (
              <Menu onClick={() => setMobileOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full px-4 md:hidden z-[999]"
          >
            <div className="bg-white text-black rounded-xl p-5 space-y-4 shadow-2xl">
              
              <div className="font-medium">Home</div>
              <div className="font-medium">About Us</div>

              {Object.keys(dropdownItems).map((key) => (
                <div key={key}>
                  <div className="font-semibold mb-1">
                    {key === "ai"
                      ? "AI Innovation Hub"
                      : key === "case"
                      ? "Case Studies"
                      : key.charAt(0).toUpperCase() + key.slice(1)}
                  </div>

                  <div className="ml-3 space-y-1 text-sm text-gray-600">
                    {dropdownItems[key].map((item, i) => (
                      <div key={i} className="hover:text-cyan-500 cursor-pointer">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="font-medium">Insights</div>
              <div className="font-medium">Contact</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;