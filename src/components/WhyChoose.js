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
    <section className="bg-white py-6">
      
      <div className="max-w-[1650px] mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="heading-primary-about text-black">
            Why Organizations Choose Axtelica 
          </h2>

          {/* Description */}
          <p className="heading-secondary  text-black mt-1 max-w-5xl">
            We don't just implement technology; we engineer competitive
            advantages. Our approach combines deep technical expertise with
            business acumen.
          </p>

          {/* Features Grid */}
          <div className="mt-20 grid sm:grid-cols-2 gap-14">
            {features.map((feat, i) => {
              // const Icon = feat.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  {/* Arrow / Icon */}
                  <div className="text-gray-500 mt-1 pt-1">
                    <img src="assets/arrow_icon.png" alt="arrow_icon.png"/>
                    {/* <Icon size={28} /> */}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="card-title text-black">
                      {feat.title}
                    </h4>
                    <p className="card-desc leading-tight text-black  max-w-[80%]">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/assets/why_ch_img.jpg" // 👈 replace with your image
            alt="why choose"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;