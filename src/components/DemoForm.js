import React, { useState } from "react";

import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const DemoForm = ({
  title = "Ready to unlock the power of your data?",
  description = "Request a demo with an Axtelica AI product expert to see how you can:",
  points = [],
}) => {
  const location = useLocation();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    employees: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  

  // 🔹 Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({});
  };

  // 🔹 Check all empty
  const isAllFieldsEmpty = () => {
    return Object.values(form).every((val) => val.trim() === "");
  };

  // 🔹 Validation
  const validate = () => {
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = true;
    if (!form.lastName.trim()) newErrors.lastName = true;
    if (!form.company.trim()) newErrors.company = true;

    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = true;
    }

    if (!form.phone || !/^\d{10}$/.test(form.phone)) {
      newErrors.phone = true;
    }

    if (!form.employees) newErrors.employees = true;
    if (!form.country) newErrors.country = true;

    return newErrors;
  };

  // 🔹 Submit
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (isAllFieldsEmpty()) {
    setErrors({ global: "All fields marked with * are mandatory" });
    toast.error("All fields marked with * are mandatory");
    return;
  }

  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors({ global: "Please enter valid details in all fields" });
    toast.error("Please fix the form");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("https://axtelica-backend.onrender.com/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Demo request sent successfully!");

      setForm({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        employees: "",
        country: "",
      });

      setErrors({});
    } else {
      toast.error(data.error || "Failed to send request");
    }
  } catch (err) {
    console.error(err);
    toast.error("Server error");
  } finally {
    setLoading(false);
  }
};
// ❌ Hide component on this route
  if (location.pathname === "/product/Intelligent") {
    return null;
  }
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-1 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-[1400px] px-10 mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-[clamp(28px,5vw,48px)]  text-gray-900 mb-6">
            {title}
          </h1>

          <p className="text-gray-700 mb-6 text-xl">
            {description}
          </p>

          <ul className="space-y-4 text-gray-700 text-lg">
            {points.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FORM */}
        <div className="bg-white border rounded-2xl p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black">

            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              className="w-full border px-3 py-3 rounded-md"
            />

            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              className="w-full border px-3 py-3 rounded-md"
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company*"
              className="w-full border px-3 py-3 rounded-md"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Business Email*"
              className="w-full border px-3 py-3 rounded-md"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) {
                  setForm({ ...form, phone: value });
                }
              }}
              placeholder="Phone*"
              className="w-full border px-3 py-3 rounded-md"
            />

            <select
              name="employees"
              value={form.employees}
              onChange={handleChange}
              className="w-full border px-3 py-3 rounded-md  bg-white text-gray-400"
            >
              <option value="">Employees*</option>
              <option>1-10</option>
              <option>10-50</option>
              <option>50+</option>
            </select>

            <div className="md:col-span-2">
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full border px-3 py-3 rounded-md bg-white text-gray-400"
              >
                <option value="">Country*</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF3366] text-white py-3 rounded-md disabled:opacity-50"
              >
                {loading ? "Sending..." : "Get a Demo"}
              </button>

              {/* 🔴 Single Error */}
              {errors.global && (
                <p className="text-red-500 text-sm mt-3 text-center">
                  {errors.global}
                </p>
              )}
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;