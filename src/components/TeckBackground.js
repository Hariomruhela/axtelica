import { useEffect, useRef } from "react";
import * as THREE from "three";

const TechBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050510, 0.001);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.set(200, 400, 1000);

    const SEPARATION = 30,
      AMOUNTX = 160,
      AMOUNTY = 100;

    const positions = new Float32Array(AMOUNTX * AMOUNTY * 3);
    const colors = new Float32Array(AMOUNTX * AMOUNTY * 3);

    const geometry = new THREE.BufferGeometry();

    const color1 = new THREE.Color("#00d2ff");
    const color2 = new THREE.Color("#7a5af8");
    const color3 = new THREE.Color("#d442f5");

    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        positions[i + 1] = 0;
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

        const ratio = ix / AMOUNTX;
        let finalColor = new THREE.Color();

        if (ratio < 0.5) {
          finalColor.lerpColors(color1, color2, ratio * 2);
        } else {
          finalColor.lerpColors(color2, color3, (ratio - 0.5) * 2);
        }

        colors[i] = finalColor.r;
        colors[i + 1] = finalColor.g;
        colors[i + 2] = finalColor.b;

        i += 3;
      }
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    let count = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      const pos = particles.geometry.attributes.position.array;
      let i = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          pos[i + 1] =
            Math.sin((ix + count) * 0.2) * 60 +
            Math.sin((iy + count) * 0.4) * 40;
          i += 3;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      count += 0.05;
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      const handleResize = () => {
  const width = container.clientWidth;
  const height = container.clientHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(circle at 30% 50%, #0d0e2b 0%, #050510 60%, #020205 100%)",
      }}
    />
  );
};

export default TechBackground;