let navbar = document.getElementById('Navbar');
let navlinks = document.querySelector('.nav-item .nav-link');
let Logo = document.getElementById('Logo');
let navbarToggler = document.querySelector('.navbar-toggler-icon'); 
let icon = document.getElementById('nav-icon');
let viewport = window.innerWidth;

// Mobile Navbar JS 
navbarToggler.addEventListener('click', () => {
    navbar.classList.toggle('color-change');
    icon.classList.toggle('fas');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-lg');
    icon.classList.toggle('text-light');

    if (icon.classList.contains('fa-times')) {
        Logo.innerHTML = `<img src="assets/img/logo-white.png" id="logoWhite" alt="ThermAid White Logo">`;
    } 
    else {
        Logo.innerHTML = `<img src="assets/img/logo-red.png" id="logoRed" alt="ThermAid Red Logo">`;
    }
});

function NavBarChange(viewport) {
    if (viewport < 480) { // If mobile media query matches
        navbar.classList.add('scrolled');
        navlinks.classList.add('scrolled');
        navbarToggler .classList.add('text-red');
        Logo.innerHTML = `<img src="assets/img/logo-red.png" id="logoRed" alt="ThermAid Red Logo">`;
    } 
    else {
        // Window Scroll Navbar color switch
        window.onscroll = () => {
            if (document.body.scrollTop >= 40 || document.documentElement.scrollTop >= 40) {
                navbar.classList.add('scrolled');
                navlinks.classList.add('scrolled');
                navbarToggler .classList.add('text-red');
                Logo.innerHTML = `<img src="assets/img/logo-red.png" id="logoRed" alt="ThermAid Red Logo">`;
            } 
            else {
                navbar.classList.remove('scrolled');
                navlinks.classList.remove('scrolled');
                Logo.innerHTML = `<img src="assets/img/logo-white.png" id="logoWhite" alt="ThermAid White Logo">`;
            }
        };
    }
}

NavBarChange(viewport) 
;

