import { gsap } from 'gsap';
import VanillaTilt from 'vanilla-tilt';

// Magnetic Pull
function magneticHover(selector = '.magnetic') {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x, y, scale: 1.06, duration: 0.3, ease: 'power3.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.4, ease: 'elastic.out(1,0.4)' });
    });
  });
}

// Ripple FX
function rippleFX(selector = '.ripple') {
  document.querySelectorAll(selector).forEach(el => {
    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.addEventListener('pointerdown', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple-anim';
      const size = Math.max(el.offsetWidth, el.offsetHeight);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.offsetX - size/2) + 'px';
      ripple.style.top = (e.offsetY - size/2) + 'px';
      ripple.style.position = 'absolute';
      ripple.style.background = 'rgba(0,243,255,0.25)';
      ripple.style.borderRadius = '50%';
      ripple.style.pointerEvents = 'none';
      ripple.style.transform = 'scale(0)';
      ripple.style.transition = 'transform 0.5s, opacity 0.5s';
      el.appendChild(ripple);
      requestAnimationFrame(() => {
        ripple.style.transform = 'scale(2.5)';
        ripple.style.opacity = '0';
      });
      setTimeout(() => ripple.remove(), 500);
    });
  });
}

// Glow + Pulse
function glowPulse(selector = '.glow') {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('shadow-glow','animate-glow');
    });
    el.addEventListener('mouseleave', () => {
      el.classList.remove('shadow-glow','animate-glow');
    });
  });
}

// 3D Tilt
function tilt3D(selector = '.tilt') {
  VanillaTilt.init(document.querySelectorAll(selector), {
    max: 18,
    speed: 500,
    glare: true,
    'max-glare': 0.25
  });
}

// Under-Cursor Displacement (SVG filter, simple demo)
function cursorDisplacement(selector = '.displace') {
  // For demo: add a blur filter on hover
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.filter = 'url(#displacementFilter) blur(2px)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.filter = '';
    });
  });
}

// Main init
export function initHoverFX() {
  magneticHover('.magnetic');
  rippleFX('.ripple');
  glowPulse('.glow');
  tilt3D('.tilt');
  cursorDisplacement('.displace');
} 