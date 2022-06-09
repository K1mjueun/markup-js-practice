
const root = document.getElementById('root');
const leftBtn = root.children[0];
const rightBtn = root.children[6];

const mockupImg1 = root.children[1];
const mockupImg2 = root.children[2];
const mockupImg3 = root.children[3];
const mockupImg4 = root.children[4];
const mockupImg5 = root.children[5];

const imgArr = [mockupImg1, mockupImg2, mockupImg3, mockupImg4, mockupImg5];

leftBtn.addEventListener("click", function() {
  let temp;

  temp = imgArr[0];
  imgArr.shift();
  //shift - 배열 맨 앞의 요소 제거
  imgArr.push(temp);
  //push - 배열 맨 뒤에 요소 추가
  
  console.log(imgArr);
});

rightBtn.addEventListener("click", function() {
  let temp;

  temp = imgArr[imgArr.length-1];
  imgArr.pop();
  //pop - 배열 맨 뒤의 요소 제거
  imgArr.unshift(temp);
  //unshift - 배열 맨 앞에 요소 추가

  console.log(imgArr);
})