/**
 * Rewardive - Main JavaScript File
 * Handles navigation, smooth scrolling, and interactive features
 */

// ============================================
// DOM Elements
// ============================================
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

// ============================================
// Mobile Navigation
// ============================================
/**
 * Show mobile navigation menu
 */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
}

/**
 * Hide mobile navigation menu
 */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    });
}

/**
 * Close mobile menu when a nav link is clicked
 */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});

/**
 * Close mobile menu when clicking outside
 */
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('show') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)) {
        navMenu.classList.remove('show');
        document.body.style.overflow = '';
    }
});

// ============================================
// Header Scroll Effect
// ============================================
/**
 * Add shadow to header on scroll
 */
function scrollHeader() {
    if (header) {
        if (window.scrollY >= 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// Only run on home page
if (document.querySelector('.hero')) {
    window.addEventListener('scroll', highlightActiveSection);
}

// ============================================
// Scroll Reveal Animation
// ============================================
/**
 * Reveal elements on scroll with fade-in animation
 */
function scrollReveal() {
    const reveals = document.querySelectorAll('.feature-card, .step, .network-badge, .what-card, .value-item');

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize reveal elements with hidden state
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.feature-card, .step, .network-badge, .what-card, .value-item');

    reveals.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    });

    // Initial check
    scrollReveal();
});

window.addEventListener('scroll', scrollReveal);

// ============================================
// Form Validation (if forms are added later)
// ============================================
/**
 * Generic form validation function
 * @param {HTMLFormElement} form - The form element to validate
 */
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }

        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });

    return isValid;
}

// ============================================
// Lazy Loading Images (Best Practice)
// ============================================
/**
 * Lazy load images for better performance
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }

                imageObserver.unobserve(img);
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Keyboard Accessibility
// ============================================
/**
 * Handle keyboard navigation
 */
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Focus trap in mobile menu
    if (navMenu.classList.contains('show')) {
        const focusableElements = navMenu.querySelectorAll(
            'a[href], button:not([disabled])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }
});

// ============================================
// Performance Monitoring (Optional)
// ============================================
/**
 * Log page load performance metrics
 */
window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

        // Only log in development (remove in production)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('Page Load Time:', pageLoadTime + 'ms');
        }
    }
});

// ============================================
// Utility Functions
// ============================================
/**
 * Debounce function to limit function execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll events with throttle
const optimizedScrollHandler = throttle(() => {
    scrollHeader();
    highlightActiveSection();
    scrollReveal();
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// ============================================
// Service Worker Registration (for PWA - Optional)
// ============================================
/**
 * Register service worker for offline functionality
 * Uncomment when service worker is implemented
 */
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
*/

// ============================================
// Analytics Integration Point
// ============================================
/**
 * Track page views and user interactions
 * Integrate with Google Analytics, Mixpanel, etc.
 */
function trackEvent(eventName, eventData = {}) {
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }

    // Example: Custom analytics
    console.log('Event tracked:', eventName, eventData);
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        trackEvent('button_click', {
            button_text: e.target.textContent.trim(),
            page: window.location.pathname
        });
    });
});

// ============================================
// Console Welcome Message
// ============================================
console.log(
    '%cWelcome to Rewardive! 💳',
    'color: #6366f1; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cMaximize your card benefits and never miss a deal.',
    'color: #6b7280; font-size: 14px;'
);

// ============================================
// Export functions for potential module usage
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        throttle,
        validateForm,
        trackEvent
    };
}
