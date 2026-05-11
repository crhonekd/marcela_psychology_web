'use strict';

/* Flip no-js → js so CSS can apply JS-only behaviors */
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

/* ── Nav scroll state ────────────────────────────────────── */

const nav = document.querySelector('.nav');

function onScroll() {
  nav.classList.toggle('nav--scrolled', window.scrollY > 60);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load in case page is already scrolled

/* ── Mobile menu ─────────────────────────────────────────── */

const hamburger = document.querySelector('.nav__hamburger');
const navLinks  = document.querySelector('.nav__links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // close on any nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
      nav.classList.remove('nav--open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      hamburger.focus();
    }
  });
}

/* ── Scroll reveal (IntersectionObserver) ────────────────── */

const revealEls = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  revealEls.forEach(el => revealObserver.observe(el));
} else {
  // No IntersectionObserver support — reveal everything immediately
  revealEls.forEach(el => el.classList.add('is-visible'));
}

/* ── Active nav link (smooth scroll sections) ────────────── */

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav__links a[href^="#"]');

if (sections.length && navItems.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));
}
