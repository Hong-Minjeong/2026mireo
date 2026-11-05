// 상단헤더 토글버튼 기능만들기
// 변수 선언
const toggleBtn = document.querySelector('.toggle');
const spans = document.querySelectorAll('.toggle span');
const gnbNav = document.querySelector('.gnb');

// 토글버튼 확인용 let
let a=0;

// 클릭 이벤트

toggleBtn.addEventListener('click', function() {
  // 토글버튼 자체에 클래스를 토글
  this.classList.toggle('active');

  if(this.classList.contains('active')){ //act클래스가 존재하지 않는다면 서식적용. 그렇지 않다면 서식 미적용
    spans[0].classList.add('act_rotate01');
    spans[1].classList.add('act_none');
    spans[2].classList.add('act_rotate02');
  }else{
    spans[0].classList.remove('act_rotate01');
    spans[1].classList.remove('act_none');
    spans[2].classList.remove('act_rotate02');
  }

  if(a==0){
    gnbNav.style.display ='block';
    a=1;
  }else{
    gnbNav.style.display ='none';
    a=0;
  }

});