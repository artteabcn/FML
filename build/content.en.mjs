// English content of FML CAPITAL — DRAFT translation of content.fr.mjs (French is the source of truth).
// To be validated with the FR/EN glossary. Same page order as the French file (home page excluded).
// To edit a text: edit this file, then run `node build/build.mjs`.

export const site = {
  name: "FML CAPITAL",
  legalName: "FML Capital Ltd",
  baseUrl: "https://fml.capital",
  lang: "en",
  signature: "Finance • Maritime • Logistics",
  email: "contact@fml.capital",
  phone: "+41 76 264 43 72",
  phoneHref: "+41762644372",
  places: "Offices: Port Louis, Mauritius · Zurich, Switzerland",
  companyNo: "234759",
  legalForm: "Private Company limited by shares",
};

export const nav = [
  { href: "/", label: "Home" },
  {
    href: "/en/expertises/",
    label: "Expertise",
    children: [
      { href: "/en/expertises/finance/", label: "Finance" },
      { href: "/en/expertises/maritime/", label: "Maritime" },
      { href: "/en/expertises/logistics/", label: "Logistics" },
    ],
  },
  { href: "/en/conformite-gouvernance/", label: "Compliance & governance" },
  // "Team & expert network" and "Projects & references": removed from the menu until there is real content (pages marked `draft: true` below).
  { href: "/en/contact/", label: "Contact" },
];

const PURPOSE =
  "Strengthen public capacities, protect the reputation of programmes, support sustainable revenues and add value to resources, under the supervision of the competent authorities.";

const purposePanel = { t: "panel", title: "Purpose", text: PURPOSE };

const ROLE_MARITIME =
  "FML develops the administrative organisation, the oversight of operators and agents, the monitoring of obligations and the coordination with authorities.";

const COMPLIANCE_LINK = { href: "/en/conformite-gouvernance/", text: "Compliance & governance" };


// ── Text proposals (review of 9 October 2026) — English DRAFT aligned on the French texts ──
const ACC_TAGLINE = "Invest, structure and develop international projects.";
const ACC_P =
  "FML Capital brings together financial, maritime and industrial skills to support private projects and public-private partnerships. Our approach combines project structuring, mobilisation of partners and coordination of the expertise needed for their development.";
const FIN_P =
  "We support the financial structuring of projects, the organisation of equity stakes and the mobilisation of financial partners. Our work combines investment, governance and the search for financing suited to the needs of the project.";
const FIN_SK = ["Financial structuring", "Equity stakes and project vehicles", "Mobilisation of capital"];
const MAR_P =
  "Our expertise covers flag programmes, maritime registries and national fishing programmes. We support their administrative organisation, the oversight of operators and the coordination of partners, with respect for the responsibilities of the competent authorities.";
const MAR_SK = ["Flags and registries", "Fishing programmes", "Monitoring of operators and obligations"];
const LOG_P =
  "We organise the industrial and logistics chains linked to fishing: supply, processing, packaging, preservation and distribution. Direct operations and partnerships are arranged according to the scope of each project, with attention to quality, traceability and the valorisation of products.";
const LOG_SK = ["Industrial management", "Cold chain and flows", "Market access"];
const LOG_IND =
  "Our expertise relies in particular on the ownership and management of an industrial fishing unit."; // no location
const CONF_P =
  "Compliance and governance frame our approach to projects: verification of stakeholders, monitoring of obligations and handling of non-compliance. Responsibilities are defined according to the applicable mandates and supervision arrangements.";
