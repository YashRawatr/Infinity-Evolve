import { initHome } from './pages/home';
import { initAbout } from './pages/about';
import { initContact } from './pages/contact';
import { playPageTransition } from './components/PageTransition';

const routes = {
    '/': initHome,
    '/about': initAbout,
    '/contact': initContact
};

function renderRoute(path) {
    if (routes[path]) {
        playPageTransition(() => {
            routes[path]();
        });
    } else {
        window.history.replaceState(null, '', '/');
        playPageTransition(() => {
            routes['/']();
        });
    }
}

export function initRouter() {
    // Handle initial page load
    renderRoute(window.location.pathname);

    // Handle navigation
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.getAttribute('href').startsWith('/')) {
            e.preventDefault();
            const path = link.getAttribute('href');
            window.history.pushState(null, '', path);
            renderRoute(path);
        }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        renderRoute(window.location.pathname);
    });
} 