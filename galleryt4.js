// tema 4 galleri 4 let

let img4 = document.querySelector("#img_galleri4");
let arrowRight4 = document.querySelector("#arrow_right4");
let arrowLeft4 = document.querySelector("#arrow_left4");
let myNumber4 = 19;

window.addEventListener("load", sidenVises);

function sidenVises() {
  // tema 4 galleri 4
  img4.classList.add("pic" + myNumber4);
  console.log(myNumber4);
  // tema 4 galleri 4
  arrowRight4.addEventListener("click", clickNext);
  arrowLeft4.addEventListener("click", clickPrevious);
}

function clickNext() {
  // tema 4 galleri 4
  img4.classList = "";
  img4.classList.add("pic" + myNumber4++);
  // tema 4 galleri 4
  if (myNumber4 >= 25) myNumber4 = 20;
}

function clickPrevious() {
  // tema 4 galleri 4
  img4.classList = "";
  img4.classList.add("pic" + myNumber4--);

  // tema 4 galleri 4
  if (myNumber4 <= 19) myNumber4 = 24;
}
