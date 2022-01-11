// tema dok galleri 5 let

let img5 = document.querySelector("#img_galleri5");
let arrowRight5 = document.querySelector("#arrow_right5");
let arrowLeft5 = document.querySelector("#arrow_left5");
let myNumber5 = 25;

window.addEventListener("load", sidenVises);

function sidenVises() {
  // tema dok galleri 5
  img5.classList.add("pic" + myNumber5);
  console.log(myNumber5);
  // tema dok galleri 5
  arrowRight5.addEventListener("click", clickNext);
  arrowLeft5.addEventListener("click", clickPrevious);
}

function clickNext() {
  // tema dok galleri 5
  img5.classList = "";
  img5.classList.add("pic" + myNumber5++);
  // tema dok galleri 5
  if (myNumber5 >= 31) myNumber5 = 25;
}

function clickPrevious() {
  // tema dok galleri 5
  img5.classList = "";
  img5.classList.add("pic" + myNumber5--);

  // tema dok galleri 5
  if (myNumber5 <= 24) myNumber5 = 30;
}
