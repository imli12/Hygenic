window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    const screenPosition = window.innerHeight / 1.5;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});