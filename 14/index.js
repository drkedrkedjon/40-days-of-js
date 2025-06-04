"use strict";
// Parsing error - means JS have no idea what to  with the code you wrote. Syntax error basicly
// Runtime error - It happens when JS is executed, syntax is OK, But some data is missing or unefined or NaN
// We call them Exemptions - runtime errors that crashes program

try {
  console.log(x);
} catch (err) {
  console.error("shit happens", err);
  // err.message, err.stack. err.name
} finally {
  console.log("Finaly amigo"); // Used for - let's say disconecting from DB
}

// throw Error
function divideNumbers(a, b) {
  try {
    if (b === 0) throw new Error("You can not divide by 0");
    console.log(a / b);
  } catch (error) {
    console.error("Ups, something fucked happened:", error.message);
    throw error; // This is rethrowing - sending or returning same error up the hierarchy and JS tree. Recomended if we want to show to user, use error on top function.
  }
}

divideNumbers(5, 0);

// Self assigment operator
let x;
let y = 10;

// x ?= 20 - This will return undefined so it becomes 20
// y ?= 30 - This stays 10
// Still proposition, do not use.
