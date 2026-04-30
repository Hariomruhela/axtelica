import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Solutions",
    description:
      "Purpose-built to solve real operational, analytical, and decision-making problems — not generic demos.",
  },
  {
    title: "Scalable Platforms",
    description:
      "Unified platforms that combine data, automation, and AI so your teams have everything in one place",
  },
  {
    title: "Intelligent Agents",
    description:
      "Business agents that structure work, validate data, surface insights, and execute workflows without manual effort",
  },
  {
    title: "Cost-Smart Delivery",
    description:
      "Modular components and reusable architecture cut build time and reduce overhead — so AI adoption fits your budget",
  },
];

const WhyChoose = () => {
  return (
    <section
      className="bg-white bg-right bg-no-repeat 
      py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: "url('/assets/why_axa.png')",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* Heading */}
          <h2 className="text-black font-bold w-full
          text-[16px] sm:text-xl md:text-xl lg:text-4xl leading-tight">
            Why Organizations Choose Axtelica
          </h2>

          {/* Description */}
          <p className="text-black mt-4 max-w-2xl 
          text-sm sm:text-base md:text-lg leading-relaxed">
            We don't just implement technology; we engineer competitive
            advantages. Our approach combines deep technical expertise with
            business acumen.
          </p>

          {/* Features */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-3 items-start"
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <img
                    src="/assets/arrow_icon.png"
                    alt="arrow"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-black font-semibold 
                  text-base sm:text-lg">
                    {feat.title}
                  </h4>

                  <p className="text-black mt-1 leading-relaxed 
                  text-sm sm:text-base">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE (Optional) */}
        <div className="hidden lg:flex justify-end">
          {/* Optional image */}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;