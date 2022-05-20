
const arr = [ "a", "b", "c"];

//* 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?

  // arr.push(arr[0]);
  // arr.unshift(arr[arr.length-1]);
  // console.log(arr);
  //배열 메서드를 여러개 섞어 쓰면 꼬인다

  // arr.push(arr[0]);
  // arr.shift();
  // console.log(arr);
  //직접적인 리터럴 방식은 좋은 방식이 아니다

  // let temp;
  // temp = arr[0];
  // arr.shift();
  // arr.push(temp);
  // console.log(arr);
  //? 변수를 선언한다 !
  //temp는 관습적으로 '잠깐 핸들링용'으로 사용한다

//* 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?

    // let temp;
    // temp = arr[arr.length-1];
    // arr.unshift(temp);
    // arr.pop();
    // console.log(arr);
    //? 변수 temp !

//* 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?

    // let temp;
    // temp = arr[1];
    // arr.unshift(temp);
    // arr.splice(2,1);
    // console.log(arr);
    //? 변수 temp !

