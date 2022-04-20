
// let a = 1;
// let b =2;
// let result = "값이 다릅니다."

// if(a === b) {
//   console.log('값이 같습니다.');
// } else {
//   console.log(result);
//   //거짓인 경우 변수인 result를 기록하는 행동만 할 뿐,
//   //변수의 값이 무엇인지 관심이 없다
// }

let a = 1;
let b = 2;

if(a !== b) {
  //!==은 부정연산자 = 좌항과 우항이 같지 않으면 참
  //===은 일치연산자 = 좌항과 우항이 같으면 참
  console.log('값이 같습니다.')
} else {
  console.log('값이 다릅니다.')
}