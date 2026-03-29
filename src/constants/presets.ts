// ─── INDUSTRY CONTENT PRESETS ──────────────────────────────────
// Pre-built constants/index.ts content for each industry
// Usage: import { getIndustryContent } from "@/constants/presets";
//        const content = getIndustryContent("restaurant");

export interface IndustryContent {
  id: string;
  siteName: string;
  tagline: string;
  heroHeading: string;
  heroSubheading: string;
  heroCTA: string;
  aboutTitle: string;
  aboutDescription: string;
  services: Array<{ title: string; icon: string; description: string }>;
  experiences: Array<{
    title: string; company: string; icon: string;
    iconBg: string; date: string; points: string[];
  }>;
  projects: Array<{
    name: string; description: string;
    tags: Array<{ name: string; color: string }>;
    image: string;
  }>;
  testimonials: Array<{
    name: string; role: string; text: string; rating: number;
  }>;
  team: Array<{
    name: string; role: string; bio: string;
  }>;
  stats: Array<{ value: number; suffix: string; label: string; icon: string }>;
  pricing: Array<{
    name: string; price: { monthly: number; yearly: number };
    description: string; features: string[];
    highlighted: boolean; cta: string;
  }>;
  faqs: Array<{ q: string; a: string }>;
  metaDescription: string;
}

// ─── SAAS ──────────────────────────────────────────────────────

