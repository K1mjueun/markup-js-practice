
const photo = document.getElementById('photo');
const name = document.getElementById('name');
const role = document.getElementById('role');
const review = document.getElementById('review');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const surpriseBtn = document.getElementById('surprise-btn');
//문서의 태그들을 변수에 대입
let currentIndex = 0;
//?핸들링하기 위한 변수를 선언한 것 같아

function customer(name, role, review, photoUrl) {
  //*이것은 기명함수! @mixin 같은 함수다!
  return {
    _name: name,
    _role: role,
    _review: review,
    _photoUrl : photoUrl,

    get name() {return this._name;},
    get role() {return this._role;},
    get review() {return this._review;},
    get photoUrl() {return this._photoUrl;}
    //?get은 무슨 의미인가? 가져온다? return은 값을 내뱉는다 같고, this도 잘 모르겠어
  };
}
//*객체를 만들어줬네
//이것도 고차함수인가

console.clear();
//?console.log, console.dir이 아닌 console.clear은 뭐지?
//*console.clear은 가능한 경우 콘솔에 기록된 메세지를 다-지우는거래

let customers = [
customer('이름','직책(?)','리뷰','사진링크'),
customer('이름','직책(?)','리뷰','사진링크'),
customer('이름','직책(?)','리뷰','사진링크'),
customer('이름','직책(?)','리뷰','사진링크')
//*↑ 위에 적힌 순으로 만들어준거 같아 / return에 들어있는 name,role,review,photoUrl
];
//*배열을 만들어줬다

renderInDOM(queryCustomer(0));
//? renderInDOM은 뭐야 queryCustomer??
//* 직접 만든 함수인가

nextBtn.addEventListener("click", (e) => {
  //? 이벤트를 달아줬는데, (e) => 는 뭘까 event?
  //고차함수래 화살표 함수! 축약형
  let currentCustomer;
  //*currentCustomer라는 변수를 쓸 예정이다
  if(currentIndex === (customers.length-1)) {
    //if문을 사용했다
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  currentCustomer = queryCustomer(currentIndex);

  renderInDOM(currentCustomer);
});

prevBtn.addEventListener("click", (e)=> {
  let currentCustomer;
  //*currentCustomer라는 변수를 쓸 예정이다
  if(currentIndex === 0) {
    currentIndex = customers.length - 1;
  } else {
    currentIndex--;
  }

  currentCustomer = queryCustomer(currentIndex);
  renderInDOM(currentCustomer);
});

surpriseBtn.addEventListener("click", (e)=> {
currentIndex = Math.floor(Math.random() * customers.length);
//? ☆math.floor,math.random을 사용했다!★
const currentCustomer = queryCustomer(currentIndex);

renderInDOM(currentCustomer);
});

function queryCustomer(customerIndex=0, customerList=customers) {
  return customerList[customerIndex];
  //? 함수를 설정하고 값을 대입해 놨어,, 그리고 그걸 뱉어내라고 하고있는거 같아
  //기명함수??
}

function renderInDOM(currentCustomer) {
  photo.scr = currentCustomer.photoUrl;
  name.textContent = currentCustomer.name;
  //? name은 왜 줄이 그어지는거야
  role.textContent = currentCustomer.role;
  review.textContent = currentCustomer.review;
}