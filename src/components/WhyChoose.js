import { motion } from "framer-motion";
import { Database, Cloud, Bot, Zap } from "lucide-react";

const features = [
  { icon: Database, title: "Deep Data Expertise", description: "Decades of combined experience in complex data engineering." },
  { icon: Cloud, title: "Cloud Native", description: "Architectures built specifically for modern cloud environments." },
  { icon: Bot, title: "AI Driven", description: "Machine learning embedded into the core of our solutions." },
  { icon: Zap, title: "Cost Optimized", description: "FinOps practices that maximize ROI on cloud spend." },
];

const WhyChoose = () => {
  return (
    <section
    style={{
    backgroundImage: "url('/assets/why_axtelica_BG.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
     className="py-16 ">
      <div className="max-w-[1650px] pl-4 mx-auto leading-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" mb-16"
        >
          <h2 className="heading-primary-about text-white">Why Choose Axtelica</h2>
          <p className="heading-secondary  text-white mt-0 max-w-5xl ">
            We don't just implement technology, we engineer competitive advantages. Our approach combines deep technical expertise with business acumen.
          </p>
        </motion.div></div>
<div className="max-w-[1650px] mx-auto ">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative rounded-2xl p-[1px] bg-gradient-to-b from-purple-500 to-gray-400"
>
  <div className="rounded-2xl bg-[#070730] backdrop-blur-xl overflow-hidden">
    
    {/* Your existing content */}
    <div className="flex  min-h-[320px] w-full">
      
      {/* Features */}
      <div className="grid grid-cols-4  gap-y-10 p-5 relative z-10">
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-1 justify-center px-5"
          >
            <h3 className="card-title text-foreground">{feat.title}</h3>
            <p className="card-desc leading-tight text-white  max-w-[75%]">{feat.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Blob */}
      <div className="relative hidden lg:block  top-0 right-5  ">
        {/* <img className="h-full w-full "
        src="assets/about_img.png " alt="aboutimage"
        /> */}
        {/* <div
          className="absolute right-10 top-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-white/90"
          style={{
            borderRadius: '30% 0% 30% 30% / 50% 0% 40% 50%',
          }}
        /> */}
      </div>

    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
