const partnersSlider = new Swiper(".swiper", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper__btn_next",
    prevEl: ".swiper__btn_prev"
  },
  speed: 700,
  breakpoints: {

    760: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 25,
      slidesPerGroup: 2,
    }
  },

  a11y: false,
  keyboard: true,
  a11y: false,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {

    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.querySelector('.swiper-slide__link').tabIndex = '-1';
        } else {
          slide.querySelector('.swiper-slide__link').tabIndex = '';
        }
      });
    },

    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.querySelector('.swiper-slide__link').tabIndex = '-1';
        } else {
          slide.querySelector('.swiper-slide__link').tabIndex = '';
        }
      });
    }
  }
});
