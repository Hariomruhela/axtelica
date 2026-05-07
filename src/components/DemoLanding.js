import React, { useState } from "react";
import { motion } from "framer-motion";
import DemoFooter from "./DemoFooter";
import { Link } from "react-router-dom";
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
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setGlobalError("");
  };

  // ✅ Validation
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
    } else if (!/^\d{7,15}$/.test(form.phone)) {
      err.phone = "Invalid phone number";
    }

    if (!form.employees) err.employees = "Employees is required";
    if (!form.country) err.country = "Country is required";

    return err;
  };

  // ✅ Submit (CONNECTED TO BACKEND)
 const handleSubmit = async (e) => {
  e.preventDefault();

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
    toast.error("Please fix the errors");
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

    // ✅ HANDLE SERVER ERROR (IMPORTANT)
    if (!res.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    // ✅ SUCCESS
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
    setGlobalError("");

  } catch (err) {
    console.error("Frontend Error:", err);

    // ✅ SHOW REAL ERROR MESSAGE
    setGlobalError(err.message);
    toast.error(err.message);
  } finally {
    setLoading(false);
  }
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
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 py-10 sm:py-16 md:py-24">

          {/* FORM */}
          <div className="bg-white text-black p-6 md:p-8 rounded-xl shadow-xl w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <label className="text-sm">First Name*</label>
                <input name="firstName" value={form.firstName} onChange={handleChange}
                  className="w-full border px-3 py-2.5 rounded-md mt-1" />
                {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
              </div>

              <div>
                <label className="text-sm">Last Name*</label>
                <input name="lastName" value={form.lastName} onChange={handleChange}
                  className="w-full border px-3 py-2.5 rounded-md mt-1" />
                {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
              </div>

              <div>
                <label className="text-sm">Company*</label>
                <input name="company" value={form.company} onChange={handleChange}
                  className="w-full border px-3 py-2.5 rounded-md mt-1" />
                {errors.company && <p className="text-red-500 text-xs">{errors.company}</p>}
              </div>

              <div>
                <label className="text-sm">Business Email*</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  className="w-full border px-3 py-2.5 rounded-md mt-1" />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm">Phone*</label>
                <input name="phone" value={form.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    if (val.length <= 15) setForm({ ...form, phone: val });
                  }}
                  className="w-full border px-3 py-2.5 rounded-md mt-1" />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              </div>

              <div>
                <label className="text-sm">Employees*</label>
                <input name="employees" value={form.employees} onChange={handleChange}
                  className="w-full border px-3 py-2.5 rounded-md mt-1" />
                {errors.employees && <p className="text-red-500 text-xs">{errors.employees}</p>}
              </div>

              <div className="col-span-2">
                <label className="text-sm">Country*</label>
                <input name="country" value={form.country} onChange={handleChange}
                  className="w-full border px-3 py-2.5 rounded-md mt-1" />
                {errors.country && <p className="text-red-500 text-xs">{errors.country}</p>}
              </div>

              <div className="col-span-2 mt-3">
                <button type="submit" disabled={loading}
                  className="w-full bg-[#FF3366] text-white py-3.5 rounded-full disabled:opacity-50">
                  {loading ? "Sending..." : "Get a Demo"}
                </button>

                {globalError && (
                  <p className="text-red-500 text-sm mt-3 text-center">{globalError}</p>
                )}
              </div>

            </form>

            <p className="text-[12px] mt-2 text-gray-700">
              By clicking Request a Demo, I agree to the use of my personal data in accordance with Axtelica Privacy Notice.
            </p>
          </div>

          {/* RIGHT CONTENT (UNCHANGED) */}
          <div className="flex flex-col justify-center text-center lg:text-left mt-8 lg:mt-0">
            <Link to="/">
              <img src="/assets/Logo_header_white.png" alt="axtelica"
                className="mb-6 mx-auto lg:mx-0 w-32 sm:w-auto" />
            </Link>

            <h1 className="text-xl sm:text-3xl lg:text-5xl mb-5">
              AI Security Built for Speed and Scale
            </h1>

            <h3 className="text-lg md:text-xl lg:text-2xl mb-2">
              Request a demo with an Axtelica AI product expert to see how you can:
            </h3>

            <ul className="space-y-2 text-sm sm:text-base">
              <li>✔ Connect data from multiple sources</li>
              <li>✔ Ingest batch and real-time data</li>
              <li>✔ Improve data quality and trust</li>
              <li>✔ Detect anomalies and operational risks</li>
            </ul>
          </div>

        </div>
      </motion.section>

      <DemoFooter />
    </>
  );
};

export default DemoLanding;