
let a = 1;
let b = 1;
let c = 2;

// function valueTest() {
//   if(typeof a === "number"){
//     console.log("변수 a는 데이터타입이 숫자입니다.");
//   // } else if(typeof b === "number") {
//   //   console.log("변수 b는 데이터타입이 숫자입니다.");
//   }
//   else {
//     //if와 else if둘다 아닌 경우
//     console.log("변수 a는 숫자타입이 아닙니다.");
//   }
//   if(typeof b === "number") {
//     console.log("변수 a는 데이터타입이 숫자입니다.");
//   }
//   else {
//     console.log("변수 a는 숫자타입이 아닙니다.");
//   }
// }
// valueTest();














// function valueTestTwo() {
//   // if(typeof a === "number" && typeof b === "number") {
//   //첫번째와 두번째가 모두 true여야 참이다 / && : and 연산자

//   if(typeof a === "number" || typeof b === "string") {
//   //첫번째 또는 두번째 둘 중 하나만 true여도 참이다 / || : or 연산자
//   console.log("변수 a와 b는 모두 number 타입입니다");
//   } else {
//   console.log("다 모르겠는데, 둘 중 하나이거나 둘다 number가 아닌 수 있습니다.")
//   }
// }
// valueTestTwo();

function valueTestThree() {
  if(typeof a === "string") {
    console.log('참이 실행되었습니다');

  } else {
    if(typeof a === "number") {
      console.log("a는 number입니다");

      if(a === 1) {
        console.log("a는 1입니다")
      } else {
        console.log("a는 1이 아닙니다")
      }

    } else {
      console.log("a는 number가 아닙니다");
    }
    //if나 else중 하나가 메인 알고리즘인 경우가 많다
  }
}
valueTestThree();