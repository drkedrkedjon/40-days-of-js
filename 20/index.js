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

// Mutation Observer
// It observes some changes on specific element and then it does what ever you want to do...

const target = document.getElementById("watchMe");

const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    console.log(`Type of mutation: ${mutation.type}`);

    if (mutation.type === "childList") {
      console.log("A child node was added or removed.");
    }

    if (mutation.type === "attributes") {
      console.log(`Attribute ${mutation.attributeName} was changed.`);
    }

    if (mutation.type === "characterData") {
      console.log(`Text content changed to: ${mutation.target.data}`);
    }
  }
});

const config = {
  subtree: true,
  characterData: true,
  childList: true,
  attributes: true,
};

observer.observe(target, config);

function changeDOM() {
  target.textContent = "Goodbye!";
  target.setAttribute("data-status", "Changed");
}
