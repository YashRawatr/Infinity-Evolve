import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

export function initHome() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <!-- Hero Section -->
        <section class="relative min-h-screen flex flex-col justify-center items-center py-24 px-6 lg:px-20 gap-8">
            <h1 class="text-5xl md:text-7xl font-orbitron font-bold text-neon-blue mb-6 hero-title text-center">
                Welcome to the Future of Gaming
            </h1>
            <p class="text-xl md:text-2xl text-white/70 font-inter mb-10 text-center max-w-2xl hero-text">
                Experience the next generation of digital interaction
            </p>
            <button class="btn-primary hero-cta morph-btn magnetic ripple glow text-lg px-10 py-4">
                Explore Now
            </button>
        </section>

        <!-- The Infinity Universe (Games Section) -->
        <section class="min-h-screen flex flex-col justify-center items-center px-6 lg:px-20 gap-16">
            <h2 class="text-4xl font-orbitron font-bold text-neon-blue mb-12 text-center">The Infinity Universe</h2>
            <div class="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <!-- Project NEXT -->
                <div class="game-card bg-black/80 rounded-2xl p-8 flex flex-col items-start shadow-glow relative magnetic fade-up">
                    <div class="absolute -inset-2 -z-10 blur-2xl bg-neon-blue/20 rounded-2xl"></div>
                    <h3 class="text-2xl font-orbitron font-bold text-neon-blue mb-4 game-title">Project NEXT</h3>
                    <p class="text-white/70 font-inter mb-2">A first-person social competitive shooter where style meets strategy and every interaction feels personal.</p>
                </div>
                <!-- Project LUCID -->
                <div class="game-card bg-black/80 rounded-2xl p-8 flex flex-col items-start shadow-glow relative magnetic fade-up">
                    <div class="absolute -inset-2 -z-10 blur-2xl bg-neon-purple/20 rounded-2xl"></div>
                    <h3 class="text-2xl font-orbitron font-bold text-neon-blue mb-4 game-title">Project LUCID</h3>
                    <p class="text-white/70 font-inter mb-2">A first-person psychological thriller that fractures the boundary between reality and illusion.</p>
                </div>
                <!-- Coming Soon -->
                <div class="game-card bg-black/80 rounded-2xl p-8 flex flex-col items-start shadow-glow relative blur-sm opacity-60 pointer-events-none fade-up">
                    <div class="absolute -inset-2 -z-10 blur-2xl bg-white/10 rounded-2xl"></div>
                    <h3 class="text-2xl font-orbitron font-bold text-neon-blue mb-4 game-title">Coming Soon</h3>
                    <p class="text-white/50 font-inter mb-2">Stay tuned for the next evolution...</p>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="w-full py-6 px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between border-t border-white/10 bg-black/80 mt-12">
            <div class="text-neon-blue font-orbitron text-xl font-bold mb-2 md:mb-0">INFINITY EVOLVE</div>
            <div class="flex gap-6 text-white/50 text-sm">
                <a href="#" class="hover:text-neon-blue transition-colors">Twitter</a>
                <a href="#" class="hover:text-neon-blue transition-colors">Discord</a>
                <a href="#" class="hover:text-neon-blue transition-colors">YouTube</a>
            </div>
            <div class="text-white/30 text-xs mt-2 md:mt-0">&copy; ${new Date().getFullYear()} Infinity Evolve. All rights reserved.</div>
        </footer>
    `;

    // GSAP Animations (add fade-up, scale-in, etc. here)
    // ...

    // Smooth scroll for CTA button
    document.querySelector('.hero-cta').addEventListener('click', (e) => {
        e.preventDefault();
        const gamesSection = document.querySelector('.game-card');
        if (gamesSection) {
            const y = gamesSection.getBoundingClientRect().top + window.scrollY - 70;
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: y },
                ease: 'power3.inOut'
            });
        }
    });
} 