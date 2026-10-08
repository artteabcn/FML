// Contenu FR de FML CAPITAL — source : FML_Fiche_Orientation_Site.pdf (7 octobre 2026).
// Voir FML_contenu_FR_v2.md pour l'étiquetage (PDF / adapté / à confirmer) de chaque bloc.
// Pour modifier un texte : éditer ce fichier puis lancer `node build/build.mjs`.

export const site = {
  name: "FML CAPITAL",
  legalName: "FML Capital Ltd",
  baseUrl: "https://fml.capital",
  lang: "fr",
  signature: "Finance • Maritime • Logistics",
  email: "contact@fml.capital",
  phone: "+41 76 264 43 72",
  phoneHref: "+41762644372",
  places: "Bureaux : Port-Louis, Île Maurice · Zurich, Suisse",
  companyNo: "234759",
  legalForm: "Private Company limited by shares",
};

export const nav = [
  { href: "/", label: "Accueil" },
  {
    href: "/expertises/",
    label: "Expertises",
    children: [
      { href: "/expertises/finance/", label: "Finance" },
      { href: "/expertises/maritime/", label: "Maritime" },
      { href: "/expertises/logistics/", label: "Logistics" },
    ],
  },
  { href: "/conformite-gouvernance/", label: "Conformité & gouvernance" },
  { href: "/equipe-reseau-experts/", label: "Équipe & réseau d’experts" },
  { href: "/projets-references/", label: "Projets & références" },
  { href: "/contact/", label: "Contact" },
];

const FINALITE_PDF =
  "Renforcer les capacités publiques, protéger la réputation des programmes, soutenir des recettes durables et valoriser les ressources, sous supervision des autorités compétentes.";

const finalitePanel = {
  t: "panel",
  title: "Finalité",
  text: FINALITE_PDF,
};

const ROLE_MARITIME =
  "FML développe l’organisation administrative, l’encadrement des opérateurs et agents, le suivi des obligations et la coordination avec les autorités.";

