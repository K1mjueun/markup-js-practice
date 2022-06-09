
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

leftBtn.addEventListener("click", function() {
  let temp;

  temp = imgArr[0];
  //temp에 imgArr 배열 맨 앞 요소 대입
  imgArr.shift();
  //shift - 배열 맨 앞의 요소 제거
  imgArr.push(temp);
  //push - 배열 맨 뒤에 요소 추가
  
  console.log(imgArr);
});

rightBtn.addEventListener("click", function() {
  let temp;

  temp = imgArr[imgArr.length-1];
  //temp에 imgArr 배열 맨 뒤 요소 대입
  imgArr.pop();
  //pop - 배열 맨 뒤의 요소 제거
  imgArr.unshift(temp);
  //unshift - 배열 맨 앞에 요소 추가

  console.log(imgArr);
})