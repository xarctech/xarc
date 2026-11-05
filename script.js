// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
      }
    }
  });
});

// ============ HEADER SCROLL ============
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.background = 'rgba(5,7,13,0.97)';
    header.style.boxShadow = '0 4px 30px rgba(255,180,0,0.2)';
  } else {
    header.style.background = 'rgba(5,7,13,0.85)';
    header.style.boxShadow = 'none';
  }
});

// ============ HAMBURGER MENU ============
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('open');
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

// Close nav on resize (when going to desktop)
window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

// ============ REVEAL ON SCROLL ============
const revealItems = document.querySelectorAll(
  '.card, .price-card, .loc-card, .hero-img, .wide-img, .crypto-img, .terms-box, .seo-box, .contact-glow img'
);
revealItems.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealItems.forEach(el => io.observe(el));

// ============ CURSOR GLOW (only desktop) ============
if (window.matchMedia('(min-width: 993px)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed; width:180px; height:180px;
    border-radius:50%; pointer-events:none;
    background:radial-gradient(circle, rgba(255,215,0,0.12), rgba(255,0,180,0.06), transparent 70%);
    transform:translate(-50%,-50%);
    z-index:1; transition:transform 0.08s ease-out;
    mix-blend-mode:screen;
  `;
  document.body.appendChild(glow);
  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

// ============ BUTTON RIPPLE ============
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple {
    to { transform:scale(2.5); opacity:0; }
  }
`;
document.head.appendChild(rippleStyle);

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    const d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.cssText = `
      position:absolute; width:${d}px; height:${d}px;
      border-radius:50%; background:rgba(255,255,255,0.4);
      pointer-events:none; transform:scale(0);
      left:${e.offsetX - d/2}px; top:${e.offsetY - d/2}px;
      animation:ripple 0.7s linear;
    `;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 700);
  });
});

// ============ CONSOLE BRAND ============
console.log(
  '%c⚡ XARC — Powering The Next Era ⚡',
  'background:linear-gradient(90deg,#ffd700,#ff8c00);color:#000;font-size:20px;font-weight:900;padding:10px 20px;border-radius:8px;'
);
console.log('%c📞 Call: 9309332775 | 📧 xarctech@gmail.com', 'color:#ffd700;font-size:13px;');
