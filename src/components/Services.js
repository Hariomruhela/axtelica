import { motion } from "framer-motion";
import { ArrowRight ,ArrowUpRight } from "lucide-react";
import {
  FaDatabase,
  FaCloud,
  FaRobot,
  FaChartLine,
  
} from "react-icons/fa";

const services = [
  {
    icon: FaDatabase,
    title: "AI Business Solutions",
    description:
      "We design AI-powered solutions for operational, analytical, and decision-making challenges — from fraud detection to commercial analytics. Each solution is scoped around your specific business problem, not a template.",
  },
  {
    icon: FaCloud,
    title: "Intelligent Platforms",
    description:
      "We build scalable platforms that unify your data, automation logic, and AI capabilities into a single business experience — so your teams stop switching between tools and start making decisions.",
  },
  {
    icon: FaRobot,
    title: "AI Business Agents",
    description:
      "We create intelligent agents that go beyond question-answering. They capture requirements, validate data, surface insights, and support workflow execution — functioning as digital colleagues inside your existing processes.",
  },
  {
    icon: FaChartLine,
    title: "Product Accelerators",
    description:
      "We use reusable components and modular architectures to reduce build time, lower costs, and accelerate deployment. What takes others months, we deliver in weeks.",
  },
  // {
  //   icon: FaRocket,
  //   title: "Real-Time Operational Visibility",
  //   description:
  //     "Monitor performance, detect anomalies, and respond to issues before they escalate — with live intelligence across your critical business operations. From KPI dashboards to automated alerts, visibility becomes a competitive advantage.",
  // },
  // {
  //   icon: FaIndustry,
  //   title: "Digital Transformation",
  //   description:
  //     "Strategic consulting to align your technology investments with long-term business objectives",
  // },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Services = () => {
  return (
    <section className="py-10 bg-[#0e1231]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="heading-primary-service text-white mb-4">
           What We Build
          </h1>

          <p className="Paragraph text-gray-400 mx-auto">
           We specialize in four areas — each designed to solve a distinct category of business problem.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {services.map((service, i) => (
           <motion.div
  key={service.title}
  custom={i}
  initial="hidden"
  whileInView="visible"
  whileHover={{ scale: 1.05 }}
  viewport={{ once: true }}
  variants={fadeUp}
  className="group"
>
  {/* 🔥 Gradient Top Border Wrapper */}
  <div className="rounded-2xl ">
    
    {/* Inner Card */}
    <div className="rounded-2xl bg-[#0e1231] p-6 h-[270px] 
    backdrop-blur-xl transition-all duration-300 
    group-hover:shadow-lg group-hover:shadow-cyan-500/10">
      
      {/* Top Gradient Line (ONLY TOP) */}
      <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-10 rounded-full"></div>

      {/* Icon */}
      {/* <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-5 
      group-hover:bg-cyan-500/10 transition">
        <service.icon className="w-12 h-12 text-cyan-400" />
      </div> */}

      {/* Title */}
      <h3 className="card-title-service ">
        {service.title}
      </h3>

      {/* Description */}
      <p className="card-desc-service leading-normal">
        {service.description}
      </p>
      

      {/* Button */}
      <button className="inline-flex items-center gap-2 mt-2 mb-1 text-cyan-400 font-medium hover:gap-3 transition-all">
        Explore Service <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
   {/* 🔥 BOTTOM HOVER LINE (MAIN EFFECT) */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 
      bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
      transition-all duration-700 group-hover:w-full"
    />
  
</motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex pt-5 justify-end">
          <button className=" flex bg-[#ff3366] text-white px-6 py-2 rounded-full shadow-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300">
            Explore Service <ArrowUpRight className="  w-5 h-6"/>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;