import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 mt-10 overflow-hidden bg-no-repeat bg-cover"
     style={{
        backgroundImage: "url('/assets/ready_to_transform_bg.png')",
      }}>
  
  <div className="max-w-[1650px] mx-auto px-6 flex justify-end">
    
    {/* Right aligned content box */}
    <div className="max-w-6xl text-right">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        
        {/* Heading */}
        <div className="leading-tight">
          <h2 className="text-[60px] font-medium font-poppins text-white">
            Ready to Transform
          </h2>
          <h2 className="text-[60px] font-medium font-poppins text-gradient mb-4">
            Your Data Strategy?
          </h2>
        </div>

        {/* Description */}
        <p className="text-white text-[16px] font-medium font-poppins mb-6">
          Partner with Axtelica to build the intelligent infrastructure your enterprise needs to thrive in the AI era.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-end gap-4">
          <button className="text-[16px] font-medium font-poppins bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300">
            Start a Project
          </button>

          <button className="text-[16px] font-medium font-poppins border border-white/30 text-white py-2 px-6 rounded-full hover:bg-white/10 transition">
            Book Consultation
          </button>
        </div>

      </motion.div>

    </div>
  </div>

</section>
  );
};

export default CTA;
