"use strict";
console.log(document);

const idElem = document.querySelector("#subheading");
console.log(idElem);

const colection = document.querySelectorAll("h1.heading");
console.log(colection);
colection.forEach((elem) => console.log(elem));

const titelElem = document.querySelector("h2#subheading");
console.log(titelElem);
