
//* 뜯어보기

const animatedText =  "I am Mohammad Noushad Siddiqi. I am so curious to make this typed word delay animation. let's hope for the best. I am trying to implement this idea by using animation Api and javascript string methods by using vanila javascript.";
// 변수에 긴 문장을 대입해줬네

const wordDelayDiv = document.querySelector('.word-delay p');
const wordDelaySpan = document.querySelectorAll('.word-delay p span');
//? querySelectorAll은 저 클래스인 태그들을 모두 다 한번에 선택해버리겠다는 건가?
const splittedArray = animatedText.split(" ");
//? split는 뭘까
const space = ' ';
//? 왜 빈 공간으로 둔거지

const animationObjectTransform = [
  {opacity:0,transform : 'translateY(50px)'},
  //translate으로 변화를 주었네
  {opacity:0.5, offset:0.5, transform:'translateY(10px)'},
  //offset
  {opacity:1, offset:1, transform:'translateY(0)'}
];
//? 배열안에 객체를 만든거야?

const animationObjectFade = [
  {opacity:0} , 
  {opacity:0.5, offset:0.5},
  {opacity:1, offset:1}
];
//? 아 뭔가 효과를 골라서 집어넣으려고 만든거 같아

for (let i = 0; i < splittedArray.length; i++) {
  //반복문을 썼구만
  let span = document.createElement('span');
  //새로운 태그를 만들었어
  span.innerHTML = splittedArray[i] + space;
  // ??
  span.style.display = 'inline-block';
  span.style.marginLeft = '10px';
  span.style.opacity = 0;
  wordDelayDiv.appendChild(span);
  //wordDelayDiv의 자식으로 추가했다!

  // animation 
  span.animate(
    //? 추가한 자식에 animate?
    animationObjectTransform,{
        duration:1000,
        fill:'forwards',
           delay:i * 200,
           // easing:'cubic-bezier(0.175, 0.885, 0.32, 1.275) ',
          }
)
                
}