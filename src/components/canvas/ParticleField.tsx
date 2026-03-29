import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

const PARTICLE_COUNT = 3000;

const Particles = () => {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const accentColor = new THREE.Color("#00f0ff");
    const secondaryColor = new THREE.Color("#915EFF");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 10;
      pos[i3 + 1] = (Math.random() - 0.5) * 10;
      pos[i3 + 2] = (Math.random() - 0.5) * 10;

      const mixFactor = Math.random();
      const color = accentColor.clone().lerp(secondaryColor, mixFactor);
      col[i3] = color.r;
      col[i3 + 1] = color.g;
      col[i3 + 2] = color.b;
    }
    return [pos, col];
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.05;
    meshRef.current.rotation.x = Math.sin(t * 0.03) * 0.1;

    mouseRef.current.x += (pointer.x * 0.5 - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (pointer.y * 0.3 - mouseRef.current.y) * 0.05;
    meshRef.current.rotation.z = mouseRef.current.x * 0.2;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const ParticleField = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 ${className}`}>
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: false, alpha: true }}
    >
      <Suspense fallback={null}>
        <Particles />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default ParticleField;
