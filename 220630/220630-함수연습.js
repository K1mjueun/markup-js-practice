
// function one() {

//   console.log("야호");

//   return "메롱";
// }

// console.log(one() === "메롱");

// function realone(ipgoo) {
  
//   if(ipgoo === "바보") {
//     return "바보아니야";
//   } else {
//     return "천재";
//   }
// }

// console.log(realone("바보"));

// function one(ipgoo, ipgootoo) {

//   return ipgoo+ipgootoo
// }

// console.log(one("아버지가 ","방에 들어가신다"));

function one(ipgoo, ipgootoo, count) {
  let strings = `${ipgoo} ${ipgootoo}`
  for(let i = 0; i<count; i++) {
    console.log(strings);
  }
  return "메롱";
}

console.log(one("아버지가","방에들어가신다",5));
// console.log(one("<div>","</div>",5));
// ^ 이렇게 한다면?