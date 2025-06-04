"use strict";
// console.log(document);

// const idElem = document.querySelector("#subheading");
// console.log(idElem);

// const colection = document.querySelectorAll("h1.heading");
// console.log(colection);
// colection.forEach((elem) => console.log(elem));

// const titelElem = document.querySelector("h2#subheading");
// console.log(titelElem);

const input = document.querySelector("#inputField");
const listItems = document.querySelectorAll("ul.list li");

function searchFunction() {
  let queryString = input.value;

  listItems.forEach(
    (item) =>
      (item.style.display = item.textContent
        .toLowerCase()
        .includes(queryString.toLowerCase())
        ? ""
        : "none")
  );
}
// iterate over node list and on all node elements change display property based on condition be true. the condition is that input.value contains string that exist in element.textContent
