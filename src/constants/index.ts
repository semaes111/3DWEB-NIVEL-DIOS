import { FaGithub, FaLinkedin, FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// ─── NAVIGATION (repo7 style) ─────────────────────────────────
export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://github.com", icon: FaGithub },
  { href: "https://linkedin.com", icon: FaLinkedin },
  { href: "https://discord.com", icon: FaDiscord },
  { href: "https://x.com", icon: FaXTwitter },
  { href: "https://youtube.com", icon: FaYoutube },
] as const;

// ─── HERO VIDEO LINKS (repo7 pattern) ─────────────────────────
export const VIDEO_LINKS = {
  hero1: "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc5wEKtxLYRyJDZsOPGdFTt0lQuHLkeqjKCao1",
  hero2: "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcLjP2Y7QEQuN5THDwzeBx4OvmaFZjP6ysCKk3",
  hero3: "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcpmpmzmuj1IHWSEokgRuN2hMcUpBq0xQery3i",
  hero4: "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcpB0GHsouj1IHWSEokgRuN2hMcUpBq0xQery3",
  feature1: "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc56aV03LYRyJDZsOPGdFTt0lQuHLkeqjKCao1",
  feature2: "https://93w95scdts.ufs.sh/f/AOfILeWJzqCclcn5JiTo8NUtBfpgkOmXZ2CT3DjMr19Yqlac",
  feature3: "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcbZvH6O7fXDrfMZ6S457EQsgoxTCIz1kjlnVd",
  feature4: "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcSrGHFCyiMbxBtTacUmFzn4dZpwVYNfvR6WLg",
  feature5: "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc1qT68sSEu6tgkCBNP3FH45AUe70hrbTaxYDm",
};

// ─── ABOUT SERVICES (repo1 + repo6 pattern) ───────────────────
export const SERVICES = [
  {
    title: "3D Web Developer",
    icon: "🌐",
    description: "Building immersive 3D experiences with Three.js, React Three Fiber, and WebGL.",
  },
  {
    title: "Frontend Architect",
    icon: "⚡",
    description: "Crafting performant UIs with React, TypeScript, and modern design systems.",
  },
  {
    title: "Creative Technologist",
    icon: "🎨",
    description: "Blending art and code with GSAP, Framer Motion, and procedural generation.",
  },
  {
    title: "Full Stack Engineer",
    icon: "🔧",
    description: "End-to-end solutions with Node.js, databases, and cloud infrastructure.",
  },
] as const;

// ─── EXPERIENCE (repo1 timeline pattern) ──────────────────────
export const EXPERIENCES = [
  {
    title: "Senior 3D Web Developer",
    company: "Nexus Digital",
    icon: "🚀",
    iconBg: "#0a0a0a",
    date: "Jan 2024 — Present",
    points: [
      "Lead development of immersive 3D web experiences using React Three Fiber and WebGL.",
      "Architected real-time data visualization pipeline processing 100K+ data points with Three.js.",
      "Implemented GSAP-driven scroll animations achieving 60fps on mobile devices.",
      "Mentored team of 5 developers on 3D web development best practices.",
    ],
  },
  {
    title: "Creative Developer",
    company: "Verge Studios",
    icon: "🎮",
    iconBg: "#151030",
    date: "Mar 2022 — Dec 2023",
    points: [
      "Built interactive 3D product configurators with Blender-to-web pipeline using glTF/Verge3D.",
      "Developed game-like landing pages with physics-based animations and particle systems.",
      "Integrated Spline 3D scenes into React applications with real-time interactivity.",
      "Reduced page load time by 40% through model optimization and progressive loading.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "DataViz Corp",
    icon: "📊",
    iconBg: "#1d1836",
    date: "Jun 2021 — Feb 2022",
    points: [
      "Created 3D scatter plot visualizations for ML datasets using Three.js point clouds.",
      "Built responsive dashboards with React, Tailwind CSS, and D3.js integration.",
      "Implemented WebSocket-based real-time data streaming for live visualizations.",
      "Designed component library used across 12+ internal applications.",
    ],
  },
  {
    title: "Junior Developer",
    company: "PixelForge",
    icon: "💻",
    iconBg: "#232631",
    date: "Jan 2020 — May 2021",
    points: [
      "Developed responsive web applications using React and vanilla JavaScript.",
      "Built animated landing pages with CSS animations and intersection observers.",
      "Collaborated with UI/UX designers to implement pixel-perfect designs.",
      "Contributed to open-source 3D web projects and three.js ecosystem.",
    ],
  },
] as const;

// ─── TECH STACK (repo1 ball icons pattern) ────────────────────
export const TECHNOLOGIES = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
] as const;

// ─── PROJECTS (repo1 + repo4 pattern) ─────────────────────────
export const PROJECTS = [
  {
    name: "3D Data Explorer",
    description:
      "Interactive 3D scatter plot visualization for ML datasets using CLIP embeddings and t-SNE dimensionality reduction. Renders 100K+ data points with WebGL atlas textures.",
    tags: [
      { name: "three.js", color: "text-accent" },
      { name: "webgl", color: "text-accent-violet" },
      { name: "python", color: "text-accent-magenta" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    name: "Verge3D Configurator",
    description:
      "Real-time 3D product configurator built with Blender and Verge3D pipeline. Features material swapping, animation controls, and AR preview on mobile devices.",
    tags: [
      { name: "blender", color: "text-accent-orange" },
      { name: "verge3d", color: "text-accent" },
      { name: "react", color: "text-accent-violet" },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    name: "GameFi Dashboard",
    description:
      "Animated gaming dashboard with GSAP scroll-triggered animations, bento grid layout, video backgrounds, and real-time leaderboard with WebSocket integration.",
    tags: [
      { name: "gsap", color: "text-accent-lime" },
      { name: "react", color: "text-accent" },
      { name: "tailwind", color: "text-accent-violet" },
    ],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    name: "Island Portfolio",
    description:
      "Interactive 3D island portfolio with React Three Fiber. Features animated bird models, day/night cycle, and spatial audio that responds to user navigation.",
    tags: [
      { name: "r3f", color: "text-accent" },
      { name: "drei", color: "text-accent-magenta" },
      { name: "react-spring", color: "text-accent-lime" },
    ],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    name: "Spline Keyboard UI",
    description:
      "Interactive skill showcase using Spline 3D keyboard model with GSAP-driven section transitions, sound effects, and responsive state management.",
    tags: [
      { name: "spline", color: "text-accent-violet" },
      { name: "gsap", color: "text-accent-lime" },
      { name: "react", color: "text-accent" },
    ],
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    name: "Neural Network Viz",
    description:
      "Real-time neural network training visualizer with Three.js particle system representing neurons and connections. Features live loss curves and activation maps.",
    tags: [
      { name: "three.js", color: "text-accent" },
      { name: "tensorflow", color: "text-accent-orange" },
      { name: "d3", color: "text-accent-magenta" },
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600",
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
] as const;

// ─── CONTACT CONFIG (repo1 pattern) ───────────────────────────
export const CONTACT_CONFIG = {
  title: "Get in Touch",
  subtitle: "CONTACT",
  form: {
    name: { span: "Your Name", placeholder: "What's your name?" },
    email: { span: "Your Email", placeholder: "What's your email?" },
    message: { span: "Your Message", placeholder: "What would you like to say?" },
  },
} as const;
