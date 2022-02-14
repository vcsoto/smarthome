 var swiper = new Swiper(".mySwipertop", {
     spaceBetween: 20,
     speed: 500,
     loop: true,
     centeredSlides: true,
     /*autoplay: {
         delay: 4500,
         disableOnInteraction: false,
         pauseOnMouseEnter: true,
     },*/
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
 });