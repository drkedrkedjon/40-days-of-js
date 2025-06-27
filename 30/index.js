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

// Static properties

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  great() {
    console.log(`Hello I'm ${this.name}`);
  }

  // Create static method to create user, but not to pass it down to new instances of objects. Yet keep it inside of the Class itself so no external function is needed...
  static createUSer(name, email) {
    return new User(name, email);
  }
}

const user1 = new User("Sasha");
user1.great();

// So I can call creation of new user as method on the Class itself.
const sasa = User.createUSer("Sasa", "sasa@sasasa.com");
sasa.great();

// BIG ONE SINCE 2022 PRIVATE PROPERTIES IN JS CLASSES
// Private properties
class WashMachine {
  _year = 66; // THIS IS JUST A CONVENTION WAY OF TYPING PROPERTY WHEN USING GET & SET, NOT A REAL PRIVATE PROPERTY.
  brand; // regular property (brand = null, or declare it with the value)
  // Private propertie
  #powerStatus = false;

  constructor(brand) {
    this.brand = brand;
  }

  // Regular method
  start(cycle) {
    if (!this.#powerStatus) {
      this.#turnOn(console.log("Turn On"));
    }
    this.#powerStatus = true;
    this.#spin(console.log("spin"));
    this.#drain(console.log("drain"));
    this.#dry(console.log("dry"));
    this.stop(console.log("stop"));
  }
  // Regular method
  stop() {
    this.#turnOff(console.log("Turn OFF"));
  }

  // Private methods
  #spin() {}
  #drain() {}
  #dry() {}
  #turnOff() {}
  #turnOn() {}
}

const bosch = new WashMachine("Bosch");
bosch.start();
bosch.stop();
// bosch.#spin(); DOES NOT WORK
// bosch.#powerStatus; DOES NOT WORK
