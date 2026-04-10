import { FaLinkedin,FaFacebookF,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer
      className="relative border-t border-white/10 h-full"
      style={{
        backgroundImage: "url('/footerbg.png')",
        backgroundSize: "contain",
      }}
    >
      <div className="relative max-w-[1650px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-7 gap-6">
          
          {/* Brand */}
          <div className=" col-span-2">
            <img
              className="rounded-lg "
              src="/assets/Logo_header_white.png"
              alt="footer_logo"
            />

            <p className="text-sm mt-4 text-gray-300 mb-6">
              Enterprise data & AI solutions for modern businesses.
            </p>

            {/* ✅ FIXED ICON BUTTONS */}
            
          </div>

          {/* Links */}
          {[
            {
              title: "Company",
              links: ["About Us", "Case Studies", "Insights", "Careers"],
            },
            {
              title: "Services",
              links: [
                "Data Engineering",
                "Cloud Platforms",
                "AI Solutions",
                "Business Intelligence",
              ],
            },
            {
              title: "AI Innovation Hub",
              links: [
                "Infinisight",
                "optimaorbit",
                "Axtream",
                
              ],
            },
            {
              title: "Case Studies",
              links: [
                
                "Success Stories",
                "Client Projects",
                
              ],
            }, 
            {
              title: "Insights",
              links: [
                "Blog",
                "Articles",
                "Whitepappers",
                
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-right mb-4">
                {col.title}
              </h4>

              <ul className="space-y-3 text-right">
                {col.links.map((link) => (
                  <li key={link}>
                    {/* ✅ FIXED HERE */}
                    <button className="text-sm text-gray-300 hover:text-white transition text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          

          {/* Contact (optional) */}
        </div>
            <div className="flex gap-6 justify-end">
              {[FaXTwitter,FaLinkedin, FaInstagram, FaFacebookF,].map((Icon, i) => (
                <button
                  key={i}
                  className="  rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition"
                >
                  <Icon className="w-7 h-7   md:mt-8" />
                </button>
              ))}
            </div>
        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row  items-center gap-4">
          <p className="text-xs text-gray-100">
            © 2024 Axtelica. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
              <button
                key={t}
                className="text-xs text-gray-100 hover:text-white"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;