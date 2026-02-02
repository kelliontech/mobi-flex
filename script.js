// ============================================
// INTERACTIVE GIF FEATURES
// ============================================

// Add hover effect to service cards for GIF animation
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const gif = card.querySelector('.service-animation');
        if (gif) {
            gif.style.transform = 'scale(1.1)';
            gif.style.transition = 'transform 0.3s ease';
        }
    });

    card.addEventListener('mouseleave', () => {
        const gif = card.querySelector('.service-animation');
        if (gif) {
            gif.style.transform = 'scale(1)';
        }
    });
});

// Trigger GIF reload on hover for continuous animation
document.querySelectorAll('.portfolio-gif, .service-animation, .about-gif').forEach(gif => {
    gif.addEventListener('mouseenter', function() {
        // Restart GIF by forcing browser to reload
        const src = this.src;
        this.style.opacity = '0.8';
    });

    gif.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
});

// Add lazy loading for GIFs
document.querySelectorAll('.portfolio-gif, .service-animation, .about-gif').forEach(gif => {
    if ('loading' in gif) {
        gif.loading = 'lazy';
    } else {
        // Fallback for older browsers
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    imageObserver.unobserve(entry.target);
                }
            });
        });
        imageObserver.observe(gif);
    }
});

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ============================================
// PORTFOLIO FILTERING
// ============================================

const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter items
        const filterValue = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            item.classList.add('hidden');
            
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hidden');
                // Add animation
                setTimeout(() => {
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.style.animation = 'slideInUp 0.5s ease';
                    }, 10);
                }, 0);
            }
        });
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form
    if (!name || !email || !subject || !message) {
        showMessage('Please fill in all fields', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }

    // Prepare submit button state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Check for configured endpoint in config.js (Formspree or similar)
    const endpoint = (window.siteConfig && window.siteConfig.contactForm && window.siteConfig.contactForm.endpoint) || '';

    if (endpoint) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
        // Optional: include reply-to so Formspree/receiver can reply
        formData.append('_replyto', 'mobiflex@gmail.com');

        fetch(endpoint, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                showMessage('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
            } else {
                response.json().then(data => {
                    showMessage(data?.error || 'There was an error sending your message. Please try again later.', 'error');
                }).catch(() => {
                    showMessage('There was an error sending your message. Please try again later.', 'error');
                });
            }
        }).catch(() => {
            showMessage('Network error. Please try again later.', 'error');
        }).finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });

    } else {
        // Fallback: open user's email client with prefilled message
        const mailto = `mailto:${window.siteConfig?.company?.email || 'mobiflex@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailto;
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        showMessage('No server endpoint configured — opened your mail client. To enable direct email sending, add a Formspree endpoint to `config.js`.', 'success');
    }
});

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = type;
    
    setTimeout(() => {
        formMessage.className = '';
        formMessage.textContent = '';
    }, 5000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ============================================
// SMOOTH SCROLL OFFSET FOR FIXED NAV
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// SCROLL EFFECT ON NAVBAR
// ============================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ============================================
// NUMBER COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

// Trigger counter animation when section is in view
const aboutSection = document.querySelector('.about');
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat h3').forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

aboutObserver.observe(aboutSection);

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// ============================================
// PARALLAX EFFECT ON HERO
// ============================================

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Add loading state to buttons
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.style.opacity = '0.7';
    } else {
        button.disabled = false;
        button.style.opacity = '1';
    }
}

// Log page views (for analytics integration)
function logPageView() {
    console.log('Page viewed:', window.location.pathname);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    logPageView();
    console.log('Website loaded successfully!');
});
