////classes///

class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.budgetleft = this.budget;
  }
}

class HTML {
  insertBudget(amount) {
    hmtl.insertBudget(budget.budget);
    budgetTotal.innerHTML = `${amount}`;
    budgetLeft.innerHTML = `${amount}`;
  }
}

////variables///

const addExpenseForm = document.querySelector("#expense-form");
budgetTotal = document.querySelector("span#total");
budgetleft = document.querySelector("span#left");

let budget, userBudget;

/////eventlistners///

eventlistners();

function eventlistners() {
  document.addEventListener("DOMContentLoaded", function() {
    userBudget = prompt("what is your budget?");
    if (userBudget === "null" || userBudget === "" || userBudget === "0") {
      window.location.reload();

      budget = new Budget(userBudget);
      html = new Html();
      html.insertBudget(budget);
    }
  });

  addExpenseForm.addEventListener("submit", function(e) {
    e.preventDefault();
  });
}
