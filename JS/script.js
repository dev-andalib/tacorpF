document.addEventListener("DOMContentLoaded", function () {
    // Toggle menu visibility on small screens
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('nav');
  
    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', function () {
      // Toggle the visibility of the nav menu
      navMenu.style.display = navMenu.style.display === 'none' || navMenu.style.display === '' ? 'block' : 'none';
    });
  
    // Close menu when any menu item is clicked
    const menuItems = navMenu.querySelectorAll('a');
    menuItems.forEach(item => {
      item.addEventListener('click', function () {
        navMenu.style.display = 'none'; // Close the menu when an item is clicked
      });
    });
  
    // Slider functionality (same as before)
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
  });
  


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
