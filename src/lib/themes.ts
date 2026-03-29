// ─── THEME ENGINE ──────────────────────────────────────────────
// Switch entire design system by changing one variable
// Usage: import { getTheme } from "@/lib/themes"; const theme = getTheme("saas");

export interface Theme {
  id: string;
  name: string;
  industry: string;
  colors: {
    primary: string;
    accent: string;
    accentSecondary: string;
    accentTertiary: string;
    accentTag: string;
    dark100: string;
    dark200: string;
    dark300: string;
  };
  fonts: {
    display: string;
    body: string;
    general: string;
    mono: string;
    googleImport: string;
  };
  gradientCSS: string;
  sections: string[];
  meta: {
    heroStyle: "video" | "particles" | "globe" | "shader" | "model";
    cursorColor: string;
    starColor: string;
    glowLineGradient: string;
  };
}

// ─── 6 INDUSTRY PRESETS ────────────────────────────────────────

export const THEMES: Record<string, Theme> = {
  // ── TECH / SAAS ──
  saas: {
    id: "saas",
    name: "Cyber Nexus",
    industry: "Tech / SaaS",
    colors: {
      primary: "#0a0a0a",
      accent: "#00f0ff",
      accentSecondary: "#915EFF",
      accentTertiary: "#f272c8",
      accentTag: "#CDFF57",
      dark100: "#100d25",
      dark200: "#1d1836",
      dark300: "#232631",
    },
    fonts: {
      display: "Syne",
      body: "DM Sans",
      general: "General Sans",
      mono: "JetBrains Mono",
      googleImport:
        "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700&display=swap",
    },
    gradientCSS: "linear-gradient(135deg, #00f0ff 0%, #915EFF 50%, #f272c8 100%)",
    sections: ["hero", "about", "features", "experience", "tech", "projects", "pricing", "testimonials", "stats", "contact"],
    meta: {
      heroStyle: "particles",
      cursorColor: "rgba(0, 240, 255, 0.4)",
      starColor: "#00f0ff",
      glowLineGradient: "linear-gradient(90deg, transparent, #00f0ff, #915eff, #f272c8, transparent)",
    },
  },

  // ── RESTAURANTE ──
  restaurant: {
    id: "restaurant",
    name: "Maison Dorée",
    industry: "Restaurante / Gastronomía",
    colors: {
      primary: "#0a0a08",
      accent: "#C9A962",
      accentSecondary: "#8B6914",
      accentTertiary: "#D4A843",
      accentTag: "#E8DCC8",
      dark100: "#1a1710",
      dark200: "#201d14",
      dark300: "#2a2720",
    },
    fonts: {
      display: "Playfair Display",
      body: "Lora",
      general: "General Sans",
      mono: "JetBrains Mono",
      googleImport:
        "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Lora:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
    },
    gradientCSS: "linear-gradient(135deg, #C9A962 0%, #8B6914 50%, #D4A843 100%)",
    sections: ["hero", "about", "gallery", "features", "team", "testimonials", "faq", "contact"],
    meta: {
      heroStyle: "video",
      cursorColor: "rgba(201, 169, 98, 0.4)",
      starColor: "#C9A962",
      glowLineGradient: "linear-gradient(90deg, transparent, #C9A962, #8B6914, #D4A843, transparent)",
    },
  },

  // ── ARQUITECTURA / DISEÑO ──
  architecture: {
    id: "architecture",
    name: "Arc Studio",
    industry: "Arquitectura / Diseño",
    colors: {
      primary: "#0f0f0f",
      accent: "#E8E0D5",
      accentSecondary: "#A69882",
      accentTertiary: "#C4B8A5",
      accentTag: "#D4CFC7",
      dark100: "#1a1918",
      dark200: "#222120",
      dark300: "#2c2b2a",
    },
    fonts: {
      display: "Cormorant Garamond",
      body: "DM Sans",
      general: "General Sans",
      mono: "JetBrains Mono",
      googleImport:
        "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap",
    },
    gradientCSS: "linear-gradient(135deg, #E8E0D5 0%, #A69882 50%, #C4B8A5 100%)",
    sections: ["hero", "about", "gallery", "projects", "experience", "team", "testimonials", "contact"],
    meta: {
      heroStyle: "model",
      cursorColor: "rgba(232, 224, 213, 0.3)",
      starColor: "#A69882",
      glowLineGradient: "linear-gradient(90deg, transparent, #E8E0D5, #A69882, #C4B8A5, transparent)",
    },
  },

  // ── GAMING / ESPORTS ──
  gaming: {
    id: "gaming",
    name: "Vortex Arena",
    industry: "Gaming / Esports",
    colors: {
      primary: "#050508",
      accent: "#FF4655",
      accentSecondary: "#FF8C00",
      accentTertiary: "#FFD700",
      accentTag: "#FF6B81",
      dark100: "#0d0d14",
      dark200: "#14141e",
      dark300: "#1c1c28",
    },
    fonts: {
      display: "Orbitron",
      body: "Rajdhani",
      general: "General Sans",
      mono: "JetBrains Mono",
      googleImport:
        "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
    },
    gradientCSS: "linear-gradient(135deg, #FF4655 0%, #FF8C00 50%, #FFD700 100%)",
    sections: ["hero", "about", "features", "stats", "projects", "team", "pricing", "testimonials", "faq", "contact"],
    meta: {
      heroStyle: "shader",
      cursorColor: "rgba(255, 70, 85, 0.5)",
      starColor: "#FF4655",
      glowLineGradient: "linear-gradient(90deg, transparent, #FF4655, #FF8C00, #FFD700, transparent)",
    },
  },

  // ── MÚSICA / ARTE ──
  music: {
    id: "music",
    name: "Resonance",
    industry: "Música / Arte / Creativo",
    colors: {
      primary: "#08060a",
      accent: "#FF6B9D",
      accentSecondary: "#C44DFF",
      accentTertiary: "#6BFFB8",
      accentTag: "#FFB86B",
      dark100: "#120e18",
      dark200: "#1a1520",
      dark300: "#241e2c",
    },
    fonts: {
      display: "Bebas Neue",
      body: "Inter",
      general: "General Sans",
      mono: "JetBrains Mono",
      googleImport:
        "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
    },
    gradientCSS: "linear-gradient(135deg, #FF6B9D 0%, #C44DFF 50%, #6BFFB8 100%)",
    sections: ["hero", "about", "gallery", "projects", "experience", "testimonials", "contact"],
    meta: {
      heroStyle: "shader",
      cursorColor: "rgba(255, 107, 157, 0.4)",
      starColor: "#C44DFF",
      glowLineGradient: "linear-gradient(90deg, transparent, #FF6B9D, #C44DFF, #6BFFB8, transparent)",
    },
  },

  // ── E-COMMERCE ──
  ecommerce: {
    id: "ecommerce",
    name: "Luxe Store",
    industry: "E-commerce / Retail",
    colors: {
      primary: "#0a0a0a",
      accent: "#FF6B35",
      accentSecondary: "#1DB954",
      accentTertiary: "#4A90D9",
      accentTag: "#FFB800",
      dark100: "#141414",
      dark200: "#1e1e1e",
      dark300: "#282828",
    },
    fonts: {
      display: "Space Grotesk",
      body: "DM Sans",
      general: "General Sans",
      mono: "JetBrains Mono",
      googleImport:
        "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap",
    },
    gradientCSS: "linear-gradient(135deg, #FF6B35 0%, #1DB954 50%, #4A90D9 100%)",
    sections: ["hero", "about", "features", "projects", "pricing", "testimonials", "stats", "faq", "contact"],
    meta: {
      heroStyle: "globe",
      cursorColor: "rgba(255, 107, 53, 0.4)",
      starColor: "#FF6B35",
      glowLineGradient: "linear-gradient(90deg, transparent, #FF6B35, #1DB954, #4A90D9, transparent)",
    },
  },
};

