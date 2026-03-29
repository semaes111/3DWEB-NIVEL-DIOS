import { motion } from "framer-motion";
import BallCanvas from "@/components/canvas/Ball";
import { TECHNOLOGIES } from "@/constants";
import { useEffect, useState } from "react";

export const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section id="tech" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-general text-sm uppercase tracking-[0.3em] text-accent/60 mb-4">
            Toolkit
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-white/30 mt-4 max-w-md mx-auto">
            {isMobile
              ? "Technologies I work with daily"
              : "Hover and drag the 3D spheres to explore my toolkit"}
          </p>
        </motion.div>

        {/* Tech balls grid */}
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {TECHNOLOGIES.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              {isMobile ? (
                // Fallback for mobile: flat icon with glass card
                <div className="w-20 h-20 glass-card flex-center p-4 hover:border-accent/30 transition-all">
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
                </div>
              ) : (
                <div className="w-28 h-28">
                  <BallCanvas icon={tech.icon} />
                </div>
              )}
              <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
