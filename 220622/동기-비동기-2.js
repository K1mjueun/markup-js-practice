
let mandoo = 100;

// work .1 "1초 뒤에" 1번 행동에는 mandoo가 10이 덧셈되고 콘솔에 출력된다 / 110
// work .2 "1초 뒤에" 2번 행동에는 mandoo를 30을 빼고 콘솔이 출력된다 / 80
// todo : 총 2초간 두번의 계산을 진행시킨다

function first() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      mandoo = mandoo + 10;
      console.log(mandoo);
      resolve();
    },1000);
  });
}

first()
  .then(function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        mandoo = mandoo - 30;
        console.log(mandoo);
        resolve();
      },1000);
    });
  }) 