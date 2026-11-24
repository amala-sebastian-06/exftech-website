/**
 * Site copy, transcribed from the original `excelfast_site/index.html`.
 * Keep this file as the single source of truth for page content.
 */

export const hero = {
  eyebrow: "Engineering • MRO • Industrial Services",
  title: "Engineering that keeps",
  titleAccent: "industry moving.",
  copy: "From industrial 3D printer repair and field service to precision engineering, distribution and R&D, Excelfast connects technical expertise with reliable execution across the equipment lifecycle.",
  image:
    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=2200&q=88",
  imageAlt: "Engineer working on industrial equipment",
  kpis: [
    { k: "MRO", v: "Repair • Maintain • Restore" },
    { k: "360°", v: "Lifecycle technical support" },
    { k: "R&D", v: "Engineering development" },
    { k: "3D PRINT", v: "Industrial printer repair" },
  ],
};

export const marqueeItems = [
  "ENGINEERING",
  "3D PRINTER REPAIR",
  "MRO",
  "AFTER-SALES",
  "DISTRIBUTION",
  "R&D",
  "TECHNICAL SUPPORT",
];

export type Service = {
  no: string;
  name: string;
  desc: string;
  href: string;
  icon: IconName;
  /** Shown on the reverse of the card. */
  detail: string[];
};

export const services: Service[] = [
  {
    no: "01",
    name: "Core Engineering",
    desc: "Design, development, analysis, technical documentation and custom industrial problem-solving.",
    href: "#engineering",
    icon: "compass",
    detail: [
      "Design & development",
      "Analysis & simulation",
      "Technical documentation",
      "Custom problem-solving",
    ],
  },
  {
    no: "02",
    name: "MRO Services",
    desc: "Industrial 3D printer repair, diagnostics, preventive maintenance, spares and on-site support to get machines back in production.",
    href: "#mro",
    icon: "wrench",
    detail: [
      "Industrial 3D printer repair",
      "Equipment diagnostics",
      "Preventive maintenance",
      "Spares & on-site support",
    ],
  },
  {
    no: "03",
    name: "After-Sales Support",
    desc: "Installation, commissioning, troubleshooting, training and ongoing application support.",
    href: "#support",
    icon: "headphones",
    detail: [
      "Installation & commissioning",
      "Operator training",
      "Troubleshooting",
      "Application support",
    ],
  },
  {
    no: "04",
    name: "Industrial Distribution",
    desc: "Sourcing, technical selection, logistics coordination and lifecycle support for industrial technology.",
    href: "#distribution",
    icon: "boxes",
    detail: [
      "Technical sourcing",
      "Execution + logistics",
      "Documentation & delivery",
      "After-sales continuity",
    ],
  },
  {
    no: "05",
    name: "R&D + Development",
    desc: "Prototype development, process improvement, testing and practical engineering experimentation.",
    href: "#engineering",
    icon: "flask",
    detail: [
      "Prototype development",
      "Process improvement",
      "Testing & validation",
      "Build. Test. Improve.",
    ],
  },
  {
    no: "06",
    name: "Market Research",
    desc: "Market, competitor and customer research that helps industrial companies decide what to build, sell, source and where to enter.",
    href: "/services/market-research",
    icon: "chart",
    detail: [
      "Market sizing & demand study",
      "Competitor & pricing benchmarks",
      "Customer & plant-floor interviews",
      "Supplier & sourcing intelligence",
    ],
  },
];

