import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative border-t  bg-cover bg-center"
      style={{ backgroundImage: "url('/inner_banner.jpg')", backgroundSize: "cover", }}
    >
      {/* 🔥 Overlay */}
      {/* <div className="absolute inset-0 bg-black/80" /> */}

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-4 py-16">
        
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-9">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-base sm:text-lg text-gray-200 mb-6 max-w-md">
              Axtelica is an AI Solutions Builder creating<br/> smart platforms. intelligent agents, and<br/> business-ready solutions for mordern<br/> enterprises.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-4">
              {[FaXTwitter, FaLinkedin, FaInstagram, FaFacebookF].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="text-gray-300 hover:text-white transition"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Links */}
          {[
             {
              title: "Get Started",
              links: [
                { name:" Get a Demo" },
                { name: "Product Tour"},
                { name: "why Axtelica"},
                { name: "Pricing & Subscription"},
                ],
            },
            {
              title: "AI Innovation Hub",
              links: [
                { name: "Axtream" },
                 { name:" Infinisight" },
                { name: "Inteligent AI Agents"},
                
                
              ],
            },
            {
              title: "Company",
              links: [
                { name: "About Us", path: "/about" },
                { name: "Why  Axtelica", path: "/why" },
                { name: "Leadership ", path: "/team" },
                { name: "Contact Us", path: "/contact" }, // ✅ clean
              ],
            },
            // {
            //   title: "Solution",
            //   links: [
            //     { name:" Data Engineering" },
            //     { name: "Cloud Platforms"},
            //     { name: "AI Solutions" },
            //     { name: "Business Intelligence" }, // ✅ clean
                
            //   ],
            // },
            
           
            {
              title: "Resources",
              links: [{ name:" Blogs", path: "/blog" },
                { name: "Articles"},
                { name: "Case Studies"},
                

                { name: "Whitepapers" },
                { name: "Reports"},
                { name: "News and Events"},
                

              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-left font-semibold mb-4 text-xl font-poppins sm:text-base">
                {col.title}
              </h4>

             <ul className="space-y-2 text-left">
              {col.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm  font-poppins text-gray-200 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-xs text-gray-400 text-center md:text-left">
            © 2024 Axtelica. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (t) => (
                <button
                  key={t}
                  className="text-xs text-gray-400 hover:text-white"
                >
                  {t}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;