"use strict";

function sasa() {
  return 101;
}

const tacklePromise = async () => {
  const test = await sasa();
  console.log(test); // Este codigo estara en espera que termina la de arriba con await para ser ejecutada
  // BUT IT STOPS ONLY INSIDE THE FUNCTION AND CALL STACK, THE REST OF CODE RUNS NORMALY SO AWAIT DOES NOT CHANGE ASYNCRON CODE TO SINCRONE CODE. Main thread still runs normaly and is not blocked.
};
console.log("before");
tacklePromise();
console.log("after");

// async in front of function creates a promise and returns a promise, not undefined as normal function does
// await can only be uses inside the async function. It emulates .then() functionality

// Dealing with errore in async await

const promise = new Promise((si, no) => {
  no("Fucka error");
  // si("Fucka EXITO");
});

async function pepe() {
  try {
    console.log(await promise);
  } catch (err) {
    console.log(err);
  }
}
pepe();

// Handling multiple promeses... using Promise.allSetlled([ ... ])
async function pokemons() {
  try {
    const results = await Promise.allSettled([
      fetch("url-1").then((res) => res.json()),
      fetch("url-2").then((res) => res.json()),
      fetch("url-3").then((res) => res.json()),
    ]);
    if (results[0].status === "rejected") throw new Error("Fuck error fetch");
    console.log(results);
  } catch (err) {
    console.log(err);
  }
}
pokemons();

//
