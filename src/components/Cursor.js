import { gsap } from 'gsap';

let dot, outline, tailCanvas, tailCtx;
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let tailParticles = [];
const TAIL_LENGTH = 18;

export function initCursor() {
  // Create cursor elements if not present
  dot = document.querySelector('[data-cursor-dot]');
  outline = document.querySelector('[data-cursor-outline]');

  // Particle tail canvas
  if (!document.getElementById('cursor-tail')) {
    tailCanvas = document.createElement('canvas');
    tailCanvas.id = 'cursor-tail';
    tailCanvas.style.position = 'fixed';
    tailCanvas.style.top = 0;
    tailCanvas.style.left = 0;
    tailCanvas.style.width = '100vw';
    tailCanvas.style.height = '100vh';
    tailCanvas.style.pointerEvents = 'none';
    tailCanvas.style.zIndex = 9997;
    document.body.appendChild(tailCanvas);
    tailCtx = tailCanvas.getContext('2d');
    resizeTailCanvas();
    window.addEventListener('resize', resizeTailCanvas);
  } else {
    tailCanvas = document.getElementById('cursor-tail');
    tailCtx = tailCanvas.getContext('2d');
  }

  // Initialize tail particles
  tailParticles = Array.from({ length: TAIL_LENGTH }, () => ({ x: mouse.x, y: mouse.y }));

  // Mouse move
  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    gsap.to(dot, { x: mouse.x, y: mouse.y, duration: 0.1 });
    gsap.to(outline, { x: mouse.x, y: mouse.y, duration: 0.3 });
  });

  // Animate tail
  requestAnimationFrame(animateTail);

  // Magnetic hover
  document.querySelectorAll('a, button, .btn-primary, .nav-link').forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      gsap.to(outline, { scale: 2, duration: 0.3 });
      gsap.to(dot, { scale: 1.5, duration: 0.2 });
      // Magnetic effect
      gsap.to(dot, { x: centerX, y: centerY, duration: 0.3, ease: 'power2.out' });
      gsap.to(outline, { x: centerX, y: centerY, duration: 0.3, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(outline, { scale: 1, duration: 0.3 });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    });
  });
}

function resizeTailCanvas() {
  tailCanvas.width = window.innerWidth;
  tailCanvas.height = window.innerHeight;
}

function animateTail() {
  // Move each particle toward the previous one
  tailParticles[0].x += (mouse.x - tailParticles[0].x) * 0.25;
  tailParticles[0].y += (mouse.y - tailParticles[0].y) * 0.25;
  for (let i = 1; i < TAIL_LENGTH; i++) {
    tailParticles[i].x += (tailParticles[i - 1].x - tailParticles[i].x) * 0.25;
    tailParticles[i].y += (tailParticles[i - 1].y - tailParticles[i].y) * 0.25;
  }
  // Draw
  tailCtx.clearRect(0, 0, tailCanvas.width, tailCanvas.height);
  for (let i = 0; i < TAIL_LENGTH; i++) {
    tailCtx.beginPath();
    tailCtx.arc(tailParticles[i].x, tailParticles[i].y, 8 - i * 0.4, 0, Math.PI * 2);
    tailCtx.fillStyle = `rgba(0,243,255,${0.18 - i * 0.008})`;
    tailCtx.fill();
  }
  requestAnimationFrame(animateTail);
} 