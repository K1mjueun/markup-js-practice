
//* 기명함수
//선언(declaration)
function typeA() {

}
//↑ 전역 스코프 (global)

//호출(calling)
typeA();



//* 익명함수(anonymous fuction / 함수 literal)
//* = 함수 표현식(function expression)
//* -> 익명함수 사용을 권장 - 제작자만 원리를 알아 보안상 좋음
const typeB = function() {
  //익명함수에 스티커(const)를 붙인것!
}

typeB();


//! 아주 많이 쓰는 함수
//* 화살표 함수(arrow function)
//* 함수 표현식과 같은 기능이지만 축약형이다
//* -> 축약한 이유는 개발자들이 귀찮, 특정 작동 때문(최신 문법)
const typeC = () => {}
//비교연산자랑 헷갈리지 않기! 비교연산자는 꺽쇄가 먼저 나온다 >=
//const typeC = function() {}와 같음
const typeE = a => {}
//* 매개변수가 하나일때는 소괄호도 생략해도 된다

