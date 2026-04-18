import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
      "We design AI-powered solutions for operational, analytical, and decision-making challenges — from fraud detection to commercial analytics.",
  },
  {
    icon: FaCloud,
    title: "Intelligent Platforms",
    description:
      "We build scalable platforms that unify your data, automation logic, and AI capabilities into a single business experience.",
  },
  {
    icon: FaRobot,
    title: "AI Business Agents",
    description:
      "We create intelligent agents that capture requirements, validate data, surface insights, and support workflow execution.",
  },
  {
    icon: FaChartLine,
    title: "Product Accelerators",
    description:
      "We use modular architectures to reduce build time, lower costs, and accelerate deployment.",
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
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0e1231]">
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="heading-primary-service text-white mb-4">
            What We Build
          </h1>

          <p className="Paragraph text-gray-400 mx-auto max-w-2xl">
            We specialize in four areas — each designed to solve a distinct category of business problem.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full rounded-2xl bg-[#0e1231] p-6 sm:p-8 
               backdrop-blur-xl 
              transition-all duration-300 
              group-hover:shadow-sm ">

                {/* Top Gradient Line */}
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full"></div>

                {/* Title */}
                <h3 className="card-title-service mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="card-desc-service leading-relaxed text-gray-300">
                  {service.description}
                </p>

                {/* Button */}
                <button className="inline-flex items-center gap-2 mt-4 text-cyan-400 font-medium hover:gap-3 transition-all">
                  More Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 
                bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                transition-all duration-700 group-hover:w-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex pt-10 justify-center sm:justify-end">
          <button className="flex items-center gap-2 bg-[#ff3366] text-white px-6 py-3 rounded-md shadow-md hover:scale-105 transition">
            Explore Solutions <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;