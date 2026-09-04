/* TVG — site behaviour. Vanilla, no dependencies. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- nav */
  function initNav() {
    var nav = document.querySelector('.tvg-nav');
    if (!nav) return;

    var toggle = nav.querySelector('.tvg-nav__toggle');
    var links = nav.querySelector('.tvg-nav__links');

    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        links.classList.toggle('is-open', !open);
      });
      links.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
          toggle.setAttribute('aria-expanded', 'false');
          links.classList.remove('is-open');
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && links.classList.contains('is-open')) {
          toggle.setAttribute('aria-expanded', 'false');
          links.classList.remove('is-open');
          toggle.focus();
        }
      });
    }

    var onScroll = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* -------------------------------------------------------------- hero */
  function initHero() {
    var hero = document.querySelector('.tvg-hero');
    if (!hero) return;

    var slides = Array.prototype.slice.call(hero.querySelectorAll('.tvg-hero__slide'));
    if (slides.length < 2) return;

    var dots = Array.prototype.slice.call(hero.querySelectorAll('.tvg-hero__dots button'));
    var index = 0;
    var timer = null;
    var DELAY = 6500;

    function show(next) {
      slides[index].classList.remove('is-visible');
      if (dots[index]) dots[index].setAttribute('aria-current', 'false');
      index = (next + slides.length) % slides.length;
      slides[index].classList.add('is-visible');
      if (dots[index]) dots[index].setAttribute('aria-current', 'true');
    }

    function start() {
      if (reduceMotion) return;
      stop();
      timer = window.setInterval(function () { show(index + 1); }, DELAY);
    }
    function stop() {
      if (timer) { window.clearInterval(timer); timer = null; }
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { show(i); start(); });
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { stop(); } else { start(); }
    });

    start();
  }

  /* --------------------------------------------------------- carousel */
  function initCarousels() {
    var roots = document.querySelectorAll('[data-carousel]');
    Array.prototype.forEach.call(roots, function (root) {
      var slides = Array.prototype.slice.call(root.querySelectorAll('.tvg-carousel__slide'));
      if (slides.length < 2) return;

      var dotsWrap = root.querySelector('[data-carousel-dots]');
      var prev = root.querySelector('[data-carousel-prev]');
      var next = root.querySelector('[data-carousel-next]');
      var index = Math.max(0, slides.findIndex(function (s) { return s.classList.contains('is-active'); }));
      var timer = null;
      var DELAY = 7000;
      var dots = [];

      if (dotsWrap) {
        slides.forEach(function (_, i) {
          var b = document.createElement('button');
          b.type = 'button';
          b.setAttribute('role', 'tab');
          b.setAttribute('aria-label', 'Show photo ' + (i + 1));
          b.setAttribute('aria-selected', String(i === index));
          b.addEventListener('click', function () { go(i); start(); });
          dotsWrap.appendChild(b);
          dots.push(b);
        });
      }

      function go(n) {
        slides[index].classList.remove('is-active');
        if (dots[index]) dots[index].setAttribute('aria-selected', 'false');
        index = (n + slides.length) % slides.length;
        slides[index].classList.add('is-active');
        if (dots[index]) dots[index].setAttribute('aria-selected', 'true');
      }
      function start() {
        if (reduceMotion) return;
        stop();
        timer = window.setInterval(function () { go(index + 1); }, DELAY);
      }
      function stop() { if (timer) { window.clearInterval(timer); timer = null; } }

      if (prev) prev.addEventListener('click', function () { go(index - 1); start(); });
      if (next) next.addEventListener('click', function () { go(index + 1); start(); });
      root.addEventListener('mouseenter', stop);
      root.addEventListener('mouseleave', start);

      start();
    });
  }

  /* ------------------------------------------------- publication search */
  function initPubSearch() {
    var input = document.querySelector('[data-pub-search]');
    var list = document.querySelector('[data-pub-list]');
    if (!input || !list) return;

    var counter = document.querySelector('[data-pub-count]');
    var items = Array.prototype.slice.call(list.querySelectorAll('[data-pub]'));
    var years = Array.prototype.slice.call(list.querySelectorAll('[data-year]'));
    var empty = list.querySelector('[data-pub-empty]');
    var total = items.length;

    items.forEach(function (el) {
      el.dataset.haystack = (el.textContent || '').toLowerCase().replace(/\s+/g, ' ');
    });

    function apply() {
      var q = input.value.trim().toLowerCase();
      var shown = 0;

      items.forEach(function (el) {
        var hit = !q || el.dataset.haystack.indexOf(q) !== -1;
        el.hidden = !hit;
        if (hit) shown++;
      });

      // Hide a year heading when every publication under it is filtered out.
      years.forEach(function (head) {
        var any = false;
        var node = head.nextElementSibling;
        while (node && !node.hasAttribute('data-year')) {
          if (node.hasAttribute('data-pub') && !node.hidden) { any = true; break; }
          node = node.nextElementSibling;
        }
        head.hidden = !any;
      });

      if (empty) empty.hidden = shown !== 0;
      if (counter) {
        counter.textContent = q
          ? shown + ' of ' + total + ' publications'
          : total + ' publications';
      }
    }

    var debounce;
    input.addEventListener('input', function () {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(apply, 90);
    });
    input.addEventListener('search', apply);
    apply();
  }

  /* ------------------------------------------------------------ reveal */
  function initReveal() {
    var targets = document.querySelectorAll('.tvg-reveal');
    if (!targets.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(targets, function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    Array.prototype.forEach.call(targets, function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
      io.observe(el);
    });

    // Safety net: never leave content hidden if the observer misbehaves.
    window.setTimeout(function () {
      Array.prototype.forEach.call(targets, function (el) {
        if (!el.classList.contains('is-in')) {
          var box = el.getBoundingClientRect();
          if (box.top < window.innerHeight * 1.5) el.classList.add('is-in');
        }
      });
    }, 1200);
  }

  /* ------------------------------------------------------- back to top */
  function initToTop() {
    var btn = document.querySelector('.tvg-totop');
    if (!btn) return;
    var onScroll = function () {
      btn.classList.toggle('is-visible', window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function boot() {
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
    initNav();
    initHero();
    initCarousels();
    initPubSearch();
    initReveal();
    initToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
