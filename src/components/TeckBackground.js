import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 200;
const CONNECTION_DISTANCE = 2.2;
const BOUNDS = 8;

function ParticleNetwork() {
  const pointsRef = useRef(null);
  const linesRef = useRef(null);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * BOUNDS * 2;
      pos[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS * 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS;
      vel[i * 3] = (Math.random() - 0.5) * 0.008;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.008;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.004;
    }
    return { positions: pos, velocities: vel };
  }, []);

  const linePositions = useMemo(
    () => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3),
    []
  );
  const lineColors = useMemo(
    () => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3),
    []
  );

  const particleSizes = useMemo(() => {
    const sizes = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      sizes[i] = Math.random() * 3 + 1;
    }
    return sizes;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      positions[i3] += velocities[i3] + Math.sin(time * 0.3 + i) * 0.001;
      positions[i3 + 1] +=
        velocities[i3 + 1] + Math.cos(time * 0.2 + i) * 0.001;
      positions[i3 + 2] += velocities[i3 + 2];

      for (let j = 0; j < 3; j++) {
        const bound = j === 2 ? BOUNDS * 0.5 : BOUNDS;
        if (positions[i3 + j] > bound) {
          positions[i3 + j] = bound;
          velocities[i3 + j] *= -1;
        }
        if (positions[i3 + j] < -bound) {
          positions[i3 + j] = -bound;
          velocities[i3 + j] *= -1;
        }
      }
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    let lineIdx = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;

          linePositions[lineIdx * 3] = positions[i * 3];
          linePositions[lineIdx * 3 + 1] = positions[i * 3 + 1];
          linePositions[lineIdx * 3 + 2] = positions[i * 3 + 2];

          lineColors[lineIdx * 3] = 0.45 * alpha;
          lineColors[lineIdx * 3 + 1] = 0.2 * alpha;
          lineColors[lineIdx * 3 + 2] = 1.0 * alpha;
          lineIdx++;

          linePositions[lineIdx * 3] = positions[j * 3];
          linePositions[lineIdx * 3 + 1] = positions[j * 3 + 1];
          linePositions[lineIdx * 3 + 2] = positions[j * 3 + 2];

          lineColors[lineIdx * 3] = 0.45 * alpha;
          lineColors[lineIdx * 3 + 1] = 0.2 * alpha;
          lineColors[lineIdx * 3 + 2] = 1.0 * alpha;
          lineIdx++;
        }
      }
    }

    if (linesRef.current) {
      const geo = linesRef.current.geometry;
      geo.setDrawRange(0, lineIdx);
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#8b5cf6"
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </>
  );
}

function FloatingGrid() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x =
        Math.sin(clock.getElapsedTime() * 0.1) * 0.1 + 0.3;
      ref.current.rotation.z = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={ref} position={[0, -3, -5]}>
      <gridHelper args={[30, 30, "#4c1d95", "#2e1065"]} />
    </group>
  );
}

function GlowOrbs() {
  const groupRef = useRef();

  const orbs = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          -3 - Math.random() * 4,
        ],
        scale: 0.8 + Math.random() * 1.5,
        speed: 0.3 + Math.random() * 0.5,
        offset: i * 1.3,
        color: i % 2 === 0 ? "#7c3aed" : "#06b6d4",
      })),
    []
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const orb = orbs[i];
      const t = clock.getElapsedTime() * orb.speed + orb.offset;
      child.position.y = orb.position[1] + Math.sin(t) * 0.8;
      child.position.x = orb.position[0] + Math.cos(t * 0.7) * 0.5;
    });
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position}>
          <sphereGeometry args={[orb.scale, 16, 16]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={0.07}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

const TechBackground = ({ children }) => {
  return (
    <div className="relative min-h-[600px]  h-[700px] w-full overflow-hidden bg-tech-base">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <color attach="background" args={["#0a0118"]} />
          <fog attach="fog" args={["#0a0118", 8, 20]} />
          <ParticleNetwork />
          <FloatingGrid />
          <GlowOrbs />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-tech-base/30 via-transparent to-tech-base/80 pointer-events-none" />

      <div className="relative z-90 items-center">{children}</div>
    </div>
  );
};

export default TechBackground;