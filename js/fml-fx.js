// FML CAPITAL — effets des pages intérieures (équivalents de ceux de la landing page).
// Tout est décoratif : sans JS ou avec « réduire les animations », la page reste lisible.
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) { root.classList.remove('fx'); return; }
  window.__fxOk = true;
  root.classList.add('fx');
  requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('fx-ready'); }); });

  // 1) Éléments à révéler (cartes d’une grille avec un léger décalage)
  var targets = [];
  function add(el, delay) { if (el && el.classList) { el.classList.add('fx-r'); el.style.setProperty('--d', (delay || 0) + 's'); targets.push(el); } }
  document.querySelectorAll('.hero .crumbs, .hero .eyebrow, .hero .lead').forEach(function (el, i) { add(el, 0.35 + i * 0.12); });
  var content = document.querySelector('.content');
  if (content) {
    Array.prototype.forEach.call(content.children, function (el) {
      if (el.matches('.pillars, .tiles, .cards')) {
        Array.prototype.forEach.call(el.children, function (c, i) { add(c, i * 0.14); });
      } else { add(el, 0); }
    });
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      io.unobserve(el);
      el.classList.add('fx-in');
      var d = parseFloat(el.style.getPropertyValue('--d')) || 0;
      // Une fois révélé, on rend la main au CSS (survol, inclinaison) sans changer l’aspect.
      setTimeout(function () { el.classList.remove('fx-r'); }, (d + 1.1) * 1000);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  targets.forEach(function (el) { io.observe(el); });

  // 2) Parallaxe du fond + barre de progression
  var bar = document.createElement('div');
  bar.className = 'fx-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.pageYOffset || 0;
      var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty('--py', (-y * 0.14).toFixed(1) + 'px');
      root.style.setProperty('--p', Math.min(1, y / max).toFixed(4));
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 3) Projecteur lumineux et inclinaison des cartes (souris uniquement)
  if (!(window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches)) return;
  var mx = 0, my = 0, pending = false;
  window.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () {
      root.style.setProperty('--mx', mx + 'px');
      root.style.setProperty('--my', my + 'px');
      pending = false;
    });
    root.classList.add('fx-spot-on');
  }, { passive: true });
  document.addEventListener('mouseleave', function () { root.classList.remove('fx-spot-on'); });

  document.querySelectorAll('.pillar-card, .tile, .card-link').forEach(function (el) {
    el.classList.add('fx-tilt');
    var lift = el.classList.contains('card-link') ? -3 : -5;
    el.addEventListener('mouseenter', function () { el.style.transition = 'transform .12s ease-out, box-shadow .4s ease'; });
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = 'perspective(900px) rotateX(' + (-y * 7).toFixed(2) + 'deg) rotateY(' + (x * 7).toFixed(2) + 'deg) translateY(' + lift + 'px) scale(1.015)';
    });
    el.addEventListener('mouseleave', function () { el.style.transition = ''; el.style.transform = ''; });
  });
})();
