import React from 'react';

const CapabilityCard = ({ title, description, colorClass, delay }) => (
  <div className={`group glass-card p-10 rounded-3xl relative overflow-hidden animate-reveal ${delay}`}>
    <h3 className="text-white text-xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    <div className={`absolute bottom-0 left-0 w-0 h-1 ${colorClass} group-hover:w-full transition-all duration-700`} />
  </div>
);

const CapabilityGrid = () => {
  return (
    <section className="relative z-10 py-32 px-12 md:px-24 bg-black backdrop-blur-sm border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-white text-3xl font-bold mb-4">Core Capabilities</h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-magenta-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <CapabilityCard 
            title="Neural AI" 
            description="Predictive modeling engineered for absolute precision." 
            colorClass="bg-cyan-400" 
            delay="delay-1"
          />
          <CapabilityCard 
            title="Data Architecture" 
            description="High-performance pipelines for real-time intelligence." 
            colorClass="bg-purple-500" 
            delay="delay-2"
          />
          <CapabilityCard 
            title="Cloud Modernization" 
            description="Optimizing infrastructure for maximum global agility." 
            colorClass="bg-pink-500" 
            delay="delay-3"
          />
        </div>
      </div>
    </section>
  );
};

export default CapabilityGrid;
