
let a = 1;
// 파일 내에 있기 때문에 어디서든 꺼낼 수 있다 -> global variable, 전역 변수


function b () {
  //*--> 목적이 콘솔찍고 종료하는 기계, return값은 없다(undefined값이 return됌)
  console.log(a);
  //'콘솔을 찍은것이 아니라 함수를 실행했다'
  let c = "김만두";
  //"김만두"는 함수 내에 있기 때문에 return을 하지 않으면 꺼낼 수 없다
  return c;
}
// 함수는 함수 내에서만 작동하기 때문에 -> local variable, 지역 변수


console.log(b());
//b(); //호출