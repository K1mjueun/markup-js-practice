
const root = document.getElementById('root');
const ul = document.createElement("ul");
root.appendChild(ul);

// let liElement;
let liElement = [];
for(let i = 0; i<10; i++) {
  // liElement +=`<li> ${i} </li>`;
  liElement.push(`<li> ${i} </li>`);
}
// ul.innerHTML = liElement;
ul.innerHTML = liElement.join("");
// , 구분자를 없앤다

console.log(liElement.join(""));
console.log(liElement);

// for(let i = 0; i<10; i++) {
//   const li = document.createElement('li');
//   li.textContent = i;
//   ul.appendChild(li);
// }