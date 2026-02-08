document.addEventListener('DOMContentLoaded', () => {
    // Interação de Scroll (Fade In)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger inicial

    // Sticky Header Background
    const header = document.getElementById('header');

    // Check inicial para caso a página seja recarregada já com scroll
    const checkScroll = () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            // Em mobile, mantemos sempre escuro (definido no CSS), mas ok
            if (window.innerWidth > 768) {
                header.style.background = 'transparent';
                header.style.boxShadow = 'none';
            }
        }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
