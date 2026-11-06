// 상단헤더 토글버튼 기능만들기
// 변수 선언
const toggleBtn = document.querySelector('.toggle');
const spans = document.querySelectorAll('.toggle span');
const gnbNav = document.querySelector('.gnb');
let mnu = document.querySelectorAll('.gnb > ul > li > a');

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

  
    // 메인 메뉴 클릭시 해당 서브메뉴만 나오게 하기
});

mnu.forEach(function(Item){
  Item.addEventListener('click',function(){
    const sub = Item.nextElementSibling;

    if(sub&&sub.classList.contains('sub')){
      event.preventDefault();
    }

    // 다른 서브메뉴가 보인다면 모두 숨기기
    mnu.forEach(function(otherItem){
      if(otherItem !==Item){
        const otherSub = otherItem.nextElementSibling;

        // 다른 서브메뉴 숨기기
        if(otherSub&&otherSub.classList.contains('sub')){
          otherSub.classList.remove('act');
        }

        const otherIcon=otherItem.querySelector('.fa-angle-down');

        if(otherIcon){
          otherIcon.classList.remove('rotate');
        }
      }
    });

    sub.classList.toggle('act'); //클릭한 서브메뉴 열고 닫기

    // 현재 클릭한 메뉴의 아이콘 회전하기
    const icon = Item.querySelector('.fa-angle-down');
    if(icon){
      icon.classList.toggle('rotate');
    }
  });
});
