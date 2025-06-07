import { gsap } from 'gsap';

export function initContact() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <!-- Contact Hero Heading -->
        <div class="container mx-auto px-4 pt-16 pb-8 mt-8">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-5xl md:text-7xl font-orbitron font-bold mb-6 text-center contact-title">
                    <span class="block text-neon-blue">Get in Touch</span>
                    <span class="block mt-2 text-3xl md:text-4xl">Let's Create Something Amazing</span>
                </h1>
            </div>
        </div>

        <!-- Contact Form Section -->
        <section class="py-16 relative">
            <div class="container mx-auto px-4">
                <div class="max-w-2xl mx-auto">
                    <h2 class="text-3xl font-orbitron font-bold text-neon-blue mb-8 text-center">Contact Form</h2>
                    <form class="contact-form glass p-8 rounded-lg space-y-6">
                        <div class="form-group">
                            <label class="form-label" for="name">Name</label>
                            <input type="text" id="name" class="form-input" required>
                            <div class="form-focus-ring"></div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="email">Email</label>
                            <input type="email" id="email" class="form-input" required>
                            <div class="form-focus-ring"></div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="subject">Subject</label>
                            <input type="text" id="subject" class="form-input" required>
                            <div class="form-focus-ring"></div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="message">Message</label>
                            <textarea id="message" rows="6" class="form-input" required></textarea>
                            <div class="form-focus-ring"></div>
                        </div>
                        
                        <button type="submit" class="btn-primary w-full submit-btn">
                            <span class="relative z-10">Send Message</span>
                            <div class="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <!-- Contact Info Section -->
        <section class="py-16 relative">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-orbitron font-bold text-neon-blue mb-8 text-center">Contact Info</h2>
                <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div class="contact-info-card glass p-6 rounded-lg text-center">
                        <div class="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-orbitron mb-2">Discord</h3>
                        <p class="text-white/70"><a href="https://discord.gg/QfPFF9Zw" target="_blank" rel="noopener" class="text-neon-blue underline">Join our Discord</a></p>
                    </div>
                    
                    <div class="contact-info-card glass p-6 rounded-lg text-center">
                        <div class="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-orbitron mb-2">Email</h3>
                        <p class="text-white/70">infinityevolveofficial@gmail.com</p>
                    </div>
                    
                    <div class="contact-info-card glass p-6 rounded-lg text-center">
                        <div class="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-orbitron mb-2">Location</h3>
                        <p class="text-white/70">Dehradun, India</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Initialize animations
    const tl = gsap.timeline();

    // Hero section animations
    tl.from('.contact-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    // Form animations
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Contact info cards animations
    gsap.from('.contact-info-card', {
        scrollTrigger: {
            trigger: '.contact-info-card',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Form input animations
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        const focusRing = formGroup.querySelector('.form-focus-ring');

        input.addEventListener('focus', () => {
            gsap.to(focusRing, {
                scale: 1.02,
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(input, {
                borderColor: '#00f3ff',
                duration: 0.3
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(focusRing, {
                scale: 1,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(input, {
                borderColor: 'rgba(255, 255, 255, 0.1)',
                duration: 0.3
            });
        });
    });

    // Submit button hover effect
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('mouseenter', () => {
        gsap.to(submitBtn, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    submitBtn.addEventListener('mouseleave', () => {
        gsap.to(submitBtn, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    // Form submission
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add submission animation
        gsap.to('.submit-btn', {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });

        // Here you would typically handle the form submission
        // For now, we'll just show a success message
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed bottom-4 right-4 bg-neon-blue text-black px-6 py-3 rounded-lg font-orbitron';
        successMessage.textContent = 'Message sent successfully!';
        document.body.appendChild(successMessage);

        gsap.fromTo(successMessage,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
        );

        setTimeout(() => {
            gsap.to(successMessage, {
                y: 100,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => successMessage.remove()
            });
        }, 3000);

        form.reset();
    });
} 