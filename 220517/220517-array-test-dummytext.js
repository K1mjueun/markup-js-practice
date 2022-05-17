
const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

//*Tip 배열 메서드는 인수가 뭔지, 리턴타입이 뭔지만 알면 이해가 쉽다

// Todo : Q-1. "of" 라는 문자열이 몇번 나오는지 console에 출력하세요.

// let count = 0;
// for(let i = 0; i<dummyText.length; i++) {
//   if(dummyText[i] === "of") {
//     count++;
//   }
// }
// console.log(count);

// let result = dummyText.filter(function(index) {
// = dummyText.filter(index => {});
//   if(index === "of") {
//     count++;
//     return count;
//   }
// });
// console.log(result);
// //*filter는 참일 경우 배열로 반환한다


// Todo : Q-2. "dummy" 라는 문자열 원소를 모두 "sementic" 이라는 단어로 바꾸세요.

// let mapping = dummyText.map(function(value, index) {
//   if(value === "dummy") {
//     value = "sementic";
//   }
//   console.log(dummyText.map);
// });

// 위의 함수를 줄인 것↓
// let test = dummyText.map(value => {if(value === "dummy") {value = "sementic"}});
// //* map은 아주 징그럽게 많이 쓰게 될 것입니다아

// Todo : Q-3. "the" 라는 원소 다음에 "web" 이라는 단어가 추가되도록 배열을 조정하세요.

// dummyText.forEach(function(value, index) {
//   if(value === 'the') {
//     dummyText[index + 1] ="web";
//   }
//   console.log(dummyText);
// });

// Todo : Q-5. 배열 속 원소들의 총 글자 갯수를 console에 출력하세요.

const countTextLength = dummyText.reduce(function(beforeValue, currentValue) {
  return beforeValue + currentValue;
});
  console.log(countTextLength.length);