document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-btn');
    const menuLinks = document.querySelectorAll('.nav-links ul li a');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    });

    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !hamburgerMenu.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });
});