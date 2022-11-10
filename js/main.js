const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });// gsap.to(요소, 지속시간, 옵션);
    // 버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기!
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간[ms])


// 버튼 페이지 상단 이동
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// 서서히 나타나는 애니메이션(Fade-in) 
const FadeEls = document.querySelectorAll('.visual .fade-in');
FadeEls.forEach(function (fadeEl, index) { // 반복되는 횟수를 인덱스로 받아옴
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 첫번쨰 0.7s 후 동작, 두번쨰 1.4s 후 동작, 2.1s 2.7s
    opacity: 1
  });
});



// 공지사항 스크롤바 슬라이드 new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

// 프로모션 이미지 슬라이드 (horizental이 기본값 좌,우 슬라이드))
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 루프 처리
  autoplay:{ // 자동 슬라이드 변경
    delay: 5000 // 5s
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



// 스타벅스 프모모션 토글 요소 클릭하면 하단의 프로모션 닫고 열기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHdiePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHdiePromotion = !isHdiePromotion
  if (isHdiePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  } else{
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// floating object 제어
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간(s), 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
    y: size,// y축
    repeat: -1, // -1은 무한반복
    yoyo: true, // 한번 재생된 애니메이션을 위로 재생함
    ease: Power1.easeInOut, // easing애니메이션
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // .Scene : 자바스크립트 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 요소가 뷰포트의 어떤 지점에서 감시되었다는 판단하는 옵션
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});