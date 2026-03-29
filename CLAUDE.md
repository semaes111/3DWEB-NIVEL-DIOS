# 3DWEB NIVEL DIOS — Claude Code Instructions

## Project Identity
This is an immersive 3D portfolio/website template built with React 18 + Three.js + GSAP + Framer Motion + Tailwind CSS. It integrates patterns from 7 open-source 3D web repositories into a single cohesive system.

## Tech Stack (ALWAYS use these)
- **Framework**: React 18 + TypeScript + Vite 6
- **3D Engine**: Three.js (r161) + @react-three/fiber + @react-three/drei
- **Animation**: GSAP 3.14 (ScrollTrigger, useGSAP hook) + Framer Motion 11
- **Styling**: Tailwind CSS 3.4 with custom theme (see tailwind.config.js)
- **Utilities**: clsx + tailwind-merge via `cn()` from `@/lib/utils`
- **Icons**: react-icons (Fa, Ti families)
- **Other**: maath (random distributions), react-use, react-vertical-timeline-component

## Architecture
```
src/
├── components/
│   ├── canvas/       → Three.js/R3F 3D components (Ball, Stars, Loader)
│   ├── layout/       → Navbar, Footer, Preloader (app-level wrappers)
│   ├── sections/     → Page sections (Hero, About, Features, Experience, Tech, Projects, Story, Contact)
│   └── ui/           → Reusable UI (Button, AnimatedTitle, ElasticCursor, RoundedCorners)
├── constants/        → All data, nav items, portfolio content, links
├── hooks/            → Custom React hooks
├── lib/              → Utility functions (cn helper)
├── styles/           → Additional style modules
└── assets/           → Static images, icons
```

## File Naming Conventions
- Components: PascalCase (`Hero.tsx`, `BallCanvas.tsx`)
- Hooks: camelCase with `use` prefix (`useAlert.ts`)
- Constants: camelCase barrel export (`constants/index.ts`)
- Utilities: camelCase (`utils.ts`)

## Key Patterns to Follow

### 1. New Section Component
Every section follows this pattern:
```tsx
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MySectionName = () => {
  // GSAP animations via useGSAP hook or useEffect + gsap.context
  // Framer Motion for enter animations (whileInView)
  // Section header: <p className="font-general text-sm uppercase tracking-[0.3em] text-accent/60">
  // Title: <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
  // Gradient text: <span className="gradient-text">highlighted</span>
  return <section id="my-section" className="py-24 bg-primary"> ... </section>;
};
```

### 2. New 3D Canvas Component
```tsx
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "@/components/canvas/Loader";

// Inner mesh component (runs inside Canvas context)
const MyModel = (props: any) => {
  // useFrame for animations, useGLTF for models, useTexture for textures
  return <mesh>...</mesh>;
};

// Outer canvas wrapper (exported)
const MyModelCanvas = () => (
  <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enablePan={false} enableZoom={false} />
      <MyModel />
    </Suspense>
    <Preload all />
  </Canvas>
);
export default MyModelCanvas;
```

### 3. GSAP ScrollTrigger Animation
```tsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Inside component:
useGSAP(() => {
  gsap.from(".my-element", {
    opacity: 0, y: 50,
    scrollTrigger: {
      trigger: ".my-element",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});
```

### 4. Card with 3D Tilt (Mouse Follow)
```tsx
const handleMouseMove = (e: React.MouseEvent) => {
  const rect = cardRef.current!.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  gsap.to(cardRef.current, {
    rotateX: (y - 0.5) * -8,
    rotateY: (x - 0.5) * 8,
    transformPerspective: 600,
    duration: 0.3,
    ease: "power1.inOut",
  });
};
```

### 5. BentoTilt Grid (Features layout)
Use the BentoTilt wrapper from `Features.tsx` for any tiltable grid card. The perspective transform creates a subtle 3D hover effect.

## Design System

