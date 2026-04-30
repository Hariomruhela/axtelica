import { motion } from "framer-motion";

const IndustrySection = () => {
  const industries = [
    {
      title: "Banking and Financial Services",
      desc: "Fraud intelligence, monitoring, standardization, and real-time insights.",
    },
    {
      title: "Insurance",
      desc: "Claims automation, validation workflows, and operational visibility.",
    },
    {
      title: "Pharma and Life Sciences",
      desc: "Data quality, reconciliation, reporting, and commercial analytics.",
    },
    {
      title: "Enterprise Operations",
      desc: "Workflow intelligence, requirement capture, decision support, and productivity solutions.",
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-[clamp(22px,5vw,48px)] text-black  mb-8 sm:mb-10 lg:mb-12">
          Industries We Serve
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl 
              border border-gray-200 hover:border-black/20 
              transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-poppins mb-2 sm:mb-3 text-black">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base md:text-lg font-poppins text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustrySection;