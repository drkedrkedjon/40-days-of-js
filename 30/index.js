"use strict";

class Car {
  constructor(brand, model) {
    (this.brand = brand), (this.model = model);
  }

  printModel() {
    console.log(`This ${this.brand}, this ${this.model}`, this);
  }
}

const one = new Car("Fiat", "500");
const two = new Car("Peugi", "e-208");

one.printModel();
two.printModel();

console.log(typeof Car); // CLass constructor is a function. typeOf returns : Function.

// Class as expresion

const Trains = class {
  // rest is the same, but keep Capital first leter for conviniance
};

// Named Class
const Busses = class CreateFuckaBuses {
  // whatever
}; // One call this shit by invocing variable: const busLine12 = new Busses

//

class Cars {
  _type = "Vehicle";
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  // The goot shit about get & set is that we can do some validations in seter or extra procesing in geter, depending of bussines model.
  get carType() {
    return `Your car type is:  ${this._type}`;
  }

  set carType(newType) {
    if (newType) {
      this._type = newType;
    } else {
      console.warn("Shit warning");
    }
  }

  printModel() {
    console.log(
      `This ${this.brand}, this ${this.model} and of ${this._type} type`
    );
  }
}

const ones = new Cars("Fiat", "500");
const twos = new Cars("Peugi", "e-208");

console.log(ones.carType);
ones.carType = "Banana";

ones.printModel();
twos.printModel();

//
