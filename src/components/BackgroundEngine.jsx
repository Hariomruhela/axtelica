import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundEngine = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050510, 0.001);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(300, 300, 900);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const SEPARATION = 35, AMOUNTX = 150, AMOUNTY = 100;
    const positions = new Float32Array(AMOUNTX * AMOUNTY * 3);
    const colors = new Float32Array(AMOUNTX * AMOUNTY * 3);
    
    const c1 = new THREE.Color("#00d2ff"), c2 = new THREE.Color("#7a5af8"), c3 = new THREE.Color("#d442f5");

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
      size: 3, vertexColors: true, transparent: true, opacity: 0.6,
      blending: THREE.AdditiveBlending, sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let count = 0;
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      const posAttr = particles.geometry.attributes.position;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          posAttr.array[i + 1] = (Math.sin((ix + count) * 0.2) * 55) + (Math.sin((iy + count) * 0.4) * 45);
          i += 3;
        }
      }
      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.045;
      return animationId;
    };

    const requestId = animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(requestId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none bg-[#020205]" />;
};

export default BackgroundEngine;
