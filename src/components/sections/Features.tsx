import { type PropsWithChildren, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { VIDEO_LINKS } from "@/constants";

interface BentoTiltProps {
  className?: string;
}

const BentoTilt = ({ children, className = "" }: PropsWithChildren<BentoTiltProps>) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`
    );
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransformStyle("")}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
}

const BentoCard = ({ src, title, description }: BentoCardProps) => (
  <article className="relative size-full">
    <video
      src={src}
      loop
      muted
      autoPlay
      className="absolute top-0 left-0 size-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
    <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
      <div>
        <h1 className="bento-title">{title}</h1>
        {description && (
          <p className="mt-3 max-w-64 text-sm text-white/50 md:text-base">{description}</p>
        )}
      </div>
    </div>
  </article>
);

export const Features = () => {
  return (
    <section className="bg-primary pb-52">
      <div className="container mx-auto px-3 md:px-10">
        {/* Section header */}
        <div className="px-5 py-32">
          <p className="font-general text-sm uppercase tracking-[0.3em] text-accent/60 mb-4">
            Capabilities
          </p>
          <p className="font-display text-4xl font-bold text-white max-w-lg">
            Bridging the gap between <span className="gradient-text">imagination</span> and technology
          </p>
          <p className="max-w-md text-lg text-white/30 mt-4">
            From immersive 3D worlds to micro-interactions, every pixel is crafted with purpose.
          </p>
        </div>

        {/* Main bento card */}
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-xl md:h-[65vh]">
          <BentoCard
            src={VIDEO_LINKS.feature1}
            title={<>3D W<b>e</b>b</>}
            description="Immersive WebGL experiences with Three.js and React Three Fiber — from product configurators to data visualizations."
          />
        </BentoTilt>

        {/* Bento grid */}
        <div id="nexus" className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src={VIDEO_LINKS.feature2}
              title={<>Ani<b>m</b>ation</>}
              description="GSAP-powered scroll animations and Framer Motion micro-interactions with 60fps performance."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src={VIDEO_LINKS.feature3}
              title={<>D<b>e</b>sign</>}
              description="Pixel-perfect implementations with bespoke design systems and creative layouts."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src={VIDEO_LINKS.feature4}
              title={<>D<b>a</b>ta</>}
              description="3D data visualization and real-time analytics with WebGL point clouds and interactive charts."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between p-5"
              style={{
                background: "linear-gradient(135deg, rgba(0,240,255,0.15), rgba(145,94,255,0.15))",
              }}
            >
              <h1 className="bento-title max-w-64 text-white">
                M<b>o</b>re co<b>m</b>ing
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end text-accent/60" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src={VIDEO_LINKS.feature5}
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};
