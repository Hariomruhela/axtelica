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
      className=" max-h-[750px]  mx-auto bg-no-repeat bg-left mt-9 bg-cover md:bg-contain  py-24"
      style={{
        backgroundImage: "url('/assets/logo_bg_faq.jpg')",
      }}
    >
      <div className="max-w-[1650px] pl-4 mx-auto ">
         <div className="text-center">
        <h1 className="text-5xl font-bold font-poppins text-black mt-9 mb-10"> Frequntly asked questions  ?</h1>
      </div>
        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-16 ">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[36px] md:text-[72px] font-poppins leading-none pt-16 mt-10 mb-10 text-black">
              Why Axtelica for <br /> Smarter Insights?
            </h2>

            <p className="text-black max-w-[100%] text-[16px] md:text-[18px] font-poppins leading-snug">
              Axtelica delivers AI-powered solutions designed to boost customer
              growth, enhance productivity, and optimize costs..Our expertise in analytics, cloud, and digital
transformation helps businesses achieves us tainable successin the digital age.
            </p>
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-3 py-8 ">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-t border-gray-300 pt-4 pb-6 cursor-pointer group"
                onClick={() => toggle(index)}
              >
                <div className="relative -left-10   flex   items-center">
                   <ChevronDown
                    size={26}
                    className={`transition-all duration-300 ${
                      activeIndex === index
                        ? "rotate-180 text-purple-600"
                        : "text-black"
                    }`}
                  />
                  <h3 className="pl-5 text-[20px] md:text-[30px] font-poppins text-black group-hover:text-purple-600 transition">
                    {item.question}
                  </h3>

                 
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-40 mt-1" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-900 font-poppins text-sm md:text-base">
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