//Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

let isHover = false;
let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
    
    if (isHover) {
        outlineX = mouseX;
        outlineY = mouseY;
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
    }
});

function animateOutline() {
    if (!isHover) {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
    }
    
    requestAnimationFrame(animateOutline);
}

animateOutline();

const interactivos = document.querySelectorAll("button, a, input, textarea, select, .project-item, .tech-tag");

interactivos.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        isHover = true;
        cursorDot.classList.add("active");
        cursorOutline.classList.add("active");
    });
    
    el.addEventListener("mouseleave", () => {
        isHover = false;
        cursorDot.classList.remove("active");
        cursorOutline.classList.remove("active");
    });
});

// White Mode
let whiteMode = localStorage.getItem("white-mode");
const themeSwitch = document.getElementById("theme-switch");

const enableWhiteMode = () => {
    document.body.classList.add("white-mode")
    localStorage.setItem("white-mode", "active")
}

const disableWhiteMode = () => {
    document.body.classList.remove("white-mode")
    localStorage.setItem("white-mode", null)
}

if(whiteMode === "active") enableWhiteMode()
    
themeSwitch.addEventListener("click", () => {
    whiteMode = localStorage.getItem("white-mode")
    whiteMode !== "active" ? enableWhiteMode() : disableWhiteMode()
})

//Traductor

document.addEventListener('DOMContentLoaded', function() {
    const languageSwitch = document.getElementById('language-switch');
    const spanishFlag = document.getElementById('spanish-flag');
    const englishFlag = document.getElementById('english-flag');
    
    let currentLanguage = localStorage.getItem('language') || 'es';
    
    const translations = {
    'es': {
        'all-projects': 'Todos mis proyectos',
        'all-projects-text': 'Una colección de mis trabajos más recientes y destacados  ',
        'view-project': 'Ver proyecto',
        'kukul-text': 'Landing page moderna para una plataforma de inteligencia artificial. Diseño limpio y optimizado para conversiones, con animaciones sutiles y estructura responsive.',
        'construmar-text': 'Sitio web para empresa de construcción con catálogo de servicios, galería de proyectos y formulario de contacto. Diseño orientado a la confianza y profesionalismo.',
        'shopping-cart': 'Carrito de compras',
        'shopping-cart-text': 'Sistema completo de carrito de compras con funcionalidades de agregar, eliminar y modificar productos. Interfaz intuitiva con cálculos en tiempo real y almacenamiento local.',
        'landing-text': 'Landing page realizada como primer proyecto de programacion web. Simula ser una landing de un procesador Intel. Diseñado de manera totalmente responsive, con estetica minimalista.',
        'portfolio': 'Portfolio Personal',
        'portfolio-text': 'Pagina en la que estas ahora mismo, mi portfolio personal. Recopilacion de todos los proyectos en los que he trabajado, mis habilidades y servicios',
        'back-to': 'Volver a la pagina principal',
    },
    'en': {
        'all-projects': 'All my Projects',
        'all-projects-text': 'A collection of my most recent and notable works',
        'view-project': 'View project',
        'kukul-text': 'Modern landing page for an artificial intelligence platform. Clean design optimized for conversions, with subtle animations and responsive structure.',
        'construmar-text': 'Website for a construction company with a service catalog, project gallery, and contact form. Design focused on trust and professionalism.',
        'shopping-cart': 'Shopping Cart',
        'shopping-cart-text': 'Complete shopping cart system with features to add, remove, and modify products. Intuitive interface with real-time calculations and local storage.',
        'landing-text': 'Landing page created as a first web programming project. It simulates being a landing page for an Intel processor. Designed to be fully responsive, with minimalist aesthetics.',
        'portfolio': 'My Personal Portfolio',
        'portfolio-text': 'The page you are currently viewing, my personal portfolio. A compilation of all the projects I have worked on, my skills, and services.',
        'back-to': 'Back to the main page',
    }
};
    
    function applyTranslations(language) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
        
        if (language === 'es') {
            spanishFlag.style.display = 'inline';
            englishFlag.style.display = 'none';
        } else {
            spanishFlag.style.display = 'none';
            englishFlag.style.display = 'inline';
        }
        
        localStorage.setItem('language', language);
        currentLanguage = language;
    }
    
    applyTranslations(currentLanguage);
    
    languageSwitch.addEventListener('click', function() {
        const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
        applyTranslations(newLanguage);
    });
});