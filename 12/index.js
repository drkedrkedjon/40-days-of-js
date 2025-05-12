console.log("Day 12");

const obj = {
  name: "sasa",
};

obj.name; // ver
obj.name = "Pepe"; // Cambiar
obj.age = 34; // Anadir
delete obj.age; // Borrar

obj["pinga tuya"] = 123; // Using special characters

const carModel = "Fiat 500";
const cuantity = 4;
const cars = {
  [carModel]: cuantity, // Asignar valores y llaves dinamicamente
};

console.log(cars);

// Constructors function

function Car(model, name) {
  this.model = model;
  this.name = name;
}

const myCar = new Car("Fiat 500", "Ficho");
const yourCar = new Car("e208", "Peugi");

console.log(myCar);

//  Otra forma de crear via method Object Constructor

const person = new Object();
person.name = "Sasa";
person.age = 33;
console.log(person);

//  Same via Factory Function and also adding functions and arrays and nested objects

function createFriend(name, age) {
  return {
    name,
    age,
    saludar() {
      console.log("Fuck " + this.name);
    },
    edad: function () {
      console.log("Fuck " + this.age);
    },
    hobbies: ["foto", "cycles", "skiing"],
    wife: {
      name: "Cathy",
      edad: 33,
    },
  };
}

const amigoUno = createFriend("Sasa", 55);
console.log(amigoUno);
amigoUno.edad();
amigoUno.saludar();
amigoUno.wife.name;

//  Check if property exist in object usin "in"
console.log("salary" in amigoUno); // false

//  Loop in object - For in Loop

for (let key in amigoUno) {
  if (key === "name") console.log(amigoUno[key]);
}

// Obtener todas las llaves, o values, o ambos(key:value) de un objeto en un array

const keyss = Object.keys(amigoUno);
console.log(keyss);

const valuess = Object.values(amigoUno);
console.log(valuess);
