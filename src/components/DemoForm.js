import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const DemoForm = ({
  title = "Ready to unlock the power of your data?",
  description = "Request a demo with an Axtelica AI product expert to see how you can:",
  points = [],
}) => {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    employees: "",
    country: "",
  });
 const location=useLocation();
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // 🔹 Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // 🔹 Validation
  const validate = () => {
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.company.trim()) newErrors.company = "Company is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }

    if (!form.employees) newErrors.employees = "Select employees";
    if (!form.country) newErrors.country = "Select country";

    return newErrors;
  };

  // 🔹 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);

    emailjs.send(
  process.env.REACT_APP_SERVICE_ID,
  process.env.REACT_APP_TEMPLATE_ID,
  { ...form, formType: "Demo Request" },
  process.env.REACT_APP_PUBLIC_KEY
)
      .then(() => {
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
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send request");
        setLoading(false);
      });
  };
   // ❌ Hide component on this route
  if (location.pathname === "/product/Intelligent") {
    return null;
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-8 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-[1400px] px-10 mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-[clamp(28px,5vw,48px)] font-bold text-gray-900 mb-6">
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

            {/* First Name */}
            <div>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                className="w-full border px-3 py-3 rounded-md"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name*"
                className="w-full border px-3 py-3 rounded-md"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            {/* Company */}
            <div>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company*"
                className="w-full border px-3 py-3 rounded-md"
              />
              {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Business Email*"
                className="w-full border px-3 py-3 rounded-md"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                name="phone"
                value={form.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) {
                    setForm({ ...form, phone: value });
                    setErrors({ ...errors, phone: "" });
                  }
                }}
                placeholder="Phone*"
                className="w-full border px-3 py-3 rounded-md"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Employees */}
            <div>
              <select
                name="employees"
                value={form.employees}
                onChange={handleChange}
                className="w-full border px-3 py-3 rounded-md"
              >
                <option value="">Employees*</option>
                <option>1-10</option>
                <option>10-50</option>
                <option>50+</option>
              </select>
              {errors.employees && <p className="text-red-500 text-sm">{errors.employees}</p>}
            </div>

            {/* Country */}
            <div className="md:col-span-2">
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full border px-3 py-3 rounded-md"
              >
                <option value="">Country*</option>
                <option>India</option>
                <option>USA</option>
              </select>
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
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
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;