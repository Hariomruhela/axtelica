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
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl text-black font-semibold mb-12">
          Industries We Serve
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <h3 className="text-2xl  font-poppins  mb-3 text-black group-hover:text-black transition">
                {item.title}
              </h3>

              <p className=" text-lg font-poppins text-gray-600 leading-relaxed ">
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