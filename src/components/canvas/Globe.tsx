import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

const GlobeMesh = () => {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Generate dots on sphere surface
  const dotPositions = useMemo(() => {
    const positions = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      const phi = Math.acos(-1 + (2 * i) / 800);
      const theta = Math.sqrt(800 * Math.PI) * phi;
      const radius = 1.5;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  // Connection lines between random points
  const linePositions = useMemo(() => {
    const lines: number[] = [];
    for (let i = 0; i < 40; i++) {
      const a = Math.floor(Math.random() * 800) * 3;
      const b = Math.floor(Math.random() * 800) * 3;
      lines.push(
        dotPositions[a], dotPositions[a + 1], dotPositions[a + 2],
        dotPositions[b], dotPositions[b + 1], dotPositions[b + 2]
      );
    }
    return new Float32Array(lines);
  }, [dotPositions]);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.1 + pointer.x * 0.3;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.1 + pointer.y * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.06} />
      </mesh>

      {/* Dots on surface */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={dotPositions} count={800} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.015} color="#00f0ff" transparent opacity={0.6} sizeAttenuation depthWrite={false} />
      </points>

      {/* Connection lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={linePositions} count={linePositions.length / 3} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#915EFF" transparent opacity={0.15} />
      </lineSegments>

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[1.48, 32, 32]} />
        <meshBasicMaterial color="#0a0a0a" transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

const Globe = ({ className = "" }: { className?: string }) => (
  <div className={`w-full h-full ${className}`}>
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <GlobeMesh />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default Globe;
