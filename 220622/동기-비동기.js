
// 예전 방식
// function text() {
//   return `<div>hello</div>`;
// }

// function section() {
//   return `<section>bye</section>`;
// }

// let timerA = setTimeout(() => {
//   console.log(text());

//   let timerB = setTimeout(() => {
//     console.log(section());
//   },0);
  
// },1000);



function a () {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("지금 함수 a() 실행되었습니다.");
      resolve("귀여운 만두");
    },4000);
  });
}

a()
  .then(function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것입니다. 1")
        resolve(data);
      },1000);
    });
  })
  .then(function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것입니다. 2")
        resolve(data);
      },1000);
    });
  })
  .then(function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것입니다. 3")
        resolve(data);
      },1000);
    });
  })
  .then(function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것입니다. 4")
        resolve(data);
      },1000);
    });
  })
  .then(function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것입니다. 5")
        resolve(data);
      },1000);
    });
  })