import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-10">
      <section
        className="relative py-16 sm:py-20 lg:py-20 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/ready_transform_banner.png')",
        }}
      >
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Content */}
          <div className="flex justify-center lg:justify-start lg:pl-12">
            
            <div className="w-full text-center lg:text-left">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                
                {/* Heading */}
                <div className="leading-tight text-center lg:text-left">
                  <h2 className="text-[clamp(22px,5vw,56px)] font-semibold text-white">
                    Looking for an AI Solutions
                  </h2>

                  <h2 className="text-[clamp(22px,5vw,56px)] font-semibold text-gradient mb-4">
                    Builder for your Business?
                  </h2>
                </div>

                {/* Description */}
                <p
                  className="text-white text-sm sm:text-base md:text-lg font-poppins
                             text-center lg:text-left
                             mt-4 mb-6 max-w-md mx-auto lg:mx-0"
                >
                  Axtelica builds practical AI solutions, intelligent platform,
                  and business-ready agents that help organisations solve real
                  problems and create measurable value.
                </p>

                {/* Button */}
                <div
                  className="flex flex-col sm:flex-row gap-4
                             justify-center lg:justify-start
                             items-center lg:items-start"
                >
                  <button
                    onClick={() => navigate("/demo")}
                    className="w-full sm:w-auto text-sm sm:text-base lg:text-lg font-poppins
                               bg-purple-600 text-white px-5 sm:px-6 py-3
                               rounded-md shadow-md hover:scale-105 transition"
                  >
                    Let's build something smarter
                  </button>
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