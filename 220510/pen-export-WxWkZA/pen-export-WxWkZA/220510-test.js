
//*자바스크립트 따라써보면서 쪼개서 읽어보고 해석해보기

let dropdownButtons = (function(){

  
  let dropdownWrappers = document.getElementsByClassName('js-button-dropdown-container');
  
  let activeDropdowns = [];
  //? 왜 비어있을까? 선언은 왜한걸까?
  
  for(let i = 0; i<dropdownWrappers.length; i++) {
    // for문을 사용했다
    if(dropdownWrappers[i].classList.contains("active")) {  }
    //? active라는 class를 가지고 무언가 하려나봐
  }
  
  for(let c = 0; c<dropdownWrappers[i].getElementsByClassName('js-button-dropdown').length; c++) {
    
  }
  
function hideDropdowns(activeDropdowns) {
  //? 뭘 숨기려나봐
  for (i = 0; i < activeDropdowns.length; i++) {
    activeDropdowns[i].classList.remove('active');
  }
  //? classList를 사용했네
}

function toggleDropdown() {
  //? 토글링을 하려나봐
  this.parentNode.classList.toggle('active');
  //this는 뭐야? 변수인가? //? toggle은 멀까
  for (i = 0; i < activeDropdowns.length; i++) {
    //loop를 돌린다
    if (activeDropdowns[i] !== this.parentNode) {
      // !== 같지 않으면 참
      activeDropdowns[i].classList.remove('active');
    }
  }
}

//*return은 무언가 반환
return {
  //? 객체인가봐 key와 value가 있어
  activeDropdowns: activeDropdowns,
  hideDropdowns: hideDropdowns
}




});