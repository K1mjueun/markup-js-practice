
let value = 0;
//* 변수 선언과 동시에 값을 대입했다 - 초기화했다(init, initialize)

//value = 100; //* 변수 value값을 새로 할당했다 - 대입연산자를 활용(=)
// console.log(value);
//fade효과에 접근하는 시작

//setInterval(function(){}, interval);
//* 첫번째 파라미터(매개변수) 함수, 매개변수자리에 실행할 함수가 자리잡은 것을 "콜백함수"라고 한다 / callback function
// callback function hell : 굉장히 헷갈리는 포인트가 있을 것

let interval = 100;
let timer = setInterval(function() {
  //* 함수를 변수에 담는 행위(코딩 패턴) : 함수 리터럴, 함수 표현식
  //clearInterval하기 위해서 식별이 필요해 변수에 대입했다

  console.log(value);
  value++;
 // value = value + 2; //* value += 2; 같은 의미!

  if(value > 100) {
    clearInterval(timer);
  }
}, interval);