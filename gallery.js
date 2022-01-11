// tema 3 galleri 1 let

let img1 = document.querySelector("#img_galleri1");
let arrowRight1 = document.querySelector("#arrow_right1");
let arrowLeft1 = document.querySelector("#arrow_left1");
let myNumber1 = 1;

// tema 3 galleri 2 let

let img2 = document.querySelector("#img_galleri2");
let arrowRight2 = document.querySelector("#arrow_right2");
let arrowLeft2 = document.querySelector("#arrow_left2");
let myNumber2 = 5;

// tema 3 galleri 3 let

let img3 = document.querySelector("#img_galleri3");
let arrowRight3 = document.querySelector("#arrow_right3");
let arrowLeft3 = document.querySelector("#arrow_left3");
let myNumber3 = 11;

window.addEventListener("load", sidenVises);

function sidenVises() {
  // tema 3 galleri 1
  img1.classList.add("pic" + myNumber1);
  // tema 3 galleri 2
  img2.classList.add("pic" + myNumber2);
  // tema 3 galleri 3
  img3.classList.add("pic" + myNumber3);
  // tema 3 galleri 1
  arrowRight1.addEventListener("click", clickNext);
  arrowLeft1.addEventListener("click", clickPrevious);
  // tema 3 galleri 2
  arrowRight2.addEventListener("click", clickNext);
  arrowLeft2.addEventListener("click", clickPrevious);
  // tema 3 galleri 3
  arrowRight3.addEventListener("click", clickNext);
  arrowLeft3.addEventListener("click", clickPrevious);
}

function clickNext() {
  // tema 3 galleri 1
  img1.classList = "";
  img1.classList.add("pic" + myNumber1++);
  // tema 3 galleri 2
  img2.classList = "";
  img2.classList.add("pic" + myNumber2++);
  // tema 3 galleri 3
  img3.classList = "";
  img3.classList.add("pic" + myNumber3++);
  // tema 3 galleri 1
  if (myNumber1 >= 5) myNumber1 = 1;
  // tema 3 galleri 2
  if (myNumber2 >= 10) myNumber2 = 5;
  // tema 3 galleri 3
  if (myNumber3 >= 20) myNumber3 = 11;
}

function clickPrevious() {
  // tema 3 galleri 1
  img1.classList = "";
  img1.classList.add("pic" + myNumber1--);
  // tema 3 galleri 2
  img2.classList = "";
  img2.classList.add("pic" + myNumber2--);
  // tema 3 galleri 3
  img3.classList = "";
  img3.classList.add("pic" + myNumber3--);
  // tema 3 galleri 1
  if (myNumber1 <= 0) myNumber1 = 4;
  // tema 3 galleri 2
  if (myNumber2 <= 5) myNumber2 = 10;
  // tema 3 galleri 3
  if (myNumber3 <= 11) myNumber3 = 19;
}
