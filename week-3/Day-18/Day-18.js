function financeTracker() {
let balance = 0;

    return {
        addIncome: function(amount) {
            balance += amount;
        },
        addExpense: function(amount) {
            balance -= amount;
        },
        getBalance: function() {
            return balance;
        }
    };
}

const myFinances = financeTracker();
myFinances.addIncome(1000);
myFinances.addExpense(300);
myFinances.addExpense(50);
console.log(`Current Balance: $${myFinances.getBalance()}`);