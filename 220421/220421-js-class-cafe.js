/*

* 커피원두 : 20000
* 우유 : 30000
* 물 : 100
* 설탕 : 3000
* 시럽 : 200
* 시나몬 : 500
* 빨대 : 1000
* 머그컵 : 300000
* 플라스틱컵 : 1000000
* 얼음 : 200000

*/

const materialObj = {
  coffeWondu : 20000,
  milk : 30000,
  water : 100,
  sugar : 3000,
  syrup : 200,
  cinamon : 500,
  straw : 1000,
  mugcup : 300000,
  plasticCup : 1000000,
  ice : 200000
}


const americano = {
  one : materialObj.coffeWondu,
  two : materialObj.water,
  three : materialObj.plasticCup
}

const jueunCoffee = {
  wondu : materialObj.coffeWondu,
  milk : materialObj.milk,
  sweet : materialObj.sugar,
  cup : materialObj.mugcup
}

let americanoPrice = americano.one + americano.two + americano.three;
// console.log(americanoPrice);
// console.log(americanoPrice + materialObj.ice); //아이스 아메리카노 값

// console.log(materialObj);

let jueunCoffePrice = jueunCoffee.wondu + jueunCoffee.milk + jueunCoffee.sweet + jueunCoffee.cup;
// console.log(jueunCoffePrice);

const smoothieObj = {
  melon : 5000,
  apple : 3000,
  strawberry : 6000,
  banana : 2000,
  chocosyrup : 4000,
  sugar : 1000,
  water : 500,
  milk : 2000,
  ice : 100
}

const bananaSmoothie = {
  material1 : smoothieObj.banana,
  material2 : smoothieObj.chocosyrup,
  material3 : smoothieObj.milk,
  material4 : smoothieObj.ice
}

let bananaSmoothiePrice =
bananaSmoothie.material1 + bananaSmoothie.material2 + bananaSmoothie.material3 + bananaSmoothie.material4;

if(bananaSmoothiePrice > 10000) {
  console.log(`바나나 스무디 값은 ${bananaSmoothiePrice}원 입니다. 주문하시겠습니까?`);
} else {
  console.log(`${bananaSmoothiePrice}원 입니다. 주문 도와드리겠습니다.`)
}
// console.log(bananaSmoothiePrice);

let strawbaSmoothiePrice = smoothieObj.strawberry + smoothieObj.banana + smoothieObj.milk + smoothieObj.sugar + smoothieObj.ice;
// console.log(strawbaSmoothiePrice);

let melonJuicePrice = smoothieObj.melon + smoothieObj.water + smoothieObj.ice + smoothieObj.sugar;
// console.log(melonJuicePrice);