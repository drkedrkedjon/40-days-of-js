"use strict";
let counter = 0;
function handleClick() {
  counter++;
  console.log(counter);
}

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
btn1.addEventListener("click", handleClick);
// btn1.removeEventListener("click", handleClick);
// One can add as many events onClick as he wants on same element

function handleClick2(e, mierda) {
  console.log(e);
  console.log(mierda);
}

// Event object
btn2.addEventListener("click", (e) => handleClick2(e, "Mierda"));

// Event bubling
// When click happens, the event will execute on target element and then will buble up so, if there is another onClick event assigned to any parent element of target element, it will execute also, but after the target one.

// Event Capturing
// It goes oposite from bubling, it goes down the DOM tree, from top to the target one. First execute parent end finaly target event. One can eneble capturing by adding, true After the function in addEventListener
btn1.addEventListener("click", (e) => handleClick2(e, "Mierda"), true);

// Event delegation
// One have no need to always add en event listener on target, as event (click) will be emited on button click anyway. So, one can add event listener on any parent inclyding up to window that will handle that event.

function handleDelegation(e) {
  if (e.target.tagName === "LI") {
    const targetText = e.target.textContent;
    console.log(targetText);
  }
}
document
  .querySelector("#item-list")
  .addEventListener("click", handleDelegation);

// Event stop propagation (bubling)
function handleDelegation2() {
  console.log("Soy papa");
}
function handleDelegation3(e) {
  e.stopPropagation(); // Here you stop bubling (propagation)
  console.log("Soy botoncito");
}

document.querySelector("#papa").addEventListener("click", handleDelegation2);
document.querySelector("#btn3").addEventListener("click", handleDelegation3);

// Prevent default - form submit canceling of default behavior
// e.preventDefault()

// Custom events

// Crear custom event i hacer que bubble
const myEvent = new CustomEvent("myEventBubble", {
  bubbles: true,
  detail: {
    username: "Sasa",
  },
});

// Escuchar en body a este event
document.body.addEventListener("myEventBubble", (e) =>
  console.log(e.detail.username)
);

// Dispachar el evento desde el mismo button
const myBtn4 = document.querySelector("#customEventBtn");
myBtn4.addEventListener("click", () => myBtn4.dispatchEvent(myEvent));
