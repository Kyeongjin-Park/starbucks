const searchEl = document.querySelector('.search'); // 여기서 말하는 document는 html을 이야기함 (!DOCTYPE)
const searchInputEl = searchEl.querySelector('input');

// 돋보기 아이콘을 클릭할 경우 포커스 
searchEl.addEventListener('click', function() {
  //Logic..
  searchInputEl.focus();
});

// 포커스 될 경우 '통합검색'이라는 글씨가 나오게 함 (클래스 추가)
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색')
});

// 포커스 해제시 포커스 된 부분 지우기
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '')
});




// 년도 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해의 숫자가 출력