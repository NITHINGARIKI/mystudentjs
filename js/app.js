////variable////

///classes///

const addExpenseForm = document.querySelector("#add-expense");

let budget, userBudget;

eventliseners();

function eventliseners() {
  document.addEventListener("DOMContentLoaded", function() {
    userBudget = prompt("what is your budget?");

    if (userBudget === "null" || userBudget === "" || userBudget === "0") {
      window.location.reload();
    }
  });

  addExpenseForm.eventliseners("submit", function(e) {
    e.preventDefault();
  });
}
