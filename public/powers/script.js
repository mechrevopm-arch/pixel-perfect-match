(function () {
  var btn = document.querySelector('.menu-btn');
  var toc = document.getElementById('toc');
  var links = Array.prototype.slice.call(toc.querySelectorAll('a'));

  btn.addEventListener('click', function () {
    var open = toc.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      toc.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toc.classList.contains('open')) {
      toc.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });

  if (!('IntersectionObserver' in window)) return;
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        links.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + en.target.id;
          a.classList.toggle('active', on);
          if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(function (s) { if (s) obs.observe(s); });
})();
