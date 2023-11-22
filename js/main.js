const fadeEls = document.querySelectorAll('.promotion .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .4,
    opacity: 1
  })
});

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
