"use strict";
// Es sobre debuging pero lo uso para el proyecto de expences tracking

function createExpenseTracker(userName, initBudget) {
  let user = {
    name: userName,
    budget: initBudget,
  };
  let expenses = [];
  let nextId = 1;

  return {
    showAllExpenses() {
      if (expenses.length === 0) {
        console.log("No expenses recorded.");
        return;
      }
      expenses.forEach((expense) => {
        console.log(expense);
      });
    },

    addExpense(amount, category, description) {
      expenses.push({
        id: nextId++,
        amount,
        category,
        description,
      });
    },

    removeExpense(id) {
      if (expenses.length === 0) {
        console.log("No expenses recorded.");
        return;
      }
      expenses = expenses.filter((expense) => expense.id !== id);
      this.showAllExpenses();
    },

    updateExpense(id, amount, category = "", description = "") {
      if (expenses.length === 0) {
        console.log("No expenses recorded.");
        return;
      }
      if (typeof amount !== "number" || typeof id === "undefined") {
        console.log("Need id AND Amount idiot");
        return;
      }
      const findExpence = expenses.find((expence) => expence.id === id);
      findExpence.amount = amount;
      if (category !== "") findExpence.category = category;
      if (description !== "") findExpence.description = description;

      this.showAllExpenses();
    },

    totalEspenses() {
      if (expenses.length === 0) {
        console.log("No expenses recorded.");
        return;
      }
      let total = 0;
      expenses.forEach((expense) => {
        total += expense.amount;
      });
      console.log(`Total expences are: ${total}€`);
    },

    expensesByCategory(category) {
      if (expenses.length === 0) {
        console.log("No expenses recorded.");
        return;
      }
      let total = 0;
      const existeCat = expenses.some(
        (expense) => expense.category === category
      );
      console.log(existeCat);
      if (existeCat === false) {
        console.log("Non existant category");
        return;
      }
      expenses.forEach((expense) => {
        if (expense.category === category) {
          total += expense.amount;
        }
      });
      console.log(`Total ampount for ${category}: ${total}€`);
    },

    highestExpence() {
      if (expenses.length === 0) {
        console.log("No expenses recorded.");
        return;
      }
      let temp = -Infinity;
      expenses.forEach((expense) => {
        if (expense.amount > temp) {
          temp = expense.amount;
        }
      });

      const expense = expenses.find((expense) => expense.amount === temp);

      console.log(
        `Highest expense is: ${temp} for: ${expense.description} in ${expense.category} category.`
      );
    },

    lowestExpence() {
      if (expenses.length === 0) {
        console.log("No expenses recorded.");
        return;
      }
      let temp = Infinity;
      expenses.forEach((expense) => {
        if (expense.amount < temp) {
          temp = expense.amount;
        }
      });

      const expense = expenses.find((expense) => expense.amount === temp);

      console.log(
        `Lowest expense is: ${temp} for: ${expense.description} in ${expense.category} category.`
      );
    },
  };
}

const sasa = createExpenseTracker("Sasa", 1000);
sasa.addExpense(100, "Food", "Lunch");
sasa.addExpense(150, "Food", "Dinner");
sasa.addExpense(50, "Fiesta", "Alcohol");
sasa.addExpense(1245, "Coches", "Taller");
sasa.showAllExpenses();
sasa.removeExpense(2);
sasa.updateExpense();
sasa.updateExpense(4, 345);
sasa.updateExpense(4, 345, "Books", "Space 2000");
sasa.totalEspenses();
sasa.expensesByCategory("Food");
sasa.highestExpence();
sasa.lowestExpence();
