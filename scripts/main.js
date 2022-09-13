const swiper = new Swiper('.swiper', {
  // Default parameters
  speed: 700,
  slidesPerView: 2,
  spaceBetween: 15,
  pagination: {
    el: ".swiper .swiper__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper__btn_next",
    prevEl: ".swiper__btn_prev"
  },
  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',
  parallax: true,
  autoplay: {
    delay: 8000,
  },
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //     slidesPerGroup: 2,
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     slidesPerGroup: 2,
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 15,
  //     slidesPerGroup: 2,
  //   }
  // }
})
