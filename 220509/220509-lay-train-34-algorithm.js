
// 1. let a = 0;
// 변수 a는 숫자값 0이 되어있다.
// 일정 시간이 지나면 숫자가 1씩 증가한다.
// 2. 숫자가 10이 되면 증가하는 것이 멈춘다.
//--> setInterval() 사용

let a = 0;

let timer = setInterval(function() {
  a++;
  console.log(a);
  if(a === 10) {
    console.log("hello");
    a = 0;
    console.log(a);
    // clearInterval(timer);
  }
}, 100);

