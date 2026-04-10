import { motion } from "framer-motion";
import { Database, Zap, Cloud, MessageSquare } from "lucide-react";
// import TechBackground from "./TeckBackground";

const stats = [
  { value: "2,847", label: "Data Pipelines Optimized", icon: Database, color: "from-blue-500 to-blue-600" },
  { value: "1,234+", label: "Automation Workflows Built", icon: Zap, color: "from-yellow-500 to-orange-500" },
  { value: "89+", label: "Cloud Platforms Integrated", icon: Cloud, color: "from-green-500 to-emerald-500" },
  { value: "456+", label: "Global Clients Served", icon: MessageSquare, color: "from-purple-500 to-pink-500" },
];


const Hero = () => {
  return (
    // <TechBackground>

      <section   style={{
    backgroundImage: "url('/assets/hero_banner_new.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className=" flex py-48  justify-center px-6">
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center   ">
            
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-1 px-4 py-2 mb-2 rounded-full bg-white/5 border border-white/10 backdrop-blur">
              {/* SVG Border */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none "
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="calc(100% - 1px)"
      height="calc(100% - 1px)"
      rx="16"
      ry="16"
      className="animated-border"
    />
  </svg>
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">
                  Enterprise Intelligence Platform
                </span>
              </div>

              {/* Heading */}
              <h1 className="H1 leading-tight">
                Empowering <br />
                Businesses With{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  AI, Data & Cloud
                </span>
                <br />
                Innovation
              </h1>

              {/* Description */}
              <p className="text-gray-400 font-poppins text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                We architect scalable data pipelines, deploy predictive AI models,
                and modernize cloud infrastructure.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="text-[16px] font-medium font-['poppins']  bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300">
                  Explore Services
                </button>

                <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
                  Schedule Demo
                </button>
              </div>
            </motion.div>

            {/* RIGHT - STATS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
               <div
  key={stat.label}
  className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
>
  {/* SVG Border */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="calc(100% - 1px)"
      height="calc(100% - 1px)"
      rx="16"
      ry="16"
      className="animated-border"
    />
  </svg>

  {/* Content */}
  <div className="relative z-10">
    <div className="flex justify-between mb-3">
      <span className="text-2xl font-bold text-white">
        {stat.value}
      </span>

      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
        <stat.icon className="w-4 h-4 text-white" />
      </div>
    </div>

    <p className="text-xs text-gray-400">
      {stat.label}
    </p>
  </div>
</div>
              ))}
            </motion.div>

          </div>
        </div>

      </section>

    // </TechBackground>
  );
};

export default Hero;