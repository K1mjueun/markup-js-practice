
const arr = [1, 2, 3, 4, 5];

const root = document.getElementById('root');
const injectValue = document.getElementById('inject-value');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');


function arrHandler(leftButton, rightButton, array, parentNode, appendNode, eventType) {
  parentNode.addEventListener(eventType, function (event) {
    let eventTargetIdValue = event.target.id;
    let temp;

    const changeArrayIndex = (eventTarget) => {
      if (eventTarget === leftButton) {
        temp = array[0];
        array.shift();
        array.push(temp);
        console.log(array);
        elementRemover();
        elementAppender();
        elementStyler();
      }
      if (eventTarget === rightButton) {
        temp = array[array.length - 1];
        array.pop();
        array.unshift(temp);
        console.log(array);
        elementRemover();
        elementAppender();
        elementStyler();
      }
    }

    const elementRemover = () => {
      while(injectValue.firstChild) {

        injectValue.removeChild(injectValue.firstChild);
      }
    }
    const elementAppender = () => {
      array.forEach(element => {
        const span = document.createElement('span');
        span.textContent = element;
        appendNode.appendChild(span);
      });
    }
    const elementStyler = () => {
      injectValue.firstChild.style.fontSize = "2rem";
    }
    
    
    changeArrayIndex(eventTargetIdValue);



    if (eventTargetIdValue === parentNode.id) {
      console.log(`지금 선택한 것 은 컨테이너 ${parentNode.id}의 id 값입니다.`);
    }
  });

}
arrHandler("left", "right", arr, root, injectValue, "click");