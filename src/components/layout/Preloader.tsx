import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { createContext, useContext, useEffect, useRef, useState, type PropsWithChildren } from "react";

interface PreloaderContextType {
  isLoading: boolean;
  loadingPercent: number;
}

const PreloaderContext = createContext<PreloaderContextType>({
  isLoading: true,
  loadingPercent: 0,
});

export const usePreloader = () => useContext(PreloaderContext);

const LOADING_TIME = 2.8;

const Loader = () => {
  const [percent, setPercent] = useState(0);
  const counterRef = useRef({ value: 0 });

  useEffect(() => {
    gsap.to(counterRef.current, {
      value: 100,
      duration: LOADING_TIME,
      ease: "slow(0.7,0.7,false)",
      onUpdate: () => setPercent(Math.round(counterRef.current.value)),
    });
  }, []);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="h-20 w-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex-center">
            <span className="text-3xl font-display font-black gradient-text">N</span>
          </div>
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent via-accent-violet to-accent-magenta opacity-20 blur-xl" />
        </motion.div>

        {/* Loading bar */}
        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${percent}%`,
              background: "linear-gradient(90deg, #00f0ff, #915EFF, #f272c8)",
            }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Percentage */}
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-4xl font-bold text-white tabular-nums">
            {percent}
          </span>
          <span className="font-mono text-sm text-white/40">%</span>
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-general text-xs uppercase tracking-[0.3em] text-white/30"
        >
          Initializing 3D Environment
        </motion.p>
      </div>
    </motion.div>
  );
};

export const Preloader = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const loadingRef = useRef({ value: 0 });

  useEffect(() => {
    gsap.to(loadingRef.current, {
      value: 100,
      duration: LOADING_TIME,
      ease: "slow(0.7,0.7,false)",
      onUpdate: () => setLoadingPercent(loadingRef.current.value),
      onComplete: () => setIsLoading(false),
    });
  }, []);

  return (
    <PreloaderContext.Provider value={{ isLoading, loadingPercent }}>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      {children}
    </PreloaderContext.Provider>
  );
};
