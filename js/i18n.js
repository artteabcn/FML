;(function () {
  'use strict';

  var translations = {
    // FR = langue source (PDF « Fiche d'orientation »). EN = brouillon, à valider avec le glossaire FR/EN.
    en: {
      "nav.home": "Home",
      "nav.expertises": "Expertise",
      "nav.compliance": "Compliance &amp; governance",
      "nav.contact": "Contact",
      "hero.eyebrow": "Finance, Maritime, Logistics",
      "hero.body": "Invest, structure and develop international projects.",
      "group.eyebrow": "Collective expertise",
      "group.h2": "Private projects &amp; public-private partnerships",
      "group.intro": "FML Capital brings together financial, maritime and industrial skills to support private projects and public-private partnerships. Our approach combines project structuring, mobilisation of partners and coordination of the expertise needed for their development.",
      "group.body": "Africa | East Africa &amp; Indian Ocean | Middle East &amp; international",
      "portfolio.eyebrow": "Expertise",
      "portfolio.h2": "Three pillars",
      "finance.body": "<p class=\"cluster-tagline\"><strong>Structure and mobilise capital</strong></p><p class=\"cluster-text\">We support the financial structuring of projects, the organisation of equity stakes and the mobilisation of financial partners. Our work combines investment, governance and the search for financing suited to the needs of the project.</p><p class=\"cluster-skills\"><span>Skills</span> Financial structuring · Equity stakes and project vehicles · Mobilisation of capital</p><a class=\"service-more\" href=\"/en/expertises/finance/\">Discover →</a>",
      "maritime.body": "<p class=\"cluster-tagline\"><strong>Organise programmes and their administration</strong></p><p class=\"cluster-text\">Our expertise covers flag programmes, maritime registries and national fishing programmes. We support their administrative organisation, the oversight of operators and the coordination of partners, with respect for the responsibilities of the competent authorities.</p><p class=\"cluster-skills\"><span>Skills</span> Flags and registries · Fishing programmes · Monitoring of operators and obligations</p><a class=\"service-more\" href=\"/en/expertises/maritime/\">Discover →</a>",
      "logistique.body": "<p class=\"cluster-tagline\"><strong>Connect industry to markets</strong></p><p class=\"cluster-text\">We organise the industrial and logistics chains linked to fishing: supply, processing, packaging, preservation and distribution. Direct operations and partnerships are arranged according to the scope of each project, with attention to quality, traceability and the valorisation of products.</p><p class=\"cluster-skills\"><span>Skills</span> Industrial management · Cold chain and flows · Market access</p><a class=\"service-more\" href=\"/en/expertises/logistics/\">Discover →</a>",
      "presence.eyebrow": "Presence",
      "presence.h2": "USA · Switzerland · Mauritius",
      "presence.l1": "New York, USA",
      "presence.l2": "Zurich, Switzerland",
      "presence.l3": "Ébène, Mauritius",
      "compliance.eyebrow": "Compliance",
      "compliance.h2": "A cross-cutting method",
      "compliance.intro": "Compliance and governance frame our approach to projects: verification of stakeholders, monitoring of obligations and handling of non-compliance. Responsibilities are defined according to the applicable mandates and supervision arrangements.",
      "compliance.m1.title": "Prevention",
      "compliance.m1.body": "Verification of operators and beneficial owners; prevention of conflicts of interest.",
      "compliance.m2.title": "Monitoring",
      "compliance.m2.body": "Traceability; monitoring of obligations; control of agents.",
      "compliance.m3.title": "Remediation",
      "compliance.m3.body": "Audit and remediation.",
      "compliance.m4.title": "Oversight",
      "compliance.m4.body": "Under the supervision of the competent authorities.",
      "compliance.more": "Compliance &amp; governance →",
      "contact.eyebrow": "Contact",
      "contact.h2": "Let's talk",
      "contact.address": "Offices: Port Louis, Mauritius · Zurich, Switzerland",
      "contact.legal": "FML Capital Ltd — Company No. 234759<br>Private Company limited by shares<br>Mauritius",
      "form.name": "Name",
      "form.email": "Email",
      "form.message": "Message",
      "form.submit": "Send"
    },

    fr: {
      "nav.home": "Accueil",
      "nav.expertises": "Expertises",
      "nav.compliance": "Conformité &amp; gouvernance",
      "nav.contact": "Contact",
      "hero.eyebrow": "Finance, Maritime, Logistics",
      "hero.body": "Investir, structurer et développer des projets internationaux.",
      "group.eyebrow": "Expertise collective",
      "group.h2": "Projets privés &amp; partenariats public-privé",
      "group.intro": "FML Capital réunit des compétences financières, maritimes et industrielles pour accompagner des projets privés et des partenariats public-privé. Notre approche associe structuration des projets, mobilisation de partenaires et coordination des expertises nécessaires à leur développement.",
      "group.body": "Afrique | Afrique de l’Est &amp; océan Indien | Moyen-Orient &amp; international",
      "portfolio.eyebrow": "Expertises",
      "portfolio.h2": "Trois piliers",
      "finance.body": "<p class=\"cluster-tagline\"><strong>Structurer et mobiliser les capitaux</strong></p><p class=\"cluster-text\">Nous accompagnons la structuration financière des projets, l’organisation des participations et la mobilisation de partenaires financiers. Notre intervention articule investissement, gouvernance et recherche de financements adaptés aux besoins du projet.</p><p class=\"cluster-skills\"><span>Compétences</span> Structuration financière · Participations et véhicules de projet · Mobilisation de capitaux</p><a class=\"service-more\" href=\"/expertises/finance/\">Découvrir →</a>",
      "maritime.body": "<p class=\"cluster-tagline\"><strong>Organiser les programmes et leur administration</strong></p><p class=\"cluster-text\">Notre expertise porte sur les programmes de pavillon, les registres maritimes et les programmes nationaux de pêche. Nous accompagnons leur organisation administrative, l’encadrement des opérateurs et la coordination des partenaires, dans le respect des responsabilités des autorités compétentes.</p><p class=\"cluster-skills\"><span>Compétences</span> Pavillons et registres · Programmes de pêche · Suivi des opérateurs et obligations</p><a class=\"service-more\" href=\"/expertises/maritime/\">Découvrir →</a>",
      "logistique.body": "<p class=\"cluster-tagline\"><strong>Relier l’industrie aux marchés</strong></p><p class=\"cluster-text\">Nous organisons les chaînes industrielles et logistiques liées à la pêche : approvisionnement, transformation, conditionnement, conservation et distribution. Les opérations directes et les partenariats sont articulés selon le périmètre de chaque projet, avec une attention à la qualité, à la traçabilité et à la valorisation des produits.</p><p class=\"cluster-skills\"><span>Compétences</span> Gestion industrielle · Chaîne du froid et flux · Accès aux marchés</p><a class=\"service-more\" href=\"/expertises/logistics/\">Découvrir →</a>",
      "presence.eyebrow": "Présence",
      "presence.h2": "États-Unis · Suisse · Île Maurice",
      "presence.l1": "New York, États-Unis",
      "presence.l2": "Zurich, Suisse",
      "presence.l3": "Ébène, Île Maurice",
      "compliance.eyebrow": "Conformité",
      "compliance.h2": "Une méthode transversale",
      "compliance.intro": "La conformité et la gouvernance encadrent notre approche des projets : vérification des intervenants, suivi des obligations et traitement des non-conformités. Les responsabilités sont définies selon les mandats et les dispositifs de supervision applicables.",
      "compliance.m1.title": "Prévention",
      "compliance.m1.body": "Vérification des opérateurs et bénéficiaires effectifs ; prévention des conflits d’intérêts.",
      "compliance.m2.title": "Surveillance",
      "compliance.m2.body": "Traçabilité ; suivi des obligations ; contrôle des agents.",
      "compliance.m3.title": "Remédiation",
      "compliance.m3.body": "Audit et remédiation.",
      "compliance.m4.title": "Supervision",
      "compliance.m4.body": "Sous supervision des autorités compétentes.",
      "compliance.more": "Conformité &amp; gouvernance →",
      "contact.eyebrow": "Contact",
      "contact.h2": "Parlons-en",
      "contact.address": "Bureaux : Port-Louis, Île Maurice · Zurich, Suisse",
      "contact.legal": "FML Capital Ltd — N° de société 234759<br>Private Company limited by shares<br>Île Maurice",
      "form.name": "Nom",
      "form.email": "E-mail",
      "form.message": "Message",
      "form.submit": "Envoyer"
    }
  };

  function applyLang(lang, animate) {
    if (!translations[lang]) return;
    document.documentElement.setAttribute('lang', lang);

    var i18nEls = document.querySelectorAll('[data-i18n]');

    function swapContent() {
      i18nEls.forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
          el.innerHTML = translations[lang][key];
        }
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key] !== undefined) {
          el.setAttribute('placeholder', translations[lang][key]);
        }
      });

      document.querySelectorAll('.lang-link').forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('data-lang') === lang);
      });

      // Liens vers les pages internes : version FR (/…) ou EN (/en/…) selon la langue active.
      document.querySelectorAll('[data-href-fr]').forEach(function (a) {
        a.setAttribute('href', lang === 'en' ? a.getAttribute('data-href-en') : a.getAttribute('data-href-fr'));
      });

      try { localStorage.setItem('fml-lang', lang); } catch (e) { /* ignore */ }

      if (animate) {
        i18nEls.forEach(function (el) { el.classList.remove('fml-i18n-fade'); });
      }
    }

    if (animate) {
      i18nEls.forEach(function (el) { el.classList.add('fml-i18n-fade'); });
      setTimeout(swapContent, 180);
    } else {
      swapContent();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = null;
    try { saved = localStorage.getItem('fml-lang'); } catch (e) { /* ignore */ }
    var fromUrl = (location.search.match(/[?&]lang=(en|fr)\b/) || [])[1]; // ex. /en/ redirige vers /?lang=en
    applyLang(fromUrl || (saved === 'en' ? 'en' : 'fr'));

    document.querySelectorAll('.lang-link').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        applyLang(a.getAttribute('data-lang'), true);
      });
    });
  });
})();
