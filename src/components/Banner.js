import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Banner = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // --- 1. SCENE SETUP ---
    const container = mountRef.current;
    const scene = new THREE.Scene();
    
    // Match the fog to the deep background color from your design
    scene.fog = new THREE.Fog(0x010103, 100, 2200);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(200, 480, 1050);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // --- 2. GRADIENT TONE MATCH (Cyan -> Blue Hub -> Magenta) ---
    const SEPARATION = 42, AMOUNTX = 145, AMOUNTY = 95;
    const positions = new Float32Array(AMOUNTX * AMOUNTY * 3);
    const colors = new Float32Array(AMOUNTX * AMOUNTY * 3);

    const c1 = new THREE.Color("#00f2ff"); // Electric Cyan
    const c2 = new THREE.Color("#0544ff"); // Royal Blue Hub
    const c3 = new THREE.Color("#ff00d4"); // Vivid Magenta

    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
        positions[i + 1] = 0;
        positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);

        const ratio = ix / AMOUNTX;
        let finalColor = new THREE.Color();
        
        // Exact color transition from your index02.html
        if (ratio < 0.45) {
          finalColor.lerpColors(c1, c2, ratio * 2.22);
        } else {
          finalColor.lerpColors(c2, c3, (ratio - 0.45) * 1.8);
        }

        colors[i] = finalColor.r;
        colors[i + 1] = finalColor.g;
        colors[i + 2] = finalColor.b;
        i += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 5.2, 
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // --- 3. ANIMATION LOOP ---
    let count = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      const pos = particles.geometry.attributes.position.array;
      let idx = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          // Rolling wave logic from your design
          pos[idx + 1] = (Math.sin((ix + count) * 0.22) * 55) + (Math.sin((iy + count) * 0.42) * 45);
          idx += 3;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.032;
    };

    animate();

    // --- 4. UTILITIES ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      className="relative w-full h-[700px] overflow-hidden" 
      style={{ background: 'radial-gradient(circle at 20% 50%, #0a0b1e 0%, #010103 100%)' }}
    >
      {/* Three.js Layer */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0" 
        style={{ filter: 'saturate(2) brightness(1.15) contrast(1.1)' }}
      />

      {/* Hero Content Layer */}
      <div className="relative z-10 flex flex-col mt-8 justify-center h-full px-6 md:px-[8%] pointer-events-none">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-2 mt-10 text-[10px] font-medium tracking-[0.25em] text-[#00f2ff] uppercase transition-opacity duration-1000">
          <div className="w-8 h-[1px] bg-[#00f2ff]"></div>
          AI SOLUTIONS BUILDER FOR ENTERPRISE
        </div>

        {/* Headline */}
        <h1 className="text-white text-4xl md:text-[24px] lg:text-[48px] font-bold leading-[1.15] max-w-[1000px] tracking-tight">
          Your Data Is Already Valuable. <br /> Axtelica Makes It Work.
        </h1>

        {/* Gradient Subheadline */}
        <p className="mt-6 text-2xl md:text-[30px] font-bold max-w-[750px] leading-tight bg-gradient-to-r from-[#00f2ff] via-[#4a5dff] to-[#d442f5] bg-clip-text text-transparent">
          Axtelica builds practical AI-powered solutions, intelligent platforms, and business-ready agents...
        </p>

        {/* Supporting Line */}
        {/* <p className="mt-4 text-sm text-slate-400 max-w-[600px] leading-relaxed">
          Helping organizations automate work, improve decisions, and scale innovation cost-effectively.
        </p> */}

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-10 pointer-events-auto">
          <button className="bg-[#ff3b6a] text-white px-8 py-3.5 rounded-md font-semibold text-lg flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow-[0_8px_35px_rgba(255,59,106,0.6)] shadow-[0_8px_25px_rgba(255,59,106,0.4)]">
            See How We Solve It <span></span>
          </button>
          <button className="border border-white/20 text-white px-8 py-3.5 rounded-md font-semibold text-lg transition-all hover:bg-white/5">
             Talk to an AI Expert 
          </button>
        </div>

        {/* Cost-effective tagline */}
        {/* <p className="mt-6 text-[12px] italic text-slate-500">
          Practical AI. Proven results. Built for real business problems.
        </p> */}
      </div>
    </div>
  );
};

export default Banner;
