"use strict";
console.log("Day 13 THIS shit");

console.log(this); // Window in browser or Global on NODE server
// this is windows aspect, there are two more: OBJECT and FUNCTION aspect

// Inside the object, also called IMPLICIT BINDING
const obj1 = {
  name: "Sasa",

  whatThis() {
    return this; // Or this.name return "Sasa"
  },
};
console.log(obj1.whatThis()); // returns THE obj1 itself. It is BOUND to the same obj1

// The most important in function aspect or scope is WHERE the method function is INVOQUED and NOT on where is writen: Example
const tom = {
  name: "Tom",
  age: 7,
};

const jerry = {
  name: "jerry",
  age: 3,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old!`);
  };

  console.log(obj);
}

greetMe(tom);
tom.logMessage();

greetMe(jerry);
jerry.logMessage();

// THIS folowing examples are inside standalone function - not method
// It is not BOND to function scope it is BOUND to global scope - window
// If we use "use strict" mode (react) it is returning UNDEFINED - so if I understand, it serves no purpose to use it.
function sayNameBa() {
  console.log(this);
}
sayNameBa();

function sayName() {
  console.log("this inside a function", this);
}

sayName(); //

function outer(a) {
  console.log("this inside an outer function", this);

  return function inner(b) {
    console.log("this inside an inner function", this);
  };
}
const outerResult = outer(5);
outerResult(3);

// Inside the arrow function
// For ARROW function, even in strict mode, it will (THIS) point to window scope regradingly... if declared on top. If inside the other function or method it will bind to that function or method. Always pints to outer scope where executed.
const getFood = () => this;
console.log(getFood());

// EXPLICIT BINDING - Using: call, apply and bind
// The call method

function greeting(pinga, sfinga) {
  console.log(
    `Hello, ${this.name} belongs to ${this.address} and I pass this parameters: ${pinga} and ${sfinga}`
  );
}

const user = {
  name: "tapaScript",
  address: "All of YOU!",
};

const miArg = "pinga";
// If we want to call greeting function in the context of user object then use CALL method. Look how we pass the parameters, after context object on first slot, here we type the rest of parameters that function accepts.
greeting.call(user, miArg, "sfinga");

// The apply method.
// It is basicaly the same as call but if we have many parameters we can pass the array instead of eacth arguments separtly. The rest is same.
const miArgArray = ["pinga", "sfinga"];
greeting.apply(user, miArgArray);

// The BIND method
// While call and apply methods will execute emidiatly the function the BIND method will not, istead it will return complitely new function that we can execute little latter to get results of that function.
const newHobbies = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

const officer = {
  name: "Bob",
};

const newFn = newHobbies.bind(officer, "Dancing", "Singing");
newFn();

// another example. Using regular function we got UNDEFINED becouse we use strict mode, if not it will be window scoped. Thats why we have to use arrow function that always have this scope one level outside or window...
const user1 = {
  name: "Sasa",
  // greet: function () {
  //   function inner() {
  //     console.log(this);
  //   }
  //   inner();
  // },
  greet: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};
user1.greet();
