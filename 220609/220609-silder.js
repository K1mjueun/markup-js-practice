
const root = document.getElementById('root');
const leftBtn = root.children[0];
const rightBtn = root.children[2];

const slide = document.getElementById('slide');
const mockupImg1 = slide.children[0];
const mockupImg2 = slide.children[1];
const mockupImg3 = slide.children[2];
const mockupImg4 = slide.children[3];
const mockupImg5 = slide.children[4];

const imgArr = [mockupImg1, mockupImg2, mockupImg3, mockupImg4, mockupImg5];
Array.from(imgArr);
console.log(imgArr);

rightBtn.addEventListener("click", function() {
  let temp;
  temp = imgArr[0];

  imgArr.shift();
  //shift - 배열 맨 앞의 요소 제거
  //?mockupImg1이 배열 맨 앞이니까 제거되겠지
  imgArr.push(temp);
  //push - 배열 맨 뒤에 요소 추가
  //?temp를 추가하는 거니까 mockupImg1이 배열 맨 뒤로 추가되겠지

  imgArr[0].style.display = "flex";
  //?배열 맨 앞의 요소는 mockupImg2가 되었으니 mockupImg2의 display가 flex가 되겠지
  imgArr[imgArr.length-1].style.display = "none";
  //?배열 맨 뒤의 요소는 mockupImg1이 되었으니 mockupImg1의 display가 none이 되겠지
  
  console.log(imgArr);
});

leftBtn.addEventListener("click", function() {
  let temp;
  temp = imgArr[imgArr.length-1];
  //left버튼이 무언가 잘못되었다

  imgArr.pop();
  //pop - 배열 맨 뒤의 요소 제거
  //?mockupImg5가 배열 맨 뒤니까 제거되겠지
  imgArr.unshift(temp);
  //unshift - 배열 맨 앞에 요소 추가
  //?temp를 추가하는 거니까 mockupImg5가 배열 맨 앞으로 추가되겠지

  imgArr[0].style.display = "none";
  //?배열 맨 앞의 요소는 mockupImg5가 되었으니 mockupImg5의 display가 none이 되겠지
  imgArr[imgArr.length-1].style.display = "flex";
  //?배열 맨 뒤의 요소는 mockupImg4이 되었으니 mockupImg4의 display가 flex가 되겠지

  console.log(imgArr);
});
