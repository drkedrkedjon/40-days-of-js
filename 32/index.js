"use strict";
import { sum as sum1, sub, mul } from "./calc.js";
import division from "./calc.js";

console.log(sum1(3, 5), sub(5, 8), mul(5, 6), division(55, 2));

// Namespace import ALL
import * as calc from "./calc.js";
console.log(calc.sum(3, 5), calc.sub(5, 8), calc.mul(5, 6));

// Import modules dinamicamente
if (true) {
  const { sub } = await import("./calc.js");
  console.log(sub(4, 9));
}

// Se pueden importar usando Promises.all([ import("./calc.js"), import("./palc.js");  ])
