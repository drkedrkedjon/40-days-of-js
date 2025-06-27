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
