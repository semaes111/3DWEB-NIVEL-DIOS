/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        accent: {
          DEFAULT: "#00f0ff",
          violet: "#915EFF",
          magenta: "#f272c8",
          lime: "#CDFF57",
          orange: "#FF6B35",
        },
        dark: {
          100: "#100d25",
          200: "#1d1836",
          300: "#232631",
        },
        blue: {
          50: "#dfdff0",
          75: "#dfdff2",
          100: "#f0f2fa",
          200: "#101010",
          300: "#4fb7dd",
        },
        violet: {
          300: "#5724ff",
          50: "#b4b4cc",
        },
      },
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["General Sans", "sans-serif"],
        circular: ["circular-web", "sans-serif"],
        robert: ["robert-medium", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/herobg.png')",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, hsla(280,100%,70%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(280,100%,70%,0.1) 0px, transparent 50%)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
