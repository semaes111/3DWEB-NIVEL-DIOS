Add a GSAP/Framer Motion animation to an existing component.

What to animate: $ARGUMENTS

Guidelines:
1. Prefer GSAP ScrollTrigger for scroll-linked animations
2. Prefer Framer Motion for enter/exit animations
3. Use `useGSAP` hook (from @gsap/react) with proper cleanup
4. Performance: animate only transform and opacity when possible
5. Register ScrollTrigger plugin at top of file
6. Use `gsap.context()` for proper cleanup on unmount
7. Add `will-change: transform` CSS for GPU acceleration
8. Test at 60fps — avoid layout-triggering properties
