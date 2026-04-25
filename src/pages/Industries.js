import React from 'react'
import { motion } from "framer-motion";
import IndustrySection from '../components/IndustrySection';
import Insights from '../components/Insights';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Industries = () => {
    // 🔥 Reusable animation variants
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
          {/* HERO */}
     <section
   className="
    relative flex items-center justify-center
    py-12 sm:py-12 lg:py-16
    h-[450px] w-full overflow-hidden

    bg-[linear-gradient(-45deg,#101030,#0F1242,#2558BA,#306BCA)]
    bg-[length:400%_400%]
    animate-gradientFlow
  "
>
  {/* <div className="absolute inset-0 bg-black/50" /> */}

  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="relative z-10 w-full max-w-[1400px] mt-16 pt-2 px-4 sm:px-6 lg:px-8 flex justify-center"
  >
    <h1 className="text-[clamp(28px,5vw,48px)]  font-bold text-white text-center max-w-3xl leading-tight">
      Built for Business-Critical Challenges
    </h1>
  </motion.div>
  
</section>
      <IndustrySection/>
      <Insights/>
      <CTA/>
      <FAQ/>
      <Footer/>
    </div>
    
  )
}

export default Industries