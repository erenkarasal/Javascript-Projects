/* Get Dates */
var date = new Date();
var day = date.getDay();
var month = date.getUTCMonth();
var year = date.getFullYear();

/* Remove first item from list default html elements */
const remove = document.getElementsByClassName('rmvItem');
for (var j = 0; j < remove.length; j++) {
    remove[j].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
/* Calculate the income, expense and balance */
var incomeBudget = document.getElementById("incomeBudget");
var expenseBudget = document.getElementById("expenseBudget");
var balanceBudget = document.getElementById("balanceBudget");



/* Adding list to income budgets */
function addList() {
    
    const inputDesc = document.getElementById("inputDesc").value;
    const howMuch = document.getElementById("inputMoney").value;
    /* console.log(incomeBudget.innerHTML);
    console.log(expenseBudget.innerHTML);
    console.log(balanceBudget.innerHTML); */
    const container_list = document.getElementById("container-list");
    const listItem = document.createElement("div");
    listItem.className = "listItem";
    const iElement = document.createElement("i");
    iElement.className = "far fa-window-close";
    container_list.appendChild(listItem);


    for (var i = 0; i <= 3; i++) {
        const listSpan = document.createElement("span");
        listItem.append(listSpan);
        if (i == 0) {
            listSpan.innerHTML += day + "/" + month + "/" + year;
        }
        else if (i == 1) {
            listSpan.className = "h3";
            listSpan.innerHTML += inputDesc;
        }
        else if (i == 2) {
            listSpan.innerHTML += "$ " + howMuch;
            inBudgetObj.push(howMuch);
            console.log(inBudgetObj);
        }
        else if (i == 3) {
            listSpan.className = "rmvItem";
            listSpan.append(iElement);
            listSpan.innerHTML += "";

        }
        else {

            continue;
        }
    }

    
    /* Removing from added income elements */
    const remove = document.getElementsByClassName('rmvItem');
    for (var j = 0; j < remove.length; j++) {
        remove[j].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

/* Adding list to expense elements */
function addListExpense() {
    const inputDescExpense = document.getElementById("inputDescExpense").value;
   // console.log(inputDescExpense);
    const inputMoneyExpense = document.getElementById("inputMoneyExpense").value;
    //console.log(inputMoneyExpense);
    const container_list = document.getElementById("container-list");
    const listItem = document.createElement("div");
    listItem.className = "listItemRed";
    const iElement = document.createElement("i");
    iElement.className = "far fa-window-close";
    container_list.appendChild(listItem);


    for (var i = 0; i <= 3; i++) {
        const listSpan = document.createElement("span");
        listItem.append(listSpan);
        if (i == 0) {
            listSpan.innerHTML += day + "/" + month + "/" + year;
        }
        else if (i == 1) {
            listSpan.className = "h3";
            listSpan.innerHTML += inputDescExpense;
        }
        else if (i == 2) {
            listSpan.innerHTML += "$ " + inputMoneyExpense;
            exBudgetObj.push(inputMoneyExpense);
            console.log(exBudgetObj);
        }
        else if (i == 3) {
            listSpan.className = "rmvItem";
            listSpan.append(iElement);
            listSpan.innerHTML += "";

        }
        else {

            continue;
        }
    }

    /* Removing from added expense elements */
    const remove = document.getElementsByClassName('rmvItem');
    for (var j = 0; j < remove.length; j++) {
        remove[j].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
