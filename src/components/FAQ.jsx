import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Axtelica?",
    answer:
      "Axtelica is a next-generation data and analytics company that helps businesses transform raw data into actionable insights using AI, cloud technologies, and advanced analytics solutions. ",
  },
  {
    question: "What industries does Axtelica work with?",
    answer:
      "Axtelica works across multiple industries such as logistics, energy, and enterprise businesses—helping them solve data challenges, optimize operations, and improve decision-making. ",
  },
  {
    question: "What is CatalystCraft?",
    answer:
      "CatalystCraft is Axtelica’s proprietary solution accelerator toolkit that helps organizations quickly deploy data solutions, improve data quality, and gain insights faster. ",
  },
  {
    question: "Does Axtelica provide custom solutions?",
    answer:
      "Absolutely. Axtelica designs tailored solutions based on each client’s business needs, ensuring scalability, efficiency, and measurable outcomes. ",
  },
   {
    question: "How can I get started with Axtelica?",
    answer:
      "You can contact Axtelica through their website or request a consultation to discuss your requirements and get a customized solution roadmap. , and measurable outcomes. ",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-no-repeat bg-left bg-contain"
      style={{
        backgroundImage: "url('/assets/logo_bg_faq.jpg')",
      }}
    >
      {/* 🔥 Overlay for readability */}
      {/* <div className="absolute inset-0 bg-white/80" /> */}

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-[clamp(28px,5vw,48px)] font-bold text-black">
            Frequently Asked Questions
          </h1>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT */}
          <div>
            <h2 className="text-[clamp(24px,4vw,48px)] font-semibold leading-tight text-black mb-6">
              Why Axtelica for <br /> Smarter Insights?
            </h2>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              Axtelica delivers AI-powered solutions designed to boost customer
              growth, enhance productivity, and optimize costs. Our expertise in
              analytics, cloud, and digital transformation helps businesses
              achieve sustainable success in the digital age.
            </p>
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-t border-gray-300 pt-5 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-4">
                  
                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      activeIndex === index
                        ? "rotate-180 text-purple-600"
                        : "text-black"
                    }`}
                  />

                  <h3 className="text-lg md:text-xl font-poppins text-gray-900 transition">
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
                  <p className="text-gray-700  text-sm sm:text-base leading-relaxed">
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