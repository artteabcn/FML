;(function () {
  'use strict';

  var translations = {
    // FR = langue source (PDF « Fiche d'orientation »). EN = brouillon, à valider avec le glossaire FR/EN.
    en: {
      "nav.home": "Home",
      "nav.expertises": "Expertise",
      "nav.compliance": "Compliance &amp; governance",
      "nav.team": "Team &amp; expert network",
      "nav.projects": "Projects &amp; references",
      "nav.contact": "Contact",
      "hero.eyebrow": "Finance, Maritime, Logistics",
      "hero.body": "Investment, structuring and development of international projects.",
      "group.eyebrow": "Collective expertise",
      "group.h2": "Private projects &amp; public-private partnerships",
      "group.body": "Africa | East Africa &amp; Indian Ocean | Middle East &amp; international",
      "portfolio.eyebrow": "Expertise",
      "portfolio.h2": "Three pillars",
      "finance.body": "<p class=\"cluster-tagline\"><strong>Structure and mobilise capital</strong></p><ul class=\"sub-list\"><li>Financial structuring</li><li>Equity stakes</li><li>Organisation of project vehicles and governance</li><li>Mobilisation of private investors, financial partners and institutional donors</li><li>Support for fundraising</li></ul><a class=\"service-more\" href=\"/expertises/finance/\">Discover →</a>",
      "maritime.body": "<p class=\"cluster-tagline\"><strong>Administer and develop programmes</strong></p><ul class=\"sub-list\"><li>Flag programmes and maritime registries</li><li>National deep-sea and local fishing programmes</li><li>Oversight of operators and agents</li><li>Monitoring of obligations and coordination with authorities</li></ul><a class=\"service-more\" href=\"/expertises/maritime/\">Discover →</a>",
      "logistique.body": "<p class=\"cluster-tagline\"><strong>Run the industrial value chain</strong></p><ul class=\"sub-list\"><li>Supply and landing</li><li>Management of industrial fishing units</li><li>Processing, transformation and packaging</li><li>Quality and traceability</li><li>Cold chain, storage, transport and distribution</li><li>Market access</li></ul><a class=\"service-more\" href=\"/expertises/logistics/\">Discover →</a>",
      "presence.eyebrow": "Presence",
      "presence.h2": "Mauritius · USA · Switzerland",
      "presence.l1": "Ébène, Mauritius",
      "presence.l2": "New York, USA",
      "presence.l3": "Zurich, Switzerland",
      "compliance.eyebrow": "Cross-cutting axis",
      "compliance.h2": "Compliance, integrity and governance",
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
      "nav.team": "Équipe &amp; réseau d’experts",
      "nav.projects": "Projets &amp; références",
      "nav.contact": "Contact",
      "hero.eyebrow": "Finance, Maritime, Logistics",
      "hero.body": "Investissement, structuration et développement de projets internationaux.",
      "group.eyebrow": "Expertise collective",
      "group.h2": "Projets privés &amp; partenariats public-privé",
      "group.body": "Afrique | Afrique de l’Est &amp; océan Indien | Moyen-Orient &amp; international",
      "portfolio.eyebrow": "Expertises",
      "portfolio.h2": "Trois piliers",
      "finance.body": "<p class=\"cluster-tagline\"><strong>Structurer et mobiliser les capitaux</strong></p><ul class=\"sub-list\"><li>Structuration financière</li><li>Prises de participation</li><li>Organisation des véhicules de projet et gouvernance</li><li>Mobilisation d’investisseurs privés, partenaires financiers et bailleurs institutionnels</li><li>Accompagnement des levées de fonds</li></ul><a class=\"service-more\" href=\"/expertises/finance/\">Découvrir →</a>",
      "maritime.body": "<p class=\"cluster-tagline\"><strong>Administrer et développer les programmes</strong></p><ul class=\"sub-list\"><li>Programmes de pavillon et registres maritimes</li><li>Programmes nationaux de pêche hauturière et locale</li><li>Encadrement des opérateurs et agents</li><li>Suivi des obligations et coordination avec les autorités</li></ul><a class=\"service-more\" href=\"/expertises/maritime/\">Découvrir →</a>",
      "logistique.body": "<p class=\"cluster-tagline\"><strong>Piloter la chaîne de valeur industrielle</strong></p><ul class=\"sub-list\"><li>Approvisionnement et débarquement</li><li>Gestion d’unités industrielles de pêche</li><li>Traitement, transformation et conditionnement</li><li>Qualité et traçabilité</li><li>Chaîne du froid, stockage, transport et distribution</li><li>Accès aux marchés</li></ul><a class=\"service-more\" href=\"/expertises/logistics/\">Découvrir →</a>",
      "presence.eyebrow": "Présence",
      "presence.h2": "Maurice · États-Unis · Suisse",
      "presence.l1": "Ébène, Maurice",
      "presence.l2": "New York, États-Unis",
      "presence.l3": "Zurich, Suisse",
      "compliance.eyebrow": "Axe transversal",
      "compliance.h2": "Conformité, intégrité et gouvernance",
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
      "contact.address": "Bureaux : Port-Louis, Maurice · Zurich, Suisse",
      "contact.legal": "FML Capital Ltd — N° de société 234759<br>Private Company limited by shares<br>Maurice",
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
    applyLang(saved === 'en' ? 'en' : 'fr');

    document.querySelectorAll('.lang-link').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        applyLang(a.getAttribute('data-lang'), true);
      });
    });
  });
})();
