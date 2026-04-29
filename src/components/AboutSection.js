import React from "react";
import { motion } from "framer-motion";
import TabsSection from "./TabsSection";

// Animations
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
          py-16 sm:py-20 lg:py-24
          min-h-[300px] sm:min-h-[350px] lg:min-h-[450px]
          w-full overflow-hidden
          bg-[linear-gradient(-45deg,#101030,#0F1242,#2558BA,#306BCA)]
          bg-[length:400%_400%]
          animate-gradientFlow
        "
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full max-w-[1400px] mt-10 sm:mt-14 lg:mt-16 mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-[clamp(24px,5vw,48px)] font-bold text-white max-w-3xl mx-auto leading-tight tracking-wide drop-shadow-[0_0_20px_rgba(48,107,202,0.5)]">
            We Build AI Solutions That Work for Business
          </h1>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-[1400px] mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(20px,4vw,36px)] font-poppins font-semibold mb-4 sm:mb-6">
            About Axtelica
          </h2>

          <p className="text-sm sm:text-base lg:text-lg font-poppins text-gray-600 leading-relaxed">
            Axtelica delivers <b>AI-powered solutions</b> designed to boost customer growth, enhance productivity, and optimize costs. Our expertise in analytics, cloud, and digital transformation enables businesses to achieve sustainable success in today’s fast-evolving digital landscape.
            <br /><br />
            We are an <b>AI Solutions Builder</b> focused on creating smart platforms, business-ready products, and intelligent agents for modern enterprises. Instead of traditional service models, we build practical, scalable solutions that solve real business problems.
            At Axtelica, we help organizations:
          </p>

          <ul className="space-y-3 text-gray-700 mt-4">
            {[
              "Improve operational efficiency",
              "Make faster, data-driven decisions",
              "Accelerate business outcomes",
            ].map((item, i) => (
              <li key={i} className="text-sm sm:text-base lg:text-lg font-poppins flex gap-3">
                <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm sm:text-base lg:text-lg font-poppins text-gray-600 leading-relaxed">
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
          className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto"
        />
      </section>

      {/* MISSION */}
      <section className="max-w-[1400px] mx-auto text-center py-8 sm:py-12 lg:py-16 px-4">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[clamp(24px,5vw,48px)] font-poppins font-bold mb-8 sm:mb-12"
        >
          Our Mission
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gray-100 p-4 sm:p-6 rounded-xl flex flex-col items-center"
        >
          <p className="text-gray-600 font-poppins max-w-4xl mx-auto text-base sm:text-lg lg:text-xl mt-2 leading-relaxed">
            To empower organizations with practical, scalable AI solutions that simplify complexity, enhance productivity, and unlock new opportunities.
            <br />
            We aim to bridge the gap between advanced technology and real-world business needs by delivering solutions that are not just innovative—but truly usable and impactful.
          </p>
        </motion.div>
      </section>

      {/* VISION */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4 text-center">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[clamp(24px,5vw,48px)] font-poppins font-bold mb-4"
        >
          Our Vision
        </motion.h2>

        <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-poppins max-w-5xl mx-auto mb-10 leading-relaxed">
          To become a global leader in AI-driven solutions by transforming how businesses use data, automation, and intelligence to create meaningful impact, sustainable growth, and smarter decision-making.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left border border-gray-100"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-poppins font-semibold text-gray-900 mb-4">
              Enhance Productivity
            </h3>

            <p className="text-sm sm:text-base lg:text-lg font-poppins text-gray-600 leading-relaxed">
              Provide cutting-edge digital tools and tailored strategies that streamline operations, enhance efficiency, and maximize productivity across every aspect of our clients' businesses.
            </p>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left border border-gray-100"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-poppins font-semibold text-gray-900 mb-4">
              Optimize Costs
            </h3>

            <p className="text-sm sm:text-base lg:text-lg font-poppins text-gray-600 leading-relaxed">
              Deliver scalable, cost-effective solutions that use AI and advanced analytics to optimize performance, reduce operational costs, and ensure long-term profitability for our clients.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FINAL */}
      <TabsSection />

    </div>
  );
};

export default AboutSection;