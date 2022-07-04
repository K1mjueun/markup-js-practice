
//function--
function windieSlideControl(arr) {
  arr.forEach((value) => {
    let getDatasetValue = Number(value.dataset.slideWindie);
    if (getDatasetValue === current) {
      value.style.display = "flex";
    } else {
      value.style.display = "none";
    }
  });
}
//슬라이더 작동을 위한 데이터셋 컨트롤(윈디용)

let current = 0;
function windieSlide(button,targetArr) {
  button.addEventListener('click', function () {
    if (button === leftBtn1) {
      current--;
      if (current < 0) {
        current = targetArr.length - 1;
      }
      windieSlideControl(targetArr);
    }
    if (button === rightBtn1) {
      current++;
      if (current >= targetArr.length) {
        current = 0;
      }
      windieSlideControl(targetArr);
    }
  });
};
//슬라이더 작동(윈디용)

function dragNdrop (target) {
  target.addEventListener("dragstart", (event) => {
    console.log("drag start");
  });

  target.addEventListener("drag", (event) => {
    console.log("dragging");
  });

  target.addEventListener("dragend", (event) => {
    let top = event.clientY;
    let left = event.clientX;
    target.style.top = top + "px";
    target.style.left = left + "px";

    console.log("drag finished");
  });
};
//스티커 붙이기
//--function




// work-page-windie
const wpWindie = document.querySelector("#work-page-windie");
const backBtn1 = document.querySelector("#work-page-windie>header>.back>.arrow");
const windieWorkProBtns = document.querySelector("#work-page-windie > #board > #work-process");
const contactStamp1 = document.querySelector(".contact-stamp-1");

const leftBtn1 = document.querySelector("#work-page-windie > #board > #work-img-slide > .left-button");
const rightBtn1 = document.querySelector("#work-page-windie > #board > #work-img-slide > .right-button");

const imgSlideWindie = document.querySelector("#work-page-windie > #board > #work-img-slide");

const windieSlide1 = imgSlideWindie.children[1];
const windieSlide2 = imgSlideWindie.children[2];
const windieSlide3 = imgSlideWindie.children[3];
const windieSlide4 = imgSlideWindie.children[4];
const windieSlide5 = imgSlideWindie.children[5];

const windieSlides = [windieSlide1,windieSlide2,windieSlide3,windieSlide4,windieSlide5];

windieSlideControl(windieSlides);
windieSlide(leftBtn1,windieSlides);
windieSlide(rightBtn1,windieSlides);

const wpwStickerBox = document.querySelector("#work-page-windie > header > .sticker-box");

for(i=0; i<wpwStickerBox.children.length; i++) {
  wpwStickerBox.children[i].style.zIndex = 3;
};

const Wsticker1 = wpwStickerBox.children[0];
const Wsticker2 = wpwStickerBox.children[1];

dragNdrop(Wsticker1);
dragNdrop(Wsticker2);