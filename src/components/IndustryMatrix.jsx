const IndustryMatrix = () => {
  const data = [
    {
      icon: "🏦",
      title: "Banks",
      desc: "Reduce false positives and train ML models.",
    },
    {
      icon: "₿",
      title: "Crypto",
      desc: "Demonstrate AML compliance.",
    },
    {
      icon: "🛒",
      title: "Payments",
      desc: "Train fraud detection models.",
    },
  ];

  return (<div className=" bg-[#fafaf5]">
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl text-black font-poppins mb-6">
        Who uses inisight?
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 bg-white hover:border-blue-300 transition"
          >
            <div className="text-5xl w-10 h-10 text-black mb-5">{item.icon}</div>
            <h3 className="font-semibold text-black text-2xl font-poppins mb-2">{item.title}</h3>
            <p className="text-lg font-poppins text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section></div>
  );
};

export default IndustryMatrix;