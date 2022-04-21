
const material = {
  apple : 2000,
  orange : 5000,
  watermelon : 7000,
  grape : 3000,
  water : 100,
  soda : 1000,
  ice : 50,
  syrup : 500
}

const orangejuice = {
  main:material.orange,
  sub:material.soda,
  sweet:material.syrup,
  cool:material.ice
}

const orangejuicePrice = orangejuice.main + orangejuice.sub + orangejuice.sweet + orangejuice.cool ;
// console.log(orangejuicePrice);
// console.log(orangejuicePrice + material.watermelon);

if(orangejuicePrice > 5000) {
  console.log(`오렌지주스는 ${orangejuicePrice}원인데 주문하시겠어요?`);
} else {
  console.log(`오렌지주스는 ${orangejuicePrice}원 입니다.`);
}