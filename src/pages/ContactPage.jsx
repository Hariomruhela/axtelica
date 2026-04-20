import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    department: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // 👉 API call / backend integration here
  };

  return (<div>
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-44 px-4">
      <div className="max-w-7xl mx-auto mt-10    grid lg:grid-cols-2 gap-12 items-center ">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-black"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 
               bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
               bg-clip-text text-transparent">
  Get in Touch
</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            Have questions or want to explore how we can help your business?
            Fill out the form and our team will get back to you.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-8 space-y-5"
        >
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Business Email *"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              required
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              required
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          {/* Company */}
          <input
            type="text"
            name="company"
            placeholder="Company *"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* Department */}
          <select
            name="department"
            required
            onChange={handleChange}
            className="w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          >
            <option value="">Select Department *</option>
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
            <option value="Marketing">Marketing</option>
            <option value="Other">Other</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Comments / Questions"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#FF3366] text-white py-3 rounded-md font-medium hover:scale-105 transition"
          >
            Submit
          </button>

          {/* Footer Note */}
          <p className="text-lg text-gray-500 leading-relaxed">
            By submitting this form, you agree to be contacted regarding our
            services. You can unsubscribe anytime.
          </p>
        </motion.form>

      </div>
      
    </section>
    <Footer/>
    </div>
  );
};

export default ContactPage;