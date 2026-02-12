const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.initAnimations = function () {
    const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');
    animatedElements.forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', () => {
    window.initAnimations();
});
