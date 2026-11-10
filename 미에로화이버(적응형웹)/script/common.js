// 공통 자바스크립트 common.js
//1. 변수
let gnb = document.querySelectorAll('.gnb > ul > li');
let sub = document.querySelectorAll('.gnb .sub');
let m_area = document.querySelector('main');
let f_area = document.querySelector('footer');
const top_btn = document.querySelector('.top_btn');

//헤더 관련
//메인메뉴 li태그를 각각 클릭시 해당 서브만 보이게 한다.
for (let i = 0; i < gnb.length; i++) {
  //console.log(gnb.length);
  console.log(i); //0~5까지  메뉴 개수  확인~~~

  gnb[i].addEventListener('click', () => {
    //해당 메뉴의 서브메뉴 변수
    const child = gnb[i].children; //메인메뉴(.gnb)의 자손 ul
    console.log(child[1]);

    //li태그안에 있는 .sub모두 숨기기
    for (let j = 0; j < sub.length; j++) {
      sub[j].style.display = 'none';
    }

    //사용자가 선택한 li태그안의 .sub만 나오게 함.
    child[1].style.display = 'block';

    //제이쿼리로 하면
    //$(this).find('.sub').show();
  });
};

//메인영역 클릭시 서브메뉴 숨기기
m_area.addEventListener('click', () => {
  //li태그안에 있는 .sub모두 숨기기
  for (let i = 0; i < sub.length; i++) {
    sub[i].style.display = 'none';
  }
});

//푸터영역 클릭시 서브메뉴 숨기기
f_area.addEventListener('click', () => {
  //li태그안에 있는 .sub모두 숨기기
  for (let i = 0; i < sub.length; i++) {
    sub[i].style.display = 'none';
  }
});

//푸터관련
// 탑버튼 클릭시 상단으로 부드럽게 올라가게 하기
window.addEventListener('scroll', function () {
  let wscroll = window.scrollY;
  if (wscroll > 1400) {
    top_btn.classList.add('show');
  } else {
    top_btn.classList.remove('show');
  }
});
//top_btn
// 1500

top_btn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
