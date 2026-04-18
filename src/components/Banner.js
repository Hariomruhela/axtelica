import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const mountRef = useRef(null);
  const location = useLocation(); // 🔥 for re-trigger animation

  useEffect(() => {
    const container = mountRef.current;

    // --- SCENE ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0118, 100, 2200);

    const camera = new THREE.PerspectiveCamera(75, 1, 1, 10000);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    renderer.setClearColor(0x05000a, 0);

    // --- PARTICLES ---
    const isMobile = window.innerWidth < 768;
    const AMOUNTX = isMobile ? 60 : 120;
    const AMOUNTY = isMobile ? 40 : 80;
    const SEPARATION = isMobile ? 35 : 42;

    const positions = new Float32Array(AMOUNTX * AMOUNTY * 3);
    const colors = new Float32Array(AMOUNTX * AMOUNTY * 3);

    const c1 = new THREE.Color("#00f2ff");
    const c2 = new THREE.Color("#0544ff");
    const c3 = new THREE.Color("#ff00d4");

    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        positions[i + 1] = 0;
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

        const ratio = ix / AMOUNTX;
        let color = new THREE.Color();

        if (ratio < 0.5) {
          color.lerpColors(c1, c2, ratio * 2);
        } else {
          color.lerpColors(c2, c3, (ratio - 0.5) * 2);
        }

        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;

        i += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 3 : 5,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // --- CAMERA ---
    const setCamera = () => {
      if (window.innerWidth < 768) {
        camera.position.set(0, 250, 800);
      } else {
        camera.position.set(150, 400, 1000);
      }
      camera.lookAt(0, 0, 0);
    };

    // --- RESIZE ---
    const updateSize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      setCamera();
    };

    updateSize();

    // --- ANIMATION ---
    let count = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      const pos = particles.geometry.attributes.position.array;
      let idx = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          pos[idx + 1] =
            Math.sin((ix + count) * 0.2) * 40 +
            Math.sin((iy + count) * 0.3) * 35;
          idx += 3;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.025;
    };

    animate();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
      key={location.pathname} // 🔥 forces animation on route change
      className="relative w-full h-[clamp(500px,65vh,700px)] overflow-hidden bg-[radial-gradient(circle_at_20%_50%,#1a1b4b_0%,#0a0118_50%,#05000a_100%)]"
    >
      {/* Background */}
      <div
        ref={mountRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ filter: "saturate(1.8) brightness(1.1)" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-18 sm:py-20 md:py-24 mt-7 md:mt-8 lg:mt-12">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h1 className="animate-reveal delay-1 text-white font-bold leading-tight tracking-tight text-[clamp(28px,5vw,52px)] max-w-3xl">
            AI Solutions Builder for<br/> Modern Business
          </h1>

          {/* Subheading */}
          <p className="animate-reveal delay-2 mt-6 font-semibold bg-gradient-to-r from-[#00f2ff] via-[#4a5dff] to-[#d442f5] bg-clip-text text-transparent text-[clamp(16px,2.5vw,28px)] max-w-2xl">
            Axtelica builds practical AI-powered solutions, intelligent
            platforms, and business-ready agents...
          </p>

          {/* Buttons */}
          <div
            className="animate-reveal w-fit delay-3 flex flex-col sm:flex-row gap-4 mt-10"
          >
            <button className="bg-[#ff3b6a] w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-md font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,59,106,0.4),0_0_15px_rgba(0,210,255,0.2)] flex items-center gap-2 group">
              See How We Solve It
            </button>

            <button className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/5 transition">
              Talk to an AI Expert
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;