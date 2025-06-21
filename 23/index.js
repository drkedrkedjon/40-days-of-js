"use strict";

// What is a promise?
// states of promisse: pending, filfiled and rejected
// Create with constructor new Promise and that constructor have executor function with two parameters: resolve, reject. Both are functions
// There is also promise result (what promise returns): (pending), value(resolve) or error(reject)

const promise = new Promise((resolve, reject) => {
  if (1 === 11) {
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
        console.log("Finished waiting");
        resolve("Inner promise");
      }, 2000);
    });
  })
  .then((res) => {
    console.log("Second then: ", res);
    throw new Error();
  })
  .catch((err) => console.log("error"));

// Se puede rethrow/return Error from the .catch() para manejar rl mismo mas tarde en el proximo catch() que aparezca en la cadena
//  .finaly() no procesa ni value ni error, lo pasa al siguiente .then() o .catch()...
// Also this is promise chaining - calling .then() multiple times on one promise

const promise2 = new Promise((resolve, reject) => {
  if (1 === 1) {
    resolve("Resolved");
  } else {
    reject("Rejected");
  }
});

promise2
  .catch((err) => {
    throw err; // rethrow error
  })
  .then(() => {})
  .then(() => {})
  .then(() => {})
  .finally(() => {}) // pass all
  .catch((errrr) => {
    console.log("Error at the end: ", errrr);
  });

// Handling Multiple Promises and JS methods for that.

// Promise.all([promises]) recibe un array de todas las promesas que tiene dentro. Espera que se reselven todas. Si todas son resolved, se retorna un array con todos los valores retornados. Si hay un error, todos fallan.

Promise.all([promise, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch(() => {});

// Promise.any() is similar pero no espera que se resuelven todas, sino retorna la primera que se resuelve con exito. Las de mas se ignoran.
Promise.any([promise, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch(() => {});

// Promise.allSettled() recibe array y retorna todas las promesas da igual si estan resuelt o reject. Devuelve un array.
Promise.allSettled([promise, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch(() => {});

// Retorna la primera que se ha o resuelto o rechasado, Osea setlled.
Promise.race([promise, promise2])
  .then((res) => {
    console.log("Race resolved:", res);
  })
  .catch((err) => {
    console.log("Race rejected:", err);
  });
