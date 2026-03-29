import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES } from "@/constants";

const ExperienceCard = ({
  experience,
}: {
  experience: (typeof EXPERIENCES)[number];
}) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgba(29, 24, 54, 0.6)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.06)",
      backdropFilter: "blur(24px)",
      borderRadius: "16px",
      boxShadow: "0 4px 30px rgba(0,240,255,0.03)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(0,240,255,0.2)" }}
    date={experience.date}
    dateClassName="text-white/40 font-mono text-sm"
    iconStyle={{
      background: experience.iconBg,
      border: "2px solid rgba(0,240,255,0.3)",
      boxShadow: "0 0 20px rgba(0,240,255,0.1)",
    }}
    icon={
      <div className="flex-center size-full text-2xl">
        {experience.icon}
      </div>
    }
  >
    <div>
      <h3 className="text-xl font-display font-bold text-white">
        {experience.title}
      </h3>
      <p className="text-sm font-mono text-accent/70 mt-1">
        {experience.company}
      </p>
    </div>

    <ul className="mt-5 ml-5 list-disc space-y-2">
      {experience.points.map((point, i) => (
        <li key={i} className="text-sm text-white/50 leading-relaxed pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 data-grid-bg">
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
            Career Path
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <VerticalTimeline lineColor="transparent">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={`experience-${i}`} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
