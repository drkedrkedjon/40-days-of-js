console.log("Day 03");

console.log(23 % 4);

console.log(true && false && "Sasa" && "888");
console.log((true && false) || ("Sasa" && "888") || false);

const odd = 8 % 3 === 0 ? "pair" : "odd";
console.log(odd);

const age = 35;

console.log(age >= 18);

console.log((12300 + (12300 / 100) * 20) * 12);

const color = "green";
console.log(color === "red" ? "STOP" : "GO");

const units = 35;
const year = units * 150 * 12;
const discYear = year - (year / 100) * 20;
console.log(discYear);

const year1 = 2400;
const leap1 = (year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0;
console.log(leap1);

const a = 20;
const b = 16;
const c = 25;

const sasa = a > b ? (a > c ? a : c) : b > c ? b : c;

console.log(sasa);
