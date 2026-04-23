import React from 'react'
// import Navbar from '../components/Navbar'
// import Hero from '../components/Hero'
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
import Banner from '../components/Banner'
// import CapabilityGrid from '../components/ CapabilityGrid'
// import AxtelicaBanner from '../components/AxtelicaBanner'
// import Hero from '../components/Hero'
// import NavbarDemo from '../components/NavbarDemo'

const Home = () => {
  return (
    <div className="min-h-screen bg-white" >
        {/* <Navbar/> */}
        {/* <NavbarDemo/> */}
        {/* <Hero/> */}
        
        {/* <TechStack/> */}



       
{/* <AxtelicaBanner/> */}
<Banner/>
<GradientBanner/>
        <WhyChoose/>
        <Services/>
        {/* <CapabilityGrid/> */}
        <AIHub/>
        <CTA/>
        <Insights/>
        <FAQ/>
        {/* <Solutions/>
        <WhyChoose/> */}
        
        
        <Footer/>
    </div>
  )
}

export default Home