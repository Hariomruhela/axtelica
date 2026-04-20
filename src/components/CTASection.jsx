const CTASection = () => {
  return (
    <section className="bg-black text-white text-center py-20 px-6">
      <h2 className="text-4xl font-serif mb-4">
        Ready to solve your AML data problem?
      </h2>

      <p className="text-gray-400 mb-8">
        Generate your first dataset in seconds.
      </p>

      <div className="flex justify-center gap-4">
        <button
          
          className="bg-blue-600 px-6 py-3 rounded-lg"
        >
          Try Free</button>
        
        <button
          
          className="border px-6 py-3 rounded-lg"
        >
          Contact
        </button>
      </div>
    </section>
  );
};

export default CTASection;