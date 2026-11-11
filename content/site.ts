// ─────────────────────────────────────────────────────────────
// ReeCo — all website copy lives in this file.
// Anything left as an empty string ("") is hidden on the site,
// so nothing unfinished is ever shown to visitors.
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: "ReeCo",
  tagline: "Revenue Operations & Automation",
  url: "https://reeco-portfolio-two.vercel.app",
  email: "faridat@reecoo.com",
  phone: "+234 813 473 3282",
  location: "Abuja, Nigeria",
  linkedin: "", // e.g. "https://www.linkedin.com/in/…"
  seo: {
    title: "ReeCo — Revenue Operations & Automation for Service Businesses",
    description:
      "ReeCo helps service businesses streamline lead management, improve customer follow-up and build systems that support consistent growth. Real estate, MedSpas and home services.",
  },
  closingLine: "Better systems. Stronger customer relationships. More revenue opportunities.",
};

export const founder = {
  name: "Faridat", // full name shown under the portrait
  role: "Founder, ReeCo",
  portrait: "/founder/portrait.jpg",
  portraitAlt: "Portrait of the founder of ReeCo",
};

/** Founder introduction video (About page). Hidden until `src` is set. */
export const video = {
  src: "/founder/intro.mp4",
  poster: "/founder/intro-poster.jpg",
  captions: "", // e.g. "/video/founder-intro.vtt"
  title: "Meet the founder",
  description: "A short introduction to ReeCo, how we approach client work and the kinds of problems we like to solve.",
  transcript: "", // optional plain-text transcript shown under the video
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries", children: true },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

/* ── Home ─────────────────────────────────────────────── */

export const hero = {
  eyebrow: "Revenue Operations & Automation",
  headline: "Turn more enquiries into customers. *Keep more customers coming back.*",
  sub: "ReeCo helps service businesses streamline lead management, improve customer follow-up and build systems that support consistent growth.",
  primaryCta: { label: "Explore Working Together", href: "/contact" },
  secondaryCta: { label: "See What We Do", href: "/services" },
  focus: ["Real estate", "MedSpas", "Home services"],
};

export const problems = {
  eyebrow: "The problem",
  heading: "Growth gets harder when the systems behind it can't keep up.",
  sub: "Most service businesses don't have a marketing problem. They have a follow-through problem — and it quietly costs them customers every week.",
  items: [
    { icon: "inbox", title: "Missed enquiries", desc: "Potential customers wait too long for a response — and book with whoever answers first." },
    { icon: "route", title: "Inconsistent follow-up", desc: "Good opportunities disappear because nobody owns the next step." },
    { icon: "link", title: "Disconnected systems", desc: "Teams repeat work and switch between tools that don't talk to each other." },
    { icon: "eye", title: "Limited visibility", desc: "Owners can't easily see what's moving, what's stuck and where revenue is leaking." },
  ],
};

export type ServiceKey = "revops" | "crm" | "automation" | "retention" | "operations";
export type Service = {
  key: ServiceKey;
  icon: "chart" | "users" | "zap" | "refresh" | "layers";
  title: string;
  summary: string;
  points: string[];
  problem: string;
  whyItMatters: string;
  approach: string[];
  deliverables: string[];
  tools: string[];
};

export const services: { eyebrow: string; heading: string; sub: string; items: Service[] } = {
  eyebrow: "Services",
  heading: "Systems that make good work go further.",
  sub: "Five ways we help service businesses capture more opportunities and manage them properly — from first enquiry to repeat customer.",
  items: [
    {
      key: "revops",
      icon: "chart",
      title: "Revenue Operations",
      summary: "Map the path from first enquiry to paying customer, then remove the gaps where opportunities slip away.",
      points: ["Lead-to-customer process improvement", "Sales pipeline organisation", "Operational visibility and reporting"],
      problem:
        "Enquiries arrive through several channels, sales steps live in people's heads and nobody can say with confidence how many opportunities are open, stalled or lost.",
      whyItMatters:
        "When the lead-to-customer process isn't defined, the business depends on individual memory and effort. Opportunities are lost quietly, forecasting is guesswork and growth adds chaos instead of revenue.",
      approach: [
        "Walk through your current customer journey, from first contact to completed work.",
        "Identify where enquiries wait, where hand-offs break and where information is lost.",
        "Define clear pipeline stages, ownership and the next action for every opportunity.",
        "Set up simple reporting so you can see what is moving and what is stuck.",
      ],
      deliverables: [
        "A documented lead-to-customer process",
        "A structured sales pipeline with clear stage definitions",
        "A reporting view of pipeline health and conversion points",
        "Recommendations prioritised by business impact",
      ],
      tools: ["GoHighLevel", "HubSpot", "Google Sheets / Looker Studio"],
    },
    {
      key: "crm",
      icon: "users",
      title: "CRM & Lead Management",
      summary: "A CRM your team actually uses — every enquiry captured, qualified and followed up on time.",
      points: ["CRM setup and optimisation", "Lead capture and qualification", "Pipeline organisation", "Follow-up management"],
      problem:
        "Leads sit in inboxes, spreadsheets and phone notes. The CRM, if there is one, is out of date — so follow-up depends on who remembers.",
      whyItMatters:
        "Speed and consistency of response are often what decide who wins the customer. A disorganised CRM means slower replies, duplicated effort and prospects who go cold without anyone noticing.",
      approach: [
        "Audit how leads arrive today and where they are currently stored.",
        "Configure or clean up the CRM around how your team really works.",
        "Route every enquiry into the CRM automatically, with source and context attached.",
        "Add qualification questions, tasks and reminders so no lead is left without a next step.",
      ],
      deliverables: [
        "A configured, cleaned-up CRM",
        "Connected lead capture from forms, ads and inboxes",
        "Lead qualification fields and pipeline stages",
        "Follow-up tasks, reminders and a short team guide",
      ],
      tools: ["GoHighLevel", "HubSpot", "Zapier", "Make"],
    },
    {
      key: "automation",
      icon: "zap",
      title: "Workflow Automation",
      summary: "Take repetitive admin off your team's plate and connect the tools you already pay for.",
      points: ["Repetitive task automation", "Cross-platform workflow integration", "Process notifications and handoffs"],
      problem:
        "Staff copy information between systems, send the same messages by hand and chase colleagues for updates that should happen automatically.",
      whyItMatters:
        "Manual admin is slow, error-prone and expensive. It also pulls people away from the work customers actually pay for — and it breaks the moment someone is busy or away.",
      approach: [
        "List the repetitive tasks and hand-offs that consume the most time.",
        "Choose which ones are worth automating — and which are better simplified first.",
        "Build reliable workflows between your CRM, forms, calendar, email and messaging tools.",
        "Test with real scenarios, document each workflow and add alerts for failures.",
      ],
      deliverables: [
        "Automated workflows for agreed processes",
        "Integrations between your existing tools",
        "Internal notifications and hand-off alerts",
        "Documentation for every automation we build",
      ],
      tools: ["Zapier", "Make", "GoHighLevel", "HubSpot"],
    },
    {
      key: "retention",
      icon: "refresh",
      title: "Customer Retention Systems",
      summary: "Stay in touch after the first sale, so past customers come back and refer others.",
      points: ["Customer re-engagement", "Lifecycle communication", "Repeat-business workflows"],
      problem:
        "Once a job is done or a treatment is complete, communication stops. Past customers are rarely contacted again until they've already gone elsewhere.",
      whyItMatters:
        "Winning back an existing customer is usually easier than finding a new one. Without a retention system, the business keeps paying to acquire customers it has already earned.",
      approach: [
        "Map what a customer should hear from you after the first purchase.",
        "Segment customers by service, timing and value.",
        "Build lifecycle messages: check-ins, reminders, review requests and re-engagement.",
        "Track responses so the team knows who to contact personally.",
      ],
      deliverables: [
        "A customer lifecycle communication plan",
        "Automated re-engagement and reminder sequences",
        "Review and referral request workflows",
        "A simple view of returning and lapsed customers",
      ],
      tools: ["GoHighLevel", "HubSpot", "Email & SMS platforms"],
    },
    {
      key: "operations",
      icon: "layers",
      title: "Business Operations & Systems",
      summary: "Document how the business runs and tidy up the processes behind day-to-day delivery.",
      points: ["Process documentation", "Operational workflow improvement", "Business systems coordination"],
      problem:
        "Processes are undocumented, inconsistent between team members and hard to hand over. Every new hire or new tool adds confusion.",
      whyItMatters:
        "Automation only works on a process that is clear. Without documented, consistent operations, the business can't delegate, scale or improve with confidence.",
      approach: [
        "Interview the people who do the work and observe how tasks are really completed.",
        "Document processes in plain language, with owners and checkpoints.",
        "Simplify steps, remove duplication and agree on one way of working.",
        "Coordinate the tools and information each process relies on.",
      ],
      deliverables: [
        "Documented standard operating procedures",
        "Process maps for key workflows",
        "Recommendations for tools and responsibilities",
        "A foundation ready for automation",
      ],
      tools: ["Notion", "Google Workspace", "ClickUp / Asana"],
    },
  ],
};

export type IndustrySlug = "real-estate" | "medspas" | "home-services";
export type Industry = {
  slug: IndustrySlug;
  name: string;
  short: string;
  audience: string[];
  intro: string;
  journey: { stage: string; detail: string }[];
  problems: string[];
  solutions: { title: string; desc: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const industries: { eyebrow: string; heading: string; sub: string; items: Industry[] } = {
  eyebrow: "Industries",
  heading: "Built for service businesses where follow-through matters.",
  sub: "We focus on industries where every enquiry has real value, and where a slow or forgotten follow-up costs a customer.",
  items: [
    {
      slug: "medspas",
      name: "MedSpas",
      short: "Improve enquiry response, consultation follow-up and patient re-engagement.",
      audience: ["MedSpa owners", "Aesthetic clinics", "Small clinic management teams"],
      intro:
        "Treatment enquiries arrive at all hours, often from people comparing several clinics. The clinic that responds quickly, confirms consultations clearly and stays in touch after treatment is the one patients return to.",
      journey: [
        { stage: "Enquiry", detail: "A prospective patient asks about a treatment by form, DM, phone or chat." },
        { stage: "Consultation", detail: "They're invited to book a consultation and receive confirmations and reminders." },
        { stage: "Treatment", detail: "They book a treatment, with preparation and aftercare communication." },
        { stage: "Re-engagement", detail: "They're reminded when follow-up or maintenance treatments are due." },
        { stage: "Loyalty", detail: "Regular patients are recognised, asked for reviews and invited back." },
      ],
      problems: [
        "Treatment enquiries go unanswered, especially outside clinic hours.",
        "Consultation opportunities are missed because follow-up isn't consistent.",
        "Appointment reminders are sent manually, or not at all.",
        "Past patients aren't re-engaged when their next treatment is due.",
        "There's no clear view of which enquiries became patients.",
      ],
      solutions: [
        { title: "Enquiry response workflows", desc: "Every enquiry gets a prompt, personal acknowledgement and is routed to the right person with context." },
        { title: "Consultation follow-up", desc: "Prospects who haven't booked receive a timely, considerate sequence of follow-ups." },
        { title: "Appointment communication", desc: "Confirmations, reminders and preparation instructions go out automatically." },
        { title: "Patient re-engagement", desc: "Treatment-based reminders bring patients back when it's time for their next visit." },
        { title: "Retention systems", desc: "Review requests, loyalty touchpoints and lapsed-patient campaigns keep relationships active." },
      ],
      seoTitle: "MedSpa Patient Follow-up & Retention Systems — ReeCo",
      seoDescription:
        "Enquiry response, consultation follow-up, appointment communication and patient re-engagement workflows for MedSpas and aesthetic clinics.",
    },
    {
      slug: "real-estate",
      name: "Real Estate",
      short: "Help agents and small teams manage buyer and seller enquiries, viewings and long-term follow-up.",
      audience: ["Independent real estate agents", "Small agencies and brokerage teams", "Property consultants and real estate service businesses"],
      intro:
        "In real estate, a lead might be ready this week or in eighteen months. Agents need fast responses for hot enquiries, clear qualification, reliable viewing follow-up and patient nurturing for everyone else — without losing track of anyone.",
      journey: [
        { stage: "Enquiry", detail: "A buyer or seller enquires through a portal, website, ad, referral or sign call." },
        { stage: "Qualification", detail: "Budget, timeline, location, financing and motivation are understood." },
        { stage: "Viewing / Appraisal", detail: "Viewings or valuations are booked, confirmed and followed up." },
        { stage: "Offer & Transaction", detail: "Offers, negotiation and milestones are tracked through to completion." },
        { stage: "Long-term nurture", detail: "Past clients and future-ready leads stay in touch for referrals and repeat business." },
      ],
      problems: [
        "Buyer and seller enquiries are missed or answered too slowly.",
        "Leads aren't qualified, so time goes to the wrong prospects.",
        "Viewing and appointment follow-up is inconsistent.",
        "CRM records are incomplete, duplicated or out of date.",
        "Prospects go cold because no one follows up after the first conversation.",
        "There's little visibility across the pipeline.",
      ],
      solutions: [
        { title: "Lead capture and management", desc: "Portal, website and ad enquiries flow into one CRM with source and property details." },
        { title: "Buyer and seller qualification", desc: "Structured questions and stages separate ready-now leads from long-term prospects." },
        { title: "CRM setup and optimisation", desc: "Clean records, sensible pipelines and tasks the team can rely on." },
        { title: "Automated follow-up and nurturing", desc: "Timely follow-up after enquiries and viewings, plus long-term nurture for future-ready leads." },
        { title: "Viewing and appointment reminders", desc: "Confirmations and reminders that reduce no-shows and keep clients informed." },
        { title: "Pipeline management and reporting", desc: "A clear view of active buyers, sellers, viewings and deals in progress." },
      ],
      seoTitle: "Real Estate Lead Management & CRM Systems — ReeCo",
      seoDescription:
        "Lead capture, buyer and seller qualification, CRM pipelines, viewing follow-up and long-term nurturing for real estate agents and small teams.",
    },
    {
      slug: "home-services",
      name: "Home Services",
      short: "Keep estimates moving with consistent follow-up for specialist contractors.",
      audience: ["Waterproofing contractors", "Generator installation businesses", "Specialist contractors", "Service businesses that send quotes or estimates"],
      intro:
        "For contractors, the most expensive moment is after the estimate is sent. Prospects compare quotes, get busy or forget — and without a consistent follow-up process, good jobs simply never get booked.",
      journey: [
        { stage: "Enquiry", detail: "A homeowner or business requests a quote by phone, form or referral." },
        { stage: "Site visit", detail: "An assessment or site visit is scheduled and confirmed." },
        { stage: "Estimate", detail: "A quotation is prepared and sent." },
        { stage: "Follow-up & booking", detail: "Questions are answered and the job is accepted and scheduled." },
        { stage: "Job & handoff", detail: "The crew receives the details; the customer is kept informed through to completion." },
      ],
      problems: [
        "Prospects receive estimates but never book.",
        "Quotation follow-up depends on whoever has time that week.",
        "Leads are tracked manually in notebooks, inboxes or spreadsheets.",
        "Communication breaks down between enquiry, estimate and job completion.",
        "There's no clear view of the total value of open estimates.",
      ],
      solutions: [
        { title: "Enquiry capture", desc: "Calls, forms and referrals land in one place with job details attached." },
        { title: "Estimate follow-up workflows", desc: "A considered sequence after every quote, with tasks for personal calls at the right moments." },
        { title: "Lead pipeline management", desc: "Every opportunity has a stage, a value and a next step." },
        { title: "Automated customer communication", desc: "Visit confirmations, estimate delivery and scheduling updates go out on time." },
        { title: "Job booking and handoff", desc: "Accepted estimates trigger booking and pass the details to the delivery team." },
      ],
      seoTitle: "Estimate Follow-up & Lead Pipelines for Contractors — ReeCo",
      seoDescription:
        "Enquiry capture, estimate follow-up workflows, lead pipelines and job handoff systems for waterproofing, generator and specialist contractors.",
    },
  ],
};

export const process = {
  eyebrow: "How we work",
  heading: "Understand first. Automate with purpose.",
  sub: "Technology comes last. We start with how your business works and what your customers experience.",
  steps: [
    { title: "Diagnose", desc: "Understand the business process, customer journey and operational gaps." },
    { title: "Design", desc: "Develop a practical workflow that fits the business and the team using it." },
    { title: "Implement", desc: "Configure the CRM, integrations and automations — tested and documented." },
    { title: "Optimise", desc: "Review performance and improve the system over time." },
  ],
};

/* ── Work ─────────────────────────────────────────────── */

export type ProjectType = "Project experience" | "Demonstration" | "Concept";
export type PreviewKind = "data-tracker" | "medspa-journey" | "estimate-followup" | "re-pipeline";

export type Project = {
  slug: string;
  name: string;
  industry: string;
  type: ProjectType;
  summary: string;
  problem: string;
  solution: string[];
  preview: PreviewKind;
  tools: string[]; // only list tools that were actually used / verified
  role: string[];
  note?: string;
  link?: { label: string; href: string };
  video?: string;
};

export const work: { eyebrow: string; heading: string; sub: string; projects: Project[] } = {
  eyebrow: "Selected work",
  heading: "Practical thinking. Business-minded execution.",
  sub: "Real project experience alongside clearly labelled demonstrations of how we approach common operational problems.",
  projects: [
    {
      slug: "proppie",
      name: "PropPie",
      industry: "Real Estate Data & Operations",
      type: "Project experience",
      summary:
        "Supported a real estate data and insights initiative through data collection coordination, market research and product documentation.",
      problem:
        "A real estate data and insights product needed reliable, structured property information from the field — collected consistently by a team of data collectors and documented clearly enough to inform the product.",
      solution: [
        "Coordinated primary and secondary data collection across the project.",
        "Developed a data collection framework so entries were captured consistently.",
        "Carried out property market research to support the dataset.",
        "Produced reporting and product documentation.",
        "Coordinated the data collectors working in the field.",
      ],
      preview: "data-tracker",
      tools: [],
      role: ["Data collection coordination", "Market research", "Framework development", "Reporting & documentation", "Team coordination"],
      note:
        "The Lifecamp District data collection initiative involved more than 500 property data entries. ReeCo's founder contributed to this project; PropPie and its software are not owned or developed by ReeCo.",
    },
    {
      slug: "medspa-retention",
      name: "MedSpa Patient Retention Workflow",
      industry: "MedSpas",
      type: "Demonstration",
      summary: "How enquiries, consultation follow-up and patient re-engagement can be organised into one connected workflow.",
      problem:
        "A clinic receives treatment enquiries across several channels. Some are answered late, consultation follow-up depends on front-desk availability and past patients are rarely contacted when their next treatment is due.",
      solution: [
        "Every enquiry is captured in one pipeline and receives an immediate, personal acknowledgement.",
        "Prospects who don't book a consultation receive a short follow-up sequence, with a task for a personal call.",
        "Booked consultations trigger confirmations and reminders.",
        "After treatment, patients are tagged by service so re-engagement reminders go out at the right interval.",
        "Lapsed patients enter a gentle win-back sequence; responses are routed to the team.",
      ],
      preview: "medspa-journey",
      tools: [],
      role: ["Customer journey design", "Workflow design", "Pipeline structure", "Message sequencing"],
    },
    {
      slug: "home-services-quotes",
      name: "Home Services Quote Follow-up",
      industry: "Home Services",
      type: "Demonstration",
      summary: "How a contractor can capture an enquiry, send an estimate, follow up and move the opportunity towards booked work.",
      problem:
        "A specialist contractor sends plenty of estimates, but many prospects go quiet afterwards. Follow-up happens only when someone remembers, and there's no view of how much quoted work is still open.",
      solution: [
        "Enquiries from calls and web forms are logged with job type, location and urgency.",
        "Site visits are booked and confirmed automatically.",
        "When an estimate is sent, a follow-up sequence starts, with call tasks on day 2 and day 7.",
        "Accepted estimates move to 'Booked' and send job details to the delivery team.",
        "Open estimates are visible by value and age, so the owner knows where to focus.",
      ],
      preview: "estimate-followup",
      tools: [],
      role: ["Process mapping", "Pipeline design", "Follow-up sequence design", "Handoff design"],
    },
    {
      slug: "real-estate-leads",
      name: "Real Estate Lead Management",
      industry: "Real Estate",
      type: "Demonstration",
      summary: "A lead management concept covering buyer and seller enquiries, qualification, viewings and long-term nurturing.",
      problem:
        "A small agency gets buyer and seller enquiries from portals, its website and referrals. Leads aren't qualified consistently, viewing follow-up is patchy and future-ready prospects are forgotten.",
      solution: [
        "Buyer and seller enquiries are captured in separate pipelines with source and property attached.",
        "Qualification questions record budget, timeline, location and financing status.",
        "Viewings trigger confirmations, reminders and a next-day follow-up task.",
        "Leads who aren't ready yet move into a long-term nurture track instead of disappearing.",
        "The pipeline view shows active buyers, sellers, viewings and offers at a glance.",
      ],
      preview: "re-pipeline",
      tools: [],
      role: ["Lead journey design", "Qualification design", "CRM pipeline structure", "Nurture planning"],
    },
  ],
};

/* ── About ────────────────────────────────────────────── */

export const about = {
  eyebrow: "About ReeCo",
  heading: "Good systems begin with understanding how businesses work.",
  paragraphs: [
    "ReeCo was built around a simple belief: technology should make business operations clearer, more reliable and easier to manage.",
    "We bring together business operations thinking, customer journey design, CRM management and practical automation to help service businesses improve how they manage opportunities and relationships.",
    "Our approach begins with understanding the business, identifying operational gaps and designing systems that solve real problems.",
  ],
  experienceHeading: "Background the work draws on",
  experience: [
    { title: "Executive & business operations support", desc: "Keeping day-to-day operations organised, prioritised and moving." },
    { title: "Project coordination", desc: "Coordinating people, timelines and deliverables across projects." },
    { title: "Research & reporting", desc: "Turning information into clear, decision-ready reports." },
    { title: "Stakeholder management", desc: "Communicating clearly with clients, teams and partners." },
    { title: "CRM & lead management", desc: "Organising leads, pipelines and follow-up." },
    { title: "Process documentation", desc: "Documenting workflows and improving how work gets done." },
    { title: "Real estate & construction operations", desc: "Hands-on experience with property and construction-related businesses." },
  ],
  principles: [
    { title: "Business first", desc: "We start with the customer journey and the process — not the software." },
    { title: "Practical over impressive", desc: "The best system is the one your team will actually use." },
    { title: "Honest scope", desc: "If something doesn't need automating, we'll say so." },
  ],
};

/* ── Contact ──────────────────────────────────────────── */

export const contact = {
  eyebrow: "Contact",
  heading: "Your business deserves better systems.",
  sub: "Tell us where enquiries, follow-up or daily operations are getting stuck. We'll start with the problem and work toward a practical solution.",
  cta: { label: "Discuss a Project", href: "/contact" },
  industries: ["Real estate", "MedSpa / aesthetics", "Home services / contracting", "Other service business"],
  needs: [
    "Lead capture & response",
    "CRM setup or clean-up",
    "Follow-up & nurturing",
    "Workflow automation",
    "Customer retention",
    "Process documentation",
    "Not sure yet",
  ],
  expectations: [
    "We read every enquiry personally.",
    "You'll get a reply within two business days.",
    "The first conversation is about your business, not a sales pitch.",
  ],
  success: {
    title: "Thank you — your enquiry has been received.",
    body: "We'll review the details and reply within two business days.",
  },
};
