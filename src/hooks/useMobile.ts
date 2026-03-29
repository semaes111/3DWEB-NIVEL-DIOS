import { useState, useEffect } from "react";

/**
 * Detect if the user is on a mobile device (<640px).
 * Used throughout the app to skip heavy 3D Canvas on mobile.
 *
 * Usage:
 *   const isMobile = useMobile();
 *   return isMobile ? <FlatFallback /> : <Canvas3D />;
 */
export const useMobile = (breakpoint: number = 640): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
};
