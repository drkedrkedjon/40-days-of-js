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

// You can not cancel the promisse as it is like made in past, what you can cancel is returning value. You can cancel fetch() but not a promise...

// Tasks

// 1
const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promises");
  }, 2000);
});
prom1.then((res) => console.log(res));

// 2
const prom2 = new Promise((resolve, reject) => {
  reject("Algo va mal");
});
prom2.then(() => {}).catch((err) => console.error(err));

// 3
const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();

    if (randomNum < 0.5) {
      resolve("Heads");
    } else {
      resolve("Tails");
    }
  }, 3000);
});
prom3.then((res) => console.log(res));

// 4
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Ok");
    } else {
      reject("Too young");
    }
  });
}
console.log(
  checkAge(55)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
);

// 5

const prom4 = new Promise((resolve, reject) => {
  resolve("Step 1 done");
});
const prom5 = new Promise((resolve, reject) => {
  resolve("Step 2 done");
});
const prom6 = new Promise((resolve, reject) => {
  resolve("Step 3 done");
});

prom4
  .then((res) => {
    console.log(res);
    return prom5;
  })
  .then((res) => {
    console.log(res);
    return prom6;
  })
  .then((res) => {
    console.log(res);
  });

// 6
const prom7 = new Promise((resolve, reject) => {
  resolve(5);
});

prom7
  .then((res) => {
    return res * 2;
  })
  .then((res) => {
    return res * res;
  })
  .then((res) => {
    console.log(res);
  });
