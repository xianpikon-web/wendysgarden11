// script.js

// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when a nav link is clicked
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ===== Navbar Hide/Show on Scroll =====
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    navbar.style.top = "0";
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down
    navbar.style.top = "-100px"; // hide navbar
  } else {
    // Scrolling up
    navbar.style.top = "0"; // show navbar
  }

  lastScroll = currentScroll;
});

// ===== Initialize Swiper Slider =====
const swiper = new Swiper('.slide-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});