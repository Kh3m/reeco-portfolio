// ─────────────────────────────────────────────────────────────
// All site content lives here. Replace every placeholder with
// your client's real details — no component needs editing.
//
// Headings: wrap words in *asterisks* to colour them
// (lime on dark backgrounds, grey on light backgrounds).
// Images: drop files into /public and reference them as "/file.jpg".
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Your Name",
  firstName: "Your Name",
  avatar: "", // e.g. "/avatar.jpg" — falls back to initials
  role: "Freelance Web Developer",
  email: "hello@yourdomain.com",
  bookingUrl: "#contact", // e.g. a Calendly / Cal.com link
  chatUrl: "#contact", // floating chat bubble link, e.g. "https://wa.me/1234567890"
  timezone: "Europe/London", // IANA zone for the live clock
  timezoneLabel: "in London, GMT+0",
  location: "London, working worldwide",
  available: true, // "Taking new projects" indicator
  partnerBadge: { show: true, brand: "Your Platform", label: "Partner" },
  socials: [{ label: "LinkedIn", href: "#" }],
  nav: [
    { label: "Work", href: "#work" },
    { label: "Reviews", href: "#reviews" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  seo: {
    title: "Your Name — Websites that sell, automations that save hours",
    description:
      "Freelance web developer building fast, conversion-focused websites and automations for growing brands.",
  },
};

export const sections = {
  tools: true,
  services: true,
  work: true,
  process: true,
  reviews: true,
  products: true,
  faq: true,
  chatBubble: true,
};

export const hero = {
  headline: "I build websites that *sell* and automations that *save hours*.",
  sub: "Shopify, WordPress, WooCommerce and Webflow sites for growing brands, wired to n8n, Zapier and AI so the busywork runs itself. You work with me directly, start to finish.",
  primaryCta: "Book a free call",
  secondaryCta: "See my work",
};

export const stats = [
  { value: "5.0★", label: "12 client reviews" },
  { value: "20+", label: "projects shipped" },
  { value: "6+", label: "years building" },
  // The fourth tile is the live local time.
];

export const tools = [
  { name: "Next.js", color: "#111111" },
  { name: "Vercel", color: "#111111" },
  { name: "Stripe", color: "#635bff" },
  { name: "HubSpot", color: "#ff7a59" },
  { name: "WhatsApp", color: "#25d366" },
  { name: "Shopify", color: "#5e8e3e" },
  { name: "WooCommerce", color: "#7f54b3" },
  { name: "WordPress", color: "#21759b" },
  { name: "Webflow", color: "#4353ff" },
  { name: "Meta Ads", color: "#0866ff" },
  { name: "GA4", color: "#f9ab00" },
  { name: "Claude", color: "#d97757" },
  { name: "MCP", color: "#111111" },
  { name: "OpenAI", color: "#111111" },
  { name: "Gemini", color: "#8e75ff" },
  { name: "Cursor", color: "#111111" },
  { name: "n8n", color: "#ea4b71" },
  { name: "Zapier", color: "#ff4f00" },
  { name: "Make", color: "#6d00cc" },
];

export type Service = { title: string; href?: string };

export const services = {
  heading: "Three ways I help your business *grow*",
  sub: "Start with one. Most clients add the others once the first one pays for itself.",
  build: {
    label: "01 · Build",
    title: "Websites and stores that sell",
    pitch: "Fast, mobile-first sites that look sharp on every phone and turn visitors into orders.",
    items: [
      { title: "Shopify development" },
      { title: "WooCommerce development" },
      { title: "Custom WordPress" },
      { title: "Webflow design" },
      { title: "Landing pages" },
    ] as Service[],
  },
  automate: {
    label: "02 · Automate",
    title: "Busywork that runs itself",
    pitch: "Orders, leads and invoices that move between your tools on their own, plus AI chatbots that answer at 3am.",
    flow: { trigger: "New order", triggerSub: "from your store", hub: "n8n", outputs: ["Invoice sent", "CRM updated", "Slack ping"] },
    items: [
      { title: "AI & workflow automation" },
      { title: "n8n developer" },
      { title: "Zapier consultant" },
      { title: "AI chatbots" },
    ] as Service[],
  },
  grow: {
    label: "03 · Grow",
    title: "Found by the right people",
    search: { query: "handmade candles near me", tag: "Your store", url: "yourstore.com › candles", title: "Hand-Poured Soy Candles, Made to Order", desc: "Free delivery and 30-day returns…" },
    items: [{ title: "SEO" }, { title: "Google Ads" }, { title: "Facebook & Meta Ads" }] as Service[],
  },
  notSure: {
    eyebrow: "Not sure?",
    title: "Tell me the problem. I'll pick the simplest fix.",
    body: "A free 30-minute call, no pitch. You leave with a plan either way.",
    cardTitle: "30 minutes with Your Name",
    cardSub: "Video call, no sales rep",
    bullets: ["An honest look at your site or idea", "The platform and tools I'd use", "A fixed price within 48 hours"],
    cta: "Book a free call",
  },
};

export type Project = {
  title: string;
  category: string;
  href: string;
  image?: string; // e.g. "/work/project-one.jpg" — replaces the placeholder art
  color: string; // card background behind the placeholder / image
  featured?: boolean;
  recent?: boolean; // shown in the hero "Recent launches" carousel
};

export const work = {
  heading: "Stores and sites I've *launched*",
  allLabel: "All 20 projects",
  allHref: "#",
  projects: [
    { title: "Project One", category: "Shopify · E-commerce", href: "#", color: "#38bdf8", featured: true, recent: true },
    { title: "Project Two", category: "WordPress · E-commerce", href: "#", color: "#f26b5b", recent: true },
    { title: "Project Three", category: "Shopify · Supplements", href: "#", color: "#6fbf95" },
    { title: "Project Four", category: "WordPress · Finance", href: "#", color: "#0f6b4f", recent: true },
    { title: "Project Five", category: "WordPress · Landing page", href: "#", color: "#11785a", recent: true },
    { title: "Project Six", category: "Webflow · Landing page", href: "#", color: "#8b7fd6" },
    { title: "Project Seven", category: "WordPress · E-commerce", href: "#", color: "#2f6fe0" },
  ] as Project[],
};

export const process = {
  heading: "From first call to launch in *five steps*",
  sub: "One fixed price, agreed before any work starts.",
  steps: [
    { title: "Free 30-min call", desc: "Goals, budget and what's broken today." },
    { title: "Fixed quote in 48h", desc: "Written scope, timeline and one price." },
    { title: "Build on staging", desc: "Watch it come together, weekly updates." },
    { title: "Test and launch", desc: "Real phones, speed, tracking, redirects." },
    { title: "30 days of fixes", desc: "Anything that breaks in month one, free." },
  ],
  badges: [
    { icon: "dollar", title: "Fixed price", desc: "No hourly meter running" },
    { icon: "clock", title: "4 to 8 weeks", desc: "A landing page in about a week" },
    { icon: "lock", title: "You own everything", desc: "Domain, code, hosting, ad accounts" },
  ] as const,
};

export const reviews = {
  heading: "Clients come back and *refer friends*",
  allLabel: "Read all 12",
  allHref: "#",
  rating: "5.0",
  summary: "Average from 12 reviews. Every one is five stars.",
  extraCount: 8, // the "+8" bubble next to the reviewer initials
  breakdown: [
    { stars: 5, count: 12 },
    { stars: 4, count: 0 },
    { stars: 3, count: 0 },
  ],
  themes: ["Communication", "On time", "Easy to work with", "Above and beyond", "Professional"],
  featured: {
    quote: "Placeholder: your client's best testimonial goes here. Short, specific and enthusiastic works best.",
    name: "Client Name",
  },
  items: [
    { quote: "Placeholder review about great communication and delivering on time.", name: "Client Two" },
    { quote: "Placeholder review about fixing a tough problem nobody else could.", name: "Client Three" },
    { quote: "Placeholder review about professionalism and meeting every challenge.", name: "Client Four" },
  ],
};

export const products = {
  heading: "Software I build and *run myself*",
  sub: "Proof I don't just build for clients. These are live, with paying users.",
  allLabel: "All 6 products",
  allHref: "#",
  items: [
    { name: "Product One", domain: "productone.com", price: "Free · Pro $4/mo", desc: "One line about what this product does.", href: "#", color: "#2563eb" },
    { name: "Product Two", domain: "producttwo.com", price: "From $19/mo", desc: "One line about what this product does.", href: "#", color: "#ea580c" },
    { name: "Product Three", domain: "productthree.com", price: "$60/mo", desc: "One line about what this product does.", href: "#", color: "#16a34a" },
    { name: "Product Four", domain: "productfour.com", price: "Free to start", desc: "One line about what this product does.", href: "#", color: "#059669" },
    { name: "Product Five", domain: "productfive.com", price: "2 free articles", desc: "One line about what this product does.", href: "#", color: "#4f46e5" },
    { name: "Product Six", domain: "productsix.com", price: "Mac & Windows", desc: "One line about what this product does.", href: "#", color: "#7c3aed" },
  ],
};

export const faq = {
  heading: "Quick *answers*",
  items: [
    { q: "How much does a website cost?", a: "You get one fixed price within 48 hours of a free 30-minute call. It depends on scope, design and integrations. SEO and ads run as a monthly retainer." },
    { q: "How long does it take?", a: "Most sites take 4 to 8 weeks. A landing page is usually live in about a week." },
    { q: "Shopify, WooCommerce, WordPress or Webflow?", a: "It depends on what you sell and who will edit the site. I'll recommend the simplest platform that fits, and explain why." },
    { q: "What can you automate?", a: "Anything repetitive between your tools: orders, invoices, lead routing, CRM updates, reports, and AI chatbots for support." },
    { q: "Do you work with clients abroad?", a: "Yes. I work remotely with clients worldwide and keep overlap with your working hours." },
    { q: "Who owns the site when it's done?", a: "You do. Domain, code, hosting and ad accounts are all in your name." },
  ],
};

export const contact = {
  title: "Got a project?",
  highlight: "Let's talk.",
  body: "Book a free 30-minute call. You'll have a written scope and a fixed price within 48 hours.",
  cta: "Book a free call",
  emailLabel: "Prefer email?",
};
