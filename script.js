// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handler (Formspree)
const consultationForm = document.getElementById('consultationForm');

if (consultationForm) {
    consultationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(consultationForm);
        
        // Show loading state
        const submitButton = consultationForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            // Submit to Formspree
            const response = await fetch(consultationForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                showNotification('Thank you! We\'ll contact you within 24 hours to schedule your consultation.', 'success');
                
                // Reset form
                consultationForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showNotification('Oops! Something went wrong. Please call us directly at (414) 295-6045.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Notification System
function showNotification(message, type = 'success') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        backgroundColor: type === 'success' ? '#4CAF50' : '#E57373',
        color: 'white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '9999',
        maxWidth: '400px',
        animation: 'slideIn 0.3s ease',
        fontWeight: '500'
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 1rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.08)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in effect
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Phone number click tracking (for analytics)
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked');
        // In production, you would send this to your analytics
    });
});

// Before/After Slider
// Before/After Slider - supports multiple sliders on same page
const allSliders = document.querySelectorAll('.before-after-images');

allSliders.forEach(container => {
    const slider = container.querySelector('.slider-handle');
    const afterImage = container.querySelector('.after-image');
    const beforeLabel = container.querySelector('.before-label-overlay');
    const afterLabel = container.querySelector('.after-label-overlay');
    let isDragging = false;
    let currentSlider = null;

    function updateSlider(x) {
        const rect = container.getBoundingClientRect();
        const offsetX = x - rect.left;
        const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
        
        slider.style.left = percentage + '%';
        afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        
        if (beforeLabel && afterLabel) {
            const beforeOpacity = Math.max(0, Math.min(1, (90 - percentage) / 90));
            beforeLabel.style.opacity = beforeOpacity;
            
            const afterOpacity = Math.max(0, Math.min(1, (percentage - 10) / 80));
            afterLabel.style.opacity = afterOpacity;
        }
    }

    slider.addEventListener('mousedown', () => {
        isDragging = true;
        currentSlider = container;
    });

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentSlider = container;
        updateSlider(e.clientX);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging && currentSlider === container) {
            updateSlider(e.clientX);
        }
    });

    document.addEventListener('mouseup', () => {
        if (currentSlider === container) {
            isDragging = false;
            currentSlider = null;
        }
    });

    // Touch support
    slider.addEventListener('touchstart', () => {
        isDragging = true;
        currentSlider = container;
    });

    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        currentSlider = container;
        if (e.touches[0]) {
            updateSlider(e.touches[0].clientX);
        }
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging && currentSlider === container && e.touches[0]) {
            updateSlider(e.touches[0].clientX);
        }
    });

    document.addEventListener('touchend', () => {
        if (currentSlider === container) {
            isDragging = false;
            currentSlider = null;
        }
    });
});


// Scroll-triggered animations for service sections
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all service image wrappers and content wrappers
document.querySelectorAll('.service-image-wrapper, .service-content-wrapper').forEach(el => {
    animateOnScroll.observe(el);
});

