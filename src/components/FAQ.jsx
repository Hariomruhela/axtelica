import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Axtelica?",
    answer:
      "Axtelica is a next-generation data and analytics company that helps businesses transform raw data into actionable insights using AI, cloud technologies, and advanced analytics solutions.",
  },
  {
    question: "What industries does Axtelica work with?",
    answer:
      "Axtelica works across multiple industries such as logistics, energy, and enterprise businesses—helping them solve data challenges, optimize operations, and improve decision-making.",
  },
  {
    question: "Does Axtelica provide custom solutions?",
    answer:
      "Absolutely. Axtelica designs tailored solutions based on each client’s business needs, ensuring scalability, efficiency, and measurable outcomes.",
  },
  {
    question: "How can I get started with Axtelica?",
    answer:
      "You can contact Axtelica through their website or request a consultation to discuss your requirements and get a customized solution roadmap.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      className="
        relative 
        py-12 sm:py-16 lg:py-24 
        bg-no-repeat 
        bg-left lg:bg-left 
        bg-contain 
      "
      style={{
        backgroundImage: "url('/assets/logo_bg_faq.jpg')",
      }}
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-[clamp(24px,6vw,48px)] text-black">
            Frequently Asked Questions
          </h1>
        </div>

        {/* ✅ GRID (Already correct mobile behavior) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start">
          
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-[clamp(20px,5vw,48px)] leading-tight text-black mb-4 sm:mb-6">
              Why Choose Axtelica for <br className="hidden lg:block" /> Smarter Insights?
            </h2>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Axtelica delivers AI-powered solutions designed to accelerate growth, enhance productivity, and optimize costs. Our expertise in
              analytics, cloud, and digital transformation helps businesses
              achieve sustainable success in the digital age.
            </p>
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-4 sm:space-y-5">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-t border-gray-300 pt-4 sm:pt-5 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  
                  <ChevronDown
                    size={20}
                    className={`mt-1 sm:mt-0 flex-shrink-0 transition-transform duration-300 ${
                      activeIndex === index
                        ? "rotate-180 text-purple-600"
                        : "text-black"
                    }`}
                  />

                  <h3 className="text-sm sm:text-base md:text-lg text-gray-900 leading-snug">
                    {item.question}
                  </h3>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-96 mt-3"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
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