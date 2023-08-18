// Carousel Setup
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
});


// Carousel Buttons Swap
$(document).ready(function() {
  $("#prev-btn").on("click", function() {
      $(".slick-prev").click();
  });
  $("#next-btn").on("click", function() {
      $(".slick-next").click();
  });
    
});


// // Mobile-Menu Toggle

let isOpen = false;

let barBtn = document.getElementById("barbtn");

barBtn.addEventListener("click", () => {
    event.preventDefault();
    const mobileMenu = document.querySelector(".mobile-menu");
    if (!isOpen) {
        mobileMenu.style.height = `${mobileMenu.scrollHeight}px`;
        isOpen = true;
    } else {
        mobileMenu.style.height = 0;
        isOpen = false;
    }
});
