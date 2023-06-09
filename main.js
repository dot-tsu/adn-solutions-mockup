// Navbar sticky navigation bar on scroll
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Smooth Scrolling
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const duration = 1000; // 1000 milliseconds = 1 second

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(navLink.getAttribute("href"));
      scrollTo(target, duration);
    });
  });

  document.addEventListener("wheel", (event) => {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    const scrollPosition = window.scrollY;
    const scrollAmount = delta * window.innerHeight;
    scrollTo(scrollPosition + scrollAmount, duration);
  });

  function scrollTo(target, duration) {
    const startPosition = window.scrollY;
    let targetPosition;

    if (typeof target === "number") {
      targetPosition = target;
    } else {
      targetPosition = target.getBoundingClientRect().top + window.scrollY;
    }

    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const scrollY = ease(elapsedTime, startPosition, distance, duration);
      window.scrollTo(0, scrollY);
      if (elapsedTime < duration) {
        requestAnimationFrame(animation);
      }
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});
