// Scroll reveal
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal, .section, .offer-card, .pillar, .vision-card, .leader').forEach((el) => {
  el.classList.add('reveal');
  io.observe(el);
});

// Subtle parallax on hero art
const art = document.querySelector('.hero-art');
if (art && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < 800) art.style.transform = `rotate(${2 - y * 0.005}deg) translateY(${y * 0.05}px)`;
  }, { passive: true });
}
