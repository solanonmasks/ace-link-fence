// Page motion, ported from the design prototype.
//  - Reveal on scroll: blocks fade up (opacity 0 / 28px down -> visible), 90ms stagger, max 5 steps.
//  - Hero zoom: a full-bleed hero image eases from scale(1.08) to 1 over 2.8s on load.
//  - Hover zoom: an image inside an overflow:hidden box scales to 1.045 on hover.
//  - If the visitor prefers reduced motion, reveal and zoom effects are skipped.
(() => {
  if (window.__siteMotion) return;
  window.__siteMotion = true;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE = 'cubic-bezier(.2,.7,.2,1)';
  const done = new WeakSet();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.style.opacity = '1';
      el.style.transform = 'none';
      io.unobserve(el);
      setTimeout(() => { el.style.transition = ''; el.style.willChange = ''; }, 1600);
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });

  function heroZoom(img) {
    if (done.has(img)) return;
    done.add(img);
    if (reduce) return;
    img.style.transform = 'scale(1.08)';
    img.style.transition = 'transform 2.8s ' + EASE;
    requestAnimationFrame(() => requestAnimationFrame(() => { img.style.transform = 'scale(1)'; }));
  }

  function hoverZoom(img) {
    const box = img.parentElement;
    if (!box || box.__hz || reduce) return;
    if (getComputedStyle(box).overflow !== 'hidden') return;
    box.__hz = true;
    img.style.transition = 'transform 1.1s ' + EASE;
    const host = box.closest('a') || box;
    host.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.045)'; });
    host.addEventListener('mouseleave', () => { img.style.transform = 'scale(1)'; });
  }

  function scan() {
    const cands = new Set();

    document.querySelectorAll('main img, section img').forEach((img) => {
      if (img.closest('header')) return;
      const abs = getComputedStyle(img).position === 'absolute';
      const p = img.parentElement;
      // Absolutely-positioned image directly inside a <section> = full-bleed hero.
      if (abs && p && p.tagName === 'SECTION') { heroZoom(img); return; }
      hoverZoom(img);
      if (p && p.tagName !== 'SECTION' && p.tagName !== 'MAIN') cands.add(p);
    });

    document.querySelectorAll('main h1, main h2, main h3, main p, main blockquote, main form, main aside, main figure, section h2, section p, footer > div').forEach((el) => {
      if (!el.closest('header')) cands.add(el);
    });

    // Only animate the outermost candidate (don't animate a heading inside an animated card).
    const list = [...cands].filter((el) => !done.has(el));
    const outer = list.filter((el) => {
      let a = el.parentElement;
      while (a) { if (cands.has(a)) return false; a = a.parentElement; }
      return true;
    });

    outer.forEach((el) => {
      done.add(el);
      if (reduce) return;
      const sibs = [...el.parentElement.children].filter((c) => cands.has(c));
      const i = Math.min(Math.max(0, sibs.indexOf(el)), 5);
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.willChange = 'opacity, transform';
      el.style.transition = `opacity .9s ${EASE} ${i * 90}ms, transform 1s ${EASE} ${i * 90}ms`;
      io.observe(el);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan);
  else scan();
})();
