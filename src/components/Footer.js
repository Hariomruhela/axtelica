import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="relative border-t  bg-cover bg-center"
      style={{ backgroundImage: "url('/footerbg.png')", backgroundSize: "contain", }}
    >
      {/* 🔥 Overlay */}
      {/* <div className="absolute inset-0 bg-black/80" /> */}

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-md">
              Axtelica — Intelligent platforms, business-ready agents, and AI solutions built for enterprises that run on data.
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
              links: ["Infinisight", "OptimaOrbit", "Axtream"],
            },
            {
              title: "Case Studies",
              links: ["Success Stories", "Client Projects"],
            },
            {
              title: "Insights",
              links: ["Blog", "Articles", "Whitepapers"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">
                {col.title}
              </h4>

              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <button className="text-sm text-gray-400 hover:text-white transition">
                      {link}
                    </button>
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