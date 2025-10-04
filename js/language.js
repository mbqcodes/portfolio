document.addEventListener('DOMContentLoaded', function() {
    const languageSwitch = document.getElementById('language-switch');
    const spanishFlag = document.getElementById('spanish-flag');
    const englishFlag = document.getElementById('english-flag');
    
    let currentLanguage = localStorage.getItem('language') || 'es';
    
    const translations = {
    'es': {
        'greeting': 'Hola, soy',
        'role': 'Desarrollador Web',
        'description': 'Soy un programador web autodidacta de Argentina. Estoy en constante aprendizaje, creando sitios web con estetica y animaciones de primer nivel. Me mantengo en la busqueda constante de innovacion..',
        'start': 'Inicio',
        'projects-tittle': 'Proyectos',
        'projects': 'Proyectos',
        'view-project': 'Ver proyecto',
        'skills': 'Skills',
        'about': 'Acerca de',
        'mastered': 'Dominadas',
        'learning': 'Aprendiendo',
        'tools': 'Herramientas',
        'about-title': 'Sobre mí',
        'about-description-1': 'Soy un desarrollador web autodidacta con pasión por crear interfaces modernas, limpias y accesibles. Me especializo en el desarrollo de landing pages optimizadas con HTML, CSS y JavaScript.',
        'about-description-2': 'Actualmente sigo aprendiendo React y bases de datos para ampliar mi stack hacia el desarrollo fullstack. Me motiva resolver problemas, aprender de cada proyecto y aportar soluciones creativas a los clientes.',
        'work-together': 'Trabajemos juntos',
        'services-title': 'Lo que ofrezco',
        'service-1-title': 'Paginas Web Modernas',
        'service-1-description': 'Diseño y desarrollo de páginas rápidas y optimizadas para destacar tu proyecto o negocio.',
        'service-2-title': 'Diseño Responsivo',
        'service-2-description': 'Experiencia de usuario adaptada a cualquier dispositivo, con interfaces claras y accesibles.',
        'service-3-title': 'Interactividad con JS',
        'service-3-description': 'Agrego dinamismo y funcionalidad para crear sitios atractivos y fáciles de usar.',
        'service-4-title': 'Estilo Personalizado',
        'service-4-description': 'Implementación de diseños modernos, tipografías limpias y colores accesibles para mejorar la experiencia visual.'
    },
    'en': {
        'greeting': 'Hello, I am',
        'role': 'Web Developer',
        'description': 'Im a self-taught web developer from Argentina. Im constantly learning, creating websites with top-notch aesthetics and animations. Im constantly seeking innovation.',
        'start': 'Start',
        'projects-tittle': 'Projects',
        'projects': 'Projects',
        'view-project': 'View project',
        'skills': 'Skills',
        'about': 'About',
        'mastered': 'Mastered',
        'learning': 'Learning',
        'tools': 'Tools',
        'about-title': 'About Me',
        'about-description-1': 'I am a self-taught web developer passionate about creating modern, clean, and accessible interfaces. I specialize in developing optimized landing pages with HTML, CSS, and JavaScript.',
        'about-description-2': 'I am currently learning React and databases to expand my stack towards fullstack development. I am motivated by solving problems, learning from each project, and providing creative solutions to clients.',
        'work-together': "Let's work together",
        'services-title': 'What I offer',
        'service-1-title': 'Modern Web Pages',
        'service-1-description': 'Design and development of fast and optimized pages to highlight your project or business.',
        'service-2-title': 'Responsive Design',
        'service-2-description': 'User experience adapted to any device, with clear and accessible interfaces.',
        'service-3-title': 'JS Interactivity',
        'service-3-description': 'I add dynamism and functionality to create attractive and easy-to-use sites.',
        'service-4-title': 'Custom Style',
        'service-4-description': 'Implementation of modern designs, clean typography and accessible colors to enhance the visual experience.'
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


