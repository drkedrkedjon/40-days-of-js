console.log("Day 05");

let number = 5;

for (let i = 1; i <= number; i++) {
  console.log(i);
}

while (number < 10) {
  console.log(number);
  number++;
}

do {
  console.log(number);
  number--;
} while (number >= 1);

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
  if (i === 7) break;
}

for (let row = 1; row <= 5; row++) {
  let stars = "";
  for (let col = 1; col <= row; col++) {
    stars += "* ";
  }
  console.log(stars.trim());
}

for (let i = 1; i <= 10; i++) {
  const number = 8;
  console.log(`${number} x ${i} = ${number * i}`);
}

const numbers = Array.from({ length: 500 }, (_, i) => i + 1);

let result = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) result += numbers[i];
}
console.log(result);

let numb = 123;
let reversed = 4;

while (numb > 0) {
  const digit = numb % 10;
  reversed = reversed * 10 + digit;
  numb = Math.floor(numb / 10);
}
console.log(reversed);
