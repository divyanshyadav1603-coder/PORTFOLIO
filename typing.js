const words=[
    "Frontend Developer",
    "Web Designer",
    "Javascript Learner",
    "UI Enthusiast",
    "Problem Solver"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord=words[wordIndex];

    if(!deleting){
        typing.textContent=currentWord.substring(0,charIndex++);

    }else{
        typing.textContent=currentWord.substring(0, charIndex--);
    }
    
    let speed=deleting?70:120;

   if(!deleting && charIndex>currentWord.length){
      deleting=true;
      speed=1200;
   }

   if(deleting && charIndex<0){
    deleting=false;
    charIndex=0;
    wordIndex=(wordIndex+1)%words.length;
   }

 setTimeout(typeEffect, speed);
}
typeEffect();