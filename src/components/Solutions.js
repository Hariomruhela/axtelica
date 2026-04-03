import { motion } from "framer-motion";
import { Database, Cloud, Zap, Shield } from "lucide-react";

const solutions = [
  {
    title: "Real-Time Data Warehousing",
    desc: "Build lightning-fast analytics systems with real-time data processing.",
    badge: "50ms Latency",
    icon: Database,
    col:"col-span-2",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Cloud Migration Frameworks",
    desc: "Seamlessly migrate legacy systems to scalable cloud environments.",
    badge: "100% Uptime",
    icon: Cloud,
    col:"col-span-1",
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "AI Workflow Automation",
    desc: "Automate repetitive tasks using AI-powered intelligent workflows.",
    badge: "3x Efficiency",
    icon: Zap,
    col:"col-span-1",
    color: "from-yellow-500 to-orange-400",
  },
  {
    title: "Data Governance & Security",
    desc: "Ensure compliance, privacy, and enterprise-grade data protection.",
    badge: "SOC2 Compliant",
    icon: Shield,
    col:"col-span-2",
    color: "from-purple-500 to-pink-400",
  },
];

const Solutions = () => {
  return (
    <section className="py-24 bg-[#11054A]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Scalable, secure, and AI-driven solutions designed for modern enterprises.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:shadow-lg hover:shadow-cyan-500/10 transition-all ${item.col}`}
            >
              
              {/* Badge */}
              <span className="absolute top-4 right-4 text-sm px-3 py-1 rounded-full bg-white/10 text-cyan-400">
                {item.badge}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;