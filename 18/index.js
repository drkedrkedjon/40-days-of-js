const body = document.querySelector("body");

const h1 = document.createElement("h1");
const p = document.createElement("p");
const span = document.createElement("span");
const div1 = document.createElement("div");

h1.textContent = "Some shit";
p.textContent = "Some shit";
span.textContent = "Some shit inserted in span";
div1.textContent = "Im div to be removed";

body.appendChild(h1);
body.appendChild(p);
body.appendChild(div1);
h1.textContent = "Some other shit";
body.removeChild(p);
div1.remove(); // Plain remove, directly.

h1.style.color = "red";
p.style.fontSize = "2rem";
h1.setAttribute("class", "p-class");
// console.log(h1.getAttribute("class"));
h1.removeAttribute("class");
body.appendChild(p);

const spanElem = document.querySelector("span");

document.body.insertBefore(span, p); // plain insert before, first what then where
document.body.insertBefore(span, p.nextElementSibling); // Shitty insert after using nextElementSibling. Basicaly adding before next sibling of an element, Which is after the element

h1.innerText = "Lets go H1!"; // Will respect if inner element display: none is set and will return nothing
p.textContent = "Fuck this shit I'm a P!"; // Wil edit text anyway, regradles of display: none

const myList = document.querySelector("#my-list");
const elemToRemove = myList.children[2];
myList.removeChild(elemToRemove);

// myList.replaceChildren(h1, p, span, div1);
myList.replaceChildren(); // remove all children

// select parent elements
const span2 = document.querySelector("#text");
console.log("Parent Element:", span2.parentElement); // Representa HTML element
console.log("Parent Node:", span2.parentNode.parentNode); // Represente el node, puede ser text node en el DOM y no neceseriamente un HTML element. Mejor usar parentNode

// select children elements
const div2 = document.querySelector("#main-id");
console.log("Children", div2.children); // Returns only HTML elements - use this perhaps
console.log("ChildNodes", div2.childNodes); // Return all nodes, including comments and etc.

// select siblinggs elements
console.log("Next element", h1.nextElementSibling);
console.log("Previous element", h1.previousElementSibling);

// --------- Manipulating style attr
span2.style.backgroundColor = "red";
span2.style.color = "yellow";
span2.style.padding = "0.5rem";

// Manipulating clases
div2.setAttribute("class", "main-class");
div2.className = "pinga-class";
div2.classList.add("polla-class");
div2.classList.replace("polla-class", "conjo-class");
// remove... blablabla
console.log(div2.classList);
div2.classList.toggle("conjo-class");
div2.classList.toggle("conjo-class");
