import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-r from-purple-600  to-blue-500" >
      {/* Glow effects */}
      

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[60px] font-medium font-poppins  mb-2">
            Ready to Transform Your
          </h2>
          <h2 className="text-[60px] font-medium font-poppins text-gradient mb-8">
            Data Strategy?
          </h2>
          <p className="text-white text-[16px] font-medium font-poppins  mb-4 ">partner with axtelica to build the Intelligent Infrastructure your enterprise needs to thrive in the AI era.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className=" text-[16px] font-medium font-poppins  bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300">Start a Projects</button>
            <button className=" text-[16px] font-medium font-poppins outline-button bg-gray-900 text-white py-2 px-6 rounded-full shadow-md ">Book consultation</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
