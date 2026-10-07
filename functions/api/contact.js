// Cloudflare Pages Function — POST /api/contact
// Envoie le message à contact@fml.capital via l'API Resend.
// Variables à définir dans Cloudflare Pages (Settings → Environment variables) :
//   RESEND_API_KEY  (secret, obligatoire)
//   CONTACT_FROM    (facultatif, ex. "FML CAPITAL <noreply@fml.capital>" — domaine vérifié chez Resend)
// Sans RESEND_API_KEY, la fonction répond 503 et le formulaire invite à écrire directement à l'adresse e-mail.

const TO = "contact@fml.capital";
const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });
const clean = (v, max) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

export async function onRequestPost({ request, env }) {
  let data;
  try {
    const ct = request.headers.get("content-type") || "";
    data = ct.includes("application/json")
      ? await request.json()
      : Object.fromEntries(await request.formData());
  } catch {
    return json({ error: "bad_request" }, 400);
  }

  if (data.website) return json({ ok: true }); // anti-spam : champ piège rempli

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const organisation = clean(data.organisation, 160);
  const subject = clean(data.subject, 60) || "Autre";
  const message = String(data.message ?? "").trim().slice(0, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "invalid" }, 400);
  }
  if (!env.RESEND_API_KEY) return json({ error: "not_configured" }, 503);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.CONTACT_FROM || "FML CAPITAL <noreply@fml.capital>",
      to: [TO],
      reply_to: email,
      subject: `[Site FML CAPITAL] ${subject} — ${name}`,
      text: `Nom : ${name}\nOrganisation : ${organisation || "—"}\nE-mail : ${email}\nObjet : ${subject}\n\n${message}`,
    }),
  });

  return res.ok ? json({ ok: true }) : json({ error: "send_failed" }, 502);
}
