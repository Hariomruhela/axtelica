import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const features = [
  {
    icon: ChevronRight,
    title: "AI-Powered Solutions",
    description:
      "Purpose-built to solve real operational, analytical, and decision-making problems — not generic demos.",
  },
  {
    icon: ChevronRight,
    title: "Scalable Platforms",
    description:
      "Unified platforms that combine data, automation, and AI so your teams have everything in one place",
  },
  {
    icon: ChevronRight,
    title: "Intelligent Agents",
    description:
      "Business agents that structure work, validate data, surface insights, and execute workflows without manual effort",
  },
  {
    icon: ChevronRight,
    title: "Cost-Smart Delivery",
    description:
      "Modular components and reusable architecture cut build time and reduce overhead — so AI adoption fits your budget",
  },
];

const WhyChoose = () => {
  return (
    <section
    style={{
        backgroundImage: "url('/assets/why_axa.png ')",
      }}
       className="bg-white py-4 md:py-8 sm:py-4 lg:py-12 bg-right bg-no-repeat h-[800px]">
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 ">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* Heading */}
          <h2 className="heading-primary-about text-black">
            Why Organizations Choose Axtelica
          </h2>

          {/* Description */}
          <p className="heading-secondary text-black mt-4 py-2 max-w-2xl">
            We don't just implement technology; we engineer competitive
            advantages. Our approach combines deep technical expertise with
            business acumen.
          </p>

          {/* Features Grid */}
          <div className="mt-12 grid sm:grid-cols-2 gap-8 sm:gap-10">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-3 items-start"
              >
                {/* Icon */}
                <div className="text-gray-500 mt-1 flex-shrink-0">
                  <img
                    src="/assets/arrow_icon.png"
                    alt="arrow"
                    className="w-5 h-5"
                  />
                </div>

                {/* Text */}
                <div>
                  <h4 className="card-title text-black">
                    {feat.title}
                  </h4>
                  <p className="card-desc text-black mt-1 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          {/* <img
            src="/assets/why_ch_img.jpg"
            alt="why choose"
            className="w-full max-w-[500px] md:max-w-[550px] lg:max-w-[600px] h-auto object-contain"
          /> */}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;