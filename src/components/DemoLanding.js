import React, { useState } from "react";
import { motion } from "framer-motion";
import DemoFooter from "./DemoFooter";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const DemoLanding = () => {
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
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // 🔹 Validation
  const validate = () => {
    let err = {};

    if (!form.firstName.trim()) err.firstName = "First name is required";
    if (!form.lastName.trim()) err.lastName = "Last name is required";
    if (!form.company.trim()) err.company = "Company is required";

    if (!form.email) {
      err.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      err.email = "Invalid email format";
    }

    if (!form.phone) {
      err.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      err.phone = "Phone must be 10 digits";
    }

    if (!form.employees) err.employees = "Employees is required";
    if (!form.country) err.country = "Country is required";

    return err;
  };

  // 🔹 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors");
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
        toast.success("Demo request sent!");

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
      .catch((err) => {
        console.error(err);
        toast.error("Failed to send request");
        setLoading(false);
      });
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center text-white relative px-4"
        style={{
          backgroundImage: "url('/assets/book_demo_pagebg.jpg')",
          backgroundSize: "cover",
        }}
      >
        {/* <div className="absolute inset-0 bg-black/40" /> */}

        
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 md:py-24">

          {/* FORM */}
          <div className="bg-white text-black p-6 md:p-8 rounded-xl shadow-xl w-full">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

              {/* First Name */}
              <div>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="w-full border p-2 rounded-md"
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
                  className="w-full border p-2 rounded-md"
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
                  className="w-full border p-2 rounded-md"
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
                  className="w-full border p-2 rounded-md"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                  placeholder="Phone*"
                  className="w-full border p-2 rounded-md"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Employees */}
              <div>
                <input
                  name="employees"
                  value={form.employees}
                  onChange={handleChange}
                  placeholder="Employees*"
                  className="w-full border p-2 rounded-md"
                />
                {errors.employees && <p className="text-red-500 text-sm">{errors.employees}</p>}
              </div>

              {/* Country */}
              <div className="col-span-2">
                <input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  placeholder="Country*"
                  className="w-full border p-2 rounded-md"
                />
                {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
              </div>

              {/* Submit */}
              <div className="col-span-2 mt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FF3366] text-white py-3 rounded-full disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Get a Demo"}
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <Link to="/">
              <img src="/assets/Logo_header_white.png " alt="axtelica" className=" mb-6 mx-auto lg:mx-0" />
            </Link>

            <h1 className="text-4xl font-semibold mb-6">
              AI Security Built for Speed and Scale
            </h1>

            <ul className="space-y-3">
              <li>✔ Connect data from multiple sources</li>
              <li>✔ Ingest batch and real-time data</li>
              <li>✔ Improve data quality</li>
              <li>✔ Detect anomalies</li>
            </ul>
          </div>

        </div>
      </motion.section>

      <DemoFooter />
    </>
  );
};

export default DemoLanding;