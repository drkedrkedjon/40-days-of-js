"use strict";
let counter = 0;
function handleClick() {
  counter++;
  console.log(counter);
}

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", handleClick);
// btn1.removeEventListener("click", handleClick);
// One can add as many events onClick as he wants
