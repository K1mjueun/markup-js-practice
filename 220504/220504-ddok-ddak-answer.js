

let a = "똑";
let b = "딱";

// console.log(a);
// console.log(b);

let isStatus = true;
let current = 0;
let timer = setInterval(function() {
if(isStatus === true) {
  console.log(a);
  isStatus = false;
} else {
  console.log(b);
  isStatus = true;
  current++
  console.log(`지금 똑딱이 횟수는 ${current} 입니다.`)
}

if (current === 10) {
  clearInterval(timer);
}
}, 1000);

//let isStatus = true;
// if (isStatus = true) {
//   console.log(a);
//   isStatus = false;

// } else {
//   console.log(b);
//   isStatus = true;
// }