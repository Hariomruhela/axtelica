import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative border-t border-white/10 h-full"
      style={{
        backgroundImage: "url('/footerbg.png')",
        backgroundSize: "contain",
      }}
    >
      <div className="relative max-w-[1650px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <img
              className="rounded-lg h-24"
              src="/Axtelicalogo.png"
              alt="footer_logo"
            />

            <p className="text-sm mt-4 text-gray-300 mb-6">
              Enterprise data & AI solutions for modern businesses.
            </p>

            {/* ✅ FIXED ICON BUTTONS */}
            <div className="flex gap-3">
              {[FaLinkedin, FaGithub].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition"
                >
                  <Icon className="w-4 h-4" />
                </button>
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

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © 2024 Axtelica. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
              <button
                key={t}
                className="text-xs text-gray-400 hover:text-white"
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