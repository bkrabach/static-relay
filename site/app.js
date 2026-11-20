// Static Relay - product page. Everything here is an extra: the page works without it.
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // the visitor's own platform first
  var ua = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || navigator.userAgent || '';
  var os = /mac|iphone|ipad/i.test(ua) ? 'mac' : /win/i.test(ua) ? 'win' : '';
  if (os) {
    $$('.cta .btn[data-os]').forEach(function (b) { if (b.getAttribute('data-os') !== os) b.classList.add('is-other'); });
    $$('.dl-card[data-os]').forEach(function (c) { if (c.getAttribute('data-os') === os) c.classList.add('is-yours'); });
  }

  // the menu on a narrow screen
  var toggle = $('.nav-toggle'), links = $('#nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) { if (e.target.tagName === 'A') { links.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); } });
  }

  // the background video: off when asked, and when it is out of sight
  var hero = $('.hero-video'), pause = $('.hero-pause'), stopped = false;
  function setStopped(v) {
    stopped = v;
    if (pause) { pause.setAttribute('aria-pressed', v ? 'true' : 'false'); pause.textContent = v ? 'Play video' : 'Pause video'; }
    if (!hero) return;
    if (v) hero.pause(); else { var p = hero.play(); if (p && p.catch) p.catch(function () {}); }
  }
  if (hero) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) setStopped(true);
    if (pause) pause.addEventListener('click', function () { setStopped(!stopped); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (stopped) return; if (e.isIntersecting) { var p = hero.play(); if (p && p.catch) p.catch(function () {}); } else hero.pause(); });
      }, { threshold: 0.05 }).observe(hero);
    }
  }

  // "Watch the reel" starts it
  var reel = $('#reel video');
  $$('[data-play-reel]').forEach(function (a) {
    a.addEventListener('click', function () { if (reel) setTimeout(function () { var p = reel.play(); if (p && p.catch) p.catch(function () {}); }, 450); });
  });

  // a picture opened large
  var box = $('.lightbox'), big = box && $('img', box), last = null;
  function close() { if (!box || box.hidden) return; box.hidden = true; big.removeAttribute('src'); document.body.style.overflow = ''; if (last) last.focus(); }
  if (box) {
    $$('a.shot').forEach(function (a) {
      a.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault(); last = a; var im = $('img', a);
        big.src = a.getAttribute('href'); big.alt = im ? im.alt : ''; box.hidden = false; document.body.style.overflow = 'hidden'; $('.lb-close', box).focus();
      });
    });
    box.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
})();
