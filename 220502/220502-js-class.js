// console.log('test');

// let one; // 변수 선언은 했지만 값은 무엇을 '가리키지는' 않은 상태
//1;
// * 식별을 위해서 값과 변수를 '대입'하는 과정을 통한다(=/이퀄표시)
// 에러가 없다, 값은 존재하는 상태, 활용이 아직 안된 상태
// -> 변수를 왜 쓰는가?를 생각해볼 수 있다
// -> 변수를 사용하지 않으면 숫자타입 1이라는 이 값을 쓸 방법이 없음
//console.log(one);

//let test = 1;
//* 변수 선언과 동시에 값을 가리켰다(초기화 되었다)
// RAM이라는 메모리에 일단 담긴다 / "식별할 방법 필요" === 변수의 큰 의미

//const two; 변수 선언과 동시에 값도 같이 가리키게 만드는 것이 const의 규칙
//const two = 1;
//console.log(two);
//* 에러가 났다 === 해결만 한다면 무결해진다!

//console.log(1=="1"); //자스의 문제점! 문자1과 숫자1을 구분 못한다(==일 때)
//console.log(1==='1');

// =="동등" 연산자 : 옛날에 쓰던 방식으로 숫자와 문자를 구분 못한다
// ==="일치" 연산자 : 데이터타입까지 모두 구분을 한다

//let a = 1;
//let b = '2투';

//let change = Number(b);
//let change = String(b); // *-> 형변환! 숫자열을 문자열로, 문자열을 숫자열로

//console.log(typeof change);
//console.log( a === b );
//console.log(typeof a === typeof b ); // 데이터 타입이 같다! 숫자다
// *typeof는 많이 쓰세요

//let chae = null;
// null은 값은 존재하지만 비어있는 값을 말한다, 프로그래밍에만 있는 개념 '빈공간'
//console.log(typeof chae);

//let arr = ['피카츄', '라이츄', '파이리', '꼬부기']
//console.log(typeof arr); //array는 사실 객체(object)
//console.log(Array.isArray(arr)); //*배열임을 확인하는 방법

let text = "나는 귀여운 만두의 누나";
console.log(text[7], text[8], text[9]);
console.log(text.length);
