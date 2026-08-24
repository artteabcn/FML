;(function () {
  'use strict';

  var CIRCUMFERENCE = 2 * Math.PI * 24; // r=24, matches the SVG circle below

  function update(index, total) {
    var pct = total > 1 ? Math.round((index / (total - 1)) * 100) : 0;
    var ring = document.getElementById('scrollProgressFill');
    var label = document.getElementById('scrollProgressPercent');
    if (ring) {
      var offset = CIRCUMFERENCE * (1 - pct / 100);
      ring.style.strokeDashoffset = String(offset);
    }
    if (label) {
      label.textContent = pct + '%';
    }
  }

  // Exposed so custom.js's fullpage.js callbacks can drive it.
  window.FMLUpdateScrollProgress = update;

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('scrollProgressBtn');
    if (btn) {
      btn.addEventListener('click', function () {
        if (window.fullpage_api) {
          window.fullpage_api.moveTo(1);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
    // Initialize ring dasharray so the fill starts empty before the first callback fires.
    var ring = document.getElementById('scrollProgressFill');
    if (ring) {
      ring.style.strokeDasharray = String(CIRCUMFERENCE);
      ring.style.strokeDashoffset = String(CIRCUMFERENCE);
    }
  });
})();
