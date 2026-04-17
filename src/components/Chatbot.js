import React, { useRef, useState, useEffect } from "react";
import { FaPaperclip, FaSmile } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";

const faqDatabase = [
  {
    keywords: ["hi", "hello", "hey"],
    response: "Hello 👋 Welcome! How can I assist you today?",
  },
  {
    keywords: ["services", "offer", "provide"],
    response:
      "We provide AI Automation, E-commerce Solutions, and Cloud Services.",
  },
  {
    keywords: ["price", "cost", "pricing"],
    response:
      "Pricing depends on your requirements. Would you like to share more details?",
  },
  {
    keywords: ["contact", "email", "call"],
    response:
      "You can contact us via our contact form or email us at hello@yourdomain.com.",
  },
];

function detectIntent(message) {
  const lowerMsg = message.toLowerCase();
  for (let item of faqDatabase) {
    for (let keyword of item.keywords) {
      if (lowerMsg.includes(keyword)) return item.response;
    }
  }
  return "I'm not sure I understand. Could you please rephrase?";
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const fileInputRef = useRef();
  const chatEndRef = useRef();

  // ✅ Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "bot", text: detectIntent(input) },
    ]);

    setInput("");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);

    setMessages((prev) => [
      ...prev,
      { sender: "user", file, fileURL },
    ]);
  };

  // ✅ FIXED (used now)
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
        <img
          src="/assets/chat_icon.png"
          alt="Open chat"
          className="p-2"
        />
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
          <div className="flex items-center justify-between px-4 py-3 bg-blue-600">
            <div className="flex items-center gap-2">
              <img
                src="/assets/chat_icon.png"
                alt="Chatbot logo"
                className="w-6 h-6"
              />
              <span className="text-white text-sm font-semibold">
                Quito AI Assistant
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
                        ? "ml-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "mr-auto bg-white text-black shadow-sm"
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
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                width={280}
                height={350}
              />
            </div>
          )}

          {/* Input */}
          <div className="p-2 border-t flex items-center gap-2 bg-white">
            <button
              onClick={() => fileInputRef.current.click()}
              className="text-gray-600"
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
              className="flex-1 border border-gray-300 text-gray-800
              px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            />

            <button
              onClick={() => setShowEmoji(!showEmoji)}
              className="text-gray-600"
            >
              <FaSmile />
            </button>

            <button
              onClick={handleSend}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-2 rounded-lg"
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