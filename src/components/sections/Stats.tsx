import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 150, suffix: "+", label: "Projects Delivered", icon: "🚀" },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
  { value: 50, suffix: "K+", label: "Lines of 3D Code", icon: "💻" },
  { value: 12, suffix: "", label: "Industry Awards", icon: "🏆" },
];

const StatCounter = ({ stat, index }: { stat: typeof STATS[0]; index: number }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef({ value: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useGSAP(() => {
    if (!elementRef.current) return;
    ScrollTrigger.create({
      trigger: elementRef.current,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        gsap.to(counterRef.current, {
          value: stat.value,
          duration: 2,
          delay: index * 0.2,
          ease: "power2.out",
          onUpdate: () => setCount(Math.round(counterRef.current.value)),
        });
      },
    });
  });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="glass-card p-8 text-center group hover:border-accent/20 transition-all duration-500"
    >
      <div className="text-4xl mb-4">{stat.icon}</div>
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-5xl font-display font-black text-white tabular-nums">
          {count}
        </span>
        <span className="text-2xl font-display font-bold gradient-text">
          {stat.suffix}
        </span>
      </div>
      <p className="text-white/40 text-sm font-general uppercase tracking-wider mt-3">
        {stat.label}
      </p>
      <div className="mt-4 h-px w-0 group-hover:w-full mx-auto transition-all duration-700"
        style={{ background: "var(--gradient-accent, linear-gradient(135deg, #00f0ff, #915eff))" }}
      />
    </motion.div>
  );
};

export const Stats = () => (
  <section id="stats" className="py-24 bg-primary data-grid-bg">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-general text-sm uppercase tracking-[0.3em] text-accent/60 mb-4">
          Impact
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
          Numbers That <span className="gradient-text">Speak</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <StatCounter key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </div>
  </section>
);
