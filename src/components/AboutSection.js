import React from "react";

const missionData = [
  {
    title: "Empower",
    desc: "data-driven enterprises",
    icon: "/assets/empower.png",
  },
  {
    title: "Support",
    desc: "digital transformation from all angles",
    icon: "/assets/support.png",
  },
  {
    title: "Create",
    desc: "strategic solutions to solve real-world problems",
    icon: "/assets/setting.jpg",
  },
];

const AboutSection = () => {
  return (
    <div className="w-full text-gray-800">

      {/* HERO */}
      <section
        className="relative py-20 sm:py-24 lg:py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero_banner_new.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="uppercase tracking-widest text-sm sm:text-base text-white mb-4">
            Why Axtelica
          </p>

          <h1 className="text-[clamp(28px,5vw,56px)] font-bold text-white max-w-3xl leading-tight">
            Real-Time Data Integration, Quality, and Intelligence
          </h1>

          <p className="mt-6 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
            At Axtelica, we believe technology is more than just tools—it's the
            foundation of modern business success.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full max-w-[1400px] mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        <div>
          <h2 className="text-[clamp(22px,4vw,36px)] font-semibold mb-6">
            We specialize in a wide range of IT services
          </h2>

          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            {[
              "Website Design & Development",
              "Mobile App Development",
              "Cloud Solutions & Integration",
              "Cybersecurity Services",
              "Data Analytics & Business Intelligence",
              "Custom Software Development",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-600">
            Our expert team combines creativity with cutting-edge technology.
          </p>
        </div>

        <img
          src="/assets/about_img.png"
          alt="network"
          className="w-full h-auto rounded-lg"
        />
      </section>

      {/* MISSION */}
      <section className="w-full max-w-[1400px] mx-auto text-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-[clamp(26px,5vw,48px)] font-bold mb-12">
          Our Mission
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {missionData.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-red-500 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-700 max-w-2xl mx-auto">
          To empower businesses with innovative technology solutions that drive
          efficiency, growth, and long-term success.
        </p>
      </section>

      {/* ABOUT DETAIL */}
      <section className="w-full max-w-[1400px] mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        <div>
          <p className="text-gray-700 mb-6">
            Axtelica is a professional IT services company focused on delivering
            high-quality technology solutions worldwide.
          </p>

          <button className="bg-purple-700 text-white px-6 py-3 rounded-full hover:scale-105 transition">
            Meet us →
          </button>
        </div>

        <img
          src="/assets/teamax.jpg"
          alt="team"
          className="w-full h-auto rounded-lg"
        />
      </section>

      {/* FINAL */}
      <section className="w-full max-w-[1400px] mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        <img
          src="/assets/meeting2.jpg"
          alt="meeting"
          className="w-full h-auto rounded-lg"
        />

        <div>
          <h2 className="text-[clamp(22px,4vw,32px)] font-semibold mb-4">
            Imagine: your data working in a system made for your business
          </h2>

          <p className="text-gray-600 mb-6">
            That’s what we bring to the table. We help your systems run faster and smarter.
          </p>

          <div className="flex gap-10">
            <div>
              <h4 className="font-semibold">Services</h4>
              <p className="text-purple-700 cursor-pointer">Explore →</p>
            </div>
            <div>
              <h4 className="font-semibold">Partners</h4>
              <p className="text-purple-700 cursor-pointer">Explore →</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOT TEXT */}
      <section className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <p className="max-w-2xl mx-auto text-gray-600">
          At Axtelica, we don’t just build software — we build lasting partnerships.
        </p>
      </section>
    </div>
  );
};

export default AboutSection;