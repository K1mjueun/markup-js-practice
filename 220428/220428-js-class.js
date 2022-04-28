console.log("test");

console.log(21645645+545615);
console.log(2165+5456*215/5);

let one = 32694;
let two = 12315;
let three = 57895;
console.log(one + two);
console.log(three + two);

function sum(front, back)//front, back(값이 들어갈 함수의 입구 자리)을 매개변수,parameter,param,인자 라고 한다

//"첫번째 매개변수 뭐야?"-이런식으로 말하니 어휘를 알 필요가 있다!
{
  return front + back;
//값은 무엇인지 모르겠지만, 어쨋거나 front, back을 더해(라는 기계를 만듦)
  //이 기계의 주 목적은 return, 뱉어내는 것
}
console.log(sum(1,2)); //sum(입구자리에 배치될 값)은 argument,인수 라고 한다

function sum(front, back) {
  // 이 기계의 목적은 덧셈이 아니라 콘솔을 찍는 것
  console.log(front+back);
}
sum(2,3);

//* 함수 안에 콘솔을 찍는 경우가 인터넷에 굉장히 많다.
//* 디버깅 때문에 쓰는 일인데, 알고리즘 상으 로는 "기록하는 명령"이 기계로 들어간 것(??헷갈린다)

function sum(front, back) {

  if(typeof front === true) {

    let result = front + back;
    // return result;
    return "만두 메롱";
  } else {
    console.log("당신이 작성한 front 매개변수는 타입이 숫자가 아닙니다.");
  }

}

console.log(sum("만두",3));

//* 사용자 함수는 "제한없이" 기계를 만들 수 있다
//* 내장 함수는 "조건을" 살펴보아야 한다 - 내장함수를 건드는 경우는 보통 없고, 건들 경우 팀원들이 못알아보고 굉장히 불편하다