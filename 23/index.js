"use strict";

// What is a promise?
// states of promisse: pending, filfiled and rejected
// Create with constructor new Promise and that constructor have executor function with two parameters: resolve, reject. Both are functions
// There is also promise result (what promise returns): (pending), value(resolve) or error(reject)

const promise = new Promise((resolve, reject) => {
  if (1 === 1) {
    resolve("Resolved");
  } else {
    reject("Rejected");
  }
});

promise
  .then(
    (res) => console.log(res)
    // (rej) => console.log(rej) // Se puede catch error here too...
  )
  .catch((err) => console.log("catch:", err))
  .finally(() => console.log("Finaly"));

// Dentro de .then() se pueden hacer tres cosas. Retornar otra PROMESA, retornar alguna valor de operacion SINCRONA y tambien throw an error.

promise
  .then((res) => {
    console.log(res);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("FInished waiting");
        resolve("Inner promise");
      }, 2000);
    });
  })
  .then((res) => {
    console.log("Second then: ", res);
    throw new Error();
  })
  .catch((err) => console.log("error"));
