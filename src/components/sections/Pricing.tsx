import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const PLANS = [
  {
    name: "Starter",
    price: { monthly: 29, yearly: 290 },
    description: "Perfect for personal projects",
    features: ["3 Projects", "Basic 3D Effects", "Responsive Design", "Email Support", "1 Revision"],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: { monthly: 79, yearly: 790 },
    description: "Best for growing businesses",
    features: ["Unlimited Projects", "Advanced 3D + GSAP", "Custom Design System", "Priority Support", "5 Revisions", "Source Code", "SEO Optimization"],
    highlighted: true,
    cta: "Go Professional",
  },
  {
    name: "Enterprise",
    price: { monthly: 199, yearly: 1990 },
    description: "For agencies and teams",
    features: ["Everything in Pro", "White-label License", "Custom 3D Models", "Dedicated Manager", "Unlimited Revisions", "Performance Audit", "Deploy Assistance", "12-month Support"],
    highlighted: false,
    cta: "Contact Sales",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-general text-sm uppercase tracking-[0.3em] text-accent/60 mb-4">
            Pricing
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-general ${!isYearly ? "text-white" : "text-white/30"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-white/10 border border-white/10 transition-colors"
            >
              <div
                className={`absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300 ${
                  isYearly ? "left-7 bg-accent" : "left-0.5 bg-white/40"
                }`}
                style={isYearly ? { boxShadow: "0 0 12px var(--color-accent, #00f0ff)" } : {}}
              />
            </button>
            <span className={`text-sm font-general ${isYearly ? "text-white" : "text-white/30"}`}>
              Yearly <span className="text-accent-lime text-xs ml-1">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative glass-card p-8 flex flex-col ${
                plan.highlighted
                  ? "border-accent/30 scale-105 md:scale-110 z-10"
                  : "hover:border-white/10"
              } transition-all duration-500`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono uppercase tracking-wider"
                  style={{ background: "var(--gradient-accent, linear-gradient(135deg, #00f0ff, #915eff))" }}
                >
                  <span className="text-primary font-bold">Most Popular</span>
                </div>
              )}

              <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
              <p className="text-white/40 text-sm mt-2">{plan.description}</p>

              <div className="mt-6 mb-8">
                <span className="text-4xl font-display font-bold text-white">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-white/30 text-sm ml-2">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/60">
                    <FaCheck className="text-accent text-xs flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-xl font-general text-sm uppercase tracking-wider transition-all duration-300 ${
                  plan.highlighted
                    ? "text-primary font-bold hover:shadow-lg hover:shadow-accent/20"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
                style={plan.highlighted ? { background: "var(--gradient-accent, linear-gradient(135deg, #00f0ff, #915eff))" } : {}}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
