// Générateur statique de FML CAPITAL — aucune dépendance.
// Usage : node build/build.mjs   (écrit les pages HTML à la racine du dépôt)
// Les textes se modifient dans build/content.fr.mjs (source) et build/content.en.mjs (brouillon EN).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as FR from "./content.fr.mjs";
import * as EN from "./content.en.mjs";

const live = (p) => !p.draft; // pages « draft » : conservées dans le contenu mais ni générées, ni dans le sitemap, ni dans llms.txt
const pages = FR.pages.filter(live); // FR : source (inclut l’entrée « home », utilisée seulement pour sitemap / llms.txt)
const site = FR.site;
const LANGS = {
  fr: { site: FR.site, nav: FR.nav, ui: FR.ui, pages: FR.pages.filter((p) => !p.home && live(p)), lang: "fr" },
  en: { site: EN.site, nav: EN.nav, ui: EN.ui, pages: EN.pages.filter(live), lang: "en" },
};
// Correspondance FR ↔ EN par position (mêmes pages, même ordre, accueil exclu)
const altOf = (lang, i) => LANGS[lang === "fr" ? "en" : "fr"].pages[i];

const ROOT = process.env.OUT || join(dirname(fileURLToPath(import.meta.url)), "..");

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const isActive = (href, path) =>
  href === "/" ? path === "/" : path === href || path.startsWith(href);


// ── Visuels des cartes « piliers » (mêmes photos et illustrations que la landing) ──
const PILLAR_ART = {
  finance: {
    photo: "https://images.unsplash.com/photo-1499566727020-881da110a0b0?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    icon: `<polyline points="3,17 9,11 13,15 21,6"/><polyline points="15,6 21,6 21,12"/>`,
    art: `<polyline points="20,300 70,250 120,270 170,180 220,210 280,120" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="280" cy="120" r="8" fill="#fff"/><g stroke="#fff" stroke-width="1" opacity=".5"><line x1="0" y1="150" x2="300" y2="150"/><line x1="0" y1="220" x2="300" y2="220"/><line x1="0" y1="290" x2="300" y2="290"/></g>`,
  },
  maritime: {
    photo: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    icon: `<circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="21"/><line x1="8" y1="11" x2="16" y2="11"/><path d="M5 14c0 4 3 7 7 7s7-3 7-7"/>`,
    art: `<circle cx="230" cy="80" r="30" fill="none" stroke="#fff" stroke-width="2"/><path d="M60 260 L240 260 L215 300 L85 300 Z" fill="none" stroke="#fff" stroke-width="3"/><line x1="150" y1="200" x2="150" y2="260" stroke="#fff" stroke-width="3"/><path d="M150 205 L200 230 L150 230 Z" fill="#fff" opacity=".7"/><g stroke="#fff" stroke-width="2" fill="none" opacity=".6"><path d="M0 330 Q40 315 80 330 T160 330 T240 330 T300 330"/><path d="M0 350 Q40 335 80 350 T160 350 T240 350 T300 350"/></g>`,
  },
  logistics: {
    photo: "https://images.unsplash.com/photo-1601897690942-bcacbad33e55?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    icon: `<rect x="2" y="7" width="12" height="9"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>`,
    art: `<line x1="60" y1="40" x2="60" y2="260" stroke="#fff" stroke-width="3"/><line x1="60" y1="60" x2="230" y2="60" stroke="#fff" stroke-width="3"/><line x1="200" y1="60" x2="200" y2="110" stroke="#fff" stroke-width="2"/><rect x="60" y="200" width="50" height="40" fill="none" stroke="#fff" stroke-width="2"/><rect x="115" y="200" width="50" height="40" fill="none" stroke="#fff" stroke-width="2"/><rect x="90" y="155" width="50" height="40" fill="none" stroke="#fff" stroke-width="2"/><line x1="0" y1="260" x2="300" y2="260" stroke="#fff" stroke-width="2" opacity=".6"/>`,
  },
};

