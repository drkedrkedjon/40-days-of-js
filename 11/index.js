console.log("Day 11");

// CLOSURES

function outer(input) {
  let numb = input;

  return function inner(input) {
    console.log(numb++ * input);
  };
}

const inner = outer(5);
inner(5);
inner(5);

function bank(initialValue) {
  balance = initialValue;

  return {
    status: () => {
      return balance;
    },
    deposit: (deposit) => {
      balance += deposit;
      return balance;
    },
    draw: (deposit) => {
      balance -= deposit;
      return balance;
    },
  };
}

const myAccount = bank(1000);

console.log(myAccount.status());
console.log(myAccount.deposit(400));
console.log(myAccount.draw(400));
console.log(myAccount.draw(400));
console.log(myAccount.draw(400));
console.log(myAccount.draw(400));
