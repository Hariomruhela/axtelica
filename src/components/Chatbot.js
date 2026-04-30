import React, { useRef, useState, useEffect } from "react";
import { FaPaperclip, FaSmile } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";

/* ===================== KNOWLEDGE BASE ===================== */
const knowledgeBase = [
  /* --- GROUP 1: COMPANY IDENTITY & PHILOSOPHY (10 FAQs) --- */
  {
    keywords: ["what is axtelica", "about the company", "who are you"],
    responses: ["Axtelica is a next-generation data and analytics company that helps businesses transform raw data into actionable insights using AI, cloud technologies, and advanced analytics."]
  },
  {
    keywords: ["why choose", "different", "stand out", "why axtelica"],
    responses: ["We stand out through: \n• Problem-first thinking (we solve what's broken, not just deploy models).\n• Practical AI with provable ROI.\n• Cost-smart delivery via modular components[cite: 1].\n• Enterprise-grade reliability for high-volume data[cite: 1]."]
  },
  {
    keywords: ["vision", "mission", "goal"],
    responses: ["Our mission is to empower organizations with AI that simplifies complexity and enhances productivity[cite: 1]."]
  },
  {
    keywords: ["location", "where", "office", "ghaziabad", "india"],
    responses: ["Axtelica is headquartered in Ghaziabad, India, with a global presence serving international markets[cite: 1]."]
  },
  {
    keywords: ["startups", "small business", "only enterprises"],
    responses: ["We work with both startups and large enterprises by offering scalable solutions that grow with your business needs[cite: 1]."]
  },

  /* --- GROUP 2: INFINISIGHT PRODUCT DEEP-DIVE (12 FAQs) --- */
  {
    keywords: ["infinisight", "bi platform", "analytics tool"],
    responses: ["Infinisight is our AI-powered business intelligence platform for predictive analytics and real-time dashboards[cite: 1]."]
  },
  {
    keywords: ["infinisight features", "what can it do"],
    responses: ["Key features: \n• Unified Data Integration (CRM, ERP, APIs)[cite: 1].\n• Real-Time KPI Dashboards[cite: 1].\n• AI-Powered Trend Prediction[cite: 1].\n• Smart Query (Natural Language Processing)[cite: 1].\n• Workflow Automation[cite: 1]."]
  },
  {
    keywords: ["natural language", "plain english", "smart query"],
    responses: ["Infinisight's Smart Query allows you to ask business questions in plain English to get instant insights—no technical skills required[cite: 1]."]
  },
  {
    keywords: ["infinisight benefits", "why use infinisight"],
    responses: ["Benefits: Faster decision-making, increased productivity, cost optimization, and a competitive advantage through predictive intelligence[cite: 1]."]
  },
  {
    keywords: ["forecasting", "simulation", "what-if"],
    responses: ["Infinisight provides a simulation and synthetic data platform for scenario planning and smarter forecasting[cite: 1]."]
  },

  /* --- GROUP 3: AXTREAM PRODUCT DEEP-DIVE (8 FAQs) --- */
  {
    keywords: ["axtream", "streaming", "real-time ingest"],
    responses: ["Axtream is an intelligent platform for real-time integration, connecting apps and APIs for AI-ready operations[cite: 1]."]
  },
  {
    keywords: ["axtream benefits", "why use axtream"],
    responses: ["Axtream provides: \n• Real-time operational visibility[cite: 1].\n• Improved data trust through built-in quality checks[cite: 1].\n• Early risk and fraud detection[cite: 1].\n• Faster ROI on data pipelines[cite: 1]."]
  },

  /* --- GROUP 4: INTELLIGENT BUSINESS AGENTS (10 FAQs) --- */
  {
    keywords: ["agents", "digital colleague", "ai business agents"],
    responses: ["Axtelica is building a new class of agents designed as embedded digital colleagues to reduce routine work[cite: 1]."]
  },
  {
    keywords: ["requirement agent", "capture requirements"],
    responses: ["The Requirement Agent captures business needs through conversation and organizes them into actionable documentation[cite: 1]."]
  },
  {
    keywords: ["design agent", "architecture agent"],
    responses: ["The Design Agent converts requirements into solution designs and workflow recommendations[cite: 1]."]
  },
  {
    keywords: ["validation agent", "quality check agent"],
    responses: ["The Validation Agent automatically surfaces data mismatches and logic issues in real-time[cite: 1]."]
  },
  {
    keywords: ["workflow agent", "automation agent"],
    responses: ["The Workflow Agent handles rule-based steps like task routing and system execution with minimal human intervention[cite: 1]."]
  },

  /* --- GROUP 5: SERVICES & TECHNOLOGY (10 FAQs) --- */
  {
    keywords: ["services", "what do you offer", "offerings"],
    responses: ["Our services include: AI-powered data engineering, BI & analytics, DevOps-as-a-Service, Agile digital transformation, and Talent-as-a-Service[cite: 1]."]
  },
  {
    keywords: ["catalystcraft", "accelerator", "toolkit"],
    responses: ["CatalystCraft is our proprietary solution accelerator toolkit that helps organizations deploy data solutions faster and with higher quality[cite: 1]."]
  },
  {
    keywords: ["technology", "tech stack", "aws", "azure", "databricks"],
    responses: ["We leverage modern tech like AWS, Microsoft Azure, Databricks, PySpark, Power BI, Tableau, and GitLab for DevOps[cite: 1]."]
  },
  {
    keywords: ["skill forge", "talent", "staffing", "team augmentation"],
    responses: ["Through 'Skill Forge,' we provide trained professionals to fill skill gaps and support your data projects[cite: 1]."]
  },

  /* --- GROUP 6: SECURITY & COMPLIANCE (5 FAQs) --- */
  {
    keywords: ["security", "data protection", "encryption"],
    responses: ["Axtelica implements strong data governance, encryption, and compliance frameworks to protect sensitive business data[cite: 1]."]
  },
  {
    keywords: ["compliance", "regulatory", "trust"],
    responses: ["Our platforms are built to handle integration complexity and compliance standards required by regulated industries like Banking and Pharma[cite: 1]."]
  },

  /* --- GROUP 7: DELIVERY & ENGAGEMENT (8 FAQs) --- */
  {
    keywords: ["delivery model", "how you work", "process"],
    responses: ["Our 4-step model: \n1. Understand (Discovery)[cite: 1].\n2. Design (Matching tech stack)[cite: 1].\n3. Build (Modular reuse)[cite: 1].\n4. Deliver & Measure (Outcome tracking)[cite: 1]."]
  },
  {
    keywords: ["contact", "demo", "start", "get in touch"],
    responses: ["Ready to build? Contact us at info@axtelica.com or request a consultation via our website to get a customized roadmap[cite: 1]."]
  },
  {
    keywords: ["results", "expect", "impact"],
    responses: ["Clients can expect: Faster data processing, better decision-making, reduced operational costs, and improved insights[cite: 1]."]
  }
];

