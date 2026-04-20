import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Decision Intelligence",
    description:
      "Turn fragmented business data into actionable insights, intelligent alerts, and decision support that helps your teams move faster and with greater confidence. Stop waiting for reports — start leading with real-time intelligence.",
  },
  {
    title: "Data Integration & Real-Time Streaming",
    description:
      "Unify data across applications, platforms, and channels with scalable integration and real-time streaming capabilities. Give every team live visibility into the information that matters — and make your data estate AI-ready in the process.",
  },
  {
    title: "Intelligent Automation",
    description:
      "Replace time-consuming manual workflows with AI-led process execution — including document understanding, rule-based routing, and exception handling. Let your people focus on judgment, not repetition.",
  },
  {
    title: "Data Quality & Trust",
    description:
      "Low-confidence data leads to poor decisions. Our data quality solutions validate, monitor, and continuously improve the accuracy and reliability of your business data — so every report, model, and alert is built on ground truth.",
  },
  {
    title: "Real-Time Operational Visibility",
    description:
      "Monitor performance, detect anomalies, and respond to issues before they escalate — with live intelligence across your critical business operations. From KPI dashboards to automated alerts, visibility becomes a competitive advantage.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const SolutionSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0e1231] ">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-white font-poppins text-[clamp(28px,5vw,48px)]  mb-4">
            Solutions That Drive Business Impact
          </h1>

          <p className="text-gray-100 body max-w-2xl mx-auto">
            Built to solve real operational and analytical challenges — not just theoretical use cases.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative overflow-hidden"
            >
              {/* Card */}
              <div className="h-full rounded-2xl bg-[#0e1231] p-6 sm:p-8 
                
                backdrop-blur-xl 
                transition-all duration-300 
                
                group-hover:shadow-lg"
              >
                {/* Top Gradient Line */}
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full"></div>
                    {/* Bottom Hover Line */}
              <div className="absolute top-8 left-0 h-[2px] w-0 
                bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                transition-all duration-700 group-hover:w-full"
              />

                {/* Title */}
                <h3 className="text-white text-2xl font-poppins font-semibold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 body leading-relaxed">
                  {item.description}
                </p>

                {/* CTA */}
                <button className="inline-flex body  items-center gap-2 mt-5 text-cyan-400 font-medium hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;