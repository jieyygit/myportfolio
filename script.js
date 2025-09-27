document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navlink");

  function activateNavLink() {
    let scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").replace("#", "") === section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateNavLink);
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll(".navlink").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinkEls = document.querySelectorAll(".navlink");

  function activateNavLink() {
    let scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinkEls.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").replace("#", "") === section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateNavLink);
});


document.addEventListener("DOMContentLoaded", function () {

  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => observer.observe(el));
});

