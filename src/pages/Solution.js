import React from 'react'
import { motion } from "framer-motion";
import SolutionSection from '../components/SolutionSection';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
const Solution = () => {
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
  return (
    <div>
        <section
          className="
    relative flex items-center justify-center
    py-12 sm:py-12 lg:py-16
    h-[350px] w-full overflow-hidden

    bg-[linear-gradient(-45deg,#101030,#0F1242,#2558BA,#306BCA)]
    bg-[length:400%_400%]
    animate-gradientFlow
  "
        >
          <div className="absolute inset-0 " />
        
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative z-10 w-full mt-16 pt-2 max-w-[1400px] px-4 sm:px-6 lg:px-8 flex justify-center"
          >
            <h1 className="text-[clamp(28px,5vw,48px)]  font-bold text-white text-center max-w-3xl leading-tight">
                   AI Solutions Built for Real Business Impact
            </h1>
          </motion.div>
           {/* Bottom Shape */}
  {/* <div className="absolute bottom-0 w-full leading-none">
    <svg viewBox="0 0 1440 120" className="w-full">
      <path
        d="M0 0L1440 40V120H0V0Z"
        fill="white"
        fillOpacity="0.05"
      />
    </svg>
  </div> */}
        </section>
        <SolutionSection/>
        <CTA/>
        <Footer/>
        </div>
  )
}

export default Solution