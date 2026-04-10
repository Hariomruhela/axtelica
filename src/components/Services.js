import { motion } from "framer-motion";
import { ArrowRight ,ArrowUpRight } from "lucide-react";
import {
  FaDatabase,
  FaCloud,
  FaRobot,
  FaChartLine,
  FaRocket,
  FaIndustry,
} from "react-icons/fa";

const services = [
  {
    icon: FaDatabase,
    title: "Data Integration & Engineering",
    description:
      "Build robust ETL/ELT pipelines and centralized data lakes that ensure high data quality and accessibility",
  },
  {
    icon: FaCloud,
    title: "Cloud Data Platforms",
    description:
      "Migrate and optimize your infrastructure on AWS, Azure, or GCP for infinite scalability and performance.",
  },
  {
    icon: FaRobot,
    title: "AI & Automation Solutions",
    description:
      "Deploy custom machine learning models and intelligent agents to automate complex business workflows.",
  },
  {
    icon: FaChartLine,
    title: "Business Intelligence",
    description:
      "Transform complex datasets into interactive, real-time dashboards for executive decision-making.",
  },
  {
    icon: FaRocket,
    title: "Solution Accelerators",
    description:
      "Pre-built frameworks and industry-specific data models to reduce time-to-market by up to 60%.",
  },
  {
    icon: FaIndustry,
    title: "Digital Transformation",
    description:
      "Strategic consulting to align your technology investments with long-term business objectives",
  },
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
            Innovation Driven Data & Cloud Solutions
          </h1>

          <p className="Paragraph text-gray-400 mx-auto">
            We provide end-to-end engineering services to modernize your technology stack and accelerate digital transformation
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
    <div className="rounded-2xl bg-[#0e1231] p-6 h-[250px] 
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
      <h3 className="card-title-service">
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