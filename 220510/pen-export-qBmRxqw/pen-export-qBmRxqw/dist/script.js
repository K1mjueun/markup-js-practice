// const animatedText = "I-am-Mohammad-Noushad-Siddiqi.-I-am-so-curious-to-make-this-typed-word-delay-animation.-let's-hope-for-the-best.-I-am-trying-to-implement-this-idea-by-using-animation-Api-and-javascript-string-methods-by-using-vanila-javascript."

const animatedText = "I am Mohammad Noushad Siddiqi. I am so curious to make this typed word delay animation. let's hope for the best. I am trying to implement this idea by using animation Api and javascript string methods by using vanila javascript.";

const wordDelayDiv = document.querySelector('.word-delay p');
const wordDelaySpan = document.querySelectorAll('.word-delay p span');
const splittedArray = animatedText.split(" ");
const space = ' ';

const animationObjectTransform = [
      {opacity:0,transform : 'translateY(50px)'},
      {opacity:0.5, offset:0.5, transform:'translateY(10px)'},
      {opacity:1, offset:1, transform:'translateY(0)'}
];

const animationObjectFade = [
      {opacity:0} , 
      {opacity:0.5, offset:0.5},
      {opacity:1, offset:1}
]
        
for (let i = 0; i < splittedArray.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = splittedArray[i] + space;
    span.style.display = 'inline-block';
    span.style.marginLeft = '10px';
    span.style.opacity = 0;
    wordDelayDiv.appendChild(span); 
            
   
  // animation 
    span.animate(
        animationObjectTransform,{
               duration:1000,
               fill:'forwards',
               delay:i * 200,
               // easing:'cubic-bezier(0.175, 0.885, 0.32, 1.275) ',
              }
     )
                    
}
// console.log(wordDelaySpan);