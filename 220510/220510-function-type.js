
//* 기명함수
//선언(declaration)
function typeA() {

}
//↑ 전역 스코프 (global)

//호출(calling)
typeA();


//------------------------


//* 익명함수(anonymous fuction / 함수 literal)
//* = 함수 표현식(function expression)
//* -> 익명함수 사용을 권장 - 제작자만 원리를 알아 보안상 좋음
const typeB = function() {
  //익명함수에 스티커(const)를 붙인것!
}

typeB();


//--------------------------


//! 아주 많이 쓰는 함수
//* 화살표 함수(arrow function)
//* 함수 표현식과 같은 기능이지만 축약형이다
//* -> 축약한 이유는 개발자들이 귀찮, 특정 작동 때문(최신 문법)
const typeC = () => {}
//비교연산자랑 헷갈리지 않기! 비교연산자는 꺽쇄가 먼저 나온다 >=
//const typeC = function() {}와 같음
const typeE = a => {}
//* 매개변수가 하나일때는 소괄호도 생략해도 된다


//-----------------------------


//* 즉시 실행 함수
//* 선언, 호출없이 즉시 실행한다
(function() {})();
//문서 시작할 때 이런식으로 쓰는 경우가 왕왕 있다


//-----------------------------


//* 함수의 매개변수 자리에 함수가 들어가 있는 것 "콜백함수"
//* 콜백함수는 익명이 기본이다
//! 매우 많이 사용하기 때문에 눈에 익혀야 한다
let test;
test.addEventListener("type", function() {});

//* 밖으로 빼낸 콜백함수
test.addEventListener('test', testfunction);
// 기명으로 함수를 만들었다
//* 기명으로 함수를 만들 땐 function()<- 소괄호를 쓰지 않는다
function testfunction() {}