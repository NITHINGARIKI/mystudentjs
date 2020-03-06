//////classes////

class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.budgetLeft = this.budget;
  }
  substractFromBudget(amount) {
    return (this.budgetLeft -= amount);
  }
}
class HTML {
  insertBudget(amount) {
    budgetTotal.innerHTML = `${amount}`;
    budgetLeft.innerHTML = `${amount}`;
  }
  printMessage(message, className) {
    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("text-center", "alert", className);
    messageWrapper.appendChild(document.createTextNode(message));

    ////////print in the html//

    document
      .querySelector(".primary")
      .insertBefore(messageWrapper, addExpenseForm);

    setTimeout(() => {
      document.querySelector(".primary .alert").remove();
      addExpenseForm.reset();
    }, 3000);
  }

  addExpensetoList(name, amount) {
    const expenselist = document.querySelector("#expenses ul");

    const li = document.createElement("li");

    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
           ${name} 
           <span class = "badge badge-primary badge-pill">${amount}</span>

        `;
    expenselist.appendChild(li);
  }
  trackBudget(amount) {
    const budgetLeftDollars = budget.substractFromBudget(amount);
    budgetLeft.innerHTML = `${budgetLeftDollars}`;
    if (budget.budget / 4 > budgetLeftDollars) {
      budgetLeft.parentElement.parentElement.classList.remove(
        "alert-success",
        "alert-warning"
      );
      budgetLeft.parentElement.parentElement.classList.add("alert-danger");
    } else if (budget.budget / 2 > budgetLeftDollars) {
      budgetLeft.parentElement.parentElement.classList.remove("alert-success");
      budgetLeft.parentElement.parentElement.classList.add("alert-warning");
    }
  }
}

////varibles/////
var addExpenseForm = document.querySelector("#add-expense");
budgetTotal = document.querySelector("span#total");
budgetLeft = document.querySelector("span#left");

let budget, userBudget;

const html = new HTML();
//////event listners////

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", function() {
    userBudget = prompt("whats your budget?");

    if (userBudget === "0" || userBudget === "") {
      window.location.reload();
    } else {
      budget = new Budget(userBudget);
      html.insertBudget(budget.budget);
    }
  });
  addExpenseForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const expenseName = document.querySelector("#expense").value;
    const amount = document.querySelector("#amount").value;

    if (expenseName === "" || amount === "") {
      html.printMessage("OOPSS...All the fields are manditory", "alert-danger");
    } else {
      html.addExpensetoList(expenseName, amount);
      html.trackBudget(amount);
      html.printMessage("added...", "alert-success");
    }
  });
}
