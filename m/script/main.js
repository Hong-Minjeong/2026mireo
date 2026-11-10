// 메인 슬라이드 구현

// 메인슬라이드 변수 선언
const m_img = document.querySelectorAll('#visual_slide > div');
const l_btn = document.querySelector('#visual_slide .s_btn>li:first-child');
const r_btn = document.querySelector('#visual_slide .s_btn>li:last-child');
const c_btn = document.querySelectorAll('#visual_slide .ctrl_btn li');
const sBtnArea = document.querySelector('#visual_slide .s_btn');
// 탭콘텐츠 변수 선언
const tab_list = document.querySelectorAll('#tab_con .tcon ul li a');
const tcon = document.querySelectorAll('#tab_con .tcon ul li div');

// 인덱스 값 초기화(콘트롤 버튼 클릭 시 인덱스 값이 0이 첫번째 목록이기 때문에)
let n = 0;

m_img[0].classList.add('active');
c_btn[0].classList.add('on');

// 3초마다 반복 호출을 위한 움직이는 슬라이드 함수
// 오른쪽 버튼
function fadeInOut() {
  // 보이는 이미지 숨기고
  m_img.forEach(img => {
    // 보이는 이미지 숨기고
    img.style.opacity = 0;
    // img.classList.remove('active');
  });
  // 콘트롤 버튼 서식 제거
  c_btn.forEach(btn => {
    btn.classList.remove('on');
  });
  // n값이 마지막 슬라이드라면
  if (n === 3) {
    // 0으로 초기화 후 첫 슬라이드
    n = 0;
  } else {
    // 1씩 증가, 다음 슬라이드
    n++;
  }

  //인덱스값(n)에 해당하는 콘트롤 버튼에 on 서식 적용
  c_btn[n].classList.add('on');

  m_img[n].style.opacity = 1;
  // m_img[n].classList.add('active');
}

// 좌측버튼
function fadeInOut2() {
  m_img.forEach(img => img.style.opacity = 0);

  // 콘트롤 버튼 서식 제거
  c_btn.forEach(btn => btn.classList.remove('on'));

  // n값이 0라면(첫) 슬라이드라면)
  // 아니라면 1씩 감소하여 이전 슬라이드가 나오게 한다.
  if (n === 0) { n = 3; } else { n--; }

  //인덱스값(n)에 해당하는 콘트롤 버튼에 on 서식 적용
  c_btn[n].classList.add('on');
  m_img[n].style.opacity = 1;
}

// 매3초마다 함수를 반복 호출하여 실행
let Timer;

function startTimer(){
  clearInterval(Timer);
  Timer = setInterval(fadeInOut, 3000);
}
startTimer();

// 콘트롤 버튼을 클릭시 해당 슬라이드 이미지가 나오도록 함
c_btn.forEach((btn, idx) => {
  btn.addEventListener('mouseenter', clearInterval(Timer));
  btn.addEventListener('mouseleave', startTimer);

  btn.addEventListener('click', function () {
    n = idx;
    // 보이는 이미지 모두 숨기고
    m_img.forEach(img => img.style.opacity = 0);
    c_btn.forEach(btn => btn.classList.remove('on'));

    // 해당 n번째 이미지 나오게 하기
    c_btn[n].classList.add('on');
    m_img[n].style.opacity = 1;
  });
});

// 좌측, 우측 버튼 클릭 시 각각 해당함수를 호출하여 슬라이드 움직이게 하기 (올리고 있으면 시간 지우고, 떼면 다시 생성)

l_btn.addEventListener('click', function () {
  clearInterval(Timer);
  fadeInOut2();
});

r_btn.addEventListener('click', function () {
  clearInterval(Timer);
  fadeInOut();
});

sBtnArea.addEventListener('mouseenter', function () {
  clearInterval(Timer);
});

sBtnArea.addEventListener('mouseleave', function () {
  console.log('mouseleave 발생'); 
  startTimer();
});