/* ===================== INTENT DETECTION ===================== */
function detectIntent(message) {
  const lowerMsg = message.toLowerCase();

  for (let item of knowledgeBase) {
    const match = item.keywords.some((keyword) =>
      lowerMsg.includes(keyword)
    );

    if (match) {
      const randomIndex = Math.floor(Math.random() * item.responses.length);
      return item.responses[randomIndex];
    }
  }

  return "I didn't fully get that 🤔. You can ask about services, AI, pricing, or contact info!";
}

/* ===================== COMPONENT ===================== */
export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi, I'm AXA your AI Chat Assistant. Anything specific you're curious about regarding our solutions and products?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const fileInputRef = useRef();
  const chatEndRef = useRef();

  /* 🔽 Auto-scroll */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* 🔽 Send Message */
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;
    const botReply = detectIntent(userMessage);

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage },
      { sender: "bot", text: botReply },
    ]);

    setInput("");
  };

  /* 🔽 File Upload */
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);

    setMessages((prev) => [
      ...prev,
      { sender: "user", file, fileURL },
    ]);
  };

  /* 🔽 Emoji */
  const onEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
    setShowEmoji(false);
  };

  return (
    <>
      {/* 🔘 Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 w-14 h-14 flex items-center justify-center
        rounded-full bg-white shadow-lg hover:scale-110 transition z-50"
      >
        <img src="/assets/chat_icon.png" alt="Open chat" className="p-2" />
      </button>

      {/* 💬 Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-4 sm:right-6
          w-[95%] sm:w-[380px] md:w-[420px]
          h-[70vh] max-h-[500px]
          bg-white border border-gray-200
          rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[linear-gradient(135deg,#11258f_0%,#1a35ad_40%,#2b4ec9_75%,#3d63e3_100%)]">
            <div className="flex items-center gap-2">
              <img
                src="/assets/axa_chat_icon.png"
                alt="Chatbot logo"
                className="w-6 h-6"
              />
              <span className="text-white text-lg font-semibold">
                Axa-AI Chat
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-300"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i}>
                {msg.text && (
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl break-words ${
                      msg.sender === "user"
                        ? "ml-auto bg-[#dce6f0] text-black w-fit"
                        : "mr-auto bg-[#dce6f0] text-black shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                )}

                {msg.file && (
                  <div className="ml-auto bg-white p-2 rounded-lg max-w-[80%] shadow">
                    {msg.file.type.startsWith("image") ? (
                      <img
                        src={msg.fileURL}
                        alt="Uploaded preview"
                        className="rounded-lg max-h-40"
                      />
                    ) : (
                      <a
                        href={msg.fileURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        📎 {msg.file.name}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Emoji Picker */}
          {showEmoji && (
            <div className="absolute bottom-20 right-2 z-50">
              <EmojiPicker onEmojiClick={onEmojiClick} width={280} height={350} />
            </div>
          )}

          {/* Input */}
          <div className="p-2 border-t flex items-center gap-2 bg-white">
            <button
              onClick={() => fileInputRef.current.click()}
              className="text-[#3d63e3]"
            >
              <FaPaperclip />
            </button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              hidden
            />

            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border border-[#3d63e3] text-gray-800
              px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-blue-900"
            />

            <button
              onClick={() => setShowEmoji(!showEmoji)}
              className="text-[#3d63e3]"
            >
              <FaSmile />
            </button>

            <button
              onClick={handleSend}
              className="bg-white text-[#3d63e3] text-xl px-3 py-2 rounded-lg"
            >
              <IoSendSharp />
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 py-1">
            Powered by Techquitoes
          </div>
        </div>
      )}
    </>
  );
}