export const pages = [
  // ───────────── 1. Accueil
  {
    path: "/",
    title: "FML CAPITAL — Finance • Maritime • Logistics",
    description:
      "Compagnie d’investissement, de structuration financière et de développement de projets internationaux.",
    home: true,
    eyebrow: "Finance • Maritime • Logistics",
    h1: "FML CAPITAL",
    lead: "Compagnie d’investissement, de structuration financière et de développement de projets internationaux.",
    blocks: [
      {
        t: "panel",
        title: "Expertise collective",
        text: "Expertise collective au service de projets privés et de partenariats public-privé, avec un socle maritime, pêche et logistique industrielle.",
      },
      {
        t: "panel",
        title: "Ancrage",
        text: "Afrique, notamment Afrique de l’Est et océan Indien. Ouverture au Moyen-Orient et à l’international.",
      },
      { t: "h2", text: "Expertises" },
      {
        t: "cards",
        items: [
          {
            eyebrow: "01 FINANCE",
            title: "Structurer et mobiliser les capitaux",
            text: "Structuration financière, prises de participation, organisation des véhicules de projet et gouvernance.",
            href: "/expertises/finance/",
          },
          {
            eyebrow: "02 MARITIME",
            title: "Administrer et développer les programmes",
            text: "Deux sous-ensembles distincts : programmes de pavillon et registres maritimes ; programmes nationaux de pêche hauturière et locale.",
            href: "/expertises/maritime/",
          },
          {
            eyebrow: "03 LOGISTICS",
            title: "Piloter la chaîne de valeur industrielle",
            text: "Approvisionnement et débarquement ; gestion d’unités industrielles de pêche ; traitement, transformation et conditionnement ; qualité et traçabilité ; chaîne du froid, stockage, transport et distribution ; accès aux marchés.",
            href: "/expertises/logistics/",
          },
        ],
      },
      {
        t: "panel",
        accent: true,
        title: "Conformité, intégrité et gouvernance",
        text: "Vérification des opérateurs et bénéficiaires effectifs, prévention des conflits d’intérêts, traçabilité, suivi des obligations, contrôle des agents, audit et remédiation.",
        link: { href: "/conformite-gouvernance/", text: "Conformité & gouvernance" },
      },
      {
        t: "panel",
        title: "Finalité",
        text:
          FINALITE_PDF +
          " La durabilité des ressources et le transfert de compétences en font partie. L’amélioration de l’attractivité et des recettes est un objectif, non une garantie automatique.",
      },
    ],
  },

  // ───────────── 2. Expertises (hub)
  {
    path: "/expertises/",
    title: "Expertises — FML CAPITAL",
    description:
      "Expertise collective au service de projets privés et de partenariats public-privé, avec un socle maritime, pêche et logistique industrielle.",
    eyebrow: "Expertises",
    h1: "Expertises",
    lead: "Expertise collective au service de projets privés et de partenariats public-privé, avec un socle maritime, pêche et logistique industrielle.",
    blocks: [
      {
        t: "cards",
        items: [
          {
            eyebrow: "01 FINANCE",
            title: "Structurer et mobiliser les capitaux",
            text: "Structuration financière, prises de participation, organisation des véhicules de projet et gouvernance.",
            href: "/expertises/finance/",
          },
          {
            eyebrow: "02 MARITIME",
            title: "Administrer et développer les programmes",
            text: "Deux sous-ensembles distincts : programmes de pavillon et registres maritimes ; programmes nationaux de pêche hauturière et locale.",
            href: "/expertises/maritime/",
          },
          {
            eyebrow: "03 LOGISTICS",
            title: "Piloter la chaîne de valeur industrielle",
            text: "Approvisionnement et débarquement ; gestion d’unités industrielles de pêche ; traitement, transformation et conditionnement ; qualité et traçabilité ; chaîne du froid, stockage, transport et distribution ; accès aux marchés.",
            href: "/expertises/logistics/",
          },
        ],
      },
    ],
  },

  // ───────────── 2.1 Finance
  {
    path: "/expertises/finance/",
    title: "Finance — FML CAPITAL",
    description:
      "Structuration financière, prises de participation, organisation des véhicules de projet et gouvernance.",
    breadcrumb: [{ href: "/expertises/", label: "Expertises" }],
    eyebrow: "01 FINANCE",
    h1: "Structurer et mobiliser les capitaux",
    lead: "Structuration financière, prises de participation, organisation des véhicules de projet et gouvernance.",
    blocks: [
      {
        t: "p",
        text: "Mobilisation d’investisseurs privés, partenaires financiers et bailleurs institutionnels ; accompagnement des levées de fonds.",
      },
      {
        t: "panel",
        text: "Sur ce site, les capitaux investis par FML et les financements mobilisés auprès de partenaires sont toujours distingués.",
      },
      {
        t: "chips",
        title: "Conformité dans ce pilier",
        items: [
          "Vérification des opérateurs et bénéficiaires effectifs",
          "Prévention des conflits d’intérêts",
          "Gouvernance",
        ],
        link: { href: "/conformite-gouvernance/", text: "Conformité & gouvernance" },
      },
      finalitePanel,
    ],
  },

  // ───────────── 2.2 Maritime (hub)
  {
    path: "/expertises/maritime/",
    title: "Maritime — FML CAPITAL",
    description:
      "Deux sous-ensembles distincts : programmes de pavillon et registres maritimes ; programmes nationaux de pêche hauturière et locale.",
    breadcrumb: [{ href: "/expertises/", label: "Expertises" }],
    eyebrow: "02 MARITIME",
    h1: "Administrer et développer les programmes",
    lead: "Deux sous-ensembles distincts : programmes de pavillon et registres maritimes ; programmes nationaux de pêche hauturière et locale.",
    blocks: [
      {
        t: "cards",
        items: [
          {
            eyebrow: "Sous-ensemble",
            title: "Pavillons & registres",
            text: "Programmes de pavillon et registres maritimes.",
            href: "/expertises/maritime/pavillons-registres/",
          },
          {
            eyebrow: "Sous-ensemble",
            title: "Programmes de pêche",
            text: "Programmes nationaux de pêche hauturière et locale.",
            href: "/expertises/maritime/programmes-de-peche/",
          },
        ],
      },
      { t: "h2", text: "Rôle de FML" },
      { t: "p", text: ROLE_MARITIME },
      {
        t: "panel",
        title: "Séparation des rôles",
        text: "L’administration d’un pavillon, les droits de pêche et la valorisation industrielle sont trois activités distinctes. Les responsabilités publiques relèvent des autorités compétentes et sont séparées des intérêts commerciaux.",
      },
      {
        t: "chips",
        title: "Conformité dans ce pilier",
        items: [
          "Vérification des opérateurs",
          "Contrôle des agents",
          "Suivi des obligations",
          "Audit et remédiation",
        ],
        link: { href: "/conformite-gouvernance/", text: "Conformité & gouvernance" },
      },
      finalitePanel,
    ],
  },

  // ───────────── 2.2a Pavillons & registres
  {
    path: "/expertises/maritime/pavillons-registres/",
    title: "Pavillons & registres — FML CAPITAL",
    description: "Programmes de pavillon et registres maritimes.",
    breadcrumb: [
      { href: "/expertises/", label: "Expertises" },
      { href: "/expertises/maritime/", label: "Maritime" },
    ],
    eyebrow: "02 MARITIME",
    h1: "Pavillons & registres",
    lead: "Programmes de pavillon et registres maritimes.",
    blocks: [
      { t: "p", text: ROLE_MARITIME },
      {
        t: "actions",
        links: [{ href: "/expertises/maritime/", text: "← Maritime" }],
      },
    ],
  },

  // ───────────── 2.2b Programmes de pêche
  {
    path: "/expertises/maritime/programmes-de-peche/",
    title: "Programmes de pêche — FML CAPITAL",
    description: "Programmes nationaux de pêche hauturière et locale.",
    breadcrumb: [
      { href: "/expertises/", label: "Expertises" },
      { href: "/expertises/maritime/", label: "Maritime" },
    ],
    eyebrow: "02 MARITIME",
    h1: "Programmes de pêche",
    lead: "Programmes nationaux de pêche hauturière et locale.",
    blocks: [
      { t: "p", text: ROLE_MARITIME },
      {
        t: "actions",
        links: [
          { href: "/expertises/logistics/", text: "Valorisation industrielle : voir Logistics" },
          { href: "/expertises/maritime/", text: "← Maritime" },
        ],
      },
    ],
  },

  // ───────────── 2.3 Logistics
  {
    path: "/expertises/logistics/",
    title: "Logistics — FML CAPITAL",
    description:
      "Approvisionnement et débarquement ; gestion d’unités industrielles de pêche ; traitement, transformation et conditionnement ; qualité et traçabilité ; chaîne du froid, stockage, transport et distribution ; accès aux marchés.",
    breadcrumb: [{ href: "/expertises/", label: "Expertises" }],
    eyebrow: "03 LOGISTICS",
    h1: "Piloter la chaîne de valeur industrielle",
    blocks: [
      {
        t: "list",
        items: [
          "Approvisionnement et débarquement",
          "Gestion d’unités industrielles de pêche",
          "Traitement, transformation et conditionnement",
          "Qualité et traçabilité",
          "Chaîne du froid, stockage, transport et distribution",
          "Accès aux marchés",
        ],
      },
      { t: "panel", text: "Actifs industriels détenus et gérés par FML." },
      {
        t: "p",
        text: "Ces fonctions sont opérées directement par FML, sur l’ensemble de la chaîne qu’elle détient.",
      },
      {
        t: "chips",
        title: "Conformité dans ce pilier",
        items: ["Traçabilité", "Suivi des obligations", "Qualité"],
        link: { href: "/conformite-gouvernance/", text: "Conformité & gouvernance" },
      },
      finalitePanel,
    ],
  },

  // ───────────── 3. Conformité & gouvernance
  {
    path: "/conformite-gouvernance/",
    title: "Conformité & gouvernance — FML CAPITAL",
    description:
      "Vérification des opérateurs et bénéficiaires effectifs, prévention des conflits d’intérêts, traçabilité, suivi des obligations, contrôle des agents, audit et remédiation.",
    eyebrow: "Axe transversal",
    h1: "Conformité, intégrité et gouvernance",
    lead: "FML intègre ces engagements dans chacun des trois piliers : Finance, Maritime et Logistics.",
    blocks: [
      { t: "h2", text: "Dispositifs en place" },
      {
        t: "cards",
        items: [
          {
            title: "Prévention",
            list: [
              "Vérification des opérateurs et bénéficiaires effectifs",
              "Prévention des conflits d’intérêts",
            ],
          },
          {
            title: "Surveillance",
            list: ["Traçabilité", "Suivi des obligations", "Contrôle des agents"],
          },
          { title: "Remédiation", list: ["Audit et remédiation"] },
          { title: "Supervision", text: "Sous supervision des autorités compétentes." },
        ],
      },
      {
        t: "actions",
        links: [
          { href: "/expertises/finance/", text: "Finance" },
          { href: "/expertises/maritime/", text: "Maritime" },
          { href: "/expertises/logistics/", text: "Logistics" },
        ],
      },
    ],
  },

  // ───────────── 4. Équipe & réseau d'experts
  {
    path: "/equipe-reseau-experts/",
    title: "Équipe & réseau d’experts — FML CAPITAL",
    description:
      "Expertise collective au service de projets privés et de partenariats public-privé.",
    eyebrow: "Équipe & réseau d’experts",
    h1: "Équipe & réseau d’experts",
    lead: "Expertise collective au service de projets privés et de partenariats public-privé.",
    blocks: [
      {
        t: "cards",
        items: [
          {
            eyebrow: "Équipe",
            title: "Métiers et responsabilités",
            list: ["Direction : Directeur Général · CEO · COO"],
          },
          {
            eyebrow: "Réseau",
            title: "Experts et partenaires",
            text: "Ressources externes, distinguées de l’équipe.",
          },
        ],
      },
    ],
  },

  // ───────────── 5. Projets & références
  {
    path: "/projets-references/",
    title: "Projets & références — FML CAPITAL",
    description:
      "Chaque référence publiée indique le rôle de FML, son périmètre et son avancement.",
    eyebrow: "Projets & références",
    h1: "Projets & références",
    lead: "Chaque référence publiée indique le rôle de FML, son périmètre et son avancement : étude, négociation, accord signé, déploiement ou exploitation.",
    blocks: [{ t: "panel", text: "Seules les références documentées sont publiées." }],
  },

  // ───────────── 6. Contact
  {
    path: "/contact/",
    title: "Contact — FML CAPITAL",
    description: "Contacter FML CAPITAL.",
    eyebrow: "Contact",
    h1: "Contact",
    blocks: [{ t: "contact" }],
  },

  // ───────────── 7. Mentions légales
  {
    path: "/mentions-legales/",
    title: "Mentions légales — FML CAPITAL",
    description: "Mentions légales de FML Capital Ltd.",
    eyebrow: "Informations légales",
    h1: "Mentions légales",
    blocks: [{ t: "legal" }],
  },
];
