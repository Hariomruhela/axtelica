import React, { useRef, useState, useEffect } from "react";
import { FaPaperclip, FaSmile } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";

/* ===================== KNOWLEDGE BASE ===================== */
const knowledgeBase = [
  {
    keywords: ["hi", "hello", "hey"],
    responses: ["Hello 👋 Welcome to Axtelica! How can I help you today?"],
  },
  {
    keywords: ["about", "company"],
    responses: [
      "Axtelica is an AI and Data Analytics company helping businesses transform using data-driven solutions.",
    ],
  },
  {
    keywords: ["services"],
    responses: [
      "We offer:\n• AI Data Engineering\n• Business Intelligence\n• DevOps\n• Digital Transformation",
    ],
  },
  {
    keywords: ["ai"],
    responses: [
      "We provide AI-powered automation, machine learning, and data engineering solutions.",
    ],
  },
  {
    keywords: ["analytics"],
    responses: [
      "We build dashboards, predictive analytics, and real-time reporting systems.",
    ],
  },
  {
    keywords: ["devops"],
    responses: [
      "Our DevOps services include CI/CD pipelines, cloud deployment, and automation.",
    ],
  },
  {
    keywords: ["product", "catalystcraft"],
    responses: [
      "CatalystCraft is our accelerator toolkit for faster analytics deployment.",
    ],
  },
  {
    keywords: ["price", "cost"],
    responses: [
      "Pricing depends on your requirements. Please contact us for a custom quote.",
    ],
  },
  {
    keywords: ["contact"],
    responses: [
      "📧 hello@axtelica.com\n📞 +91 8800112559",
    ],
  },
  {
    keywords: ["demo", "meeting", "book"],
    responses: [
      "You can book a demo here 👉 https://axtelica.com/demo",
    ],
  },
  {
    keywords: ["thanks", "thank you"],
    responses: ["You're welcome 😊 Happy to help!"],
  },
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