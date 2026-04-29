import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[linear-gradient(135deg,#0B0E2E_0%,#111A52_55%,#1E4BB5_100%)]">

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-14 lg:py-16">
        
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-sm sm:text-base text-gray-200 mb-5 sm:mb-6 max-w-md leading-relaxed">
              Axtelica is an AI Solutions Builder creating smart platforms,
              intelligent agents, and business-ready solutions for modern enterprises.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-5 mt-4">
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
                { name: "Get a Demo", path: "/demo" },
                { name: "Product Tour", path: "https://axtream.axtelica.com/" },
                { name: "Why Axtelica", path: "/about" },
                { name: "Pricing & Subscription", path: "/demo" },
              ],
            },
            {
              title: "AI Innovation Hub",
              links: [
                { name: "Axtream", path: "/product/axtream" },
                { name: "Infinisight", path: "/product/infinisight" },
                { name: "Intelligent AI Agents", path: "/product/optimaorbit" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "About Us", path: "/about" },
                { name: "Why Axtelica", path: "/about" },
                { name: "Leadership", path: "/about" },
                { name: "Contact Us", path: "/contact" },
              ],
            },
            {
              title: "Resources",
              links: [
                { name: "Blogs", path: "/blog" },
                { name: "Articles", path: "/blog" },
                { name: "Case Studies", path: "/casestudies" },
                { name: "Whitepapers", path: "/blog" },
                { name: "Reports", path: "/blog" },
                { name: "News and Events", path: "/blog" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-3 text-base sm:text-lg font-poppins">
                {col.title}
              </h4>

              <ul className="space-y-2">
                {col.links.map((link) => {
                  const isExternal = link.path?.startsWith("http");

                  return (
                    <li key={link.name}>
                      {isExternal ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-300 hover:text-cyan-400 transition"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.path || "#"}
                          className="text-sm text-gray-300 hover:text-cyan-400 transition"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
          
          <p className="text-xs text-gray-400 text-center md:text-left">
            © 2024 Axtelica. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (t) => (
                <button
                  key={t}
                  className="text-xs text-gray-400 hover:text-white transition"
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