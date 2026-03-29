Create a new section component for the 3DWEB portfolio.

Section name: $ARGUMENTS

Requirements:
1. Create file at `src/components/sections/{Name}.tsx`
2. Follow the existing pattern from Hero.tsx or About.tsx:
   - Use GSAP ScrollTrigger for scroll animations
   - Use Framer Motion for entrance animations (whileInView)
   - Section wrapper: `<section id="{kebab-name}" className="py-24 bg-primary">`
   - Header pattern: subtitle (font-general, uppercase, tracking-wide, accent/60) + title (font-display, gradient-text)
3. Import and add to App.tsx in the correct position
4. Add nav item to constants/index.ts NAV_ITEMS array
5. Use glass-card class for any cards
6. Add mobile responsive breakpoints
7. TypeScript strict, no any types
