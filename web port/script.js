// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Typing Animation
const typingText = document.getElementById('typing');
const phrases = [
    'Data Analyst',
    'SQL Developer', 
    'FrontEnd developer',
    'Power-BI developer',
    'Problem Solver'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing animation
typeEffect();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate progress bars when they come into view
const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !bar.style.width) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }
    });
};

// Animate progress bars on scroll
window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);t

// Add analytics tracking for resume downloads
function trackResumeDownload() {
    // You can add Google Analytics or other tracking here if needed
    console.log('Resume downloaded');
}

// Add event listener to track downloads (optional)
document.addEventListener('DOMContentLoaded', function() {
    const resumeBtn = document.querySelector('a[download*="Resume"]');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', trackResumeDownload);
    }
});

// Add navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add fade-in animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Add CSS for particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
        50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
    }
`;
document.head.appendChild(particleStyle);