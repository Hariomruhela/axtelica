import { useEffect, useRef } from "react";

const logos = [
  {
    name: "AWS",
    url: "/assets/aws_logo.png",
  },
  {
    name: "Azure",
    url: "/assets/azure_logo.png",
  },
  {
    name: "Databricks",
    url: "/assets/databricks.png",
  },
  {
    name: "Tableau",
    url: "/assets/tablue.png",
  },
  {
    name: "Power BI",
    url: "/assets/powerBI_logo.png",
  },
  {
    name: "GitLab",
    url: "/assets/gitlab_logo.png",
  },
];

const TechEcosystem = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId;
    let pos = 0;
    const speed = 0.8;

    const animate = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 5) pos = 0;
      el.style.transform = `translateX(-${pos}px)`;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animId);
  }, []);

  const allLogos = [...logos, ...logos];

  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="heading-primary text-black">
           Technology Ecosystem
        </h2>
        <p className="text-gray-600 heading-secondary w-full">
          We partner with industry-leading platforms to build robust, scalable, and future-proof data architectures.
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex items-center gap-40 w-max"
        >
          {allLogos.map((logo, i) => (
  <div
    key={`${logo.name}-${i}`}
    className="flex-shrink-0 flex items-center mt-5 mb-5 justify-center  opacity-70 hover:opacity-100 transition duration-300"
  >
    <img
      src={logo.url}
      alt={logo.name}
      className=" object-contain"
    />
  </div>
))}
        </div>
      </div>
    </section>
  );
};

export default TechEcosystem;