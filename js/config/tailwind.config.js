/* ==========================================================================
   js/config/tailwind.config.js — Configuración de Tailwind Play CDN
   Compatible antes o después del script cdn.tailwindcss.com
   ========================================================================== */

const fiaTailwindConfig = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                olive: {
                    DEFAULT: '#6E8335',
                    hover: '#5A6D2B',
                    soft: 'rgba(110, 131, 53, 0.15)',
                    accent: '#849C44'
                },
                basegray: '#6B7280',
                carbon: {
                    DEFAULT: '#FFFFFF', // Blanco puro para tarjetas y bloques sobre fondo gris claro
                    dark: '#E8E9EC',    // Fondo gris claro para toda la página y todas las secciones
                    light: '#CBD0D8',   // Bordes y separadores sutiles
                    surface: '#DFE1E5'  // Superficie gris claro alternativa
                },
                ash: '#4B5563',         // Texto secundario legible y elegante
                brokenwhite: '#14171A', // Títulos y textos principales en carbón profundo
                studiogray: '#8B8B8D'   // Gris de estudio
            },
            fontFamily: {
                editorial: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
                sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            },
            letterSpacing: {
                ultra: '0.25em',
                widest: '0.18em',
            }
        }
    }
};

if (typeof tailwind !== 'undefined') {
    tailwind.config = fiaTailwindConfig;
} else if (typeof window !== 'undefined') {
    window.tailwind = window.tailwind || {};
    window.tailwind.config = fiaTailwindConfig;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = fiaTailwindConfig;
}
