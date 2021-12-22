const searchElement = document.querySelector('.search');
const searchInputEl = searchElement.querySelector('input');
const badgeEl = document.querySelector('header .badges');
const fadeEls = document.querySelectorAll('.visual .fade-in');

searchElement.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',()=>{
  searchElement.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});


searchInputEl.addEventListener('blur',()=>{
  searchElement.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

window.addEventListener('scroll', _.throttle(function (){
  console.log('scroll');
  if(window.scrollY > 500 ){
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display:'none',
    });
  }else{
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block',
    });
  }
},300));

fadeEls.forEach(function(e, i) {
  gsap.to(e, 1,{
    delay: (i + 1) * .7,
    opacity: 1
  });
});