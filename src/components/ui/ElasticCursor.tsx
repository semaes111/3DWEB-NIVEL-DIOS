import gsap from "gsap";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

function getScale(diffX: number, diffY: number) {
  const distance = Math.sqrt(diffX ** 2 + diffY ** 2);
  return Math.min(distance / 1200, 0.18);
}

function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

const CURSOR_SIZE = 40;

export const ElasticCursor = () => {
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
  const jellyRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const set = useRef<Record<string, any>>({});
  const [moved, setMoved] = useState(false);

  useLayoutEffect(() => {
    if (isMobile || !jellyRef.current) return;
    set.current.x = gsap.quickSetter(jellyRef.current, "x", "px");
    set.current.y = gsap.quickSetter(jellyRef.current, "y", "px");
    set.current.r = gsap.quickSetter(jellyRef.current, "rotate", "deg");
    set.current.sx = gsap.quickSetter(jellyRef.current, "scaleX");
    set.current.sy = gsap.quickSetter(jellyRef.current, "scaleY");
    set.current.w = gsap.quickSetter(jellyRef.current, "width", "px");
  }, [isMobile]);

  const loop = useCallback(() => {
    if (!set.current.w) return;
    const rotation = getAngle(vel.current.x, vel.current.y);
    const scale = getScale(vel.current.x, vel.current.y);
    set.current.x(pos.current.x);
    set.current.y(pos.current.y);
    set.current.w(CURSOR_SIZE + scale * 150);
    set.current.r(rotation);
    set.current.sx(1 + scale * 0.7);
    set.current.sy(1 - scale * 1.1);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handle = (e: MouseEvent) => {
      if (!moved) setMoved(true);
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.top = `${e.clientY}px`;
        dotRef.current.style.left = `${e.clientX}px`;
      }
      gsap.to(pos.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power3.out",
        onUpdate: () => {
          vel.current.x = (e.clientX - pos.current.x) * 1.2;
          vel.current.y = (e.clientY - pos.current.y) * 1.2;
        },
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [isMobile, moved]);

  useEffect(() => {
    if (isMobile || !moved) return;
    gsap.ticker.add(loop);
    return () => { gsap.ticker.remove(loop); };
  }, [isMobile, moved, loop]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={jellyRef}
        className="jelly-blob fixed left-0 top-0 rounded-full z-[999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          border: "1.5px solid rgba(0, 240, 255, 0.4)",
          background: "rgba(0, 240, 255, 0.03)",
          mixBlendMode: "difference",
          backdropFilter: "invert(80%)",
          opacity: moved ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[1000]"
        style={{
          background: "#00f0ff",
          boxShadow: "0 0 8px #00f0ff",
          opacity: moved ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </>
  );
};
