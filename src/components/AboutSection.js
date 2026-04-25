import React from "react";
import { motion } from "framer-motion";
import TabsSection from "./TabsSection";



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
  className="
    relative flex items-center justify-center
    py-12 sm:py-12 lg:py-16
    h-[450px] w-full overflow-hidden

    bg-[linear-gradient(-45deg,#101030,#0F1242,#2558BA,#306BCA)]
    bg-[length:400%_400%]
    animate-gradientFlow
  "
>
  {/* Grid Overlay */}
  {/* <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

  {/* Content */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="relative z-10 w-full max-w-[1400px] mt-16 pt-2 mx-auto text-center px-4 sm:px-6 lg:px-8"
  >
    <h1 className="text-[clamp(28px,5vw,48px)] font-bold text-white max-w-3xl mx-auto leading-tight tracking-wide uppercase drop-shadow-[0_0_20px_rgba(48,107,202,0.5)]">
      We Build AI Solutions That Work for Business
    </h1>

    {/* <p className="mt-4 text-sm text-white/80 tracking-wider uppercase">
      Home / Services
    </p> */}
  </motion.div>

  {/* Bottom Shape */}
  {/* <div className="absolute bottom-0 w-full leading-none">
    <svg viewBox="0 0 1440 120" className="w-full">
      <path
        d="M0 0L1440 40V120H0V0Z"
        fill="white"
        fillOpacity="0.05"
      />
    </svg>
  </div> */}
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
            About Axtelica
          </h2>
          <p className="text-lg font-poppins text-gray-600">Axtelica delivers <b>AI-powered solutions</b> designed to boost customer growth, enhance productivity, and optimize costs. Our expertise in analytics, cloud, and digital transformation enables businesses to achieve sustainable success in today’s fast-evolving digital landscape.<br/><br></br>
We are an <b>AI Solutions Builder</b> focused on creating smart platforms, business-ready products, and intelligent agents for modern enterprises. Instead of traditional service models, we build practical, scalable solutions that solve real business problems.
At Axtelica, we help organizations:

 
 
</p>

          <ul className="space-y-3 text-gray-700">
            {[
              "Improve operational efficiency ",
              "Make faster, data-driven decisions",
              "Accelerate business outcomes",
              
            ].map((item, i) => (
              <li key={i} className=" text-lg font-poppins flex gap-3">
                <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-lg font-poppins text-gray-600">
            Our approach combines innovation with real-world execution—ensuring that every solution we build delivers measurable impact and long-term value.
          </p>
        </motion.div>

        <motion.img
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          src="/assets/about_img02.png"
          alt="network"
          className="w-[90%]  "
        />
      </section>

      {/* MISSION */}
      <section className="max-w-[1400px] mx-auto text-center py-1 px-4">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[clamp(26px,5vw,48px)] font-poppins font-bold mb-12"
        >
          Our Mission
        </motion.h2>

        <div className="">
          
            <motion.div
              
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.2 }} // 🔥 stagger effect
              className="bg-gray-100 p-6 rounded-xl flex flex-col items-center"
            >
              

              <p className="text-gray-600 font-poppins max-w-4xl mx-auto  text-xl mt-2">
                To empower organizations with practical, scalable AI solutions that simplify complexity, enhance productivity, and unlock new opportunities.<br/>
We aim to bridge the gap between advanced technology and real-world business needs by delivering solutions that are not just innovative—but truly usable and impactful.
              </p>
            </motion.div>
          
        </div>

        
      </section>

      {/* ABOUT DETAIL */}
     <section className="max-w-7xl mx-auto py-16 px-4 text-center">
  
  {/* Vission*/}
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="text-[clamp(26px,5vw,48px)] font-poppins font-bold mb-4"
  >
    Our Vision
  </motion.h2>

  <p className="text-gray-700 text-lg font-poppins max-w-5xl mx-auto mb-10" >To become a global leader in AI-driven solutions by transforming how businesses use data, automation, and intelligence to create meaningful impact, sustainable growth, and smarter decision-making.</p>

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

      <p className="text-gray-600 text-lg font-poppins leading-relaxed mb-10">
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