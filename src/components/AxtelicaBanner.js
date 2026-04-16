import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AxtelicaBanner = ({ 
  title = "Empowering Smarter Business Decisions", 
  subtitle = "Through AI-powered data integration and analytics solutions.",
  tagline = "Enterprise Intelligence Platform",
  ctaText = "Schedule a Consultation" 
}) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1. DYNAMIC CONTAINER BINDING
    // This ensures the animation stays inside the banner only.
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050510, 0.001);

    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    // Perspectve adjusted for the inner-page aesthetic (Lower and Closer)
    camera.position.set(200, 200, 1000); 
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // 2. BRAND COLOR GRADIENT ENGINE
    const SEPARATION = 35, AMOUNTX = 150, AMOUNTY = 100;
    const positions = new Float32Array(AMOUNTX * AMOUNTY * 3);
    const colors = new Float32Array(AMOUNTX * AMOUNTY * 3);
    
    const c1 = new THREE.Color("#00e4ff"); // Cyan
    const c2 = new THREE.Color("#7a5af8"); // Purple
    const c3 = new THREE.Color("#d442f5"); // Magenta

    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
        positions[i + 1] = 0;
        positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);

        const ratio = ix / AMOUNTX;
        let finalColor = new THREE.Color();
        if (ratio < 0.5) finalColor.lerpColors(c1, c2, ratio * 2);
        else finalColor.lerpColors(c2, c3, (ratio - 0.5) * 2);

        colors[i] = finalColor.r; colors[i + 1] = finalColor.g; colors[i + 2] = finalColor.b;
        i += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.8, 
      vertexColors: true, 
      transparent: true, 
      opacity: 0.5,
      blending: THREE.AdditiveBlending, 
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3. MOTION LOGIC
    let count = 0;
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      const posAttr = particles.geometry.attributes.position;
      let idx = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          posAttr.array[idx + 1] = (Math.sin((ix + count) * 0.2) * 50) + (Math.sin((iy + count) * 0.4) * 40);
          idx += 3;
        }
      }
      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.04;
      return animationId;
    };

    const requestId = animate();

    // 4. CLEANUP (Critical for React Performance)
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(requestId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[650px] bg-gradient-to-b from-[#170132]   
                via-[#220146] to-[#080017] blur-1xl overflow-hidden font-['Poppins']">
      {/* BACKGROUND ANIMATION LAYER */}
      <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* CONTENT LAYER (MATCHED TO YOUR DESIGN ATTACHMENT) */}
      <div className="relative z-10 flex flex-col justify-center h-full px-12 md:px-24">
        
        {/* Row 1: Staggered Tagline */}
        <div className="flex items-center gap-3 mb-6 animate-reveal">
          <div className="w-8 h-[1px] bg-cyan-400"></div>
          <p className="text-[12px] font-normal tracking-[0.2em] text-cyan-400 uppercase">
            {tagline}
          </p>
        </div>
        
        {/* Row 2: Premium Heading (Poppins 700) */}
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-4xl animate-reveal delay-1">
          {title}
        </h1>

        {/* Row 3: Interactive Gradient Subtitle */}
        <p className="mt-6 text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#00d2ff] via-[#7a5af8] to-[#d442f5] bg-clip-text text-transparent max-w-2xl animate-reveal delay-2">
          {subtitle}
        </p>

        {/* Row 4: Luminous Button */}
        <div className="mt-10 animate-reveal delay-3">
          <button className="bg-[#ff3b6a] text-white font-semibold px-8 py-3.5 rounded-md text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,59,106,0.4),0_0_15px_rgba(0,210,255,0.2)] flex items-center gap-2 group">
            {ctaText}
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes revealIn {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal { opacity: 0; animation: revealIn 1s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }
      `}</style>
    </div>
  );
};

export default AxtelicaBanner;
