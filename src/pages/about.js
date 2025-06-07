import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';

export function initAbout() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <!-- Parallax Hero Section -->
        <section class="min-h-screen relative overflow-hidden">
            <div class="absolute inset-0 parallax-bg"></div>
            <div class="container mx-auto px-4 h-screen flex items-center relative z-10">
                <div class="max-w-4xl">
                    <h1 class="text-6xl md:text-8xl font-orbitron font-bold mb-6 about-title">
                        <span class="block text-neon-blue">Our Story</span>
                        <span class="block mt-2">Our Vision</span>
                    </h1>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section class="py-20 relative">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-16 items-center">
                    <!-- Team Image with 3D Tilt -->
                    <div class="team-image" data-tilt>
                        <div class="aspect-square rounded-lg overflow-hidden glass relative">
                            <div class="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20"></div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <span class="text-2xl font-orbitron">Team Photo</span>
                            </div>
                        </div>
                    </div>

                    <!-- Team Content -->
                    <div class="space-y-8 team-content">
                        <h2 class="text-4xl font-orbitron font-bold text-neon-blue">Meet Our Team</h2>
                        <p class="text-white/70">
                            We are a diverse group of passionate individuals, united by our love for
                            creating extraordinary digital experiences. Our team combines expertise in
                            design, development, and innovation to push the boundaries of what's possible.
                        </p>
                        <div class="grid grid-cols-2 gap-6">
                            <div class="team-stat">
                                <span class="block text-4xl font-orbitron text-neon-blue">10+</span>
                                <span class="text-white/70">Years Experience</span>
                            </div>
                            <div class="team-stat">
                                <span class="block text-4xl font-orbitron text-neon-blue">50+</span>
                                <span class="text-white/70">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values Section -->
        <section class="py-20 relative">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-orbitron font-bold text-center mb-16 values-title">Our Values</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="value-card glass p-8 rounded-lg">
                        <div class="w-16 h-16 rounded-full bg-neon-blue/20 flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-orbitron mb-4">Innovation</h3>
                        <p class="text-white/70">Pushing boundaries and exploring new possibilities in digital design.</p>
                    </div>
                    <div class="value-card glass p-8 rounded-lg">
                        <div class="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-orbitron mb-4">Excellence</h3>
                        <p class="text-white/70">Delivering exceptional quality in every project we undertake.</p>
                    </div>
                    <div class="value-card glass p-8 rounded-lg">
                        <div class="w-16 h-16 rounded-full bg-neon-pink/20 flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-orbitron mb-4">Collaboration</h3>
                        <p class="text-white/70">Working together to achieve extraordinary results.</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Parallax background effect
    gsap.to('.parallax-bg', {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.parallax-bg',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Title animation
    gsap.from('.about-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    // Team section animations
    gsap.from('.team-image', {
        scrollTrigger: {
            trigger: '.team-image',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.team-content', {
        scrollTrigger: {
            trigger: '.team-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Values section animations
    gsap.from('.values-title', {
        scrollTrigger: {
            trigger: '.values-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.value-card', {
        scrollTrigger: {
            trigger: '.value-card',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Initialize tilt effect
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.5
    });
} 