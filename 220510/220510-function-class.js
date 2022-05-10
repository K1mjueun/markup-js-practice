
//* 고차함수(higher order fuction)
//* -> 제작자가 만드는 것
//* 작성법이 아니라 알고리즘 제작법이다

function typeA() {
  console.log('Mandoo is so cute');
}

//↓ 고차함수의 기본형이라고 할 수 있다
function typeB() {
  //함수 typeB의 알고리즘은
  //어떤 문자열을 콘솔에 찍은 다음 typeA() 함수를 호출해준다
  typeA();
  console.log('만두는 귀여워');
}
typeB();
//* 함수는 언제나 어디서 선언해도 불러낼 수 있다








//* event 세개를 한번에 typeC 함수에 바인딩한 것
//* 함수로 바인딩 되었다
//얘도 고차함수야
function typeC(target) {
  //뭐가 들어올진 모르겠지만 target을 쓰겠따
target.addEventListener('click', function() {});
target.addEventListener('scroll', function() {});
target.addEventListener('wheel', function() {});

//이렇게도 쓴다
target.addEventListener('click', ()=>{});
target.addEventListener('scroll', ()=>{});
target.addEventListener('wheel', ()=>{});
}
typeC(root);
typeC(items);








//* 함수를 객체로 묶어서 관리하는 방식
//* 언제든지 꺼내쓸 수 있도록 '리팩토링'한다
const typeP = {
  objectA: function(string) {
    console.log(string);
  },
  objectB: function() {

  }
}
typeP.objectA(hello);







// console.log(console);