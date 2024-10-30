document.addEventListener('DOMContentLoaded', function() {});

window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    header.style.backgroundColor = window.scrollY > 50 ? '#555' : '#333';
});

const portfolioButton = document.getElementById('portfolio-button');
if (portfolioButton) {
    portfolioButton.addEventListener('click', () => window.location.href = 'about.html');
}

