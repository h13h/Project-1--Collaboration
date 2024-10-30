document.addEventListener('DOMContentLoaded', function() {});

window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    header.style.backgroundColor = window.scrollY > 50 ? '#555' : '#333';
});

const portfolioButton = document.getElementById('portfolio-button');
if (portfolioButton) {
    portfolioButton.addEventListener('click', () => window.location.href = 'about.html');
}

document.querySelectorAll('.gallery-grid img').forEach(image => {
    image.addEventListener('mouseover', () => image.style.transform = 'scale(1.4)');
    image.addEventListener('mouseout', () => image.style.transform = 'scale(1)');
});

const heroTitle = document.querySelector('#hero h1');
if (heroTitle) {
    heroTitle.addEventListener('click', () => heroTitle.textContent = 'Thanks for visiting!');
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Data has been submitted');
        contactForm.reset();
    });
}

const logo = document.querySelector('.logo img');
logo.addEventListener('mouseover', () => logo.style.width = '130px');
logo.addEventListener('mouseout', () => logo.style.width = '120px');


const mainHeader = document.getElementById('main-header');
mainHeader.addEventListener('mouseover', () => mainHeader.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)');
mainHeader.addEventListener('mouseout', () => mainHeader.style.boxShadow = 'none');

const heroButton = document.getElementById('portfolio-button');
heroButton.addEventListener('mouseover', () => heroButton.style.transform = 'scale(1.1)');
heroButton.addEventListener('mouseout', () => heroButton.style.transform = 'scale(1)');

const footerText = document.querySelector('footer p');
footerText.addEventListener('dblclick', () => footerText.style.opacity = '0.5');

window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight / 2) {
        document.title = 'Keep Exploring the Portfolio!';
    } else {
        document.title = 'Photographer\'s Portfolio';
    }
});

document.querySelectorAll('.gallery-grid figcaption').forEach(caption => {
    caption.addEventListener('mouseover', () => caption.style.color = '#ff6347');
    caption.addEventListener('mouseout', () => caption.style.color = '#555');
});
