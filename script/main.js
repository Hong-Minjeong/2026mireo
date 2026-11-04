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
// tab_list[0].classList.add('t_on');
// tcon[0].style.display='block';

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
  m_img.forEach(img => {
    // 보이는 이미지 숨기고
    img.style.opacity = 0;
    // img.classList.remove('active');
  });

  // 콘트롤 버튼 서식 제거
  c_btn.forEach(btn => {
    btn.classList.remove('on');
  });

  // n값이 0라면(첫) 슬라이드라면)
  if (n === 0) {
    n = 3;
  } else {
    // 1씩 감소하여 이전 슬라이드가 나오게 한다.
    n--;
  }

  //인덱스값(n)에 해당하는 콘트롤 버튼에 on 서식 적용
  c_btn[n].classList.add('on');
  m_img[n].style.opacity = 1;
  // m_img[n].classList.add('active');
}

// 매3초마다 함수를 반복 호출하여 실행
let Timer = setInterval(fadeInOut, 3000);

// 콘트롤 버튼에 마우스 오버시 시간을 제거
c_btn.forEach(btn => {
  btn.addEventListener('mouseenter', function () {
    clearInterval(Timer);
  });
});

// 콘트롤 버튼에 마우스 아웃시 시간을 생성
c_btn.forEach(btn => {
  btn.addEventListener('mouseleave', function () {
    Timer = setInterval(fadeInOut, 3000);
  });
});

// 콘트롤 버튼을 클릭시 해당 슬라이드 이미지가 나오도록 함
c_btn.forEach((btn, idx) => {
  btn.addEventListener('click', function () {
    n = idx;
    console.log(n);

    // 보이는 이미지 모두 숨기고
    m_img.forEach(img => {
      // 보이는 이미지 숨기고
      img.style.opacity = 0;
      // img.classList.remove('active');
    });

    c_btn.forEach(btn => {
      btn.classList.remove('on');
    });

    // 해당 n번째 이미지 나오게 하기
    c_btn[n].classList.add('on');
    m_img[n].style.opacity = 1;
    // m_img[n].classList.add('active');
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
  clearInterval(Timer);
  Timer = setInterval(fadeInOut, 3000);
});

//3.탭 콘텐츠 구현하기
// 켰을때 div 태그에 각 기능을 적용
// tcon.forEach((el,index)=>{
//   if(index===0){
//     el.style.display="block";
//     tab_list[index].classList.add('t_on');
//   }else{
//     el.style.display="none";
//     tab_list[index].classList.remove('t_on');
//   }
// })

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
      tcon[i].parentElement.parentElement.parentElement.parentElement.style.height = '750px';
    } else {
      tcon[i].parentElement.parentElement.parentElement.parentElement.style.height = '600px';
    }
  });
});

// 이벤트 슬라이드
const eSlide = document.querySelector('#event article');
const eSlideList = document.querySelectorAll('.eslide li');
const elBtn = document.querySelector('.e_btn li:first-child');
const erBtn = document.querySelector('.e_btn li:last-child');
const eimg_n = eSlideList.length;
const eimg_w = 100;
// 이벤트 숫자 변수
let eTimer = starteTimer();
let ecount = 0;
eSlide.style.width = (eimg_w + 0) * eimg_n - 0 + '%';

//함수 작성
function eslide(n) {
  eSlide.style.left = -(eimg_w + 0) * n + '%';
  ecount = n;
}

// function starteTimer() {
//   return setInterval(function () {
//     if (ecount < eimg_n) {
//       console.log(ecount);
//       eslide(ecount + 1);
//     } else {
//       eslide(0);
//     }
//   }, 3000);
// }

// elBtn.addEventListener('click', () => {
//   console.log('왼쪽버튼');
//   clearInterval(eTimer);

//   if (ecount > 0) {
//     eslide(ecount - 1);
//   } else {
//     eslide(eimg_n - 1);
//   }
//   Timer = startTimer();
// });

// erBtn.addEventListener('click', () => {

// });
