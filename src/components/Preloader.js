import { gsap } from 'gsap';

export function showPreloader(onComplete) {
  // Create preloader HTML
  const preloader = document.createElement('div');
  preloader.id = 'preloader';
  preloader.className = 'fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black';
  preloader.innerHTML = `
    <div class="flex flex-col items-center">
      <div class="mb-8">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="36" stroke="#00f3ff" stroke-width="4" opacity="0.2" />
          <circle cx="40" cy="40" r="36" stroke="#00f3ff" stroke-width="4" stroke-dasharray="226" stroke-dashoffset="226" id="preloader-circle" />
          <text x="50%" y="54%" text-anchor="middle" fill="#00f3ff" font-size="18" font-family="Orbitron, sans-serif" dy=".3em">IE</text>
        </svg>
      </div>
      <div class="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
        <div id="preloader-bar" class="h-full bg-neon-blue rounded-full w-0"></div>
      </div>
      <div class="mt-6 text-neon-blue font-orbitron tracking-widest text-xs animate-pulse">LOADING</div>
    </div>
  `;
  document.body.appendChild(preloader);

  // Animate loading bar and circle
  gsap.to('#preloader-bar', {
    width: '100%',
    duration: 1.8,
    ease: 'power2.inOut',
  });
  gsap.to('#preloader-circle', {
    strokeDashoffset: 0,
    duration: 1.8,
    ease: 'power2.inOut',
  });

  // Fade out after loading
  setTimeout(() => {
    gsap.to('#preloader', {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        preloader.remove();
        if (onComplete) onComplete();
      }
    });
  }, 2100);
} 