document.addEventListener('DOMContentLoaded', function() {
    // Header background change on scroll
    window.addEventListener('scroll', function() {
        const header = document.getElementById('main-header');
        header.style.backgroundColor = window.scrollY > 50 ? '#555' : '#333';
    });

    // Redirect to "About" page on portfolio button click
    const portfolioButton = document.getElementById('portfolio-button');
    if (portfolioButton) {
        portfolioButton.addEventListener('click', () => window.location.href = 'about.html');
    }

    // Gallery image hover effect
    document.querySelectorAll('.gallery-grid img').forEach(image => {
        image.addEventListener('mouseover', () => image.style.transform = 'scale(1.4)');
        image.addEventListener('mouseout', () => image.style.transform = 'scale(1)');
    });

    // Change text in hero section
    const heroTitle = document.querySelector('#hero h1');
    if (heroTitle) {
        heroTitle.addEventListener('click', () => heroTitle.textContent = 'Thanks for visiting!');
    }

    // Prevent form submission and show alert on contact form submit
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents actual form submission
            alert('Data has been submitted');
            contactForm.reset();
        });
    }

    // Logo resize on hover
    const logo = document.querySelector('.logo img');
    logo.addEventListener('mouseover', () => logo.style.width = '130px');
    logo.addEventListener('mouseout', () => logo.style.width = '120px');

    // Header shadow on hover
    const mainHeader = document.getElementById('main-header');
    mainHeader.addEventListener('mouseover', () => mainHeader.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)');
    mainHeader.addEventListener('mouseout', () => mainHeader.style.boxShadow = 'none');

    // Navigation link color change on hover
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('mouseover', () => link.style.color = '#ff6347');
        link.addEventListener('mouseout', () => {
            if (!link.classList.contains('active')) {
                link.style.color = '#fff';
            }
        });
    });

    // Hero button animation on hover
    const heroButton = document.getElementById('portfolio-button');
    heroButton.addEventListener('mouseover', () => heroButton.style.transform = 'scale(1.1)');
    heroButton.addEventListener('mouseout', () => heroButton.style.transform = 'scale(1)');

    // Footer text fade on double-click
    const footerText = document.querySelector('footer p');
    footerText.addEventListener('dblclick', () => footerText.style.opacity = '0.5');

    // Change page title when scrolled halfway
    window.addEventListener('scroll', function() {
        if (window.scrollY > window.innerHeight / 2) {
            document.title = 'Keep Exploring the Portfolio!';
        } else {
            document.title = 'Photographer\'s Portfolio';
        }
    });

    // Hover effect on gallery captions
    document.querySelectorAll('.gallery-grid figcaption').forEach(caption => {
        caption.addEventListener('mouseover', () => caption.style.color = '#ff6347');
        caption.addEventListener('mouseout', () => caption.style.color = '#555');
    });

    // Set initial background color for hero section on load
    const heroSection = document.getElementById('hero');
    heroSection.style.backgroundColor = '#f0e6ff';

    // Contact form button hover effect
    const contactButton = document.querySelector('#contact-form button');
    if (contactButton) {
        contactButton.addEventListener('mouseover', () => contactButton.style.transform = 'scale(1.05)');
        contactButton.addEventListener('mouseout', () => contactButton.style.transform = 'scale(1)');
    }

    // Active navigation link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Change input border color on keyup
    document.querySelectorAll('#contact-form input, #contact-form textarea').forEach(input => {
        input.addEventListener('keyup', () => input.style.borderColor = '#4a90e2');
    });

    // Increase font size on media-gallery heading hover
    const mediaGalleryHeading = document.querySelector('#media-gallery h2');
    mediaGalleryHeading.addEventListener('mouseover', () => mediaGalleryHeading.style.fontSize = '2.6rem');
    mediaGalleryHeading.addEventListener('mouseout', () => mediaGalleryHeading.style.fontSize = '2.5rem');
});
