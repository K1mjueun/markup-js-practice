
let current = 0;

let timer = setInterval(function() {
  //timer같은 역할의 setInterval
  current++;
  console.log(current);
  if(current === 60) {
    //종료는 if문으로 걸어준다!
    console.log("1분이 경과되었습니다");
    clearInterval(timer);
    //타이머를 꺼주는 clearInterval
  }
}, 100);
//ctrl+c 누르면 터미널에선 종료됨

//setInterval, clearInterval은 익명함수! timer라는 변수를 쓴 이유
//setInterval, clearInterval = 시작, 종료