const T_FIN = "Structure and mobilise capital";
const T_MAR = "Organise programmes and their administration";
const T_LOG = "Connect industry to markets";
export const pages = [
  // 2. Expertise (hub)
  {
    path: "/en/expertises/",
    title: "Expertise — FML CAPITAL",
    description:
      "Collective expertise serving private projects and public-private partnerships, with a maritime, fishing and industrial logistics foundation.",
    eyebrow: "Expertise",
    h1: "Expertise",
    lead: "Collective expertise serving private projects and public-private partnerships, with a maritime, fishing and industrial logistics foundation.",
    blocks: [
      {
        t: "cards",
        items: [
          { eyebrow: "01 FINANCE", title: T_FIN, text: FIN_P, href: "/en/expertises/finance/" },
          { eyebrow: "02 MARITIME", title: T_MAR, text: MAR_P, href: "/en/expertises/maritime/" },
          { eyebrow: "03 LOGISTICS", title: T_LOG, text: LOG_P, href: "/en/expertises/logistics/" },
        ],
      },
    ],
  },

  // 2.1 Finance
  {
    path: "/en/expertises/finance/",
    title: "Finance — FML CAPITAL",
    description:
      "Financial structuring of projects, organisation of equity stakes and mobilisation of financial partners.",
    breadcrumb: [{ href: "/en/expertises/", label: "Expertise" }],
    eyebrow: "01 FINANCE",
    h1: T_FIN,
    lead: FIN_P,
    blocks: [
      { t: "chips", title: "Skills", items: FIN_SK },
      {
        t: "p",
        text: "Mobilisation of private investors, financial partners and institutional donors; support for fundraising.",
      },
      {
        t: "panel",
        text: "On this site, the capital invested by FML and the financing mobilised from partners are always distinguished.",
      },
      {
        t: "chips",
        title: "Compliance in this pillar",
        items: [
          "Verification of operators and beneficial owners",
          "Prevention of conflicts of interest",
          "Governance",
        ],
        link: COMPLIANCE_LINK,
      },
      purposePanel,
    ],
  },

  // 2.2 Maritime (hub)
  {
    path: "/en/expertises/maritime/",
    title: "Maritime — FML CAPITAL",
    description:
      "Flag programmes, maritime registries and national fishing programmes: administrative organisation, oversight of operators and coordination of partners.",
    breadcrumb: [{ href: "/en/expertises/", label: "Expertise" }],
    eyebrow: "02 MARITIME",
    h1: T_MAR,
    lead: MAR_P,
    blocks: [
      {
        t: "cards",
        items: [
          {
            eyebrow: "Subset",
            title: "Flags & registries",
            text: "Flag programmes and maritime registries.",
            href: "/en/expertises/maritime/pavillons-registres/",
          },
          {
            eyebrow: "Subset",
            title: "Fishing programmes",
            text: "National deep-sea and local fishing programmes.",
            href: "/en/expertises/maritime/programmes-de-peche/",
          },
        ],
      },
      { t: "chips", title: "Skills", items: MAR_SK },
      {
        t: "panel",
        title: "Separation of roles",
        text: "Administering a flag, fishing rights and industrial value creation are three distinct activities. Public responsibilities rest with the competent authorities and are kept separate from commercial interests.",
      },
      {
        t: "chips",
        title: "Compliance in this pillar",
        items: [
          "Verification of operators",
          "Control of agents",
          "Monitoring of obligations",
          "Audit and remediation",
        ],
        link: COMPLIANCE_LINK,
      },
      purposePanel,
    ],
  },

  // 2.2a Flags & registries
  {
    path: "/en/expertises/maritime/pavillons-registres/",
    title: "Flags & registries — FML CAPITAL",
    description: "Flag programmes and maritime registries.",
    breadcrumb: [
      { href: "/en/expertises/", label: "Expertise" },
      { href: "/en/expertises/maritime/", label: "Maritime" },
    ],
    eyebrow: "02 MARITIME",
    h1: "Flags & registries",
    lead: "Flag programmes and maritime registries.",
    blocks: [
      { t: "p", text: ROLE_MARITIME },
      { t: "actions", links: [{ href: "/en/expertises/maritime/", text: "← Maritime" }] },
    ],
  },

  // 2.2b Fishing programmes
  {
    path: "/en/expertises/maritime/programmes-de-peche/",
    title: "Fishing programmes — FML CAPITAL",
    description: "National deep-sea and local fishing programmes.",
    breadcrumb: [
      { href: "/en/expertises/", label: "Expertise" },
      { href: "/en/expertises/maritime/", label: "Maritime" },
    ],
    eyebrow: "02 MARITIME",
    h1: "Fishing programmes",
    lead: "National deep-sea and local fishing programmes.",
    blocks: [
      { t: "p", text: ROLE_MARITIME },
      {
        t: "actions",
        links: [
          { href: "/en/expertises/logistics/", text: "Industrial value creation: see Logistics" },
          { href: "/en/expertises/maritime/", text: "← Maritime" },
        ],
      },
    ],
  },

  // 2.3 Logistics
  {
    path: "/en/expertises/logistics/",
    title: "Logistics — FML CAPITAL",
    description:
      "Industrial and logistics chains linked to fishing: supply, processing, packaging, preservation and distribution.",
    breadcrumb: [{ href: "/en/expertises/", label: "Expertise" }],
    eyebrow: "03 LOGISTICS",
    h1: T_LOG,
    lead: LOG_P,
    blocks: [
      { t: "chips", title: "Skills", items: LOG_SK },
      {
        t: "list",
        items: [
          "Supply and landing",
          "Management of industrial fishing units",
          "Processing, transformation and packaging",
          "Quality and traceability",
          "Cold chain, storage, transport and distribution",
          "Market access",
        ],
      },
      { t: "panel", text: LOG_IND },
      {
        t: "chips",
        title: "Compliance in this pillar",
        items: ["Traceability", "Monitoring of obligations", "Quality"],
        link: COMPLIANCE_LINK,
      },
      purposePanel,
    ],
  },

  // 3. Compliance & governance
  {
    path: "/en/conformite-gouvernance/",
    title: "Compliance & governance — FML CAPITAL",
    description:
      "Verification of stakeholders, monitoring of obligations and handling of non-compliance.",
    eyebrow: "A cross-cutting method",
    h1: "Compliance, integrity and governance",
    lead: CONF_P,
    blocks: [
      { t: "h2", text: "Measures in place" },
      {
        t: "cards",
        items: [
          {
            title: "Prevention",
            list: [
              "Verification of operators and beneficial owners",
              "Prevention of conflicts of interest",
            ],
          },
          {
            title: "Monitoring",
            list: ["Traceability", "Monitoring of obligations", "Control of agents"],
          },
          { title: "Remediation", list: ["Audit and remediation"] },
          { title: "Oversight", text: "Under the supervision of the competent authorities." },
        ],
      },
      {
        t: "actions",
        links: [
          { href: "/en/expertises/finance/", text: "Finance" },
          { href: "/en/expertises/maritime/", text: "Maritime" },
          { href: "/en/expertises/logistics/", text: "Logistics" },
        ],
      },
    ],
  },

  // 4. Team & expert network — SET ASIDE (no real content yet)
  {
    path: "/en/equipe-reseau-experts/",
    draft: true,
    title: "Team & expert network — FML CAPITAL",
    description:
      "Collective expertise serving private projects and public-private partnerships.",
    eyebrow: "Team & expert network",
    h1: "Team & expert network",
    lead: "Collective expertise serving private projects and public-private partnerships.",
    blocks: [
      {
        t: "cards",
        items: [
          {
            eyebrow: "Team",
            title: "Roles and responsibilities",
            list: ["Management: General Manager · CEO · COO"],
          },
          {
            eyebrow: "Network",
            title: "Experts and partners",
            text: "External resources, distinct from the team.",
          },
        ],
      },
    ],
  },

  // 5. Projects & references — SET ASIDE (no real content yet)
  {
    path: "/en/projets-references/",
    draft: true,
    title: "Projects & references — FML CAPITAL",
    description:
      "Each published reference states FML’s role, its scope and its progress.",
    eyebrow: "Projects & references",
    h1: "Projects & references",
    lead: "Each published reference states FML’s role, its scope and its progress: study, negotiation, signed agreement, rollout or operation.",
    blocks: [{ t: "panel", text: "Only documented references are published." }],
  },

  // 6. Contact
  {
    path: "/en/contact/",
    title: "Contact — FML CAPITAL",
    description: "Contact FML CAPITAL.",
    eyebrow: "Contact",
    h1: "Contact",
    blocks: [{ t: "contact" }],
  },

  // 7. Legal notice
  {
    path: "/en/mentions-legales/",
    title: "Legal notice — FML CAPITAL",
    description: "Legal notice of FML Capital Ltd.",
    eyebrow: "Legal information",
    h1: "Legal notice",
    blocks: [{ t: "legal" }],
  },
];

// Interface labels (shared template, form, footer).
export const ui = {
  skip: "Skip to content",
  crumbs: "Breadcrumb",
  mainNav: "Main navigation",
  menu: "Menu",
  home: "Home — FML CAPITAL",
  discover: "Discover →",
  langLabel: "Language",
  contactDetails: "Contact details",
  legalLink: "Legal notice",
  contactLink: "Contact",
  formTitle: "Write to FML CAPITAL",
  fName: "Name",
  fOrg: "Organisation",
  fEmail: "Email address",
  fSubject: "Subject",
  fSubjects: ["Finance", "Maritime", "Logistics", "Compliance", "Other"],
  fMessage: "Message",
  fHoneypot: "Leave empty",
  fSend: "Send",
  fMissing: "Please enter your name, your email address and your message.",
  fSending: "Sending…",
  fOk: "Thank you, your message has been sent.",
  fFail: "Sending failed. You can write directly to contact@fml.capital.",
  legalName: "Company name",
  legalNo: "Company No.",
  legalFormLabel: "Legal form",
  legalCountry: "Country",
  legalCountryValue: "Mauritius",
  ogLocale: "en_US",
};
