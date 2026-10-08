// FML CAPITAL — pages internes : menu mobile, langue FR/EN et formulaire de contact.
(function () {
  // Mémorise la langue de la page : la landing page (index.html) la relit pour s’afficher dans la même langue.
  var pageLang = document.documentElement.lang === 'en' ? 'en' : 'fr';
  try { localStorage.setItem('fml-lang', pageLang); } catch (e) { /* ignore */ }
  document.querySelectorAll('.lang-switch a').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('fml-lang', a.getAttribute('data-lang')); } catch (e) { /* ignore */ }
    });
  });

  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  var btn = form.querySelector('button[type="submit"]');
  var msg = {
    missing: form.getAttribute('data-msg-missing') || '',
    sending: form.getAttribute('data-msg-sending') || '',
    ok: form.getAttribute('data-msg-ok') || '',
    fail: form.getAttribute('data-msg-fail') || ''
  };

  function say(text, cls) {
    status.textContent = text;
    status.className = 'form-status ' + (cls || '');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = {};
    new FormData(form).forEach(function (v, k) { data[k] = String(v).trim(); });
    if (!data.name || !data.email || !data.message) {
      say(msg.missing, 'err');
      return;
    }
    btn.disabled = true;
    say(msg.sending);
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, body: j }; }); })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          say(msg.ok, 'ok');
        } else {
          say(msg.fail, 'err');
        }
      })
      .catch(function () { say(msg.fail, 'err'); })
      .then(function () { btn.disabled = false; });
  });
})();
