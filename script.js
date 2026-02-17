// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false, // Updated to false so animations happen every time
        mirror: true, // Allow animations while scrolling past them (up and down)
        offset: 100,
    });

    // Validated "Supiri" Fake Console Message
    console.log("%c Creative Hub ", "color: #fff; background: linear-gradient(to right, #4f46e5, #db2777); font-size: 20px; padding: 5px; border-radius: 5px;");
    console.log("Built by Antigravity");
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

if (menuBtn && mobileMenu && closeMenuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
        }, 10);
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        // Wait for transition to finish before hiding
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    });

}

// Background Slider
const bgSlider = document.getElementById('hero-bg-slider');
if (bgSlider) {
    const images = bgSlider.querySelectorAll('img');
    let currentIndex = 0;
    const intervalTime = 4000; // 4 seconds

    setInterval(() => {
        // Hide current image (Fade out + Zoom In)
        images[currentIndex].classList.remove('opacity-100', 'scale-100');
        images[currentIndex].classList.add('opacity-0', 'scale-110');

        // Calculate next index
        currentIndex = (currentIndex + 1) % images.length;

        // Show next image (Fade in + Zoom Out)
        images[currentIndex].classList.remove('opacity-0', 'scale-110');
        images[currentIndex].classList.add('opacity-100', 'scale-100');
    }, intervalTime);
}

// Contact Form WhatsApp Integration
const sendMessageBtn = document.getElementById('sendMessageBtn');
if (sendMessageBtn) {
    sendMessageBtn.addEventListener('click', () => {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const service = document.getElementById('serviceSelect').value;
        const message = document.getElementById('message').value.trim();

        if (!firstName || !lastName) {
            alert('Please enter your first and last name.');
            return;
        }

        const whatsappMessage = `*New Inquiry from Website*
Name: ${firstName} ${lastName}
Service: ${service}
Message: ${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/94761681940?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    });
}
