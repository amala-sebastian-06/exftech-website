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
    desc: "Industrial 3D printer repair, diagnostics, preventive maintenance, spares and on-site support — machines back in production.",
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
];

export const mro = {
  eyebrow: "MRO / Mission-critical support",
  title: "Downtime is an engineering problem. We treat it like one.",
  lede: "Our MRO approach is built around diagnosis first, precise intervention second, and long-term reliability after that—not just replacing parts and moving on.",
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
  title: "Support that starts after the purchase—not support that ends there.",
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
  copy: "Mechanical engineers, service specialists, application engineers, automation talent and commercial people who understand technology—not just titles.",
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
  | "route";
