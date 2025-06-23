"use strict";

function sasa() {
  return 101;
}

const tacklePromise = async () => {
  const test = await sasa();
  console.log(test); // Este codigo estara en espera que termina la de arriba con await para ser ejecutada
  // BUT IT STOPS ONLY INSIDE THE FUNCTION AND CALL STACK, THE REST OF CODE RUNS NORMALY SO AWAIT DOES NOT CHANGE ASYNCRON CODE TO SINCRONE CODE. Main thread still runs normaly and is not blocked.
};

// console.log("before");
// tacklePromise();
// console.log("after");

// async in front of function creates a promise and returns a promise, not undefined as normal function does
// await can only be uses inside the async function. It emulates .then() functionality

// Dealing with errore in async await

const promise = new Promise((si, no) => {
  // no("Fucka error");
  si("Fucka EXITO");
});

async function pepe() {
  try {
    console.log(await promise);
  } catch (err) {
    console.log(err);
  }
}
// pepe();

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
// pokemons();

// TASKS

async function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Exito Afteroooo");
    }, ms);
  });
}

async function mujo(ms) {
  console.log("Before");
  const message = await wait(ms);
  console.log(message);
}

// mujo(2000);

// ----

async function time(sec) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (sec === 1) {
        res("One");
      } else if (sec === 2) {
        res("Two");
      } else {
        res("Three or more");
      }
    }, sec * 1000);
  });
}
async function demo() {
  console.log(await time(1)); // "One" after 1 second
  console.log(await time(2)); // "Two" after 2 seconds
  console.log(await time(3)); // "Three or more" after 3 seconds
}
// demo();

// -----

async function fetcher(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

fetcher("https://jsonplaceholder.typicode.com/users/2");
