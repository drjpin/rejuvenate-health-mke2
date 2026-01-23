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
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handler
const consultationForm = document.getElementById('consultationForm');

if (consultationForm) {
    consultationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(consultationForm);
        const submitButton = consultationForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            const response = await fetch(consultationForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showNotification('Thank you! We\'ll contact you within 24 hours to schedule your consultation.', 'success');
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
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
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
    
    document.body.appendChild(notification);
    
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

// Phone number click tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked');
    });
});

// Before/After Slider - FIXED to support multiple sliders
document.querySelectorAll('.before-after-images').forEach((container, index) => {
    const slider = container.querySelector('.slider-handle');
    const afterImage = container.querySelector('.after-image');
    const beforeLabel = container.querySelector('.before-label-overlay');
    const afterLabel = container.querySelector('.after-label-overlay');
    
    if (!slider || !afterImage) {
        console.log('Slider ' + index + ' missing elements');
        return;
    }
    
    console.log('Initializing slider ' + index);
    
    let isDragging = false;

    function updateSlider(e, directClick = false) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
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

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        console.log('Slider ' + index + ' mousedown on handle');
    });

    container.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        updateSlider(e, true);
        console.log('Slider ' + index + ' mousedown on container');
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault();
            updateSlider(e);
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            console.log('Slider ' + index + ' mouseup');
            isDragging = false;
        }
    });

    // Touch events
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        console.log('Slider ' + index + ' touchstart on handle');
    });

    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        updateSlider(e, true);
        console.log('Slider ' + index + ' touchstart on container');
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            e.preventDefault();
            updateSlider(e);
        }
    }, { passive: false });

    document.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
        }
    });
});

// Scroll-triggered animations for service sections
const animateObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, animateObserverOptions);

document.querySelectorAll('.service-image-wrapper, .service-content-wrapper').forEach(el => {
    animateOnScroll.observe(el);
});
