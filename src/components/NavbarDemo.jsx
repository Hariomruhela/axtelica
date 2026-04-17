import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const NavbarDemo = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState(null);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef(null);

  // ✅ FIXED SCROLL LOGIC
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(true); // 👈 hide on scroll down
      } else {
        setShowNavbar(true); // 👈 show on scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ CLEAN NAV ITEM
  const navItem = `
    relative flex items-center gap-1 cursor-pointer
    text-sm lg:text-base font-medium transition-colors duration-300
    ${
      scrolled
        ? "text-gray-800 hover:text-cyan-500"
        : "text-white hover:text-cyan-300"
    }
  `;

  const dropdownItems = {
    solution: {
      title: "SERVICES",
      columns: [
        [{ name: "Data & Analytics" }, { name: "AI & Machine Learning" }],
        [{ name: "Cloud Solutions" }, { name: "Agile & DevOps" }],
      ],
    },
    ai: {
      title: "AI INNOVATION HUB",
      columns: [
        [{ name: "Axtream", path: "/product/axtream" },
          { name: "Infinisight", path: "/product/infinisight" },
          { name: "Intelligent Business Agents", path: "/product/optimaorbit" },
        ],
        
      ],
    },
    industries: {
      title: "INDUSTRIES",
      columns: [
        [{ name: "Finance" }, { name: "Retail" }],
        [{ name: "Healthcare" }, { name: "Manufacturing" }],
      ],
    },
    case: {
      title: "CASE STUDIES",
      columns: [[{ name: "Success Stories" }], [{ name: "Client Projects" }]],
    },
  };

  const handleEnter = (key) => {
    clearTimeout(timeoutRef.current);
    setHovered(key);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(null), 150);
  };

  return (
    <motion.div
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.3 }}
      className={`fixed  left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent  top-3 lg:top-4"
      }`}
    >
      {/* NAVBAR */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 min-h-[70px] flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/">
          <img
            src={
              scrolled
                ? "/assets/Logo_header.png"
                : "/assets/Logo_header_white.png"
            }
            alt="logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link to="/about">
            <div className={navItem}>Company</div>
          </Link>

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

          <button className="bg-[#FF3366] text-white px-5 py-2 rounded-lg text-sm lg:text-base hover:scale-105 transition">
            Request a Demo
          </button>
        </div>

        {/* MOBILE ICON */}
        <div className="lg:hidden">
          {mobileOpen ? (
            <X size={28} onClick={() => setMobileOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setMobileOpen(true)} />
          )}
        </div>
      </div>

      {/* MEGA MENU */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            onMouseEnter={() => handleEnter(hovered)}
            onMouseLeave={handleLeave}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 top-full w-full px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-5xl mx-auto bg-[#242938] text-white rounded-2xl shadow-2xl border border-white/10">
              <div className="p-6 md:p-10 flex flex-col md:flex-row gap-10">
                
                <div className="flex-1">
                  <p className="text-gray-400 text-xs mb-6 tracking-widest">
                    {dropdownItems[hovered].title}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {dropdownItems[hovered].columns.map((col, i) => (
                      <div key={i} className="space-y-4">
                        {col.map((item, j) => (
                          <div
                            key={j}
                            onClick={() =>
                              item.path && navigate(item.path)
                            }
                            className="text-lg hover:text-cyan-400 cursor-pointer"
                          >
                            {item.name}
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
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-[#242938] z-50 p-6 overflow-y-auto"
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
                          : key.charAt(0).toUpperCase() +
                            key.slice(1)}
                      </span>

                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          activeMobile === key
                            ? "rotate-180 text-cyan-400"
                            : ""
                        }`}
                      />
                    </div>

                    {activeMobile === key && (
                      <div className="ml-3 mt-3 space-y-2 text-gray-300">
                        {dropdownItems[key].columns
                          .flat()
                          .map((item, i) => (
                            <div
                              key={i}
                              className="hover:text-cyan-400 cursor-pointer"
                            >
                              {item.name}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="text-lg font-medium">Insights</div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-full">
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