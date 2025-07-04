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
