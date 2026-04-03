// import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative border-t border-white/10 h-full"
      style={{
    backgroundImage: "url('/footerbg.png')",
    backgroundSize: "contain",
    // backgroundPosition: "center",
  }}
    >
      {/* 🔥 Overlay (IMPORTANT) */}
      

      <div className="relative  max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <img className="rounded-lg h-24"
             src="/Axtelicalogo.png" alt="footer_logo "/>
            {/* <h2 className="text-white font-bold text-xl mb-4">AXTELICA</h2> */}

            <p className="text-sm mt-4 text-gray-300 mb-6">
              Enterprise data & AI solutions for modern businesses.
            </p>

            <div className="flex gap-3">
              {[FaLinkedin, FaGithub].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg  flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
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
              title: "Resources",
              links: [
                "Blog",
                "Case Studies",
                "Documentation",
                "Webinars",
              ],
            },
            
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-4">
                {col.title}
              </h4>

              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-300 hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          {/* <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <div className="space-y-3">
              {[
                { icon: Mail, text: "hello@axtelica.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "San Francisco, CA" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-gray-300 text-sm">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {text}
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © 2024 Axtelica. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
              <a key={t} href="#" className="text-xs text-gray-400 hover:text-white">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;