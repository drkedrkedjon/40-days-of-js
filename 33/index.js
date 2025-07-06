"use strict";
// Map data structure in JS - similar to Object
// Key can be of any value (not just string and symbol like in regular object)
// Map remember the order by which elements are added to it. So it is like mix of object + array somehow...

// Create and add valores al Map a la hora de crearlo...
const map = new Map([
  ["name", "Sasa"],
  ["age", "58"],
  ["place", "Bilbao"],
]);
console.log(map);

// Anadir valores despues de crearlo...
// No puede tener duplicatos, si haces .set() con el mismo KEY se sobrescribira el antiguo
const map1 = new Map();

map1.set("Color", "Blue");
map1.set("Culo", "Pink");
map1.set("Culo", "Green");
console.log(map1);

// Get propertie value from Map
console.log(map1.get("Culo"));

// Map keys
// Ma0 key can be any data
const funMap = new Map();
funMap.set(560, "My room number");
funMap.set(true, "Married status");
funMap.set({ name: "Sasa" }, true);
console.log(funMap);

// Metods of Map

console.log(funMap.size);
console.log(funMap.has(560));
funMap.delete(560);
console.log(funMap);
funMap.set(560, "My room number");
// funMap.clear();
// console.log(funMap);

// MapIterator: keys, values & entries. It works almost the same as Object.keys()...

console.log(funMap.keys());
console.log(funMap.values());
console.log(funMap.entries());

const entries = funMap.entries();

entries.forEach((element) => {
  console.log(element);
});

// Loop over Map

// VALUE, KEY
funMap.forEach((value, key) =>
  console.log(`Key ${key}, with folowing ${value} value.`)
);

// KEY, VALUE
for (const [key, value] of funMap) {
  console.log(`Key ${key}, with folowing ${value} value.`);
}

// Conversion from MAP to objects and arrays
const address = {
  Tapas: "Bangalore",
  James: "Hjuston",
  Selva: "Srilanca",
};

// Object to Map
const mapFromObject = new Map(Object.entries(address));
console.log(mapFromObject);

// Map to Object
const objectFromMap = Object.fromEntries(mapFromObject);
console.log(objectFromMap);

// Mat to an Array
console.log(Array.from(funMap));
console.log([...funMap]);

// Map vs. object
// If you need the key to be something else then string
// If you need items to be ordered always
// Have more methods to manipulate and extract data from Map
// If you do not need any of those, use object.

// -----------------------------------------------

// NOW TO SET
// SET is a colecton of unique elements, eny elements - most important
// In a sence it is similar to array pero su prototipo es Object
// Cuando se crea se le puede pasar los elementos /

const mySet = new Set([true, {}, [], "Sasa"]);
console.log(mySet);

// Tiene los mismos metodos como Map
console.log(mySet.size);
mySet.add("Pinga", "Papa");

console.log(mySet);

// No se pueden anadir los elementos duplicados
mySet.add(true); // No pasara nada, no se anadira el segundo true.

console.log(mySet.has(true));
console.log(mySet.has(false));
mySet.delete(true);
mySet.clear();
console.log(mySet);

// Itrate ower set()
const houseNum = new Set([123, 234, 564]).values();
console.log(houseNum);
houseNum.forEach((val) => {
  console.log(val);
});

// Use Set ower array if you need to have colection of unique elements. Also some methods like delete() are much faster then Splice, Slice and so on...

// Convertion - Set to array - use spread operator
const convert = [...houseNum];
console.log(convert);

// Array to Set
const numbeeers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 5, 5, 5, 3, 3, 3, 4];
const noDup = new Set(numbeeers);
console.log([...noDup]);

// Union, intersection y diference methods on Set - cool
const first = new Set([1, 2, 3]);
const second = new Set([3, 4, 5]);

const union = first.union(second);
const intersect = first.intersection(second);
const difference = first.difference(second);
console.log(union);
console.log(intersect);
console.log(difference);

// Superset
const first1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const second1 = new Set([3, 4, 5]);

console.log(first1.isSupersetOf(second1));
