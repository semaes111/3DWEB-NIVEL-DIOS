Create a new Three.js/R3F 3D canvas component.

Description: $ARGUMENTS

Requirements:
1. Create file at `src/components/canvas/{Name}.tsx`
2. Follow the Ball.tsx or Stars.tsx pattern:
   - Inner component (mesh/group) + outer Canvas wrapper
   - Use `frameloop="demand"`, `dpr={[1, 2]}`
   - Wrap in `<Suspense fallback={<CanvasLoader />}>`
   - Add `<Preload all />` at end of Canvas
   - OrbitControls with enablePan={false} enableZoom={false}
3. Export from `src/components/canvas/index.ts`
4. Add mobile detection: skip Canvas on <640px, show flat fallback
5. Use @react-three/drei helpers (Float, useGLTF, useTexture, Decal, etc.)
6. TypeScript strict mode
