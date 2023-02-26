const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

const menuMobileBtn = document.querySelector('.menu-mobile__btn');
const menuMobileList = document.querySelector('.menu-mobile__list');
menuMobileBtn.addEventListener('click', () => {
  menuMobileList.classList.toggle('menu--open');
});


