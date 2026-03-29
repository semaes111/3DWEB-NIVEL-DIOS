import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVault",
    avatar: "https://i.pravatar.cc/120?img=1",
    text: "The 3D animations and scroll effects completely transformed our landing page. Conversion rate jumped 40% in the first month.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Founder, DesignForge",
    avatar: "https://i.pravatar.cc/120?img=3",
    text: "We needed an immersive portfolio that matched our creative vision. The result exceeded every expectation — our clients are blown away.",
    rating: 5,
  },
  {
    name: "Elena Kowalski",
    role: "Marketing Director, NovaBrand",
    avatar: "https://i.pravatar.cc/120?img=5",
    text: "The attention to performance is remarkable. Our 3D site loads faster than most static pages. GSAP scroll animations feel buttery smooth.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "CEO, GameStack",
    avatar: "https://i.pravatar.cc/120?img=7",
    text: "The bento grid layout with video backgrounds and tilt effects gave our gaming platform the premium feel we were after.",
    rating: 5,
  },
  {
    name: "Mei Tanaka",
    role: "Art Director, Studio Zen",
    avatar: "https://i.pravatar.cc/120?img=9",
    text: "Minimalist yet powerful. The elastic cursor and animated titles add personality without overwhelming the content. Pure craft.",
    rating: 5,
  },
  {
    name: "David Moreau",
    role: "Product Lead, FinEdge",
    avatar: "https://i.pravatar.cc/120?img=11",
    text: "We replaced our entire SaaS marketing site with this template. The preloader and floating nav create an app-like experience on the web.",
    rating: 5,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-general text-sm uppercase tracking-[0.3em] text-accent/60 mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card p-6 group hover:border-accent/20 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FaStar key={j} className="text-accent text-xs" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/50 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                  loading="lazy"
                />
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/30 text-xs font-mono">{t.role}</p>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="mt-4 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: "var(--gradient-accent, linear-gradient(135deg, #00f0ff, #915eff))" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