### Colors (use Tailwind classes)
- Primary bg: `bg-primary` (#0a0a0a)
- Accent cyan: `text-accent` (#00f0ff)
- Accent violet: `text-accent-violet` (#915EFF)
- Accent magenta: `text-accent-magenta` (#f272c8)
- Glass cards: `glass-card` class (blur + border)
- Gradient text: `gradient-text` class

### Typography
- Display/headings: `font-display` (Syne)
- Body text: `font-body` (DM Sans)
- Labels/nav: `font-general` (General Sans)
- Code/mono: `font-mono` (JetBrains Mono)

### CSS Utilities Available
- `flex-center` = flex items-center justify-center
- `absolute-center` = absolute centered with transform
- `glass-card` = glass morphism card
- `gradient-text` = cyan→violet→magenta gradient on text
- `glow-line` = horizontal gradient divider
- `data-grid-bg` = subtle grid pattern background
- `hero-heading` = massive display heading with gradient bold
- `nav-hover-btn` = nav link with underline animation

## Performance Rules
1. Always use `frameloop="demand"` on Canvas (renders only on interaction)
2. Cap DPR: `dpr={[1, 2]}`
3. Use mobile detection to skip heavy 3D on small screens
4. GSAP: always cleanup with `gsap.context().revert()`
5. Lazy load heavy components with `React.lazy()`
6. Videos: use `onLoadedData` counter pattern for preloading

## When Adding New Features
1. Add section component in `src/components/sections/`
2. Export and import in `App.tsx`
3. Add nav item in `src/constants/index.ts` NAV_ITEMS
4. Add data to constants (don't hardcode in components)
5. Follow the glass-card dark theme aesthetic
6. Test mobile fallback (no 3D canvas on <640px screens)

## Deployment
- Vercel: `vercel.json` included (SPA rewrites)
- Netlify: `netlify.toml` included
- VPS: `npm run build` → serve `dist/` folder

---

## MEGA UPGRADE — Componentes Adicionales

### 6 Secciones Nuevas

| Sección | Archivo | Descripción |
|---------|---------|-------------|
| Pricing | `sections/Pricing.tsx` | Cards glass con toggle yearly/monthly, plan destacado, features con check icons |
| Testimonials | `sections/Testimonials.tsx` | Grid de quotes con avatar, estrellas, hover glow line |
| Team | `sections/Team.tsx` | Cards con imagen hover-zoom, social overlay que aparece en hover |
| FAQ | `sections/FAQ.tsx` | Acordeón animado con AnimatePresence, icono + rotación |
| Gallery | `sections/Gallery.tsx` | Masonry grid con col-span/row-span dinámico, lightbox onClick |
| Stats | `sections/Stats.tsx` | Counters animados con GSAP ScrollTrigger, se disparan al entrar en viewport |

### 4 Efectos 3D Canvas Nuevos

| Efecto | Archivo | Uso |
|--------|---------|-----|
| ParticleField | `canvas/ParticleField.tsx` | 3000 partículas interactivas con additive blending, reacciona al mouse |
| MorphingSphere | `canvas/MorphingSphere.tsx` | Icosaedro deformado con MeshDistortMaterial, metálico iridiscente |
| Globe | `canvas/Globe.tsx` | Esfera wireframe con puntos de conexión y líneas, tracking mouse |
| ShaderBackground | `canvas/ShaderBackground.tsx` | Gradiente mesh animado con simplex noise GLSL, colores configurables |

### Sistema de Temas (lib/themes.ts)

Cambiar toda la web de industria con una línea:

```tsx
import { getTheme, applyTheme, loadThemeFonts } from "@/lib/themes";

const theme = getTheme("restaurant"); // "saas" | "restaurant" | "architecture" | "gaming" | "music" | "ecommerce"
applyTheme(theme);     // Inyecta CSS variables
loadThemeFonts(theme);  // Carga Google Fonts del preset
```

Cada tema define: colores, fuentes, gradientes, tipo de hero, color del cursor, y secciones recomendadas.

### Procesador de Imágenes (lib/imageProcessor.ts)

Homogenizar imágenes del usuario (temperatura de color, calidad, tamaño):

```tsx
import { processImage, processImageBatch, IMAGE_PRESETS } from "@/lib/imageProcessor";

// Imagen individual
const result = await processImage(file, {
  temperature: "cinematic",  // "warm" | "cool" | "neutral" | "cinematic" | "golden" | "moonlight"
  maxSize: 1920,
  quality: 0.9,
  vignette: true,
});
// result.dataUrl → usar en <img src={result.dataUrl} />

// Batch: todas las imágenes con la misma configuración
const batch = await processImageBatch(files, IMAGE_PRESETS.hero);

// Presets rápidos disponibles:
// IMAGE_PRESETS.hero     → 1920px, cinematic, vignette
// IMAGE_PRESETS.card     → 800px, warm
// IMAGE_PRESETS.gallery  → 1200px, neutral
// IMAGE_PRESETS.thumbnail → 400px, warm
// IMAGE_PRESETS.team     → 600px, golden, vignette
// IMAGE_PRESETS.darkMode → 1920px, moonlight, grain
```

### Presets de Contenido por Industria (constants/presets.ts)

Contenido listo para cada industria (textos, servicios, equipo, testimonios, precios, FAQ):

```tsx
import { getIndustryContent } from "@/constants/presets";

const content = getIndustryContent("restaurant"); // "saas" | "restaurant" | "gaming"
// content.siteName, content.services, content.testimonials, etc.
```

---

## COMMUNITY SKILLS INTEGRADAS (16 skills adicionales)

Estas skills se activan automáticamente según el contexto de lo que pidas:

### Diseño & Frontend
| Skill | Trigger | Capacidades |
|-------|---------|-------------|
| `senior-frontend` | "componente React", "optimizar bundle", "scaffold" | Component generator, bundle analyzer, React patterns, Next.js optimization |
| `frontend-design` | "diseño web", "landing page", "UI creativa" | Aesthetic direction, anti-generic AI design, bold visual choices |
| `ui-design-system` | "design tokens", "sistema de diseño" | Token generation, component architecture, responsive calcs, handoff docs |
| `ui-ux-pro-max` | "UI/UX", "paleta colores", "accesibilidad" | 50 styles, 97 palettes, 57 font pairings, 99 UX guidelines, 9 stacks |
| `3d-web-experience` | "Three.js", "WebGL", "escena 3D" | Stack selection, R3F/Spline/Vanilla, product configurators, optimization |
| `theme-factory` | "tema", "styling slides", "colores para deck" | 10 preset themes (Ocean, Sunset, Forest, etc.), custom theme creation |

### Marketing & Copy
| Skill | Trigger | Capacidades |
|-------|---------|-------------|
| `copywriting` | "copy", "headline", "CTA", "landing copy" | Conversion copywriting, page-by-page structure, objection handling |
| `marketing-psychology` | "psicología", "persuasión", "por qué compran" | 70+ mental models (FOMO, anchoring, social proof, Jobs to Be Done) |

### Web Data & Scraping
| Skill | Trigger | Capacidades |
|-------|---------|-------------|
| `scrape` | "scrapear web", "extraer contenido" | Bright Data Web Unlocker, markdown output, CAPTCHA bypass |
| `search` | "buscar en Google", "SERP" | Google SERP API via Bright Data, JSON structured results |
| `data-feeds` | "datos de Amazon", "LinkedIn profile" | 40+ datasets (Amazon, LinkedIn, Instagram, TikTok, YouTube) |
| `bright-data-best-practices` | "Bright Data", "proxy API" | Web Unlocker, SERP, Browser API, scraping patterns |
| `design-mirror` | "copia este diseño", "hazlo como X web" | Screenshot + CSS extraction, design token mapping, style replication |

### Backend & Productividad
| Skill | Trigger | Capacidades |
|-------|---------|-------------|
| `senior-backend` | "API REST", "database", "backend" | API scaffolder, migrations, load testing, security patterns |
| `file-organizer` | "organizar archivos", "cleanup" | Duplicate detection, smart organization, directory analysis |
| `excel-analysis` | "Excel", "spreadsheet", "pivot table" | Pandas analysis, pivot tables, charts, data cleaning |

### Uso combinado para webs de cliente

Cuando crees una web para un cliente, estas skills trabajan en conjunto:

```
1. copywriting → genera textos de venta para Hero, About, CTA
2. marketing-psychology → aplica principios de persuasión al layout
3. design-mirror → copia el estilo visual de la competencia del cliente
4. ui-ux-pro-max → selecciona paleta, fonts, y estilo óptimo
5. 3d-web-experience → implementa efectos Three.js apropiados
6. senior-frontend → optimiza bundle y genera componentes
7. theme-factory → aplica theme consistente a toda la web
```
