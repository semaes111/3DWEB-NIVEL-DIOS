import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

const Sphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    meshRef.current.rotation.y = t * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#915EFF"
          emissiveIntensity={0.15}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
};

const MorphingSphere = ({ className = "" }: { className?: string }) => (
  <div className={`w-full h-full ${className}`}>
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#00f0ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#915EFF" />
        <Sphere />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default MorphingSphere;
