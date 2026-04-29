import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  FaDatabase,
  FaCloud,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <section className="bg-[#0e1231] py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-white font-bold 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            What We Build
          </h2>

          <p className="text-gray-400 mx-auto max-w-7xl 
          text-sm sm:text-base md:text-lg">
            We specialize in four areas — each designed to solve a distinct category of business problem.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, i) => {
            

            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                variants={fadeUp}
                className="group"
              >
                <div className="h-full flex flex-col justify-between rounded-2xl 
                bg-[#0e1231] p-6 sm:p-8  
                backdrop-blur-md transition-all duration-300">

                  {/* Top Content */}
                  <div>

                    {/* Gradient Line */}
                    <div className="relative mb-5">
                      <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />

                      <div className="absolute top-0 left-0 h-[2px] w-full
                        bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                        origin-left scale-x-0
                        transition-transform duration-700
                        group-hover:scale-x-100"
                      />
                    </div>

                    

                    {/* Title */}
                    <h3 className="text-white font-semibold 
                    text-lg sm:text-xl mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed 
                    text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-6">
                    <button className="inline-flex items-center gap-2 
                    text-cyan-400 text-sm sm:text-base font-medium">
                      More Details 
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <button
            onClick={() => navigate("/solution")}
            className="flex items-center gap-2 
            bg-[#ff3366] text-white px-5 py-3 rounded-md 
            hover:scale-105 transition text-sm sm:text-base"
          >
            Explore Solutions 
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;