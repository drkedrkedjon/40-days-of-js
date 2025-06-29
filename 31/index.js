"use strict";
// Object constractor function is plain function that when invoqued with new keyword will return object

function Car(model, year) {
  this.model = model;
  this.year = year;
  this.print = () => {
    console.log(`Model: ${this.model}, and year ${this.year}`);
  };
}

Car.prototype.prints = function () {
  console.log(`Model: ${this.model}, and year ${this.year}`);
};
const carOne = new Car("Fiat", "2022");

carOne.print();

const sasa = {};
// sasa.print();
console.log(carOne);
console.log(sasa);

// JS creates new Object prototype that contains Car constructor function and that is an extra Object inserted between base JS Object prototyupe and carOne. So you can insert another function next to constructor Car and that will make all object created with Car contain same function (Shared)

// This complicated shit is solved with JS class-es. Method declared outside constryctor function are part of that extra prototype Object. So no problem with memory alocation.

class Cars {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  // Creeated abowe chain prototpy chain and not copied but shared by reference with all objects created by this class... IT MUST BE NORMAL FUNCTION AND NOT AN ARROW ONE IF WE WANT THAT COPY BY REFERENCE SHIT
  print() {
    console.log(`Model: ${this.model}, and year ${this.year}`);
  }
}

//  En thats what Class extends do too, it just add new object prototupe Class in chain... plis plas

class superCar extends Cars {
  constructor(model, year, owner) {
    super(model, year);
    this.owner = owner;
  }
}

const mujo = new superCar("RR", 2014, "Mujo");

console.log(mujo);
console.log(Object.getPrototypeOf(mujo));
