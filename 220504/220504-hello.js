
// * ▽ 이름이 있다고 하여 기명함수 방식이라고 말한다, 함수 선언 방식
// function textMachine(startValue, endValue, textValue) {

//   for(let i = startValue; i <= endValue; i++) {
//     console.log(textValue);
//   먼저 해결되야하는 것
//   }

//   return "만두 메롱";
//   return값은 위의 함수가 에러없이 실행되었을 때만 등장할 수 있다
// }

// textMachine(1, 20, "hello");
// textMachine(3, 10, "bye");

// console.log(textMachine(2,2,"test"));

//-----------------------------------------------

// function textMachine(startValue, endValue, textValue) {
//   let result = textValue;

//   for(let i = startValue; i <= endValue; i++) {
//   }
//   return result;
// }

// console.log(textMachine(1,2,"콘솔"));
// textMachine(1,2,"콘솔");

//--> 함수를 실행했을 뿐 값을 도출한 것은 아니다
//return은 값이 나오는 용

//--------------------------------------------------

// function a() {
//   console.log("test");
//   return "메롱";
// }
// a();
//console.log(a());

//--------------------------------------------------

function b (first, second) {
  console.log(first + second);
  // return first + second;
}
b(1,2); // --> 함수가 실행되면 콘솔을 찍어줘(??)
console.log(b(1,2)); //--> 함수를 실행한 결과값을 찍어줘