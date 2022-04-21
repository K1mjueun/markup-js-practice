
// let jueun = "나는 ";
// let text = "조아~";
// let cat = "고양이";
// let dog = "강아지";

// let animal = { //객체가 생겨난 이유
//   cat:"고양이",
//   dog:"강아지",
//   hamster:"햄스터"
// }

// let stringSum = jueun+text;
//변수 stringSum은 변수 jueun과 text를 앞뒤로 합쳤다
//변수 stringSum에 '변수 jueun과 text를 앞뒤로 합쳤다'를 대입했다

// let stringSum = `${jueun}말이야 ${dog}랑 ${cat}를 ${text}해`
// let stringSum = `${jueun}말이야 ${animal.dog}를 ${text}해`

// console.log(animal); //조회
// console.log(typeof jueun);
// console.log(typeof text);
// console.log(stringSum);

/* 자료구조
  알고리즘, 프로그래밍을 하기 따라서 객체, 배열, 변수로 얼마든지 바꾸어 사용해도 된다
* 변수에 작명할 때 “데이터타입”을 살짝 표시해주는 버릇을 가지면 ->
  힘들게 찾을 필요 X
* "animal 변수는 animalObject라는 객체의 무언가를 가져다 쓰겠지 -> 예상할 수 O" */

let pokemon = ["이상해씨", "이상해풀", "이상해꽃", "파이리", "리쟈드", "리자몽"]; // 배열에는 원소(요소 element), length값이 6인 데이터를 변수 pokemon에 대입했다

console.log(pokemon);
console.log(pokemon.length); //배열의 ≫key값≪ 중 길이값을 가져오라는 length라는 property에 접근했다. 가져오라는 것이기 때문에 getter 성격을 갖고 있음
console.log(pokemon[3]);
console.log(pokemon[pokemon.length-1]);
// 마지막 값은 길이값의 -1 = 무조건 마지막 원소

let three = 3;
console.log(pokemon[three]);

let max = `${pokemon[0]} 포켓몬의 최종 진화는 ${pokemon[0+2]}`
console.log(max);

let drinkArray = ['americano', 'chocolatte', 'i-shotchu', 'greentea', 'fruitade', 'bubbletea', 'smoothie'];
let MVfeatrueArray = ['scary', 'bright', 'colorful', 'oversea', 'gloomy', 'party']