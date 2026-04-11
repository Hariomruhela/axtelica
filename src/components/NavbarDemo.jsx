import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarDemo = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState(null);
  const [hovered, setHovered] = useState(null);

  // ✅ NEW: scroll behavior
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  // 🔥 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      

        // 👇 background change logic
    if (currentScrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
      // prevent flicker
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(true); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Navbar item
  const navItem =
    `px-0 py-2 text-[#1f2937] font-medium sm:font-semibold  sm:text-[10px] md:text[16px] lg:text-[18px] xl:text-[20px] font-Poppins flex items-center sm:gap-4 md:gap-2 lg-gap-3  cursor-pointer hover:text-cyan-500 transition  ${
  scrolled
    ? "text-[#1f2937] hover:text-cyan-500"
    : "text-white hover:text-cyan-300"
}`;

  // 🔥 MENU DATA
  const dropdownItems = {
    services: {
      title: "SERVICES",
      columns: [
        ["Data & Analytics", "AI & Machine Learning"],
        ["Cloud Solutions", "Agile & DevOps"],
      ],
    },
    ai: {
      title: "AI INNOVATION HUB",
      columns: [["Infinisight", "Optimaorbit"], ["Axtream"]],
    },
    industries: {
      title: "INDUSTRIES",
      columns: [
        ["Finance", "Retail"],
        ["Healthcare", "Manufacturing"],
      ],
    },
    case: {
      title: "CASE STUDIES",
      columns: [["Success Stories"], ["Client Projects"]],
    },
  };

  // ✅ hover handlers
  const handleEnter = (key) => {
    clearTimeout(timeoutRef.current);
    setHovered(key);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(null), 150);
  };

  return (
    <motion.div
      initial={{ y: 0 }}
       animate={{ y: showNavbar ? 0 : -200 }}
       transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed  left-0 w-full sm:w-[100%] z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-md top-0 h-32 py-6"
          : "bg-transparent top-10"
      }
}`}
    >
      {/* NAVBAR */}
      <div className=" max-w-[1650px] mx-auto flex justify-items-end justify-between pl-4 md:pl-2  py-3">
        {/* LOGO */}
        {scrolled?(<img src="/assets/Logo_header.png" alt="logo" className="object-contain" />):(<img src="/assets/Logo_header_white.png" alt="logo" className="object-contain" />)}
        

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-9 md:gap-8 sm:gap-4  ">
          <div className={navItem}>Company</div>

          {Object.keys(dropdownItems).map((key) => (
            <div
              key={key}
              className={navItem}
              onMouseEnter={() => handleEnter(key)}
              onMouseLeave={handleLeave}
            >
              {key === "ai"
                ? "AI Innovation Hub"
                : key === "case"
                ? "Case Studies"
                : key.charAt(0).toUpperCase() + key.slice(1)}
              <ChevronDown size={16} />
            </div>
          ))}

          <div className={navItem}>Insights</div>

          <button className="bg-[#FF3366] text-white px-5 py-2 rounded-lg sm:text-[10px] sm:px-1 md:px-5  md:text-[18px] font-poppins hover:scale-105 transition">
            Request a Demo
          </button>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden text-black">
          {mobileOpen ? (
            <X size={28} onClick={() => setMobileOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setMobileOpen(true)} />
          )}
        </div>
      </div>

      {/* 🔥 MEGA MENU */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            onMouseEnter={() => handleEnter(hovered)}
            onMouseLeave={handleLeave}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute left-1/4 -translate-x-1/2 top-full mt-4 w-[90%] max-w-5xl mx-auto bg-[#242938] text-white rounded-2xl shadow-2xl border border-white/10 z-40"
          >
            <div className="px-6 md:px-10 py-8 flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <p className="text-gray-400 text-xs mb-6 tracking-widest">
                  {dropdownItems[hovered].title}
                </p>

                <div className="grid grid-cols-2 gap-6 md:gap-x-16">
                  {dropdownItems[hovered].columns.map((col, i) => (
                    <div key={i} className="space-y-4">
                      {col.map((item, j) => (
                        <div
                          key={j}
                          className="flex items-center text-[18px] hover:text-cyan-400 cursor-pointer"
                        >
                          <span className="text-cyan-400 mr-3">::</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-[260px] bg-white/5 rounded-xl p-6 text-center border border-white/10">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-5 py-2 rounded-full">
                  Get Started
                </button>
                <div className="mt-4 h-24 bg-white/10 rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 w-[80%] max-w-sm bg-[#242938] z-50 p-6 overflow-y-auto"
            >
              <div className="space-y-6 text-white">
                <div className="text-lg font-medium">Company</div>

                {Object.keys(dropdownItems).map((key) => (
                  <div key={key}>
                    <div
                      onClick={() =>
                        setActiveMobile(
                          activeMobile === key ? null : key
                        )
                      }
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <span className="font-semibold">
                        {key === "ai"
                          ? "AI Innovation Hub"
                          : key === "case"
                          ? "Case Studies"
                          : key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>

                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          activeMobile === key
                            ? "rotate-180 text-cyan-400"
                            : ""
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {activeMobile === key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-3 mt-3 space-y-2 text-gray-300 overflow-hidden"
                        >
                          {dropdownItems[key].columns
                            .flat()
                            .map((item, i) => (
                              <div
                                key={i}
                                className="hover:text-cyan-400 cursor-pointer"
                              >
                                {item}
                              </div>
                            ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="text-lg font-medium">Insights</div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-full">
                  Book Demo
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavbarDemo;