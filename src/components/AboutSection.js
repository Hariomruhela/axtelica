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
    <div className="w-full font-sans text-gray-800">
      {/* HERO SECTION */}
      <section style={{
          backgroundImage: "url('/assets/hero_banner_new.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="  py-32 md:py-48  px-1"
      >
        <div className="max-w-7xl mx-auto  flex flex-col ">
            <p className="uppercase tracking-widest text-sm font-bold font-poppins mb-4 text-white">Why Axtelica</p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl text-white font-poppins">
          Real-Time Data Integration, Quality, and Intelligence
        </h1>
        <p className="max-w-3xl text-gray-200 font-poppins">
          At Axtelica, we believe technology is more than just tools—it's the
          foundation of modern business success. We are a forward-thinking IT
          solutions company dedicated to helping businesses grow, innovate, and
          thrive in the digital era
        </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-[1650px] mx-auto py-20 px-6 md:px-4 grid md:grid-cols-2 gap-24 ">
        <div className="pt-12 ">
          <h2 className="text-xl font-bold font-poppins mb-6">
            We specialize in a wide range of IT services, including:
          </h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Website Design & Development",
              "Mobile App Development",
              "Cloud Solutions & Integration",
              "Cybersecurity Services",
              "Data Analytics & Business Intelligence",
              "Custom Software Development",
            ].map((item, i) => (
              <li key={i} className="flex items-start font-poppins gap-3">
                <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 font-poppins">
            Our expert team combines creativity with cutting-edge technology to
            deliver solutions that are not only functional but also future-ready.
          </p>
        </div>

        <div className="">
          <img
            src="/assets/about_img.png"
            alt="network"
            className="rounded-lg  w-[90%]"
          />
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-[1650px] mx-auto text-center py-16 px-6 md:px-4">
        <h2 className="text-5xl font-poppins font-bold mb-10">Our mission</h2>

        <div className="grid md:grid-cols-3 gap-6">
           {missionData.map((item, i) => (
    <div
      key={i}
      className="bg-gray-100 p-8 rounded-lg flex flex-col items-center text-center"
    >
      {/* ICON IMAGE */}
      <div className="w-20 h-20 rounded-full border flex items-center justify-center mb-4 bg-white">
        <img
          src={item.icon}
          alt={item.title}
          className="w-16 h-16 object-contain"
        />
      </div>

      <h3 className="text-red-500 text-2xl font-poppins font-semibold">
        {item.title}
      </h3>

      <p className="text-gray-600 font-poppins text-lg mt-2 max-w-[200px]">
        {item.desc}
      </p>
    </div>
  ))}
        </div>

        <p className="mt-20 text-3xl max-w-6xl font-poppins mx-auto">
          To empower businesses with innovative technology solutions that drive
          efficiency, growth, and long-term success.
        </p>
      </section>

      {/* ABOUT DETAIL */}
      <section className="max-w-[1650px] mx-auto pb-10 px-4 md:px-2 grid md:grid-cols-2 gap-24 items-center">
        <div className="">
          <p className="text-gray-900 text-[16px] md:text-[20px] font-medium font-poppins mb-6">
            Axtelica is a professional IT services company focused on delivering
            high-quality technology solutions to businesses worldwide. With
            expertise in software development, cloud computing, and digital
            transformation, we help organizations optimize operations and
            enhance productivity.Our team  of skilled devlopers designers and strategic works closely with Clients to delivers customised solutions align her businesses goals.
          </p>
          <button className="bg-purple-700 text-white font-poppins px-6 py-2 rounded-full">
            Meet us →
          </button>
        </div>
        <div>
          <img
            src="/assets/teamax.jpg"
            alt="team"
            className="rounded-lg w-[90%] md:ml-12"
          />
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="max-w-[1650px] mx-auto py-16 px-6 md:px-6 grid md:grid-cols-2 gap-24 items-center">
        <div>
          <img
            src="/assets/meeting2.jpg"
            alt="meeting"
            className="rounded-lg md:h-[450px] md:ml-10 "
          />
        </div>

        <div className="md:ml-16">
          <h2 className="text-2xl md:text-3xl font-poppins font-semibold mb-4">
            Imagine: your data working in a system made for your business
          </h2>
          <p className="text-gray-600 text-lg font-poppins font-normal mb-6">
            That’s what we bring to the table. With custom-built products and
            proven strategies that align with top organizational priorities. we work to understand exactly what makes your enterprise run-- and then help it run faster.
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
      <section className="text-center py-16 px-6 md:px-16">
        <p className="text-2xl font-poppins max-w-3xl mx-auto">
          At Axtelica, we don’t just build software we build lasting
          partnerships. Your success is our priority. And we are commited to delivering excellence in every project.
        </p>
      </section>
    </div>
  );
};

export default AboutSection;
