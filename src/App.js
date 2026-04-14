import {  Route, Routes } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NavbarDemo from "./components/NavbarDemo";


function App() {
  return (
    
    <div className="text-white">
      <NavbarDemo/>
     <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
     <Chatbot/>

     <Routes>
        <Route path="/product/:productId" element={<Product/>} />
      </Routes>
    </div>
    
  
  );
}

export default App;
