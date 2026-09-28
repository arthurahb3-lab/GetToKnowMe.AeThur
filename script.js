// ===== Animação suave ao aparecer as seções =====
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

sections.forEach(s => observer.observe(s));

// ===== Scroll suave nos links da navegação =====
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ===== Fallback: se o navegador não suportar IntersectionObserver =====
if (!('IntersectionObserver' in window)) {
  sections.forEach(s => s.classList.add('visible'));
}