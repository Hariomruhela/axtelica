import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Blogs", "Articles", "Whitepapers"];

const data = {
  Blogs: [
    {
      category: "DATA QUALITY",
      title:
        "Why Your AI Models Are Only as Good as Your Data Pipeline",
      desc: `Explores how fragmented, unvalidated data undermines AI performance — and how continuous data quality monitoring forms the foundation of any reliable AI deployment. Targeted at data and analytics leaders in regulated enterprises.`,
    },
    {
      category: "DECISION INTELLIGENCE",
      title:
        "From Dashboards to Decisions: The Next Step in Business Intelligence",
      desc: `Examines why static dashboards fall short for modern enterprises and how real-time intelligence platforms like Axtream shift organizations from reactive reporting to proactive, decision-grade analytics.`,
    },
    {
      category: "AI AGENTS",
      title:
        "Beyond Chatbots: What Intelligent Business Agents Actually Do",
      desc: `Demystifies the difference between conversational AI and true workflow agents — covering how agents like Axtelica's Requirement, Validation, and Workflow agents eliminate operational bottlenecks without displacing teams.`,
    },
  ],

  Articles: [
    {
      category: "DATA QUALITY",
      title:
        "Why Your AI Models Are Only as Good as Your Data Pipeline",
      desc: `Explores how fragmented, unvalidated data undermines AI performance...`,
    },
  ],

  Whitepapers: [
    {
      title:
        "The Enterprise AI Readiness Report: Closing the Gap Between Data and Decisions",
      desc: `A strategic guide for CIOs and CDOs examining the five organizational and technical gaps...`,
      meta: "AUDIENCE: CIO / CDO / VP ANALYTICS · 18–22 PAGES · GATED ASSET",
    },
  ],
};

const InsightsPagSection = () => {
  const [activeTab, setActiveTab] = useState("Blogs");

  return (
    <div className="bg-gray-100">
      <section className="max-w-7xl mx-auto text-gray-700 py-10 sm:py-16 px-4 sm:px-6 md:px-20">

        {/* Tabs */}
        <div className="flex gap-3 sm:gap-10 mb-6 sm:mb-10 overflow-x-auto no-scrollbar px-1 sm:px-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 sm:px-6 py-2 rounded-md text-sm sm:text-lg font-poppins transition ${
                activeTab === tab
                  ? "bg-[#FF3366] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-[#FF3366]"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid gap-4 sm:gap-8"
          >
            {data[activeTab].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-6 rounded-md hover:shadow-xl transition"
              >
                {item.category && (
                  <p className="text-pink-500 text-xs sm:text-lg font-poppins mb-1 sm:mb-2">
                    {item.category}
                  </p>
                )}

                <h3 className="text-lg sm:text-2xl font-poppins mb-2 sm:mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                  {item.desc}
                </p>

                {item.meta && (
                  <p className="text-xs sm:text-md text-gray-700">
                    {item.meta}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </section>
    </div>
  );
};

export default InsightsPagSection;