# Futuristic Website

A modern, immersive website featuring stunning animations and a futuristic design. Built with HTML, TailwindCSS, and GSAP animations.

## Features

- 🎨 Modern, black-themed design with neon accents
- ✨ Smooth animations and transitions using GSAP
- 🌟 Interactive particle background
- 📱 Fully responsive layout
- 🎯 Custom cursor with hover effects
- 🎬 Page transitions with fade effects
- 🎮 Interactive 3D tilt effects
- 📝 Animated contact form
- 🎵 Optional sound effects (can be enabled)

## Tech Stack

- HTML5
- TailwindCSS
- JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)
- Vanilla Tilt.js
- Vite (Build Tool)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
web/
├── src/
│   ├── pages/
│   │   ├── home.js
│   │   ├── about.js
│   │   └── contact.js
│   ├── main.js
│   ├── router.js
│   └── style.css
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

### Colors
The color scheme can be modified in `tailwind.config.js`. The main colors are:
- Neon Blue: `#00f3ff`
- Neon Purple: `#9d00ff`
- Neon Pink: `#ff00ff`

### Animations
GSAP animations can be adjusted in the respective page files:
- `src/pages/home.js`
- `src/pages/about.js`
- `src/pages/contact.js`

### Fonts
The project uses:
- Orbitron (for headings)
- Inter (for body text)

Fonts can be changed in `index.html` and `tailwind.config.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for performance with:
- Lazy loading of components
- Optimized animations
- Efficient particle system
- Minimal dependencies

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- GSAP for the amazing animation library
- TailwindCSS for the utility-first CSS framework
- Vanilla Tilt.js for the 3D tilt effects 