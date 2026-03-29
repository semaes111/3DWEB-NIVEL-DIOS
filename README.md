# 🌐 Nexus — Integrated 3D Portfolio

An immersive, production-grade 3D portfolio built by integrating the best resources, patterns, and techniques from **7 open-source repositories** into a single cohesive project.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-r161-000000?logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?logo=greensock)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)

---

## 🧬 Source Repositories & What Was Integrated

| # | Repository | Key Resources Extracted |
|---|-----------|----------------------|
| 1 | **[reactjs18-3d-portfolio](https://github.com/ladunjexa/reactjs18-3d-portfolio)** | 3D Canvas components (Ball, Stars, Earth), Vertical Timeline, Contact form with EmailJS, Tech ball icons with `@react-three/drei` Decal/Float, SectionWrapper HOC pattern |
| 2 | **[verge3d-blender-addon](https://github.com/Soft8Soft/verge3d-blender-addon)** | Blender-to-web pipeline concepts, glTF export patterns, 3D asset optimization strategies for the project configurator showcase |
| 3 | **[roboflow-100-3d-website](https://github.com/roboflow/roboflow-100-3d-website)** | Three.js raw scene setup, atlas texture approach for point clouds, TrackballControls camera pattern, data visualization grid background (`data-grid-bg`) |
| 4 | **[3D-Portfolio (Jayant)](https://github.com/Jayant-1/3D-Portfolio)** | Elastic cursor with GSAP physics, Preloader with animated percentage, Spline 3D integration pattern, ProjectModal with keyboard navigation, Easter egg patterns |
| 5 | **[3d-website](https://github.com/David-Kasilia/3d-website)** | Multi-page structure concepts, 3D product showcase patterns, responsive image grid approach |
| 6 | **[3D_portfolio (adrianhajdin)](https://github.com/adrianhajdin/3D_portfolio)** | Island/Bird 3D model pattern, Page-based routing with 3D scenes, `useAlert` hook, CTA component, `@react-spring/three` animation concepts, spatial audio integration |
| 7 | **[game-website](https://github.com/sanidhyy/game-website)** | GSAP ScrollTrigger hero with video transitions, BentoTilt grid with perspective transforms, AnimatedTitle with 3D word reveals, Floating navbar with scroll detection, Audio indicator, Story section with clip-path masks, Contact with decorative clip-paths, RoundedCorners SVG filter, CSS architecture (custom fonts, clip-paths, utility classes) |

---

## 🏗️ Architecture

```
src/
├── components/
│   ├── canvas/          # Three.js/R3F 3D components
│   │   ├── Ball.tsx     # ← repo1: Floating icosahedron with texture decals
│   │   ├── Stars.tsx    # ← repo1: Animated star field with maath
│   │   └── Loader.tsx   # ← repo1: Canvas loading indicator
│   ├── layout/
│   │   ├── Navbar.tsx   # ← repo7: Floating nav + scroll hide/show + audio
│   │   ├── Footer.tsx   # ← repo7: Social links footer
│   │   └── Preloader.tsx # ← repo4: GSAP-animated loading screen
│   ├── sections/
│   │   ├── Hero.tsx     # ← repo7: Video transition hero with GSAP clip-paths
│   │   ├── About.tsx    # ← repo7 clip animation + repo1 service cards
│   │   ├── Features.tsx # ← repo7: BentoTilt grid with video backgrounds
│   │   ├── Experience.tsx # ← repo1: Vertical timeline with glass cards
│   │   ├── Tech.tsx     # ← repo1: 3D floating balls for tech stack
│   │   ├── Projects.tsx # ← repo1 cards + repo4 tilt + repo4 modal patterns
│   │   ├── Story.tsx    # ← repo7: Tilt image with SVG filter masks
│   │   └── Contact.tsx  # ← repo1 form + repo7 clip-path decorations
│   └── ui/
│       ├── Button.tsx        # ← repo7: Styled button with icon support
│       ├── AnimatedTitle.tsx  # ← repo7: 3D word-by-word scroll reveal
│       ├── ElasticCursor.tsx  # ← repo4: Physics-based cursor with GSAP
│       └── RoundedCorners.tsx # ← repo7: SVG gooey filter
├── constants/
│   └── index.ts         # All portfolio data, nav items, links, config
├── lib/
│   └── utils.ts         # cn() helper (clsx + tailwind-merge)
├── index.css            # Integrated styles from all repos
├── App.tsx              # Root composition
└── main.tsx             # Entry point
```

---

## ⚡ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18 + TypeScript + Vite |
| **3D Engine** | Three.js + React Three Fiber + Drei |
| **Animation** | GSAP (ScrollTrigger, useGSAP) + Framer Motion |
| **Styling** | Tailwind CSS 3 + Custom CSS (clip-paths, filters, gradients) |
| **Physics** | maath (random point distributions) |
| **UI** | react-icons, react-vertical-timeline, react-use |
| **Build** | Vite 6 + PostCSS + Autoprefixer |

---

## 🚀 Quick Start

```bash
# Clone
git clone <your-repo-url>
cd integrated-3d-portfolio

# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `accent` | `#00f0ff` | Primary highlights, links, glows |
| `accent-violet` | `#915EFF` | Secondary accent, gradients |
| `accent-magenta` | `#f272c8` | Tertiary accent, star particles |
| `accent-lime` | `#CDFF57` | Tags, badges |
| `primary` | `#0a0a0a` | Main background |
| `dark-200` | `#1d1836` | Card backgrounds |

### Typography

| Font | Role | Source |
|------|------|--------|
| **Syne** | Display headings (hero, bento titles) | Google Fonts |
| **DM Sans** | Body text | Google Fonts |
| **General Sans** | Navigation, labels, uppercase text | CDN Fonts |
| **JetBrains Mono** | Code, percentages, tags | Google Fonts |

### Animation Patterns

- **Hero**: GSAP clip-path morphing on scroll + video crossfade transitions
- **Titles**: 3D word-by-word reveal with rotateX/rotateY on scroll trigger
- **Cards**: Perspective tilt on mouse move via GSAP quickSetter
- **Cursor**: Elastic blob following mouse with GSAP ticker physics
- **Nav**: Auto-hide on scroll down, show on scroll up with GSAP y-translate
- **About**: Clip-path expansion from small rounded rect to fullscreen
- **Tech**: Floating 3D icosahedrons with texture decals and orbit controls

---

## 🔧 Environment Variables (Optional)

For the contact form to send real emails via EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_ACCESS_TOKEN=your_access_token
```

---

## 📦 Production Optimization

The project includes several performance strategies:

1. **Conditional 3D rendering** — Tech balls fall back to flat icons on mobile (`<640px`)
2. **Demand frame loop** — Canvas components use `frameloop="demand"` to avoid unnecessary GPU cycles
3. **DPR capping** — `dpr={[1, 2]}` prevents excessive pixel density on retina screens
4. **Lazy video loading** — Hero videos load incrementally with `onLoadedData` counter
5. **GSAP context cleanup** — All GSAP ScrollTrigger instances properly revert on unmount
6. **Tailwind purge** — Only used classes ship to production CSS

---

## 📄 License

MIT — Built by integrating open-source resources. See individual source repos for their respective licenses.
