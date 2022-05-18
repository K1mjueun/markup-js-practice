
// const memberOne = {
//   name : "김주은",
//   gender : "pokemon",
//   age : 25,
//   deskNumber : 3,
//   glasses : false,
//   married : "no",
//   shortHair : true,
//   smartPhone : "Galaxy"
// }

// const memberTwo = {
//   name : "김만두",
//   gender : "dog",
//   age : 8,
//   deskNumber : 0,
//   glasses : false,
//   married : "no",
//   shortHair : true,
//   smartPhone : "none"
// }

// console.log(memberOne.name);
// console.log(memberTwo.name);
// 이렇게 하나하나 만드는 것은 힘들다, 불가능하다 --> 생성자 함수 사용


// * 생성자 함수 : constructor function
// * 객체를 찍어내는 거푸집 틀, 석고뜨기

function Member(name, gender, age, deskNumber, glasses, married, shortHair, smartPhone) {
  //생성자함수는 건들지 말라는 의미로 보통 대문자로 작성한다
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.deskNumber = deskNumber;
  this.glasses = glasses;
  this.married = married;
  this.shortHair = shortHair;
  this.smartPhone = smartPhone;
}

const memberOne = new Member("김호국", "cat", "1", "2", "no", "no", "yes", "iphone");
//new는 새로 만들어주겠다는 의미, {}가 아니지만 new가 붙으면 객체
// console.dir(memberOne);

const testOne = new Date();
// console.dir(testOne);
// console.dir(testOne.getHours());
//날짜, 시간, 연도 등은 기본 내장 생성자 함수

// function ampm(hour, msg) {
// if(hour > 12) {
//   console.log(msg+(hour-12)+"시 입니다");
//   console.log(memberOne.smartPhone);
// } else {
//   console.log("오전 "+hour+"시 입니다");
// }
// };

// ampm(testOne.getHours(), "오후 ");



// function Week(day,hour) {
// this.day = day;
// this.hour = hour;
// this.weekWholeTime = day*hour;
// }

// const weekhours = new Week(7,24);
// console.dir(weekhours.weekWholeTime);


// function Year(year, current, previous) {
// if(year > 2021) {
//   console.log(current + year + "년 입니다");
// } else {
//   console.log(previous + (year-1) + "년 이었습니다");
// }
// };
// Year(testOne.getFullYear(),"현재 ","이전에 ");



function Month(month, sunny, coldwind) {
  if(4 < month < 10) {
    console.log(sunny + month + "월 입니다");
  } else {
    console.log(coldwind + month + "월 입니다");
  }
};
Month(testOne.getMonth(), "햇살이 강한 ", "선선한 바람이 부는 ");
