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
    {
      category: "AUTOMATION",
      title:
        "The Hidden Cost of Manual Workflows in Enterprise Operations",
      desc: `Quantifies the time, error rate, and opportunity cost of manual process execution — and presents the case for intelligent automation that handles routing, exception management, and task execution autonomously.`,
    },
    {
      category: "STRATEGY",
      title:
        "Why Most AI Proof-of-Concepts Fail to Reach Production",
      desc: `Identifies the common failure modes in enterprise AI adoption — from misaligned problem scoping to over-engineered solutions — and outlines a problem-first delivery model that drives real deployment outcomes.`,
    },
    {
      category: "PLATFORMS",
      title:
        "What 'AI-Ready' Data Architecture Really Means in 2025",
      desc: `Breaks down the architectural requirements for enterprises looking to move from siloed data to a unified, streaming-capable data estate that supports AI workloads without costly re-platforming.`,
    },
  ],

  Articles: [
    // (Same as Blogs for now — you can change later if needed)
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
    {
      category: "AUTOMATION",
      title:
        "The Hidden Cost of Manual Workflows in Enterprise Operations",
      desc: `Quantifies the time, error rate, and opportunity cost of manual process execution — and presents the case for intelligent automation that handles routing, exception management, and task execution autonomously.`,
    },
    {
      category: "STRATEGY",
      title:
        "Why Most AI Proof-of-Concepts Fail to Reach Production",
      desc: `Identifies the common failure modes in enterprise AI adoption — from misaligned problem scoping to over-engineered solutions — and outlines a problem-first delivery model that drives real deployment outcomes.`,
    },
    {
      category: "PLATFORMS",
      title:
        "What 'AI-Ready' Data Architecture Really Means in 2025",
      desc: `Breaks down the architectural requirements for enterprises looking to move from siloed data to a unified, streaming-capable data estate that supports AI workloads without costly re-platforming.`,
    },
  ],

  Whitepapers: [
    {
      title:
        "The Enterprise AI Readiness Report: Closing the Gap Between Data and Decisions",
      desc: `A strategic guide for CIOs and CDOs examining the five organizational and technical gaps that prevent enterprises from converting their data investments into AI-driven business outcomes. Covers data quality maturity, integration architecture, automation readiness, and the business agent opportunity. Includes a self-assessment framework and maturity model.`,
      meta: "AUDIENCE: CIO / CDO / VP ANALYTICS · 18–22 PAGES · GATED ASSET",
    },
    {
      title:
        "Real-Time Intelligence in Regulated Industries: A Practical Framework for Banking, Insurance & Pharma",
      desc: `Examines how real-time data streaming and decision intelligence platforms are reshaping compliance, risk management, and commercial operations in highly regulated sectors. Covers architecture patterns, integration approaches, and governance considerations. Includes use-case deep dives with illustrative impact metrics.`,
      meta: "AUDIENCE: OPERATIONS & RISK LEADERS · 14–18 PAGES · GATED ASSET",
    },
    {
      title:
        "Building Intelligent Automation That Scales: A Guide for Enterprise Operations Teams",
      desc: `A practitioner's guide to replacing rule-based manual workflows with AI-led process automation — covering design principles, integration patterns, exception handling logic, and governance controls. Introduces Axtelica's modular agent framework and how it reduces time-to-value for automation projects.`,
      meta: "AUDIENCE: OPERATIONS / IT LEADERS · 12–16 PAGES · GATED ASSET",
    },
  ],
};

const InsightsPagSection = () => {
  const [activeTab, setActiveTab] = useState("Blogs");

  return (
    <div className="bg-gray-100">
    <section className=" max-w-7xl mx-auto text-gray-700 py-16 px-6 md:px-20">
      
      
      {/* Tabs */}
      <div className="flex gap-10 mb-10 justify-start px-6 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md text-lg font-poppins transition ${
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-1 gap-8"
        >
          {data[activeTab].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-md  hover:shadow-xl transition"
            >
              {item.category && (
                <p className="text-pink-500 text-lg font-poppins mb-2">
                  {item.category}
                </p>
              )}

              <h3 className="text-2xl font-poppins  mb-3">
                {item.title}
              </h3>

              <p className="body text-gray-700  mb-4">
                {item.desc}
              </p>

              {item.meta && (
                <p className="text-md text-gray-700">
                  {item.meta}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section></div>
  );
};

export default InsightsPagSection;