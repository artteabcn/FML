// FML CAPITAL — menu mobile et formulaire de contact.
(function () {
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

  function say(msg, cls) {
    status.textContent = msg;
    status.className = 'form-status ' + (cls || '');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = {};
    new FormData(form).forEach(function (v, k) { data[k] = String(v).trim(); });
    if (!data.name || !data.email || !data.message) {
      say('Merci de renseigner votre nom, votre adresse e-mail et votre message.', 'err');
      return;
    }
    btn.disabled = true;
    say('Envoi en cours…');
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, body: j }; }); })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          say('Merci, votre message a bien été envoyé.', 'ok');
        } else {
          say('L’envoi a échoué. Vous pouvez écrire directement à contact@fml.capital.', 'err');
        }
      })
      .catch(function () {
        say('L’envoi a échoué. Vous pouvez écrire directement à contact@fml.capital.', 'err');
      })
      .then(function () { btn.disabled = false; });
  });
})();
