// 페이드인 순차 애니메이션
const fadeEls = document.querySelectorAll('.promotion .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .4,
    opacity: 1
  })
});

// 스크롤 감지
const spyEls = document.querySelectorAll ('.promotion section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .9
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
})

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, //431 해상도 외 레이아웃 뷰 개수
  spaceBetween: 10, //위 slidesPerView 여백
  breakpoints: { //반응형 조건 속성
    431: { //431 이상일 경우
      slidesPerView: 3, // 레이아웃 3열
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 개인정보 체크박스 선택
function checkSelectAll(checkbox) {
  const selectall
  = document.querySelector('input[name="selectall"]');

  if(checkbox.checked === false)  {
    selectall.checked = false;
  }
}

function selectAll(selectAll)  {
  const checkboxes 
     = document.getElementsByName('chkbox');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
}