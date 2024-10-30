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

