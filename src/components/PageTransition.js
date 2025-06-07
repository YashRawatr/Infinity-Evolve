import { gsap } from 'gsap';

let transitionDiv = null;

export function createPageTransition() {
  if (!transitionDiv) {
    transitionDiv = document.createElement('div');
    transitionDiv.id = 'page-transition';
    transitionDiv.className = 'fixed inset-0 z-[99998] bg-black pointer-events-none opacity-0';
    document.body.appendChild(transitionDiv);
  }
}

export function playPageTransition(onMidway, onComplete) {
  if (!transitionDiv) return;
  // Fade in (blackout)
  gsap.to(transitionDiv, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete: () => {
      if (onMidway) onMidway();
      // Fade out
      gsap.to(transitionDiv, {
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        ease: 'power2.inOut',
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });
    }
  });
} 