const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav .nav__item .nav__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav--active');
});

navLinks.forEach((el) => {
  el.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
  });
});

// projects
const projectDetailsBtns = document.querySelectorAll('.project__show-btn');
const projectsContainer = document.querySelector('.projects__content');
projectsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('project__show-btn')) {
    if (event.target.parentNode.classList.contains('is-active')) {
      event.target.parentNode.classList.toggle('is-active');
    } else {
      projectDetailsBtns.forEach((el) => el.parentNode.classList.remove('is-active'));
      event.target.parentNode.classList.toggle('is-active');
    }
  }
});