export const marketResearch = {
  eyebrow: "Market research / Decisions backed by evidence",
  title: "We support companies with market research that engineers can trust.",
  lede: "Most market research is written by people who have never opened a machine. Ours is run by the same engineers who design, repair and source industrial equipment, so the questions we ask, and the answers we bring back, hold up on the shop floor as well as in the boardroom.",
  intro: [
    "Whether you are launching a new industrial product, entering a new region or segment, evaluating a supplier, or deciding whether a technology is worth adopting, we help you replace assumptions with evidence.",
    "We work with manufacturers, OEMs, distributors, start-ups and technology suppliers, scoping the research around the decision you actually need to make, not a generic report template.",
  ],
  areas: [
    {
      n: "01",
      t: "Market sizing & demand analysis",
      d: "How big is the opportunity, who buys, how often, and what is driving or slowing demand. We build the picture bottom-up from real buyers and applications rather than recycled headline figures.",
      points: [
        "Addressable market and segment mapping",
        "Demand drivers, seasonality and growth outlook",
        "Application and end-use analysis by industry",
      ],
    },
    {
      n: "02",
      t: "Competitor & pricing intelligence",
      d: "Who else serves your customers, what they offer, how they price and where they are weak. Useful for positioning a new product or defending an existing one.",
      points: [
        "Competitor profiles, offerings and positioning",
        "Price and cost benchmarking",
        "Strengths, gaps and white-space opportunities",
      ],
    },
    {
      n: "03",
      t: "Customer & voice-of-the-plant research",
      d: "Structured conversations with the engineers, maintenance heads and buyers who actually use and purchase the equipment, capturing real pain points, buying criteria and unmet needs.",
      points: [
        "Interviews and on-site discussions",
        "Surveys and buying-criteria ranking",
        "Pain-point and unmet-need mapping",
      ],
    },
    {
      n: "04",
      t: "Product & technology feasibility",
      d: "Before you commit to development or import, we test whether a product or technology fits the market: technically, commercially and operationally.",
      points: [
        "Product-market fit and concept validation",
        "Technology scouting and comparison",
        "Build vs. buy vs. partner assessment",
      ],
    },
    {
      n: "05",
      t: "Supplier, sourcing & distribution landscape",
      d: "A clear view of who makes what, lead times, cost structure and channel options, so sourcing and distribution decisions are made with the full picture.",
      points: [
        "Vendor identification and shortlisting",
        "Channel and distribution mapping",
        "Import, localisation and cost considerations",
      ],
    },
    {
      n: "06",
      t: "Market entry & growth strategy",
      d: "Translating the findings into a practical plan: which segments to target first, how to position, how to price and what it takes to get a first customer.",
      points: [
        "Target segment and account prioritisation",
        "Go-to-market and positioning recommendations",
        "Pilot and launch roadmap",
      ],
    },
  ],
  process: [
    { n: "01", t: "Define", d: "Agree the decision, the questions and what a useful answer looks like." },
    { n: "02", t: "Collect", d: "Desk research, expert and customer interviews, surveys and site visits." },
    { n: "03", t: "Analyse", d: "Cross-check sources, size the opportunity and stress-test assumptions." },
    { n: "04", t: "Recommend", d: "Clear findings, options and a recommended course of action." },
    { n: "05", t: "Support", d: "Stay on through execution: engineering, sourcing or launch support." },
  ],
  deliverables: [
    "Market and competitor report with sources",
    "Customer insight summary and key quotes",
    "Pricing and cost benchmark sheet",
    "Opportunity and risk assessment",
    "Recommendation deck for leadership",
    "Optional follow-through support from our engineering team",
  ],
  industries: [
    "Manufacturing",
    "Automotive",
    "Aerospace",
    "Energy",
    "Additive / 3D printing",
    "Industrial distribution",
  ],
  differentiator:
    "Because we are an engineering and MRO company first, we can take research all the way through, from the first customer conversation to a working prototype, a sourced component or an installed machine.",
};

