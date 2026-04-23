import { motion } from "framer-motion";

const CTA = () => {
  return (<div className=" max-w-[1400px]  mx-auto px-6 pb-10 ">
    <section
      className="relative py-16 sm:py-20 lg:py-20 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/ready_transform_banner.png')",
      }}
    >
      {/* 🔥 Overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content */}
        <div className="flex justify-center pl-12 lg:justify-start">
          
          <div className="max-w-[100%] text-center ">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              
              {/* Heading */}
              <div className="leading-tight text-left">
                <h2 className="text-[clamp(28px,5vw,56px)]  font-semibold text-white">
                  Looking for an AI Solutions
                </h2>

                <h2 className="text-[clamp(28px,5vw,56px)] font-semibold text-gradient mb-4">
                  Builder for your Business?
                </h2>
              </div>

              {/* Description */}
              <p className="text-white text-sm sm:text-base md:text-lg font-poppins text-left mt-4 mb-6 max-w-[100%] mx-auto lg:ml-auto">
                Axtelica builds practical AI solutions, intelligent platform, and business-ready <br/> agents that help organisations solve real problems and create measurable value.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                
                <button className=" text-lg font-poppins bg-purple-600 text-white px-6 py-3 rounded-md shadow-md hover:scale-105 transition">
                  Let's build something smarter
                </button>

                {/* <button className="border border-white/30 text-white py-3 px-6 rounded-full hover:bg-white/10 transition">
                  Book Consultation
                </button> */}

              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default CTA;