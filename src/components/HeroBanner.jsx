import React from 'react';
import BackgroundEngine from './BackgroundEngine';

const HeroBanner = () => {
  return (
    <section className="relative z-10 h-screen w-full flex items-center justify-start px-12 md:px-24 pointer-events-none">
      <div className="flex flex-col gap-6 max-w-4xl">
        <BackgroundEngine></BackgroundEngine>
        <div/>
        {/* Tagline Badge */}
        <div className="animate-reveal delay-1 flex items-center gap-3">
          <div className="w-6 h-[1px] bg-cyan-400"></div>
          <p className="font-normal text-[11px] tracking-[0.15em] text-cyan-400 uppercase">
            Enterprise Intelligence Platform
          </p>
        </div>
        
        {/* Main Heading */}
        <div className="animate-reveal delay-2">
          <h1 className="font-bold text-5xl md:text-7xl text-white leading-[1.15] tracking-tight">
            Empowering <br /> Businesses With <br />
            <span className="bg-gradient-to-r from-[#00d2ff] via-[#7a5af8] to-[#d442f5] bg-clip-text text-transparent italic">
              AI, Data & Cloud <br /> Innovation
            </span>
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="animate-reveal delay-3 mt-8 flex gap-5 pointer-events-auto">
          <button className="bg-[#ff3b6a] text-white font-semibold px-9 py-4 rounded-md text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,59,106,0.4),0_0_15px_rgba(0,210,255,0.2)]">
            Explore Services
          </button>
          <button className="border border-white/15 text-white font-semibold px-9 py-4 rounded-md text-sm transition-all hover:bg-white/5">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
