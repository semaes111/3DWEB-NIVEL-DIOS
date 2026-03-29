import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import { AnimatedTitle } from "@/components/ui/AnimatedTitle";
import { SERVICES } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <section id="about" className="min-h-screen w-screen">
      {/* About header with animated title */}
      <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase tracking-[0.3em] text-accent/60">
          About Me
        </p>

        <AnimatedTitle containerClass="mt-5 !text-white text-center">
          {"Crafting <b>i</b>mmersive<br />digital <b>e</b>xperiences"}
        </AnimatedTitle>

        <div className="about-subtext">
          <p className="text-white/50">
            A creative developer passionate about pushing the boundaries of web technology
          </p>
          <p className="text-white/30 text-sm mt-2">
            Specializing in 3D, animation, and interactive storytelling
          </p>
        </div>
      </div>

      {/* Expanding image clip (repo7 pattern) */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
            alt="Digital Space"
            className="absolute top-0 left-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        </div>
      </div>

      {/* Services grid (repo1 pattern) */}
      <div className="relative -mt-20 z-10 px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="glass-card p-6 group hover:border-accent/20 transition-all duration-500"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 h-px w-0 group-hover:w-full bg-gradient-to-r from-accent to-accent-violet transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
