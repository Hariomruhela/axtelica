import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "AI-Native from the Start",
    answer:
      "Our platform is built with AI at its core, ensuring intelligent automation and insights from day one.",
  },
  {
    question: "Autonomous by Design",
    answer:
      "Automation-first approach reduces manual work and improves efficiency across systems.",
  },
  {
    question: "Unified Across the Enterprise",
    answer:
      "Seamless integration across all departments and tools for better collaboration.",
  },
  {
    question: "Powerful Protection, Zero Complexity",
    answer:
      "Enterprise-grade security with simple and intuitive user experience.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      className="max-w-7xl h-full mx-auto bg-no-repeat bg-left bg-contain md:bg-contain  py-36"
      style={{
        backgroundImage: "url('/assets/FAQ_BG.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-14">
        
        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-1 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[36px] md:text-[72px] font-poppins leading-tight mb-6 text-black">
              Why Axtelica for <br /> Smarter Insights?
            </h2>

            <p className="text-black max-w-md text-[16px] md:text-[18px] font-['Myriad Pro']">
              Axtelica delivers AI-powered solutions designed to boost customer
              growth, enhance productivity, and optimize costs.
            </p>
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-5">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4 cursor-pointer group"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[20px] md:text-[30px] font-[Myriad Pro] text-black group-hover:text-purple-600 transition">
                    {item.question}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`transition-all duration-300 ${
                      activeIndex === index
                        ? "rotate-180 text-purple-600"
                        : "text-black"
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-900 text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;