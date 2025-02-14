function initializeSlider(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const slides = container.querySelectorAll(".slide");
  const prevButton = container.querySelector(".prev");
  const nextButton = container.querySelector(".next");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  if (nextButton) nextButton.addEventListener("click", nextSlide);
  if (prevButton) prevButton.addEventListener("click", prevSlide);

  setInterval(nextSlide, 5000);
}

initializeSlider(".slider-container");


// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll(".testimonials .slide");
//     const prevButton = document.querySelector(".testimonials .prev");
//     const nextButton = document.querySelector(".testimonials .next");
//     let currentSlide = 0;

//     function showSlide(index) {
//         slides.forEach(slide => slide.classList.remove("active"));
//         slides[index].classList.add("active");
//     }

//     function nextSlide() {
//         currentSlide = (currentSlide + 1) % slides.length; 
//         showSlide(currentSlide);
//     }

//     function prevSlide() {
//         currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
//         showSlide(currentSlide);
//     }

//     nextButton.addEventListener("click", nextSlide);
//     prevButton.addEventListener("click", prevSlide);

    
//     setInterval(nextSlide, 5000);
// });
