let index = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
const intervalTime = 3000; // Time between slides in milliseconds
let autoSlideInterval;

function showSlide(n) {
  if (n >= totalSlides) {
    index = 0;
  } else if (n < 0) {
    index = totalSlides - 2; // Adjust for the extra duplicated slide
  } else {
    index = n;
  }

  document.querySelector(".carousel").style.transform = `translateX(-${
    index * 100
  }%)`;

  // Reset index after reaching the last slide
  if (index === totalSlides - 1) {
    setTimeout(() => {
      document.querySelector(".carousel").style.transition = "none";
      document.querySelector(".carousel").style.transform = `translateX(0)`;
      index = 0;
      setTimeout(() => {
        document.querySelector(".carousel").style.transition =
          "transform 0.5s ease-in-out";
      }, 20);
    }, 500);
  }
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlide(index + 1);
  }, intervalTime);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(index);
  startAutoSlide();
});
