// 가로 슬라이드
// new Swiper(선택자, 옵션)
new Swiper('.content-02 .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 12, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 // 자동재생 1000이 1초
  }
});
