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
  // « Équipe & réseau d’experts » et « Projets & références » : retirés du menu tant qu’il n’y a pas de contenu réel (pages en `draft: true` plus bas).
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


// ── Propositions de textes (revue du 9 octobre 2026) ──────────────────────
const ACC_TAGLINE = "Investir, structurer et développer des projets internationaux.";
const ACC_P =
  "FML Capital réunit des compétences financières, maritimes et industrielles pour accompagner des projets privés et des partenariats public-privé. Notre approche associe structuration des projets, mobilisation de partenaires et coordination des expertises nécessaires à leur développement.";
const FIN_P =
  "Nous accompagnons la structuration financière des projets, l’organisation des participations et la mobilisation de partenaires financiers. Notre intervention articule investissement, gouvernance et recherche de financements adaptés aux besoins du projet.";
const FIN_SK = ["Structuration financière", "Participations et véhicules de projet", "Mobilisation de capitaux"];
const MAR_P =
  "Notre expertise porte sur les programmes de pavillon, les registres maritimes et les programmes nationaux de pêche. Nous accompagnons leur organisation administrative, l’encadrement des opérateurs et la coordination des partenaires, dans le respect des responsabilités des autorités compétentes.";
const MAR_SK = ["Pavillons et registres", "Programmes de pêche", "Suivi des opérateurs et obligations"];
const LOG_P =
  "Nous organisons les chaînes industrielles et logistiques liées à la pêche : approvisionnement, transformation, conditionnement, conservation et distribution. Les opérations directes et les partenariats sont articulés selon le périmètre de chaque projet, avec une attention à la qualité, à la traçabilité et à la valorisation des produits.";
const LOG_SK = ["Gestion industrielle", "Chaîne du froid et flux", "Accès aux marchés"];
const LOG_IND =
  "Notre expertise s’appuie notamment sur la détention et la gestion d’une unité industrielle de pêche."; // sans localisation
const CONF_P =
  "La conformité et la gouvernance encadrent notre approche des projets : vérification des intervenants, suivi des obligations et traitement des non-conformités. Les responsabilités sont définies selon les mandats et les dispositifs de supervision applicables.";
const T_FIN = "Structurer et mobiliser les capitaux";
const T_MAR = "Organiser les programmes et leur administration";
const T_LOG = "Relier l’industrie aux marchés";
export const pages = [
  // ───────────── 1. Accueil (landing maintenue à la main : cette entrée ne sert qu’au sitemap et à llms.txt)
  {
    path: "/",
    title: "FML CAPITAL — Finance • Maritime • Logistics",
    description: ACC_TAGLINE,
    home: true,
    eyebrow: "Finance • Maritime • Logistics",
    h1: "FML CAPITAL",
    lead: ACC_TAGLINE + " " + ACC_P,
    blocks: [],
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
          { eyebrow: "01 FINANCE", title: T_FIN, text: FIN_P, href: "/expertises/finance/" },
          { eyebrow: "02 MARITIME", title: T_MAR, text: MAR_P, href: "/expertises/maritime/" },
          { eyebrow: "03 LOGISTICS", title: T_LOG, text: LOG_P, href: "/expertises/logistics/" },
        ],
      },
    ],
  },

  // ───────────── 2.1 Finance
  {
    path: "/expertises/finance/",
    title: "Finance — FML CAPITAL",
    description:
      "Structuration financière des projets, organisation des participations et mobilisation de partenaires financiers.",
    breadcrumb: [{ href: "/expertises/", label: "Expertises" }],
    eyebrow: "01 FINANCE",
    h1: T_FIN,
    lead: FIN_P,
    blocks: [
      { t: "chips", title: "Compétences", items: FIN_SK },
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
      "Programmes de pavillon, registres maritimes et programmes nationaux de pêche : organisation administrative, encadrement des opérateurs et coordination des partenaires.",
    breadcrumb: [{ href: "/expertises/", label: "Expertises" }],
    eyebrow: "02 MARITIME",
    h1: T_MAR,
    lead: MAR_P,
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
      { t: "chips", title: "Compétences", items: MAR_SK },
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
      { t: "actions", links: [{ href: "/expertises/maritime/", text: "← Maritime" }] },
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
      "Chaînes industrielles et logistiques liées à la pêche : approvisionnement, transformation, conditionnement, conservation et distribution.",
    breadcrumb: [{ href: "/expertises/", label: "Expertises" }],
    eyebrow: "03 LOGISTICS",
    h1: T_LOG,
    lead: LOG_P,
    blocks: [
      { t: "chips", title: "Compétences", items: LOG_SK },
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
      { t: "panel", text: LOG_IND },
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
      "Vérification des intervenants, suivi des obligations et traitement des non-conformités.",
    eyebrow: "Une méthode transversale",
    h1: "Conformité, intégrité et gouvernance",
    lead: CONF_P,
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

  // ───────────── 4. Équipe & réseau d'experts — MIS DE CÔTÉ (pas encore de contenu réel)
  {
    path: "/equipe-reseau-experts/",
    draft: true,
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

  // ───────────── 5. Projets & références — MIS DE CÔTÉ (pas encore de contenu réel)
  {
    path: "/projets-references/",
    draft: true,
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

// Libellés d’interface (gabarit commun, formulaire, pied de page).
export const ui = {
  skip: "Aller au contenu",
  crumbs: "Fil d’Ariane",
  mainNav: "Navigation principale",
  menu: "Menu",
  home: "Accueil — FML CAPITAL",
  discover: "Découvrir →",
  langLabel: "Langue",
  contactDetails: "Coordonnées",
  legalLink: "Mentions légales",
  contactLink: "Contact",
  formTitle: "Écrire à FML CAPITAL",
  fName: "Nom",
  fOrg: "Organisation",
  fEmail: "Adresse e-mail",
  fSubject: "Objet",
  fSubjects: ["Finance", "Maritime", "Logistics", "Conformité", "Autre"],
  fMessage: "Message",
  fHoneypot: "Ne pas remplir",
  fSend: "Envoyer",
  fMissing: "Merci de renseigner votre nom, votre adresse e-mail et votre message.",
  fSending: "Envoi en cours…",
  fOk: "Merci, votre message a bien été envoyé.",
  fFail: "L’envoi a échoué. Vous pouvez écrire directement à contact@fml.capital.",
  legalName: "Dénomination",
  legalNo: "Company No.",
  legalFormLabel: "Forme juridique",
  legalCountry: "Pays",
  legalCountryValue: "Île Maurice",
  ogLocale: "fr_FR",
};
