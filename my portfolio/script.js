// ================= MENU TOGGLE =================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ================= ACTIVE NAVBAR & STICKY HEADER =================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Sticky Header
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close Mobile Menu
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ================= TYPING ANIMATION =================

var typed = new Typed(".multiple-text", {
    strings: [
        "Python Full Stack Developer",
        "Software Developer"
    ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
});