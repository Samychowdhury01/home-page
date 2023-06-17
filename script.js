var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      // Responsive breakpoints
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
    // centeredSlides: true,
    grabCursor: true,
    pagination: {
      el: "#swiper-pagination",
      clickable: true,
    },
  });

