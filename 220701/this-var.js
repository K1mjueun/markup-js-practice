
// function a () {
//   let data = "data";
// }
// console.log(data);
// //함수 영역 안의 변수는 바깥으로 꺼내올 수가 없다

// var a = "바 입니다";
// var a = "어라?";
// console.log(a);

// let b = "렛 입니다";
// b = "마음이 변했습니다";
// console.log(b);

// const c = "대입을 무언가 해주어야 한다";
// const c = "중복 에러";

function one(element) {
  element.addEventListener('click', function() {
    console.log(this);
  });
};

function two(element) {
  element.addEventListener('click',()=> {
    console.log(this);
  });
};

function three(element) {
  let getValue = element.map(element => element);
  // js 통달한 사람들이 빨리 써야될때 이렇게 쓰기도 함
  // 화살표 함수는 매개변수가 하나일 때 소괄호를 안써도 된다
}