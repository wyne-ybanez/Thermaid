let navbar = document.getElementById('Navbar');
let navlinks = document.querySelector('.nav-item .nav-link');
let Logo = document.getElementById('Logo');

window.onscroll = () => {
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    navbar.classList.add('scrolled');
    navlinks.classList.add('scrolled');
    Logo.innerHTML = `<img src="assets/img/logo-red.png" id="logoRed" alt="ThermAid Red Logo">`
  } 
  else {
    navbar.classList.remove('scrolled');
    navlinks.classList.remove('scrolled');
    Logo.innerHTML = `<img src="assets/img/logo-white.png" id="logoWhite" alt="ThermAid White Logo">`
    
  }
};
