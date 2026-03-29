import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import { NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) void audioElementRef.current?.play();
    else audioElementRef.current?.pause();
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <header
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-7">
            <a href="#hero" className="transition hover:opacity-75 group">
              <div className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm flex-center relative overflow-hidden">
                <span className="text-lg font-display font-black gradient-text relative z-10">N</span>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
            <Button
              rightIcon={TiLocationArrow}
              containerClass="bg-accent/10 border border-accent/20 md:flex hidden items-center justify-center gap-1 text-accent"
            >
              Portfolio
            </Button>
          </div>

          {/* Nav items */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {NAV_ITEMS.map(({ label, href }) => (
                <a key={href} href={href} className="nav-hover-btn text-white/60">
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Audio indicator */}
              <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-1 p-2 transition hover:opacity-75"
                title="Toggle Audio"
              >
                <audio ref={audioElementRef} className="hidden" loop />
                {Array(4)
                  .fill("")
                  .map((_, i) => (
                    <div
                      key={i}
                      className={cn("indicator-line", isIndicatorActive && "active")}
                      style={{ animationDelay: `${(i + 1) * 0.1}s` } as React.CSSProperties}
                    />
                  ))}
              </button>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="transition hover:opacity-75"
                title="Source Code"
              >
                <FaGithub className="size-5 text-white/60 hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