export const mro = {
  eyebrow: "MRO / Mission-critical support",
  title: "Downtime is an engineering problem. We treat it like one.",
  lede: "Our MRO approach is built around diagnosis first, precise intervention second, and long-term reliability after that, not just replacing parts and moving on.",
  panelLabel: "MRO Control / service architecture",
  panelTitle: "Keep systems performing",
  items: [
    { n: "01", t: "Equipment Diagnostics", pill: "ASSESS" },
    { n: "02", t: "Repair & Component Recovery", pill: "RESTORE" },
    { n: "03", t: "Preventive Maintenance", pill: "PROTECT" },
    { n: "04", t: "Spares & Replacement Support", pill: "SUPPLY" },
    { n: "05", t: "On-site / Remote Technical Support", pill: "SUSTAIN" },
    { n: "06", t: "Industrial 3D Printer Service", pill: "ADDITIVE" },
  ],
  objectiveLabel: "Operational objective",
  objective: "equipment availability",
  meta: [
    { n: "01", t: "Diagnose" },
    { n: "02", t: "Recover" },
    { n: "03", t: "Prevent" },
  ],
};

export const additive = {
  eyebrow: "Additive / Industrial 3D printers",
  title: "Industrial 3D printers, back in production.",
  copy: "Additive machines are home ground for us. We diagnose and repair industrial 3D printers end to end, then re-qualify the machine against a test print before it goes back on the floor.",
  points: [
    "Motion systems & axis alignment",
    "Print heads, extruders & hot ends",
    "Heaters & thermal control",
    "Electronics, wiring & controllers",
    "Firmware, calibration & re-qualification",
    "Spares, retrofits & upgrades",
  ],
};

export const support = {
  eyebrow: "After-sales / Beyond delivery",
  title: "Support that starts after the purchase, not support that ends there.",
  lede: "We stay involved through installation, commissioning, operator training, service, spares and application guidance so technology performs in the real environment it was purchased for.",
  core: ["EXCELFAST", "AFTER-SALES"],
  coreSub: "TECHNICAL CORE",
  nodes: [
    "Installation",
    "Training",
    "Troubleshooting",
    "Spares",
    "Application Support",
  ],
};

export const distribution = {
  eyebrow: "Distribution / Industrial technology",
  title: "Distribution with engineering judgment built in.",
  image:
    "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1300&q=85",
  imageAlt: "Industrial components and warehouse",
  overlayTitle: ["Not box-moving.", "Solution distribution."],
  overlayCopy:
    "We help customers select, integrate and support industrial technology rather than treating distribution as a catalogue transaction.",
  cards: [
    {
      icon: "boxes" as IconName,
      t: "Technical Sourcing",
      d: "Component and equipment sourcing guided by application, compatibility, availability and lifecycle requirements.",
    },
    {
      icon: "route" as IconName,
      t: "Execution + Logistics",
      d: "Coordinated procurement, documentation, delivery planning and communication for industrial customers.",
    },
    {
      icon: "headphones" as IconName,
      t: "After-Sales Continuity",
      d: "Technical support, spares coordination and service continuity after the equipment reaches your site.",
    },
  ],
};

export const engineering = {
  eyebrow: "Core engineering / Advanced engineers",
  title: "Engineers first. Everything else follows.",
  lede: "Our strongest differentiator is not a product list. It is the ability to understand a technical problem, break it down, engineer the solution and stay accountable through execution.",
  cards: [
    {
      small: "Field Engineering",
      t: "Hands-on problem solving",
      d: "Diagnostics • Integration • Troubleshooting",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=88",
      alt: "Engineer inspecting machine",
    },
    {
      small: "Design Engineering",
      t: "From CAD to reality",
      d: "Design • Development • Documentation",
      image:
        "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=900&q=88",
      alt: "Precision manufacturing equipment",
    },
    {
      small: "R&D",
      t: "Build. Test. Improve.",
      d: "Prototype • Test • Iterate",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=88",
      alt: "Engineer working with technology",
    },
  ],
  quoteLabel: "Engineering principle",
  quote:
    "Understand the real operating condition before proposing the technical answer.",
};

