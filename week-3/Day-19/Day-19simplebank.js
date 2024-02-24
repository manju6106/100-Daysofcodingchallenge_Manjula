class BankAccount {
    constructor(accountNumber) {
      this.accountNumber = accountNumber;
      let balance = 0; 
  
      this.getBalance = function() { 
        return balance;
      };
  
      this.deposit = function(amount) {
        balance += amount;
      };
  
      this.withdraw = function(amount) {
        if (amount <= balance) {
          balance -= amount;
        } else {
          console.log('Insufficient balance.');
        }
      };
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, interestRate) {
      super(accountNumber);
      this.interestRate = interestRate;
    }
  
    withdraw(amount) {
      if (amount > 1000) {
        console.log('You cannot withdraw more than 1000 at a time from a savings account.');
      } else {
        super.withdraw(amount);
      }
    }
  }
  
  let myAccount = new SavingsAccount('123456', 0.03);

// Deposit money
myAccount.deposit(2000);
console.log(`Current Balance after deposit: ${myAccount.getBalance()}`);
// Withdraw money
myAccount.withdraw(500); 
console.log(`Current Balance after withdrawal: ${myAccount.getBalance()}`); 
// Attempt to withdraw more than the limit
myAccount.withdraw(1400); 
console.log(`Current Balance after attempted withdrawal: ${myAccount.getBalance()}`);