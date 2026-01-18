// ===== Mobile Navigation Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== Typing Animation =====
const typingText = document.querySelector('.typing-text');
const phrases = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Creative Thinker'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
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
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeText, typeSpeed);
}

// Start typing animation
if (typingText) {
    typeText();
}

// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Active Navigation Link Highlighting =====
const sections = document.querySelectorAll('section[id]');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .skill-category, .highlight-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        console.log('Form submitted:', formData);
        
        // Show success message (you can customize this)
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would:
        // 1. Send data to your backend API
        // 2. Handle errors appropriately
        // 3. Show a proper success/error notification
    });
}

// ===== 3D Parallax Effect for Hero Section =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const hero3d = document.getElementById('hero3d');
    
    if (hero && scrolled < window.innerHeight) {
        const parallaxY = scrolled * 0.5;
        const parallaxZ = scrolled * 0.2;
        hero.style.transform = `translateY(${parallaxY}px) translateZ(${-parallaxZ}px)`;
        hero.style.opacity = 1 - scrolled / window.innerHeight;
        
        // 3D shapes parallax
        if (hero3d) {
            const shapes = hero3d.querySelectorAll('.geometric-shape');
            shapes.forEach((shape, index) => {
                const speed = 0.3 + (index % 3) * 0.2;
                const translateZ = scrolled * speed;
                shape.style.transform = `translateZ(${translateZ}px) rotateX(${scrolled * 0.1}deg) rotateY(${scrolled * 0.1}deg)`;
            });
        }
    }
});

// ===== 3D Mouse Parallax for Hero Section =====
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(0)`;
        }
        
        // Move 3D shapes based on mouse
        const hero3d = document.getElementById('hero3d');
        if (hero3d) {
            const shapes = hero3d.querySelectorAll('.geometric-shape');
            shapes.forEach((shape, index) => {
                const speed = (index % 3) * 0.5;
                shape.style.transform += ` translate(${x * speed}px, ${y * speed}px)`;
            });
        }
    });
}

// ===== 3D Section Headers on Scroll =====
const sectionHeaders = document.querySelectorAll('.section-header');
sectionHeaders.forEach(header => {
    window.addEventListener('scroll', () => {
        const rect = header.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = 1 - (rect.top / windowHeight);
            const rotateY = progress * 10;
            header.style.transform = `perspective(1000px) rotateY(${rotateY}deg) translateZ(${progress * 20}px)`;
        }
    });
});

// ===== 3D Geometric Shapes Generation =====
function create3DShapes() {
    const hero3d = document.getElementById('hero3d');
    if (!hero3d) return;
    
    const shapes = ['cube', 'pyramid', 'sphere'];
    const numShapes = 8;
    
    for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement('div');
        shape.className = 'geometric-shape';
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        shape.classList.add(`shape-${shapeType}`);
        
        // Random position
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = 50 + Math.random() * 100;
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';
        
        // Random animation delay
        shape.style.animationDelay = Math.random() * 20 + 's';
        shape.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        hero3d.appendChild(shape);
    }
}

// Initialize 3D shapes
create3DShapes();

// ===== 3D Mouse Tilt Effect for Hero Name =====
const heroName = document.querySelector('.hero-name');
if (heroName) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const rotateX = (y - 0.5) * 20;
        const rotateY = (0.5 - x) * 20;
        
        heroName.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    });
}

// ===== Enhanced 3D Project Cards Tilt Effect =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        const translateZ = 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) translateZ(${translateZ}px)`;
        
        // Add glow effect
        const glowX = (x / rect.width) * 100;
        const glowY = (y / rect.height) * 100;
        this.style.boxShadow = `
            ${(x - centerX) / 10}px ${(y - centerY) / 10}px 40px rgba(100, 255, 218, 0.3),
            0 20px 40px rgba(0, 0, 0, 0.4)
        `;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) translateZ(0)';
        this.style.boxShadow = '';
    });
});

// ===== 3D Skill Items Tilt =====
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `scale(1.05) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(20px)`;
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0) rotateX(0) translateZ(0)';
    });
});

// ===== 3D Highlight Items =====
document.querySelectorAll('.highlight-item').forEach(item => {
    item.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        this.style.transform = `translateY(-5px) translateZ(10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) translateZ(0) rotateX(0) rotateY(0)';
    });
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ===== Particle Animation for About Section =====
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        
        // Random size
        const size = 2 + Math.random() * 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random color variation
        const colors = ['#64ffda', '#ff6b6b', '#8892b0'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.opacity = 0.3 + Math.random() * 0.4;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// ===== Console Message =====
console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #64ffda; font-size: 16px; font-weight: bold;');
console.log('%cWant to see the code? Check out the repository!', 'color: #8892b0; font-size: 12px;');
