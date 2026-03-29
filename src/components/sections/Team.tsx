import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const TEAM = [
  {
    name: "Alex Morgan",
    role: "Lead 3D Developer",
    avatar: "https://i.pravatar.cc/300?img=12",
    bio: "WebGL specialist with 8+ years of Three.js experience",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Yuki Tanaka",
    role: "Creative Director",
    avatar: "https://i.pravatar.cc/300?img=25",
    bio: "Former Pixar designer turned web creative technologist",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Priya Sharma",
    role: "Motion Designer",
    avatar: "https://i.pravatar.cc/300?img=23",
    bio: "GSAP ambassador and Framer Motion core contributor",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Leo Dubois",
    role: "Full Stack Engineer",
    avatar: "https://i.pravatar.cc/300?img=53",
    bio: "React architect and performance optimization specialist",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Team = () => (
  <section id="team" className="py-24 bg-primary">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-general text-sm uppercase tracking-[0.3em] text-accent/60 mb-4">
          The Team
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
          Meet the <span className="gradient-text">Creators</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.name}
            custom={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

              {/* Social overlay — appears on hover */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {member.socials.github && (
                  <a href={member.socials.github} className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex-center hover:bg-accent/20 transition-colors">
                    <FaGithub className="text-white text-sm" />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex-center hover:bg-accent/20 transition-colors">
                    <FaLinkedin className="text-white text-sm" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex-center hover:bg-accent/20 transition-colors">
                    <FaXTwitter className="text-white text-sm" />
                  </a>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="p-5 bg-dark-200/60">
              <h3 className="font-display font-bold text-white text-lg">{member.name}</h3>
              <p className="text-accent text-xs font-mono uppercase tracking-wider mt-1">{member.role}</p>
              <p className="text-white/30 text-sm mt-2">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