export const process = {
  eyebrow: "How we work",
  title: "From requirement to reliable operation.",
  steps: [
    { n: "01", t: "Understand", d: "Application, constraint and real operating condition." },
    { n: "02", t: "Engineer", d: "Technical approach, selection and design." },
    { n: "03", t: "Develop", d: "Prototype, procure or configure the solution." },
    { n: "04", t: "Build", d: "Assembly, integration and implementation." },
    { n: "05", t: "Test", d: "Verify performance before handover." },
    { n: "06", t: "Deliver", d: "Commission, document and train." },
    { n: "07", t: "Support", d: "Maintain, troubleshoot and improve." },
  ],
};

export const industries = {
  eyebrow: "Industries",
  title: "Built for demanding industrial environments.",
  cards: [
    {
      small: "01 / Manufacturing",
      t: "Production & plant engineering",
      d: "Technical support for equipment, process and production environments.",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=82",
      alt: "Manufacturing",
    },
    {
      small: "02 / Automotive",
      t: "Precision at production speed",
      d: "Engineering, maintenance and technology support across automotive operations.",
      image:
        "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=82",
      alt: "Automotive manufacturing",
    },
    {
      small: "03 / Aerospace",
      t: "High-consequence engineering",
      d: "Support for precision, traceability and advanced manufacturing requirements.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=82",
      alt: "Aerospace",
    },
    {
      small: "04 / Energy",
      t: "Reliability under load",
      d: "MRO and technical services for systems where uptime matters.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=82",
      alt: "Energy industry",
    },
    {
      small: "05 / Advanced Technology",
      t: "R&D to deployment",
      d: "Engineering development for emerging industrial technologies.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=82",
      alt: "Advanced technology",
    },
  ],
};

export const careers = {
  eyebrow: "Careers / Build with us",
  title: "We are building a team of people who like hard engineering problems.",
  copy: "Mechanical engineers, service specialists, application engineers, automation talent and commercial people who understand technology, not just titles.",
  cta: "Send your CV",
  ctaHref: "mailto:careers@exftech.com",
  email: "careers@exftech.com",
  core: ["ADVANCED", "ENGINEERS"],
};

export const contact = {
  eyebrow: "Start a conversation",
  title: "Have an engineering challenge?",
  lede: "Tell us what is not working, what you are trying to build, or what you need to source. We will start from the technical requirement.",
  meta: [
    { l: "Office", v: "+91 91092 05567", href: "tel:+919109205567" },
    { l: "Email", v: "info@exftech.com", href: "mailto:info@exftech.com" },
    { l: "Web", v: "www.exftech.com", href: "https://www.exftech.com" },
    { l: "Operating base", v: "Madhya Pradesh, India" },
  ],
  serviceOptions: [
    "Engineering Services",
    "MRO / Repair & Maintenance",
    "After-Sales Support",
    "Distribution",
    "R&D / Development",
    "Market Research",
  ],
};

export const footer = {
  blurb: [
    "Engineering. Technology. Progress.",
    "Industrial services built around real technical requirements.",
  ],
  columns: [
    {
      h: "Services",
      links: [
        ["Engineering", "/#engineering"],
        ["MRO", "/#mro"],
        ["After-sales", "/#support"],
        ["Distribution", "/#distribution"],
        ["Market research", "/services/market-research"],
      ],
    },
    {
      h: "Company",
      links: [
        ["About us", "/about"],
        ["Industries", "/#industries"],
        ["Careers", "/#careers"],
        ["Contact", "/#contact"],
      ],
    },
    {
      h: "Connect",
      links: [
        ["+91 91092 05567", "tel:+919109205567"],
        ["Email", "mailto:info@exftech.com"],
        ["Careers", "mailto:careers@exftech.com"],
        ["LinkedIn", "#"],
        ["Website", "https://www.exftech.com"],
      ],
    },
  ],
  bottom: [
    "© 2026 Excelfast Advanced Technologies Pvt. Ltd.",
    "Designed around engineering, not templates.",
  ],
};

export type IconName =
  | "compass"
  | "wrench"
  | "headphones"
  | "boxes"
  | "flask"
  | "route"
  | "chart";
