// Services Data
const services = [
    {
        icon: 'wrench',
        title: 'Plomberie',
        description: 'Réparations et installations'
    },
    {
        icon: 'zap',
        title: 'Électricité',
        description: 'Services électriques pour la maison'
    },
    {
        icon: 'paintbrush',
        title: 'Peinture',
        description: 'Embellissement de l\'espace'
    },
    {
        icon: 'hammer',
        title: 'Menuiserie',
        description: 'Fabrication et réparation en bois'
    },
    {
        icon: 'scissors',
        title: 'Couture',
        description: 'Services de couture sur mesure'
    }
];

// Testimonials Data
const testimonials = [
    {
        name: 'Sarah Dupont',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        text: 'Excellent service! Mon électricien était très professionnel et amical.'
    },
    {
        name: 'Louis Martin',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        text: 'Les peintres ont fait un travail incroyable. Je recommande vivement !'
    },
    {
        name: 'Emma Bernard',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        text: 'Le menuisier a transformé notre jardin en une terrasse magnifique.'
    }
];

// Load Services
function loadServices() {
    const servicesGrid = document.getElementById('services-grid');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">
                <img src="https://api.iconify.design/lucide:${service.icon}.svg" alt="${service.title}">
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <button class="btn btn-primary">Voir plus</button>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Load Testimonials
function loadTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="testimonial-header">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                <div>
                    <h3>${testimonial.name}</h3>
                    <div class="rating">
                        ${'★'.repeat(5)}
                    </div>
                </div>
            </div>
            <p>${testimonial.text}</p>
        `;
        testimonialsGrid.appendChild(testimonialCard);
    });
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu?.addEventListener('click', () => {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Newsletter Form
function setupNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        alert(`Merci de vous être inscrit avec l'email: ${email}`);
        form.reset();
    });
}

// Update Copyright Year
function updateCopyrightYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    loadTestimonials();
    setupMobileMenu();
    setupNewsletterForm();
    updateCopyrightYear();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenuButton && navList) {
        mobileMenuButton.addEventListener('click', function() {
            navList.classList.toggle('show');
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");

    // Sauvegarder le thème choisi dans localStorage
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        document.querySelector(".theme-toggle").innerText = "☀️ Mode Clair";
    } else {
        localStorage.setItem("theme", "light");
        document.querySelector(".theme-toggle").innerText = "🌙 Mode Sombre";
    }
}


