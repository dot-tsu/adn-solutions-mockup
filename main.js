// Navbar sticky navigation bar on scroll
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Smooth Scrolling
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (event) => {
      const target = document.querySelector(navLink.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  document.addEventListener("wheel", (event) => {
    const delta = Math.sign(event.deltaY);
    const scrollPosition = window.scrollY;
    window.scrollTo({
      top: scrollPosition + delta * window.innerHeight,
      behavior: "smooth",
    });
  });
});
