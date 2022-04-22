
const arr = ["자몽에이드", "청포도에이드", "레몬에이드", "복숭아에이드", "자두에이드"];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr.length);

let indexValue = 0; // 인덱스 자리에 사칙연산을 쓰기 위해 변수를 만들어주었다
// setTimeout(function() {

//   console.log(arr[indexValue]);
//   indexValue++

//   if(indexValue === arr.length) {
//     clearTimeout(indexValue);
//   }

// }, 5000);
let count = 0;
let timer = setInterval(function() {

  if(indexValue < arr.length) {
    console.log(arr[indexValue]);
    indexValue++;
  }
  else {
    indexValue=0;
    count++;
  }

  if(count > 2) {
    clearInterval(timer);
  }

}, 1000);
//슬라이더가 작동하는 원리!
