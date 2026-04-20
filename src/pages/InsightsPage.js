import React from 'react'
import { motion } from "framer-motion";
import IndustryMatrix from '../components/IndustryMatrix';
import ComparisonTable from '../components/ComparisonTable';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const InsightsPage = () => {
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
          <div className="absolute inset-0 bg-black/50" />
        
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 flex justify-center"
          >
            <h1 className="text-[clamp(28px,5vw,56px)] font-poppins font-bold text-white text-center max-w-3xl leading-tight">
                   AML problems Infinisight solves today
            </h1>
          </motion.div>
        </section>
       
      
      <IndustryMatrix/>
      <ComparisonTable/>
      <CTASection/>
      <FAQ/>
      <Footer/>
      </div>
  )
}

export default InsightsPage