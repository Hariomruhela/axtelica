import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/ready_to_transform_bg.png')",
      }}
    >
      {/* 🔥 Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content */}
        <div className="flex justify-center lg:justify-end">
          
          <div className="max-w-2xl text-center lg:text-right">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              
              {/* Heading */}
              <div className="leading-tight">
                <h2 className="text-[clamp(28px,5vw,56px)] font-semibold text-white">
                  Ready to Transform
                </h2>

                <h2 className="text-[clamp(28px,5vw,56px)] font-semibold text-gradient mb-4">
                  Your Data Strategy?
                </h2>
              </div>

              {/* Description */}
              <p className="text-white text-sm sm:text-base md:text-lg mt-4 mb-6 max-w-xl mx-auto lg:ml-auto">
                Partner with Axtelica to build the intelligent infrastructure your enterprise needs to thrive in the AI era.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
                  Start a Project
                </button>

                <button className="border border-white/30 text-white py-3 px-6 rounded-full hover:bg-white/10 transition">
                  Book Consultation
                </button>

              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;