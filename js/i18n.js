;(function () {
  'use strict';

  var translations = {
    en: {
      'note.placeholder': 'FML Group · placeholder content, photography via Unsplash &amp; original illustrations',

      'nav.home': 'Home',
      'nav.group': 'The Group',
      'nav.portfolio': 'Portfolio',
      'nav.presence': 'Presence',
      'nav.history': 'History',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Finance, Maritime, Logistics',
      'hero.body': "From Port Louis to the West African coast, FML Group finances industry, commands the sea, and keeps the region's trade moving — three pillars, one group.",

      'group.eyebrow': 'The Group',
      'group.h2': 'Three pillars, one direction',
      'group.body': "FML Group was built on a simple conviction: that finance, the sea, and the supply chain are not separate businesses but one continuous chain of trust. We back the ventures that need capital, we govern the waters that carry the region's trade, and we move what industry depends on — port to mine, mine to cement plant. Mauritius is home. West Africa is where we grow.",

      'fact.pillars': 'Pillars',
      'fact.regions': 'Regions',
      'fact.registered': 'Registered',
      'fact.maritime': 'Maritime mandates',

      'portfolio.eyebrow': 'Portfolio',
      'portfolio.h2': 'What each pillar carries',

      'finance.body': '<p class="cluster-tagline"><strong>Capital with conviction.</strong></p><ul class="sub-list"><li>Financing / equity investment — Industry <em>XYZ</em></li></ul>',
      'maritime.body': '<p class="cluster-tagline"><strong>Command of the sea.</strong></p><ul class="sub-list"><li>Maritime registry — flag <em>XYZ</em></li><li>Fisheries</li><li>Security &amp; surveillance — combating the proliferation of illicit markets</li></ul>',
      'logistique.body': '<p class="cluster-tagline"><strong>The chain that never stops.</strong></p><ul class="sub-list"><li>Port</li><li>Mining</li><li>Cement</li></ul>',

      'presence.eyebrow': 'Presence',
      'presence.h2': 'One coastline, four ports of call',
      'presence.body': 'Headquartered in Mauritius, reaching into West Africa — each location placeholder until confirmed.',
      'presence.hq': 'HQ',
      'presence.active': 'Active',

      'history.eyebrow': 'History',
      'history.h2': 'Milestones',
      'history.m1.title': '2026 — FML Capital Ltd incorporated',
      'history.m1.body': 'Registered in Port Louis, Mauritius (Company No. 234759), as a private company limited by shares.',
      'history.m2.title': 'West Africa expansion',
      'history.m2.body': 'Crossing the water to Abidjan and Dakar. (Placeholder — real date to follow.)',
      'history.m3.title': 'Logistique cluster established',
      'history.m3.body': 'Port, mine and cement freight brought under one roof. (Placeholder — real date to follow.)',

      'contact.eyebrow': 'Contact',
      'contact.h2': "Let's talk",
      'contact.address': 'Port Louis, Mauritius',
      'contact.legal': 'FML Capital Ltd — Company No. 234759<br>Private Company Limited by Shares<br>Incorporated 18 May 2026',

      'form.name': 'Name',
      'form.email': 'Email',
      'form.message': 'Message',
      'form.submit': 'Submit'
    },

    fr: {
      'note.placeholder': 'FML Group · contenu provisoire, photographies via Unsplash et illustrations originales',

      'nav.home': 'Accueil',
      'nav.group': 'Le Groupe',
      'nav.portfolio': 'Portefeuille',
      'nav.presence': 'Présence',
      'nav.history': 'Historique',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Finance, Maritime, Logistique',
      'hero.body': "De Port Louis à la côte ouest-africaine, FML Group finance l'industrie, commande la mer et fait circuler le commerce régional — trois piliers, un seul groupe.",

      'group.eyebrow': 'Le Groupe',
      'group.h2': 'Trois piliers, une direction',
      'group.body': "FML Group repose sur une conviction simple : la finance, la mer et la chaîne logistique ne sont pas des activités séparées, mais une seule chaîne de confiance continue. Nous soutenons les projets qui ont besoin de capitaux, nous encadrons les eaux qui portent le commerce régional, et nous faisons circuler ce dont l'industrie dépend — du port à la mine, de la mine à la cimenterie. Maurice est notre port d'attache. L'Afrique de l'Ouest est notre croissance.",

      'fact.pillars': 'Piliers',
      'fact.regions': 'Régions',
      'fact.registered': 'Immatriculée',
      'fact.maritime': 'Mandats maritimes',

      'portfolio.eyebrow': 'Portefeuille',
      'portfolio.h2': 'Ce que porte chaque pilier',

      'finance.body': '<p class="cluster-tagline"><strong>Le capital, avec conviction.</strong></p><ul class="sub-list"><li>Financement / prise de participation — Industrie <em>XYZ</em></li></ul>',
      'maritime.body': '<p class="cluster-tagline"><strong>Le commandement de la mer.</strong></p><ul class="sub-list"><li>Registre maritime — pavillon <em>XYZ</em></li><li>Pêche</li><li>Sécurité, surveillance — lutte contre la prolifération des marchés illicites</li></ul>',
      'logistique.body': '<p class="cluster-tagline"><strong>La chaîne qui ne s\'arrête jamais.</strong></p><ul class="sub-list"><li>Portuaire</li><li>Minière</li><li>Cimentiers</li></ul>',

      'presence.eyebrow': 'Présence',
      'presence.h2': 'Un littoral, quatre escales',
      'presence.body': "Basés à Maurice, présents en Afrique de l'Ouest — chaque site est un espace réservé en attente de confirmation.",
      'presence.hq': 'Siège',
      'presence.active': 'Actif',

      'history.eyebrow': 'Historique',
      'history.h2': 'Étapes clés',
      'history.m1.title': '2026 — Constitution de FML Capital Ltd',
      'history.m1.body': "Immatriculée à Port Louis, Maurice (n° de société 234759), en tant que société privée à responsabilité limitée par actions.",
      'history.m2.title': "Expansion en Afrique de l'Ouest",
      'history.m2.body': "Traverser les eaux vers Abidjan et Dakar. (Espace réservé — date réelle à venir.)",
      'history.m3.title': 'Création du pôle Logistique',
      'history.m3.body': "Fret portuaire, minier et cimentier réunis sous un même pôle. (Espace réservé — date réelle à venir.)",

      'contact.eyebrow': 'Contact',
      'contact.h2': 'Parlons-en',
      'contact.address': 'Port Louis, Maurice',
      'contact.legal': 'FML Capital Ltd — N° de société 234759<br>Société privée à responsabilité limitée par actions<br>Constituée le 18 mai 2026',

      'form.name': 'Nom',
      'form.email': 'E-mail',
      'form.message': 'Message',
      'form.submit': 'Envoyer'
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
    applyLang(saved === 'fr' ? 'fr' : 'en');

    document.querySelectorAll('.lang-link').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        applyLang(a.getAttribute('data-lang'), true);
      });
    });
  });
})();
