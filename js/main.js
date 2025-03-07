// Main JavaScript for Aidan McDowell's Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Initialize functionality when the DOM is fully loaded
    console.log('Portfolio website loaded');
    
    // Variables
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links li');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Initialize animations
    initTypewriterEffect();
    fadeInElements();
    
    // Navigation bar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Mobile navigation toggle
    burger.addEventListener('click', () => {
        // Toggle navigation menu
        nav.classList.toggle('nav-active');
        
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger animation
        burger.classList.toggle('toggle');
    });
    
    // Project filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Show/hide projects based on filter
            let visibleCount = 0;
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                    visibleCount++;
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // Show message if no projects in this category
            const noProjectsMessage = document.getElementById('no-projects-message');
            if (visibleCount === 0 && noProjectsMessage) {
                noProjectsMessage.style.display = 'block';
            } else if (noProjectsMessage) {
                noProjectsMessage.style.display = 'none';
            }
        });
    });
    
    // Contact section - email copy to clipboard functionality
    const copyEmailBtn = document.getElementById('copy-email');
    const copyStatus = document.getElementById('copy-status');
    
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = copyEmailBtn.getAttribute('data-email');
            
            // Copy to clipboard
            navigator.clipboard.writeText(email)
                .then(() => {
                    // Show the copied message
                    copyStatus.classList.add('show');
                    
                    // Hide after 2 seconds
                    setTimeout(() => {
                        copyStatus.classList.remove('show');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
    }
    
    // Scroll to section when clicking on nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
});

// Simulate typewriter effect
function initTypewriterEffect() {
    const elements = document.querySelectorAll('.typing-text p, .typing-text h1');
    
    elements.forEach((element, index) => {
        const text = element.textContent;
        element.style.width = '0';
        
        setTimeout(() => {
            element.style.animation = `typing 1s steps(${text.length}) forwards, blink 0.5s step-end infinite alternate`;
            element.style.width = 'auto';
        }, index * 1000);
    });
}

// Fade in elements as they come into view
function fadeInElements() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Add animation to burger menu for mobile navigation
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    if (burger) {
        burger.addEventListener('click', () => {
            const line1 = burger.querySelector('.line1');
            const line2 = burger.querySelector('.line2');
            const line3 = burger.querySelector('.line3');
            
            line1.classList.toggle('rotate-down');
            line2.classList.toggle('fade-out');
            line3.classList.toggle('rotate-up');
        });
    }
}); 