// 사용자가 탭 메뉴를 클릭하면 이벤트가 동작하면서 모든 콘텐츠를 숨기고, 해당 탭메뉴의 콘텐츠만 보이게 한다.
tab_list.forEach((tab, i) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    // 모든 컨텐츠 숨기고, 모든 탭메뉴의 t_on 클래스 서식을 지운다.
    tcon.forEach((content) => {
      content.style.display = 'none';
    });

    tab_list.forEach((t) => {
      t.classList.remove('t_on');
    });


    // 선택한 메뉴에만 t_on 서식을 적용, 바로 뒤에있는 콘텐츠 보이게 함
    tab_list[i].classList.add('t_on');
    tcon[i].style.display = 'block';

    // 만약에 3번 탭 메뉴 클릭 시 부모 박스의 높이가 변해야함.

    if (i === 2) {
      tcon[i].parentElement.parentElement.parentElement.parentElement.style.height = '900px';
      tcon[i].parentElement.parentElement.parentElement.style.height = '750px';

    } else {
      tcon[i].parentElement.parentElement.parentElement.parentElement.style.height = '640px';
      // tabBackgroungImg로 만들어서 해도 됨
      tcon[i].parentElement.parentElement.parentElement.style.height = '600px';
    }
  });
});

// 이벤트 슬라이드
// 5. 이벤트 슬라이드 (모바일)
// const sWrap = document.querySelector('#event .s_wrap');
// const sFigures = document.querySelectorAll('#event .s_wrap figure');
// const prevBtn = document.querySelector('#event .fa-angle-left');
// const nextBtn = document.querySelector('#event .fa-angle-right');
// const figureLength = sFigures.length;   // 3

// let ecount = 0;

// function eslide(i) {
//   ecount = i;
//   sWrap.style.left = -100 * i + '%';
// }

// // 다음 슬라이드
// function nextSlide() {
//   if (ecount < figureLength - 1) {
//     eslide(ecount + 1);
//   } else {
//     eslide(0);
//   }
// }

// // 이전 슬라이드
// function prevSlide() {
//   if (ecount > 0) {
//     eslide(ecount - 1);
//   } else {
//     eslide(eimg_n - 1);
//   }
// }

// function starteTimer() {
//   return setInterval(nextSlide, 5000);
// }

// let eTimer = starteTimer();

// // 버튼 클릭 시: 타이머 리셋 후 이동
// prevBtn.addEventListener('click', () => {
//   clearInterval(eTimer);
//   prevSlide();
//   eTimer = starteTimer();
// });

// nextBtn.addEventListener('click', () => {
//   clearInterval(eTimer);
//   nextSlide();
//   eTimer = starteTimer();
// });

// 수업 따라하면서 작업
const sw = document.querySelector('#event .s_wrap');
const moPrevBtn = document.querySelector('#event .fa-angle-left');
const moNextBtn = document.querySelector('#event .fa-angle-right');
let cont =0;

let sn = document.querySelectorAll('#event .s_wrap figure');
const s_total = sn.length;   // 3

const fig = 100; //슬라이드 한장당 넓이는 100%
sw.style.width = fig*s_total+'%';

// 다음 슬라이드
function nextSlide2() {
  if (cont < s_total - 1) {
    mslide(cont + 1);
  } else {
    mslide(0);
  }
}

// 이전 슬라이드
function prevSlide2() {
  if (cont > 0) {
    mslide(cont - 1);
  } else {
    mslide(s_total - 1);
  }
}

let Timer2;

// 슬라이드 이동 함수
function mslide(n) {
  sw.style.left = fig*-n+'%';
  cont = n;
  // console.log(sw.style.left);
}

function stopTimer2() {
  clearInterval(Timer2);
}

function starteTimer2() {
  clearInterval(Timer2);
  Timer2 = setInterval(nextSlide2, 3000);
}

starteTimer2();

// 좌측 버튼
moPrevBtn.addEventListener('click',function(){
  prevSlide2();
});

// 우측 버튼
moNextBtn.addEventListener('click',function(){
  nextSlide2();
});

moPrevBtn.addEventListener('mouseenter', stopTimer2);
moPrevBtn.addEventListener('mouseleave', starteTimer2);
moNextBtn.addEventListener('mouseenter', stopTimer2);
moNextBtn.addEventListener('mouseleave', starteTimer2);