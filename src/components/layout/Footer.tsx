import { SOCIAL_LINKS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-screen bg-dark-200 py-6 border-t border-white/5">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-8 md:flex-row">
        <p className="text-center text-sm text-white/40 md:text-left">
          &copy; <span className="font-semibold gradient-text">Nexus</span>{" "}
          {new Date().getFullYear()}. Crafted with Three.js, GSAP & React.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-white/30 transition-all duration-300 hover:text-accent hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-white/30">
          <a href="#" className="text-center text-sm transition hover:text-accent hover:underline md:text-right">
            Privacy Policy
          </a>
          <span className="text-white/10">|</span>
          <a href="#" className="text-center text-sm transition hover:text-accent hover:underline md:text-right">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};
