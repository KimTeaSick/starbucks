const searchElement = document.querySelector('.search');
const searchInputEl = searchElement.querySelector('input');
const badgeEl = document.querySelector('header .badges');
const fadeEls = document.querySelectorAll('.visual .fade-in');
const spyEls = document.querySelectorAll('section.scroll-spy');

searchElement.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  searchElement.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});


searchInputEl.addEventListener('blur', () => {
  searchElement.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

window.addEventListener('scroll', _.throttle(function () {
  console.log('scroll');
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none',
    });
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block',
    });
  }
}, 300));

fadeEls.forEach(function (e, i) {
  gsap.to(e, 1, {
    delay: (i + 1) * .7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
  slidesPerView:0,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container',{
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5, 
  navigator:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

spyEls.forEach((spyEl)=>{
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐의 여부를 감시
      triggerHook: .8,
    })
    .setClassToggle(spyEls, 'show')
    .addTo(new ScrollMagic.Controller());
});

