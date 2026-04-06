// Add interaction script
document.addEventListener("DOMContentLoaded", () => {
    // Reveal effects on scroll
    const reveals = document.querySelectorAll('.timeline-item, .skill-tag, .about-text, .project-card');

    // Add reveal class to cards initially
    reveals.forEach(card => card.classList.add('reveal'));

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // triggering scroll event on load
    revealOnScroll();

    // Button interaction
    const exploreBtn = document.getElementById('explore-btn');
    if(exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
             e.preventDefault();
             document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
