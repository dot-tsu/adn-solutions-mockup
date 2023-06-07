// Navbar sticky navigation bar on scroll
window.addEventListener('scroll', function () {
    let navbar = document.querySelector("nav");
    navbar.classList.toggle('sticky', window.scrollY > 0);
})