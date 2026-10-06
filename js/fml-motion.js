/* FML Capital — parallax & motion controller
   - Journey parallax: the fixed photo / skyline layers pan as you move
     through sections (a trip along the coast, Port Louis -> West Africa).
   - Pointer depth: layers drift at different rates with the cursor.
   - Section entry depth: incoming content trails the page slide.
   - Hero title letter reveal, card inner parallax, magnetic button.
   Works with fullPage.js (desktop) and native scroll (responsive mode).
   Respects prefers-reduced-motion. No dependencies. */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  root.classList.add('fml-motion');

  var TOTAL = 6;
  var state = {
    section: 0,        // target section position (float)
    sectionCur: 0,     // eased section position
    mx: 0, my: 0,      // target pointer, -0.5..0.5
    mxCur: 0, myCur: 0
  };

  function lerp(a, b, t) { return a + (b - a) * t; }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function isResponsive() {
    // Matches fullPage's responsiveWidth / responsiveHeight settings.
    return window.innerWidth < 768 || window.innerHeight < 600;
  }

  /* ---------- Hero title split ---------- */
  function splitTitle() {
    var h = $('.welcome-title');
    if (!h || h.dataset.fmlSplit) return;
    var text = h.textContent.trim();
    h.setAttribute('aria-label', text);
    h.dataset.fmlSplit = '1';
    h.classList.add('fml-split');
    h.innerHTML = '';
    text.split('').forEach(function (ch, i) {
      var s = document.createElement('span');
      s.setAttribute('aria-hidden', 'true');
      if (ch === ' ') { s.className = 'fml-space'; }
      else { s.className = 'fml-char'; s.textContent = ch; s.style.setProperty('--i', i); }
      h.appendChild(s);
    });
  }

  /* ---------- Extra DOM: spotlight + scroll cue ---------- */
  function injectLayers() {
    var video = document.getElementById('video');
    if (!video) return;
    if (!reduce && finePointer) {
      var spot = document.createElement('div');
      spot.className = 'fml-spotlight';
      spot.setAttribute('aria-hidden', 'true');
      var ill = $('.hero-illustration');
      if (ill && ill.nextSibling) video.insertBefore(spot, ill.nextSibling);
      else video.appendChild(spot);
    }
    var hero = $('[data-section="slide01"]');
    if (hero) {
      var cue = document.createElement('div');
      cue.className = 'fml-scroll-cue';
      cue.setAttribute('aria-hidden', 'true');
      cue.innerHTML = '<span>Scroll</span><i></i>';
      hero.style.position = hero.style.position || 'relative';
      hero.appendChild(cue);
    }
  }

  /* ---------- Section "in" state ---------- */
  var sections = [];
  function markIn(index) {
    var s = sections[index];
    if (s) s.classList.add('fml-in');
    root.classList.toggle('fml-past-hero', index > 0);
  }

  /* Incoming content trails the page slide: each depth layer starts
     offset in the travel direction and settles later than the page. */
  var DEPTH_LAYERS = [
    ['.title-block span, .about-contentbox > div:first-child > span', 1.5],
    ['.title-block h2, .about-contentbox h2', 1.1],
    ['.title-block p, .about-contentbox p', 0.8],
    ['.owl-stage-outer, .skills-row, .contact-section, .about-img', 0.55]
  ];
  function depthEnter(index, direction) {
    if (reduce || isResponsive() || !sections[index] || !Element.prototype.animate) return;
    var sign = direction === 'up' ? -1 : 1;
    DEPTH_LAYERS.forEach(function (layer) {
      $$(layer[0], sections[index]).forEach(function (el) {
        var d = 90 * layer[1] * sign;
        el.animate(
          [{ translate: '0 ' + d + 'px' }, { translate: '0 0' }],
          { duration: 1150 + layer[1] * 250, easing: 'cubic-bezier(.16,1,.3,1)' }
        );
      });
    });
  }
  function depthLeave(index, direction) {
    if (reduce || isResponsive() || !sections[index] || !Element.prototype.animate) return;
    var sign = direction === 'up' ? 1 : -1;
    DEPTH_LAYERS.forEach(function (layer) {
      $$(layer[0], sections[index]).forEach(function (el) {
        el.animate(
          [{ translate: '0 0' }, { translate: '0 ' + (60 * layer[1] * sign) + 'px' }],
          { duration: 700, easing: 'cubic-bezier(.7,0,.84,0)' }
        );
      });
    });
  }

  /* ---------- Public hooks for fullPage (called from custom.js) ---------- */
  window.FMLMotion = {
    onLeave: function (from, to, direction) {
      state.section = to;
      depthLeave(from, direction);
      depthEnter(to, direction);
      markIn(to);
    },
    afterLoad: function (index) {
      state.section = index;
      markIn(index);
    }
  };

  /* ---------- Native-scroll fallback (responsive mode) ---------- */
  function onScroll() {
    if (!isResponsive()) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? window.scrollY / max : 0;
    state.section = p * (TOTAL - 1);
  }
  function observeSections() {
    if (!('IntersectionObserver' in window)) {
      sections.forEach(function (s) { s.classList.add('fml-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && isResponsive()) {
          e.target.classList.add('fml-in');
          root.classList.toggle('fml-past-hero', sections.indexOf(e.target) > 0 || window.scrollY > 80);
        }
      });
    }, { threshold: 0.18 });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Pointer ---------- */
  function onPointer(e) {
    state.mx = e.clientX / window.innerWidth - 0.5;
    state.my = e.clientY / window.innerHeight - 0.5;
    root.style.setProperty('--fml-cx', e.clientX + 'px');
    root.style.setProperty('--fml-cy', e.clientY + 'px');
    root.classList.add('fml-has-pointer');
  }

  /* Card inner parallax: photo and line-art drift apart under the cursor */
  function bindCardDepth() {
    $$('.services-list .item').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty('--fml-card-x', (-x * 16).toFixed(2) + 'px');
        card.style.setProperty('--fml-card-y', (-y * 16).toFixed(2) + 'px');
      });
      card.addEventListener('mouseleave', function () {
        card.style.setProperty('--fml-card-x', '0px');
        card.style.setProperty('--fml-card-y', '0px');
      });
    });

    var about = $('.illustration-box');
    if (about) {
      about.addEventListener('mousemove', function (e) {
        var r = about.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        about.style.setProperty('--fml-about-bx', (x * 22).toFixed(2) + 'px');
        about.style.setProperty('--fml-about-by', (y * 22).toFixed(2) + 'px');
        about.style.setProperty('--fml-about-x', (-x * 18).toFixed(2) + 'px');
        about.style.setProperty('--fml-about-y', (-y * 18).toFixed(2) + 'px');
      });
      about.addEventListener('mouseleave', function () {
        ['--fml-about-bx', '--fml-about-by', '--fml-about-x', '--fml-about-y'].forEach(function (v) {
          about.style.setProperty(v, '0px');
        });
      });
    }

    var btn = $('.contact-section .btn');
    if (btn) {
      var zone = btn.parentNode;
      zone.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          btn.style.setProperty('--fml-mag-x', (dx * 0.25).toFixed(1) + 'px');
          btn.style.setProperty('--fml-mag-y', (dy * 0.25).toFixed(1) + 'px');
        } else {
          btn.style.setProperty('--fml-mag-x', '0px');
          btn.style.setProperty('--fml-mag-y', '0px');
        }
      });
      zone.addEventListener('mouseleave', function () {
        btn.style.setProperty('--fml-mag-x', '0px');
        btn.style.setProperty('--fml-mag-y', '0px');
      });
    }
  }

  /* ---------- Counters (the theme's .facts-row hook never matched) ---------- */
  function runCounters() {
    $$('.facts-list .count-number').forEach(function (el) {
      if (el.dataset.fmlCounted) return;
      var target = parseInt(el.textContent, 10);
      if (isNaN(target)) return;
      el.dataset.fmlCounted = '1';
      var from = target > 1000 ? target - 26 : 0; // "2026" ticks up from 2000
      var start = null, dur = 1400;
      function step(t) {
        if (!start) start = t;
        var p = Math.min(1, (t - start) / dur);
        var eased = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(from + (target - from) * eased);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------- Render loop ---------- */
  var vw = window.innerWidth / 100, vh = window.innerHeight / 100;
  window.addEventListener('resize', function () {
    vw = window.innerWidth / 100; vh = window.innerHeight / 100;
  });

  function tick() {
    state.sectionCur = lerp(state.sectionCur, state.section, 0.055);
    state.mxCur = lerp(state.mxCur, state.mx, 0.07);
    state.myCur = lerp(state.myCur, state.my, 0.07);

    var s = state.sectionCur;
    var t = s / (TOTAL - 1) - 0.5;   // -0.5 .. 0.5 across the journey
    var mx = state.mxCur, my = state.myCur;

    // Far layer: photo — slow pan + slight rise
    root.style.setProperty('--fml-photo-x', (-t * 10 * vw - mx * 18).toFixed(2) + 'px');
    root.style.setProperty('--fml-photo-y', (-t * 12 * vh - my * 14).toFixed(2) + 'px');
    // Mid layer: skyline / finance line — pans faster
    root.style.setProperty('--fml-ill-x', (-t * 24 * vw - mx * 42).toFixed(2) + 'px');
    root.style.setProperty('--fml-ill-y', (-my * 26).toFixed(2) + 'px');
    // Near layer: hero copy counters the cursor
    root.style.setProperty('--fml-hero-x', (mx * 16).toFixed(2) + 'px');
    root.style.setProperty('--fml-hero-y', (my * 12).toFixed(2) + 'px');

    requestAnimationFrame(tick);
  }

  /* ---------- Boot ---------- */
  function boot() {
    sections = $$('#fullpage .section');
    TOTAL = sections.length || TOTAL;
    splitTitle();
    injectLayers();

    if (reduce) {
      sections.forEach(function (s) { s.classList.add('fml-in'); });
      root.classList.add('fml-ready');
      return;
    }

    // Start at whichever section the URL points to.
    var anchor = (location.hash || '').replace('#', '');
    var startIdx = Math.max(0, sections.map(function (s) { return s.getAttribute('data-section'); }).indexOf(anchor));
    state.section = state.sectionCur = startIdx;
    markIn(startIdx);

    observeSections();
    window.addEventListener('scroll', onScroll, { passive: true });
    if (finePointer) {
      window.addEventListener('pointermove', onPointer, { passive: true });
      bindCardDepth();
    }

    // Counters run when "The Group" section comes in
    var group = $('[data-section="slide02"]');
    if (group) {
      new MutationObserver(function () {
        if (group.classList.contains('fml-in')) runCounters();
      }).observe(group, { attributes: true, attributeFilter: ['class'] });
      if (group.classList.contains('fml-in')) runCounters();
    }

    requestAnimationFrame(tick);
  }

  function reveal() { root.classList.add('fml-ready'); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  // Reveal the hero once the preloader clears (theme fades it on window load).
  if (window.FMLSplash) {
    // Reveal as the splash screen lifts.
    if (window.FMLSplashDone) reveal();
    else window.addEventListener('fml:splashdone', reveal);
  } else if (document.readyState === 'complete') setTimeout(reveal, 300);
  else window.addEventListener('load', function () { setTimeout(reveal, 300); });
})();
