;(function () {
  'use strict';

  function initTilt(selector, maxDeg, scale) {
    document.querySelectorAll(selector).forEach(function (card) {
      card.style.transformStyle = 'preserve-3d';
      card.style.transition = 'transform .45s cubic-bezier(.16,1,.3,1)';

      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        var rotateY = x * maxDeg;
        var rotateX = -y * maxDeg;
        card.style.transition = 'transform .08s linear';
        card.style.transform =
          'perspective(900px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) ' +
          'scale(' + scale + ') translateY(-6px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
        card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1) translateY(0)';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return; // Touch devices keep the plain hover/tap styling only.

    initTilt('.services-list .item', 6, 1.02);
    initTilt('.gallery-list .portfolio-item', 4, 1.015);
  });
})();
