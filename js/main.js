// Main JavaScript for Aidan McDowell's Portfolio

// Try to import GitHub integration module (will only work if modules are supported)
let githubModule = null;
try {
    import('./github-integration.js')
        .then(module => {
            githubModule = module;
            // Call the displayGitHubActivity function if successfully imported
            if (typeof githubModule.displayGitHubActivity === 'function') {
                githubModule.displayGitHubActivity('github-activity-list');
            }
        })
        .catch(error => {
            console.warn('GitHub module import failed:', error);
            // Fall back to the simulation function
            fetchGitHubActivity();
        });
} catch (error) {
    console.warn('ES modules not supported, using fallback:', error);
    // Fall back to the simulation function
    fetchGitHubActivity();
}

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
    const contactForm = document.getElementById('contactForm');
    
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
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send the form data to a server
            // For demonstration, let's just log it and show a success message
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
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

// Simulate GitHub activity fetch
function fetchGitHubActivity() {
    // In a real application, you would fetch data from GitHub API
    // This is a simulation for demonstration purposes
    
    const activityData = [
        {
            type: 'push',
            repo: 'data-dashboard',
            time: '3 days ago',
            description: 'Added new visualization widgets'
        },
        {
            type: 'star',
            repo: 'File-Converter',
            time: '1 week ago',
            description: 'Project starred by 5 users'
        },
        {
            type: 'fork',
            repo: 'ml-sentiment-analyzer',
            time: '2 weeks ago',
            description: 'Project forked by another developer'
        },
        {
            type: 'push',
            repo: 'task-tracker',
            time: '3 weeks ago',
            description: 'Implemented user authentication'
        }
    ];
    
    // Check if the GitHub activity section exists
    const activityContainer = document.querySelector('.github-activity-list');
    if (!activityContainer) return;
    
    // Clear existing content
    activityContainer.innerHTML = '';
    
    // Add activity items
    activityData.forEach(activity => {
        const icon = getActivityIcon(activity.type);
        
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <div class="activity-icon">
                <i class="${icon}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-repo">${activity.repo}</div>
                <div class="activity-description">${activity.description}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `;
        
        activityContainer.appendChild(activityItem);
    });
}

// Get icon for activity type
function getActivityIcon(type) {
    switch (type) {
        case 'push':
            return 'fas fa-code-branch';
        case 'star':
            return 'fas fa-star';
        case 'fork':
            return 'fas fa-code-branch';
        default:
            return 'fas fa-code';
    }
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