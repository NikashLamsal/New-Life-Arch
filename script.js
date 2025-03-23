document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-btn');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Toggle sidebar
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        menuIcon.classList.remove('active');
        navLinks.classList.remove('active');
    });

    // Close menu when clicking a link (except dropdown toggle)
    document.querySelectorAll('.nav-links a:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Toggle dropdown in mobile view
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = toggle.parentElement;
            dropdown.classList.toggle('active');
        });
    });
});