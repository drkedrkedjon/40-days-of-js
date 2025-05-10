console.log("Day 06");

// function printMe() {
//   console.log("Print me...");
// }

// const printThis = function () {
//   console.log("Print This");
// };

// printMe();
// printThis();

// function calc(first, second, operandi = "+", ...rest) {
//   console.log(rest);
//   switch (operandi) {
//     case "+":
//       return first + second;
//     case "-":
//       return first - second;
//     case "*":
//       return first * second;
//     case "/":
//       return first / second;
//     default:
//       console.log("Invalid operator");
//   }
// }
// console.log(calc(10, 5, "+", 1, 2, 3, 4));
// console.log(calc(10, 5, "-"));
// console.log(calc(10, 5, "*"));
// console.log(calc(10, 5, "/"));

// function outer(a, b) {
//   const calc = a + b;
//   return function inner(multi) {
//     return calc * multi;
//   };
// }

// const inner = outer(2, 3);
// console.log(inner(10)); // 10

// function callback(a, b) {
//   return a + b;
// }

// Nested functions son una function dentro de la otra, para lo que sea
// Callback functions son functiones que se pasan como argumento a otra function y luego haces lo que quieres con ella
// Pure functiones son funciones que no tienen efectos secundarios, no modifican el estado de la aplicación y siempre devuelven el mismo resultado para los mismos argumentos
// Higher order function es una function que recibe una función como argumento (parecido a callback) o devuelve una función como resultado.
// IIEF es una function anonima que se ejecuta inmediatamente después de ser definida, no se puede llamar de nuevo, es una función que se ejecuta una vez y no se puede volver a ejecutar, es útil para ejecutar un plugin en navegador imediatamente.
// Recursion es una función que se llama a sí misma, es útil para resolver problemas que se pueden dividir en subproblemas más pequeños, como el factorial de un número o la serie de Fibonacci. Debe tener la salida por defecto (exit criteria), si no se tiene la salida por defecto, se puede caer en un bucle infinito y no se puede salir de él. Se recomienda usar un contador para evitar caer en un bucle infinito.

// Callback function
// function normal(callback, a, b) {
//   callback(a, b);
// }

// normal(callback, 10, 20);

// // pure function
// function noPura(a, b) {
//   // Function no pura
//   return a + b / Math.floor(Math.random() * 10);
//   // Function pura
//   return a + b / 2;
// }
// console.log(noPura(5, 8));

// // HO function

// function returnMyFunction(arg) {
//   return function (arg2) {
//     console.log("Hello " + arg + " " + arg2);
//   };
// }
// const myFunction = returnMyFunction("Pendejo");
// myFunction("Gonzales");

// // IIEF
// (function () {
//   console.log("Hello IIEF");
// })();

// // Recursion
// function apples(num) {
//   console.log(num);
//   if (num === 0) {
//     return 0;
//   } else {
//     return num + apples(num - 1);
//   }
// }
// console.log(apples(10));

// Ejercicios

function convert(temp, symbol) {
  if (symbol === "f") {
    return ((temp - 32) * 5) / 9;
  } else if (symbol === "c") {
    return (temp * 9) / 5 + 32;
  } else {
    return "Invalid symbol";
  }
}
console.log(convert(32, "f")); // 0
console.log(convert(0, "c")); // 32

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return "Los numeros son iguales";
  }
}

console.log(max(10, 20)); // 20
console.log(max(30, 10)); // 20
console.log(max(10, 10)); // Los numeros son iguales

function palindrom(word) {
  wordLowered = word.toLowerCase();
  const reversed = wordLowered.toString().split("").reverse().join("");
  console.log(reversed);
  console.log(reversed === wordLowered);
}

palindrom("ana"); // true
palindrom("HeLleh"); // false
palindrom("12321"); // true

function factorial(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5)); // 120
console.log(factorial(-5)); // 1

function vovels(word) {
  const vovels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const letter of word) {
    letterLowered = letter.toLowerCase();
    if (vovels.includes(letterLowered)) {
      count++;
    }
  }
  return count;
}

console.log(vovels("Hello")); // 2
console.log(vovels("Ana")); // 2
console.log(vovels("123")); // 0
console.log(vovels("aeiouaaaa")); // 5

function capitalise(sentence) {
  const splitSentence = sentence.split(" ");
  const result = splitSentence.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });

  return result.join(" ");
}

console.log(capitalise("hello baby I love you")); // Hello
