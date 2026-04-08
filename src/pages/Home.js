import React from 'react'
// import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
// import Solutions from '../components/Solutions'
import WhyChoose from '../components/WhyChoose'
// import TechStack from '../components/TechStack'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import GradientBanner from '../components/GradientBanner'
import AIHub from '../components/AIHub'
import Insights from '../components/Insights'
import FAQ from '../components/FAQ'
import NavbarDemo from '../components/NavbarDemo'

const Home = () => {
  return (
    <div className="min-h-screen bg-white" >
        {/* <Navbar/> */}
        <NavbarDemo/>
        <Hero/>
        <GradientBanner/>
        {/* <TechStack/> */}
        <WhyChoose/>
        <Services/>
        <AIHub/>
        <Insights/>
        <FAQ/>
        {/* <Solutions/>
        <WhyChoose/> */}
        
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Home