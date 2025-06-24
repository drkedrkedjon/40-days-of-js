"use strict";
// Event loop have three parts and it loops across them.
// Call stack is where functions goes
// Browser API stack is where setTimeout,setInteerval, fetch() and so on goes
// Callback Queue is where callback function goes.

// So it firstly clear up callstack, then it looks to callback queue

// Check image in folder 01.png

// If we have Promises!!
//  then check image 03.png
// There is a new job Queue, that gets executed before callback queue

// So, here we go: First it is call stack that gets executed (first in, last out), and once it is empty:
// It will place callback function, if ther is one, into callback queue.
// Then will execute the Promise and place it functon inside the Job queue
// Once the call stack is empty, it will firstly execute promisse function in job queue, and will execute all function in that queue
// Then the one in callback queue

function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");

  setTimeout(f1, 0);
  new Promise((resolve, reject) => resolve("I am a promise")).then((resolve) =>
    console.log(resolve)
  );
  f2();
}

main();

// Check last pantallazo
