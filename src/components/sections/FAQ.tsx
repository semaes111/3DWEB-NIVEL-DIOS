import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    q: "What technologies do you use for 3D web development?",
    a: "Our core stack includes React 18, Three.js with React Three Fiber, GSAP for scroll animations, and Framer Motion for UI transitions. We use Vite for blazing-fast builds and Tailwind CSS for styling.",
  },
  {
    q: "How long does a typical 3D website project take?",
    a: "A standard project takes 2-4 weeks from concept to deployment. Complex projects with custom 3D models, advanced animations, and multiple interactive sections may take 4-8 weeks.",
  },
  {
    q: "Will my 3D website work on mobile devices?",
    a: "Yes. We implement intelligent fallbacks — heavy WebGL effects are replaced with optimized alternatives on mobile. Every site is fully responsive and tested across iOS and Android devices.",
  },
  {
    q: "What about SEO and page load performance?",
    a: "We code-split all 3D libraries into separate chunks, lazy-load assets, use demand-based rendering, and cap GPU usage. Our sites consistently score 80+ on Lighthouse while delivering premium visual experiences.",
  },
  {
    q: "Can I update the content myself after launch?",
    a: "All content lives in a single constants file (constants/index.ts). You can update text, images, projects, and team info by editing this file — no deep coding knowledge required. We also offer CMS integration.",
  },
  {
    q: "Do you provide the source code?",
    a: "Professional and Enterprise plans include full TypeScript source code. You own everything — no lock-in, no recurring platform fees. Deploy anywhere: Vercel, Netlify, or your own VPS.",
  },
];

const AccordionItem = ({ faq, index, isOpen, toggle }: {
  faq: typeof FAQS[0]; index: number; isOpen: boolean; toggle: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className={`glass-card overflow-hidden transition-all duration-500 ${
      isOpen ? "border-accent/20" : ""
    }`}
  >
    <button
      onClick={toggle}
      className="w-full flex items-center justify-between p-6 text-left group"
    >
      <span className="font-display font-semibold text-white text-base pr-4 group-hover:text-accent transition-colors">
        {faq.q}
      </span>
      <span
        className={`text-accent text-xl flex-shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-45" : ""
        }`}
      >
        +
      </span>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 text-white/40 text-sm leading-relaxed border-t border-white/5 pt-4">
            {faq.a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-primary">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-general text-sm uppercase tracking-[0.3em] text-accent/60 mb-4">
            FAQ
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
