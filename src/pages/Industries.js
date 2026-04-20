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
  className="relative py-20 sm:py-24 lg:py-28 bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/assets/hero_banner_new.png')" }}
>
  <div className="absolute inset-0 bg-black/50" />

  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 flex justify-center"
  >
    <h1 className="text-[clamp(28px,5vw,52px)]  font-bold text-white text-center max-w-3xl leading-tight">
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