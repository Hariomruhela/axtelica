import React from 'react'
import { motion } from "framer-motion";
// import IndustryMatrix from '../components/IndustryMatrix';
// import ComparisonTable from '../components/ComparisonTable';
// import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import InsightsPagSection from '../components/InsightsPagSection';

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
         className="
    relative flex items-center justify-center
    py-12 sm:py-12 lg:py-16
    h-[350px] w-full overflow-hidden

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
            className="relative z-10 w-full max-w-[1400px] mt-16 pt-2 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
          >
            <h2 className="text-[clamp(28px,5vw,48px)] font-poppins font-medium mb-4 text-center">Insights</h2>
            <h1 className="text-[clamp(28px,5vw,42px)]  font-poppins text-white text-center max-w-4xl mx-auto leading-tight">
                   AML problems Infinisight solves today
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
       
      <InsightsPagSection/>
      {/* <IndustryMatrix/> */}
      {/* <ComparisonTable/> */}
      {/* <CTASection/> */}
      <FAQ/>
      <Footer/>
      </div>
  )
}

export default InsightsPage