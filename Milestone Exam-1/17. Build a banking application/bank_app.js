// 17. Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.

const customer = {
    name: 'Gopal',
    balance: 5000
  };
  
  // Function to deposit money into customer's account
  function deposit(amount) {
    customer.balance += amount;
    console.log(`Deposit of ${amount} successful. New balance is ${customer.balance}.`);
  }
  
  // Function to withdraw money from customer's account
  function withdraw(amount) {
    if (amount > customer.balance) {
      console.log('Insufficient funds!');
    } else {
      customer.balance -= amount;
      console.log(`Withdrawal of ${amount} successful. New balance is ${customer.balance}.`);
    }
  }
  
  
  deposit(1000); // Deposit of 1000 successful. New balance is 6000.
  withdraw(2000); // Withdrawal of 2000 successful. New balance is 4000.
  withdraw(5000); // Insufficient funds!