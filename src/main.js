import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import VanillaTilt from 'vanilla-tilt';
import { initRouter } from './router';
import { showPreloader } from './components/Preloader';
import { createPageTransition } from './components/PageTransition';
import { initCursor } from './components/Cursor';
import { initHoverFX } from './components/HoverFX';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

// Custom cursor
const cursor = {
    dot: document.querySelector('[data-cursor-dot]'),
    outline: document.querySelector('[data-cursor-outline]'),
    init() {
        document.addEventListener('mousemove', (e) => {
            gsap.to(this.dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
            gsap.to(this.outline, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3
            });
        });

        // Add hover effect for interactive elements
        const links = document.querySelectorAll('a, button, .btn-primary');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(this.outline, {
                    scale: 1.5,
                    duration: 0.3
                });
            });
            link.addEventListener('mouseleave', () => {
                gsap.to(this.outline, {
                    scale: 1,
                    duration: 0.3
                });
            });
        });
    }
};

// Mobile menu
const mobileMenu = {
    button: document.getElementById('mobile-menu-button'),
    menu: document.getElementById('mobile-menu'),
    init() {
        this.button.addEventListener('click', () => {
            this.menu.classList.toggle('hidden');
            gsap.fromTo(this.menu, 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.3 }
            );
        });
    }
};

// Page transitions
const pageTransition = {
    init() {
        const transition = document.createElement('div');
        transition.className = 'page-transition';
        document.body.appendChild(transition);

        // Handle page transitions
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('/')) {
                    e.preventDefault();
                    const href = link.getAttribute('href');
                    
                    gsap.to(transition, {
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            window.history.pushState(null, '', href);
                            initRouter();
                            gsap.to(transition, {
                                y: '100%',
                                duration: 0.5,
                                ease: 'power2.inOut'
                            });
                        }
                    });
                }
            });
        });
    }
};

// Particle background
class ParticleBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        document.body.appendChild(this.canvas);

        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = 100;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2,
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(0, 243, 255, 0.5)';
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Page transition overlay logic
function animatePageTransition(href) {
    const transition = document.querySelector('.page-transition');
    if (!transition) return;
    // Animate in (slide down)
    gsap.to(transition, {
        y: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
            window.history.pushState(null, '', href);
            initRouter();
            // Animate out (slide up)
            gsap.to(transition, {
                y: '100%',
                duration: 0.6,
                ease: 'power2.inOut'
            });
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    showPreloader(() => {
        // Ensure the page transition overlay exists
        if (!document.querySelector('.page-transition')) {
            const transition = document.createElement('div');
            transition.className = 'page-transition fixed top-0 left-0 w-full h-full bg-black z-[9999] pointer-events-none';
            transition.style.transform = 'translateY(100%)';
            document.body.appendChild(transition);
        }
        createPageTransition();
        initCursor();
        mobileMenu.init();
        pageTransition.init();
        new ParticleBackground();
        initRouter();
        initHoverFX();

        // Initialize tilt effect on elements with data-tilt attribute
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.5
        });

        // Override link click for animated page transitions
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('/')) {
                    e.preventDefault();
                    animatePageTransition(href);
                }
            });
        });
    });
}); 