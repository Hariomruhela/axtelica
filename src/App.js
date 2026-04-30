import {  Route, Routes } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NavbarDemo from "./components/NavbarDemo";
import About from "./pages/About";
import Industries from "./pages/Industries";
import InsightsPage from "./pages/InsightsPage";
import ContactPage from "./pages/ContactPage";
import Solution from "./pages/Solution";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import BlogDetail from "./components/BlogDetail";
import DemoLanding from "./components/DemoLanding";
import CaseStudies from "./pages/CaseStudies";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    
    <div className="text-white">
      <ScrollToTop/>
      <NavbarDemo/>
      <Toaster position="top-right" />
     <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
     <Chatbot/>

     <Routes>
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<BlogDetail />} />
         <Route path="/solution" element={<Solution/>} />
          <Route path="/demo" element={<DemoLanding />} />
          <Route path="/casestudies" element={<CaseStudies />} />
      </Routes>
    </div>
    
  
  );
}

export default App;
