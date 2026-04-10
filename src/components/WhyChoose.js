import { motion } from "framer-motion";
 import { ChevronRight } from "lucide-react";

const features = [
  {
    icon: ChevronRight,
    title: "Deep Data Expertise",
    description:
      "Decades of combined experience in complex data engineering.",
  },
  {
    icon: ChevronRight,
    title: "AI Driven",
    description:
      "Machine learning embedded into the core of our solutions.",
  },
  {
    icon: ChevronRight,
    title: "Cloud Native",
    description:
      "Architectures built specifically for modern cloud environments.",
  },
  {
    icon: ChevronRight,
    title: "Cost Optimized",
    description:
      "FinOps practices that maximize ROI on cloud spend.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-white py-6">
      
      <div className="max-w-[1650px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="heading-primary-about text-black">
            Why Choose Axtelica 
          </h2>

          {/* Description */}
          <p className="heading-secondary  text-black mt-1 max-w-4xl">
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