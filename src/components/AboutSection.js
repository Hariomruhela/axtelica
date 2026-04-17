import React from "react";
import { motion } from "framer-motion";

const missionData = [
  {
    title: "Empower",
    desc: "data-driven enterprises",
    icon: "/assets/empower.png",
  },
  {
    title: "Support",
    desc: "digital transformation from all angles",
    icon: "/assets/support.png",
  },
  {
    title: "Create",
    desc: "strategic solutions to solve real-world problems",
    icon: "/assets/setting.jpg",
  },
];

// 🔥 Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const AboutSection = () => {
  return (
    <div className="w-full text-gray-800">

      {/* HERO */}
      <section
        className="relative py-20 sm:py-24 lg:py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero_banner_new.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full max-w-[1400px] mt-12 mx-auto px-4 sm:px-6 lg:px-8"
        >
          <p className="uppercase tracking-widest text-sm text-white mb-4">
            Why Axtelica
          </p>

          <h1 className="text-[clamp(28px,5vw,56px)] font-bold text-white max-w-3xl leading-tight">
            Real-Time Data Integration, Quality, and Intelligence
          </h1>

          <p className="mt-6 text-gray-200 max-w-2xl">
            At Axtelica, we believe technology is more than just tools—it's the
            foundation of modern business success.
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="max-w-[1400px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-10 items-center">
        
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(22px,4vw,36px)] font-semibold mb-6">
            We specialize in a wide range of IT services
          </h2>

          <ul className="space-y-3 text-gray-700">
            {[
              "Website Design & Development",
              "Mobile App Development",
              "Cloud Solutions & Integration",
              "Cybersecurity Services",
              "Data Analytics & Business Intelligence",
              "Custom Software Development",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-600">
            Our expert team combines creativity with cutting-edge technology.
          </p>
        </motion.div>

        <motion.img
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          src="/assets/about_img.png"
          alt="network"
          className="w-full rounded-lg"
        />
      </section>

      {/* MISSION */}
      <section className="max-w-[1400px] mx-auto text-center py-16 px-4">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[clamp(26px,5vw,48px)] font-bold mb-12"
        >
          Our Mission
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {missionData.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }} // 🔥 stagger effect
              className="bg-gray-100 p-6 rounded-xl flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-red-500 font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 text-gray-700 max-w-2xl mx-auto"
        >
          To empower businesses with innovative technology solutions that drive
          efficiency and growth.
        </motion.p>
      </section>

      {/* ABOUT DETAIL */}
      <section className="max-w-[1400px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-10 items-center">
        
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-6">
            Axtelica is a professional IT services company focused on delivering
            high-quality technology solutions worldwide.
          </p>

          <button className="bg-purple-700 text-white px-6 py-3 rounded-full hover:scale-105 transition">
            Meet us →
          </button>
        </motion.div>

        <motion.img
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          src="/assets/teamax.jpg"
          alt="team"
          className="w-full rounded-lg"
        />
      </section>

      {/* FINAL */}
      <section className="max-w-[1400px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-10 items-center">
        
        <motion.img
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          src="/assets/meeting2.jpg"
          alt="meeting"
          className="w-full rounded-lg"
        />

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(22px,4vw,32px)] font-semibold mb-4">
            Imagine: your data working in a system made for your business
          </h2>

          <p className="text-gray-600 mb-6">
            That’s what we bring to the table. We help your systems run faster and smarter.
          </p>
        </motion.div>
      </section>

      {/* FOOT TEXT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center py-16 px-4"
      >
        <p className="max-w-2xl mx-auto text-gray-600">
          At Axtelica, we don’t just build software — we build lasting partnerships.
        </p>
      </motion.section>

    </div>
  );
};

export default AboutSection;