const SAAS_CONTENT: IndustryContent = {
  id: "saas",
  siteName: "NexaFlow",
  tagline: "AI-Powered Workflow Automation",
  heroHeading: "Auto<b>m</b>ate",
  heroSubheading: "Transform your business workflows with intelligent automation that learns and adapts.",
  heroCTA: "Start Free Trial",
  aboutTitle: "Redefining <b>w</b>orkflow<br />auto<b>m</b>ation",
  aboutDescription: "NexaFlow uses machine learning to analyze, optimize, and automate your most complex business processes.",
  services: [
    { title: "AI Workflow Builder", icon: "🧠", description: "Visual drag-and-drop workflow editor with AI-powered suggestions and auto-optimization." },
    { title: "Smart Integrations", icon: "🔗", description: "Connect 500+ apps and services with intelligent data mapping and error handling." },
    { title: "Real-time Analytics", icon: "📊", description: "Live dashboards showing workflow performance, bottlenecks, and optimization opportunities." },
    { title: "Enterprise Security", icon: "🔒", description: "SOC2 compliant, end-to-end encryption, role-based access control, and audit logging." },
  ],
  experiences: [
    { title: "Series B Funding", company: "NexaFlow", icon: "💰", iconBg: "#0a0a0a", date: "2024", points: ["Raised $45M to expand AI capabilities", "Grew team to 120+ engineers", "Launched in 15 new markets"] },
    { title: "Product Launch", company: "NexaFlow", icon: "🚀", iconBg: "#151030", date: "2023", points: ["Launched v2.0 with AI workflow builder", "Onboarded 10,000+ businesses", "99.99% uptime SLA achieved"] },
    { title: "Founded", company: "NexaFlow", icon: "⚡", iconBg: "#1d1836", date: "2022", points: ["Started with 3 co-founders", "Built MVP in 4 months", "Won TechCrunch Disrupt finalist"] },
  ],
  projects: [
    { name: "Enterprise Dashboard", description: "Real-time workflow monitoring with 3D data visualization and predictive analytics.", tags: [{ name: "react", color: "text-accent" }, { name: "d3", color: "text-accent-violet" }], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" },
    { name: "AI Flow Editor", description: "Visual workflow builder with natural language processing for creating automations from plain English.", tags: [{ name: "ai", color: "text-accent" }, { name: "typescript", color: "text-accent-violet" }], image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600" },
    { name: "Mobile Command", description: "iOS and Android app for monitoring and approving workflows on the go.", tags: [{ name: "react-native", color: "text-accent-magenta" }, { name: "swift", color: "text-accent" }], image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600" },
  ],
  testimonials: [
    { name: "Lisa Park", role: "VP Operations, ScaleUp Inc", text: "NexaFlow reduced our manual processes by 80%. The AI suggestions are eerily accurate.", rating: 5 },
    { name: "Raj Patel", role: "CTO, DataBridge", text: "The integration ecosystem is unmatched. We connected our entire stack in under a week.", rating: 5 },
    { name: "Maria Santos", role: "CEO, CloudFirst", text: "ROI was clear within the first month. Our team now focuses on strategy instead of repetitive tasks.", rating: 5 },
  ],
  team: [
    { name: "Jordan Lee", role: "CEO & Co-founder", bio: "Former Google ML engineer, Stanford CS PhD" },
    { name: "Ana Volkov", role: "CTO & Co-founder", bio: "Ex-Stripe architect, distributed systems expert" },
    { name: "Marcus Chen", role: "VP Engineering", bio: "15 years building enterprise SaaS platforms" },
    { name: "Priya Sharma", role: "Head of AI", bio: "Published researcher in workflow optimization" },
  ],
  stats: [
    { value: 10000, suffix: "+", label: "Active Companies", icon: "🏢" },
    { value: 99, suffix: ".99%", label: "Uptime SLA", icon: "⚡" },
    { value: 500, suffix: "+", label: "Integrations", icon: "🔗" },
    { value: 80, suffix: "%", label: "Time Saved", icon: "⏱️" },
  ],
  pricing: [
    { name: "Starter", price: { monthly: 49, yearly: 490 }, description: "For small teams getting started", features: ["5 workflows", "1,000 runs/month", "10 integrations", "Email support"], highlighted: false, cta: "Start Free" },
    { name: "Growth", price: { monthly: 149, yearly: 1490 }, description: "For scaling businesses", features: ["Unlimited workflows", "50,000 runs/month", "All integrations", "AI suggestions", "Priority support", "Custom branding"], highlighted: true, cta: "Start Trial" },
    { name: "Enterprise", price: { monthly: 499, yearly: 4990 }, description: "For large organizations", features: ["Everything in Growth", "Unlimited runs", "SSO & SAML", "Dedicated CSM", "SLA guarantee", "On-premise option", "Custom AI training"], highlighted: false, cta: "Contact Sales" },
  ],
  faqs: [
    { q: "How quickly can we get started?", a: "Most teams are up and running within 24 hours. Our onboarding wizard guides you through connecting your first integration and building your first workflow." },
    { q: "Is our data secure?", a: "Absolutely. We're SOC2 Type II certified, use end-to-end encryption, and never access your data without explicit permission. Enterprise plans include on-premise deployment." },
    { q: "Can we integrate with our existing tools?", a: "Yes. NexaFlow connects with 500+ apps including Salesforce, Slack, HubSpot, Jira, and more. Custom API integrations are also supported." },
  ],
  metaDescription: "NexaFlow — AI-powered workflow automation platform. Connect 500+ apps, automate processes, and scale your business.",
};

// ─── RESTAURANT ────────────────────────────────────────────────

const RESTAURANT_CONTENT: IndustryContent = {
  id: "restaurant",
  siteName: "Kōji",
  tagline: "Modern Japanese Fine Dining",
  heroHeading: "Kō<b>j</b>i",
  heroSubheading: "Where tradition meets innovation. A sensory journey through Japanese culinary mastery.",
  heroCTA: "Reserve a Table",
  aboutTitle: "The art of<br /><b>J</b>apanese cuisine",
  aboutDescription: "Chef Tanaka brings 25 years of Michelin-starred experience to every plate, blending ancient techniques with contemporary vision.",
  services: [
    { title: "Omakase Experience", icon: "🍱", description: "A 12-course journey curated by Chef Tanaka, showcasing the finest seasonal ingredients." },
    { title: "Private Dining", icon: "🏮", description: "Intimate tatami rooms for up to 12 guests, with personalized menus and sake pairings." },
    { title: "Sake Collection", icon: "🍶", description: "Over 200 premium sakes from family-owned breweries across Japan's finest regions." },
    { title: "Chef's Table", icon: "🔪", description: "Watch the master at work from our exclusive 6-seat counter overlooking the kitchen." },
  ],
  experiences: [
    { title: "Michelin Star Awarded", company: "Kōji Madrid", icon: "⭐", iconBg: "#1a1710", date: "2024", points: ["First Michelin star within 18 months of opening", "Recognized for innovative fusion techniques", "Featured in World's 50 Best Discovery"] },
    { title: "Grand Opening", company: "Kōji Madrid", icon: "🏮", iconBg: "#201d14", date: "2023", points: ["Opened flagship in Salamanca district", "80-seat restaurant with 3 private rooms", "Partnership with Japanese artisan ceramicists"] },
    { title: "Tokyo Training", company: "Sukiyabashi Jiro", icon: "🍣", iconBg: "#2a2720", date: "2015-2022", points: ["7 years training under Master Jiro", "Mastered Edomae sushi technique", "Sourced direct supplier relationships in Tsukiji"] },
  ],
  projects: [
    { name: "Spring Omakase", description: "Cherry blossom season tasting menu featuring sakura-aged wagyu, spring vegetable tempura, and matcha mochi.", tags: [{ name: "seasonal", color: "text-accent" }, { name: "12-courses", color: "text-accent-violet" }], image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600" },
    { name: "Sake Pairing Dinner", description: "Monthly collaboration with guest brewmasters from Niigata, Kyoto, and Hiroshima prefectures.", tags: [{ name: "sake", color: "text-accent" }, { name: "event", color: "text-accent-violet" }], image: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600" },
    { name: "Kaiseki Masterclass", description: "Quarterly cooking experience where guests learn traditional kaiseki preparation techniques.", tags: [{ name: "experience", color: "text-accent" }, { name: "class", color: "text-accent-violet" }], image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600" },
  ],
  testimonials: [
    { name: "Isabella Rossi", role: "Food Critic, El País", text: "Kōji redefines what Japanese cuisine can be in Madrid. Every dish tells a story of precision and passion.", rating: 5 },
    { name: "Thomas Wright", role: "Michelin Inspector", text: "The omakase experience is transcendent. Chef Tanaka's knife work alone is worth the visit.", rating: 5 },
    { name: "Elena Vargas", role: "Regular Guest", text: "We celebrate every anniversary here. The private dining room and personalized menus make each visit unforgettable.", rating: 5 },
  ],
  team: [
    { name: "Hiroshi Tanaka", role: "Executive Chef", bio: "25 years of mastery, trained at Sukiyabashi Jiro" },
    { name: "María López", role: "Sommelier / Sake Expert", bio: "Certified sake sommelier with 200+ curated selections" },
    { name: "Kenji Mori", role: "Sous Chef", bio: "Specialist in kaiseki and seasonal Japanese cuisine" },
    { name: "Sofia Chen", role: "Pastry Chef", bio: "Fusion desserts blending French technique with wagashi" },
  ],
  stats: [
    { value: 1, suffix: "★", label: "Michelin Star", icon: "⭐" },
    { value: 25, suffix: "+", label: "Years of Mastery", icon: "🔪" },
    { value: 200, suffix: "+", label: "Premium Sakes", icon: "🍶" },
    { value: 12, suffix: "", label: "Course Omakase", icon: "🍱" },
  ],
  pricing: [
    { name: "Lunch Omakase", price: { monthly: 85, yearly: 85 }, description: "6-course midday journey", features: ["6 seasonal courses", "Miso soup & rice", "Matcha dessert", "Green tea pairing"], highlighted: false, cta: "Reserve" },
    { name: "Dinner Omakase", price: { monthly: 165, yearly: 165 }, description: "The full 12-course experience", features: ["12 curated courses", "Premium seasonal fish", "Wagyu selection", "Sake flight included", "Chef's table priority"], highlighted: true, cta: "Reserve" },
    { name: "Private Room", price: { monthly: 250, yearly: 250 }, description: "Exclusive tatami experience", features: ["Everything in Dinner", "Private tatami room", "Personalized menu", "Sake sommelier", "Up to 12 guests", "Custom occasion setup"], highlighted: false, cta: "Inquire" },
  ],
  faqs: [
    { q: "Do I need a reservation?", a: "Yes, we strongly recommend reserving at least 2 weeks in advance. Chef's Table and Private Rooms require 1 month notice." },
    { q: "Do you accommodate dietary restrictions?", a: "Absolutely. Please inform us when booking. Chef Tanaka crafts alternative courses for all dietary needs including vegetarian, vegan, and gluten-free." },
    { q: "What is the dress code?", a: "Smart elegant. We ask guests to honor the dining experience with appropriate attire. No sportswear or beachwear." },
  ],
  metaDescription: "Kōji — Modern Japanese fine dining in Madrid. Michelin-starred omakase experience by Chef Hiroshi Tanaka.",
};

// ─── GAMING ────────────────────────────────────────────────────

const GAMING_CONTENT: IndustryContent = {
  id: "gaming",
  siteName: "Vortex Arena",
  tagline: "Next-Gen Competitive Gaming",
  heroHeading: "V<b>o</b>rtex",
  heroSubheading: "Enter the arena. Compete. Conquer. The next generation of competitive gaming starts here.",
  heroCTA: "Play Now",
  aboutTitle: "Redefine the<br /><b>g</b>aming frontier",
  aboutDescription: "Vortex Arena is a cross-platform competitive gaming ecosystem with real-time tournaments, NFT rewards, and community-driven development.",
  services: [
    { title: "Ranked Matchmaking", icon: "⚔️", description: "AI-powered skill-based matchmaking across 15 competitive game modes." },
    { title: "Tournament Engine", icon: "🏆", description: "Host and join tournaments with automated brackets, live streaming, and prize pools." },
    { title: "Creator Studio", icon: "🎮", description: "Build custom game modes, maps, and challenges with our visual scripting editor." },
    { title: "Clan System", icon: "🛡️", description: "Form clans, track team stats, compete in clan wars, and climb the global leaderboard." },
  ],
  experiences: [],
  projects: [],
  testimonials: [
    { name: "xNova", role: "Pro Player, Team Inferno", text: "The matchmaking is the best I've experienced. Every game feels competitive and fair.", rating: 5 },
    { name: "StreamQueen", role: "Content Creator, 2M followers", text: "Tournament mode is incredible for content. My viewers love the bracket system.", rating: 5 },
  ],
  team: [
    { name: "Alex Storm", role: "Game Director", bio: "Former Riot Games lead designer" },
    { name: "Kim Ji-woo", role: "Lead Engineer", bio: "Built netcode for 3 AAA titles" },
  ],
  stats: [
    { value: 5, suffix: "M+", label: "Active Players", icon: "🎮" },
    { value: 120, suffix: "K", label: "Daily Matches", icon: "⚔️" },
    { value: 15, suffix: "", label: "Game Modes", icon: "🕹️" },
    { value: 2, suffix: "M$", label: "Prize Pool", icon: "🏆" },
  ],
  pricing: [],
  faqs: [],
  metaDescription: "Vortex Arena — Next-gen competitive gaming platform with ranked matchmaking, tournaments, and creator tools.",
};

// ─── PRESET REGISTRY ──────────────────────────────────────────

const PRESETS: Record<string, IndustryContent> = {
  saas: SAAS_CONTENT,
  restaurant: RESTAURANT_CONTENT,
  gaming: GAMING_CONTENT,
};

export const getIndustryContent = (id: string): IndustryContent => {
  return PRESETS[id] || PRESETS.saas;
};

export const getAllPresetIds = (): string[] => Object.keys(PRESETS);
