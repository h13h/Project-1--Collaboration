document.addEventListener('DOMContentLoaded', function() {});

window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    header.style.backgroundColor = window.scrollY > 50 ? '#555' : '#333';
});
