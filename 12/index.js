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

const entreess = Object.entries(amigoUno);
console.log(entreess);

// Create object from Map like array or plain array
const entries = [
  ["name", "Sasa"],
  ["Age", 66],
];
const objFromEntrees = Object.fromEntries(entries);
console.log(objFromEntrees);

const source = { a: 1, b: 2, e: { inner: 1 } };
const target = { c: 3, d: 4 };

// Shallow clone of an object
const newObj = Object.assign(target, source);
console.log(newObj === target);

// Deep clone of an object
const deepObj = structuredClone(newObj);
console.log(deepObj === newObj);

// Freeze method, will freeze everything
Object.freeze(objFromEntrees);
Object.isFrozen(objFromEntrees); // true/false

// Object.seal will permit reassigning of properties but will not allow adding new or removing old ones.
Object.seal(objFromEntrees);
Object.isSealed(objFromEntrees); // true/false

// Object.hasOwn() return true or false if propertu exist
Object.hasOwn(objFromEntrees, "name");

// Destructuring
const myObj1 = {
  names: "Sasa",
  age: 34,
  address: {
    cp: 23990,
  },
};

const {
  age, // Plain one
  names: nombres, // Aliases on destructuring
  address: { cp }, // Nested destructuring
  member = false, // Adding new property is possible inside destructuring
} = myObj1;

console.log(nombres, cp, member, age);

// Destructuring in function paramaters
function getZipCode({ address: { cp } }) {
  console.log(cp);
}
getZipCode(myObj1);

// Destructuring as function return
function sasa() {
  return {
    nombre: "Sasavic",
  };
}
const { nombre: miNombre } = sasa();
console.log(miNombre);

// Destructuring in loop

const students = [
  { name: "Sasa", age: 34 },
  { name: "Sasavko", age: 24 },
  { name: "Saaaaasa", age: 56 },
];

for (let { name, age } of students) {
  console.log(name, age);
}

// Optional chaining
// console.log(myObj1.addresses.huhu); // Adresses does not exist
console.log(myObj1.addresses?.huhu);

// -----tasks

const student = {
  name: "Sasa",
  age: 23,
  grades: [3, 5, 7, 6, 8, 7, 9, 4],
  mediumGrade: function () {
    let sum = 0;
    this.grades.forEach((grade) => (sum += grade));
    return sum;
  },
};

console.log(student.mediumGrade());
