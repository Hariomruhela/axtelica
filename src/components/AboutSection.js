import React from "react";
import { motion } from "framer-motion";
import TabsSection from "./TabsSection";

const missionData = [
  {
    title: "Empowering smarter",
    desc: "data-driven enterprises",
    icon: "/assets/empower.png",
  },
  {
    title: "business decisions through",
    desc: "digital transformation from all angles",
    icon: "/assets/support.png",
  },
  {
    title: "AI-powered data",
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
        className="relative py-20 sm:py-24 lg:py-28 bg-cover bg-center "
        style={{ backgroundImage: "url('/assets/hero_banner_new.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full max-w-[1400px]  mt-12 mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          {/* <p className="uppercase tracking-widest text-sm text-white mb-4">
            Why Axtelica
          </p> */}

          <h1 className="text-[clamp(28px,5vw,56px)] font-poppins font-bold text-white max-w-3xl mx-auto text-center leading-tight">
  We Build AI Solutions That Work for Business
</h1>

          {/* <p className="mt-6 text-gray-200 text-lg font-poppins max-w-4xl">
           Axtelica is an AI Solutions Builder focused on creating smart platforms, business-ready products, and intelligent agents for modern enterprises. We help organizations move beyond traditional delivery models by building practical solutions that improve efficiency, strengthen decision-making, and accelerate business outcomes.
          </p> */}
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
          <h2 className="text-[clamp(22px,4vw,36px)] font-poppins font-semibold mb-6">
            AI-Driven Data for Smarter Insights
          </h2>
          <p className="text-lg font-poppins text-gray-600">Axtelica is a leader in AI-powered technology
and data solutions, driving innovation and
excellence. From next-gen analytics to cloud
services and digital transformation, we
empower businesses to overcome challenges
and thrive. More than a provider, we are a
strategic partner delivering scalable solutions
that foster growth, optimize performance, and
fuel long-term success.</p>

          {/* <ul className="space-y-3 text-gray-700">
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
          </ul> */}

          <p className="mt-6 text-lg font-poppins text-gray-600">
            Axtelica delivers AI-powered solutions designed to boost customer growth, enhance productivity, and
optimize costs. Our expertise in analytics, cloud, and digital transformation helps businesses achieve

sustainable success in the digital age.
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
          className="text-[clamp(26px,5vw,48px)] font-poppins font-bold mb-12"
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

              <h3 className="text-red-500 font-semibold  font-poppins text-lg">
                {item.title}
              </h3>

              <p className="text-gray-600 font-poppins  text-lg mt-2">
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
          className="mt-12 text-gray-700 text-lg font-poppins max-w-2xl mx-auto"
        >
          To empower businesses with innovative technology solutions that drive
          efficiency and growth.
        </motion.p>
      </section>

      {/* ABOUT DETAIL */}
     <section className="max-w-7xl mx-auto py-16 px-4 text-center">
  
  {/* Vission*/}
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="text-[clamp(26px,5vw,48px)] font-poppins font-bold mb-2"
  >
    Our Vision
  </motion.h2>

  <p className="text-gray-700 text-lg font-poppins max-w-5xl mx-auto mb-10" >Leverage AI-powered technology and data solutions to help
our clients drive sustainable business growth, unlock new
opportunities, and stay competitive in the digital landscape.</p>

  {/* Cards */}
  <div className="grid lg:grid-cols-2  gap-8">

    {/* Card 1 */}
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left border border-gray-100"
    >
      <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">
        Enhance Productivity
      </h3>

      <p className="text-gray-600 text-lg font-poppins leading-relaxed mb-6">
        Provide cutting-edge digital tools and tailored strategies that streamline operations, enhance efficiency, and maximize productivity across every aspect of our clients' businesses.
      </p>

      {/* <button className="bg-purple-700 text-white px-6 py-3 rounded-full hover:scale-105 hover:bg-purple-800 transition">
        Meet us →
      </button> */}
    </motion.div>

    {/* Card 2 */}
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left border border-gray-100"
    >
      <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">
        Optimize Costs
      </h3>

      <p className="text-gray-600 text-lg font-poppins leading-relaxed">
        Deliver scalable, cost-effective solutions that use AI and advanced analytics to optimize performance, reduce operational costs, and ensure long-term profitability for our clients.
      </p>
    </motion.div>

  </div>
</section>
      {/* FINAL */}
      <TabsSection/>

      {/* FOOT TEXT
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center py-16 px-4"
      >
         <p className="max-w-2xl mx-auto text-gray-600">
          Axtelica — Intelligent platforms, business-ready agents, and AI solutions built for enterprises that run on data.

        </p> 
      </motion.section> */}

    </div>
  );
};

export default AboutSection;