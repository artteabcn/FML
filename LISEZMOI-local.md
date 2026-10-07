# FML CAPITAL — site (version de travail)

## Lancer en local
Double-cliquer sur `lancer-local.bat` : génère les pages puis ouvre http://localhost:8788
(Wrangler si disponible — les fonctions Cloudflare, dont `/api/contact`, tournent aussi en local ; sinon un simple serveur Python).

## Modifier un texte
1. Éditer `build/content.fr.mjs` (tous les textes FR, les menus, les coordonnées).
2. Relancer `node build/build.mjs` (ou `lancer-local.bat`) : les pages HTML sont régénérées.
Ne pas éditer les `index.html` à la main : ils sont écrasés à chaque génération.

## Formulaire de contact
`functions/api/contact.js` envoie à contact@fml.capital via Resend.
Dans Cloudflare Pages → Settings → Environment variables : `RESEND_API_KEY` (secret) et, si besoin, `CONTACT_FROM`.
Sans cette clé, le formulaire répond « échec » et invite à écrire directement à l'adresse e-mail.

## Fichiers hérités de l'ancien prototype (non utilisés par les nouvelles pages)
`fml-concept.html`, `Theme/`, `css/` (sauf `fml-site.css`), `js/` (sauf `fml-site.js`), `images/` (sauf `images/brand/`).
`fml-concept.html` contient d'anciennes données fictives : à supprimer du dépôt avant la mise en ligne.
