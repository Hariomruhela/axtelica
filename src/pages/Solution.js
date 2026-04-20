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
          className="relative py-20 sm:py-24 lg:py-32 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/assets/hero_banner_new.png')" }}
        >
          <div className="absolute inset-0 " />
        
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 flex justify-center"
          >
            <h1 className="text-[clamp(28px,5vw,56px)] font-poppins font-bold text-white text-center max-w-3xl leading-tight">
                   AI Solutions Built for Real Business Impact
            </h1>
          </motion.div>
        </section>
        <SolutionSection/>
        <CTA/>
        <Footer/>
        </div>
  )
}

export default Solution