// ── Blocs ────────────────────────────────────────────────────────────────
function renderBlock(b, L) {
  const { site, ui } = L;
  switch (b.t) {
    case "h2":
      return `<h2 class="section-title">${esc(b.text)}</h2>`;
    case "p":
      return `<p class="body-text">${esc(b.text)}</p>`;
    case "list":
      return `<ul class="check-list">${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
    case "panel": {
      const link = b.link
        ? `<p><a class="text-link" href="${b.link.href}">${esc(b.link.text)} →</a></p>`
        : "";
      return `<section class="panel${b.accent ? " panel-accent" : ""}">
  ${b.title ? `<h2 class="panel-title">${esc(b.title)}</h2>` : ""}
  <p>${esc(b.text)}</p>${link}
</section>`;
    }
    case "chips":
      return `<section class="chips-block">
  <h2 class="chips-title">${esc(b.title)}</h2>
  <ul class="chips">${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
  ${b.link ? `<p><a class="text-link" href="${b.link.href}">${esc(b.link.text)} →</a></p>` : ""}
</section>`;
    case "pillars":
      return `<div class="pillars">${b.items
        .map((c) => {
          const a = PILLAR_ART[c.key];
          return `<a class="pillar-card" href="${c.href}">
    <span class="pillar-photo" style="background-image:url('${a.photo}')" aria-hidden="true"></span>
    <svg class="pillar-art" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${a.art}</svg>
    <svg class="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="url(#pgrad)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a.icon}</svg>
    <h3>${esc(c.name)}</h3>
    <p class="pillar-tag">${esc(c.title)}</p>
    <p class="pillar-text">${esc(c.text)}</p>
    <p class="pillar-skills"><span>${esc(ui.skillsLabel)}</span>${c.skills.map(esc).join(" · ")}</p>
    <span class="pillar-more">${esc(ui.discover)}</span>
  </a>`;
        })
        .join("\n  ")}
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient id="pgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4096ee"/><stop offset="1" stop-color="#39ced6"/></linearGradient></defs></svg></div>`;
    case "cards":
      return `<div class="cards">${b.items
        .map((c) => {
          const inner = `${c.eyebrow ? `<span class="eyebrow">${esc(c.eyebrow)}</span>` : ""}
    <h3>${esc(c.title)}</h3>
    ${c.text ? `<p>${esc(c.text)}</p>` : ""}
    ${c.list ? `<ul class="check-list">${c.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
    ${c.href ? `<span class="card-more">${esc(ui.discover)}</span>` : ""}`;
          return c.href
            ? `<a class="card card-link" href="${c.href}">${inner}</a>`
            : `<div class="card">${inner}</div>`;
        })
        .join("\n")}</div>`;
    case "actions":
      return `<p class="actions">${b.links
        .map((l) => `<a class="text-link" href="${l.href}">${esc(l.text)}</a>`)
        .join("")}</p>`;
    case "contact":
      return `<div class="contact-grid">
  <section class="panel">
    <h2 class="panel-title">${esc(ui.contactDetails)}</h2>
    <p><a class="text-link" href="mailto:${site.email}">${esc(site.email)}</a></p>
    <p><a class="text-link" href="tel:${site.phoneHref}">${esc(site.phone)}</a></p>
    ${site.entities
      .map(
        (e) =>
          `<p class="entity"><strong>${esc(e.name)}</strong><br>${e.address.map(esc).join("<br>")}<br>${esc(e.regLine)}</p>`
      )
      .join("\n    ")}
    <p class="muted"><a class="text-link" href="${L.lang === "en" ? "/en" : ""}/mentions-legales/">${esc(ui.legalLink)}</a></p>
  </section>
  <form class="panel contact-form" id="contact-form" method="post" action="/api/contact" novalidate
    data-msg-missing="${esc(ui.fMissing)}" data-msg-sending="${esc(ui.fSending)}" data-msg-ok="${esc(ui.fOk)}" data-msg-fail="${esc(ui.fFail)}">
    <h2 class="panel-title">${esc(ui.formTitle)}</h2>
    <label>${esc(ui.fName)}<input name="name" type="text" autocomplete="name" required></label>
    <label>${esc(ui.fOrg)}<input name="organisation" type="text" autocomplete="organization"></label>
    <label>${esc(ui.fEmail)}<input name="email" type="email" autocomplete="email" required></label>
    <label>${esc(ui.fSubject)}
      <select name="subject">
        ${ui.fSubjects.map((o) => `<option>${esc(o)}</option>`).join("")}
      </select>
    </label>
    <label>${esc(ui.fMessage)}<textarea name="message" rows="6" required></textarea></label>
    <div class="hp" aria-hidden="true"><label>${esc(ui.fHoneypot)}<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
    <button class="btn" type="submit">${esc(ui.fSend)}</button>
    <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
  </form>
</div>`;
    case "legal":
      return site.entities
        .map(
          (e) => `<section class="panel">
  <dl class="facts">
    <div><dt>${esc(ui.legalName)}</dt><dd>${esc(e.name)}</dd></div>
    <div><dt>${esc(e.regLabel)}</dt><dd>${esc(e.reg)}</dd></div>
    ${e.form ? `<div><dt>${esc(ui.legalFormLabel)}</dt><dd>${esc(e.form)}</dd></div>` : ""}
    <div><dt>${esc(ui.legalAddress)}</dt><dd>${e.address.map(esc).join("<br>")}</dd></div>
  </dl>
</section>`
        )
        .join("\n");
    default:
      throw new Error("Bloc inconnu : " + b.t);
  }
}

// ── Gabarit commun ───────────────────────────────────────────────────────
function renderNav(path, nav) {
  return nav
    .map((n) => {
      const cur = isActive(n.href, path) ? ' aria-current="page"' : "";
      if (!n.children) return `<li><a href="${n.href}"${cur}>${esc(n.label)}</a></li>`;
      return `<li class="has-sub"><a href="${n.href}"${cur}>${esc(n.label)}</a>
        <ul class="sub">${n.children
          .map((c) => `<li><a href="${c.href}"${isActive(c.href, path) ? ' aria-current="page"' : ""}>${esc(c.label)}</a></li>`)
          .join("")}</ul></li>`;
    })
    .join("\n      ");
}

const jsonLd = () =>
  JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      url: site.baseUrl + "/",
      logo: site.baseUrl + "/images/brand/fml-capital-logo-horizontal-white.svg",
      email: site.email,
      telephone: site.phone,
      description:
        "Investir, structurer et développer des projets internationaux.",
    },
    null,
    2
  );

function renderPage(p, L, idx) {
  const { site, nav, ui } = L;
  const alt = altOf(L.lang, idx);
  const frPath = L.lang === "fr" ? p.path : alt.path;
  const enPath = L.lang === "en" ? p.path : alt.path;
  const canonical = site.baseUrl + p.path;
  // Pages « pilier » (Finance / Maritime / Logistics) : navigation harmonisée, sans pied de page
  let pillarTop = "";
  let pillarBottom = "";
  if (p.pillar) {
    const exp = nav.find((n) => n.children);
    const sibs = exp.children;
    const i = sibs.findIndex((c) => c.href === p.path);
    const after = nav.find((n) => n.href.includes("conformite"));
    const prev = i > 0 ? sibs[i - 1] : { href: exp.href, label: ui.back };
    const next = i < sibs.length - 1 ? sibs[i + 1] : after;
    pillarTop = `<nav class="pillar-tabs" aria-label="${esc(ui.pillarsNav)}">
        <a class="pillar-back" href="${exp.href}">← ${esc(ui.back)}</a>
        <ul>${sibs.map((c) => `<li><a href="${c.href}"${c.href === p.path ? ' aria-current="page"' : ""}>${esc(c.label)}</a></li>`).join("")}</ul>
      </nav>`;
    pillarBottom = `<nav class="pillar-pager" aria-label="${esc(ui.pillarsNav)}">
    <a class="prev" href="${prev.href}">← ${esc(prev.label)}</a>
    <a class="next" href="${next.href}">${esc(next.label)} →</a>
  </nav>`;
  }
  const crumbs = p.pillar ? pillarTop : p.breadcrumb
    ? `<nav class="crumbs" aria-label="${esc(ui.crumbs)}">${p.breadcrumb
        .map((c) => `<a href="${c.href}">${esc(c.label)}</a>`)
        .join(" / ")} / <span>${esc(p.h1)}</span></nav>`
    : "";
  return `<!doctype html>
<html lang="${L.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="fr" href="${site.baseUrl}${frPath}">
<link rel="alternate" hreflang="en" href="${site.baseUrl}${enPath}">
<link rel="alternate" hreflang="x-default" href="${site.baseUrl}${frPath}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="${ui.ogLocale}">
<meta name="theme-color" content="#3f86c8">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/fml-site.css">
${p.home ? `<script type="application/ld+json">\n${jsonLd()}\n</script>\n` : ""}</head>
<body>
<a class="skip" href="#contenu">${esc(ui.skip)}</a>
<header class="site-header">
  <div class="wrap header-in">
    <a class="brand" href="/" aria-label="${esc(ui.home)}"><img src="/images/brand/fml-capital-logo-horizontal.svg" alt="FML CAPITAL" width="246" height="92"></a>
    <div class="lang-switch" role="group" aria-label="${esc(ui.langLabel)}">
      <a href="${enPath}" hreflang="en" lang="en" data-lang="en"${L.lang === "en" ? ' aria-current="true"' : ""}>EN</a>
      <a href="${frPath}" hreflang="fr" lang="fr" data-lang="fr"${L.lang === "fr" ? ' aria-current="true"' : ""}>FR</a>
    </div>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="menu" aria-label="${esc(ui.menu)}"><span></span><span></span><span></span></button>
    <nav class="main-nav" id="menu" aria-label="${esc(ui.mainNav)}">
    <ul>
      ${renderNav(p.path, nav)}
    </ul>
    </nav>
  </div>
</header>
<main id="contenu">
  <section class="hero${p.home ? " hero-home" : ""}${p.center ? " hero-center" : ""}">
    <div class="wrap">
      ${crumbs}
      ${p.eyebrow && !(p.center && p.eyebrow === p.h1) ? `<span class="eyebrow">${esc(p.eyebrow)}</span>` : ""}
      <h1>${esc(p.h1)}</h1>
      ${p.lead ? `<p class="lead">${esc(p.lead)}</p>` : ""}
    </div>
  </section>
  <div class="wrap content">
${p.blocks.map((b) => renderBlock(b, L)).join("\n")}
  ${pillarBottom}
  </div>
</main>
${p.pillar ? "" : `<footer class="site-footer">
  <div class="wrap footer-in">
    <div>
      <img src="/images/brand/fml-capital-logo-horizontal-white.svg" alt="FML CAPITAL" width="150" height="57">
      <p class="muted">${esc(site.signature)}</p>
    </div>
    <div>
      <p><a href="mailto:${site.email}">${esc(site.email)}</a><br><a href="tel:${site.phoneHref}">${esc(site.phone)}</a></p>
      <p class="muted">${site.entities.map((e) => `${esc(e.name)} — ${esc(e.address[e.address.length - 1])}`).join("<br>")}</p>
    </div>
    <div>
      <p><a href="${L.lang === "en" ? "/en" : ""}/mentions-legales/">${esc(ui.legalLink)}</a><br><a href="${L.lang === "en" ? "/en" : ""}/contact/">${esc(ui.contactLink)}</a></p>
    </div>
  </div>
  <div class="wrap footer-end">© 2026 ${esc(site.legalName)}</div>
</footer>`}
<script src="/js/fml-site.js" defer></script>
</body>
</html>
`;
}

// ── Écriture ─────────────────────────────────────────────────────────────
function outFile(path) {
  return join(ROOT, path.replace(/^\//, ""), path.endsWith("/") ? "index.html" : "");
}

// La landing page (index.html) est maintenue à la main : ne jamais la régénérer.
let written = 0;
for (const L of Object.values(LANGS)) {
  if (L.pages.length !== LANGS.fr.pages.length) throw new Error("FR et EN doivent avoir les mêmes pages, dans le même ordre");
  L.pages.forEach((p, i) => {
    const f = outFile(p.path);
    mkdirSync(dirname(f), { recursive: true });
    writeFileSync(f, renderPage(p, L, i), "utf8");
    written++;
  });
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map((p) => {
    if (p.home) return `  <url>\n    <loc>${site.baseUrl}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;
    const i = LANGS.fr.pages.indexOf(p);
    const en = LANGS.en.pages[i];
    return `  <url>
    <loc>${site.baseUrl}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="fr" href="${site.baseUrl}${p.path}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${site.baseUrl}${en.path}"/>
  </url>
  <url>
    <loc>${site.baseUrl}${en.path}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="fr" href="${site.baseUrl}${p.path}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${site.baseUrl}${en.path}"/>
  </url>`;
  })
  .join("\n")}
</urlset>
`,
  "utf8"
);

writeFileSync(
  join(ROOT, "llms.txt"),
  `# FML CAPITAL

> Investir, structurer et développer des projets internationaux. FML Capital réunit des compétences financières, maritimes et industrielles pour accompagner des projets privés et des partenariats public-privé.

Ancrage : Afrique, notamment Afrique de l’Est et océan Indien. Ouverture au Moyen-Orient et à l’international.

## Pages
${pages.map((p) => `- [${p.h1}](${site.baseUrl}${p.path}): ${p.description}`).join("\n")}

## Pages (English)
${LANGS.en.pages.map((p) => `- [${p.h1}](${site.baseUrl}${p.path}): ${p.description}`).join("\n")}

## Contact
- ${site.email}
- ${site.phone}
${site.entities.map((e) => `- ${e.name} — ${e.address.join(", ")} — ${e.regLine}`).join("\n")}
`,
  "utf8"
);

console.log(`FML CAPITAL : ${written} pages internes générées (FR + EN) dans ${ROOT} (landing page index.html conservée)`);
