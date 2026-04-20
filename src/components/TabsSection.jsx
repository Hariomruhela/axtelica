import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabsData = {
  

  "Critical Challenges": [
    {
      title: "Banking & Financial Services",
      desc: "Fraud detection, compliance, and real-time decision systems.",
    },
    {
      title: "Insurance",
      desc: "Claims automation, validation workflows, and operational visibility.",
    },
    {
      title: "Pharma & Life Sciences",
      desc: "Data accuracy, regulatory reporting, and analytics.",
    },
    {
      title: "Enterprise Operations",
      desc: "Workflow intelligence and cross-functional decision support.",
    },
  ],
"Business Gains": [
    {
      title: "Faster decisions",
      desc: "Live data and intelligent alerts replace delayed reports — so teams act on what's happening now.",
    },
    {
      title: "Reduced manual load",
      desc: "AI-driven automation frees your teams from repetitive execution work.",
    },
    {
      title: "Higher data confidence",
      desc: "Continuous monitoring ensures reports and decisions are built on trusted data.",
    },
    {
      title: "Lower total cost",
      desc: "Reusable architecture reduces build costs and speeds up delivery.",
    },
    {
      title: "Scalable AI adoption",
      desc: "Solutions grow with your business, compounding value over time.",
    },
    {
      title: "Faster time to value",
      desc: "Get working solutions in weeks, not quarters.",
    },
  ],
  "How We Deliver Value": [
    {
      title: " Understand the problem",
      desc: "We deeply analyze your business challenge and data landscape.",
    },
    {
      title: " Design the right solution",
      desc: "We align the solution with your workflows and tech stack.",
    },
    {
      title: " Build with reuse in mind",
      desc: "Reusable components reduce cost and speed up delivery.",
    },
    {
      title: " Deliver and measure",
      desc: "We deploy fast and track outcomes from day one.",
    },
  ],
};

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("Business Gains");

  return (<div className="w-full bg-[#f5f5f5]">
    <section className="max-w-7xl mx-auto py-16 px-4 ">

      {/* Tabs */}
      <div className="flex flex-wrap justify-between px-10 gap-8 mb-12">
        {Object.keys(tabsData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md text-lg font-poppins font-medium transition 
              ${
                activeTab === tab
                  ? "bg-[#FF3366] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tabsData[activeTab].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition"
            >
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-lg font-poppins leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

    </section>
    </div>
  );
};

export default TabsSection;