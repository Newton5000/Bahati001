// Hamburger menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Accordion panels
const accordionPanels = document.querySelectorAll(".accordion-panel");

accordionPanels.forEach((panel) => {
  const header = panel.querySelector(".panel-header");
  header.addEventListener("click", () => {
    panel.classList.toggle("active");
  });
});

// Gallery carousel
const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slide");
const prevBtn = carousel.querySelector(".prev");
const nextBtn = carousel.querySelector(".next");
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[n].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Countdown timer
const countdown = document.querySelector(".countdown");
const targetDate = new Date("2024-06-30T00:00:00");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;

  if (distance < 0) {
    clearInterval(countdownInterval);
    countdown.innerHTML = "Offer has expired";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Other functionality
// ...
