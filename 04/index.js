console.log("Day 04");

if (false) console.log(true);

const lova = 200;

if (lova % 100 === 0) {
  console.log("Divisible by 100");
} else {
  console.log("Not divisible by 100");
}

const oper = "/";

switch (oper) {
  case "+":
    console.log(5 + 5);
    break;
  case "-":
    console.log(5 - 5);
    break;
  case "*":
    console.log(5 * 5);
    break;
  case "/":
    console.log(5 / 5);
    break;
  default:
    console.log("Invalid operator");
    break;
}
const age = 123;

const a = 20;
const b = 30;
const c = 20;

if (age < 18) {
  console.log("You are a minor");
} else if (age <= 60) {
  console.log("You are an adult");
} else {
  console.log("You are a senior citizen");
}

if (a === b && b === c) {
  console.log("All are equal");
} else if (a === b || b === c || a === c) {
  console.log("Two are equal");
} else {
  console.log("None are equal");
}
