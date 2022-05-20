
const pokemon = {
  a : "꼬부기",
  b : "파이리",
  c : "치코리타",
  d : "피카츄"
}

// console.log(pokemon.length);
//배열이 아닌 객체라 길이값이 없다

// for(let key in pokemon) {
  //*for in()문, pokemon의 key값을 반복해줘
  //key나 props(property)로 많이 씀
  // console.log(typeof key);
  //?객체의 key값은 'string'문자열이다
  //?배열의 key값은 숫자라는 차이가 있다!
// }

// console.log(pokemon.a);
// console.log(pokemon["a"]);
//*둘다 꼬부기가 나온다

let pokemonArr = [];
for(let props in pokemon) {
  // console.log(pokemon[props]);
  pokemonArr.push(pokemon[props]);
};
console.log(pokemonArr);