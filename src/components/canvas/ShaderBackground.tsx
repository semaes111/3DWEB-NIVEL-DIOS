import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  varying vec2 vUv;

  // Simplex-like noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    float n1 = snoise(vUv * 3.0 + uTime * 0.1);
    float n2 = snoise(vUv * 5.0 - uTime * 0.15);
    float n3 = snoise(vUv * 2.0 + vec2(uTime * 0.08, -uTime * 0.12));

    float blend1 = smoothstep(-0.5, 0.5, n1);
    float blend2 = smoothstep(-0.3, 0.7, n2);

    vec3 color = mix(uColor1, uColor2, blend1);
    color = mix(color, uColor3, blend2 * 0.5);

    // Subtle vignette
    float d = distance(vUv, vec2(0.5));
    color *= 1.0 - d * 0.6;

    gl_FragColor = vec4(color, 0.4 + n3 * 0.1);
  }
`;

const ShaderPlane = ({ color1 = "#00f0ff", color2 = "#915EFF", color3 = "#f272c8" }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color(color1) },
      uColor2: { value: new THREE.Color(color2) },
      uColor3: { value: new THREE.Color(color3) },
    }),
    [color1, color2, color3]
  );

  useFrame(({ clock }) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} scale={[16, 9, 1]} position={[0, 0, -2]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};

interface ShaderBackgroundProps {
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
}

const ShaderBackground = ({
  className = "",
  color1 = "#00f0ff",
  color2 = "#915EFF",
  color3 = "#f272c8",
}: ShaderBackgroundProps) => (
  <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: "none" }}>
    <Canvas
      frameloop="always"
      dpr={[1, 1]}
      camera={{ position: [0, 0, 3], fov: 50 }}
      gl={{ antialias: false, alpha: true }}
    >
      <Suspense fallback={null}>
        <ShaderPlane color1={color1} color2={color2} color3={color3} />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default ShaderBackground;