// ─── THEME ACCESSOR ────────────────────────────────────────────

export const getTheme = (id: string): Theme => {
  return THEMES[id] || THEMES.saas;
};

export const getAllThemeIds = (): string[] => Object.keys(THEMES);

// ─── CSS VARIABLE INJECTOR ─────────────────────────────────────
// Call this once on app mount to apply theme colors as CSS variables

export const applyTheme = (theme: Theme): void => {
  const root = document.documentElement;
  const { colors, fonts, gradientCSS, meta } = theme;

  // Colors
  root.style.setProperty("--color-primary", colors.primary);
  root.style.setProperty("--color-accent", colors.accent);
  root.style.setProperty("--color-accent-secondary", colors.accentSecondary);
  root.style.setProperty("--color-accent-tertiary", colors.accentTertiary);
  root.style.setProperty("--color-accent-tag", colors.accentTag);
  root.style.setProperty("--color-dark-100", colors.dark100);
  root.style.setProperty("--color-dark-200", colors.dark200);
  root.style.setProperty("--color-dark-300", colors.dark300);

  // Fonts
  root.style.setProperty("--font-display", `"${fonts.display}", sans-serif`);
  root.style.setProperty("--font-body", `"${fonts.body}", sans-serif`);
  root.style.setProperty("--font-general", `"${fonts.general}", sans-serif`);
  root.style.setProperty("--font-mono", `"${fonts.mono}", monospace`);

  // Gradient
  root.style.setProperty("--gradient-accent", gradientCSS);

  // Meta
  root.style.setProperty("--cursor-color", meta.cursorColor);
  root.style.setProperty("--star-color", meta.starColor);
  root.style.setProperty("--glow-line-gradient", meta.glowLineGradient);

  // Background
  root.style.setProperty("--bg-primary", colors.primary);
};

// ─── DYNAMIC FONT LOADER ──────────────────────────────────────

export const loadThemeFonts = (theme: Theme): void => {
  const existingLink = document.getElementById("theme-fonts");
  if (existingLink) existingLink.remove();

  const link = document.createElement("link");
  link.id = "theme-fonts";
  link.rel = "stylesheet";
  link.href = theme.fonts.googleImport;
  document.head.appendChild(link);
};
