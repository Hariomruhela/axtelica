import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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

  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setGlobalError(""); // clear global error
  };

  // 🔹 Validation
  const validate = () => {
    let err = {};

    if (!form.email) {
      err.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      err.email = "Invalid email format";
    }

    if (!form.firstName.trim()) err.firstName = "First name is required";
    if (!form.lastName.trim()) err.lastName = "Last name is required";
    if (!form.company.trim()) err.company = "Company is required";

    if (!form.phone) {
      err.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      err.phone = "Phone must be 10 digits";
    }

    if (!form.department) err.department = "Select a department";
    if (!form.message.trim()) err.message = "Message is required";

    return err;
  };

  // 🔹 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Check ALL fields empty
    const isAllEmpty = Object.values(form).every((val) => !val.trim());

    if (isAllEmpty) {
      setErrors({});
      setGlobalError("All fields marked with * are mandatory");
      return;
    }

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setGlobalError("");
      toast.error("Please fill all required fields correctly");
      return;
    }

    setGlobalError("");
    setLoading(true);

    emailjs
      .send(
        "service_mq323ys",
        "template_ho7qo3m",
        { ...form, formType: "Demo Request" },
        "KUyOfe7nTxPUvWFdw"
      )
      .then(() => {
        toast.success("Message sent successfully!");

        setForm({
          email: "",
          firstName: "",
          lastName: "",
          company: "",
          phone: "",
          department: "",
          message: "",
        });

        setErrors({});
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <section className="min-h-screen bg-[#0e1231] py-44 px-4">
        <div className="max-w-7xl mx-auto mt-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT (UNCHANGED ✅) */}
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

            <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-6">
              Have questions or want to explore how we can help your business?
              Fill out the form and our team will get back to you.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-lg border-l-2 border-pink-500 pl-4">
              We welcome any questions you may have or further discussions about how our
              services and solutions can meet your needs. Please feel free to reach out to
              us at your convenience.
            </p>

            <h3 className="text-white text-xl font-semibold mb-3">
              Contact Us
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">
              If you would like to ask a question or speak with someone at Axtelica,
              please complete the form provided. Let’s discuss your needs and find the
              right solution for you.
            </p>

            <p className="text-gray-400 leading-relaxed mb-2">
              EMAIL OUR GLOBAL TEAM AT
            </p>

            <a
              href="mailto:info@axtelica.com"
              className="text-pink-400 font-medium text-lg hover:underline"
            >
              info@axtelica.com
            </a>

            <p className="text-gray-400 leading-relaxed mt-4 max-w-lg">
              Schedule a consultation, request a demo, or chat with our AI assistant.
            </p>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 space-y-4 text-black"
          >

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Business Email *"
                className="w-full border px-4 py-3 rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Names */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  className="w-full border px-4 py-3 rounded-lg"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>

              <div>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  className="w-full border px-4 py-3 rounded-lg"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
            </div>

            {/* Company */}
            <div>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company *"
                className="w-full border px-4 py-3 rounded-lg"
              />
              {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                name="phone"
                value={form.phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  if (val.length <= 10) {
                    setForm({ ...form, phone: val });
                    setErrors({ ...errors, phone: "" });
                  }
                }}
                placeholder="Phone Number *"
                className="w-full border px-4 py-3 rounded-lg"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Department */}
            <div>
              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
              >
                <option value="">Select Department *</option>
                <option>Sales</option>
                <option>Support</option>
                <option>Marketing</option>
                <option>Other</option>
              </select>
              {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Message *"
                className="w-full border px-4 py-3 rounded-lg"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF3366] text-white py-3 rounded-md disabled:opacity-50"
            >
              {loading ? "Sending..." : "Get a Demo"}
            </button>

            {/* ✅ Global Error */}
            {globalError && (
              <p className="text-red-500 text-sm text-center">
                {globalError}
              </p>
            )}

          </motion.form>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;