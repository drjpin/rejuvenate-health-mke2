// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

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
        if (navLinks) navLinks.classList.remove('active');
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Before/After Image Slider
const beforeAfterSlider = document.querySelector('.slider-handle');
if (beforeAfterSlider) {
    const container = document.querySelector('.before-after-images');
    const afterImage = document.querySelector('.after-image');
    const beforeLabel = document.querySelector('.before-label-overlay');
    const afterLabel = document.querySelector('.after-label-overlay');
    let isDragging = false;

    function updateSlider(x) {
        const rect = container.getBoundingClientRect();
        const offsetX = x - rect.left;
        const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
        
        beforeAfterSlider.style.left = percentage + '%';
        afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        
        if (beforeLabel && afterLabel) {
            const beforeOpacity = Math.max(0, Math.min(1, (90 - percentage) / 90));
            beforeLabel.style.opacity = beforeOpacity;
            
            const afterOpacity = Math.max(0, Math.min(1, (percentage - 10) / 80));
            afterLabel.style.opacity = afterOpacity;
        }
    }

    // Make slider handle draggable
    beforeAfterSlider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
    });

    // Make entire container clickable/draggable
    container.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        updateSlider(e.clientX);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault();
            updateSlider(e.clientX);
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch support
    beforeAfterSlider.addEventListener('touchstart', (e) => {
        isDragging = true;
    });

    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        if (e.touches[0]) {
            updateSlider(e.touches[0].clientX);
        }
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches[0]) {
            e.preventDefault();
            updateSlider(e.touches[0].clientX);
        }
    }, { passive: false });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// Scroll-triggered animations for service sections
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.service-image-wrapper, .service-content-wrapper').forEach(el => {
    observer.observe(el);
});

// End of DOMContentLoaded
});
