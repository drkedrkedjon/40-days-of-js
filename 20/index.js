"use strict";
"use strict";
// Navegating DOM from JS
const parent = document.querySelector(".card");
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
const nextSibling = firstChild.nextElementSibling;
const parentOfElem = firstChild.parentElement;

// Templates and cloning
const template = document.querySelector("#card-template");
const clone = template.content.cloneNode(true);
clone.querySelector(".title").textContent = "Advanced DOM";
clone.querySelector(".desc").textContent = "Blablabla sobre bla bla";
document.body.appendChild(clone);

// Document fragment - crear un code para insertarlo despues. Los li en una ul vacia (esta en DOM ya)
const fragment = document.createDocumentFragment();

for (let i = 0; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Item number: ${i}`;
  fragment.appendChild(li);
}

const lista = document.querySelector("#my-list").appendChild(fragment);

// Range es para seleccionar un range de por ejemplo characters in a string sentence. No se, no me molesto con eso ahora...
