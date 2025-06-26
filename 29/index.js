"use strict";

class human {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  whoIsThis() {
    console.log(
      `This is human named ${this.name} and he's ${this.age} years of age`
    );
  }
}

const sasa = new human("Sasa", "58");

sasa.whoIsThis();

// Abstraction
// Abstraction is the process of hiding the internal complexities of how something works and only exposing what's necessary for the user to interact.

// Encapsulation
// Encapsulation is the bundling of data and methods that operate on that data into a single unit, usually a class - and restricting direct access to some of the object's components. Basicly we are talking about private properties like _bankAccount

// Inheritance
// Inheritance allows one class (child) to reuse the properties and methods of another class (parent), reducing duplication and promoting reusability. (Creating a new class from old one, Prototypes and shit)

// Polymorphism
// Polymorphism means "many forms" - it allows objects of different classes to be treated as if they are of the same type, but behave differently based on their class-specific implementations. Example, humans run, busines is run, my car run into tree,

// Composition
// Composition is a design principle where one class contains or is composed of one or more objects of other classes to reuse their functionality, instead of inheriting from them. Like, in a car we have fully functional objects like entartaiment system that can be changed on its own and it can wark outside the car too...
